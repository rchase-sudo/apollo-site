import { useEffect, useRef } from "react"
// @ts-ignore — Framer resolves URL imports
import * as THREE_NS from "https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.min.js"

/* =====================================================================
   ApolloScene — shared 3D scroll scene for apollodevelopment.io pages.

   - Sticky full-viewport WebGL canvas that sits behind the page content.
   - Camera flies a scripted path driven by scroll progress through the
     parent element: aerial → low pass → orbit → straight-down plan view.
   - Terrain of points (brand gradient) that starts as rolling ground and
     settles flat into a grid as the page reaches pricing — "raw land to
     a finished system".
   - three.js loaded via a URL import from jsDelivr.
     If it fails or WebGL is unavailable, a static gradient fallback shows.
   - Respects prefers-reduced-motion, pauses off-screen / in hidden tabs,
     re-reads colors when light/dark mode changes.

   ===================================================================== */

const SCENE_CSS = `
  .ap3d-stage{
    position:sticky; top:0; height:100vh; margin-bottom:-100vh;
    pointer-events:none; z-index:0; overflow:hidden;
  }
  .ap3d-stage canvas{width:100%; height:100%; display:block; opacity:0; transition:opacity 1.2s ease;}
  .ap3d-stage.ready canvas{opacity:var(--ap3d-opacity,.55);}
  .ap3d-stage .ap3d-veil{
    position:absolute; inset:0;
    background:
      radial-gradient(120% 70% at 50% 0%, transparent 35%, var(--ap3d-bg) 100%),
      linear-gradient(90deg, color-mix(in srgb, var(--ap3d-bg) 55%, transparent) 0%, transparent 45%);
  }
  .ap3d-stage.is-fallback{
    background:
      radial-gradient(55% 45% at 85% 8%, color-mix(in srgb, var(--ap3d-mint) 16%, transparent), transparent),
      radial-gradient(45% 40% at 8% 55%, color-mix(in srgb, var(--ap3d-violet) 10%, transparent), transparent);
  }
  .ap3d-content{position:relative; z-index:1; overflow-x:clip;}

  [data-reveal]{
    opacity:0;
    transform:perspective(1400px) translateY(56px) rotateX(9deg);
    transform-origin:50% 0;
    transition:opacity .9s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1);
  }
  [data-reveal].in{opacity:1; transform:none;}
  @media (prefers-reduced-motion: reduce){
    [data-reveal]{opacity:1!important; transform:none!important; transition:none!important;}
  }
`

/* Adds .in to [data-reveal] elements inside root as they scroll into view. */
function useReveal(rootRef: { current: HTMLElement | null }) {
    useEffect(() => {
        const root = rootRef.current
        if (!root) return
        const els = Array.from(root.querySelectorAll("[data-reveal]"))
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("in"))
            return
        }
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((en) => {
                    if (en.isIntersecting) {
                        en.target.classList.add("in")
                        io.unobserve(en.target)
                    }
                }),
            { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (e0: number, e1: number, x: number) => {
    const t = clamp((x - e0) / (e1 - e0))
    return t * t * (3 - 2 * t)
}

/* Camera path keyed to scroll progress (0 → 1). */
const KEYS = [
    { p: 0.0, pos: [0, 19, 34], look: [0, 0, 0] },
    { p: 0.22, pos: [23, 9, 19], look: [0, 1, 0] },
    { p: 0.46, pos: [6, 7, 24], look: [-2, 2, -4] },
    { p: 0.72, pos: [-21, 12, 12], look: [0, 0, 0] },
    { p: 1.0, pos: [0, 42, 0.01], look: [0, 0, 0] },
]

type Props = { prefix: string; opacity?: number; intensity?: number }

function ApolloScene({ prefix, opacity = 0.55, intensity = 1 }: Props) {
    const stageRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const stage = stageRef.current
        const canvas = canvasRef.current
        if (!stage || !canvas || !stage.parentElement) return
        const host = stage.parentElement as HTMLElement
        let cancelled = false
        let cleanup = () => {}
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        ;(async () => {
            const THREE: any = THREE_NS
            if (!THREE || !THREE.WebGLRenderer) {
                stage.classList.add("is-fallback")
                return
            }
            if (cancelled) return

            let renderer: any
            try {
                renderer = new THREE.WebGLRenderer({
                    canvas,
                    antialias: true,
                    alpha: true,
                    powerPreference: "low-power",
                })
            } catch {
                stage.classList.add("is-fallback")
                return
            }

            const small = window.innerWidth < 720
            renderer.setPixelRatio(
                Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75)
            )
            renderer.setClearColor(0x000000, 0)

            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200)

            /* ---------- terrain (points) ---------- */
            const SIZE = 64
            const SEG = small ? 80 : 130
            const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG)
            geo.rotateX(-Math.PI / 2)
            const pos = geo.attributes.position
            const count = pos.count
            const bx = new Float32Array(count)
            const bz = new Float32Array(count)
            for (let i = 0; i < count; i++) {
                bx[i] = pos.getX(i)
                bz[i] = pos.getZ(i)
            }
            const colors = new Float32Array(count * 3)
            geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
            const pointsMat = new THREE.PointsMaterial({
                size: small ? 0.15 : 0.11,
                vertexColors: true,
                transparent: true,
                opacity: 0.95,
                depthWrite: false,
            })
            scene.add(new THREE.Points(geo, pointsMat))

            const height = (x: number, z: number, t: number, amp: number) =>
                amp *
                (1.3 *
                    Math.sin(x * 0.16 + t * 0.35) *
                    Math.cos(z * 0.14 - t * 0.25) +
                    0.55 * Math.sin((x - z) * 0.3 + t * 0.5) +
                    0.25 * Math.cos(Math.hypot(x, z) * 0.45 - t * 0.8))

            /* ---------- nodes + links (the "system") ---------- */
            const N = 9
            const nodeMat = new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.8,
            })
            const nodeGeo = new THREE.SphereGeometry(0.18, 14, 14)
            const nodes: any[] = []
            const nodeBase: { x: number; z: number; y: number; ph: number }[] =
                []
            for (let i = 0; i < N; i++) {
                const a = (i / N) * Math.PI * 2
                const r = 9 + (i % 3) * 3.2
                nodeBase.push({
                    x: Math.cos(a) * r,
                    z: Math.sin(a) * r,
                    y: 2.4 + (i % 2) * 1.4,
                    ph: i * 1.7,
                })
                const m = new THREE.Mesh(nodeGeo, nodeMat)
                nodes.push(m)
                scene.add(m)
            }
            const hub = new THREE.Mesh(
                new THREE.SphereGeometry(0.38, 20, 20),
                nodeMat
            )
            scene.add(hub)

            const linkPos = new Float32Array(N * 2 * 2 * 3)
            const linkGeo = new THREE.BufferGeometry()
            linkGeo.setAttribute(
                "position",
                new THREE.BufferAttribute(linkPos, 3)
            )
            const lineMat = new THREE.LineBasicMaterial({
                transparent: true,
                opacity: 0.45,
            })
            scene.add(new THREE.LineSegments(linkGeo, lineMat))

            /* ---------- orbit rings around the hub ---------- */
            const ringMat = new THREE.LineBasicMaterial({
                transparent: true,
                opacity: 0.4,
            })
            const ringPts = (r: number) => {
                const pts = []
                for (let i = 0; i < 128; i++) {
                    const a = (i / 128) * Math.PI * 2
                    pts.push(
                        new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)
                    )
                }
                return new THREE.BufferGeometry().setFromPoints(pts)
            }
            const ringA = new THREE.LineLoop(ringPts(3.2), ringMat)
            const ringB = new THREE.LineLoop(ringPts(4.6), ringMat)
            scene.add(ringA, ringB)

            /* ---------- palette from CSS vars ---------- */
            const applyPalette = () => {
                const cs = getComputedStyle(host)
                const col = (n: string, fb: string) =>
                    new THREE.Color(
                        (cs.getPropertyValue(prefix + n) || fb).trim() || fb
                    )
                const mint = col("mint", "#0FAE7B")
                const violet = col("violet", "#B62AA6")
                const amber = col("amber", "#C77417")
                const c = new THREE.Color()
                for (let i = 0; i < count; i++) {
                    const t = clamp(
                        (bx[i] + bz[i] * 0.45) / (SIZE * 0.95) + 0.5
                    )
                    if (t < 0.5) c.copy(mint).lerp(violet, t * 2)
                    else c.copy(violet).lerp(amber, (t - 0.5) * 2)
                    colors[i * 3] = c.r
                    colors[i * 3 + 1] = c.g
                    colors[i * 3 + 2] = c.b
                }
                geo.attributes.color.needsUpdate = true
                nodeMat.color.copy(mint)
                lineMat.color.copy(violet)
                ringMat.color.copy(amber)
                dirty = true
            }

            /* ---------- sizing ---------- */
            const resize = () => {
                const w = stage.clientWidth || window.innerWidth
                const h = stage.clientHeight || window.innerHeight
                renderer.setSize(w, h, false)
                camera.aspect = w / h
                camera.fov = w < 720 ? 62 : 50
                camera.updateProjectionMatrix()
                dirty = true
            }

            /* ---------- scroll + pointer ---------- */
            const progress = () => {
                const r = host.getBoundingClientRect()
                const span = r.height - window.innerHeight
                return span > 0 ? clamp(-r.top / span) : 0
            }
            let mx = 0,
                my = 0,
                smx = 0,
                smy = 0
            const onPointer = (e: PointerEvent) => {
                mx = e.clientX / window.innerWidth - 0.5
                my = e.clientY / window.innerHeight - 0.5
            }

            let dirty = true
            let ps = progress()
            let raf = 0
            const t0 = performance.now()
            const camPos = new THREE.Vector3()
            const look = new THREE.Vector3()

            const placeCamera = (p: number) => {
                let k = 0
                while (k < KEYS.length - 2 && p > KEYS[k + 1].p) k++
                const a = KEYS[k],
                    b = KEYS[k + 1]
                const f = smooth(0, 1, (p - a.p) / (b.p - a.p))
                camPos.set(
                    a.pos[0] + (b.pos[0] - a.pos[0]) * f + smx * 4,
                    a.pos[1] + (b.pos[1] - a.pos[1]) * f - smy * 2.5,
                    a.pos[2] + (b.pos[2] - a.pos[2]) * f
                )
                look.set(
                    a.look[0] + (b.look[0] - a.look[0]) * f,
                    a.look[1] + (b.look[1] - a.look[1]) * f,
                    a.look[2] + (b.look[2] - a.look[2]) * f
                )
                camera.position.copy(camPos)
                camera.lookAt(look)
            }

            let first = true
            const frame = (now: number) => {
                raf = requestAnimationFrame(frame)
                if (document.hidden) return
                const r = host.getBoundingClientRect()
                if (r.bottom < 0 || r.top > window.innerHeight) return

                const target = progress()
                const moving =
                    Math.abs(target - ps) > 1e-4 ||
                    Math.abs(mx - smx) > 1e-3 ||
                    Math.abs(my - smy) > 1e-3
                if (reduce && !moving && !dirty) return

                ps += (target - ps) * (reduce ? 1 : 0.07)
                smx += (mx - smx) * 0.05
                smy += (my - smy) * 0.05
                const t = reduce ? 0 : (now - t0) / 1000

                // rolling ground early, settles to a flat grid near pricing
                const amp = (1.6 - 1.48 * smooth(0.6, 0.9, ps)) * intensity
                for (let i = 0; i < count; i++)
                    pos.setY(i, height(bx[i], bz[i], t, amp))
                pos.needsUpdate = true

                const lift =
                    2.5 * smooth(0.12, 0.45, ps) - 1.5 * smooth(0.75, 1, ps)
                const hubY = 4 + lift
                hub.position.set(0, hubY + Math.sin(t * 0.9) * 0.25, 0)
                ringA.position.copy(hub.position)
                ringB.position.copy(hub.position)
                ringA.rotation.set(0.5 + t * 0.2, t * 0.3, 0)
                ringB.rotation.set(-0.4, -t * 0.22, 0.6 + t * 0.15)

                let li = 0
                for (let i = 0; i < N; i++) {
                    const nb = nodeBase[i]
                    const y =
                        height(nb.x, nb.z, t, amp) +
                        nb.y +
                        lift +
                        Math.sin(t * 1.1 + nb.ph) * 0.3
                    nodes[i].position.set(nb.x, y, nb.z)
                }
                for (let i = 0; i < N; i++) {
                    const a = nodes[i].position
                    const b = nodes[(i + 1) % N].position
                    const h = hub.position
                    linkPos.set(
                        [
                            a.x,
                            a.y,
                            a.z,
                            b.x,
                            b.y,
                            b.z,
                            a.x,
                            a.y,
                            a.z,
                            h.x,
                            h.y,
                            h.z,
                        ],
                        li
                    )
                    li += 12
                }
                linkGeo.attributes.position.needsUpdate = true

                placeCamera(ps)
                renderer.render(scene, camera)
                dirty = false
                if (first) {
                    first = false
                    stage.classList.add("ready")
                }
            }

            const ro = new ResizeObserver(resize)
            ro.observe(stage)
            const mq = window.matchMedia("(prefers-color-scheme: dark)")
            mq.addEventListener("change", applyPalette)
            const mo = new MutationObserver(applyPalette)
            mo.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["data-theme", "class"],
            })
            if (!reduce)
                window.addEventListener("pointermove", onPointer, {
                    passive: true,
                })

            resize()
            applyPalette()
            raf = requestAnimationFrame(frame)

            cleanup = () => {
                cancelAnimationFrame(raf)
                ro.disconnect()
                mo.disconnect()
                mq.removeEventListener("change", applyPalette)
                window.removeEventListener("pointermove", onPointer)
                geo.dispose()
                pointsMat.dispose()
                nodeGeo.dispose()
                hub.geometry.dispose()
                nodeMat.dispose()
                linkGeo.dispose()
                lineMat.dispose()
                ringA.geometry.dispose()
                ringB.geometry.dispose()
                ringMat.dispose()
                renderer.dispose()
            }
            if (cancelled) cleanup()
        })()

        return () => {
            cancelled = true
            cleanup()
        }
    }, [prefix, intensity])

    const vars: any = {
        "--ap3d-bg": `var(${prefix}bg)`,
        "--ap3d-mint": `var(${prefix}mint)`,
        "--ap3d-violet": `var(${prefix}violet)`,
        "--ap3d-opacity": opacity,
    }

    return (
        <div
            ref={stageRef}
            className="ap3d-stage"
            style={vars}
            aria-hidden="true"
        >
            <canvas ref={canvasRef} />
            <div className="ap3d-veil" />
        </div>
    )
}

/* -------------------- FONTS -------------------- */
function useApolloFonts() {
    useEffect(() => {
        const id = "apollo-deck-fonts"
        if (!document.getElementById(id)) {
            const link = document.createElement("link")
            link.id = id
            link.rel = "stylesheet"
            link.href =
                "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
            document.head.appendChild(link)
        }
    }, [])
}

/* Click-to-load embeds: a poster button with data-embed-src swaps itself for an
   iframe, so the heavy 3D demo only loads when asked and doesn't steal scroll. */
function useClickEmbeds(rootRef: { current: HTMLElement | null }) {
    useEffect(() => {
        const root = rootRef.current
        if (!root) return
        const onClick = (e: Event) => {
            const btn = (e.target as HTMLElement).closest(
                "[data-embed-src]"
            ) as HTMLElement | null
            if (!btn) return
            const frame = document.createElement("iframe")
            frame.src = btn.getAttribute("data-embed-src") || ""
            frame.title =
                btn.getAttribute("data-embed-title") || "Embedded demo"
            frame.className = "embed-frame"
            frame.allow = "fullscreen; accelerometer; gyroscope"
            btn.replaceWith(frame)
        }
        root.addEventListener("click", onClick)
        return () => root.removeEventListener("click", onClick)
    }, [])
}

/* -------------------- STYLES -------------------- */
const CSS = `
  :root{
    --apollo-bg:#F4F7F6;
    --apollo-surface:#FFFFFF;
    --apollo-surface-2:#EAF1EF;
    --apollo-line:#D7E2DF;
    --apollo-text:#0E1513;
    --apollo-text-soft:#4B5C58;
    --apollo-text-faint:#7C8E8A;
    --apollo-mint:#0FAE7B;
    --apollo-violet:#B62AA6;
    --apollo-amber:#C77417;
    --apollo-shadow: 0 1px 2px rgba(14,21,19,.06), 0 18px 40px -22px rgba(14,21,19,.18);
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --apollo-bg:#0A0E11;
      --apollo-surface:#12181C;
      --apollo-surface-2:#1B2227;
      --apollo-line:#26333A;
      --apollo-text:#EDF2F1;
      --apollo-text-soft:#9FB0AE;
      --apollo-text-faint:#5C6D6B;
      --apollo-mint:#29E8A6;
      --apollo-violet:#E24FD0;
      --apollo-amber:#FFA53D;
      --apollo-shadow: 0 1px 2px rgba(0,0,0,.5), 0 24px 60px -24px rgba(0,0,0,.75);
    }
  }
  :root[data-theme="dark"]{
    --apollo-bg:#0A0E11;
    --apollo-surface:#12181C;
    --apollo-surface-2:#1B2227;
    --apollo-line:#26333A;
    --apollo-text:#EDF2F1;
    --apollo-text-soft:#9FB0AE;
    --apollo-text-faint:#5C6D6B;
    --apollo-mint:#29E8A6;
    --apollo-violet:#E24FD0;
    --apollo-amber:#FFA53D;
    --apollo-shadow: 0 1px 2px rgba(0,0,0,.5), 0 24px 60px -24px rgba(0,0,0,.75);
  }

  .apollo-deck *{box-sizing:border-box;}
  .apollo-deck{scroll-behavior:smooth;}
  .apollo-deck{
    background:var(--apollo-bg);
    color:var(--apollo-text);
    font-family:'Figtree', system-ui, -apple-system, sans-serif;
    font-size:16px;
    line-height:1.6;
    display:block;
    position:relative;
  }
  .apollo-deck img,.apollo-deck svg{max-width:100%;}
  .apollo-deck h1,.apollo-deck h2,.apollo-deck h3{
    font-family:'Sora', system-ui, sans-serif;
    text-wrap:balance;
    letter-spacing:-0.01em;
    margin:0;
  }
  .apollo-deck .mono{font-family:'IBM Plex Mono', ui-monospace, monospace;}
  .apollo-deck a{color:inherit;}
  .apollo-deck a:focus-visible, .apollo-deck button:focus-visible{outline:2px solid var(--apollo-mint); outline-offset:3px;}
  @media (prefers-reduced-motion: reduce){ .apollo-deck *{animation:none!important; transition:none!important;} }

  .apollo-deck .wrap{max-width:960px; margin:0 auto; padding-inline:24px;}
  .apollo-deck .wrap--wide{max-width:1120px;}

  .apollo-deck .grad-rule{
    height:2px; width:100%;
    background:linear-gradient(90deg, var(--apollo-mint), var(--apollo-violet) 55%, var(--apollo-amber));
    opacity:.55;
  }

  .apollo-deck section{padding-block:96px;}
  .apollo-deck section + section{border-top:1px solid color-mix(in srgb, var(--apollo-line) 70%, transparent);}
  @media (max-width:720px){ .apollo-deck section{padding-block:64px;} }

  .apollo-deck .eyebrow{
    font-family:'IBM Plex Mono', monospace;
    font-size:12px; font-weight:600; letter-spacing:.12em; text-transform:uppercase;
    color:var(--apollo-text-faint);
    display:flex; align-items:center; gap:10px; flex-wrap:wrap;
    margin-bottom:18px;
  }
  .apollo-deck .eyebrow b{color:var(--apollo-mint); font-weight:600;}

  .apollo-deck h2.headline{font-size:clamp(28px,3.6vw,42px); font-weight:700; max-width:20ch; margin-bottom:18px;}
  .apollo-deck p.lede{font-size:17.5px; color:var(--apollo-text-soft); max-width:62ch;}

  /* ---------------- COVER ---------------- */
  .apollo-deck .cover{
    min-height:100vh;
    padding-block:96px 72px;
    display:flex; flex-direction:column; justify-content:center; align-items:flex-start; gap:36px;
  }
  .apollo-deck .mark{
    width:64px; height:64px; border-radius:50%; position:relative; flex-shrink:0;
    background:conic-gradient(from 200deg, var(--apollo-mint), var(--apollo-violet) 45%, var(--apollo-amber) 75%, var(--apollo-mint) 100%);
    padding:3px;
    animation:apollo-mark-spin 14s linear infinite;
  }
  @keyframes apollo-mark-spin{ to{ transform:rotate(360deg); } }
  .apollo-deck .mark::after{
    content:"A";
    position:absolute; inset:3px;
    background:var(--apollo-bg);
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-family:'Sora'; font-weight:800; font-size:24px; color:var(--apollo-text);
  }
  .apollo-deck .cover-top{display:flex; align-items:center; gap:16px;}
  .apollo-deck .cover-brand{font-family:'Sora'; font-weight:700; font-size:19px;}
  .apollo-deck .cover-tag{font-family:'IBM Plex Mono'; font-size:11.5px; color:var(--apollo-text-faint); letter-spacing:.08em; text-transform:uppercase;}
  .apollo-deck h1.cover-head{
    font-size:clamp(40px,6.2vw,72px); font-weight:800; line-height:1.03; max-width:15ch;
  }
  .apollo-deck h1.cover-head em{font-style:normal; background:linear-gradient(90deg, var(--apollo-mint), var(--apollo-violet)); -webkit-background-clip:text; background-clip:text; color:transparent;}
  .apollo-deck .cover-sub{font-size:19px; color:var(--apollo-text-soft); max-width:52ch;}
  .apollo-deck .cover-meta{
    font-family:'IBM Plex Mono'; font-size:12px; color:var(--apollo-text-faint);
    display:flex; gap:10px; align-items:center; letter-spacing:.04em; flex-wrap:wrap;
  }
  .apollo-deck .cover-meta .dot{width:5px; height:5px; border-radius:50%; background:var(--apollo-mint);}
  .apollo-deck .scroll-hint{
    font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--apollo-text-faint);
    display:flex; align-items:center; gap:12px;
  }
  .apollo-deck .scroll-hint::before{
    content:""; width:1px; height:36px; background:linear-gradient(var(--apollo-mint), transparent);
    animation:apollo-drip 2.2s ease-in-out infinite;
  }
  @keyframes apollo-drip{ 0%{transform:scaleY(0); transform-origin:top;} 50%{transform:scaleY(1); transform-origin:top;} 51%{transform-origin:bottom;} 100%{transform:scaleY(0); transform-origin:bottom;} }

  /* ---------------- DIAGNOSIS LIST ---------------- */
  .apollo-deck .diag-list{display:flex; flex-direction:column; margin-top:44px; border-top:1px solid var(--apollo-line);}
  .apollo-deck .diag-row{
    display:grid; grid-template-columns:220px 1fr; gap:28px;
    padding:22px 0; border-bottom:1px solid var(--apollo-line);
  }
  .apollo-deck .diag-row dt{font-family:'Sora'; font-weight:700; font-size:16.5px;}
  .apollo-deck .diag-row dd{margin:0; color:var(--apollo-text-soft); font-size:15px; max-width:56ch;}
  @media (max-width:640px){ .apollo-deck .diag-row{grid-template-columns:1fr; gap:6px;} }

  /* ---------------- THESIS ---------------- */
  .apollo-deck .thesis-block{
    margin-top:36px; padding:30px 34px; border-radius:4px;
    background:var(--apollo-surface); border:1px solid var(--apollo-line); box-shadow:var(--apollo-shadow);
    border-left:3px solid var(--apollo-mint);
  }
  .apollo-deck .thesis-block p{margin:0; font-size:15.5px; color:var(--apollo-text-soft);}
  .apollo-deck .thesis-block p + p{margin-top:12px;}

  /* ---------------- CAPABILITY TABLE ---------------- */
  .apollo-deck .cap-list{margin-top:40px; display:flex; flex-direction:column;}
  .apollo-deck .cap-row{
    display:grid; grid-template-columns:44px 240px 1fr; gap:26px; align-items:baseline;
    padding:24px 0; border-top:1px solid var(--apollo-line);
  }
  .apollo-deck .cap-row:last-child{border-bottom:1px solid var(--apollo-line);}
  .apollo-deck .cap-num{font-family:'IBM Plex Mono'; font-size:12px; color:var(--apollo-text-faint); font-variant-numeric:tabular-nums;}
  .apollo-deck .cap-name{font-family:'Sora'; font-weight:700; font-size:16.5px;}
  .apollo-deck .cap-desc{color:var(--apollo-text-soft); font-size:15px; max-width:58ch;}
  @media (max-width:720px){
    .apollo-deck .cap-row{grid-template-columns:1fr; gap:6px;}
    .apollo-deck .cap-num{display:none;}
  }

  /* ---------------- 3D EXPERIENCE ---------------- */
  .apollo-deck .embed{
    margin-top:44px; position:relative; aspect-ratio:16/10; border-radius:10px; overflow:hidden;
    border:1px solid var(--apollo-line); background:var(--apollo-surface); box-shadow:var(--apollo-shadow);
  }
  @media (max-width:640px){ .apollo-deck .embed{aspect-ratio:4/5;} }
  .apollo-deck .embed-btn{
    all:unset; box-sizing:border-box; cursor:pointer; width:100%; height:100%;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; text-align:center; padding:24px;
    background:
      radial-gradient(60% 60% at 50% 45%, color-mix(in srgb, var(--apollo-mint) 16%, transparent), transparent 70%),
      linear-gradient(var(--apollo-line) 1px, transparent 1px) 0 0/32px 32px,
      linear-gradient(90deg, var(--apollo-line) 1px, transparent 1px) 0 0/32px 32px,
      var(--apollo-surface-2);
  }
  .apollo-deck .embed-btn .play{
    width:72px; height:72px; border-radius:50%; display:flex; align-items:center; justify-content:center;
    background:var(--apollo-mint); color:var(--apollo-bg); font-size:24px; box-shadow:0 0 0 10px color-mix(in srgb, var(--apollo-mint) 18%, transparent);
    transition:transform .3s ease;
  }
  .apollo-deck .embed-btn:hover .play{transform:scale(1.08);}
  .apollo-deck .embed-btn .t{font-family:'Sora'; font-weight:700; font-size:18px; color:var(--apollo-text);}
  .apollo-deck .embed-btn .s{font-family:'IBM Plex Mono'; font-size:11.5px; letter-spacing:.06em; color:var(--apollo-text-faint);}
  .apollo-deck .embed-frame{width:100%; height:100%; border:0; display:block;}
  .apollo-deck .embed-meta{display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap; margin-top:14px;}
  .apollo-deck .embed-meta span{font-size:13.5px; color:var(--apollo-text-soft);}
  .apollo-deck .embed-meta a{font-family:'IBM Plex Mono'; font-size:12.5px; font-weight:600; color:var(--apollo-mint); text-decoration:none; letter-spacing:.03em;}
  .apollo-deck .xp-grid{margin-top:36px; display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--apollo-line); border:1px solid var(--apollo-line); border-radius:6px; overflow:hidden;}
  @media (max-width:760px){ .apollo-deck .xp-grid{grid-template-columns:1fr;} }
  .apollo-deck .xp-item{background:var(--apollo-surface); padding:24px 22px;}
  .apollo-deck .xp-item h3{font-size:16px; font-weight:700; margin-bottom:6px;}
  .apollo-deck .xp-item p{margin:0; font-size:13.5px; color:var(--apollo-text-soft); line-height:1.55;}

  /* ---------------- CASE STUDY ---------------- */
  .apollo-deck .case-head{display:flex; align-items:baseline; gap:14px; flex-wrap:wrap; margin-bottom:8px;}
  .apollo-deck .case-badge{
    font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.08em; text-transform:uppercase;
    color:var(--apollo-mint); border:1px solid var(--apollo-mint); border-radius:99px; padding:4px 11px;
  }
  .apollo-deck .mock-row{display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:44px;}
  @media (max-width:760px){ .apollo-deck .mock-row{grid-template-columns:1fr;} }
  .apollo-deck .mock{
    background:var(--apollo-surface); border:1px solid var(--apollo-line); border-radius:6px;
    padding:22px 24px; box-shadow:var(--apollo-shadow);
  }
  .apollo-deck .mock__eyebrow{font-family:'IBM Plex Mono'; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--apollo-text-faint);}
  .apollo-deck .mock__desc{font-size:14px; color:var(--apollo-text-soft); margin:10px 0 16px; font-style:italic;}
  .apollo-deck .mock__divider{height:1px; background:var(--apollo-line); margin:14px 0;}
  .apollo-deck .mock__price{display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;}
  .apollo-deck .mock__price-label{font-family:'IBM Plex Mono'; font-size:10.5px; letter-spacing:.1em; color:var(--apollo-text-faint);}
  .apollo-deck .mock__price-value{font-family:'Sora'; font-weight:800; font-size:30px; color:var(--apollo-mint);}
  .apollo-deck .mock__lines{display:flex; flex-direction:column; gap:7px;}
  .apollo-deck .mock__line{display:flex; justify-content:space-between; font-family:'IBM Plex Mono'; font-size:12.5px; color:var(--apollo-text-soft);}
  .apollo-deck .mock__flag{
    display:inline-flex; align-items:center; gap:10px;
    background:color-mix(in srgb, var(--apollo-amber) 14%, transparent);
    border:1px solid var(--apollo-amber); color:var(--apollo-amber);
    border-radius:5px; padding:7px 12px; font-family:'IBM Plex Mono'; font-size:11px; font-weight:600;
    letter-spacing:.03em; text-transform:uppercase; margin-bottom:16px;
  }
  .apollo-deck .mock__flag a{
    background:var(--apollo-amber); color:var(--apollo-surface); border-radius:99px; padding:2px 10px; font-size:10.5px;
    text-decoration:none;
  }
  .apollo-deck .mock__job-row{display:flex; justify-content:space-between; font-family:'Sora'; font-weight:700; font-size:15px; margin-bottom:6px;}
  .apollo-deck .mock__job-addr, .apollo-deck .mock__job-cust{font-size:13px; color:var(--apollo-text-soft); margin-top:3px;}
  .apollo-deck .case-foot{margin-top:28px; font-size:14.5px; color:var(--apollo-text-soft); max-width:64ch;}

  /* ---------------- COMPARISON TABLE ---------------- */
  .apollo-deck .cmp-wrap{overflow-x:auto; margin-top:40px;}
  .apollo-deck .cmp-hint{display:none; font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.06em; text-transform:uppercase; color:var(--apollo-text-faint); margin-top:40px; margin-bottom:-24px;}
  @media (max-width:650px){ .apollo-deck .cmp-hint{display:block;} }
  .apollo-deck table.cmp{width:100%; border-collapse:collapse; min-width:560px; font-size:14.5px;}
  .apollo-deck table.cmp th, .apollo-deck table.cmp td{padding:14px 16px; text-align:left; border-bottom:1px solid var(--apollo-line);}
  .apollo-deck table.cmp th{
    font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.08em; text-transform:uppercase;
    color:var(--apollo-text-faint); font-weight:600;
  }
  .apollo-deck table.cmp th:not(:first-child), .apollo-deck table.cmp td:not(:first-child){text-align:center;}
  .apollo-deck table.cmp td:first-child{color:var(--apollo-text-soft);}
  .apollo-deck .no{color:var(--apollo-text-faint);}
  .apollo-deck .yes{color:var(--apollo-mint); font-weight:600; font-family:'IBM Plex Mono'; font-size:13.5px;}

  /* ---------------- PROCESS ---------------- */
  .apollo-deck .proc-list{margin-top:44px; display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--apollo-line); border:1px solid var(--apollo-line); border-radius:6px; overflow:hidden;}
  @media (max-width:820px){ .apollo-deck .proc-list{grid-template-columns:1fr 1fr;} }
  @media (max-width:480px){ .apollo-deck .proc-list{grid-template-columns:1fr;} }
  .apollo-deck .proc-item{background:var(--apollo-surface); padding:26px 22px;}
  .apollo-deck .proc-item .num{font-family:'IBM Plex Mono'; font-size:11px; color:var(--apollo-mint); margin-bottom:12px;}
  .apollo-deck .proc-item h3{font-size:16.5px; font-weight:700; margin-bottom:8px;}
  .apollo-deck .proc-item p{margin:0; font-size:13.5px; color:var(--apollo-text-soft); line-height:1.55;}

  /* ---------------- WHO ---------------- */
  .apollo-deck .trade-row{display:flex; flex-wrap:wrap; gap:10px; margin-top:28px;}
  .apollo-deck .trade-chip{
    font-family:'IBM Plex Mono'; font-size:12.5px; border:1px solid var(--apollo-line); color:var(--apollo-text-soft);
    background:color-mix(in srgb, var(--apollo-surface) 70%, transparent);
    border-radius:99px; padding:7px 14px;
  }
  .apollo-deck .qualify{
    margin-top:32px; padding:22px 26px; border-radius:4px;
    background:var(--apollo-surface-2); border:1px solid var(--apollo-line); font-size:14.5px; color:var(--apollo-text-soft); max-width:60ch;
  }
  .apollo-deck .qualify a{color:var(--apollo-mint); font-weight:600; text-decoration:none;}

  /* ---------------- PRICING ---------------- */
  .apollo-deck .shots{margin-top:56px;}
  .apollo-deck .shots-head{display:flex; justify-content:space-between; align-items:baseline; gap:16px; flex-wrap:wrap; margin-bottom:18px;}
  .apollo-deck .shots-head h3{font-family:'Sora'; font-weight:700; font-size:22px; margin:0;}
  .apollo-deck .shots-head p{margin:0; font-size:13.5px; color:var(--apollo-text-soft); max-width:56ch;}
  .apollo-deck .shot{margin:0; border:1px solid var(--apollo-line, rgba(255,255,255,.12)); border-radius:14px; overflow:hidden; background:#f3f5f4; box-shadow:var(--apollo-shadow);}
  .apollo-deck .shot__bar{display:flex; gap:6px; padding:9px 12px; background:#e7ebe9; border-bottom:1px solid rgba(0,0,0,.06);}
  .apollo-deck .shot__bar i{width:9px; height:9px; border-radius:50%; background:#c9d0cd; display:block;}
  .apollo-deck .shot img{display:block; width:100%; height:auto;}
  .apollo-deck .shot figcaption{padding:12px 16px 14px; font-size:13px; line-height:1.5; color:#3d4744; background:#fff;}
  .apollo-deck .shot figcaption b{color:#111; font-weight:600;}
  .apollo-deck .shot-grid{display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px;}
  @media (max-width:820px){ .apollo-deck .shot-grid{grid-template-columns:1fr;} }
  .apollo-deck .shot--dark{background:#0e1214;}
  .apollo-deck .shot--dark .shot__bar{background:#161b1e; border-bottom-color:rgba(255,255,255,.06);}
  .apollo-deck .shot--dark .shot__bar i{background:#2c3438;}
  .apollo-deck .shot--dark figcaption{background:#12171a; color:#a9b3b0;}
  .apollo-deck .shot--dark figcaption b{color:#f2f5f4;}
  .apollo-deck .price-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:44px;}
  .apollo-deck .price-grid--two{grid-template-columns:repeat(2,1fr); margin-top:16px;}
  @media (max-width:820px){ .apollo-deck .price-grid{grid-template-columns:1fr;} }
  .apollo-deck .price-card{
    background:var(--apollo-surface); border:1px solid var(--apollo-line); border-radius:8px;
    padding:28px 26px; display:flex; flex-direction:column; gap:14px; box-shadow:var(--apollo-shadow);
    position:relative;
  }
  .apollo-deck .price-card.hi{border-color:var(--apollo-mint); box-shadow:0 0 0 1px var(--apollo-mint), var(--apollo-shadow);}
  .apollo-deck .price-card .price-flag{
    position:absolute; top:-11px; left:26px;
    background:var(--apollo-mint); color:var(--apollo-bg);
    font-family:'IBM Plex Mono'; font-size:10.5px; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
    padding:4px 10px; border-radius:99px;
  }
  .apollo-deck .price-tier{font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--apollo-text-faint);}
  .apollo-deck .price-name{font-family:'Sora'; font-weight:700; font-size:19px;}
  .apollo-deck .price-num{font-family:'Sora'; font-weight:800; font-size:30px; line-height:1.15;}
  .apollo-deck .price-num span{font-family:'IBM Plex Mono'; font-size:12px; font-weight:500; color:var(--apollo-text-faint);}
  .apollo-deck .price-num small{display:block; font-family:'IBM Plex Mono'; font-size:11.5px; font-weight:600; color:var(--apollo-amber); letter-spacing:.04em; text-transform:uppercase; margin-top:6px;}
  .apollo-deck .price-desc{font-size:13.5px; color:var(--apollo-text-soft); line-height:1.55;}
  .apollo-deck .price-includes{list-style:none; margin:6px 0 0; padding:0; display:flex; flex-direction:column; gap:7px;}
  .apollo-deck .price-includes li{font-size:13px; color:var(--apollo-text-soft); padding-left:16px; position:relative;}
  .apollo-deck .price-includes li::before{content:"—"; position:absolute; left:0; color:var(--apollo-text-faint);}
  .apollo-deck .price-note{margin-top:28px; font-size:13px; color:var(--apollo-text-faint); max-width:64ch;}

  /* ---------------- GUARANTEES ---------------- */
  .apollo-deck .guarantee-grid{margin-top:44px; display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--apollo-line); border:1px solid var(--apollo-line); border-radius:6px; overflow:hidden;}
  @media (max-width:760px){ .apollo-deck .guarantee-grid{grid-template-columns:1fr;} }
  .apollo-deck .guarantee-item{background:var(--apollo-surface); padding:26px 22px;}
  .apollo-deck .guarantee-item .num{font-family:'IBM Plex Mono'; font-size:11px; color:var(--apollo-mint); margin-bottom:12px;}
  .apollo-deck .guarantee-item h3{font-size:16.5px; font-weight:700; margin-bottom:8px;}
  .apollo-deck .guarantee-item p{margin:0; font-size:13.5px; color:var(--apollo-text-soft); line-height:1.55;}
  .apollo-deck .price-value-strip{
    margin-top:36px; padding:20px 26px; border-radius:6px;
    background:var(--apollo-surface-2); border:1px solid var(--apollo-line);
    display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap;
  }
  .apollo-deck .price-value-strip .vs-label{font-family:'IBM Plex Mono'; font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--apollo-text-faint);}
  .apollo-deck .price-value-strip .vs-num{font-family:'Sora'; font-weight:700; font-size:16px;}
  .apollo-deck .price-value-strip .vs-num.through{color:var(--apollo-text-faint); text-decoration:line-through; font-weight:600;}
  .apollo-deck .price-value-strip .vs-num.win{color:var(--apollo-mint);}

  /* ---------------- CLOSER ---------------- */
  .apollo-deck .closer{
    background:var(--apollo-surface); border:1px solid var(--apollo-line); border-radius:10px;
    padding:52px 48px; margin-top:8px; box-shadow:var(--apollo-shadow);
    display:flex; justify-content:space-between; align-items:center; gap:34px; flex-wrap:wrap;
  }
  @media (max-width:480px){ .apollo-deck .closer{padding:36px 24px;} }
  .apollo-deck .closer h2{font-size:clamp(24px,3.2vw,32px); font-weight:700; max-width:20ch; margin-bottom:10px;}
  .apollo-deck .closer p{margin:0; color:var(--apollo-text-soft); font-size:14.5px; max-width:42ch;}
  .apollo-deck .btn{
    font-family:'IBM Plex Mono'; font-weight:600; font-size:13.5px; letter-spacing:.03em;
    padding:13px 22px; border-radius:4px; text-decoration:none; white-space:nowrap;
    background:var(--apollo-mint); color:var(--apollo-bg); display:inline-flex; align-items:center; gap:8px;
  }
  .apollo-deck footer{padding:36px 0 56px; text-align:center;}
  .apollo-deck footer .wrap{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;}
  .apollo-deck footer .mono{font-size:12px; color:var(--apollo-text-faint);}

  /* ---------------- BUNDLE ---------------- */
  .apollo-deck .bundle{margin-top:20px; flex-direction:row; justify-content:space-between; align-items:center; gap:28px; flex-wrap:wrap; padding:32px 30px;}
  .apollo-deck .bundle-main{display:flex; flex-direction:column; gap:10px; max-width:46ch;}
  .apollo-deck .bundle-price{display:flex; flex-direction:column; gap:4px; text-align:right;}
  .apollo-deck .bundle-was{font-size:11.5px; color:var(--apollo-text-faint); margin-top:6px;}
  @media (max-width:640px){ .apollo-deck .bundle-price{text-align:left;} }
  .apollo-deck footer .tm-note{font-size:11px; display:block; margin-top:14px; text-align:left;}

  /* ---------------- STACK CAROUSEL ---------------- */
  .apollo-deck .stack{width:100%; max-width:100%; margin-top:4px;}
  .apollo-deck .stack-label{font-family:'IBM Plex Mono', monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--apollo-text-faint); margin-bottom:14px;}
  .apollo-deck .stack-viewport{
    overflow:hidden; position:relative; width:100%;
    -webkit-mask-image:linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
            mask-image:linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  }
  .apollo-deck .stack-track{display:flex; width:max-content; animation:apollo-stack 38s linear infinite;}
  .apollo-deck .stack-viewport:hover .stack-track{animation-play-state:paused;}
  .apollo-deck .stack-set{display:flex; align-items:center; gap:14px; padding-right:14px;}
  .apollo-deck .stack-item{
    height:58px; padding:0 22px; display:flex; align-items:center; justify-content:center; flex-shrink:0;
    border:1px solid var(--apollo-line); border-radius:6px;
    background:color-mix(in srgb, var(--apollo-surface) 72%, transparent);
    font-family:'Sora', sans-serif; font-weight:700; font-size:15px; letter-spacing:-.01em; color:var(--apollo-text-soft); white-space:nowrap;
  }
  .apollo-deck .stack-item img{height:26px; width:auto; display:block; filter:grayscale(1); opacity:.85;}
  .apollo-deck .stack-item small{font-family:'IBM Plex Mono', monospace; font-weight:500; font-size:11px; color:var(--apollo-text-faint); margin-left:8px;}
  @keyframes apollo-stack{ to{ transform:translateX(-50%); } }
  @media (prefers-reduced-motion: reduce){
    .apollo-deck .stack-track{animation:none; width:auto;}
    .apollo-deck .stack-set{flex-wrap:wrap;}
    .apollo-deck .stack-set + .stack-set{display:none;}
    .apollo-deck .stack-viewport{-webkit-mask-image:none; mask-image:none;}
  }
`

/* -------------------- MARKUP -------------------- */
/* -------------------- SOFTWARE STACK CAROUSEL --------------------
   Shown as text wordmarks by default. To show official logos, upload each
   company's logo file (from its brand/press page) to Framer and paste the
   image URL into "logo". Check each company's trademark guidelines first. */
const STACK: { name: string; sub?: string; logo?: string }[] = [
    { name: "Autodesk", sub: "Civil 3D" },
    { name: "AutoCAD" },
    { name: "Bluebeam", sub: "Revu" },
    { name: "HydroCAD" },
    { name: "Esri", sub: "ArcGIS" },
    { name: "Bentley", sub: "OpenRoads" },
    { name: "Carlson", sub: "Civil" },
    { name: "Trimble", sub: "Business Center" },
]
const esc = (t: string) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string)
const stackSet = (hidden: boolean) =>
    `<div class="stack-set"${hidden ? ' aria-hidden="true"' : ""}>` +
    STACK.map((s) =>
        s.logo
            ? `<div class="stack-item"><img src="${esc(s.logo)}" alt="${hidden ? "" : esc(s.name + (s.sub ? " " + s.sub : ""))}" loading="lazy"></div>`
            : `<div class="stack-item">${esc(s.name)}${s.sub ? `<small>${esc(s.sub)}</small>` : ""}</div>`
    ).join("") +
    `</div>`
const STACK_HTML = `
    <div class="stack">
      <div class="stack-label">Works alongside the software you already run</div>
      <div class="stack-viewport"><div class="stack-track">${stackSet(false)}${stackSet(true)}</div></div>
    </div>`



/** Screenshots are hosted on GitHub Pages (rchase-sudo/apollo-site). */
const ASSETS = "https://rchase-sudo.github.io/apollo-site/assets"
const PM_DASHBOARD = `${ASSETS}/pm-dashboard.jpg`
const PM_SCHEDULE = `${ASSETS}/pm-schedule.jpg`
const PM_TASKS = `${ASSETS}/pm-tasks.jpg`
const RL_HERO = `${ASSETS}/redline-workspace.jpg`
const RL_TAKEOFF = `${ASSETS}/redline-ai-takeoff.jpg`
const RL_REVIEW = `${ASSETS}/redline-ai-set-review.jpg`
const RL_SESSION = `${ASSETS}/redline-live-session.jpg`
const RL_MEASURE = `${ASSETS}/redline-snap-measure.jpg`

const HTML = `
  <div class="wrap cover">
    <div class="cover-top">
      <div class="mark" aria-hidden="true"></div>
      <div>
        <div class="cover-brand">Apollo Development</div>
        <div class="cover-tag">Software for Civil Engineers</div>
      </div>
    </div>
    <div>
      <div class="eyebrow"><b>Civil &amp; site engineering</b> · Drafted · Proposals · Drainage · Redline · PM</div>
      <h1 class="cover-head">The tools civil engineers <em>should have had</em> years ago.</h1>
    </div>
    <p class="cover-sub">Apollo builds software for land development firms. It produces concept plans from an address and proposals in your firm's own style from one prompt. It runs drainage analysis that lays out subcatchments and shows where the design falls short. Redline handles plan markup with AI built in, and PM Dashboard runs your projects, budgets and people in one place. The tools fit around Civil 3D and HydroCAD, so you keep the software that works.</p>
    ${STACK_HTML}
    <div class="cover-meta"><span class="dot"></span>apollodevelopment.io &nbsp;·&nbsp; rchase@apollodevelopment.io</div>
    <div class="scroll-hint">Scroll</div>
  </div>
  <div class="grad-rule"></div>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">01 — The Problem</div>
      <h2 class="headline">Engineering software got more powerful. The work didn't get faster.</h2>
      <p class="lede">The big platforms are excellent at drafting and modeling. But most of an engineer's week still goes to repetitive setup that no license fee removes.</p>
      <dl class="diag-list">
        <div class="diag-row">
          <dt>Concept plans</dt>
          <dd>A client asks "what fits on this lot?" and someone spends a day pulling parcel data, drawing setbacks, and sketching layouts before anyone knows if the project pencils.</dd>
        </div>
        <div class="diag-row">
          <dt>Proposals</dt>
          <dd>Every RFP means copying an old proposal, rewriting the scope, updating fees, and fixing formatting, often by a senior engineer whose time bills at the highest rate.</dd>
        </div>
        <div class="diag-row">
          <dt>Drainage setup</dt>
          <dd>Delineating subcatchments, assigning cover types and soil groups, and building the pre-development model by hand before a single design question gets answered.</dd>
        </div>
        <div class="diag-row">
          <dt>Markups</dt>
          <dd>Plan review means clicking the same clouds, callouts and takeoffs by hand on every sheet, in markup software that hasn't changed much in a decade.</dd>
        </div>
        <div class="diag-row">
          <dt>Project tracking</dt>
          <dd>Budgets live in the accounting system, deadlines live in a spreadsheet, and the PM spends Monday morning stitching them together to see which jobs are in trouble.</dd>
        </div>
        <div class="diag-row">
          <dt>Iteration</dt>
          <dd>The design changes, the model breaks, and the rework starts over. Finding where the post-development system fails is still done by trial and error.</dd>
        </div>
      </dl>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">02 — The Approach</div>
      <h2 class="headline">Automate the setup. Keep the engineer in charge.</h2>
      <div class="thesis-block">
        <p>Apollo tools do the repetitive first 80%: the layout, the draft, the delineation, the first-pass model. Your engineers review, adjust, and sign off. Nothing leaves the office without professional judgment on it.</p>
        <p>And because the output is built to move into the software you already run, there's no migration project and no retraining the whole team. Your stack stays. The hours don't.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">03 — The Products</div>
      <h2 class="headline">Five tools. Each one gives back hours every week.</h2>
      <p class="lede">Three engineering tools, sold separately or together as the Civil Specialist package, and two office platforms for markup and project management.</p>
      <div class="cap-list">
        <div class="cap-row">
          <div class="cap-num">01</div>
          <div class="cap-name">Drafted<br><span class="mono" style="font-size:11.5px; font-weight:500; color:var(--apollo-text-faint);">Concept plans</span></div>
          <div class="cap-desc">Type an address and a short prompt. Drafted pulls the parcel, applies zoning and setbacks, and returns a color-coded concept layout, a photoreal render, and a development yield summary. Feasibility in minutes instead of a day.</div>
        </div>
        <div class="cap-row">
          <div class="cap-num">02</div>
          <div class="cap-name">Proposal Studio<br><span class="mono" style="font-size:11.5px; font-weight:500; color:var(--apollo-text-faint);">Proposals</span></div>
          <div class="cap-desc">Learns your firm's typical proposal (structure, scope language, fee format, and branding) from the proposals you already send. One prompt describing the project returns a ready-to-review proposal that reads like your office wrote it.</div>
        </div>
        <div class="cap-row">
          <div class="cap-num">03</div>
          <div class="cap-name">Drainage Analyst<br><span class="mono" style="font-size:11.5px; font-weight:500; color:var(--apollo-text-faint);">Stormwater</span></div>
          <div class="cap-desc">Automates subcatchment layout and analyzes the pre-development condition. Run it against your preliminary drainage design and it flags where post-development flows exceed targets, then suggests specific improvements where they're needed.</div>
        </div>
        <div class="cap-row">
          <div class="cap-num">04</div>
          <div class="cap-name">Apollo Redline<br><span class="mono" style="font-size:11.5px; font-weight:500; color:var(--apollo-text-faint);">PDF markup &amp; review</span></div>
          <div class="cap-desc">A complete PDF markup, takeoff and plan-review platform, built to replace Bluebeam. AI is built in: it handles repetitive markups, review comments and quantity takeoffs automatically. It has a modern interface and live review sessions so the whole team can mark up the same set.</div>
        </div>
        <div class="cap-row">
          <div class="cap-num">05</div>
          <div class="cap-name">PM Dashboard<br><span class="mono" style="font-size:11.5px; font-weight:500; color:var(--apollo-text-faint);">Projects, budgets &amp; people</span></div>
          <div class="cap-desc">Does what Ajera does: project tracking, budgets and accounting. It is also the tool project managers use day to day. It tracks every project's stage, budget against actual, employee tasks and deadlines, all on one screen.</div>
        </div>
      </div>


      <div class="shots">
        <div class="shots-head">
          <h3>PM Dashboard, in the app</h3>
          <p>Screens from the working product, using demo data for a sample civil firm.</p>
        </div>
        <figure class="shot">
          <div class="shot__bar"><i></i><i></i><i></i></div>
          <img src="${PM_DASHBOARD}" alt="PM Dashboard home: firm totals, project health with budget burn, and a needs-attention list" loading="lazy">
          <figcaption><b>Dashboard.</b> Backlog, unbilled WIP, A/R and utilization up top. Every project's fee spent against percent complete, and one list of what needs attention: over-budget jobs, overdue invoices, overbooked staff.</figcaption>
        </figure>
        <div class="shot-grid">
          <figure class="shot">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${PM_SCHEDULE}" alt="Resource plan: planned hours per person per week, over-capacity weeks in red" loading="lazy">
            <figcaption><b>Schedule.</b> Planned hours per person, per week. Over-capacity weeks show red, and planned hours are checked against the budget hours left.</figcaption>
          </figure>
          <figure class="shot">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${PM_TASKS}" alt="Task board: to do, in progress, review and done, with project numbers, owners and due dates" loading="lazy">
            <figcaption><b>Tasks.</b> A board for every job's work, permit and deadline items, with owners and due dates. Drag a card to change its status.</figcaption>
          </figure>
        </div>
      </div>

      <div class="shots">
        <div class="shots-head">
          <h3>Apollo Redline, in the app</h3>
          <p>Screens from the working product on a sample 11-sheet site plan set.</p>
        </div>
        <figure class="shot shot--dark">
          <div class="shot__bar"><i></i><i></i><i></i></div>
          <img src="${RL_HERO}" alt="Redline workspace: sheet thumbnails, plan with area, count and dimension markups, an approval stamp, properties panel and markups list" loading="lazy">
          <figcaption><b>Markup and measure.</b> Clouds, callouts, counts, areas and stamps, all calibrated to the sheet scale. Every markup lands in a sortable list with its measurement, status and author, and exports to CSV.</figcaption>
        </figure>
        <div class="shot-grid">
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${RL_TAKEOFF}" alt="AI takeoff: pavement, building and island areas traced and snapped to linework, with totals" loading="lazy">
            <figcaption><b>AI takeoff.</b> Ask for pavement, building, lawn or gravel areas. The AI traces each one, snaps the corners to the linework and nets out the islands. You check the boundaries and the totals update live.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${RL_REVIEW}" alt="AI set review: findings ranked high, medium and low, marked up on the sheets" loading="lazy">
            <figcaption><b>AI set review.</b> Reviews the whole set and ranks what it finds: pipe velocities, pond outflow against pre-development, wetland impacts, a missing sheet in the index. Each finding is clouded on the sheet it refers to.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${RL_SESSION}" alt="Live review session with a city engineer and contractor marking up the same sheet, with chat and activity record" loading="lazy">
            <figcaption><b>Live sessions.</b> Share a session ID and the reviewer, the contractor and your team mark up the same sheet at once. Chat and a full record of who changed what sit alongside.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${RL_MEASURE}" alt="Polylength measurement along a storm drain run at 240% zoom, with the tool chest of saved presets" loading="lazy">
            <figcaption><b>Snap and measure.</b> Measurements snap to the drawing’s own linework. Tool Chest presets keep your standard markups (storm runs, limit of work, loam &amp; seed by depth) one click away.</figcaption>
          </figure>
        </div>
      </div>

      <div class="mock-row">
        <div class="mock">
          <div class="mock__eyebrow">Drainage Analyst · Illustrative output</div>
          <p class="mock__desc">Pre vs. post peak discharge at the design point</p>
          <div class="mock__divider"></div>
          <div class="mock__lines">
            <div class="mock__line"><span>Storm</span><span>Pre &nbsp;/&nbsp; Post (cfs)</span></div>
            <div class="mock__line"><span>2-yr</span><span>3.1 &nbsp;/&nbsp; 2.8</span></div>
            <div class="mock__line"><span>10-yr</span><span>6.4 &nbsp;/&nbsp; 6.0</span></div>
            <div class="mock__line" style="color:var(--apollo-amber);"><span>25-yr</span><span>8.2 &nbsp;/&nbsp; 9.1 ▲</span></div>
          </div>
          <div class="mock__divider"></div>
          <div class="mock__flag">Suggested fix</div>
          <div class="mock__job-cust">Raise basin 1 outlet weir 0.4 ft and add a 6" low-flow orifice. Re-run shows 25-yr post at 7.9 cfs.</div>
        </div>
        <div class="mock">
          <div class="mock__eyebrow">Proposal Studio · Prompt</div>
          <p class="mock__desc">"Site plan and permitting for a 3-building self-storage facility, 4.2 acres, town planning board approval plus state AoT."</p>
          <div class="mock__divider"></div>
          <div class="mock__price">
            <span class="mock__price-label">Draft returned</span>
            <span class="mock__price-value">~90 sec</span>
          </div>
          <div class="mock__lines">
            <div class="mock__line"><span>Scope of services</span><span>8 tasks</span></div>
            <div class="mock__line"><span>Fee schedule</span><span>Your rates</span></div>
            <div class="mock__line"><span>Format &amp; branding</span><span>Your template</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">04 — Your Stack</div>
      <h2 class="headline">Built around the tools you already pay for.</h2>
      <p class="lede">Civil 3D, Bluebeam, and HydroCAD are where the final work lives. Apollo handles what happens before and between them.</p>
      <div class="cmp-hint">Swipe to compare →</div>
      <div class="cmp-wrap">
        <table class="cmp">
          <thead>
            <tr><th>Task</th><th>The usual way</th><th>With Apollo</th></tr>
          </thead>
          <tbody>
            <tr><td>Lot feasibility / concept layout</td><td class="no">Hours to a day of drafting</td><td class="yes">Minutes, from an address</td></tr>
            <tr><td>Proposal for a new project</td><td class="no">Copy, rewrite, reformat</td><td class="yes">One prompt, your style</td></tr>
            <tr><td>Subcatchment delineation</td><td class="no">Drawn by hand</td><td class="yes">Automated</td></tr>
            <tr><td>Pre-development analysis</td><td class="no">Built manually</td><td class="yes">Automated</td></tr>
            <tr><td>Finding where the design fails</td><td class="no">Trial and error</td><td class="yes">Flagged, with fixes suggested</td></tr>
            <tr><td>Final design &amp; stamped plans</td><td>Your engineers</td><td>Still your engineers</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">05 — How It Works</div>
      <h2 class="headline">From sign-up to first output the same day.</h2>
      <div class="proc-list">
        <div class="proc-item">
          <div class="num mono">Connect</div>
          <h3>Set up your firm</h3>
          <p>Upload a few past proposals, your standards, and your fee schedule. The tools learn how your office works.</p>
        </div>
        <div class="proc-item">
          <div class="num mono">Prompt</div>
          <h3>Describe the job</h3>
          <p>An address, a project description, or a preliminary design. Plain language, no scripting.</p>
        </div>
        <div class="proc-item">
          <div class="num mono">Review</div>
          <h3>Engineer checks it</h3>
          <p>You get a first pass to review, adjust, and approve. Judgment stays with the engineer of record.</p>
        </div>
        <div class="proc-item">
          <div class="num mono">Deliver</div>
          <h3>Into your workflow</h3>
          <p>Carry the output into your plan set, your model, or your client email and keep moving.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">06 — Who It's For</div>
      <h2 class="headline">Built for firms that design the ground everything else sits on.</h2>
      <p class="lede">If your team produces site plans, drainage reports, or proposals every week, there are hours in that work that software should be doing.</p>
      <div class="trade-row">
        <span class="trade-chip">Civil &amp; Site Engineering Firms</span>
        <span class="trade-chip">Land Development Consultants</span>
        <span class="trade-chip">Stormwater &amp; Drainage Engineers</span>
        <span class="trade-chip">Land Surveyors</span>
        <span class="trade-chip">Design-Build Contractors</span>
        <span class="trade-chip">Municipal Engineering Departments</span>
        <span class="trade-chip">Developers with In-House Engineering</span>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap wrap--wide" data-reveal>
      <div class="eyebrow">07 — Pricing</div>
      <h2 class="headline">Start for less. Stay because it works.</h2>
      <p class="lede">The engineering tools have a reduced first month so your team can put them on real projects before paying full rate. Monthly billing, cancel anytime.</p>
      <div class="price-grid">
        <div class="price-card">
          <div class="price-tier">Concept plans</div>
          <div class="price-name">Drafted</div>
          <div class="price-num">$99<span>&nbsp;first month</span><small>then $297 / mo</small></div>
          <div class="price-desc">Address-to-concept layouts with renders and yield summaries.</div>
          <ul class="price-includes">
            <li>Parcel, zoning &amp; setback lookup</li>
            <li>Color-coded concept layout</li>
            <li>Photoreal render</li>
            <li>Development yield summary</li>
          </ul>
        </div>
        <div class="price-card">
          <div class="price-tier">Proposals</div>
          <div class="price-name">Proposal Studio</div>
          <div class="price-num">$20<span>&nbsp;first month</span><small>then $99 / mo</small></div>
          <div class="price-desc">Proposals in your firm's own style from a single prompt.</div>
          <ul class="price-includes">
            <li>Trained on your past proposals</li>
            <li>Your scope language &amp; fee format</li>
            <li>Your branding &amp; template</li>
            <li>Ready-to-review draft</li>
          </ul>
        </div>
        <div class="price-card">
          <div class="price-tier">Stormwater</div>
          <div class="price-name">Drainage Analyst</div>
          <div class="price-num">$49<span>&nbsp;first month</span><small>then $197 / mo</small></div>
          <div class="price-desc">Automated subcatchments, pre-development analysis, and design fixes.</div>
          <ul class="price-includes">
            <li>Automated subcatchment layout</li>
            <li>Pre-development condition analysis</li>
            <li>Preliminary design check</li>
            <li>Suggested improvements where required</li>
          </ul>
        </div>
      </div>

      <div class="price-card hi bundle">
        <div class="price-flag">Save 20%</div>
        <div class="bundle-main">
          <div class="price-tier">All three tools</div>
          <div class="price-name">Civil Specialist Package</div>
          <div class="price-desc">Drafted, Proposal Studio, and Drainage Analyst together, at 20% off the combined price.</div>
        </div>
        <div class="bundle-price">
          <div class="price-num">$134.40<span>&nbsp;first month</span></div>
          <div class="price-num">$474.40<span>&nbsp;/ mo after</span></div>
          <div class="bundle-was mono">Separately: $168 first month, then $593 / mo</div>
        </div>
      </div>

      <div class="eyebrow" style="margin-top:56px">Office platforms</div>
      <div class="price-grid price-grid--two">
        <div class="price-card">
          <div class="price-tier">PDF markup &amp; review</div>
          <div class="price-name">Apollo Redline</div>
          <div class="price-num">$350<span>&nbsp;/ mo</span></div>
          <div class="price-desc">A complete Bluebeam replacement with AI built in.</div>
          <ul class="price-includes">
            <li>Markups, measurements &amp; takeoffs</li>
            <li>AI-automated markups and review tasks</li>
            <li>Live review sessions</li>
            <li>Modern desktop interface</li>
          </ul>
        </div>
        <div class="price-card">
          <div class="price-tier">Projects, budgets &amp; people</div>
          <div class="price-name">PM Dashboard</div>
          <div class="price-num">$750<span>&nbsp;/ mo</span></div>
          <div class="price-desc">Ajera-level project accounting plus the day-to-day tool PMs actually use.</div>
          <ul class="price-includes">
            <li>Project stages &amp; deadlines</li>
            <li>Budgets vs. actuals</li>
            <li>Employee tasks &amp; workload</li>
            <li>Accounting: ledger, payroll, payables</li>
          </ul>
        </div>
      </div>

      <div class="price-card hi bundle">
        <div class="price-flag">Save 30%</div>
        <div class="bundle-main">
          <div class="price-tier">All five products</div>
          <div class="price-name">Apollo Complete</div>
          <div class="price-desc">Drafted, Proposal Studio, Drainage Analyst, Apollo Redline and PM Dashboard together, at 30% off the combined price.</div>
        </div>
        <div class="bundle-price">
          <div class="price-num">$887.60<span>&nbsp;first month</span></div>
          <div class="price-num">$1,185.10<span>&nbsp;/ mo after</span></div>
          <div class="bundle-was mono">Separately: $1,268 first month, then $1,693 / mo</div>
        </div>
      </div>

      <p class="price-note">All plans billed monthly. The first-month rate applies to a firm's first month on each product; standard pricing starts with the second billing cycle.</p>
    </div>
  </section>

  <section style="padding-bottom:96px;">
    <div class="wrap" data-reveal>
      <div class="eyebrow">08 — Next Step</div>
      <div class="closer">
        <div>
          <h2>Put it on a real project this week.</h2>
          <p>Send us a site you're working on. We'll run it through the tools and show you the output before you sign up for anything.</p>
        </div>
        <a class="btn" href="mailto:rchase@apollodevelopment.io?subject=Apollo%20tools%20demo">Request a demo →</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="wrap">
      <span class="mono">© Apollo Development</span>
      <span class="mono">apollodevelopment.io</span>
    </div>
    <div class="wrap"><span class="mono tm-note">Autodesk, AutoCAD, Civil 3D, Bluebeam, HydroCAD, Deltek, Ajera, Esri, ArcGIS, Bentley, OpenRoads, Carlson, and Trimble are trademarks of their respective owners. Apollo Development is not affiliated with or endorsed by them.</span></div>
  </footer>
`

export default function ApolloDeck() {
    useApolloFonts()
    const rootRef = useRef<HTMLDivElement>(null)
    useReveal(rootRef)
    useClickEmbeds(rootRef)

    return (
        <div className="apollo-deck" ref={rootRef}>
            <style>{CSS + SCENE_CSS}</style>
            <ApolloScene prefix="--apollo-" opacity={0.55} />
            <div
                className="ap3d-content"
                dangerouslySetInnerHTML={{ __html: HTML }}
            />
        </div>
    )
}
