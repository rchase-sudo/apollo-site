(()=>{var Fw=Object.create;var Kf=Object.defineProperty;var Ow=Object.getOwnPropertyDescriptor;var zw=Object.getOwnPropertyNames;var Bw=Object.getPrototypeOf,Vw=Object.prototype.hasOwnProperty;var Ni=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Hw=(n,e)=>{for(var t in e)Kf(n,t,{get:e[t],enumerable:!0})},Gw=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of zw(e))!Vw.call(n,r)&&r!==t&&Kf(n,r,{get:()=>e[r],enumerable:!(i=Ow(e,r))||i.enumerable});return n};var Zs=(n,e,t)=>(t=n!=null?Fw(Bw(n)):{},Gw(e||!n||!n.__esModule?Kf(t,"default",{value:n,enumerable:!0}):t,n));var __=Ni(Ke=>{"use strict";var da=Symbol.for("react.element"),Ww=Symbol.for("react.portal"),Xw=Symbol.for("react.fragment"),Yw=Symbol.for("react.strict_mode"),qw=Symbol.for("react.profiler"),$w=Symbol.for("react.provider"),Zw=Symbol.for("react.context"),Kw=Symbol.for("react.forward_ref"),Jw=Symbol.for("react.suspense"),jw=Symbol.for("react.memo"),Qw=Symbol.for("react.lazy"),a_=Symbol.iterator;function eE(n){return n===null||typeof n!="object"?null:(n=a_&&n[a_]||n["@@iterator"],typeof n=="function"?n:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function Ks(n,e,t){this.props=n,this.context=e,this.refs=d_,this.updater=t||u_}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ks.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function f_(){}f_.prototype=Ks.prototype;function jf(n,e,t){this.props=n,this.context=e,this.refs=d_,this.updater=t||u_}var Qf=jf.prototype=new f_;Qf.constructor=jf;h_(Qf,Ks.prototype);Qf.isPureReactComponent=!0;var l_=Array.isArray,p_=Object.prototype.hasOwnProperty,ep={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p_.call(e,i)&&!m_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:n,key:s,ref:o,props:r,_owner:ep.current}}function tE(n,e){return{$$typeof:da,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function tp(n){return typeof n=="object"&&n!==null&&n.$$typeof===da}function nE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var c_=/\/+/g;function Jf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?nE(""+n.key):e.toString(36)}function Mc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case da:case Ww:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Jf(o,0):i,l_(r)?(t="",n!=null&&(t=n.replace(c_,"$&/")+"/"),Mc(r,e,t,"",function(c){return c})):r!=null&&(tp(r)&&(r=tE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(c_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",l_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Jf(s,a);o+=Mc(s,e,t,l,r)}else if(l=eE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Jf(s,a++),o+=Mc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sc(n,e,t){if(n==null)return n;var i=[],r=0;return Mc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function iE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},wc={transition:null},rE={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:wc,ReactCurrentOwner:ep};function v_(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Sc,forEach:function(n,e,t){Sc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Sc(n,function(){e++}),e},toArray:function(n){return Sc(n,function(e){return e})||[]},only:function(n){if(!tp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=Ks;Ke.Fragment=Xw;Ke.Profiler=qw;Ke.PureComponent=jf;Ke.StrictMode=Yw;Ke.Suspense=Jw;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE;Ke.act=v_;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=h_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)p_.call(e,l)&&!m_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:Zw,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$w,_context:n},n.Consumer=n};Ke.createElement=g_;Ke.createFactory=function(n){var e=g_.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:Kw,render:n}};Ke.isValidElement=tp;Ke.lazy=function(n){return{$$typeof:Qw,_payload:{_status:-1,_result:n},_init:iE}};Ke.memo=function(n,e){return{$$typeof:jw,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=wc.transition;wc.transition={};try{n()}finally{wc.transition=e}};Ke.unstable_act=v_;Ke.useCallback=function(n,e){return ln.current.useCallback(n,e)};Ke.useContext=function(n){return ln.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return ln.current.useEffect(n,e)};Ke.useId=function(){return ln.current.useId()};Ke.useImperativeHandle=function(n,e,t){return ln.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return ln.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return ln.current.useReducer(n,e,t)};Ke.useRef=function(n){return ln.current.useRef(n)};Ke.useState=function(n){return ln.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return ln.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return ln.current.useTransition()};Ke.version="18.3.1"});var Ec=Ni((F3,y_)=>{"use strict";y_.exports=__()});var R_=Ni(ut=>{"use strict";function sp(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<bc(r,e))n[i]=e,n[t]=r,t=i;else break e}}function ii(n){return n.length===0?null:n[0]}function Ac(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>bc(a,t))l<r&&0>bc(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>bc(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function bc(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(x_=performance,ut.unstable_now=function(){return x_.now()}):(np=Date,S_=np.now(),ut.unstable_now=function(){return np.now()-S_});var x_,np,S_,gi=[],fr=[],sE=1,Gn=null,Jt=3,Cc=!1,Jr=!1,pa=!1,E_=typeof setTimeout=="function"?setTimeout:null,b_=typeof clearTimeout=="function"?clearTimeout:null,M_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function op(n){for(var e=ii(fr);e!==null;){if(e.callback===null)Ac(fr);else if(e.startTime<=n)Ac(fr),e.sortIndex=e.expirationTime,sp(gi,e);else break;e=ii(fr)}}function ap(n){if(pa=!1,op(n),!Jr)if(ii(gi)!==null)Jr=!0,cp(lp);else{var e=ii(fr);e!==null&&up(ap,e.startTime-n)}}function lp(n,e){Jr=!1,pa&&(pa=!1,b_(ma),ma=-1),Cc=!0;var t=Jt;try{for(op(e),Gn=ii(gi);Gn!==null&&(!(Gn.expirationTime>e)||n&&!C_());){var i=Gn.callback;if(typeof i=="function"){Gn.callback=null,Jt=Gn.priorityLevel;var r=i(Gn.expirationTime<=e);e=ut.unstable_now(),typeof r=="function"?Gn.callback=r:Gn===ii(gi)&&Ac(gi),op(e)}else Ac(gi);Gn=ii(gi)}if(Gn!==null)var s=!0;else{var o=ii(fr);o!==null&&up(ap,o.startTime-e),s=!1}return s}finally{Gn=null,Jt=t,Cc=!1}}var Rc=!1,Tc=null,ma=-1,T_=5,A_=-1;function C_(){return!(ut.unstable_now()-A_<T_)}function ip(){if(Tc!==null){var n=ut.unstable_now();A_=n;var e=!0;try{e=Tc(!0,n)}finally{e?fa():(Rc=!1,Tc=null)}}else Rc=!1}var fa;typeof M_=="function"?fa=function(){M_(ip)}:typeof MessageChannel<"u"?(rp=new MessageChannel,w_=rp.port2,rp.port1.onmessage=ip,fa=function(){w_.postMessage(null)}):fa=function(){E_(ip,0)};var rp,w_;function cp(n){Tc=n,Rc||(Rc=!0,fa())}function up(n,e){ma=E_(function(){n(ut.unstable_now())},e)}ut.unstable_IdlePriority=5;ut.unstable_ImmediatePriority=1;ut.unstable_LowPriority=4;ut.unstable_NormalPriority=3;ut.unstable_Profiling=null;ut.unstable_UserBlockingPriority=2;ut.unstable_cancelCallback=function(n){n.callback=null};ut.unstable_continueExecution=function(){Jr||Cc||(Jr=!0,cp(lp))};ut.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T_=0<n?Math.floor(1e3/n):5};ut.unstable_getCurrentPriorityLevel=function(){return Jt};ut.unstable_getFirstCallbackNode=function(){return ii(gi)};ut.unstable_next=function(n){switch(Jt){case 1:case 2:case 3:var e=3;break;default:e=Jt}var t=Jt;Jt=e;try{return n()}finally{Jt=t}};ut.unstable_pauseExecution=function(){};ut.unstable_requestPaint=function(){};ut.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=Jt;Jt=n;try{return e()}finally{Jt=t}};ut.unstable_scheduleCallback=function(n,e,t){var i=ut.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:sE++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,sp(fr,n),ii(gi)===null&&n===ii(fr)&&(pa?(b_(ma),ma=-1):pa=!0,up(ap,t-i))):(n.sortIndex=r,sp(gi,n),Jr||Cc||(Jr=!0,cp(lp))),n};ut.unstable_shouldYield=C_;ut.unstable_wrapCallback=function(n){var e=Jt;return function(){var t=Jt;Jt=e;try{return n.apply(this,arguments)}finally{Jt=t}}}});var I_=Ni((z3,P_)=>{"use strict";P_.exports=R_()});var US=Ni(Dn=>{"use strict";var oE=Ec(),In=I_();function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oy=new Set,Fa={};function us(n,e){_o(n,e),_o(n+"Capture",e)}function _o(n,e){for(Fa[n]=e,n=0;n<e.length;n++)Oy.add(e[n])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dp=Object.prototype.hasOwnProperty,aE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L_={},D_={};function lE(n){return Dp.call(D_,n)?!0:Dp.call(L_,n)?!1:aE.test(n)?D_[n]=!0:(L_[n]=!0,!1)}function cE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function uE(n,e,t,i){if(e===null||typeof e>"u"||cE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var bm=/[\-:]([a-z])/g;function Tm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(bm,Tm);$t[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(bm,Tm);$t[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(bm,Tm);$t[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Am(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uE(e,t,r,i)&&(t=null),i||r===null?lE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wi=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pc=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),By=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),kp=Symbol.for("react.suspense_list"),Pm=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),N_=Symbol.iterator;function ga(n){return n===null||typeof n!="object"?null:(n=N_&&n[N_]||n["@@iterator"],typeof n=="function"?n:null)}var yt=Object.assign,hp;function Ea(n){if(hp===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hp=e&&e[1]||""}return`
`+hp+n}var dp=!1;function fp(n,e){if(!n||dp)return"";dp=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{dp=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ea(n):""}function hE(n){switch(n.tag){case 5:return Ea(n.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return n=fp(n.type,!1),n;case 11:return n=fp(n.type.render,!1),n;case 1:return n=fp(n.type,!0),n;default:return""}}function Fp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case eo:return"Fragment";case Qs:return"Portal";case Np:return"Profiler";case Cm:return"StrictMode";case Up:return"Suspense";case kp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case By:return(n.displayName||"Context")+".Consumer";case zy:return(n._context.displayName||"Context")+".Provider";case Rm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pm:return e=n.displayName||null,e!==null?e:Fp(n.type)||"Memo";case mr:e=n._payload,n=n._init;try{return Fp(n(e))}catch{}}return null}function dE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fp(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Hy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fE(n){var e=Hy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ic(n){n._valueTracker||(n._valueTracker=fE(n))}function Gy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Hy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function su(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Op(n,e){var t=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function U_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wy(n,e){e=e.checked,e!=null&&Am(n,"checked",e,!1)}function zp(n,e){Wy(n,e);var t=Rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Bp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Bp(n,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function k_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Bp(n,e,t){(e!=="number"||su(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ba=Array.isArray;function ho(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Vp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function F_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(ba(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Rr(t)}}function Xy(n,e){var t=Rr(e.value),i=Rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function O_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Yy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Yy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lc,qy=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Lc=Lc||document.createElement("div"),Lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Oa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pE=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(n){pE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ca[e]=Ca[n]})});function $y(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ca.hasOwnProperty(n)&&Ca[n]?(""+e).trim():e+"px"}function Zy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$y(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var mE=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gp(n,e){if(e){if(mE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Wp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function Im(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yp=null,fo=null,po=null;function z_(n){if(n=nl(n)){if(typeof Yp!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Du(e),Yp(n.stateNode,n.type,e))}}function Ky(n){fo?po?po.push(n):po=[n]:fo=n}function Jy(){if(fo){var n=fo,e=po;if(po=fo=null,z_(n),e)for(n=0;n<e.length;n++)z_(e[n])}}function jy(n,e){return n(e)}function Qy(){}var pp=!1;function ex(n,e,t){if(pp)return n(e,t);pp=!0;try{return jy(n,e,t)}finally{pp=!1,(fo!==null||po!==null)&&(Qy(),Jy())}}function za(n,e){var t=n.stateNode;if(t===null)return null;var i=Du(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var qp=!1;if(Bi)try{Js={},Object.defineProperty(Js,"passive",{get:function(){qp=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{qp=!1}var Js;function gE(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Ra=!1,ou=null,au=!1,$p=null,vE={onError:function(n){Ra=!0,ou=n}};function _E(n,e,t,i,r,s,o,a,l){Ra=!1,ou=null,gE.apply(vE,arguments)}function yE(n,e,t,i,r,s,o,a,l){if(_E.apply(this,arguments),Ra){if(Ra){var c=ou;Ra=!1,ou=null}else throw Error(ne(198));au||(au=!0,$p=c)}}function hs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function tx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function B_(n){if(hs(n)!==n)throw Error(ne(188))}function xE(n){var e=n.alternate;if(!e){if(e=hs(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return B_(r),n;if(s===i)return B_(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function nx(n){return n=xE(n),n!==null?ix(n):null}function ix(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ix(n);if(e!==null)return e;n=n.sibling}return null}var rx=In.unstable_scheduleCallback,V_=In.unstable_cancelCallback,SE=In.unstable_shouldYield,ME=In.unstable_requestPaint,At=In.unstable_now,wE=In.unstable_getCurrentPriorityLevel,Lm=In.unstable_ImmediatePriority,sx=In.unstable_UserBlockingPriority,lu=In.unstable_NormalPriority,EE=In.unstable_LowPriority,ox=In.unstable_IdlePriority,Ru=null,xi=null;function bE(n){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Ru,n,void 0,(n.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:CE,TE=Math.log,AE=Math.LN2;function CE(n){return n>>>=0,n===0?32:31-(TE(n)/AE|0)|0}var Dc=64,Nc=4194304;function Ta(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=t&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-li(e),r=1<<t,i|=n[t],e&=~r;return i}function RE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=RE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Zp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ax(){var n=Dc;return Dc<<=1,(Dc&4194240)===0&&(Dc=64),n}function mp(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function el(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-li(e),n[e]=t}function IE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-li(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Dm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-li(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function lx(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cx,Nm,ux,hx,dx,Kp=!1,Uc=[],Sr=null,Mr=null,wr=null,Ba=new Map,Va=new Map,vr=[],LE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function H_(n,e){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function va(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Nm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function DE(n,e,t,i,r){switch(e){case"focusin":return Sr=va(Sr,n,e,t,i,r),!0;case"dragenter":return Mr=va(Mr,n,e,t,i,r),!0;case"mouseover":return wr=va(wr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,va(Ba.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,va(Va.get(s)||null,n,e,t,i,r)),!0}return!1}function fx(n){var e=es(n.target);if(e!==null){var t=hs(e);if(t!==null){if(e=t.tag,e===13){if(e=tx(t),e!==null){n.blockedOn=e,dx(n.priority,function(){ux(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Jp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Xp=i,t.target.dispatchEvent(i),Xp=null}else return e=nl(t),e!==null&&Nm(e),n.blockedOn=t,!1;e.shift()}return!0}function G_(n,e,t){Zc(n)&&t.delete(e)}function NE(){Kp=!1,Sr!==null&&Zc(Sr)&&(Sr=null),Mr!==null&&Zc(Mr)&&(Mr=null),wr!==null&&Zc(wr)&&(wr=null),Ba.forEach(G_),Va.forEach(G_)}function _a(n,e){n.blockedOn===e&&(n.blockedOn=null,Kp||(Kp=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,NE)))}function Ha(n){function e(r){return _a(r,n)}if(0<Uc.length){_a(Uc[0],n);for(var t=1;t<Uc.length;t++){var i=Uc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Sr!==null&&_a(Sr,n),Mr!==null&&_a(Mr,n),wr!==null&&_a(wr,n),Ba.forEach(e),Va.forEach(e),t=0;t<vr.length;t++)i=vr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vr.length&&(t=vr[0],t.blockedOn===null);)fx(t),t.blockedOn===null&&vr.shift()}var mo=Wi.ReactCurrentBatchConfig,uu=!0;function UE(n,e,t,i){var r=at,s=mo.transition;mo.transition=null;try{at=1,Um(n,e,t,i)}finally{at=r,mo.transition=s}}function kE(n,e,t,i){var r=at,s=mo.transition;mo.transition=null;try{at=4,Um(n,e,t,i)}finally{at=r,mo.transition=s}}function Um(n,e,t,i){if(uu){var r=Jp(n,e,t,i);if(r===null)Mp(n,e,i,hu,t),H_(n,i);else if(DE(r,n,e,t,i))i.stopPropagation();else if(H_(n,i),e&4&&-1<LE.indexOf(n)){for(;r!==null;){var s=nl(r);if(s!==null&&cx(s),s=Jp(n,e,t,i),s===null&&Mp(n,e,i,hu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mp(n,e,i,null,t)}}var hu=null;function Jp(n,e,t,i){if(hu=null,n=Im(i),n=es(n),n!==null)if(e=hs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=tx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return hu=n,null}function px(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wE()){case Lm:return 1;case sx:return 4;case lu:case EE:return 16;case ox:return 536870912;default:return 16}default:return 16}}var yr=null,km=null,Kc=null;function mx(){if(Kc)return Kc;var n,e=km,t=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Kc=r.slice(n,1<i?1-i:void 0)}function Jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function kc(){return!0}function W_(){return!1}function Ln(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kc:W_,this.isPropagationStopped=W_,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kc)},persist:function(){},isPersistent:kc}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=Ln(bo),tl=yt({},bo,{view:0,detail:0}),FE=Ln(tl),gp,vp,ya,Pu=yt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Om,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ya&&(ya&&n.type==="mousemove"?(gp=n.screenX-ya.screenX,vp=n.screenY-ya.screenY):vp=gp=0,ya=n),gp)},movementY:function(n){return"movementY"in n?n.movementY:vp}}),X_=Ln(Pu),OE=yt({},Pu,{dataTransfer:0}),zE=Ln(OE),BE=yt({},tl,{relatedTarget:0}),_p=Ln(BE),VE=yt({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),HE=Ln(VE),GE=yt({},bo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),WE=Ln(GE),XE=yt({},bo,{data:0}),Y_=Ln(XE),YE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$E[n])?!!e[n]:!1}function Om(){return ZE}var KE=yt({},tl,{key:function(n){if(n.key){var e=YE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Om,charCode:function(n){return n.type==="keypress"?Jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),JE=Ln(KE),jE=yt({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q_=Ln(jE),QE=yt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Om}),eb=Ln(QE),tb=yt({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),nb=Ln(tb),ib=yt({},Pu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rb=Ln(ib),sb=[9,13,27,32],zm=Bi&&"CompositionEvent"in window,Pa=null;Bi&&"documentMode"in document&&(Pa=document.documentMode);var ob=Bi&&"TextEvent"in window&&!Pa,gx=Bi&&(!zm||Pa&&8<Pa&&11>=Pa),$_=" ",Z_=!1;function vx(n,e){switch(n){case"keyup":return sb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _x(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var to=!1;function ab(n,e){switch(n){case"compositionend":return _x(e);case"keypress":return e.which!==32?null:(Z_=!0,$_);case"textInput":return n=e.data,n===$_&&Z_?null:n;default:return null}}function lb(n,e){if(to)return n==="compositionend"||!zm&&vx(n,e)?(n=mx(),Kc=km=yr=null,to=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gx&&e.locale!=="ko"?null:e.data;default:return null}}var cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!cb[n.type]:e==="textarea"}function yx(n,e,t,i){Ky(i),e=du(e,"onChange"),0<e.length&&(t=new Fm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ia=null,Ga=null;function ub(n){Px(n,0)}function Iu(n){var e=ro(n);if(Gy(e))return n}function hb(n,e){if(n==="change")return e}var xx=!1;Bi&&(Bi?(Oc="oninput"in document,Oc||(yp=document.createElement("div"),yp.setAttribute("oninput","return;"),Oc=typeof yp.oninput=="function"),Fc=Oc):Fc=!1,xx=Fc&&(!document.documentMode||9<document.documentMode));var Fc,Oc,yp;function J_(){Ia&&(Ia.detachEvent("onpropertychange",Sx),Ga=Ia=null)}function Sx(n){if(n.propertyName==="value"&&Iu(Ga)){var e=[];yx(e,Ga,n,Im(n)),ex(ub,e)}}function db(n,e,t){n==="focusin"?(J_(),Ia=e,Ga=t,Ia.attachEvent("onpropertychange",Sx)):n==="focusout"&&J_()}function fb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Iu(Ga)}function pb(n,e){if(n==="click")return Iu(e)}function mb(n,e){if(n==="input"||n==="change")return Iu(e)}function gb(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ui=typeof Object.is=="function"?Object.is:gb;function Wa(n,e){if(ui(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Dp.call(e,r)||!ui(n[r],e[r]))return!1}return!0}function j_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Q_(n,e){var t=j_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=j_(t)}}function Mx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Mx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function wx(){for(var n=window,e=su();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=su(n.document)}return e}function Bm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function vb(n){var e=wx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Mx(t.ownerDocument.documentElement,t)){if(i!==null&&Bm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Q_(t,s);var o=Q_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _b=Bi&&"documentMode"in document&&11>=document.documentMode,no=null,jp=null,La=null,Qp=!1;function ey(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qp||no==null||no!==su(i)||(i=no,"selectionStart"in i&&Bm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),La&&Wa(La,i)||(La=i,i=du(jp,"onSelect"),0<i.length&&(e=new Fm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=no)))}function zc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var io={animationend:zc("Animation","AnimationEnd"),animationiteration:zc("Animation","AnimationIteration"),animationstart:zc("Animation","AnimationStart"),transitionend:zc("Transition","TransitionEnd")},xp={},Ex={};Bi&&(Ex=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Lu(n){if(xp[n])return xp[n];if(!io[n])return n;var e=io[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ex)return xp[n]=e[t];return n}var bx=Lu("animationend"),Tx=Lu("animationiteration"),Ax=Lu("animationstart"),Cx=Lu("transitionend"),Rx=new Map,ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,e){Rx.set(n,e),us(e,[n])}for(Bc=0;Bc<ty.length;Bc++)Vc=ty[Bc],ny=Vc.toLowerCase(),iy=Vc[0].toUpperCase()+Vc.slice(1),Ir(ny,"on"+iy);var Vc,ny,iy,Bc;Ir(bx,"onAnimationEnd");Ir(Tx,"onAnimationIteration");Ir(Ax,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Cx,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function ry(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,yE(i,e,void 0,n),n.currentTarget=null}function Px(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ry(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ry(r,a,c),s=l}}}if(au)throw n=$p,au=!1,$p=null,n}function pt(n,e){var t=e[rm];t===void 0&&(t=e[rm]=new Set);var i=n+"__bubble";t.has(i)||(Ix(e,n,2,!1),t.add(i))}function Sp(n,e,t){var i=0;e&&(i|=4),Ix(t,n,i,e)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function Xa(n){if(!n[Hc]){n[Hc]=!0,Oy.forEach(function(t){t!=="selectionchange"&&(yb.has(t)||Sp(t,!1,n),Sp(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Hc]||(e[Hc]=!0,Sp("selectionchange",!1,e))}}function Ix(n,e,t,i){switch(px(e)){case 1:var r=UE;break;case 4:r=kE;break;default:r=Um}t=r.bind(null,e,t,n),r=void 0,!qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Mp(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ex(function(){var c=s,u=Im(t),d=[];e:{var h=Rx.get(n);if(h!==void 0){var p=Fm,m=n;switch(n){case"keypress":if(Jc(t)===0)break e;case"keydown":case"keyup":p=JE;break;case"focusin":m="focus",p=_p;break;case"focusout":m="blur",p=_p;break;case"beforeblur":case"afterblur":p=_p;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=X_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eb;break;case bx:case Tx:case Ax:p=HE;break;case Cx:p=nb;break;case"scroll":p=FE;break;case"wheel":p=rb;break;case"copy":case"cut":case"paste":p=WE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q_}var y=(e&4)!==0,g=!y&&n==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var _=c,v;_!==null;){v=_;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,f!==null&&(x=za(_,f),x!=null&&y.push(Ya(_,x,v)))),g)break;_=_.return}0<y.length&&(h=new p(h,m,null,t,u),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Xp&&(m=t.relatedTarget||t.fromElement)&&(es(m)||m[Vi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?es(m):null,m!==null&&(g=hs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=X_,x="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(y=q_,x="onPointerLeave",f="onPointerEnter",_="pointer"),g=p==null?h:ro(p),v=m==null?h:ro(m),h=new y(x,_+"leave",p,t,u),h.target=g,h.relatedTarget=v,x=null,es(u)===c&&(y=new y(f,_+"enter",m,t,u),y.target=v,y.relatedTarget=g,x=y),g=x,p&&m)t:{for(y=p,f=m,_=0,v=y;v;v=js(v))_++;for(v=0,x=f;x;x=js(x))v++;for(;0<_-v;)y=js(y),_--;for(;0<v-_;)f=js(f),v--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=js(y),f=js(f)}y=null}else y=null;p!==null&&sy(d,h,p,y,!1),m!==null&&g!==null&&sy(d,g,m,y,!0)}}e:{if(h=c?ro(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=hb;else if(K_(h))if(xx)A=mb;else{A=fb;var E=db}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=pb);if(A&&(A=A(n,c))){yx(d,A,t,u);break e}E&&E(n,h,c),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Bp(h,"number",h.value)}switch(E=c?ro(c):window,n){case"focusin":(K_(E)||E.contentEditable==="true")&&(no=E,jp=c,La=null);break;case"focusout":La=jp=no=null;break;case"mousedown":Qp=!0;break;case"contextmenu":case"mouseup":case"dragend":Qp=!1,ey(d,t,u);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":ey(d,t,u)}var b;if(zm)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else to?vx(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(gx&&t.locale!=="ko"&&(to||C!=="onCompositionStart"?C==="onCompositionEnd"&&to&&(b=mx()):(yr=u,km="value"in yr?yr.value:yr.textContent,to=!0)),E=du(c,C),0<E.length&&(C=new Y_(C,n,null,t,u),d.push({event:C,listeners:E}),b?C.data=b:(b=_x(t),b!==null&&(C.data=b)))),(b=ob?ab(n,t):lb(n,t))&&(c=du(c,"onBeforeInput"),0<c.length&&(u=new Y_("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=b))}Px(d,e)})}function Ya(n,e,t){return{instance:n,listener:e,currentTarget:t}}function du(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(n,t),s!=null&&i.unshift(Ya(n,s,r)),s=za(n,e),s!=null&&i.push(Ya(n,s,r))),n=n.return}return i}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sy(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=za(t,s),l!=null&&o.unshift(Ya(t,l,a))):r||(l=za(t,s),l!=null&&o.push(Ya(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var xb=/\r\n?/g,Sb=/\u0000|\uFFFD/g;function oy(n){return(typeof n=="string"?n:""+n).replace(xb,`
`).replace(Sb,"")}function Gc(n,e,t){if(e=oy(e),oy(n)!==e&&t)throw Error(ne(425))}function fu(){}var em=null,tm=null;function nm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var im=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,wb=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(n){return ay.resolve(null).then(n).catch(Eb)}:im;function Eb(n){setTimeout(function(){throw n})}function wp(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ha(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ha(e)}function Er(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ly(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var To=Math.random().toString(36).slice(2),yi="__reactFiber$"+To,qa="__reactProps$"+To,Vi="__reactContainer$"+To,rm="__reactEvents$"+To,bb="__reactListeners$"+To,Tb="__reactHandles$"+To;function es(n){var e=n[yi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vi]||t[yi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ly(n);n!==null;){if(t=n[yi])return t;n=ly(n)}return e}n=t,t=n.parentNode}return null}function nl(n){return n=n[yi]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ro(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Du(n){return n[qa]||null}var sm=[],so=-1;function Lr(n){return{current:n}}function mt(n){0>so||(n.current=sm[so],sm[so]=null,so--)}function ht(n,e){so++,sm[so]=n.current,n.current=e}var Pr={},tn=Lr(Pr),Sn=Lr(!1),ss=Pr;function yo(n,e){var t=n.type.contextTypes;if(!t)return Pr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(n){return n=n.childContextTypes,n!=null}function pu(){mt(Sn),mt(tn)}function cy(n,e,t){if(tn.current!==Pr)throw Error(ne(168));ht(tn,e),ht(Sn,t)}function Lx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,dE(n)||"Unknown",r));return yt({},t,i)}function mu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,ss=tn.current,ht(tn,n),ht(Sn,Sn.current),!0}function uy(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Lx(n,e,ss),i.__reactInternalMemoizedMergedChildContext=n,mt(Sn),mt(tn),ht(tn,n)):mt(Sn),ht(Sn,t)}var ki=null,Nu=!1,Ep=!1;function Dx(n){ki===null?ki=[n]:ki.push(n)}function Ab(n){Nu=!0,Dx(n)}function Dr(){if(!Ep&&ki!==null){Ep=!0;var n=0,e=at;try{var t=ki;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,Nu=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),rx(Lm,Dr),r}finally{at=e,Ep=!1}}return null}var oo=[],ao=0,gu=null,vu=0,Wn=[],Xn=0,os=null,Fi=1,Oi="";function jr(n,e){oo[ao++]=vu,oo[ao++]=gu,gu=n,vu=e}function Nx(n,e,t){Wn[Xn++]=Fi,Wn[Xn++]=Oi,Wn[Xn++]=os,os=n;var i=Fi;n=Oi;var r=32-li(i)-1;i&=~(1<<r),t+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-li(e)+r|t<<r|i,Oi=s+n}else Fi=1<<s|t<<r|i,Oi=n}function Vm(n){n.return!==null&&(jr(n,1),Nx(n,1,0))}function Hm(n){for(;n===gu;)gu=oo[--ao],oo[ao]=null,vu=oo[--ao],oo[ao]=null;for(;n===os;)os=Wn[--Xn],Wn[Xn]=null,Oi=Wn[--Xn],Wn[Xn]=null,Fi=Wn[--Xn],Wn[Xn]=null}var Pn=null,Rn=null,gt=!1,ai=null;function Ux(n,e){var t=Yn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hy(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Pn=n,Rn=Er(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Pn=n,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=os!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Pn=n,Rn=null,!0):!1;default:return!1}}function om(n){return(n.mode&1)!==0&&(n.flags&128)===0}function am(n){if(gt){var e=Rn;if(e){var t=e;if(!hy(n,e)){if(om(n))throw Error(ne(418));e=Er(t.nextSibling);var i=Pn;e&&hy(n,e)?Ux(i,t):(n.flags=n.flags&-4097|2,gt=!1,Pn=n)}}else{if(om(n))throw Error(ne(418));n.flags=n.flags&-4097|2,gt=!1,Pn=n}}}function dy(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Pn=n}function Wc(n){if(n!==Pn)return!1;if(!gt)return dy(n),gt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!nm(n.type,n.memoizedProps)),e&&(e=Rn)){if(om(n))throw kx(),Error(ne(418));for(;e;)Ux(n,e),e=Er(e.nextSibling)}if(dy(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Rn=Er(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Rn=null}}else Rn=Pn?Er(n.stateNode.nextSibling):null;return!0}function kx(){for(var n=Rn;n;)n=Er(n.nextSibling)}function xo(){Rn=Pn=null,gt=!1}function Gm(n){ai===null?ai=[n]:ai.push(n)}var Cb=Wi.ReactCurrentBatchConfig;function xa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Xc(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function fy(n){var e=n._init;return e(n._payload)}function Fx(n){function e(f,_){if(n){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Cr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,x){return _===null||_.tag!==6?(_=Ip(v,f.mode,x),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,x){var A=v.type;return A===eo?u(f,_,v.props.children,x,v.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&fy(A)===_.type)?(x=r(_,v.props),x.ref=xa(f,_,v),x.return=f,x):(x=ru(v.type,v.key,v.props,null,f.mode,x),x.ref=xa(f,_,v),x.return=f,x)}function c(f,_,v,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Lp(v,f.mode,x),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,x,A){return _===null||_.tag!==7?(_=rs(v,f.mode,x,A),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ip(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pc:return v=ru(_.type,_.key,_.props,null,f.mode,v),v.ref=xa(f,null,_),v.return=f,v;case Qs:return _=Lp(_,f.mode,v),_.return=f,_;case mr:var x=_._init;return d(f,x(_._payload),v)}if(ba(_)||ga(_))return _=rs(_,f.mode,v,null),_.return=f,_;Xc(f,_)}return null}function h(f,_,v,x){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(f,_,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pc:return v.key===A?l(f,_,v,x):null;case Qs:return v.key===A?c(f,_,v,x):null;case mr:return A=v._init,h(f,_,A(v._payload),x)}if(ba(v)||ga(v))return A!==null?null:u(f,_,v,x,null);Xc(f,v)}return null}function p(f,_,v,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(v)||null,a(_,f,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pc:return f=f.get(x.key===null?v:x.key)||null,l(_,f,x,A);case Qs:return f=f.get(x.key===null?v:x.key)||null,c(_,f,x,A);case mr:var E=x._init;return p(f,_,v,E(x._payload),A)}if(ba(x)||ga(x))return f=f.get(v)||null,u(_,f,x,A,null);Xc(_,x)}return null}function m(f,_,v,x){for(var A=null,E=null,b=_,C=_=0,U=null;b!==null&&C<v.length;C++){b.index>C?(U=b,b=null):U=b.sibling;var S=h(f,b,v[C],x);if(S===null){b===null&&(b=U);break}n&&b&&S.alternate===null&&e(f,b),_=s(S,_,C),E===null?A=S:E.sibling=S,E=S,b=U}if(C===v.length)return t(f,b),gt&&jr(f,C),A;if(b===null){for(;C<v.length;C++)b=d(f,v[C],x),b!==null&&(_=s(b,_,C),E===null?A=b:E.sibling=b,E=b);return gt&&jr(f,C),A}for(b=i(f,b);C<v.length;C++)U=p(b,f,C,v[C],x),U!==null&&(n&&U.alternate!==null&&b.delete(U.key===null?C:U.key),_=s(U,_,C),E===null?A=U:E.sibling=U,E=U);return n&&b.forEach(function(w){return e(f,w)}),gt&&jr(f,C),A}function y(f,_,v,x){var A=ga(v);if(typeof A!="function")throw Error(ne(150));if(v=A.call(v),v==null)throw Error(ne(151));for(var E=A=null,b=_,C=_=0,U=null,S=v.next();b!==null&&!S.done;C++,S=v.next()){b.index>C?(U=b,b=null):U=b.sibling;var w=h(f,b,S.value,x);if(w===null){b===null&&(b=U);break}n&&b&&w.alternate===null&&e(f,b),_=s(w,_,C),E===null?A=w:E.sibling=w,E=w,b=U}if(S.done)return t(f,b),gt&&jr(f,C),A;if(b===null){for(;!S.done;C++,S=v.next())S=d(f,S.value,x),S!==null&&(_=s(S,_,C),E===null?A=S:E.sibling=S,E=S);return gt&&jr(f,C),A}for(b=i(f,b);!S.done;C++,S=v.next())S=p(b,f,C,S.value,x),S!==null&&(n&&S.alternate!==null&&b.delete(S.key===null?C:S.key),_=s(S,_,C),E===null?A=S:E.sibling=S,E=S);return n&&b.forEach(function(O){return e(f,O)}),gt&&jr(f,C),A}function g(f,_,v,x){if(typeof v=="object"&&v!==null&&v.type===eo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pc:e:{for(var A=v.key,E=_;E!==null;){if(E.key===A){if(A=v.type,A===eo){if(E.tag===7){t(f,E.sibling),_=r(E,v.props.children),_.return=f,f=_;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mr&&fy(A)===E.type){t(f,E.sibling),_=r(E,v.props),_.ref=xa(f,E,v),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}v.type===eo?(_=rs(v.props.children,f.mode,x,v.key),_.return=f,f=_):(x=ru(v.type,v.key,v.props,null,f.mode,x),x.ref=xa(f,_,v),x.return=f,f=x)}return o(f);case Qs:e:{for(E=v.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=Lp(v,f.mode,x),_.return=f,f=_}return o(f);case mr:return E=v._init,g(f,_,E(v._payload),x)}if(ba(v))return m(f,_,v,x);if(ga(v))return y(f,_,v,x);Xc(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,v),_.return=f,f=_):(t(f,_),_=Ip(v,f.mode,x),_.return=f,f=_),o(f)):t(f,_)}return g}var So=Fx(!0),Ox=Fx(!1),_u=Lr(null),yu=null,lo=null,Wm=null;function Xm(){Wm=lo=yu=null}function Ym(n){var e=_u.current;mt(_u),n._currentValue=e}function lm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function go(n,e){yu=n,Wm=lo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(xn=!0),n.firstContext=null)}function $n(n){var e=n._currentValue;if(Wm!==n)if(n={context:n,memoizedValue:e,next:null},lo===null){if(yu===null)throw Error(ne(308));lo=n,yu.dependencies={lanes:0,firstContext:n}}else lo=lo.next=n;return e}var ts=null;function qm(n){ts===null?ts=[n]:ts.push(n)}function zx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,qm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Hi(n,i)}function Hi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var gr=!1;function $m(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(n,t)}return r=i.interleaved,r===null?(e.next=e,qm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(n,t)}function jc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}function py(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function xu(n,e,t,i){var r=n.updateQueue;gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,y=a;switch(h=e,p=t,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=yt({},d,h);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,n.lanes=o,n.memoizedState=d}}function my(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var il={},Si=Lr(il),$a=Lr(il),Za=Lr(il);function ns(n){if(n===il)throw Error(ne(174));return n}function Zm(n,e){switch(ht(Za,e),ht($a,n),ht(Si,il),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Hp(e,n)}mt(Si),ht(Si,e)}function Mo(){mt(Si),mt($a),mt(Za)}function Vx(n){ns(Za.current);var e=ns(Si.current),t=Hp(e,n.type);e!==t&&(ht($a,n),ht(Si,t))}function Km(n){$a.current===n&&(mt(Si),mt($a))}var vt=Lr(0);function Su(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bp=[];function Jm(){for(var n=0;n<bp.length;n++)bp[n]._workInProgressVersionPrimary=null;bp.length=0}var Qc=Wi.ReactCurrentDispatcher,Tp=Wi.ReactCurrentBatchConfig,as=0,_t=null,Nt=null,zt=null,Mu=!1,Da=!1,Ka=0,Rb=0;function jt(){throw Error(ne(321))}function jm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ui(n[t],e[t]))return!1;return!0}function Qm(n,e,t,i,r,s){if(as=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qc.current=n===null||n.memoizedState===null?Db:Nb,n=t(i,r),Da){s=0;do{if(Da=!1,Ka=0,25<=s)throw Error(ne(301));s+=1,zt=Nt=null,e.updateQueue=null,Qc.current=Ub,n=t(i,r)}while(Da)}if(Qc.current=wu,e=Nt!==null&&Nt.next!==null,as=0,zt=Nt=_t=null,Mu=!1,e)throw Error(ne(300));return n}function eg(){var n=Ka!==0;return Ka=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?_t.memoizedState=zt=n:zt=zt.next=n,zt}function Zn(){if(Nt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Nt.next;var e=zt===null?_t.memoizedState:zt.next;if(e!==null)zt=e,Nt=n;else{if(n===null)throw Error(ne(310));Nt=n,n={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?_t.memoizedState=zt=n:zt=zt.next=n}return zt}function Ja(n,e){return typeof e=="function"?e(n):e}function Ap(n){var e=Zn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((as&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,ls|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Cp(n){var e=Zn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Hx(){}function Gx(n,e){var t=_t,i=Zn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,tg(Yx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(t.flags|=2048,ja(9,Xx.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ne(349));(as&30)!==0||Wx(t,e,r)}return r}function Wx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xx(n,e,t,i){e.value=t,e.getSnapshot=i,qx(e)&&$x(n)}function Yx(n,e,t){return t(function(){qx(e)&&$x(n)})}function qx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ui(n,t)}catch{return!0}}function $x(n){var e=Hi(n,1);e!==null&&ci(e,n,1,-1)}function gy(n){var e=_i();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},e.queue=n,n=n.dispatch=Lb.bind(null,_t,n),[e.memoizedState,n]}function ja(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Zx(){return Zn().memoizedState}function eu(n,e,t,i){var r=_i();_t.flags|=n,r.memoizedState=ja(1|e,t,void 0,i===void 0?null:i)}function Uu(n,e,t,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&jm(i,o.deps)){r.memoizedState=ja(e,t,s,i);return}}_t.flags|=n,r.memoizedState=ja(1|e,t,s,i)}function vy(n,e){return eu(8390656,8,n,e)}function tg(n,e){return Uu(2048,8,n,e)}function Kx(n,e){return Uu(4,2,n,e)}function Jx(n,e){return Uu(4,4,n,e)}function jx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Qx(n,e,t){return t=t!=null?t.concat([n]):null,Uu(4,4,jx.bind(null,e,n),t)}function ng(){}function eS(n,e){var t=Zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function tS(n,e){var t=Zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function nS(n,e,t){return(as&21)===0?(n.baseState&&(n.baseState=!1,xn=!0),n.memoizedState=t):(ui(t,e)||(t=ax(),_t.lanes|=t,ls|=t,n.baseState=!0),e)}function Pb(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=Tp.transition;Tp.transition={};try{n(!1),e()}finally{at=t,Tp.transition=i}}function iS(){return Zn().memoizedState}function Ib(n,e,t){var i=Ar(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},rS(n))sS(e,t);else if(t=zx(n,e,t,i),t!==null){var r=un();ci(t,n,i,r),oS(t,e,i)}}function Lb(n,e,t){var i=Ar(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(rS(n))sS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,qm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}t=zx(n,e,r,i),t!==null&&(r=un(),ci(t,n,i,r),oS(t,e,i))}}function rS(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function sS(n,e){Da=Mu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function oS(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}var wu={readContext:$n,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Db={readContext:$n,useCallback:function(n,e){return _i().memoizedState=[n,e===void 0?null:e],n},useContext:$n,useEffect:vy,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,eu(4194308,4,jx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return eu(4194308,4,n,e)},useInsertionEffect:function(n,e){return eu(4,2,n,e)},useMemo:function(n,e){var t=_i();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_i();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ib.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=_i();return n={current:n},e.memoizedState=n},useState:gy,useDebugValue:ng,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=gy(!1),e=n[0];return n=Pb.bind(null,n[1]),_i().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=_i();if(gt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Bt===null)throw Error(ne(349));(as&30)!==0||Wx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,vy(Yx.bind(null,i,s,n),[n]),i.flags|=2048,ja(9,Xx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_i(),e=Bt.identifierPrefix;if(gt){var t=Oi,i=Fi;t=(i&~(1<<32-li(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ka++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Rb++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Nb={readContext:$n,useCallback:eS,useContext:$n,useEffect:tg,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:Jx,useMemo:tS,useReducer:Ap,useRef:Zx,useState:function(){return Ap(Ja)},useDebugValue:ng,useDeferredValue:function(n){var e=Zn();return nS(e,Nt.memoizedState,n)},useTransition:function(){var n=Ap(Ja)[0],e=Zn().memoizedState;return[n,e]},useMutableSource:Hx,useSyncExternalStore:Gx,useId:iS,unstable_isNewReconciler:!1},Ub={readContext:$n,useCallback:eS,useContext:$n,useEffect:tg,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:Jx,useMemo:tS,useReducer:Cp,useRef:Zx,useState:function(){return Cp(Ja)},useDebugValue:ng,useDeferredValue:function(n){var e=Zn();return Nt===null?e.memoizedState=n:nS(e,Nt.memoizedState,n)},useTransition:function(){var n=Cp(Ja)[0],e=Zn().memoizedState;return[n,e]},useMutableSource:Hx,useSyncExternalStore:Gx,useId:iS,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function cm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ku={isMounted:function(n){return(n=n._reactInternals)?hs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=un(),r=Ar(n),s=zi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(ci(e,n,r,i),jc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=un(),r=Ar(n),s=zi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(ci(e,n,r,i),jc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),i=Ar(n),r=zi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(ci(e,n,i,t),jc(e,n,i))}};function _y(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(t,i)||!Wa(r,s):!0}function aS(n,e,t){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Mn(e)?ss:tn.current,i=e.contextTypes,s=(i=i!=null)?yo(n,r):Pr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ku,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function yy(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ku.enqueueReplaceState(e,e.state,null)}function um(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},$m(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Mn(e)?ss:tn.current,r.context=yo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ku.enqueueReplaceState(r,r.state,null),xu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function wo(n,e){try{var t="",i=e;do t+=hE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Rp(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function hm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function lS(n,e,t){t=zi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bu||(bu=!0,Sm=i),hm(n,e)},t}function cS(n,e,t){t=zi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){hm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){hm(n,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function xy(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new kb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Kb.bind(null,n,e,t),e.then(n,n))}function Sy(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function My(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Fb=Wi.ReactCurrentOwner,xn=!1;function cn(n,e,t,i){e.child=n===null?Ox(e,null,t,i):So(e,n.child,t,i)}function wy(n,e,t,i,r){t=t.render;var s=e.ref;return go(e,r),i=Qm(n,e,t,i,s,r),t=eg(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(gt&&t&&Vm(e),e.flags|=1,cn(n,e,i,r),e.child)}function Ey(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ug(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,uS(n,e,s,i,r)):(n=ru(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Wa,t(o,i)&&n.ref===e.ref)return Gi(n,e,r)}return e.flags|=1,n=Cr(s,i),n.ref=e.ref,n.return=e,e.child=n}function uS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Wa(s,i)&&n.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(xn=!0);else return e.lanes=n.lanes,Gi(n,e,r)}return dm(n,e,t,i,r)}function hS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(uo,Cn),Cn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(uo,Cn),Cn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(uo,Cn),Cn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(uo,Cn),Cn|=i;return cn(n,e,r,t),e.child}function dS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function dm(n,e,t,i,r){var s=Mn(t)?ss:tn.current;return s=yo(e,s),go(e,r),t=Qm(n,e,t,i,s,r),i=eg(),n!==null&&!xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gi(n,e,r)):(gt&&i&&Vm(e),e.flags|=1,cn(n,e,t,r),e.child)}function by(n,e,t,i,r){if(Mn(t)){var s=!0;mu(e)}else s=!1;if(go(e,r),e.stateNode===null)tu(n,e),aS(e,t,i),um(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Mn(t)?ss:tn.current,c=yo(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&yy(e,o,i,c),gr=!1;var h=e.memoizedState;o.state=h,xu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Sn.current||gr?(typeof u=="function"&&(cm(e,t,u,i),l=e.memoizedState),(a=gr||_y(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Mn(t)?ss:tn.current,l=yo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&yy(e,o,i,l),gr=!1,h=e.memoizedState,o.state=h,xu(e,i,o,r);var m=e.memoizedState;a!==d||h!==m||Sn.current||gr?(typeof p=="function"&&(cm(e,t,p,i),m=e.memoizedState),(c=gr||_y(e,t,c,i,h,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return fm(n,e,t,i,s,r)}function fm(n,e,t,i,r,s){dS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&uy(e,t,!1),Gi(n,e,s);i=e.stateNode,Fb.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=So(e,n.child,null,s),e.child=So(e,null,a,s)):cn(n,e,a,s),e.memoizedState=i.state,r&&uy(e,t,!0),e.child}function fS(n){var e=n.stateNode;e.pendingContext?cy(n,e.pendingContext,e.pendingContext!==e.context):e.context&&cy(n,e.context,!1),Zm(n,e.containerInfo)}function Ty(n,e,t,i,r){return xo(),Gm(r),e.flags|=256,cn(n,e,t,i),e.child}var pm={dehydrated:null,treeContext:null,retryLane:0};function mm(n){return{baseLanes:n,cachePool:null,transitions:null}}function pS(n,e,t){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(vt,r&1),n===null)return am(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,i,0,null),n=rs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=mm(t),e.memoizedState=pm,n):ig(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ob(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=rs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?mm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=pm,i}return s=n.child,n=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ig(n,e){return e=zu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Yc(n,e,t,i){return i!==null&&Gm(i),So(e,n.child,null,t),n=ig(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ob(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Rp(Error(ne(422))),Yc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zu({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&So(e,n.child,null,o),e.child.memoizedState=mm(o),e.memoizedState=pm,s);if((e.mode&1)===0)return Yc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Rp(s,i,void 0),Yc(n,e,o,i)}if(a=(o&n.childLanes)!==0,xn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(n,r),ci(i,n,r,-1))}return cg(),i=Rp(Error(ne(421))),Yc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Jb.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Rn=Er(r.nextSibling),Pn=e,gt=!0,ai=null,n!==null&&(Wn[Xn++]=Fi,Wn[Xn++]=Oi,Wn[Xn++]=os,Fi=n.id,Oi=n.overflow,os=e),e=ig(e,i.children),e.flags|=4096,e)}function Ay(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),lm(n.return,e,t)}function Pp(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function mS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=vt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ay(n,t,e);else if(n.tag===19)Ay(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(vt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Su(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Pp(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Su(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Pp(e,!0,t,null,s);break;case"together":Pp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ls|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Cr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zb(n,e,t){switch(e.tag){case 3:fS(e),xo();break;case 5:Vx(e);break;case 1:Mn(e.type)&&mu(e);break;case 4:Zm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(_u,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(vt,vt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?pS(n,e,t):(ht(vt,vt.current&1),n=Gi(n,e,t),n!==null?n.sibling:null);ht(vt,vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return mS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,hS(n,e,t)}return Gi(n,e,t)}var gS,gm,vS,_S;gS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};gm=function(){};vS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ns(Si.current);var s=null;switch(t){case"input":r=Op(n,r),i=Op(n,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Vp(n,r),i=Vp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fu)}Gp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_S=function(n,e,t,i){t!==i&&(e.flags|=4)};function Sa(n,e){if(!gt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Bb(n,e,t){var i=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Mn(e.type)&&pu(),Qt(e),null;case 3:return i=e.stateNode,Mo(),mt(Sn),mt(tn),Jm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Wc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ai!==null&&(Em(ai),ai=null))),gm(n,e),Qt(e),null;case 5:Km(e);var r=ns(Za.current);if(t=e.type,n!==null&&e.stateNode!=null)vS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(n=ns(Si.current),Wc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[qa]=s,n=(e.mode&1)!==0,t){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)pt(Aa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":U_(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":F_(i,s),pt("invalid",i)}Gp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gc(i.textContent,a,n),r=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(t){case"input":Ic(i),k_(i,s,!0);break;case"textarea":Ic(i),O_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Yy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yi]=e,n[qa]=i,gS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Wp(t,i),t){case"dialog":pt("cancel",n),pt("close",n),r=i;break;case"iframe":case"object":case"embed":pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)pt(Aa[r],n);r=i;break;case"source":pt("error",n),r=i;break;case"img":case"image":case"link":pt("error",n),pt("load",n),r=i;break;case"details":pt("toggle",n),r=i;break;case"input":U_(n,i),r=Op(n,i),pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),pt("invalid",n);break;case"textarea":F_(n,i),r=Vp(n,i),pt("invalid",n);break;default:r=i}Gp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Oa(n,l):typeof l=="number"&&Oa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",n):l!=null&&Am(n,s,l,o))}switch(t){case"input":Ic(n),k_(n,i,!1);break;case"textarea":Ic(n),O_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ho(n,!!i.multiple,s,!1):i.defaultValue!=null&&ho(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(n&&e.stateNode!=null)_S(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ns(Za.current),ns(Si.current),Wc(e)){if(i=e.stateNode,t=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==t)&&(n=Pn,n!==null))switch(n.tag){case 3:Gc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return Qt(e),null;case 13:if(mt(vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gt&&Rn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)kx(),xo(),e.flags|=98560,s=!1;else if(s=Wc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[yi]=e}else xo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else ai!==null&&(Em(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(vt.current&1)!==0?Ut===0&&(Ut=3):cg())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Mo(),gm(n,e),n===null&&Xa(e.stateNode.containerInfo),Qt(e),null;case 10:return Ym(e.type._context),Qt(e),null;case 17:return Mn(e.type)&&pu(),Qt(e),null;case 19:if(mt(vt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Sa(s,!1);else{if(Ut!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Su(n),o!==null){for(e.flags|=128,Sa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(vt,vt.current&1|2),e.child}n=n.sibling}s.tail!==null&&At()>Eo&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Su(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Qt(e),null}else 2*At()-s.renderingStartTime>Eo&&t!==1073741824&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,t=vt.current,ht(vt,i?t&1|2:t&1),e):(Qt(e),null);case 22:case 23:return lg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Cn&1073741824)!==0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Vb(n,e){switch(Hm(e),e.tag){case 1:return Mn(e.type)&&pu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Mo(),mt(Sn),mt(tn),Jm(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Km(e),null;case 13:if(mt(vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));xo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return mt(vt),null;case 4:return Mo(),null;case 10:return Ym(e.type._context),null;case 22:case 23:return lg(),null;case 24:return null;default:return null}}var qc=!1,en=!1,Hb=typeof WeakSet=="function"?WeakSet:Set,be=null;function co(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function vm(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var Cy=!1;function Gb(n,e){if(em=uu,n=wx(),Bm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(tm={focusedElem:n,selectionRange:t},uu=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:si(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){Mt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return m=Cy,Cy=!1,m}function Na(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&vm(e,t,s)}r=r.next}while(r!==i)}}function Fu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function _m(n){var e=n.ref;if(e!==null){var t=n.stateNode;n.tag,n=t,typeof e=="function"?e(n):e.current=n}}function yS(n){var e=n.alternate;e!==null&&(n.alternate=null,yS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yi],delete e[qa],delete e[rm],delete e[bb],delete e[Tb])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xS(n){return n.tag===5||n.tag===3||n.tag===4}function Ry(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ym(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fu));else if(i!==4&&(n=n.child,n!==null))for(ym(n,e,t),n=n.sibling;n!==null;)ym(n,e,t),n=n.sibling}function xm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(xm(n,e,t),n=n.sibling;n!==null;)xm(n,e,t),n=n.sibling}var Yt=null,oi=!1;function pr(n,e,t){for(t=t.child;t!==null;)SS(n,e,t),t=t.sibling}function SS(n,e,t){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Ru,t)}catch{}switch(t.tag){case 5:en||co(t,e);case 6:var i=Yt,r=oi;Yt=null,pr(n,e,t),Yt=i,oi=r,Yt!==null&&(oi?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(oi?(n=Yt,t=t.stateNode,n.nodeType===8?wp(n.parentNode,t):n.nodeType===1&&wp(n,t),Ha(n)):wp(Yt,t.stateNode));break;case 4:i=Yt,r=oi,Yt=t.stateNode.containerInfo,oi=!0,pr(n,e,t),Yt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&vm(t,e,o),r=r.next}while(r!==i)}pr(n,e,t);break;case 1:if(!en&&(co(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Mt(t,e,a)}pr(n,e,t);break;case 21:pr(n,e,t);break;case 22:t.mode&1?(en=(i=en)||t.memoizedState!==null,pr(n,e,t),en=i):pr(n,e,t);break;default:pr(n,e,t)}}function Py(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Hb),e.forEach(function(i){var r=jb.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ri(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,oi=!1;break e;case 3:Yt=a.stateNode.containerInfo,oi=!0;break e;case 4:Yt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Yt===null)throw Error(ne(160));SS(s,o,r),Yt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)MS(e,n),e=e.sibling}function MS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(e,n),vi(n),i&4){try{Na(3,n,n.return),Fu(3,n)}catch(y){Mt(n,n.return,y)}try{Na(5,n,n.return)}catch(y){Mt(n,n.return,y)}}break;case 1:ri(e,n),vi(n),i&512&&t!==null&&co(t,t.return);break;case 5:if(ri(e,n),vi(n),i&512&&t!==null&&co(t,t.return),n.flags&32){var r=n.stateNode;try{Oa(r,"")}catch(y){Mt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wy(r,s),Wp(a,o);var c=Wp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Zy(r,d):u==="dangerouslySetInnerHTML"?qy(r,d):u==="children"?Oa(r,d):Am(r,u,d,c)}switch(a){case"input":zp(r,s);break;case"textarea":Xy(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ho(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(y){Mt(n,n.return,y)}}break;case 6:if(ri(e,n),vi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Mt(n,n.return,y)}}break;case 3:if(ri(e,n),vi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(y){Mt(n,n.return,y)}break;case 4:ri(e,n),vi(n);break;case 13:ri(e,n),vi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(og=At())),i&4&&Py(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(en=(c=en)||u,ri(e,n),en=c):ri(e,n),vi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&(n.mode&1)!==0)for(be=n,u=n.child;u!==null;){for(d=be=u;be!==null;){switch(h=be,p=h.child,h.tag){case 0:case 11:case 14:case 15:Na(4,h,h.return);break;case 1:co(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Mt(i,t,y)}}break;case 5:co(h,h.return);break;case 22:if(h.memoizedState!==null){Ly(d);continue}}p!==null?(p.return=h,be=p):Ly(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$y("display",o))}catch(y){Mt(n,n.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Mt(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ri(e,n),vi(n),i&4&&Py(n);break;case 21:break;default:ri(e,n),vi(n)}}function vi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(xS(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var s=Ry(n);xm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ry(n);ym(n,a,o);break;default:throw Error(ne(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Wb(n,e,t){be=n,wS(n,e,t)}function wS(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=qc;var c=en;if(qc=o,(en=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Dy(r):l!==null?(l.return=o,be=l):Dy(r);for(;s!==null;)be=s,wS(s,e,t),s=s.sibling;be=r,qc=a,en=c}Iy(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,be=s):Iy(n,e,t)}}function Iy(n){for(;be!==null;){var e=be;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:en||Fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&my(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}my(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}en||e.flags&512&&_m(e)}catch(h){Mt(e,e.return,h)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function Ly(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function Dy(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Fu(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{_m(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{_m(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var Xb=Math.ceil,Eu=Wi.ReactCurrentDispatcher,rg=Wi.ReactCurrentOwner,qn=Wi.ReactCurrentBatchConfig,je=0,Bt=null,Pt=null,qt=0,Cn=0,uo=Lr(0),Ut=0,Qa=null,ls=0,Ou=0,sg=0,Ua=null,yn=null,og=0,Eo=1/0,Ui=null,bu=!1,Sm=null,Tr=null,$c=!1,xr=null,Tu=0,ka=0,Mm=null,nu=-1,iu=0;function un(){return(je&6)!==0?At():nu!==-1?nu:nu=At()}function Ar(n){return(n.mode&1)===0?1:(je&2)!==0&&qt!==0?qt&-qt:Cb.transition!==null?(iu===0&&(iu=ax()),iu):(n=at,n!==0||(n=window.event,n=n===void 0?16:px(n.type)),n)}function ci(n,e,t,i){if(50<ka)throw ka=0,Mm=null,Error(ne(185));el(n,t,i),((je&2)===0||n!==Bt)&&(n===Bt&&((je&2)===0&&(Ou|=t),Ut===4&&_r(n,qt)),wn(n,i),t===1&&je===0&&(e.mode&1)===0&&(Eo=At()+500,Nu&&Dr()))}function wn(n,e){var t=n.callbackNode;PE(n,e);var i=cu(n,n===Bt?qt:0);if(i===0)t!==null&&V_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&V_(t),e===1)n.tag===0?Ab(Ny.bind(null,n)):Dx(Ny.bind(null,n)),wb(function(){(je&6)===0&&Dr()}),t=null;else{switch(lx(i)){case 1:t=Lm;break;case 4:t=sx;break;case 16:t=lu;break;case 536870912:t=ox;break;default:t=lu}t=IS(t,ES.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ES(n,e){if(nu=-1,iu=0,(je&6)!==0)throw Error(ne(327));var t=n.callbackNode;if(vo()&&n.callbackNode!==t)return null;var i=cu(n,n===Bt?qt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Au(n,i);else{e=i;var r=je;je|=2;var s=TS();(Bt!==n||qt!==e)&&(Ui=null,Eo=At()+500,is(n,e));do try{$b();break}catch(a){bS(n,a)}while(!0);Xm(),Eu.current=s,je=r,Pt!==null?e=0:(Bt=null,qt=0,e=Ut)}if(e!==0){if(e===2&&(r=Zp(n),r!==0&&(i=r,e=wm(n,r))),e===1)throw t=Qa,is(n,0),_r(n,i),wn(n,At()),t;if(e===6)_r(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Yb(r)&&(e=Au(n,i),e===2&&(s=Zp(n),s!==0&&(i=s,e=wm(n,s))),e===1))throw t=Qa,is(n,0),_r(n,i),wn(n,At()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Qr(n,yn,Ui);break;case 3:if(_r(n,i),(i&130023424)===i&&(e=og+500-At(),10<e)){if(cu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){un(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=im(Qr.bind(null,n,yn,Ui),e);break}Qr(n,yn,Ui);break;case 4:if(_r(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xb(i/1960))-i,10<i){n.timeoutHandle=im(Qr.bind(null,n,yn,Ui),i);break}Qr(n,yn,Ui);break;case 5:Qr(n,yn,Ui);break;default:throw Error(ne(329))}}}return wn(n,At()),n.callbackNode===t?ES.bind(null,n):null}function wm(n,e){var t=Ua;return n.current.memoizedState.isDehydrated&&(is(n,e).flags|=256),n=Au(n,e),n!==2&&(e=yn,yn=t,e!==null&&Em(e)),n}function Em(n){yn===null?yn=n:yn.push.apply(yn,n)}function Yb(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(n,e){for(e&=~sg,e&=~Ou,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-li(e),i=1<<t;n[t]=-1,e&=~i}}function Ny(n){if((je&6)!==0)throw Error(ne(327));vo();var e=cu(n,0);if((e&1)===0)return wn(n,At()),null;var t=Au(n,e);if(n.tag!==0&&t===2){var i=Zp(n);i!==0&&(e=i,t=wm(n,i))}if(t===1)throw t=Qa,is(n,0),_r(n,e),wn(n,At()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qr(n,yn,Ui),wn(n,At()),null}function ag(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Eo=At()+500,Nu&&Dr())}}function cs(n){xr!==null&&xr.tag===0&&(je&6)===0&&vo();var e=je;je|=1;var t=qn.transition,i=at;try{if(qn.transition=null,at=1,n)return n()}finally{at=i,qn.transition=t,je=e,(je&6)===0&&Dr()}}function lg(){Cn=uo.current,mt(uo)}function is(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Mb(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(Hm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pu();break;case 3:Mo(),mt(Sn),mt(tn),Jm();break;case 5:Km(i);break;case 4:Mo();break;case 13:mt(vt);break;case 19:mt(vt);break;case 10:Ym(i.type._context);break;case 22:case 23:lg()}t=t.return}if(Bt=n,Pt=n=Cr(n.current,null),qt=Cn=e,Ut=0,Qa=null,sg=Ou=ls=0,yn=Ua=null,ts!==null){for(e=0;e<ts.length;e++)if(t=ts[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ts=null}return n}function bS(n,e){do{var t=Pt;try{if(Xm(),Qc.current=wu,Mu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Mu=!1}if(as=0,zt=Nt=_t=null,Da=!1,Ka=0,rg.current=null,t===null||t.return===null){Ut=1,Qa=e,Pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if((u.mode&1)===0&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Sy(o);if(p!==null){p.flags&=-257,My(p,o,a,s,e),p.mode&1&&xy(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if((e&1)===0){xy(s,c,e),cg();break e}l=Error(ne(426))}}else if(gt&&a.mode&1){var g=Sy(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),My(g,o,a,s,e),Gm(wo(l,a));break e}}s=l=wo(l,a),Ut!==4&&(Ut=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=lS(s,l,e);py(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tr===null||!Tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=cS(s,a,e);py(s,x);break e}}s=s.return}while(s!==null)}CS(t)}catch(A){e=A,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function TS(){var n=Eu.current;return Eu.current=wu,n===null?wu:n}function cg(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||(ls&268435455)===0&&(Ou&268435455)===0||_r(Bt,qt)}function Au(n,e){var t=je;je|=2;var i=TS();(Bt!==n||qt!==e)&&(Ui=null,is(n,e));do try{qb();break}catch(r){bS(n,r)}while(!0);if(Xm(),je=t,Eu.current=i,Pt!==null)throw Error(ne(261));return Bt=null,qt=0,Ut}function qb(){for(;Pt!==null;)AS(Pt)}function $b(){for(;Pt!==null&&!SE();)AS(Pt)}function AS(n){var e=PS(n.alternate,n,Cn);n.memoizedProps=n.pendingProps,e===null?CS(n):Pt=e,rg.current=null}function CS(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Bb(t,e,Cn),t!==null){Pt=t;return}}else{if(t=Vb(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ut=6,Pt=null;return}}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);Ut===0&&(Ut=5)}function Qr(n,e,t){var i=at,r=qn.transition;try{qn.transition=null,at=1,Zb(n,e,t,i)}finally{qn.transition=r,at=i}return null}function Zb(n,e,t,i){do vo();while(xr!==null);if((je&6)!==0)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(IE(n,s),n===Bt&&(Pt=Bt=null,qt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||$c||($c=!0,IS(lu,function(){return vo(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=qn.transition,qn.transition=null;var o=at;at=1;var a=je;je|=4,rg.current=null,Gb(n,t),MS(t,n),vb(tm),uu=!!em,tm=em=null,n.current=t,Wb(t,n,r),ME(),je=a,at=o,qn.transition=s}else n.current=t;if($c&&($c=!1,xr=n,Tu=r),s=n.pendingLanes,s===0&&(Tr=null),bE(t.stateNode,i),wn(n,At()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bu)throw bu=!1,n=Sm,Sm=null,n;return(Tu&1)!==0&&n.tag!==0&&vo(),s=n.pendingLanes,(s&1)!==0?n===Mm?ka++:(ka=0,Mm=n):ka=0,Dr(),null}function vo(){if(xr!==null){var n=lx(Tu),e=qn.transition,t=at;try{if(qn.transition=null,at=16>n?16:n,xr===null)var i=!1;else{if(n=xr,xr=null,Tu=0,(je&6)!==0)throw Error(ne(331));var r=je;for(je|=4,be=n.current;be!==null;){var s=be,o=s.child;if((be.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Na(8,u,s)}var d=u.child;if(d!==null)d.return=u,be=d;else for(;be!==null;){u=be;var h=u.sibling,p=u.return;if(yS(u),u===c){be=null;break}if(h!==null){h.return=p,be=h;break}be=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}be=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var _=n.current;for(be=_;be!==null;){o=be;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,be=v;else e:for(o=_;be!==null;){if(a=be,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(A){Mt(a,a.return,A)}if(a===o){be=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,be=x;break e}be=a.return}}if(je=r,Dr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Ru,n)}catch{}i=!0}return i}finally{at=t,qn.transition=e}}return!1}function Uy(n,e,t){e=wo(t,e),e=lS(n,e,1),n=br(n,e,1),e=un(),n!==null&&(el(n,1,e),wn(n,e))}function Mt(n,e,t){if(n.tag===3)Uy(n,n,t);else for(;e!==null;){if(e.tag===3){Uy(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){n=wo(t,n),n=cS(e,n,1),e=br(e,n,1),n=un(),e!==null&&(el(e,1,n),wn(e,n));break}}e=e.return}}function Kb(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(qt&t)===t&&(Ut===4||Ut===3&&(qt&130023424)===qt&&500>At()-og?is(n,0):sg|=t),wn(n,e)}function RS(n,e){e===0&&((n.mode&1)===0?e=1:(e=Nc,Nc<<=1,(Nc&130023424)===0&&(Nc=4194304)));var t=un();n=Hi(n,e),n!==null&&(el(n,e,t),wn(n,t))}function Jb(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),RS(n,t)}function jb(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),RS(n,t)}var PS;PS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Sn.current)xn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return xn=!1,zb(n,e,t);xn=(n.flags&131072)!==0}else xn=!1,gt&&(e.flags&1048576)!==0&&Nx(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tu(n,e),n=e.pendingProps;var r=yo(e,tn.current);go(e,t),r=Qm(null,e,i,n,r,t);var s=eg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,mu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$m(e),r.updater=ku,e.stateNode=r,r._reactInternals=e,um(e,i,n,t),e=fm(null,e,i,!0,s,t)):(e.tag=0,gt&&s&&Vm(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(tu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eT(i),n=si(i,n),r){case 0:e=dm(null,e,i,n,t);break e;case 1:e=by(null,e,i,n,t);break e;case 11:e=wy(null,e,i,n,t);break e;case 14:e=Ey(null,e,i,si(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),dm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),by(n,e,i,r,t);case 3:e:{if(fS(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bx(n,e),xu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=wo(Error(ne(423)),e),e=Ty(n,e,i,t,r);break e}else if(i!==r){r=wo(Error(ne(424)),e),e=Ty(n,e,i,t,r);break e}else for(Rn=Er(e.stateNode.containerInfo.firstChild),Pn=e,gt=!0,ai=null,t=Ox(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xo(),i===r){e=Gi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return Vx(e),n===null&&am(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,nm(i,r)?o=null:s!==null&&nm(i,s)&&(e.flags|=32),dS(n,e),cn(n,e,o,t),e.child;case 6:return n===null&&am(e),null;case 13:return pS(n,e,t);case 4:return Zm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=So(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),wy(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(_u,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!Sn.current){e=Gi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),lm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),lm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,t),r=$n(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Ey(n,e,i,r,t);case 15:return uS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),tu(n,e),e.tag=1,Mn(i)?(n=!0,mu(e)):n=!1,go(e,t),aS(e,i,r),um(e,i,r,t),fm(null,e,i,!0,n,t);case 19:return mS(n,e,t);case 22:return hS(n,e,t)}throw Error(ne(156,e.tag))};function IS(n,e){return rx(n,e)}function Qb(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,e,t,i){return new Qb(n,e,t,i)}function ug(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eT(n){if(typeof n=="function")return ug(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rm)return 11;if(n===Pm)return 14}return 2}function Cr(n,e){var t=n.alternate;return t===null?(t=Yn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ru(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ug(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case eo:return rs(t.children,r,s,e);case Cm:o=8,r|=8;break;case Np:return n=Yn(12,t,e,r|2),n.elementType=Np,n.lanes=s,n;case Up:return n=Yn(13,t,e,r),n.elementType=Up,n.lanes=s,n;case kp:return n=Yn(19,t,e,r),n.elementType=kp,n.lanes=s,n;case Vy:return zu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case zy:o=10;break e;case By:o=9;break e;case Rm:o=11;break e;case Pm:o=14;break e;case mr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Yn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function rs(n,e,t,i){return n=Yn(7,n,i,e),n.lanes=t,n}function zu(n,e,t,i){return n=Yn(22,n,i,e),n.elementType=Vy,n.lanes=t,n.stateNode={isHidden:!1},n}function Ip(n,e,t){return n=Yn(6,n,null,e),n.lanes=t,n}function Lp(n,e,t){return e=Yn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function tT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mp(0),this.expirationTimes=mp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mp(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hg(n,e,t,i,r,s,o,a,l){return n=new tT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$m(s),n}function nT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function LS(n){if(!n)return Pr;n=n._reactInternals;e:{if(hs(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Mn(t))return Lx(n,t,e)}return e}function DS(n,e,t,i,r,s,o,a,l){return n=hg(t,i,!0,n,r,s,o,a,l),n.context=LS(null),t=n.current,i=un(),r=Ar(t),s=zi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,el(n,r,i),wn(n,i),n}function Bu(n,e,t,i){var r=e.current,s=un(),o=Ar(r);return t=LS(t),e.context===null?e.context=t:e.pendingContext=t,e=zi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,o),n!==null&&(ci(n,r,o,s),jc(n,r,o)),o}function Cu(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function ky(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function dg(n,e){ky(n,e),(n=n.alternate)&&ky(n,e)}function iT(){return null}var NS=typeof reportError=="function"?reportError:function(n){console.error(n)};function fg(n){this._internalRoot=n}Vu.prototype.render=fg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Bu(n,e,null,null)};Vu.prototype.unmount=fg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;cs(function(){Bu(null,n,null,null)}),e[Vi]=null}};function Vu(n){this._internalRoot=n}Vu.prototype.unstable_scheduleHydration=function(n){if(n){var e=hx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vr.length&&e!==0&&e<vr[t].priority;t++);vr.splice(t,0,n),t===0&&fx(n)}};function pg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Fy(){}function rT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cu(o);s.call(c)}}var o=DS(e,i,n,0,null,!1,!1,"",Fy);return n._reactRootContainer=o,n[Vi]=o.current,Xa(n.nodeType===8?n.parentNode:n),cs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Cu(l);a.call(c)}}var l=hg(n,0,!1,null,null,!1,!1,"",Fy);return n._reactRootContainer=l,n[Vi]=l.current,Xa(n.nodeType===8?n.parentNode:n),cs(function(){Bu(e,l,t,i)}),l}function Gu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Cu(o);a.call(l)}}Bu(e,o,n,r)}else o=rT(t,e,n,r,i);return Cu(o)}cx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ta(e.pendingLanes);t!==0&&(Dm(e,t|1),wn(e,At()),(je&6)===0&&(Eo=At()+500,Dr()))}break;case 13:cs(function(){var i=Hi(n,1);if(i!==null){var r=un();ci(i,n,1,r)}}),dg(n,1)}};Nm=function(n){if(n.tag===13){var e=Hi(n,134217728);if(e!==null){var t=un();ci(e,n,134217728,t)}dg(n,134217728)}};ux=function(n){if(n.tag===13){var e=Ar(n),t=Hi(n,e);if(t!==null){var i=un();ci(t,n,e,i)}dg(n,e)}};hx=function(){return at};dx=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};Yp=function(n,e,t){switch(e){case"input":if(zp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Du(i);if(!r)throw Error(ne(90));Gy(i),zp(i,r)}}}break;case"textarea":Xy(n,t);break;case"select":e=t.value,e!=null&&ho(n,!!t.multiple,e,!1)}};jy=ag;Qy=cs;var sT={usingClientEntryPoint:!1,Events:[nl,ro,Du,Ky,Jy,ag]},Ma={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oT={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=nx(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||iT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wa.isDisabled&&wa.supportsFiber))try{Ru=wa.inject(oT),xi=wa}catch{}var wa;Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;Dn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pg(e))throw Error(ne(200));return nT(n,e,null,t)};Dn.createRoot=function(n,e){if(!pg(n))throw Error(ne(299));var t=!1,i="",r=NS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hg(n,1,!1,null,null,t,!1,i,r),n[Vi]=e.current,Xa(n.nodeType===8?n.parentNode:n),new fg(e)};Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=nx(e),n=n===null?null:n.stateNode,n};Dn.flushSync=function(n){return cs(n)};Dn.hydrate=function(n,e,t){if(!Hu(e))throw Error(ne(200));return Gu(null,n,e,!0,t)};Dn.hydrateRoot=function(n,e,t){if(!pg(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=NS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=DS(e,null,n,1,t??null,r,!1,s,o),n[Vi]=e.current,Xa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Vu(e)};Dn.render=function(n,e,t){if(!Hu(e))throw Error(ne(200));return Gu(null,n,e,!1,t)};Dn.unmountComponentAtNode=function(n){if(!Hu(n))throw Error(ne(40));return n._reactRootContainer?(cs(function(){Gu(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1};Dn.unstable_batchedUpdates=ag;Dn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Hu(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Gu(n,e,t,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426"});var OS=Ni((V3,FS)=>{"use strict";function kS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kS)}catch(n){console.error(n)}}kS(),FS.exports=US()});var BS=Ni(mg=>{"use strict";var zS=OS();mg.createRoot=zS.createRoot,mg.hydrateRoot=zS.hydrateRoot;var H3});var Cw=Ni(Hf=>{"use strict";var h3=Ec(),d3=Symbol.for("react.element"),f3=Symbol.for("react.fragment"),p3=Object.prototype.hasOwnProperty,m3=h3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g3={key:!0,ref:!0,__self:!0,__source:!0};function Aw(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)p3.call(e,i)&&!g3.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d3,type:n,key:s,ref:o,props:r,_owner:m3.current}}Hf.Fragment=f3;Hf.jsx=Aw;Hf.jsxs=Aw});var _c=Ni((X3,Rw)=>{"use strict";Rw.exports=Cw()});var Iw=Zs(BS());var hr=Zs(Ec());var Kv={};Hw(Kv,{ACESFilmicToneMapping:()=>W1,AddEquation:()=>Hr,AddOperation:()=>B1,AdditiveAnimationBlendMode:()=>Hv,AdditiveBlending:()=>s0,AgXToneMapping:()=>Y1,AlphaFormat:()=>kv,AlwaysCompare:()=>aw,AlwaysDepth:()=>Bh,AlwaysStencilFunc:()=>c0,AmbientLight:()=>xf,AnimationAction:()=>Pf,AnimationClip:()=>Ys,AnimationLoader:()=>B0,AnimationMixer:()=>iv,AnimationObjectGroup:()=>nv,AnimationUtils:()=>$I,ArcCurve:()=>Fd,ArrayCamera:()=>wd,ArrowHelper:()=>Tv,AttachedBindMode:()=>l0,Audio:()=>Cf,AudioAnalyser:()=>ev,AudioContext:()=>pc,AudioListener:()=>j0,AudioLoader:()=>K0,AxesHelper:()=>Av,BackSide:()=>gn,BasicDepthPacking:()=>j1,BasicShadowMap:()=>hT,BatchedMesh:()=>Ld,Bone:()=>Zl,BooleanKeyframeTrack:()=>ar,Box2:()=>fv,Box3:()=>Zt,Box3Helper:()=>Ev,BoxGeometry:()=>ks,BoxHelper:()=>wv,BufferAttribute:()=>st,BufferGeometry:()=>$e,BufferGeometryLoader:()=>Tf,ByteType:()=>Dv,Cache:()=>er,Camera:()=>na,CameraHelper:()=>Mv,CanvasTexture:()=>U0,CapsuleGeometry:()=>Gd,CatmullRomCurve3:()=>Od,CineonToneMapping:()=>G1,CircleGeometry:()=>Wd,ClampToEdgeWrapping:()=>jn,Clock:()=>Af,Color:()=>ve,ColorKeyframeTrack:()=>uc,ColorManagement:()=>et,CompressedArrayTexture:()=>D0,CompressedCubeTexture:()=>N0,CompressedTexture:()=>oa,CompressedTextureLoader:()=>V0,ConeGeometry:()=>Xd,ConstantAlphaFactor:()=>F1,ConstantColorFactor:()=>U1,Controls:()=>Rv,CubeCamera:()=>Sd,CubeReflectionMapping:()=>sr,CubeRefractionMapping:()=>Wr,CubeTexture:()=>Fs,CubeTextureLoader:()=>H0,CubeUVReflectionMapping:()=>ca,CubicBezierCurve:()=>Jl,CubicBezierCurve3:()=>zd,CubicInterpolant:()=>ff,CullFaceBack:()=>r0,CullFaceFront:()=>y1,CullFaceFrontBack:()=>uT,CullFaceNone:()=>_1,Curve:()=>Bn,CurvePath:()=>Hd,CustomBlending:()=>S1,CustomToneMapping:()=>X1,CylinderGeometry:()=>la,Cylindrical:()=>hv,Data3DTexture:()=>Vl,DataArrayTexture:()=>Qo,DataTexture:()=>Qn,DataTextureLoader:()=>G0,DataUtils:()=>EA,DecrementStencilOp:()=>bT,DecrementWrapStencilOp:()=>AT,DefaultLoadingManager:()=>bw,DepthFormat:()=>Is,DepthStencilFormat:()=>Us,DepthTexture:()=>Xl,DetachedBindMode:()=>$1,DirectionalLight:()=>yf,DirectionalLightHelper:()=>Sv,DiscreteInterpolant:()=>pf,DisplayP3ColorSpace:()=>zf,DodecahedronGeometry:()=>Yd,DoubleSide:()=>Ei,DstAlphaFactor:()=>P1,DstColorFactor:()=>L1,DynamicCopyUsage:()=>HT,DynamicDrawUsage:()=>kT,DynamicReadUsage:()=>zT,EdgesGeometry:()=>qd,EllipseCurve:()=>aa,EqualCompare:()=>iw,EqualDepth:()=>Hh,EqualStencilFunc:()=>IT,EquirectangularReflectionMapping:()=>Rl,EquirectangularRefractionMapping:()=>Pl,Euler:()=>On,EventDispatcher:()=>ei,ExtrudeGeometry:()=>$d,FileLoader:()=>mi,Float16BufferAttribute:()=>_0,Float32BufferAttribute:()=>Te,FloatType:()=>bn,Fog:()=>bd,FogExp2:()=>Ed,FramebufferTexture:()=>L0,FrontSide:()=>rr,Frustum:()=>Os,GLBufferAttribute:()=>av,GLSL1:()=>WT,GLSL3:()=>u0,GreaterCompare:()=>rw,GreaterDepth:()=>Wh,GreaterEqualCompare:()=>ow,GreaterEqualDepth:()=>Gh,GreaterEqualStencilFunc:()=>UT,GreaterStencilFunc:()=>DT,GridHelper:()=>yv,Group:()=>Gr,HalfFloatType:()=>ua,HemisphereLight:()=>gf,HemisphereLightHelper:()=>_v,IcosahedronGeometry:()=>Zd,ImageBitmapLoader:()=>Z0,ImageLoader:()=>qs,ImageUtils:()=>yd,IncrementStencilOp:()=>ET,IncrementWrapStencilOp:()=>TT,InstancedBufferAttribute:()=>Yr,InstancedBufferGeometry:()=>bf,InstancedInterleavedBuffer:()=>ov,InstancedMesh:()=>Id,Int16BufferAttribute:()=>g0,Int32BufferAttribute:()=>v0,Int8BufferAttribute:()=>f0,IntType:()=>Lf,InterleavedBuffer:()=>sa,InterleavedBufferAttribute:()=>zs,Interpolant:()=>Hs,InterpolateDiscrete:()=>Dl,InterpolateLinear:()=>_d,InterpolateSmooth:()=>Uh,InvertStencilOp:()=>CT,KeepStencilOp:()=>Es,KeyframeTrack:()=>Vn,LOD:()=>Cd,LatheGeometry:()=>nc,Layers:()=>ea,LessCompare:()=>nw,LessDepth:()=>Vh,LessEqualCompare:()=>Gv,LessEqualDepth:()=>Ds,LessEqualStencilFunc:()=>LT,LessStencilFunc:()=>PT,Light:()=>Li,LightProbe:()=>wf,Line:()=>Ii,Line3:()=>pv,LineBasicMaterial:()=>Kt,LineCurve:()=>jl,LineCurve3:()=>Bd,LineDashedMaterial:()=>df,LineLoop:()=>Ud,LineSegments:()=>ti,LinearDisplayP3ColorSpace:()=>vc,LinearFilter:()=>Lt,LinearInterpolant:()=>cc,LinearMipMapLinearFilter:()=>mT,LinearMipMapNearestFilter:()=>pT,LinearMipmapLinearFilter:()=>Ti,LinearMipmapNearestFilter:()=>yl,LinearSRGBColorSpace:()=>cr,LinearToneMapping:()=>V1,LinearTransfer:()=>Ul,Loader:()=>an,LoaderUtils:()=>fc,LoadingManager:()=>hc,LoopOnce:()=>Z1,LoopPingPong:()=>J1,LoopRepeat:()=>K1,LuminanceAlphaFormat:()=>zv,LuminanceFormat:()=>Ov,MOUSE:()=>lT,Material:()=>Wt,MaterialLoader:()=>Ef,MathUtils:()=>aA,Matrix2:()=>dv,Matrix3:()=>He,Matrix4:()=>Ue,MaxEquation:()=>b1,Mesh:()=>bt,MeshBasicMaterial:()=>Pi,MeshDepthMaterial:()=>Yl,MeshDistanceMaterial:()=>ql,MeshLambertMaterial:()=>uf,MeshMatcapMaterial:()=>hf,MeshNormalMaterial:()=>cf,MeshPhongMaterial:()=>af,MeshPhysicalMaterial:()=>of,MeshStandardMaterial:()=>lc,MeshToonMaterial:()=>lf,MinEquation:()=>E1,MirroredRepeatWrapping:()=>Ll,MixOperation:()=>z1,MultiplyBlending:()=>a0,MultiplyOperation:()=>mc,NearestFilter:()=>Ht,NearestMipMapLinearFilter:()=>fT,NearestMipMapNearestFilter:()=>dT,NearestMipmapLinearFilter:()=>Xo,NearestMipmapNearestFilter:()=>Lv,NeutralToneMapping:()=>q1,NeverCompare:()=>tw,NeverDepth:()=>zh,NeverStencilFunc:()=>RT,NoBlending:()=>tr,NoColorSpace:()=>Ji,NoToneMapping:()=>nr,NormalAnimationBlendMode:()=>Of,NormalBlending:()=>Ps,NotEqualCompare:()=>sw,NotEqualDepth:()=>Xh,NotEqualStencilFunc:()=>NT,NumberKeyframeTrack:()=>Gs,Object3D:()=>nt,ObjectLoader:()=>$0,ObjectSpaceNormalMap:()=>ew,OctahedronGeometry:()=>oc,OneFactor:()=>A1,OneMinusConstantAlphaFactor:()=>O1,OneMinusConstantColorFactor:()=>k1,OneMinusDstAlphaFactor:()=>I1,OneMinusDstColorFactor:()=>D1,OneMinusSrcAlphaFactor:()=>Oh,OneMinusSrcColorFactor:()=>R1,OrthographicCamera:()=>ra,P3Primaries:()=>Fl,PCFShadowMap:()=>Iv,PCFSoftShadowMap:()=>x1,PMREMGenerator:()=>Wl,Path:()=>Bs,PerspectiveCamera:()=>kt,Plane:()=>wi,PlaneGeometry:()=>ia,PlaneHelper:()=>bv,PointLight:()=>_f,PointLightHelper:()=>vv,Points:()=>kd,PointsMaterial:()=>Kl,PolarGridHelper:()=>xv,PolyhedronGeometry:()=>qr,PositionalAudio:()=>Q0,PropertyBinding:()=>lt,PropertyMixer:()=>Rf,QuadraticBezierCurve:()=>Ql,QuadraticBezierCurve3:()=>ec,Quaternion:()=>on,QuaternionKeyframeTrack:()=>Ws,QuaternionLinearInterpolant:()=>mf,RED_GREEN_RGTC2_Format:()=>gd,RED_RGTC1_Format:()=>Vv,REVISION:()=>aT,RGBADepthPacking:()=>Q1,RGBAFormat:()=>mn,RGBAIntegerFormat:()=>Ff,RGBA_ASTC_10x10_Format:()=>ud,RGBA_ASTC_10x5_Format:()=>ad,RGBA_ASTC_10x6_Format:()=>ld,RGBA_ASTC_10x8_Format:()=>cd,RGBA_ASTC_12x10_Format:()=>hd,RGBA_ASTC_12x12_Format:()=>dd,RGBA_ASTC_4x4_Format:()=>Qh,RGBA_ASTC_5x4_Format:()=>ed,RGBA_ASTC_5x5_Format:()=>td,RGBA_ASTC_6x5_Format:()=>nd,RGBA_ASTC_6x6_Format:()=>id,RGBA_ASTC_8x5_Format:()=>rd,RGBA_ASTC_8x6_Format:()=>sd,RGBA_ASTC_8x8_Format:()=>od,RGBA_BPTC_Format:()=>El,RGBA_ETC2_EAC_Format:()=>jh,RGBA_PVRTC_2BPPV1_Format:()=>Zh,RGBA_PVRTC_4BPPV1_Format:()=>$h,RGBA_S3TC_DXT1_Format:()=>Sl,RGBA_S3TC_DXT3_Format:()=>Ml,RGBA_S3TC_DXT5_Format:()=>wl,RGBDepthPacking:()=>xT,RGBFormat:()=>Fv,RGBIntegerFormat:()=>gT,RGB_BPTC_SIGNED_Format:()=>fd,RGB_BPTC_UNSIGNED_Format:()=>pd,RGB_ETC1_Format:()=>Kh,RGB_ETC2_Format:()=>Jh,RGB_PVRTC_2BPPV1_Format:()=>qh,RGB_PVRTC_4BPPV1_Format:()=>Yh,RGB_S3TC_DXT1_Format:()=>xl,RGDepthPacking:()=>ST,RGFormat:()=>Bv,RGIntegerFormat:()=>kf,RawShaderMaterial:()=>sf,Ray:()=>Xr,Raycaster:()=>lv,Rec709Primaries:()=>kl,RectAreaLight:()=>Sf,RedFormat:()=>Uf,RedIntegerFormat:()=>gc,ReinhardToneMapping:()=>H1,RenderTarget:()=>xd,RepeatWrapping:()=>Il,ReplaceStencilOp:()=>wT,ReverseSubtractEquation:()=>w1,RingGeometry:()=>Kd,SIGNED_RED_GREEN_RGTC2_Format:()=>vd,SIGNED_RED_RGTC1_Format:()=>md,SRGBColorSpace:()=>Jn,SRGBTransfer:()=>dt,Scene:()=>Td,ShaderChunk:()=>Ye,ShaderLib:()=>pi,ShaderMaterial:()=>zn,ShadowMaterial:()=>rf,Shape:()=>ir,ShapeGeometry:()=>Jd,ShapePath:()=>Cv,ShapeUtils:()=>Ci,ShortType:()=>Nv,Skeleton:()=>Pd,SkeletonHelper:()=>gv,SkinnedMesh:()=>Rd,Source:()=>Qi,Sphere:()=>Gt,SphereGeometry:()=>ac,Spherical:()=>uv,SphericalHarmonics3:()=>Mf,SplineCurve:()=>tc,SpotLight:()=>vf,SpotLightHelper:()=>mv,Sprite:()=>Ad,SpriteMaterial:()=>$l,SrcAlphaFactor:()=>Fh,SrcAlphaSaturateFactor:()=>N1,SrcColorFactor:()=>C1,StaticCopyUsage:()=>VT,StaticDrawUsage:()=>Ol,StaticReadUsage:()=>OT,StereoCamera:()=>J0,StreamCopyUsage:()=>GT,StreamDrawUsage:()=>FT,StreamReadUsage:()=>BT,StringKeyframeTrack:()=>lr,SubtractEquation:()=>M1,SubtractiveBlending:()=>o0,TOUCH:()=>cT,TangentSpaceNormalMap:()=>$r,TetrahedronGeometry:()=>jd,Texture:()=>Dt,TextureLoader:()=>W0,TextureUtils:()=>nI,TorusGeometry:()=>Qd,TorusKnotGeometry:()=>ef,Triangle:()=>bi,TriangleFanDrawMode:()=>yT,TriangleStripDrawMode:()=>_T,TrianglesDrawMode:()=>vT,TubeGeometry:()=>tf,UVMapping:()=>If,Uint16BufferAttribute:()=>Hl,Uint32BufferAttribute:()=>Gl,Uint8BufferAttribute:()=>p0,Uint8ClampedBufferAttribute:()=>m0,Uniform:()=>rv,UniformsGroup:()=>sv,UniformsLib:()=>fe,UniformsUtils:()=>dw,UnsignedByteType:()=>Ri,UnsignedInt248Type:()=>Ns,UnsignedInt5999Type:()=>Uv,UnsignedIntType:()=>or,UnsignedShort4444Type:()=>Df,UnsignedShort5551Type:()=>Nf,UnsignedShortType:()=>Jo,VSMShadowMap:()=>Mi,Vector2:()=>J,Vector3:()=>I,Vector4:()=>Qe,VectorKeyframeTrack:()=>Xs,VideoTexture:()=>I0,WebGL3DRenderTarget:()=>d0,WebGLArrayRenderTarget:()=>h0,WebGLCoordinateSystem:()=>Ai,WebGLCubeRenderTarget:()=>Md,WebGLMultipleRenderTargets:()=>Pv,WebGLRenderTarget:()=>Fn,WebGLRenderer:()=>C0,WebGLUtils:()=>_w,WebGPUCoordinateSystem:()=>zl,WireframeGeometry:()=>nf,WrapAroundEnding:()=>Nl,ZeroCurvatureEnding:()=>As,ZeroFactor:()=>T1,ZeroSlopeEnding:()=>Cs,ZeroStencilOp:()=>MT,createCanvasElement:()=>cw});var aT="169",lT={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cT={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_1=0,r0=1,y1=2,uT=3,hT=0,Iv=1,x1=2,Mi=3,rr=0,gn=1,Ei=2,tr=0,Ps=1,s0=2,o0=3,a0=4,S1=5,Hr=100,M1=101,w1=102,E1=103,b1=104,T1=200,A1=201,C1=202,R1=203,Fh=204,Oh=205,P1=206,I1=207,L1=208,D1=209,N1=210,U1=211,k1=212,F1=213,O1=214,zh=0,Bh=1,Vh=2,Ds=3,Hh=4,Gh=5,Wh=6,Xh=7,mc=0,z1=1,B1=2,nr=0,V1=1,H1=2,G1=3,W1=4,X1=5,Y1=6,q1=7,l0="attached",$1="detached",If=300,sr=301,Wr=302,Rl=303,Pl=304,ca=306,Il=1e3,jn=1001,Ll=1002,Ht=1003,Lv=1004,dT=1004,Xo=1005,fT=1005,Lt=1006,yl=1007,pT=1007,Ti=1008,mT=1008,Ri=1009,Dv=1010,Nv=1011,Jo=1012,Lf=1013,or=1014,bn=1015,ua=1016,Df=1017,Nf=1018,Ns=1020,Uv=35902,kv=1021,Fv=1022,mn=1023,Ov=1024,zv=1025,Is=1026,Us=1027,Uf=1028,gc=1029,Bv=1030,kf=1031,gT=1032,Ff=1033,xl=33776,Sl=33777,Ml=33778,wl=33779,Yh=35840,qh=35841,$h=35842,Zh=35843,Kh=36196,Jh=37492,jh=37496,Qh=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,hd=37820,dd=37821,El=36492,fd=36494,pd=36495,Vv=36283,md=36284,gd=36285,vd=36286,Z1=2200,K1=2201,J1=2202,Dl=2300,_d=2301,Uh=2302,As=2400,Cs=2401,Nl=2402,Of=2500,Hv=2501,vT=0,_T=1,yT=2,j1=3200,Q1=3201,xT=3202,ST=3203,$r=0,ew=1,Ji="",Jn="srgb",cr="srgb-linear",zf="display-p3",vc="display-p3-linear",Ul="linear",dt="srgb",kl="rec709",Fl="p3",MT=0,Es=7680,wT=7681,ET=7682,bT=7683,TT=34055,AT=34056,CT=5386,RT=512,PT=513,IT=514,LT=515,DT=516,NT=517,UT=518,c0=519,tw=512,nw=513,iw=514,Gv=515,rw=516,sw=517,ow=518,aw=519,Ol=35044,kT=35048,FT=35040,OT=35045,zT=35049,BT=35041,VT=35046,HT=35050,GT=35042,WT="100",u0="300 es",Ai=2e3,zl=2001,ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],VS=1234567,Ls=Math.PI/180,jo=180/Math.PI;function kn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function Wv(n,e){return(n%e+e)%e}function XT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function YT(n,e,t){return n!==e?(t-n)/(e-n):0}function bl(n,e,t){return(1-t)*n+t*e}function qT(n,e,t,i){return bl(n,e,1-Math.exp(-t*i))}function $T(n,e=1){return e-Math.abs(Wv(n,e*2)-e)}function ZT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function KT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function JT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jT(n,e){return n+Math.random()*(e-n)}function QT(n){return n*(.5-Math.random())}function eA(n){n!==void 0&&(VS=n);let e=VS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tA(n){return n*Ls}function nA(n){return n*jo}function iA(n){return(n&n-1)===0&&n!==0}function rA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oA(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var aA={DEG2RAD:Ls,RAD2DEG:jo,generateUUID:kn,clamp:Et,euclideanModulo:Wv,mapLinear:XT,inverseLerp:YT,lerp:bl,damp:qT,pingpong:$T,smoothstep:ZT,smootherstep:KT,randInt:JT,randFloat:jT,randFloatSpread:QT,seededRandom:eA,degToRad:tA,radToDeg:nA,isPowerOfTwo:iA,ceilPowerOfTwo:rA,floorPowerOfTwo:sA,setQuaternionFromProperEuler:oA,normalize:Ge,denormalize:pn},J=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],m=i[8],y=r[0],g=r[3],f=r[6],_=r[1],v=r[4],x=r[7],A=r[2],E=r[5],b=r[8];return s[0]=o*y+a*_+l*A,s[3]=o*g+a*v+l*E,s[6]=o*f+a*x+l*b,s[1]=c*y+u*_+d*A,s[4]=c*g+u*v+d*E,s[7]=c*f+u*x+d*b,s[2]=h*y+p*_+m*A,s[5]=h*g+p*v+m*E,s[8]=h*f+p*x+m*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,m=t*d+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gg.makeScale(e,t)),this}rotate(e){return this.premultiply(gg.makeRotation(-e)),this}translate(e,t){return this.premultiply(gg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gg=new He;function lw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}var lA={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Yo(n,e){return new lA[n](e)}function Bl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cw(){let n=Bl("canvas");return n.style.display="block",n}var HS={};function kh(n){n in HS||(HS[n]=!0,console.warn(n))}function cA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function uA(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hA(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var GS=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),WS=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[cr]:{transfer:Ul,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Jn]:{transfer:dt,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vc]:{transfer:Ul,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(WS),fromReference:n=>n.applyMatrix3(GS)},[zf]:{transfer:dt,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(WS),fromReference:n=>n.applyMatrix3(GS).convertLinearToSRGB()}},dA=new Set([cr,vc]),et={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=rl[e].toReference,r=rl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rl[n].primaries},getTransfer:function(n){return n===Ji?Ul:rl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(rl[e].luminanceCoefficients)}};function Zo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vg(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ao,yd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ao===void 0&&(Ao=Bl("canvas")),Ao.width=e.width,Ao.height=e.height;let i=Ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zo(t[i]/255)*255):t[i]=Zo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fA=0,Qi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_g(r[o].image)):s.push(_g(r[o]))}else s=_g(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function _g(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pA=0,Dt=class n extends ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=jn,r=jn,s=Lt,o=Ti,a=mn,l=Ri,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=kn(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=If;Dt.DEFAULT_ANISOTROPY=1;var Qe=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,A=(f+1)/2,E=(u+h)/4,b=(d+y)/4,C=(m+g)/4;return v>x&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=b/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=C/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xd=class extends ei{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends xd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qo=class extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},h0=class extends Fn{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Qo(null,e,t,i),this.texture.isRenderTargetTexture=!0}},Vl=class extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},d0=class extends Fn{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Vl(null,e,t,i),this.texture.isRenderTargetTexture=!0}},on=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],p=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=y;return}if(d!==y||l!==h||c!==p||u!==m){let g=1-a,f=l*h+c*p+u*m+d*y,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let A=Math.sqrt(v),E=Math.atan2(A,f*_);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let x=a*_;if(l=l*g+h*x,c=c*g+p*x,u=u*g+m*x,d=d*g+y*x,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*p-c*h,e[t+1]=l*m+u*h+c*d-a*p,e[t+2]=c*m+u*p+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"YXZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"ZXY":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"ZYX":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"YZX":this._x=h*u*d+c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d-h*p*m;break;case"XZY":this._x=h*u*d-c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d+h*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(XS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(XS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yg.copy(this).projectOnVector(e),this.sub(yg)}reflect(e){return this.sub(yg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yg=new I,XS=new on,Zt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wu.copy(i.boundingBox)),Wu.applyMatrix4(e.matrixWorld),this.union(Wu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),Xu.subVectors(this.max,sl),Co.subVectors(e.a,sl),Ro.subVectors(e.b,sl),Po.subVectors(e.c,sl),Nr.subVectors(Ro,Co),Ur.subVectors(Po,Ro),ds.subVectors(Co,Po);let t=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-ds.z,ds.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,ds.z,0,-ds.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-ds.y,ds.x,0];return!xg(t,Co,Ro,Po,Xu)||(t=[1,0,0,0,1,0,0,0,1],!xg(t,Co,Ro,Po,Xu))?!1:(Yu.crossVectors(Nr,Ur),t=[Yu.x,Yu.y,Yu.z],xg(t,Co,Ro,Po,Xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xi=[new I,new I,new I,new I,new I,new I,new I,new I],hi=new I,Wu=new Zt,Co=new I,Ro=new I,Po=new I,Nr=new I,Ur=new I,ds=new I,sl=new I,Xu=new I,Yu=new I,fs=new I;function xg(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fs.fromArray(n,s);let a=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var mA=new Zt,ol=new I,Sg=new I,Gt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);let t=ol.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ol,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(Sg)),this.expandByPoint(ol.copy(e.center).sub(Sg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new I,Mg=new I,qu=new I,kr=new I,wg=new I,$u=new I,Eg=new I,Xr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mg.copy(e).add(t).multiplyScalar(.5),qu.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(Mg);let s=e.distanceTo(t)*.5,o=-this.direction.dot(qu),a=kr.dot(this.direction),l=-kr.dot(qu),c=kr.lengthSq(),u=Math.abs(1-o*o),d,h,p,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){let y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mg).addScaledVector(qu,h),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,s){wg.subVectors(t,e),$u.subVectors(i,e),Eg.crossVectors(wg,$u);let o=this.direction.dot(Eg),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);let l=a*this.direction.dot($u.crossVectors(kr,$u));if(l<0)return null;let c=a*this.direction.dot(wg.cross(kr));if(c<0||l+c>o)return null;let u=-a*kr.dot(Eg);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,m,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,m,y,g)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,m,y,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Io.setFromMatrixColumn(e,0).length(),s=1/Io.setFromMatrixColumn(e,1).length(),o=1/Io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*d,m=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,m=c*u,y=c*d;t[0]=h+y*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,m=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,m=a*u,y=a*d;t[0]=l*u,t[4]=m*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=m*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+m,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*l,p=o*c,m=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gA,e,vA)}lookAt(e,t,i){let r=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Fr.crossVectors(i,Nn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Fr.crossVectors(i,Nn)),Fr.normalize(),Zu.crossVectors(Nn,Fr),r[0]=Fr.x,r[4]=Zu.x,r[8]=Nn.x,r[1]=Fr.y,r[5]=Zu.y,r[9]=Nn.y,r[2]=Fr.z,r[6]=Zu.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],m=i[2],y=i[6],g=i[10],f=i[14],_=i[3],v=i[7],x=i[11],A=i[15],E=r[0],b=r[4],C=r[8],U=r[12],S=r[1],w=r[5],O=r[9],z=r[13],V=r[2],K=r[6],F=r[10],ie=r[14],X=r[3],me=r[7],ge=r[11],_e=r[15];return s[0]=o*E+a*S+l*V+c*X,s[4]=o*b+a*w+l*K+c*me,s[8]=o*C+a*O+l*F+c*ge,s[12]=o*U+a*z+l*ie+c*_e,s[1]=u*E+d*S+h*V+p*X,s[5]=u*b+d*w+h*K+p*me,s[9]=u*C+d*O+h*F+p*ge,s[13]=u*U+d*z+h*ie+p*_e,s[2]=m*E+y*S+g*V+f*X,s[6]=m*b+y*w+g*K+f*me,s[10]=m*C+y*O+g*F+f*ge,s[14]=m*U+y*z+g*ie+f*_e,s[3]=_*E+v*S+x*V+A*X,s[7]=_*b+v*w+x*K+A*me,s[11]=_*C+v*O+x*F+A*ge,s[15]=_*U+v*z+x*ie+A*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],m=e[3],y=e[7],g=e[11],f=e[15];return m*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],m=e[12],y=e[13],g=e[14],f=e[15],_=d*g*c-y*h*c+y*l*p-a*g*p-d*l*f+a*h*f,v=m*h*c-u*g*c-m*l*p+o*g*p+u*l*f-o*h*f,x=u*y*c-m*d*c+m*a*p-o*y*p-u*a*f+o*d*f,A=m*d*l-u*y*l-m*a*h+o*y*h+u*a*g-o*d*g,E=t*_+i*v+r*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/E;return e[0]=_*b,e[1]=(y*h*s-d*g*s-y*r*p+i*g*p+d*r*f-i*h*f)*b,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*f+i*l*f)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=v*b,e[5]=(u*g*s-m*h*s+m*r*p-t*g*p-u*r*f+t*h*f)*b,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*f-t*l*f)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*b,e[8]=x*b,e[9]=(m*d*s-u*y*s-m*i*p+t*y*p+u*i*f-t*d*f)*b,e[10]=(o*y*s-m*a*s+m*i*c-t*y*c-o*i*f+t*a*f)*b,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*b,e[12]=A*b,e[13]=(u*y*r-m*d*r+m*i*h-t*y*h-u*i*g+t*d*g)*b,e[14]=(m*a*r-o*y*r-m*i*l+t*y*l+o*i*g-t*a*g)*b,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*b,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,m=s*d,y=o*u,g=o*d,f=a*d,_=l*c,v=l*u,x=l*d,A=i.x,E=i.y,b=i.z;return r[0]=(1-(y+f))*A,r[1]=(p+x)*A,r[2]=(m-v)*A,r[3]=0,r[4]=(p-x)*E,r[5]=(1-(h+f))*E,r[6]=(g+_)*E,r[7]=0,r[8]=(m+v)*b,r[9]=(g-_)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Io.set(r[0],r[1],r[2]).length(),o=Io.set(r[4],r[5],r[6]).length(),a=Io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);let c=1/s,u=1/o,d=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ai){let l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,m;if(a===Ai)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===zl)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ai){let l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u,m,y;if(a===Ai)m=(o+s)*d,y=-2*d;else if(a===zl)m=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Io=new I,di=new Ue,gA=new I(0,0,0),vA=new I(1,1,1),Fr=new I,Zu=new I,Nn=new I,YS=new Ue,qS=new on,On=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return YS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(YS,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qS.setFromEuler(this),this.setFromQuaternion(qS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_A=0,$S=new I,Lo=new on,qi=new Ue,Ku=new I,al=new I,yA=new I,xA=new on,ZS=new I(1,0,0),KS=new I(0,1,0),JS=new I(0,0,1),jS={type:"added"},SA={type:"removed"},Do={type:"childadded",child:null},bg={type:"childremoved",child:null},nt=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new On,i=new on,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new He}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(ZS,e)}rotateY(e){return this.rotateOnAxis(KS,e)}rotateZ(e){return this.rotateOnAxis(JS,e)}translateOnAxis(e,t){return $S.copy(e).applyQuaternion(this.quaternion),this.position.add($S.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ZS,e)}translateY(e){return this.translateOnAxis(KS,e)}translateZ(e){return this.translateOnAxis(JS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ku.copy(e):Ku.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(al,Ku,this.up):qi.lookAt(Ku,al,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(qi),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jS),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SA),bg.child=e,this.dispatchEvent(bg),bg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jS),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,yA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,xA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};nt.DEFAULT_UP=new I(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new I,$i=new I,Tg=new I,Zi=new I,No=new I,Uo=new I,QS=new I,Ag=new I,Cg=new I,Rg=new I,Pg=new Qe,Ig=new Qe,Lg=new Qe,bi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fi.subVectors(e,t),r.cross(fi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fi.subVectors(r,t),$i.subVectors(i,t),Tg.subVectors(e,t);let o=fi.dot(fi),a=fi.dot($i),l=fi.dot(Tg),c=$i.dot($i),u=$i.dot(Tg),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Pg.setScalar(0),Ig.setScalar(0),Lg.setScalar(0),Pg.fromBufferAttribute(e,t),Ig.fromBufferAttribute(e,i),Lg.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pg,s.x),o.addScaledVector(Ig,s.y),o.addScaledVector(Lg,s.z),o}static isFrontFacing(e,t,i,r){return fi.subVectors(i,t),$i.subVectors(e,t),fi.cross($i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),fi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;No.subVectors(r,i),Uo.subVectors(s,i),Ag.subVectors(e,i);let l=No.dot(Ag),c=Uo.dot(Ag);if(l<=0&&c<=0)return t.copy(i);Cg.subVectors(e,r);let u=No.dot(Cg),d=Uo.dot(Cg);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(No,o);Rg.subVectors(e,s);let p=No.dot(Rg),m=Uo.dot(Rg);if(m>=0&&p<=m)return t.copy(s);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Uo,a);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return QS.subVectors(s,r),a=(d-u)/(d-u+(p-m)),t.copy(r).addScaledVector(QS,a);let f=1/(g+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(No,o).addScaledVector(Uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Dg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Wv(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Dg(o,s,e+1/3),this.g=Dg(o,s,e),this.b=Dg(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let i=uw[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}copyLinearToSRGB(e){return this.r=vg(e.r),this.g=vg(e.g),this.b=vg(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return et.fromWorkingColorSpace(rn.copy(this),e),Math.round(Et(rn.r*255,0,255))*65536+Math.round(Et(rn.g*255,0,255))*256+Math.round(Et(rn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(rn.copy(this),t);let i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Jn){et.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,r=rn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(Ju);let i=bl(Or.h,Ju.h,t),r=bl(Or.s,Ju.s,t),s=bl(Or.l,Ju.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ve;ve.NAMES=uw;var MA=0,Wt=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Ps,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pi=class extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ji=wA();function wA(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function En(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Et(n,-65504,65504),ji.floatView[0]=n;let e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function vl(n){let e=n>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(n&1023)]+ji.exponentTable[e],ji.floatView[0]}var EA={toHalfFloat:En,fromHalfFloat:vl},It=new I,ju=new J,st=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ju.fromBufferAttribute(this,t),ju.applyMatrix3(e),this.setXY(t,ju.x,ju.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}},f0=class extends st{constructor(e,t,i){super(new Int8Array(e),t,i)}},p0=class extends st{constructor(e,t,i){super(new Uint8Array(e),t,i)}},m0=class extends st{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},g0=class extends st{constructor(e,t,i){super(new Int16Array(e),t,i)}},Hl=class extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}},v0=class extends st{constructor(e,t,i){super(new Int32Array(e),t,i)}},Gl=class extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}},_0=class extends st{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=vl(this.array[e*this.itemSize]);return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=En(t),this}getY(e){let t=vl(this.array[e*this.itemSize+1]);return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=En(t),this}getZ(e){let t=vl(this.array[e*this.itemSize+2]);return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=En(t),this}getW(e){let t=vl(this.array[e*this.itemSize+3]);return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=En(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(i),this.array[e+2]=En(r),this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(i),this.array[e+2]=En(r),this.array[e+3]=En(s),this}},Te=class extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}},bA=0,Kn=new Ue,Ng=new nt,ko=new I,Un=new Zt,ll=new Zt,Vt=new I,$e=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lw(e)?Gl:Hl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return Ng.lookAt(e),Ng.updateMatrix(),this.applyMatrix4(Ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Te(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ll.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Un.min,ll.min),Un.expandByPoint(Vt),Vt.addVectors(Un.max,ll.max),Un.expandByPoint(Vt)):(Un.expandByPoint(ll.min),Un.expandByPoint(ll.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(ko.fromBufferAttribute(e,c),Vt.add(ko)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;let c=new I,u=new I,d=new I,h=new J,p=new J,m=new J,y=new I,g=new I;function f(C,U,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,U),m.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),m.sub(h);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(w),a[C].add(y),a[U].add(y),a[S].add(y),l[C].add(g),l[U].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,U=_.length;C<U;++C){let S=_[C],w=S.start,O=S.count;for(let z=w,V=w+O;z<V;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new I,x=new I,A=new I,E=new I;function b(C){A.fromBufferAttribute(r,C),E.copy(A);let U=a[C];v.copy(U),v.sub(A.multiplyScalar(A.dot(U))).normalize(),x.crossVectors(E,U);let w=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,w)}for(let C=0,U=_.length;C<U;++C){let S=_[C],w=S.start,O=S.count;for(let z=w,V=w+O;z<V;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){let m=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[m++]=c[p++]}return new st(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eM=new Ue,ps=new Xr,Qu=new Gt,tM=new I,eh=new I,th=new I,nh=new I,Ug=new I,ih=new I,nM=new I,rh=new I,bt=class extends nt{constructor(e=new $e,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ih.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Ug.fromBufferAttribute(d,e),o?ih.addScaledVector(Ug,u):ih.addScaledVector(Ug.sub(t),u))}t.add(ih)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qu.copy(i.boundingSphere),Qu.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!(Qu.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Qu,tM)===null||ps.origin.distanceToSquared(tM)>(e.far-e.near)**2))&&(eM.copy(s).invert(),ps.copy(e.ray).applyMatrix4(eM),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let g=h[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){let E=a.getX(x),b=a.getX(x+1),C=a.getX(x+2);r=sh(this,f,e,i,c,u,d,E,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let _=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=sh(this,o,e,i,c,u,d,_,v,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let g=h[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){let E=x,b=x+1,C=x+2;r=sh(this,f,e,i,c,u,d,E,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let _=g,v=g+1,x=g+2;r=sh(this,o,e,i,c,u,d,_,v,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function TA(n,e,t,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;rh.copy(a),rh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(rh);return c<t.near||c>t.far?null:{distance:c,point:rh.clone(),object:n}}function sh(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,eh),n.getVertexPosition(l,th),n.getVertexPosition(c,nh);let u=TA(n,e,t,i,eh,th,nh,nM);if(u){let d=new I;bi.getBarycoord(nM,eh,th,nh,d),r&&(u.uv=bi.getInterpolatedAttribute(r,a,l,c,d,new J)),s&&(u.uv1=bi.getInterpolatedAttribute(s,a,l,c,d,new J)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};bi.getNormal(eh,th,nh,h.normal),u.face=h,u.barycoord=d}return u}var ks=class n extends $e{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function m(y,g,f,_,v,x,A,E,b,C,U){let S=x/b,w=A/C,O=x/2,z=A/2,V=E/2,K=b+1,F=C+1,ie=0,X=0,me=new I;for(let ge=0;ge<F;ge++){let _e=ge*w-z;for(let We=0;We<K;We++){let Ze=We*S-O;me[y]=Ze*_,me[g]=_e*v,me[f]=V,c.push(me.x,me.y,me.z),me[y]=0,me[g]=0,me[f]=E>0?1:-1,u.push(me.x,me.y,me.z),d.push(We/b),d.push(1-ge/C),ie+=1}}for(let ge=0;ge<C;ge++)for(let _e=0;_e<b;_e++){let We=h+_e+K*ge,Ze=h+_e+K*(ge+1),q=h+(_e+1)+K*(ge+1),re=h+(_e+1)+K*ge;l.push(We,Ze,re),l.push(Ze,q,re),X+=6}a.addGroup(p,X,U),p+=X,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ta(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=ta(n[t]);for(let r in i)e[r]=i[r]}return e}function AA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hw(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var dw={clone:ta,merge:fn},CA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CA,this.fragmentShader=RA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=AA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},na=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zr=new I,iM=new J,rM=new J,kt=class extends na{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,iM,rM),t.subVectors(rM,iM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fo=-90,Oo=1,Sd=class extends nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new kt(Fo,Oo,e,t);r.layers=this.layers,this.add(r);let s=new kt(Fo,Oo,e,t);s.layers=this.layers,this.add(s);let o=new kt(Fo,Oo,e,t);o.layers=this.layers,this.add(o);let a=new kt(Fo,Oo,e,t);a.layers=this.layers,this.add(a);let l=new kt(Fo,Oo,e,t);l.layers=this.layers,this.add(l);let c=new kt(Fo,Oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Fs=class extends Dt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Md=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ks(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:tr});s.uniforms.tEquirect.value=t;let o=new bt(r,s),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Lt),new Sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},kg=new I,PA=new I,IA=new He,wi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=kg.subVectors(i,t).cross(PA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(kg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||IA.getNormalMatrix(e),r=this.coplanarPoint(kg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new Gt,oh=new I,Os=class{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],m=r[9],y=r[10],g=r[11],f=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,g-p,x-f).normalize(),i[1].setComponents(l+s,h+c,g+p,x+f).normalize(),i[2].setComponents(l+o,h+u,g+m,x+_).normalize(),i[3].setComponents(l-o,h-u,g-m,x-_).normalize(),i[4].setComponents(l-a,h-d,g-y,x-v).normalize(),t===Ai)i[5].setComponents(l+a,h+d,g+y,x+v).normalize();else if(t===zl)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(oh.x=r.normal.x>0?e.max.x:e.min.x,oh.y=r.normal.y>0?e.max.y:e.min.y,oh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fw(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function LA(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<d.length;p++){let m=d[h],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,m=d.length;p<m;p++){let y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ia=class n extends $e{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],m=[],y=[],g=[];for(let f=0;f<u;f++){let _=f*h-o;for(let v=0;v<c;v++){let x=v*d-s;m.push(x,-_,0),y.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let v=_+c*f,x=_+c*(f+1),A=_+1+c*(f+1),E=_+1+c*f;p.push(v,x,E),p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},DA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cC="gl_FragColor = linearToOutputTexel( gl_FragColor );",uC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_C=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$C=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ER=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:DA,alphahash_pars_fragment:NA,alphamap_fragment:UA,alphamap_pars_fragment:kA,alphatest_fragment:FA,alphatest_pars_fragment:OA,aomap_fragment:zA,aomap_pars_fragment:BA,batching_pars_vertex:VA,batching_vertex:HA,begin_vertex:GA,beginnormal_vertex:WA,bsdfs:XA,iridescence_fragment:YA,bumpmap_pars_fragment:qA,clipping_planes_fragment:$A,clipping_planes_pars_fragment:ZA,clipping_planes_pars_vertex:KA,clipping_planes_vertex:JA,color_fragment:jA,color_pars_fragment:QA,color_pars_vertex:eC,color_vertex:tC,common:nC,cube_uv_reflection_fragment:iC,defaultnormal_vertex:rC,displacementmap_pars_vertex:sC,displacementmap_vertex:oC,emissivemap_fragment:aC,emissivemap_pars_fragment:lC,colorspace_fragment:cC,colorspace_pars_fragment:uC,envmap_fragment:hC,envmap_common_pars_fragment:dC,envmap_pars_fragment:fC,envmap_pars_vertex:pC,envmap_physical_pars_fragment:bC,envmap_vertex:mC,fog_vertex:gC,fog_pars_vertex:vC,fog_fragment:_C,fog_pars_fragment:yC,gradientmap_pars_fragment:xC,lightmap_pars_fragment:SC,lights_lambert_fragment:MC,lights_lambert_pars_fragment:wC,lights_pars_begin:EC,lights_toon_fragment:TC,lights_toon_pars_fragment:AC,lights_phong_fragment:CC,lights_phong_pars_fragment:RC,lights_physical_fragment:PC,lights_physical_pars_fragment:IC,lights_fragment_begin:LC,lights_fragment_maps:DC,lights_fragment_end:NC,logdepthbuf_fragment:UC,logdepthbuf_pars_fragment:kC,logdepthbuf_pars_vertex:FC,logdepthbuf_vertex:OC,map_fragment:zC,map_pars_fragment:BC,map_particle_fragment:VC,map_particle_pars_fragment:HC,metalnessmap_fragment:GC,metalnessmap_pars_fragment:WC,morphinstance_vertex:XC,morphcolor_vertex:YC,morphnormal_vertex:qC,morphtarget_pars_vertex:$C,morphtarget_vertex:ZC,normal_fragment_begin:KC,normal_fragment_maps:JC,normal_pars_fragment:jC,normal_pars_vertex:QC,normal_vertex:eR,normalmap_pars_fragment:tR,clearcoat_normal_fragment_begin:nR,clearcoat_normal_fragment_maps:iR,clearcoat_pars_fragment:rR,iridescence_pars_fragment:sR,opaque_fragment:oR,packing:aR,premultiplied_alpha_fragment:lR,project_vertex:cR,dithering_fragment:uR,dithering_pars_fragment:hR,roughnessmap_fragment:dR,roughnessmap_pars_fragment:fR,shadowmap_pars_fragment:pR,shadowmap_pars_vertex:mR,shadowmap_vertex:gR,shadowmask_pars_fragment:vR,skinbase_vertex:_R,skinning_pars_vertex:yR,skinning_vertex:xR,skinnormal_vertex:SR,specularmap_fragment:MR,specularmap_pars_fragment:wR,tonemapping_fragment:ER,tonemapping_pars_fragment:bR,transmission_fragment:TR,transmission_pars_fragment:AR,uv_pars_fragment:CR,uv_pars_vertex:RR,uv_vertex:PR,worldpos_vertex:IR,background_vert:LR,background_frag:DR,backgroundCube_vert:NR,backgroundCube_frag:UR,cube_vert:kR,cube_frag:FR,depth_vert:OR,depth_frag:zR,distanceRGBA_vert:BR,distanceRGBA_frag:VR,equirect_vert:HR,equirect_frag:GR,linedashed_vert:WR,linedashed_frag:XR,meshbasic_vert:YR,meshbasic_frag:qR,meshlambert_vert:$R,meshlambert_frag:ZR,meshmatcap_vert:KR,meshmatcap_frag:JR,meshnormal_vert:jR,meshnormal_frag:QR,meshphong_vert:e2,meshphong_frag:t2,meshphysical_vert:n2,meshphysical_frag:i2,meshtoon_vert:r2,meshtoon_frag:s2,points_vert:o2,points_frag:a2,shadow_vert:l2,shadow_frag:c2,sprite_vert:u2,sprite_frag:h2},fe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},pi={basic:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:fn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:fn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:fn([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:fn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:fn([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:fn([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:fn([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:fn([fe.lights,fe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};pi.physical={uniforms:fn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ah={r:0,b:0,g:0},gs=new On,d2=new Ue;function f2(n,e,t,i,r,s,o){let a=new ve(0),l=s===!0?0:1,c,u,d=null,h=0,p=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1,x=m(_);x===null?f(a,l):x&&x.isColor&&(f(x,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===ca)?(u===void 0&&(u=new bt(new ks(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ta(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gs.copy(v.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d2.makeRotationFromEuler(gs)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new ia(2,2),new zn({name:"BackgroundMaterial",uniforms:ta(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(ah,hw(n)),i.buffers.color.setClear(ah.r,ah.g,ah.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:y,addToRenderList:g}}function p2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(S,w,O,z,V){let K=!1,F=d(z,O,w);s!==F&&(s=F,c(s.object)),K=p(S,z,O,V),K&&m(S,z,O,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(S,w,O,z),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,w,O){let z=O.wireframe===!0,V=i[S.id];V===void 0&&(V={},i[S.id]=V);let K=V[w.id];K===void 0&&(K={},V[w.id]=K);let F=K[z];return F===void 0&&(F=h(l()),K[z]=F),F}function h(S){let w=[],O=[],z=[];for(let V=0;V<t;V++)w[V]=0,O[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,w,O,z){let V=s.attributes,K=w.attributes,F=0,ie=O.getAttributes();for(let X in ie)if(ie[X].location>=0){let ge=V[X],_e=K[X];if(_e===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ge===void 0||ge.attribute!==_e||_e&&ge.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==z}function m(S,w,O,z){let V={},K=w.attributes,F=0,ie=O.getAttributes();for(let X in ie)if(ie[X].location>=0){let ge=K[X];ge===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor));let _e={};_e.attribute=ge,ge&&ge.data&&(_e.data=ge.data),V[X]=_e,F++}s.attributes=V,s.attributesNum=F,s.index=z}function y(){let S=s.newAttributes;for(let w=0,O=S.length;w<O;w++)S[w]=0}function g(S){f(S,0)}function f(S,w){let O=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;O[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),V[S]!==w&&(n.vertexAttribDivisor(S,w),V[S]=w)}function _(){let S=s.newAttributes,w=s.enabledAttributes;for(let O=0,z=w.length;O<z;O++)w[O]!==S[O]&&(n.disableVertexAttribArray(O),w[O]=0)}function v(S,w,O,z,V,K,F){F===!0?n.vertexAttribIPointer(S,w,O,V,K):n.vertexAttribPointer(S,w,O,z,V,K)}function x(S,w,O,z){y();let V=z.attributes,K=O.getAttributes(),F=w.defaultAttributeValues;for(let ie in K){let X=K[ie];if(X.location>=0){let me=V[ie];if(me===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),me!==void 0){let ge=me.normalized,_e=me.itemSize,We=e.get(me);if(We===void 0)continue;let Ze=We.buffer,q=We.type,re=We.bytesPerElement,Ee=q===n.INT||q===n.UNSIGNED_INT||me.gpuType===Lf;if(me.isInterleavedBufferAttribute){let he=me.data,Ne=he.stride,De=me.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)f(X.location+ke,he.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<X.locationSize;ke++)g(X.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ke=0;ke<X.locationSize;ke++)v(X.location+ke,_e/X.locationSize,q,ge,Ne*re,(De+_e/X.locationSize*ke)*re,Ee)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)f(X.location+he,me.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<X.locationSize;he++)g(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let he=0;he<X.locationSize;he++)v(X.location+he,_e/X.locationSize,q,ge,_e*re,_e/X.locationSize*he*re,Ee)}}else if(F!==void 0){let ge=F[ie];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(X.location,ge);break;case 3:n.vertexAttrib3fv(X.location,ge);break;case 4:n.vertexAttrib4fv(X.location,ge);break;default:n.vertexAttrib1fv(X.location,ge)}}}}_()}function A(){C();for(let S in i){let w=i[S];for(let O in w){let z=w[O];for(let V in z)u(z[V].object),delete z[V];delete w[O]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let w=i[S.id];for(let O in w){let z=w[O];for(let V in z)u(z[V].object),delete z[V];delete w[O]}delete i[S.id]}function b(S){for(let w in i){let O=i[w];if(O[S.id]===void 0)continue;let z=O[S.id];for(let V in z)u(z[V].object),delete z[V];delete O[S.id]}}function C(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function m2(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y];for(let y=0;y<h.length;y++)t.update(m,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==mn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ri&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==bn&&!C)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){let b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function v2(n){let e=this,t=null,i=0,r=!1,s=!1,o=new wi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:i,v=_*4,x=f.clippingState||null;l.value=x,x=u(m,h,v,p);for(let A=0;A!==v;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let f=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function _2(n){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=sr:a===Pl&&(o.mapping=Wr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rl||a===Pl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Md(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ra=class extends na{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qo=4,sM=[.125,.215,.35,.446,.526,.582],Ts=20,Fg=new ra,oM=new ve,Og=null,zg=0,Bg=0,Vg=!1,bs=(1+Math.sqrt(5))/2,zo=1/bs,aM=[new I(-bs,zo,0),new I(bs,zo,0),new I(-zo,0,bs),new I(zo,0,bs),new I(0,bs,-zo),new I(0,bs,zo),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Og=this._renderer.getRenderTarget(),zg=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Og,zg,Bg),this._renderer.xr.enabled=Vg,e.scissorTest=!1,lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Og=this._renderer.getRenderTarget(),zg=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:ua,format:mn,colorSpace:cr,depthBuffer:!1},r=lM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y2(s)),this._blurMaterial=x2(s,e,t)}return r}_compileMaterial(e){let t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Fg)}_sceneToCubeUV(e,t,i,r){let a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(oM),u.toneMapping=nr,u.autoClear=!1;let p=new Pi({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new bt(new ks,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(oM),y=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;lh(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===sr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;lh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=aM[(r-s-1)%aM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new bt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):Ts;g>Ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ts}`);let f=[],_=0;for(let b=0;b<Ts;++b){let C=b/y,U=Math.exp(-C*C/2);f.push(U),b===0?_+=U:b<g&&(_+=2*U)}for(let b=0;b<f.length;b++)f[b]=f[b]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;let x=this._sizeLods[r],A=3*x*(r>v-qo?r-v+qo:0),E=4*(this._cubeSize-x);lh(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(d,Fg)}};function y2(n){let e=[],t=[],i=[],r=n,s=n-qo+1+sM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-qo?l=sM[o-n+qo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,y=3,g=2,f=1,_=new Float32Array(y*m*p),v=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let E=0;E<p;E++){let b=E%3*2/3-1,C=E>2?0:-1,U=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];_.set(U,y*m*E),v.set(h,g*m*E);let S=[E,E,E,E,E,E];x.set(S,f*m*E)}let A=new $e;A.setAttribute("position",new st(_,y)),A.setAttribute("uv",new st(v,g)),A.setAttribute("faceIndex",new st(x,f)),e.push(A),r>qo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lM(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function x2(n,e,t){let i=new Float32Array(Ts),r=new I(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function cM(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function uM(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Xv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rl||l===Pl,u=l===sr||l===Wr;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Wl(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Wl(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function M2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&kh("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w2(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let y=h.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let y=p[m];for(let g=0,f=y.length;g<f;g++)e.update(y[g],n.ARRAY_BUFFER)}}function c(d){let h=[],p=d.index,m=d.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let v=0,x=_.length;v<x;v+=3){let A=_[v+0],E=_[v+1],b=_[v+2];h.push(A,E,E,b,b,A)}}else if(m!==void 0){let _=m.array;y=m.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let A=v+0,E=v+1,b=v+2;h.push(A,E,E,b,b,A)}}else return;let g=new(lw(h)?Gl:Hl)(h,1);g.version=y;let f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function E2(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,h*o,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,i,1)}function d(h,p,m,y){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,m);let f=0;for(let _=0;_<m;_++)f+=p[_];for(let _=0;_<y.length;_++)t.update(f,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function b2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function T2(n,e,t){let i=new WeakMap,r=new Qe;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let U=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",U)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;p===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*A*4*d),b=new Qo(E,x,A,d);b.type=bn,b.needsUpdate=!0;let C=v*4;for(let S=0;S<d;S++){let w=g[S],O=f[S],z=_[S],V=x*A*4*S;for(let K=0;K<w.count;K++){let F=K*C;p===!0&&(r.fromBufferAttribute(w,K),E[V+F+0]=r.x,E[V+F+1]=r.y,E[V+F+2]=r.z,E[V+F+3]=0),m===!0&&(r.fromBufferAttribute(O,K),E[V+F+4]=r.x,E[V+F+5]=r.y,E[V+F+6]=r.z,E[V+F+7]=0),y===!0&&(r.fromBufferAttribute(z,K),E[V+F+8]=r.x,E[V+F+9]=r.y,E[V+F+10]=r.z,E[V+F+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new J(x,A)},i.set(a,h),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function A2(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Xl=class extends Dt{constructor(e,t,i,r,s,o,a,l,c,u=Is){if(u!==Is&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Is&&(i=or),i===void 0&&u===Us&&(i=Ns),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pw=new Dt,hM=new Xl(1,1),mw=new Qo,gw=new Vl,vw=new Fs,dM=[],fM=[],pM=new Float32Array(16),mM=new Float32Array(9),gM=new Float32Array(4);function ha(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=dM[r];if(s===void 0&&(s=new Float32Array(r),dM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bf(n,e){let t=fM[e];t===void 0&&(t=new Int32Array(e),fM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function L2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;gM.set(i),n.uniformMatrix2fv(this.addr,!1,gM),Ot(t,i)}}function D2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;mM.set(i),n.uniformMatrix3fv(this.addr,!1,mM),Ot(t,i)}}function N2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;pM.set(i),n.uniformMatrix4fv(this.addr,!1,pM),Ot(t,i)}}function U2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function F2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function O2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function z2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function V2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function H2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function G2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hM.compareFunction=Gv,s=hM):s=pw,t.setTexture2D(e||s,r)}function W2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gw,r)}function X2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vw,r)}function Y2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mw,r)}function q2(n){switch(n){case 5126:return C2;case 35664:return R2;case 35665:return P2;case 35666:return I2;case 35674:return L2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return k2;case 35668:case 35672:return F2;case 35669:case 35673:return O2;case 5125:return z2;case 36294:return B2;case 36295:return V2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return Y2}}function $2(n,e){n.uniform1fv(this.addr,e)}function Z2(n,e){let t=ha(e,this.size,2);n.uniform2fv(this.addr,t)}function K2(n,e){let t=ha(e,this.size,3);n.uniform3fv(this.addr,t)}function J2(n,e){let t=ha(e,this.size,4);n.uniform4fv(this.addr,t)}function j2(n,e){let t=ha(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q2(n,e){let t=ha(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eP(n,e){let t=ha(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tP(n,e){n.uniform1iv(this.addr,e)}function nP(n,e){n.uniform2iv(this.addr,e)}function iP(n,e){n.uniform3iv(this.addr,e)}function rP(n,e){n.uniform4iv(this.addr,e)}function sP(n,e){n.uniform1uiv(this.addr,e)}function oP(n,e){n.uniform2uiv(this.addr,e)}function aP(n,e){n.uniform3uiv(this.addr,e)}function lP(n,e){n.uniform4uiv(this.addr,e)}function cP(n,e,t){let i=this.cache,r=e.length,s=Bf(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pw,s[o])}function uP(n,e,t){let i=this.cache,r=e.length,s=Bf(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gw,s[o])}function hP(n,e,t){let i=this.cache,r=e.length,s=Bf(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vw,s[o])}function dP(n,e,t){let i=this.cache,r=e.length,s=Bf(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mw,s[o])}function fP(n){switch(n){case 5126:return $2;case 35664:return Z2;case 35665:return K2;case 35666:return J2;case 35674:return j2;case 35675:return Q2;case 35676:return eP;case 5124:case 35670:return tP;case 35667:case 35671:return nP;case 35668:case 35672:return iP;case 35669:case 35673:return rP;case 5125:return sP;case 36294:return oP;case 36295:return aP;case 36296:return lP;case 35678:case 36198:case 36298:case 36306:case 35682:return cP;case 35679:case 36299:case 36307:return uP;case 35680:case 36300:case 36308:case 36293:return hP;case 36289:case 36303:case 36311:case 36292:return dP}}var y0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q2(t.type)}},x0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fP(t.type)}},S0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Hg=/(\w+)(\])?(\[|\.)?/g;function vM(n,e){n.seq.push(e),n.map[e.id]=e}function pP(n,e,t){let i=n.name,r=i.length;for(Hg.lastIndex=0;;){let s=Hg.exec(i),o=Hg.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vM(t,c===void 0?new y0(a,n,e):new x0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new S0(a),vM(t,d)),t=d}}}var Ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function _M(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var mP=37297,gP=0;function vP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _P(n){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n),i;switch(e===t?i="":e===Fl&&t===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&t===Fl&&(i="LinearSRGBToLinearDisplayP3"),n){case cr:case vc:return[i,"LinearTransferOETF"];case Jn:case zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vP(n.getShaderSource(e),o)}else return r}function yP(n,e){let t=_P(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xP(n,e){let t;switch(e){case V1:t="Linear";break;case H1:t="Reinhard";break;case G1:t="Cineon";break;case W1:t="ACESFilmic";break;case Y1:t="AgX";break;case q1:t="Neutral";break;case X1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new I;function SP(){et.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function wP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _l(n){return n!==""}function xM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function SM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bP=/^[ \t]*#include +<([\w\d./]+)>/gm;function M0(n){return n.replace(bP,AP)}var TP=new Map;function AP(n,e){let t=Ye[e];if(t===void 0){let i=TP.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return M0(t)}var CP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function MM(n){return n.replace(CP,RP)}function RP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function IP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case Wr:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LP(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Wr&&(e="ENVMAP_MODE_REFRACTION"),e}function DP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case z1:e="ENVMAP_BLENDING_MIX";break;case B1:e="ENVMAP_BLENDING_ADD";break}return e}function NP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function UP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=PP(t),c=IP(t),u=LP(t),d=DP(t),h=NP(t),p=MP(t),m=wP(s),y=r.createProgram(),g,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_l).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_l).join(`
`),f.length>0&&(f+=`
`)):(g=[wM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),f=[wM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==nr?xP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,yP("linearToOutputTexel",t.outputColorSpace),SP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),o=M0(o),o=xM(o,t),o=SM(o,t),a=M0(a),a=xM(a,t),a=SM(a,t),o=MM(o),a=MM(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===u0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===u0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=_+g+o,x=_+f+a,A=_M(r,r.VERTEX_SHADER,v),E=_M(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(w){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(E).trim(),K=!0,F=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,E);else{let ie=yM(r,A,"vertex"),X=yM(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+ie+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||V==="")&&(F=!1);F&&(w.diagnostics={runnable:K,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:f}})}r.deleteShader(A),r.deleteShader(E),C=new Ko(r,y),U=EP(r,y)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,mP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gP++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}var kP=0,w0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new E0(e),t.set(e,i)),i}},E0=class{constructor(e){this.id=kP++,this.code=e,this.usedTimes=0}};function FP(n,e,t,i,r,s,o){let a=new ea,l=new w0,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures,m=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,w,O,z,V){let K=z.fog,F=V.geometry,ie=S.isMeshStandardMaterial?z.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),me=X&&X.mapping===ca?X.image.height:null,ge=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let _e=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,We=_e!==void 0?_e.length:0,Ze=0;F.morphAttributes.position!==void 0&&(Ze=1),F.morphAttributes.normal!==void 0&&(Ze=2),F.morphAttributes.color!==void 0&&(Ze=3);let q,re,Ee,he;if(ge){let _n=pi[ge];q=_n.vertexShader,re=_n.fragmentShader}else q=S.vertexShader,re=S.fragmentShader,l.update(S),Ee=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);let Ne=n.getRenderTarget(),De=V.isInstancedMesh===!0,ke=V.isBatchedMesh===!0,Xe=!!S.map,Z=!!S.matcap,P=!!X,le=!!S.aoMap,ce=!!S.lightMap,te=!!S.bumpMap,ue=!!S.normalMap,Pe=!!S.displacementMap,ye=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,k=S.anisotropy>0,$=S.clearcoat>0,W=S.dispersion>0,H=S.iridescence>0,se=S.sheen>0,ee=S.transmission>0,oe=k&&!!S.anisotropyMap,Ve=$&&!!S.clearcoatMap,Q=$&&!!S.clearcoatNormalMap,pe=$&&!!S.clearcoatRoughnessMap,Fe=H&&!!S.iridescenceMap,Ae=H&&!!S.iridescenceThicknessMap,de=se&&!!S.sheenColorMap,qe=se&&!!S.sheenRoughnessMap,ze=!!S.specularMap,ct=!!S.specularColorMap,L=!!S.specularIntensityMap,Me=ee&&!!S.transmissionMap,Y=ee&&!!S.thicknessMap,j=!!S.gradientMap,xe=!!S.alphaMap,we=S.alphaTest>0,Je=!!S.alphaHash,Rt=!!S.extensions,vn=nr;S.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(vn=n.toneMapping);let tt={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:re,defines:S.defines,customVertexShaderID:Ee,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ke,batchingColor:ke&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:cr,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Z,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:me,aoMap:le,lightMap:ce,bumpMap:te,normalMap:ue,displacementMap:p&&Pe,emissiveMap:ye,normalMapObjectSpace:ue&&S.normalMapType===ew,normalMapTangentSpace:ue&&S.normalMapType===$r,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:oe,clearcoat:$,clearcoatMap:Ve,clearcoatNormalMap:Q,clearcoatRoughnessMap:pe,dispersion:W,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:Ae,sheen:se,sheenColorMap:de,sheenRoughnessMap:qe,specularMap:ze,specularColorMap:ct,specularIntensityMap:L,transmission:ee,transmissionMap:Me,thicknessMap:Y,gradientMap:j,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:Je,combine:S.combine,mapUv:Xe&&g(S.map.channel),aoMapUv:le&&g(S.aoMap.channel),lightMapUv:ce&&g(S.lightMap.channel),bumpMapUv:te&&g(S.bumpMap.channel),normalMapUv:ue&&g(S.normalMap.channel),displacementMapUv:Pe&&g(S.displacementMap.channel),emissiveMapUv:ye&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:M&&g(S.roughnessMap.channel),anisotropyMapUv:oe&&g(S.anisotropyMap.channel),clearcoatMapUv:Ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(S.sheenRoughnessMap.channel),specularMapUv:ze&&g(S.specularMap.channel),specularColorMapUv:ct&&g(S.specularColorMap.channel),specularIntensityMapUv:L&&g(S.specularIntensityMap.channel),transmissionMapUv:Me&&g(S.transmissionMap.channel),thicknessMapUv:Y&&g(S.thicknessMap.channel),alphaMapUv:xe&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ue||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&(Xe||xe),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:vn,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ei,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(v(w,S),x(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){let w=y[S.type],O;if(w){let z=pi[w];O=dw.clone(z.uniforms)}else O=S.uniforms;return O}function E(S,w){let O;for(let z=0,V=u.length;z<V;z++){let K=u[z];if(K.cacheKey===w){O=K,++O.usedTimes;break}}return O===void 0&&(O=new UP(n,w,S,s),u.push(O)),O}function b(S){if(--S.usedTimes===0){let w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:A,acquireProgram:E,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:U}}function OP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function EM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,m,y,g){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=y,f.group=g),e++,f}function a(d,h,p,m,y,g){let f=o(d,h,p,m,y,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,m,y,g){let f=o(d,h,p,m,y,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||zP),i.length>1&&i.sort(h||EM),r.length>1&&r.sort(h||EM)}function u(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new bM,n.set(i,[o])):r>=s.length?(o=new bM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function VP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ve};break;case"SpotLight":t={position:new I,direction:new I,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function HP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var GP=0;function WP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XP(n){let e=new VP,t=HP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new Ue,o=new Ue;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,_=0,v=0,x=0,A=0,E=0,b=0;c.sort(WP);for(let U=0,S=c.length;U<S;U++){let w=c[U],O=w.color,z=w.intensity,V=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*z,d+=O.g*z,h+=O.b*z;else if(w.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(w.sh.coefficients[F],z);b++}else if(w.isDirectionalLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ie=w.shadow,X=t.get(w);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=F,p++}else if(w.isSpotLight){let F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(O).multiplyScalar(z),F.distance=V,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,i.spot[y]=F;let ie=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,ie.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[y]=ie.matrix,w.castShadow){let X=t.get(w);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=K,x++}y++}else if(w.isRectAreaLight){let F=e.get(w);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=F,g++}else if(w.isPointLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let ie=w.shadow,X=t.get(w);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,X.shadowCameraNear=ie.camera.near,X.shadowCameraFar=ie.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=w.shadow.matrix,v++}i.point[m]=F,m++}else if(w.isHemisphereLight){let F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(z),F.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[f]=F,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let C=i.hash;(C.directionalLength!==p||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==g||C.hemiLength!==f||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,C.directionalLength=p,C.pointLength=m,C.spotLength=y,C.rectAreaLength=g,C.hemiLength=f,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=b,i.version=GP++)}function l(c,u){let d=0,h=0,p=0,m=0,y=0,g=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let v=c[f];if(v.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(v.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function TM(n){let e=new XP(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new TM(n),e.set(r,[a])):s>=o.length?(a=new TM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Yl=class extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},qP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$P=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZP(n,e,t){let i=new Os,r=new J,s=new J,o=new Qe,a=new Yl({depthPacking:Q1}),l=new ql,c={},u=t.maxTextureSize,d={[rr]:gn,[gn]:rr,[Ei]:Ei},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:qP,fragmentShader:$P}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let m=new $e;m.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let f=this.type;this.render=function(E,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let U=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(tr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==Mi&&this.type===Mi,V=f===Mi&&this.type!==Mi;for(let K=0,F=E.length;K<F;K++){let ie=E[K],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||z===!0||V===!0){let _e=this.type!==Mi?{minFilter:Ht,magFilter:Ht}:{};X.map!==null&&X.map.dispose(),X.map=new Fn(r.x,r.y,_e),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ge=X.getViewportCount();for(let _e=0;_e<ge;_e++){let We=X.getViewport(_e);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),O.viewport(o),X.updateMatrices(ie,_e),i=X.getFrustum(),x(b,C,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===Mi&&_(X,C),X.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(U,S,w)};function _(E,b){let C=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,C,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,C,p,y,null)}function v(E,b,C,U){let S=null,w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=S.uuid,z=b.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let K=V[z];K===void 0&&(K=S.clone(),V[z]=K,b.addEventListener("dispose",A)),S=K}if(S.visible=b.visible,S.wireframe=b.wireframe,U===Mi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=n.properties.get(S);O.light=C}return S}function x(E,b,C,U,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let z=e.update(E),V=E.material;if(Array.isArray(V)){let K=z.groups;for(let F=0,ie=K.length;F<ie;F++){let X=K[F],me=V[X.materialIndex];if(me&&me.visible){let ge=v(E,me,U,S);E.onBeforeShadow(n,E,b,C,z,ge,X),n.renderBufferDirect(C,null,z,ge,E,X),E.onAfterShadow(n,E,b,C,z,ge,X)}}}else if(V.visible){let K=v(E,V,U,S);E.onBeforeShadow(n,E,b,C,z,K,null),n.renderBufferDirect(C,null,z,K,E,null),E.onAfterShadow(n,E,b,C,z,K,null)}}let O=E.children;for(let z=0,V=O.length;z<V;z++)x(O[z],b,C,U,S)}function A(E){E.target.removeEventListener("dispose",A);for(let C in c){let U=c[C],S=E.target.uuid;S in U&&(U[S].dispose(),delete U[S])}}}var KP={[zh]:Bh,[Vh]:Wh,[Hh]:Xh,[Ds]:Gh,[Bh]:zh,[Wh]:Vh,[Xh]:Hh,[Gh]:Ds};function JP(n){function e(){let L=!1,Me=new Qe,Y=null,j=new Qe(0,0,0,0);return{setMask:function(xe){Y!==xe&&!L&&(n.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){L=xe},setClear:function(xe,we,Je,Rt,vn){vn===!0&&(xe*=Rt,we*=Rt,Je*=Rt),Me.set(xe,we,Je,Rt),j.equals(Me)===!1&&(n.clearColor(xe,we,Je,Rt),j.copy(Me))},reset:function(){L=!1,Y=null,j.set(-1,0,0,0)}}}function t(){let L=!1,Me=!1,Y=null,j=null,xe=null;return{setReversed:function(we){Me=we},setTest:function(we){we?Ee(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(we){Y!==we&&!L&&(n.depthMask(we),Y=we)},setFunc:function(we){if(Me&&(we=KP[we]),j!==we){switch(we){case zh:n.depthFunc(n.NEVER);break;case Bh:n.depthFunc(n.ALWAYS);break;case Vh:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case Hh:n.depthFunc(n.EQUAL);break;case Gh:n.depthFunc(n.GEQUAL);break;case Wh:n.depthFunc(n.GREATER);break;case Xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=we}},setLocked:function(we){L=we},setClear:function(we){xe!==we&&(n.clearDepth(we),xe=we)},reset:function(){L=!1,Y=null,j=null,xe=null}}}function i(){let L=!1,Me=null,Y=null,j=null,xe=null,we=null,Je=null,Rt=null,vn=null;return{setTest:function(tt){L||(tt?Ee(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(tt){Me!==tt&&!L&&(n.stencilMask(tt),Me=tt)},setFunc:function(tt,_n,Di){(Y!==tt||j!==_n||xe!==Di)&&(n.stencilFunc(tt,_n,Di),Y=tt,j=_n,xe=Di)},setOp:function(tt,_n,Di){(we!==tt||Je!==_n||Rt!==Di)&&(n.stencilOp(tt,_n,Di),we=tt,Je=_n,Rt=Di)},setLocked:function(tt){L=tt},setClear:function(tt){vn!==tt&&(n.clearStencil(tt),vn=tt)},reset:function(){L=!1,Me=null,Y=null,j=null,xe=null,we=null,Je=null,Rt=null,vn=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,h=[],p=null,m=!1,y=null,g=null,f=null,_=null,v=null,x=null,A=null,E=new ve(0,0,0),b=0,C=!1,U=null,S=null,w=null,O=null,z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,F=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=F>=1):ie.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=F>=2);let X=null,me={},ge=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),We=new Qe().fromArray(ge),Ze=new Qe().fromArray(_e);function q(L,Me,Y,j){let xe=new Uint8Array(4),we=n.createTexture();n.bindTexture(L,we),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<Y;Je++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Me+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return we}let re={};re[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),s.setFunc(Ds),ce(!1),te(r0),Ee(n.CULL_FACE),P(tr);function Ee(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function he(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Ne(L,Me){return u[L]!==Me?(n.bindFramebuffer(L,Me),u[L]=Me,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(L,Me){let Y=h,j=!1;if(L){Y=d.get(Me),Y===void 0&&(Y=[],d.set(Me,Y));let xe=L.textures;if(Y.length!==xe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Je=xe.length;we<Je;we++)Y[we]=n.COLOR_ATTACHMENT0+we;Y.length=xe.length,j=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,j=!0);j&&n.drawBuffers(Y)}function ke(L){return p!==L?(n.useProgram(L),p=L,!0):!1}let Xe={[Hr]:n.FUNC_ADD,[M1]:n.FUNC_SUBTRACT,[w1]:n.FUNC_REVERSE_SUBTRACT};Xe[E1]=n.MIN,Xe[b1]=n.MAX;let Z={[T1]:n.ZERO,[A1]:n.ONE,[C1]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[N1]:n.SRC_ALPHA_SATURATE,[L1]:n.DST_COLOR,[P1]:n.DST_ALPHA,[R1]:n.ONE_MINUS_SRC_COLOR,[Oh]:n.ONE_MINUS_SRC_ALPHA,[D1]:n.ONE_MINUS_DST_COLOR,[I1]:n.ONE_MINUS_DST_ALPHA,[U1]:n.CONSTANT_COLOR,[k1]:n.ONE_MINUS_CONSTANT_COLOR,[F1]:n.CONSTANT_ALPHA,[O1]:n.ONE_MINUS_CONSTANT_ALPHA};function P(L,Me,Y,j,xe,we,Je,Rt,vn,tt){if(L===tr){m===!0&&(he(n.BLEND),m=!1);return}if(m===!1&&(Ee(n.BLEND),m=!0),L!==S1){if(L!==y||tt!==C){if((g!==Hr||v!==Hr)&&(n.blendEquation(n.FUNC_ADD),g=Hr,v=Hr),tt)switch(L){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case s0:n.blendFunc(n.ONE,n.ONE);break;case o0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case a0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case s0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case o0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case a0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,_=null,x=null,A=null,E.set(0,0,0),b=0,y=L,C=tt}return}xe=xe||Me,we=we||Y,Je=Je||j,(Me!==g||xe!==v)&&(n.blendEquationSeparate(Xe[Me],Xe[xe]),g=Me,v=xe),(Y!==f||j!==_||we!==x||Je!==A)&&(n.blendFuncSeparate(Z[Y],Z[j],Z[we],Z[Je]),f=Y,_=j,x=we,A=Je),(Rt.equals(E)===!1||vn!==b)&&(n.blendColor(Rt.r,Rt.g,Rt.b,vn),E.copy(Rt),b=vn),y=L,C=!1}function le(L,Me){L.side===Ei?he(n.CULL_FACE):Ee(n.CULL_FACE);let Y=L.side===gn;Me&&(Y=!Y),ce(Y),L.blending===Ps&&L.transparent===!1?P(tr):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){U!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),U=L)}function te(L){L!==_1?(Ee(n.CULL_FACE),L!==S&&(L===r0?n.cullFace(n.BACK):L===y1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),S=L}function ue(L){L!==w&&(K&&n.lineWidth(L),w=L)}function Pe(L,Me,Y){L?(Ee(n.POLYGON_OFFSET_FILL),(O!==Me||z!==Y)&&(n.polygonOffset(Me,Y),O=Me,z=Y)):he(n.POLYGON_OFFSET_FILL)}function ye(L){L?Ee(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+V-1),X!==L&&(n.activeTexture(L),X=L)}function M(L,Me,Y){Y===void 0&&(X===null?Y=n.TEXTURE0+V-1:Y=X);let j=me[Y];j===void 0&&(j={type:void 0,texture:void 0},me[Y]=j),(j.type!==L||j.texture!==Me)&&(X!==Y&&(n.activeTexture(Y),X=Y),n.bindTexture(L,Me||re[L]),j.type=L,j.texture=Me)}function k(){let L=me[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(L){We.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function de(L){Ze.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ze.copy(L))}function qe(L,Me){let Y=l.get(Me);Y===void 0&&(Y=new WeakMap,l.set(Me,Y));let j=Y.get(L);j===void 0&&(j=n.getUniformBlockIndex(Me,L.name),Y.set(L,j))}function ze(L,Me){let j=l.get(Me).get(L);a.get(Me)!==j&&(n.uniformBlockBinding(Me,j,L.__bindingPointIndex),a.set(Me,j))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,me={},u={},d=new WeakMap,h=[],p=null,m=!1,y=null,g=null,f=null,_=null,v=null,x=null,A=null,E=new ve(0,0,0),b=0,C=!1,U=null,S=null,w=null,O=null,z=null,We.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ee,disable:he,bindFramebuffer:Ne,drawBuffers:De,useProgram:ke,setBlending:P,setMaterial:le,setFlipSided:ce,setCullFace:te,setLineWidth:ue,setPolygonOffset:Pe,setScissorTest:ye,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:W,texImage2D:pe,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:H,texSubImage3D:se,compressedTexSubImage2D:ee,compressedTexSubImage3D:oe,scissor:Ae,viewport:de,reset:ct}}function jP(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function QP(n,e){let t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function eI(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function b0(n,e,t,i){let r=tI(i);switch(t){case kv:return n*e;case Ov:return n*e;case zv:return n*e*2;case Uf:return n*e/r.components*r.byteLength;case gc:return n*e/r.components*r.byteLength;case Bv:return n*e*2/r.components*r.byteLength;case kf:return n*e*2/r.components*r.byteLength;case Fv:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case Ff:return n*e*4/r.components*r.byteLength;case xl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ml:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(n,16)*Math.max(e,8)/4;case Yh:case $h:return Math.max(n,8)*Math.max(e,8)/2;case Kh:case Jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case El:case fd:case pd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vv:case md:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gd:case vd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tI(n){switch(n){case Ri:case Dv:return{byteLength:1,components:1};case Jo:case Nv:case ua:return{byteLength:2,components:1};case Df:case Nf:return{byteLength:2,components:4};case or:case Lf:case bn:return{byteLength:4,components:1};case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var nI={contain:jP,cover:QP,fill:eI,getByteLength:b0};function iI(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return p?new OffscreenCanvas(R,M):Bl("canvas")}function y(R,M,k){let $=1,W=ye(R);if((W.width>k||W.height>k)&&($=k/Math.max(W.width,W.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let H=Math.floor($*W.width),se=Math.floor($*W.height);d===void 0&&(d=m(H,se));let ee=M?m(H,se):d;return ee.width=H,ee.height=se,ee.getContext("2d").drawImage(R,0,0,H,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H+"x"+se+")."),ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Ht&&R.minFilter!==Lt}function f(R){n.generateMipmap(R)}function _(R,M,k,$,W=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let H=M;if(M===n.RED&&(k===n.FLOAT&&(H=n.R32F),k===n.HALF_FLOAT&&(H=n.R16F),k===n.UNSIGNED_BYTE&&(H=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.R8UI),k===n.UNSIGNED_SHORT&&(H=n.R16UI),k===n.UNSIGNED_INT&&(H=n.R32UI),k===n.BYTE&&(H=n.R8I),k===n.SHORT&&(H=n.R16I),k===n.INT&&(H=n.R32I)),M===n.RG&&(k===n.FLOAT&&(H=n.RG32F),k===n.HALF_FLOAT&&(H=n.RG16F),k===n.UNSIGNED_BYTE&&(H=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RG8UI),k===n.UNSIGNED_SHORT&&(H=n.RG16UI),k===n.UNSIGNED_INT&&(H=n.RG32UI),k===n.BYTE&&(H=n.RG8I),k===n.SHORT&&(H=n.RG16I),k===n.INT&&(H=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGB8UI),k===n.UNSIGNED_SHORT&&(H=n.RGB16UI),k===n.UNSIGNED_INT&&(H=n.RGB32UI),k===n.BYTE&&(H=n.RGB8I),k===n.SHORT&&(H=n.RGB16I),k===n.INT&&(H=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),k===n.UNSIGNED_INT&&(H=n.RGBA32UI),k===n.BYTE&&(H=n.RGBA8I),k===n.SHORT&&(H=n.RGBA16I),k===n.INT&&(H=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),M===n.RGBA){let se=W?Ul:et.getTransfer($);k===n.FLOAT&&(H=n.RGBA32F),k===n.HALF_FLOAT&&(H=n.RGBA16F),k===n.UNSIGNED_BYTE&&(H=se===dt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function v(R,M){let k;return R?M===null||M===or||M===Ns?k=n.DEPTH24_STENCIL8:M===bn?k=n.DEPTH32F_STENCIL8:M===Jo&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===or||M===Ns?k=n.DEPTH_COMPONENT24:M===bn?k=n.DEPTH_COMPONENT32F:M===Jo&&(k=n.DEPTH_COMPONENT16),k}function x(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Lt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&u.delete(M)}function E(R){let M=R.target;M.removeEventListener("dispose",E),U(M)}function b(R){let M=i.get(R);if(M.__webglInit===void 0)return;let k=R.source,$=h.get(k);if($){let W=$[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(R),Object.keys($).length===0&&h.delete(k)}i.remove(R)}function C(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let k=R.source,$=h.get(k);delete $[M.__cacheKey],o.memory.textures--}function U(R){let M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let W=0;W<M.__webglFramebuffer[$].length;W++)n.deleteFramebuffer(M.__webglFramebuffer[$][W]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,W=k.length;$<W;$++){let H=i.get(k[$]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(R)}let S=0;function w(){S=0}function O(){let R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function z(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){let k=i.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(k,R,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function K(R,M){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Ze(k,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function F(R,M){let k=i.get(R);if(R.version>0&&k.__version!==R.version){Ze(k,R,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function ie(R,M){let k=i.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let X={[Il]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},me={[Ht]:n.NEAREST,[Lv]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},ge={[tw]:n.NEVER,[aw]:n.ALWAYS,[nw]:n.LESS,[Gv]:n.LEQUAL,[iw]:n.EQUAL,[ow]:n.GEQUAL,[rw]:n.GREATER,[sw]:n.NOTEQUAL};function _e(R,M){if(M.type===bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Lt||M.magFilter===yl||M.magFilter===Xo||M.magFilter===Ti||M.minFilter===Lt||M.minFilter===yl||M.minFilter===Xo||M.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,X[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==Xo&&M.minFilter!==Ti||M.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function We(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let $=M.source,W=h.get($);W===void 0&&(W={},h.set($,W));let H=z(M);if(H!==R.__cacheKey){W[H]===void 0&&(W[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),W[H].usedTimes++;let se=W[R.__cacheKey];se!==void 0&&(W[R.__cacheKey].usedTimes--,se.usedTimes===0&&C(M)),R.__cacheKey=H,R.__webglTexture=W[H].texture}return k}function Ze(R,M,k){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);let W=We(R,M),H=M.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+k);let se=i.get(H);if(H.version!==se.__version||W===!0){t.activeTexture(n.TEXTURE0+k);let ee=et.getPrimaries(et.workingColorSpace),oe=M.colorSpace===Ji?null:et.getPrimaries(M.colorSpace),Ve=M.colorSpace===Ji||ee===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=y(M.image,!1,r.maxTextureSize);Q=Pe(M,Q);let pe=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Ae=_(M.internalFormat,pe,Fe,M.colorSpace,M.isVideoTexture);_e($,M);let de,qe=M.mipmaps,ze=M.isVideoTexture!==!0,ct=se.__version===void 0||W===!0,L=H.dataReady,Me=x(M,Q);if(M.isDepthTexture)Ae=v(M.format===Us,M.type),ct&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,pe,Fe,null));else if(M.isDataTexture)if(qe.length>0){ze&&ct&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,qe[0].width,qe[0].height);for(let Y=0,j=qe.length;Y<j;Y++)de=qe[Y],ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,pe,Fe,de.data):t.texImage2D(n.TEXTURE_2D,Y,Ae,de.width,de.height,0,pe,Fe,de.data);M.generateMipmaps=!1}else ze?(ct&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,Q.width,Q.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pe,Fe,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,pe,Fe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,qe[0].width,qe[0].height,Q.depth);for(let Y=0,j=qe.length;Y<j;Y++)if(de=qe[Y],M.format!==mn)if(pe!==null)if(ze){if(L)if(M.layerUpdates.size>0){let xe=b0(de.width,de.height,M.format,M.type);for(let we of M.layerUpdates){let Je=de.data.subarray(we*xe/de.data.BYTES_PER_ELEMENT,(we+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,we,de.width,de.height,1,pe,Je,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,Q.depth,pe,de.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ae,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,Q.depth,pe,Fe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ae,de.width,de.height,Q.depth,0,pe,Fe,de.data)}else{ze&&ct&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,qe[0].width,qe[0].height);for(let Y=0,j=qe.length;Y<j;Y++)de=qe[Y],M.format!==mn?pe!==null?ze?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,de.width,de.height,pe,Fe,de.data):t.texImage2D(n.TEXTURE_2D,Y,Ae,de.width,de.height,0,pe,Fe,de.data)}else if(M.isDataArrayTexture)if(ze){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){let Y=b0(Q.width,Q.height,M.format,M.type);for(let j of M.layerUpdates){let xe=Q.data.subarray(j*Y/Q.data.BYTES_PER_ELEMENT,(j+1)*Y/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,pe,Fe,xe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Fe,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,pe,Fe,Q.data);else if(M.isData3DTexture)ze?(ct&&t.texStorage3D(n.TEXTURE_3D,Me,Ae,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Fe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,pe,Fe,Q.data);else if(M.isFramebufferTexture){if(ct)if(ze)t.texStorage2D(n.TEXTURE_2D,Me,Ae,Q.width,Q.height);else{let Y=Q.width,j=Q.height;for(let xe=0;xe<Me;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ae,Y,j,0,pe,Fe,null),Y>>=1,j>>=1}}else if(qe.length>0){if(ze&&ct){let Y=ye(qe[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ae,Y.width,Y.height)}for(let Y=0,j=qe.length;Y<j;Y++)de=qe[Y],ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,pe,Fe,de):t.texImage2D(n.TEXTURE_2D,Y,Ae,pe,Fe,de);M.generateMipmaps=!1}else if(ze){if(ct){let Y=ye(Q);t.texStorage2D(n.TEXTURE_2D,Me,Ae,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Fe,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ae,pe,Fe,Q);g(M)&&f($),se.__version=H.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function q(R,M,k){if(M.image.length!==6)return;let $=We(R,M),W=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);let H=i.get(W);if(W.version!==H.__version||$===!0){t.activeTexture(n.TEXTURE0+k);let se=et.getPrimaries(et.workingColorSpace),ee=M.colorSpace===Ji?null:et.getPrimaries(M.colorSpace),oe=M.colorSpace===Ji||se===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Ve&&!Q?pe[j]=y(M.image[j],!0,r.maxCubemapSize):pe[j]=Q?M.image[j].image:M.image[j],pe[j]=Pe(M,pe[j]);let Fe=pe[0],Ae=s.convert(M.format,M.colorSpace),de=s.convert(M.type),qe=_(M.internalFormat,Ae,de,M.colorSpace),ze=M.isVideoTexture!==!0,ct=H.__version===void 0||$===!0,L=W.dataReady,Me=x(M,Fe);_e(n.TEXTURE_CUBE_MAP,M);let Y;if(Ve){ze&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,qe,Fe.width,Fe.height);for(let j=0;j<6;j++){Y=pe[j].mipmaps;for(let xe=0;xe<Y.length;xe++){let we=Y[xe];M.format!==mn?Ae!==null?ze?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,qe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,we.width,we.height,Ae,de,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,qe,we.width,we.height,0,Ae,de,we.data)}}}else{if(Y=M.mipmaps,ze&&ct){Y.length>0&&Me++;let j=ye(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,qe,j.width,j.height)}for(let j=0;j<6;j++)if(Q){ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Ae,de,pe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,pe[j].width,pe[j].height,0,Ae,de,pe[j].data);for(let xe=0;xe<Y.length;xe++){let Je=Y[xe].image[j].image;ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Je.width,Je.height,Ae,de,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,qe,Je.width,Je.height,0,Ae,de,Je.data)}}else{ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,de,pe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Ae,de,pe[j]);for(let xe=0;xe<Y.length;xe++){let we=Y[xe];ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ae,de,we.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,qe,Ae,de,we.image[j])}}}g(M)&&f(n.TEXTURE_CUBE_MAP),H.__version=W.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,k,$,W,H){let se=s.convert(k.format,k.colorSpace),ee=s.convert(k.type),oe=_(k.internalFormat,se,ee,k.colorSpace);if(!i.get(M).__hasExternalTextures){let Q=Math.max(1,M.width>>H),pe=Math.max(1,M.height>>H);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,H,oe,Q,pe,M.depth,0,se,ee,null):t.texImage2D(W,H,oe,Q,pe,0,se,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,W,i.get(k).__webglTexture,0,ce(M)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,W,i.get(k).__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,W=$&&$.isDepthTexture?$.type:null,H=v(M.stencilBuffer,W),se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=ce(M);te(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,H,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,H,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,H,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,R)}else{let $=M.textures;for(let W=0;W<$.length;W++){let H=$[W],se=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),oe=_(H.internalFormat,se,ee,H.colorSpace),Ve=ce(M);k&&te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,oe,M.width,M.height):te(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let $=i.get(M.depthTexture).__webglTexture,W=ce(M);if(M.depthTexture.format===Is)te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(M.depthTexture.format===Us)te(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ne(R){let M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",W)};$.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),Ee(M.__webglDepthbuffer[$],R,!1);else{let W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ee(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,M,k){let $=i.get(R);M!==void 0&&re($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ne(R)}function ke(R){let M=R.texture,k=i.get(R),$=i.get(M);R.addEventListener("dispose",E);let W=R.textures,H=R.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),H){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let oe=0;oe<M.mipmaps.length;oe++)k.__webglFramebuffer[ee][oe]=n.createFramebuffer()}else k.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[ee]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(se)for(let ee=0,oe=W.length;ee<oe;ee++){let Ve=i.get(W[ee]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&te(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<W.length;ee++){let oe=W[ee];k.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let Ve=s.convert(oe.format,oe.colorSpace),Q=s.convert(oe.type),pe=_(oe.internalFormat,Ve,Q,oe.colorSpace,R.isXRRenderTarget===!0),Fe=ce(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),_e(n.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)re(k.__webglFramebuffer[ee][oe],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,oe);else re(k.__webglFramebuffer[ee],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let ee=0,oe=W.length;ee<oe;ee++){let Ve=W[ee],Q=i.get(Ve);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),_e(n.TEXTURE_2D,Ve),re(k.__webglFramebuffer,R,Ve,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,0),g(Ve)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),_e(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)re(k.__webglFramebuffer[oe],R,M,n.COLOR_ATTACHMENT0,ee,oe);else re(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ee,0);g(M)&&f(ee),t.unbindTexture()}R.depthBuffer&&Ne(R)}function Xe(R){let M=R.textures;for(let k=0,$=M.length;k<$;k++){let W=M[k];if(g(W)){let H=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(W).__webglTexture;t.bindTexture(H,se),f(H),t.unbindTexture()}}}let Z=[],P=[];function le(R){if(R.samples>0){if(te(R)===!1){let M=R.textures,k=R.width,$=R.height,W=n.COLOR_BUFFER_BIT,H=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(R),ee=M.length>1;if(ee)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);let Ve=i.get(M[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,W,n.NEAREST),l===!0&&(Z.length=0,P.length=0,Z.push(n.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(H),P.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);let Ve=i.get(M[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ce(R){return Math.min(r.maxSamples,R.samples)}function te(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(R){let M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Pe(R,M){let k=R.colorSpace,$=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==cr&&k!==Ji&&(et.getTransfer(k)===dt?($!==mn||W!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=F,this.setTextureCube=ie,this.rebindTextures=De,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=te}function _w(n,e){function t(i,r=Ji){let s,o=et.getTransfer(r);if(i===Ri)return n.UNSIGNED_BYTE;if(i===Df)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return n.BYTE;if(i===Nv)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===Lf)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===ua)return n.HALF_FLOAT;if(i===kv)return n.ALPHA;if(i===Fv)return n.RGB;if(i===mn)return n.RGBA;if(i===Ov)return n.LUMINANCE;if(i===zv)return n.LUMINANCE_ALPHA;if(i===Is)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Uf)return n.RED;if(i===gc)return n.RED_INTEGER;if(i===Bv)return n.RG;if(i===kf)return n.RG_INTEGER;if(i===Ff)return n.RGBA_INTEGER;if(i===xl||i===Sl||i===Ml||i===wl)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yh||i===qh||i===$h||i===Zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Jh||i===jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kh||i===Jh)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===fd||i===pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===El)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vv||i===md||i===gd||i===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var wd=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gr=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rI={type:"move"},Tl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,T0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new zn({vertexShader:sI,fragmentShader:oI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},A0=class extends ei{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,m=null,y=new T0,g=t.getContextAttributes(),f=null,_=null,v=[],x=[],A=new J,E=null,b=new kt;b.layers.enable(1),b.viewport=new Qe;let C=new kt;C.layers.enable(2),C.viewport=new Qe;let U=[b,C],S=new wd;S.layers.enable(1),S.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Tl,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Tl,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Tl,v[q]=re),re.getHandSpace()};function z(q){let re=x.indexOf(q.inputSource);if(re===-1)return;let Ee=v[re];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,c||o),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let q=0;q<v.length;q++){let re=x[q];re!==null&&(x[q]=null,v[q].disconnect(re))}w=null,O=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){let re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Fn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,Ee=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?Us:Is,Ee=g.stencil?Ns:or);let Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Fn(h.textureWidth,h.textureHeight,{format:mn,type:Ri,depthTexture:new Xl(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(q){for(let re=0;re<q.removed.length;re++){let Ee=q.removed[re],he=x.indexOf(Ee);he>=0&&(x[he]=null,v[he].disconnect(Ee))}for(let re=0;re<q.added.length;re++){let Ee=q.added[re],he=x.indexOf(Ee);if(he===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(Ee),he=De;break}else if(x[De]===null){x[De]=Ee,he=De;break}if(he===-1)break}let Ne=v[he];Ne&&Ne.connect(Ee)}}let F=new I,ie=new I;function X(q,re,Ee){F.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(Ee.matrixWorld);let he=F.distanceTo(ie),Ne=re.projectionMatrix.elements,De=Ee.projectionMatrix.elements,ke=Ne[14]/(Ne[10]-1),Xe=Ne[14]/(Ne[10]+1),Z=(Ne[9]+1)/Ne[5],P=(Ne[9]-1)/Ne[5],le=(Ne[8]-1)/Ne[0],ce=(De[8]+1)/De[0],te=ke*le,ue=ke*ce,Pe=he/(-le+ce),ye=Pe*-le;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(Pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let R=ke+Pe,M=Xe+Pe,k=te-ye,$=ue+(he-ye),W=Z*Xe/M*R,H=P*Xe/M*R;q.projectionMatrix.makePerspective(k,$,W,H,R,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function me(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,Ee=q.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),S.near=C.near=b.near=re,S.far=C.far=b.far=Ee,(w!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,O=S.far);let he=q.parent,Ne=S.cameras;me(S,he);for(let De=0;De<Ne.length;De++)me(Ne[De],he);Ne.length===2?X(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),ge(q,S,he)};function ge(q,re,Ee){Ee===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let _e=null;function We(q,re){if(u=re.getViewerPose(c||o),m=re,u!==null){let Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let De=0;De<Ee.length;De++){let ke=Ee[De],Xe=null;if(p!==null)Xe=p.getViewport(ke);else{let P=d.getViewSubImage(h,ke);Xe=P.viewport,De===0&&(e.setRenderTargetTextures(_,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let Z=U[De];Z===void 0&&(Z=new kt,Z.layers.enable(De),Z.viewport=new Qe,U[De]=Z),Z.matrix.fromArray(ke.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ke.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),De===0&&(S.matrix.copy(Z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(Z)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let De=d.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let Ee=0;Ee<v.length;Ee++){let he=x[Ee],Ne=v[Ee];he!==null&&Ne!==void 0&&Ne.update(he,re,c||o)}_e&&_e(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}let Ze=new fw;Ze.setAnimationLoop(We),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}},vs=new On,aI=new Ue;function lI(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,hw(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===gn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===gn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=e.get(f),v=_.envMap,x=_.envMapRotation;v&&(g.envMap.value=v,vs.copy(x),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.envMapRotation.value.setFromMatrix4(aI.makeRotationFromEuler(vs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=v*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){let _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cI(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let x=v.program;i.uniformBlockBinding(_,x)}function c(_,v){let x=r[_.id];x===void 0&&(m(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",g));let A=v.program;i.updateUBOMapping(_,A);let E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function u(_){let v=d();_.__bindingPointIndex=v;let x=n.createBuffer(),A=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=r[_.id],x=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,b=x.length;E<b;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let U=0,S=C.length;U<S;U++){let w=C[U];if(p(w,E,U,A)===!0){let O=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],V=0;for(let K=0;K<z.length;K++){let F=z[K],ie=y(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,O+V,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,V),V+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,x,A){let E=_.value,b=v+"_"+x;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{let C=A[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[b]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(_){let v=_.uniforms,x=0,A=16;for(let b=0,C=v.length;b<C;b++){let U=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,w=U.length;S<w;S++){let O=U[S],z=Array.isArray(O.value)?O.value:[O.value];for(let V=0,K=z.length;V<K;V++){let F=z[V],ie=y(F),X=x%A,me=X%ie.boundary,ge=X+me;x+=me,ge!==0&&A-ge<ie.storage&&(x+=A-ge),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ie.storage}}}let E=x%A;return E>0&&(x+=A-E),_.__size=x,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(let _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var C0=class{constructor(e={}){let{canvas:t=cw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),m=new Int32Array(4),y=null,g=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=nr,this.toneMappingExposure=1;let v=this,x=!1,A=0,E=0,b=null,C=-1,U=null,S=new Qe,w=new Qe,O=null,z=new ve(0),V=0,K=t.width,F=t.height,ie=1,X=null,me=null,ge=new Qe(0,0,K,F),_e=new Qe(0,0,K,F),We=!1,Ze=new Os,q=!1,re=!1,Ee=new Ue,he=new Ue,Ne=new I,De=new Qe,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Z(){return b===null?ie:1}let P=i;function le(T,D){return t.getContext(T,D)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",we,!1),P===null){let D="webgl2";if(P=le(D,T),P===null)throw le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ce,te,ue,Pe,ye,R,M,k,$,W,H,se,ee,oe,Ve,Q,pe,Fe,Ae,de,qe,ze,ct,L;function Me(){ce=new M2(P),ce.init(),ze=new _w(P,ce),te=new g2(P,ce,e,ze),ue=new JP(P),te.reverseDepthBuffer&&ue.buffers.depth.setReversed(!0),Pe=new b2(P),ye=new OP,R=new iI(P,ce,ue,ye,te,ze,Pe),M=new _2(v),k=new S2(v),$=new LA(P),ct=new p2(P,$),W=new w2(P,$,Pe,ct),H=new A2(P,W,$,Pe),Ae=new T2(P,te,R),Q=new v2(ye),se=new FP(v,M,k,ce,te,ct,Q),ee=new lI(v,ye),oe=new BP,Ve=new YP(ce),Fe=new f2(v,M,k,ue,H,h,l),pe=new ZP(v,H,te),L=new cI(P,Pe,te,ue),de=new m2(P,ce,Pe),qe=new E2(P,ce,Pe),Pe.programs=se.programs,v.capabilities=te,v.extensions=ce,v.properties=ye,v.renderLists=oe,v.shadowMap=pe,v.state=ue,v.info=Pe}Me();let Y=new A0(v,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(K,F,!1))},this.getSize=function(T){return T.set(K,F)},this.setSize=function(T,D,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,F=D,t.width=Math.floor(T*ie),t.height=Math.floor(D*ie),B===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(K*ie,F*ie).floor()},this.setDrawingBufferSize=function(T,D,B){K=T,F=D,ie=B,t.width=Math.floor(T*B),t.height=Math.floor(D*B),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,D,B,G){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,D,B,G),ue.viewport(S.copy(ge).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(_e)},this.setScissor=function(T,D,B,G){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,D,B,G),ue.scissor(w.copy(_e).multiplyScalar(ie).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){ue.setScissorTest(We=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,D=!0,B=!0){let G=0;if(T){let N=!1;if(b!==null){let ae=b.texture.format;N=ae===Ff||ae===kf||ae===gc}if(N){let ae=b.texture.type,Se=ae===Ri||ae===or||ae===Jo||ae===Ns||ae===Df||ae===Nf,Ce=Fe.getClearColor(),Re=Fe.getClearAlpha(),Oe=Ce.r,Be=Ce.g,Ie=Ce.b;Se?(p[0]=Oe,p[1]=Be,p[2]=Ie,p[3]=Re,P.clearBufferuiv(P.COLOR,0,p)):(m[0]=Oe,m[1]=Be,m[2]=Ie,m[3]=Re,P.clearBufferiv(P.COLOR,0,m))}else G|=P.COLOR_BUFFER_BIT}D&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",we,!1),oe.dispose(),Ve.dispose(),ye.dispose(),M.dispose(),k.dispose(),H.dispose(),ct.dispose(),L.dispose(),se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Qv),Y.removeEventListener("sessionend",e_),Kr.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let T=Pe.autoReset,D=pe.enabled,B=pe.autoUpdate,G=pe.needsUpdate,N=pe.type;Me(),Pe.autoReset=T,pe.enabled=D,pe.autoUpdate=B,pe.needsUpdate=G,pe.type=N}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){let D=T.target;D.removeEventListener("dispose",Je),Rt(D)}function Rt(T){vn(T),ye.remove(T)}function vn(T){let D=ye.get(T).programs;D!==void 0&&(D.forEach(function(B){se.releaseProgram(B)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,B,G,N,ae){D===null&&(D=ke);let Se=N.isMesh&&N.matrixWorld.determinant()<0,Ce=Dw(T,D,B,G,N);ue.setMaterial(G,Se);let Re=B.index,Oe=1;if(G.wireframe===!0){if(Re=W.getWireframeAttribute(B),Re===void 0)return;Oe=2}let Be=B.drawRange,Ie=B.attributes.position,ot=Be.start*Oe,ft=(Be.start+Be.count)*Oe;ae!==null&&(ot=Math.max(ot,ae.start*Oe),ft=Math.min(ft,(ae.start+ae.count)*Oe)),Re!==null?(ot=Math.max(ot,0),ft=Math.min(ft,Re.count)):Ie!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Ie.count));let St=ft-ot;if(St<0||St===1/0)return;ct.setup(N,G,Ce,B,Re);let Tn,it=de;if(Re!==null&&(Tn=$.get(Re),it=qe,it.setIndex(Tn)),N.isMesh)G.wireframe===!0?(ue.setLineWidth(G.wireframeLinewidth*Z()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(N.isLine){let Le=G.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*Z()),N.isLineSegments?it.setMode(P.LINES):N.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else N.isPoints?it.setMode(P.POINTS):N.isSprite&&it.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,Xt=N._multiDrawCounts,rt=N._multiDrawCount,ni=Re?$.get(Re).bytesPerElement:1,$s=ye.get(G).currentProgram.getUniforms();for(let An=0;An<rt;An++)$s.setValue(P,"_gl_DrawID",An),it.render(Le[An]/ni,Xt[An])}else if(N.isInstancedMesh)it.renderInstances(ot,St,N.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Xt=Math.min(B.instanceCount,Le);it.renderInstances(ot,St,Xt)}else it.render(ot,St)};function tt(T,D,B){T.transparent===!0&&T.side===Ei&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,xc(T,D,B),T.side=rr,T.needsUpdate=!0,xc(T,D,B),T.side=Ei):xc(T,D,B)}this.compile=function(T,D,B=null){B===null&&(B=T),g=Ve.get(B),g.init(D),_.push(g),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();let G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ae=N.material;if(ae)if(Array.isArray(ae))for(let Se=0;Se<ae.length;Se++){let Ce=ae[Se];tt(Ce,B,N),G.add(Ce)}else tt(ae,B,N),G.add(ae)}),_.pop(),g=null,G},this.compileAsync=function(T,D,B=null){let G=this.compile(T,D,B);return new Promise(N=>{function ae(){if(G.forEach(function(Se){ye.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){N(T);return}setTimeout(ae,10)}ce.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let _n=null;function Di(T){_n&&_n(T)}function Qv(){Kr.stop()}function e_(){Kr.start()}let Kr=new fw;Kr.setAnimationLoop(Di),typeof self<"u"&&Kr.setContext(self),this.setAnimationLoop=function(T){_n=T,Y.setAnimationLoop(T),T===null?Kr.stop():Kr.start()},Y.addEventListener("sessionstart",Qv),Y.addEventListener("sessionend",e_),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,D,b),g=Ve.get(T,_.length),g.init(D),_.push(g),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(he),re=this.localClippingEnabled,q=Q.init(this.clippingPlanes,re),y=oe.get(T,f.length),y.init(),f.push(y),Y.enabled===!0&&Y.isPresenting===!0){let ae=v.xr.getDepthSensingMesh();ae!==null&&Yf(ae,D,-1/0,v.sortObjects)}Yf(T,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(X,me),Xe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(y,T),this.info.render.frame++,q===!0&&Q.beginShadows();let B=g.state.shadowsArray;pe.render(B,T,D),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=y.opaque,N=y.transmissive;if(g.setupLights(),D.isArrayCamera){let ae=D.cameras;if(N.length>0)for(let Se=0,Ce=ae.length;Se<Ce;Se++){let Re=ae[Se];n_(G,N,T,Re)}Xe&&Fe.render(T);for(let Se=0,Ce=ae.length;Se<Ce;Se++){let Re=ae[Se];t_(y,T,Re,Re.viewport)}}else N.length>0&&n_(G,N,T,D),Xe&&Fe.render(T),t_(y,T,D);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,D),ct.resetDefaultState(),C=-1,U=null,_.pop(),_.length>0?(g=_[_.length-1],q===!0&&Q.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Yf(T,D,B,G){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){G&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let Se=H.update(T),Ce=T.material;Ce.visible&&y.push(T,Se,Ce,B,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){let Se=H.update(T),Ce=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),De.copy(Se.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Ce)){let Re=Se.groups;for(let Oe=0,Be=Re.length;Oe<Be;Oe++){let Ie=Re[Oe],ot=Ce[Ie.materialIndex];ot&&ot.visible&&y.push(T,Se,ot,B,De.z,Ie)}}else Ce.visible&&y.push(T,Se,Ce,B,De.z,null)}}let ae=T.children;for(let Se=0,Ce=ae.length;Se<Ce;Se++)Yf(ae[Se],D,B,G)}function t_(T,D,B,G){let N=T.opaque,ae=T.transmissive,Se=T.transparent;g.setupLightsView(B),q===!0&&Q.setGlobalState(v.clippingPlanes,B),G&&ue.viewport(S.copy(G)),N.length>0&&yc(N,D,B),ae.length>0&&yc(ae,D,B),Se.length>0&&yc(Se,D,B),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function n_(T,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ua:Ri,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ae=g.state.transmissionRenderTarget[G.id],Se=G.viewport||S;ae.setSize(Se.z,Se.w);let Ce=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(z),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Fe.render(B);let Re=v.toneMapping;v.toneMapping=nr;let Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),q===!0&&Q.setGlobalState(v.clippingPlanes,G),yc(T,B,G),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ie=0,ot=D.length;Ie<ot;Ie++){let ft=D[Ie],St=ft.object,Tn=ft.geometry,it=ft.material,Le=ft.group;if(it.side===Ei&&St.layers.test(G.layers)){let Xt=it.side;it.side=gn,it.needsUpdate=!0,i_(St,B,G,Tn,it,Le),it.side=Xt,it.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ce),v.setClearColor(z,V),Oe!==void 0&&(G.viewport=Oe),v.toneMapping=Re}function yc(T,D,B){let G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ae=T.length;N<ae;N++){let Se=T[N],Ce=Se.object,Re=Se.geometry,Oe=G===null?Se.material:G,Be=Se.group;Ce.layers.test(B.layers)&&i_(Ce,D,B,Re,Oe,Be)}}function i_(T,D,B,G,N,ae){T.onBeforeRender(v,D,B,G,N,ae),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,D,B,G,T,ae),N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,v.renderBufferDirect(B,D,G,N,T,ae),N.side=rr,N.needsUpdate=!0,v.renderBufferDirect(B,D,G,N,T,ae),N.side=Ei):v.renderBufferDirect(B,D,G,N,T,ae),T.onAfterRender(v,D,B,G,N,ae)}function xc(T,D,B){D.isScene!==!0&&(D=ke);let G=ye.get(T),N=g.state.lights,ae=g.state.shadowsArray,Se=N.state.version,Ce=se.getParameters(T,N.state,ae,D,B),Re=se.getProgramCacheKey(Ce),Oe=G.programs;G.environment=T.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Je),Oe=new Map,G.programs=Oe);let Be=Oe.get(Re);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===Se)return s_(T,Ce),Be}else Ce.uniforms=se.getUniforms(T),T.onBeforeCompile(Ce,v),Be=se.acquireProgram(Ce,Re),Oe.set(Re,Be),G.uniforms=Ce.uniforms;let Ie=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=Q.uniform),s_(T,Ce),G.needsLights=Uw(T),G.lightsStateVersion=Se,G.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function r_(T){if(T.uniformsList===null){let D=T.currentProgram.getUniforms();T.uniformsList=Ko.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function s_(T,D){let B=ye.get(T);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Dw(T,D,B,G,N){D.isScene!==!0&&(D=ke),R.resetTextureUnits();let ae=D.fog,Se=G.isMeshStandardMaterial?D.environment:null,Ce=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cr,Re=(G.isMeshStandardMaterial?k:M).get(G.envMap||Se),Oe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,ft=!!B.morphAttributes.color,St=nr;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(St=v.toneMapping);let Tn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Tn!==void 0?Tn.length:0,Le=ye.get(G),Xt=g.state.lights;if(q===!0&&(re===!0||T!==U)){let Hn=T===U&&G.id===C;Q.setState(G,T,Hn)}let rt=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Xt.state.version||Le.outputColorSpace!==Ce||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Re||G.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Q.numPlanes||Le.numIntersection!==Q.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Be||Le.morphTargets!==Ie||Le.morphNormals!==ot||Le.morphColors!==ft||Le.toneMapping!==St||Le.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Le.__version=G.version);let ni=Le.currentProgram;rt===!0&&(ni=xc(G,D,N));let $s=!1,An=!1,qf=!1,Tt=ni.getUniforms(),dr=Le.uniforms;if(ue.useProgram(ni.program)&&($s=!0,An=!0,qf=!0),G.id!==C&&(C=G.id,An=!0),$s||U!==T){te.reverseDepthBuffer?(Ee.copy(T.projectionMatrix),uA(Ee),hA(Ee),Tt.setValue(P,"projectionMatrix",Ee)):Tt.setValue(P,"projectionMatrix",T.projectionMatrix),Tt.setValue(P,"viewMatrix",T.matrixWorldInverse);let Hn=Tt.map.cameraPosition;Hn!==void 0&&Hn.setValue(P,Ne.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,An=!0,qf=!0)}if(N.isSkinnedMesh){Tt.setOptional(P,N,"bindMatrix"),Tt.setOptional(P,N,"bindMatrixInverse");let Hn=N.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Tt.setValue(P,"boneTexture",Hn.boneTexture,R))}N.isBatchedMesh&&(Tt.setOptional(P,N,"batchingTexture"),Tt.setValue(P,"batchingTexture",N._matricesTexture,R),Tt.setOptional(P,N,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",N._indirectTexture,R),Tt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",N._colorsTexture,R));let $f=B.morphAttributes;if(($f.position!==void 0||$f.normal!==void 0||$f.color!==void 0)&&Ae.update(N,B,ni),(An||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,Tt.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dr.envMap.value=Re,dr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(dr.envMapIntensity.value=D.environmentIntensity),An&&(Tt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Nw(dr,qf),ae&&G.fog===!0&&ee.refreshFogUniforms(dr,ae),ee.refreshMaterialUniforms(dr,G,ie,F,g.state.transmissionRenderTarget[T.id]),Ko.upload(P,r_(Le),dr,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ko.upload(P,r_(Le),dr,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(P,"center",N.center),Tt.setValue(P,"modelViewMatrix",N.modelViewMatrix),Tt.setValue(P,"normalMatrix",N.normalMatrix),Tt.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Hn=G.uniformsGroups;for(let Zf=0,kw=Hn.length;Zf<kw;Zf++){let o_=Hn[Zf];L.update(o_,ni),L.bind(o_,ni)}}return ni}function Nw(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Uw(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,D,B){ye.get(T.texture).__webglTexture=D,ye.get(T.depthTexture).__webglTexture=B;let G=ye.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){let B=ye.get(T);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,B=0){b=T,A=D,E=B;let G=!0,N=null,ae=!1,Se=!1;if(T){let Re=ye.get(T);if(Re.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Re.__hasExternalTextures)R.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&ye.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);let Be=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?N=Be[D][B]:N=Be[D],ae=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[B]:N=Be,S.copy(T.viewport),w.copy(T.scissor),O=T.scissorTest}else S.copy(ge).multiplyScalar(ie).floor(),w.copy(_e).multiplyScalar(ie).floor(),O=We;if(ue.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&ue.drawBuffers(T,N),ue.viewport(S),ue.scissor(w),ue.setScissorTest(O),ae){let Re=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,B)}else if(Se){let Re=ye.get(T.texture),Oe=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Oe)}C=-1},this.readRenderTargetPixels=function(T,D,B,G,N,ae,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){ue.bindFramebuffer(P.FRAMEBUFFER,Ce);try{let Re=T.texture,Oe=Re.format,Be=Re.type;if(!te.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-G&&B>=0&&B<=T.height-N&&P.readPixels(D,B,G,N,ze.convert(Oe),ze.convert(Be),ae)}finally{let Re=b!==null?ye.get(b).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,D,B,G,N,ae,Se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){let Re=T.texture,Oe=Re.format,Be=Re.type;if(!te.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-G&&B>=0&&B<=T.height-N){ue.bindFramebuffer(P.FRAMEBUFFER,Ce);let Ie=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(D,B,G,N,ze.convert(Oe),ze.convert(Be),0);let ot=b!==null?ye.get(b).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,ot);let ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cA(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ie),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Ie),P.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,B=0){T.isTexture!==!0&&(kh("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);let G=Math.pow(2,-B),N=Math.floor(T.image.width*G),ae=Math.floor(T.image.height*G),Se=D!==null?D.x:0,Ce=D!==null?D.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,Se,Ce,N,ae),ue.unbindTexture()},this.copyTextureToTexture=function(T,D,B=null,G=null,N=0){T.isTexture!==!0&&(kh("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ae,Se,Ce,Re,Oe,Be;B!==null?(ae=B.max.x-B.min.x,Se=B.max.y-B.min.y,Ce=B.min.x,Re=B.min.y):(ae=T.image.width,Se=T.image.height,Ce=0,Re=0),G!==null?(Oe=G.x,Be=G.y):(Oe=0,Be=0);let Ie=ze.convert(D.format),ot=ze.convert(D.type);R.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let ft=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Tn=P.getParameter(P.UNPACK_SKIP_PIXELS),it=P.getParameter(P.UNPACK_SKIP_ROWS),Le=P.getParameter(P.UNPACK_SKIP_IMAGES),Xt=T.isCompressedTexture?T.mipmaps[N]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Oe,Be,ae,Se,Ie,ot,Xt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Oe,Be,Xt.width,Xt.height,Ie,Xt.data):P.texSubImage2D(P.TEXTURE_2D,N,Oe,Be,ae,Se,Ie,ot,Xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,it),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le),N===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,D,B=null,G=null,N=0){T.isTexture!==!0&&(kh("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,T=arguments[2],D=arguments[3],N=arguments[4]||0);let ae,Se,Ce,Re,Oe,Be,Ie,ot,ft,St=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(ae=B.max.x-B.min.x,Se=B.max.y-B.min.y,Ce=B.max.z-B.min.z,Re=B.min.x,Oe=B.min.y,Be=B.min.z):(ae=St.width,Se=St.height,Ce=St.depth,Re=0,Oe=0,Be=0),G!==null?(Ie=G.x,ot=G.y,ft=G.z):(Ie=0,ot=0,ft=0);let Tn=ze.convert(D.format),it=ze.convert(D.type),Le;if(D.isData3DTexture)R.setTexture3D(D,0),Le=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),Le=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Xt=P.getParameter(P.UNPACK_ROW_LENGTH),rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ni=P.getParameter(P.UNPACK_SKIP_PIXELS),$s=P.getParameter(P.UNPACK_SKIP_ROWS),An=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Le,N,Ie,ot,ft,ae,Se,Ce,Tn,it,St.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,N,Ie,ot,ft,ae,Se,Ce,Tn,St.data):P.texSubImage3D(Le,N,Ie,ot,ft,ae,Se,Ce,Tn,it,St),P.pixelStorei(P.UNPACK_ROW_LENGTH,Xt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ni),P.pixelStorei(P.UNPACK_SKIP_ROWS,$s),P.pixelStorei(P.UNPACK_SKIP_IMAGES,An),N===0&&D.generateMipmaps&&P.generateMipmap(Le),ue.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){A=0,E=0,b=null,ue.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zf?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===vc?"display-p3":"srgb"}},Ed=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},bd=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Td=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new I,zs=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$l=class extends Wt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bo,cl=new I,Vo=new I,Ho=new I,Go=new J,ul=new J,yw=new Ue,uh=new I,hl=new I,hh=new I,AM=new J,Gg=new J,CM=new J,Ad=class extends nt{constructor(e=new $l){if(super(),this.isSprite=!0,this.type="Sprite",Bo===void 0){Bo=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new sa(t,5);Bo.setIndex([0,1,2,0,2,3]),Bo.setAttribute("position",new zs(i,3,0,!1)),Bo.setAttribute("uv",new zs(i,2,3,!1))}this.geometry=Bo,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vo.setFromMatrixScale(this.matrixWorld),yw.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ho.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vo.multiplyScalar(-Ho.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;dh(uh.set(-.5,-.5,0),Ho,o,Vo,r,s),dh(hl.set(.5,-.5,0),Ho,o,Vo,r,s),dh(hh.set(.5,.5,0),Ho,o,Vo,r,s),AM.set(0,0),Gg.set(1,0),CM.set(1,1);let a=e.ray.intersectTriangle(uh,hl,hh,!1,cl);if(a===null&&(dh(hl.set(-.5,.5,0),Ho,o,Vo,r,s),Gg.set(0,1),a=e.ray.intersectTriangle(uh,hh,hl,!1,cl),a===null))return;let l=e.ray.origin.distanceTo(cl);l<e.near||l>e.far||t.push({distance:l,point:cl.clone(),uv:bi.getInterpolation(cl,uh,hl,hh,AM,Gg,CM,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dh(n,e,t,i,r,s){Go.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ul.x=s*Go.x-r*Go.y,ul.y=r*Go.x+s*Go.y):ul.copy(Go),n.copy(e),n.x+=ul.x,n.y+=ul.y,n.applyMatrix4(yw)}var fh=new I,RM=new I,Cd=class extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,r=t.length;i<r;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let r=this.levels,s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){let r=t.splice(i,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){fh.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(fh);this.getObjectForDistance(r).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){fh.setFromMatrixPosition(e.matrixWorld),RM.setFromMatrixPosition(this.matrixWorld);let i=fh.distanceTo(RM)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),i>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let r=0,s=i.length;r<s;r++){let o=i[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},PM=new I,IM=new Qe,LM=new Qe,uI=new I,DM=new Ue,ph=new I,Wg=new Gt,NM=new Ue,Xg=new Xr,Rd=class extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=l0,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ph),this.boundingBox.expandByPoint(ph)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ph),this.boundingSphere.expandByPoint(ph)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wg.copy(this.boundingSphere),Wg.applyMatrix4(r),e.ray.intersectsSphere(Wg)!==!1&&(NM.copy(r).invert(),Xg.copy(e.ray).applyMatrix4(NM),!(this.boundingBox!==null&&Xg.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xg)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===l0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;IM.fromBufferAttribute(r.attributes.skinIndex,e),LM.fromBufferAttribute(r.attributes.skinWeight,e),PM.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=LM.getComponent(s);if(o!==0){let a=IM.getComponent(s);DM.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(uI.copy(PM).applyMatrix4(DM),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zl=class extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qn=class extends Dt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ht,u=Ht,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},UM=new Ue,hI=new Ue,Pd=class n{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:hI;UM.multiplyMatrices(a,t[s]),UM.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Qn(t,e,e,mn,bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Zl),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Yr=class extends st{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wo=new Ue,kM=new Ue,mh=[],FM=new Zt,dI=new Ue,dl=new bt,fl=new Gt,Id=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dI)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wo),FM.copy(e.boundingBox).applyMatrix4(Wo),this.boundingBox.union(FM)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wo),fl.copy(e.boundingSphere).applyMatrix4(Wo),this.boundingSphere.union(fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(dl.geometry=this.geometry,dl.material=this.material,dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(i),e.ray.intersectsSphere(fl)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wo),kM.multiplyMatrices(i,Wo),dl.matrixWorld=kM,dl.raycast(e,mh);for(let o=0,a=mh.length;o<a;o++){let l=mh[o];l.instanceId=s,l.object=this,t.push(l)}mh.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(r*this.count),r,this.count,Uf,bn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function fI(n,e){return n.z-e.z}function pI(n,e){return e.z-n.z}var R0=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];s.push(o),this.index++,o.start=e.start,o.count=e.count,o.z=t,o.index=i}reset(){this.list.length=0,this.index=0}},Br=new Ue,Yg=new Ue,mI=new Ue,gI=new ve(1,1,1),OM=new Ue,qg=new Os,gh=new Zt,_s=new Gt,pl=new I,zM=new I,vI=new I,$g=new R0,sn=new bt,vh=[];function _I(n,e,t=0){let i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){let r=n.count;for(let s=0;s<r;s++)for(let o=0;o<i;o++)e.setComponent(s+t,o,n.getComponent(s,o))}else e.array.set(n.array,t*i);e.needsUpdate=!0}var Ld=class extends bt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,i=t*2,r){super(new $e,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Qn(t,e,e,mn,bn);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Qn(t,e,e,gc,or);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Qn(t,e,e,mn,bn);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(i*l),d=new st(u,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){let s=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new st(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let r=e.getAttribute(i),s=t.getAttribute(i);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,Br),this.getBoundingBoxAt(s,gh).applyMatrix4(Br),e.union(gh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let s=t[i].geometryIndex;this.getMatrixAt(i,Br),this.getBoundingSphereAt(s,_s).applyMatrix4(Br),e.union(_s)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},r=null;this._availableInstanceIds.length>0?(r=this._availableInstanceIds.pop(),this._drawInfo[r]=i):(r=this._drawInfo.length,this._drawInfo.push(i));let s=this._matricesTexture,o=s.image.data;mI.toArray(o,r*16),s.needsUpdate=!0;let a=this._colorsTexture;return a&&(gI.toArray(a.image.data,r*4),a.needsUpdate=!0),r}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");let r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},s=null,o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;let c=e.getIndex(),u=c!==null;if(u&&(i===-1?r.indexCount=c.count:r.indexCount=i,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let d=this._geometryCount;return this._geometryCount++,o.push(r),a.push({start:u?r.indexStart:r.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Zt,sphereInitialized:!1,sphere:new Gt}),this.setGeometryAt(d,e),d}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,r=i.getIndex()!==null,s=i.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(r&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.vertexCount;for(let p in i.attributes){let m=t.getAttribute(p),y=i.getAttribute(p);_I(m,y,l);let g=m.itemSize;for(let f=m.count,_=c;f<_;f++){let v=l+f;for(let x=0;x<g;x++)y.setComponent(v,x,0)}y.needsUpdate=!0,y.addUpdateRange(l*g,c*g)}if(r){let p=a.indexStart;for(let m=0;m<o.count;m++)s.setX(p+m,l+o.getX(m));for(let m=o.count,y=a.indexCount;m<y;m++)s.setX(p+m,l);s.needsUpdate=!0,s.addUpdateRange(p,a.indexCount)}let u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;let d=this._drawRanges[e],h=t.getAttribute("position");return d.count=r?o.count:h.count,this._visibilityChanged=!0,e}deleteInstance(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this._bounds[e],r=i.box,s=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let o=s.index,a=s.attributes.position,l=this._drawRanges[e];for(let c=l.start,u=l.start+l.count;c<u;c++){let d=c;o&&(d=o.getX(d)),r.expandByPoint(pl.fromBufferAttribute(a,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this._bounds[e],r=i.sphere,s=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,gh),gh.getCenter(r.center);let o=s.index,a=s.attributes.position,l=this._drawRanges[e],c=0;for(let u=l.start,d=l.start+l.count;u<d;u++){let h=u;o&&(h=o.getX(h)),pl.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(pl))}r.radius=Math.sqrt(c),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let i=this._drawInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){let i=this._drawInfo,r=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let i=this._colorsTexture,r=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(r,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){let i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){let i=this._drawInfo;return e>=i.length||i[e].active===!1||i[e].visible===t?this:(i[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let i=this._drawInfo;return e>=i.length||i[e].active===!1||t<0||t>=this._geometryCount?null:(i[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let i=this._drawRanges[e];return t.start=i.start,t.count=i.count,t}raycast(e,t){let i=this._drawInfo,r=this._drawRanges,s=this.matrixWorld,o=this.geometry;sn.material=this.material,sn.geometry.index=o.index,sn.geometry.attributes=o.attributes,sn.geometry.boundingBox===null&&(sn.geometry.boundingBox=new Zt),sn.geometry.boundingSphere===null&&(sn.geometry.boundingSphere=new Gt);for(let a=0,l=i.length;a<l;a++){if(!i[a].visible||!i[a].active)continue;let c=i[a].geometryIndex,u=r[c];sn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,sn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,sn.geometry.boundingBox),this.getBoundingSphereAt(c,sn.geometry.boundingSphere),sn.raycast(e,vh);for(let d=0,h=vh.length;d<h;d++){let p=vh[d];p.object=this,p.batchId=a,t.push(p)}vh.length=0}sn.material=null,sn.geometry.index=null,sn.geometry.attributes={},sn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=r.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,h=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data;h&&(OM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),qg.setFromProjectionMatrix(OM,e.coordinateSystem));let y=0;if(this.sortObjects){Yg.copy(this.matrixWorld).invert(),pl.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Yg),zM.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Yg);for(let _=0,v=l.length;_<v;_++)if(l[_].visible&&l[_].active){let x=l[_].geometryIndex;this.getMatrixAt(_,Br),this.getBoundingSphereAt(x,_s).applyMatrix4(Br);let A=!1;if(h&&(A=!qg.intersectsSphere(_s)),!A){let E=vI.subVectors(_s.center,pl).dot(zM);$g.push(d[x],E,_)}}let g=$g.list,f=this.customSort;f===null?g.sort(s.transparent?pI:fI):f.call(this,g,i);for(let _=0,v=g.length;_<v;_++){let x=g[_];c[y]=x.start*a,u[y]=x.count,m[y]=x.index,y++}$g.reset()}else for(let g=0,f=l.length;g<f;g++)if(l[g].visible&&l[g].active){let _=l[g].geometryIndex,v=!1;if(h&&(this.getMatrixAt(g,Br),this.getBoundingSphereAt(_,_s).applyMatrix4(Br),v=!qg.intersectsSphere(_s)),!v){let x=d[_];c[y]=x.start*a,u[y]=x.count,m[y]=g,y++}}p.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,s,o){this.onBeforeRender(e,null,r,s,o)}},Kt=class extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dd=new I,Nd=new I,BM=new Ue,ml=new Xr,_h=new Gt,Zg=new I,VM=new I,Ii=class extends nt{constructor(e=new $e,t=new Kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Dd.fromBufferAttribute(t,r-1),Nd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Dd.distanceTo(Nd);e.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_h.copy(i.boundingSphere),_h.applyMatrix4(r),_h.radius+=s,e.ray.intersectsSphere(_h)===!1)return;BM.copy(r).invert(),ml.copy(e.ray).applyMatrix4(BM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=p,g=m-1;y<g;y+=c){let f=u.getX(y),_=u.getX(y+1),v=yh(this,e,ml,l,f,_);v&&t.push(v)}if(this.isLineLoop){let y=u.getX(m-1),g=u.getX(p),f=yh(this,e,ml,l,y,g);f&&t.push(f)}}else{let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=p,g=m-1;y<g;y+=c){let f=yh(this,e,ml,l,y,y+1);f&&t.push(f)}if(this.isLineLoop){let y=yh(this,e,ml,l,m-1,p);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function yh(n,e,t,i,r,s){let o=n.geometry.attributes.position;if(Dd.fromBufferAttribute(o,r),Nd.fromBufferAttribute(o,s),t.distanceSqToSegment(Dd,Nd,Zg,VM)>i)return;Zg.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Zg);if(!(l<e.near||l>e.far))return{distance:l,point:VM.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var HM=new I,GM=new I,ti=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)HM.fromBufferAttribute(t,r),GM.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+HM.distanceTo(GM);e.setAttribute("lineDistance",new Te(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ud=class extends Ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Kl=class extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},WM=new Ue,P0=new Xr,xh=new Gt,Sh=new I,kd=class extends nt{constructor(e=new $e,t=new Kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xh.copy(i.boundingSphere),xh.applyMatrix4(r),xh.radius+=s,e.ray.intersectsSphere(xh)===!1)return;WM.copy(r).invert(),P0.copy(e.ray).applyMatrix4(WM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=h,y=p;m<y;m++){let g=c.getX(m);Sh.fromBufferAttribute(d,g),XM(Sh,g,l,r,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=h,y=p;m<y;m++)Sh.fromBufferAttribute(d,m),XM(Sh,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function XM(n,e,t,i,r,s,o){let a=P0.distanceSqToPoint(n);if(a<t){let l=new I;P0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var I0=class extends Dt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Lt,this.magFilter=s!==void 0?s:Lt,this.generateMipmaps=!1;let u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},L0=class extends Dt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ht,this.minFilter=Ht,this.generateMipmaps=!1,this.needsUpdate=!0}},oa=class extends Dt{constructor(e,t,i,r,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},D0=class extends oa{constructor(e,t,i,r,s,o){super(e,t,i,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=jn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},N0=class extends oa{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,sr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},U0=class extends Dt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new J:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,r=[],s=[],o=[],a=new I,l=new Ue;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Et(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Et(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},aa=class extends Bn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new J){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fd=class extends aa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yv(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Mh=new I,Kg=new Yv,Jg=new Yv,jg=new Yv,Od=class extends Bn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Mh.subVectors(r[0],r[1]).add(r[0]),c=Mh);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Mh.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Kg.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,y,g),Jg.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,y,g),jg.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(Kg.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Jg.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),jg.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Kg.calc(l),Jg.calc(l),jg.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function YM(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function yI(n,e){let t=1-n;return t*t*e}function xI(n,e){return 2*(1-n)*n*e}function SI(n,e){return n*n*e}function Al(n,e,t,i){return yI(n,e)+xI(n,t)+SI(n,i)}function MI(n,e){let t=1-n;return t*t*t*e}function wI(n,e){let t=1-n;return 3*t*t*n*e}function EI(n,e){return 3*(1-n)*n*n*e}function bI(n,e){return n*n*n*e}function Cl(n,e,t,i,r){return MI(n,e)+wI(n,t)+EI(n,i)+bI(n,r)}var Jl=class extends Bn{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cl(e,r.x,s.x,o.x,a.x),Cl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zd=class extends Bn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cl(e,r.x,s.x,o.x,a.x),Cl(e,r.y,s.y,o.y,a.y),Cl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends Bn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bd=class extends Bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Bn{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Al(e,r.x,s.x,o.x),Al(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends Bn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Al(e,r.x,s.x,o.x),Al(e,r.y,s.y,o.y),Al(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(YM(a,l.x,c.x,u.x,d.x),YM(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this}},Vd=Object.freeze({__proto__:null,ArcCurve:Fd,CatmullRomCurve3:Od,CubicBezierCurve:Jl,CubicBezierCurve3:zd,EllipseCurve:aa,LineCurve:jl,LineCurve3:Bd,QuadraticBezierCurve:Ql,QuadraticBezierCurve3:ec,SplineCurve:tc}),Hd=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Vd[r.type]().fromJSON(r))}return this}},Bs=class extends Hd{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new jl(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ql(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Jl(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new tc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new aa(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nc=class n extends $e{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Et(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new I,h=new J,p=new I,m=new I,y=new I,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-g,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(m)}for(let _=0;_<=t;_++){let v=i+_*u*r,x=Math.sin(v),A=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*x,d.y=e[E].y,d.z=e[E].x*A,o.push(d.x,d.y,d.z),h.x=_/t,h.y=E/(e.length-1),a.push(h.x,h.y);let b=l[3*E+0]*x,C=l[3*E+1],U=l[3*E+0]*A;c.push(b,C,U)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,A=x,E=x+e.length,b=x+e.length+1,C=x+1;s.push(A,E,C),s.push(b,C,E)}this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Gd=class n extends nc{constructor(e=1,t=1,i=4,r=8){let s=new Bs;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Wd=class n extends $e{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new I,u=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},la=class n extends $e{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],p=[],m=0,y=[],g=i/2,f=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(p,2));function _(){let x=new I,A=new I,E=0,b=(t-e)/i;for(let C=0;C<=s;C++){let U=[],S=C/s,w=S*(t-e)+e;for(let O=0;O<=r;O++){let z=O/r,V=z*l+a,K=Math.sin(V),F=Math.cos(V);A.x=w*K,A.y=-S*i+g,A.z=w*F,d.push(A.x,A.y,A.z),x.set(K,b,F).normalize(),h.push(x.x,x.y,x.z),p.push(z,1-S),U.push(m++)}y.push(U)}for(let C=0;C<r;C++)for(let U=0;U<s;U++){let S=y[U][C],w=y[U+1][C],O=y[U+1][C+1],z=y[U][C+1];e>0&&(u.push(S,w,z),E+=3),t>0&&(u.push(w,O,z),E+=3)}c.addGroup(f,E,0),f+=E}function v(x){let A=m,E=new J,b=new I,C=0,U=x===!0?e:t,S=x===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),m++;let w=m;for(let O=0;O<=r;O++){let V=O/r*l+a,K=Math.cos(V),F=Math.sin(V);b.x=U*F,b.y=g*S,b.z=U*K,d.push(b.x,b.y,b.z),h.push(0,S,0),E.x=K*.5+.5,E.y=F*.5*S+.5,p.push(E.x,E.y),m++}for(let O=0;O<r;O++){let z=A+O,V=w+O;x===!0?u.push(V,V+1,z):u.push(V+1,V,z),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xd=class n extends la{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class n extends $e{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new I,x=new I,A=new I;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],x),p(t[E+2],A),l(v,x,A,_)}function l(_,v,x,A){let E=A+1,b=[];for(let C=0;C<=E;C++){b[C]=[];let U=_.clone().lerp(x,C/E),S=v.clone().lerp(x,C/E),w=E-C;for(let O=0;O<=w;O++)O===0&&C===E?b[C][O]=U:b[C][O]=U.clone().lerp(S,O/w)}for(let C=0;C<E;C++)for(let U=0;U<2*(E-C)-1;U++){let S=Math.floor(U/2);U%2===0?(h(b[C][S+1]),h(b[C+1][S]),h(b[C][S])):(h(b[C][S+1]),h(b[C+1][S+1]),h(b[C+1][S]))}}function c(_){let v=new I;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(_),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function u(){let _=new I;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];let x=g(_)/2/Math.PI+.5,A=f(_)/Math.PI+.5;o.push(x,1-A)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let v=o[_+0],x=o[_+2],A=o[_+4],E=Math.max(v,x,A),b=Math.min(v,x,A);E>.9&&b<.1&&(v<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,v){let x=_*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function m(){let _=new I,v=new I,x=new I,A=new I,E=new J,b=new J,C=new J;for(let U=0,S=0;U<s.length;U+=9,S+=6){_.set(s[U+0],s[U+1],s[U+2]),v.set(s[U+3],s[U+4],s[U+5]),x.set(s[U+6],s[U+7],s[U+8]),E.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),A.copy(_).add(v).add(x).divideScalar(3);let w=g(A);y(E,S+0,_,w),y(b,S+2,v,w),y(C,S+4,x,w)}}function y(_,v,x,A){A<0&&_.x===1&&(o[v]=_.x-1),x.x===0&&x.z===0&&(o[v]=A/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Yd=class n extends qr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},wh=new I,Eh=new I,Qg=new I,bh=new bi,qd=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ls*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:y,b:g,c:f}=bh;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),bh.getNormal(Qg),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let v=(_+1)%3,x=d[_],A=d[v],E=bh[u[_]],b=bh[u[v]],C=`${x}_${A}`,U=`${A}_${x}`;U in h&&h[U]?(Qg.dot(h[U].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(b.x,b.y,b.z)),h[U]=null):C in h||(h[C]={index0:c[_],index1:c[v],normal:Qg.clone()})}}for(let m in h)if(h[m]){let{index0:y,index1:g}=h[m];wh.fromBufferAttribute(a,y),Eh.fromBufferAttribute(a,g),p.push(wh.x,wh.y,wh.z),p.push(Eh.x,Eh.y,Eh.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ir=class extends Bs{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Bs().fromJSON(r))}return this}},TI={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=xw(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(i&&(s=II(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let m=t;m<r;m+=t)d=n[m],h=n[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ic(s,o,t,a,l,p,0),o}};function xw(n,e,t,i,r){let s,o;if(r===HI(n,e,t,i)>0)for(s=e;s<t;s+=i)o=qM(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=qM(s,n[s],n[s+1],o);return o&&Vf(o,o.next)&&(sc(o),o=o.next),o}function Vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vf(t,t.next)||xt(t.prev,t,t.next)===0)){if(sc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ic(n,e,t,i,r,s,o){if(!n)return;!o&&s&&kI(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?CI(n,i,r,s):AI(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),sc(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=RI(Vs(n),e,t),ic(n,e,t,i,r,s,2)):o===2&&PI(n,e,t,i,r,s):ic(Vs(n),e,t,i,r,s,1);break}}}function AI(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=p&&$o(r,a,s,l,o,c,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function CI(n,e,t,i){let r=n.prev,s=n,o=n.next;if(xt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,y=a>l?a>c?a:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,f=k0(p,m,e,t,i),_=k0(y,g,e,t,i),v=n.prevZ,x=n.nextZ;for(;v&&v.z>=f&&x&&x.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&$o(a,u,l,d,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&$o(a,u,l,d,c,h,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&$o(a,u,l,d,c,h,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&$o(a,u,l,d,c,h,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function RI(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Vf(r,s)&&Sw(r,i,i.next,s)&&rc(r,s)&&rc(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),sc(i),sc(i.next),i=n=s),i=i.next}while(i!==n);return Vs(i)}function PI(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zI(o,a)){let l=Mw(o,a);o=Vs(o,o.next),l=Vs(l,l.next),ic(o,e,t,i,r,s,0),ic(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function II(n,e,t,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=xw(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(OI(c));for(r.sort(LI),s=0;s<r.length;s++)t=DI(r[s],t);return t}function LI(n,e){return n.x-e.x}function DI(n,e){let t=NI(n,e);if(!t)return e;let i=Mw(t,n);return Vs(i,i.next),Vs(t,t.next)}function NI(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&$o(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),rc(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&UI(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function UI(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function kI(n,e,t,i){let r=n;do r.z===0&&(r.z=k0(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,FI(r)}function FI(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function k0(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function OI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $o(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function zI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!BI(n,e)&&(rc(n,e)&&rc(e,n)&&VI(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||Vf(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vf(n,e){return n.x===e.x&&n.y===e.y}function Sw(n,e,t,i){let r=Ah(xt(n,e,t)),s=Ah(xt(n,e,i)),o=Ah(xt(t,i,n)),a=Ah(xt(t,i,e));return!!(r!==s&&o!==a||r===0&&Th(n,t,e)||s===0&&Th(n,i,e)||o===0&&Th(t,n,i)||a===0&&Th(t,e,i))}function Th(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ah(n){return n>0?1:n<0?-1:0}function BI(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sw(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function rc(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function VI(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mw(n,e){let t=new F0(n.i,n.x,n.y),i=new F0(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function qM(n,e,t,i){let r=new F0(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function F0(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function HI(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Ci=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];$M(e),ZM(i,e);let o=e.length;t.forEach($M);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,ZM(i,t[l]);let a=TI.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function $M(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ZM(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var $d=class n extends $e{constructor(e=new ir([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:GI,v,x=!1,A,E,b,C;f&&(v=f.getSpacedPoints(u),x=!0,h=!1,A=f.computeFrenetFrames(u,!1),E=new I,b=new I,C=new I),h||(g=0,p=0,m=0,y=0);let U=a.extractPoints(c),S=U.shape,w=U.holes;if(!Ci.isClockWise(S)){S=S.reverse();for(let Z=0,P=w.length;Z<P;Z++){let le=w[Z];Ci.isClockWise(le)&&(w[Z]=le.reverse())}}let z=Ci.triangulateShape(S,w),V=S;for(let Z=0,P=w.length;Z<P;Z++){let le=w[Z];S=S.concat(le)}function K(Z,P,le){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(P,le)}let F=S.length,ie=z.length;function X(Z,P,le){let ce,te,ue,Pe=Z.x-P.x,ye=Z.y-P.y,R=le.x-Z.x,M=le.y-Z.y,k=Pe*Pe+ye*ye,$=Pe*M-ye*R;if(Math.abs($)>Number.EPSILON){let W=Math.sqrt(k),H=Math.sqrt(R*R+M*M),se=P.x-ye/W,ee=P.y+Pe/W,oe=le.x-M/H,Ve=le.y+R/H,Q=((oe-se)*M-(Ve-ee)*R)/(Pe*M-ye*R);ce=se+Pe*Q-Z.x,te=ee+ye*Q-Z.y;let pe=ce*ce+te*te;if(pe<=2)return new J(ce,te);ue=Math.sqrt(pe/2)}else{let W=!1;Pe>Number.EPSILON?R>Number.EPSILON&&(W=!0):Pe<-Number.EPSILON?R<-Number.EPSILON&&(W=!0):Math.sign(ye)===Math.sign(M)&&(W=!0),W?(ce=-ye,te=Pe,ue=Math.sqrt(k)):(ce=Pe,te=ye,ue=Math.sqrt(k/2))}return new J(ce/ue,te/ue)}let me=[];for(let Z=0,P=V.length,le=P-1,ce=Z+1;Z<P;Z++,le++,ce++)le===P&&(le=0),ce===P&&(ce=0),me[Z]=X(V[Z],V[le],V[ce]);let ge=[],_e,We=me.concat();for(let Z=0,P=w.length;Z<P;Z++){let le=w[Z];_e=[];for(let ce=0,te=le.length,ue=te-1,Pe=ce+1;ce<te;ce++,ue++,Pe++)ue===te&&(ue=0),Pe===te&&(Pe=0),_e[ce]=X(le[ce],le[ue],le[Pe]);ge.push(_e),We=We.concat(_e)}for(let Z=0;Z<g;Z++){let P=Z/g,le=p*Math.cos(P*Math.PI/2),ce=m*Math.sin(P*Math.PI/2)+y;for(let te=0,ue=V.length;te<ue;te++){let Pe=K(V[te],me[te],ce);he(Pe.x,Pe.y,-le)}for(let te=0,ue=w.length;te<ue;te++){let Pe=w[te];_e=ge[te];for(let ye=0,R=Pe.length;ye<R;ye++){let M=K(Pe[ye],_e[ye],ce);he(M.x,M.y,-le)}}}let Ze=m+y;for(let Z=0;Z<F;Z++){let P=h?K(S[Z],We[Z],Ze):S[Z];x?(b.copy(A.normals[0]).multiplyScalar(P.x),E.copy(A.binormals[0]).multiplyScalar(P.y),C.copy(v[0]).add(b).add(E),he(C.x,C.y,C.z)):he(P.x,P.y,0)}for(let Z=1;Z<=u;Z++)for(let P=0;P<F;P++){let le=h?K(S[P],We[P],Ze):S[P];x?(b.copy(A.normals[Z]).multiplyScalar(le.x),E.copy(A.binormals[Z]).multiplyScalar(le.y),C.copy(v[Z]).add(b).add(E),he(C.x,C.y,C.z)):he(le.x,le.y,d/u*Z)}for(let Z=g-1;Z>=0;Z--){let P=Z/g,le=p*Math.cos(P*Math.PI/2),ce=m*Math.sin(P*Math.PI/2)+y;for(let te=0,ue=V.length;te<ue;te++){let Pe=K(V[te],me[te],ce);he(Pe.x,Pe.y,d+le)}for(let te=0,ue=w.length;te<ue;te++){let Pe=w[te];_e=ge[te];for(let ye=0,R=Pe.length;ye<R;ye++){let M=K(Pe[ye],_e[ye],ce);x?he(M.x,M.y+v[u-1].y,v[u-1].x+le):he(M.x,M.y,d+le)}}}q(),re();function q(){let Z=r.length/3;if(h){let P=0,le=F*P;for(let ce=0;ce<ie;ce++){let te=z[ce];Ne(te[2]+le,te[1]+le,te[0]+le)}P=u+g*2,le=F*P;for(let ce=0;ce<ie;ce++){let te=z[ce];Ne(te[0]+le,te[1]+le,te[2]+le)}}else{for(let P=0;P<ie;P++){let le=z[P];Ne(le[2],le[1],le[0])}for(let P=0;P<ie;P++){let le=z[P];Ne(le[0]+F*u,le[1]+F*u,le[2]+F*u)}}i.addGroup(Z,r.length/3-Z,0)}function re(){let Z=r.length/3,P=0;Ee(V,P),P+=V.length;for(let le=0,ce=w.length;le<ce;le++){let te=w[le];Ee(te,P),P+=te.length}i.addGroup(Z,r.length/3-Z,1)}function Ee(Z,P){let le=Z.length;for(;--le>=0;){let ce=le,te=le-1;te<0&&(te=Z.length-1);for(let ue=0,Pe=u+g*2;ue<Pe;ue++){let ye=F*ue,R=F*(ue+1),M=P+ce+ye,k=P+te+ye,$=P+te+R,W=P+ce+R;De(M,k,$,W)}}}function he(Z,P,le){l.push(Z),l.push(P),l.push(le)}function Ne(Z,P,le){ke(Z),ke(P),ke(le);let ce=r.length/3,te=_.generateTopUV(i,r,ce-3,ce-2,ce-1);Xe(te[0]),Xe(te[1]),Xe(te[2])}function De(Z,P,le,ce){ke(Z),ke(P),ke(ce),ke(P),ke(le),ke(ce);let te=r.length/3,ue=_.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);Xe(ue[0]),Xe(ue[1]),Xe(ue[3]),Xe(ue[1]),Xe(ue[2]),Xe(ue[3])}function ke(Z){r.push(l[Z*3+0]),r.push(l[Z*3+1]),r.push(l[Z*3+2])}function Xe(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return WI(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vd[r.type]().fromJSON(r)),new n(i,e.options)}},GI={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new J(s,o),new J(a,l),new J(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],m=e[r*3+2],y=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-d),new J(h,1-m),new J(y,1-f)]:[new J(a,1-l),new J(u,1-d),new J(p,1-m),new J(g,1-f)]}};function WI(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zd=class n extends qr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},oc=class n extends qr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Kd=class n extends $e{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/r,p=new I,m=new J;for(let y=0;y<=r;y++){for(let g=0;g<=i;g++){let f=s+g/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let y=0;y<r;y++){let g=y*(i+1);for(let f=0;f<i;f++){let _=f+g,v=_,x=_+i+1,A=_+i+2,E=_+1;a.push(v,x,E),a.push(x,A,E)}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jd=class n extends $e{constructor(e=new ir([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(o,2));function c(u){let d=r.length/3,h=u.extractPoints(t),p=h.shape,m=h.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let _=m[g];Ci.isClockWise(_)===!0&&(m[g]=_.reverse())}let y=Ci.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let _=m[g];p=p.concat(_)}for(let g=0,f=p.length;g<f;g++){let _=p[g];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,f=y.length;g<f;g++){let _=y[g],v=_[0]+d,x=_[1]+d,A=_[2]+d;i.push(v,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return XI(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function XI(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var ac=class n extends $e{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new I,h=new I,p=[],m=[],y=[],g=[];for(let f=0;f<=i;f++){let _=[],v=f/i,x=0;f===0&&o===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let E=A/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(E+x,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let v=u[f][_+1],x=u[f][_],A=u[f+1][_],E=u[f+1][_+1];(f!==0||o>0)&&p.push(v,x,E),(f!==i-1||l<Math.PI)&&p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},jd=class n extends qr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Qd=class n extends $e{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new I,d=new I,h=new I;for(let p=0;p<=i;p++)for(let m=0;m<=r;m++){let y=m/r*s,g=p/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=r;m++){let y=(r+1)*p+m-1,g=(r+1)*(p-1)+m-1,f=(r+1)*(p-1)+m,_=(r+1)*p+m;o.push(y,g,_),o.push(g,f,_)}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ef=class n extends $e{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);let a=[],l=[],c=[],u=[],d=new I,h=new I,p=new I,m=new I,y=new I,g=new I,f=new I;for(let v=0;v<=i;++v){let x=v/i*s*Math.PI*2;_(x,s,o,e,p),_(x+.01,s,o,e,m),g.subVectors(m,p),f.addVectors(m,p),y.crossVectors(g,f),f.crossVectors(y,g),y.normalize(),f.normalize();for(let A=0;A<=r;++A){let E=A/r*Math.PI*2,b=-t*Math.cos(E),C=t*Math.sin(E);d.x=p.x+(b*f.x+C*y.x),d.y=p.y+(b*f.y+C*y.y),d.z=p.z+(b*f.z+C*y.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(v/i),u.push(A/r)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){let A=(r+1)*(v-1)+(x-1),E=(r+1)*v+(x-1),b=(r+1)*v+x,C=(r+1)*(v-1)+x;a.push(A,E,C),a.push(E,b,C)}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2));function _(v,x,A,E,b){let C=Math.cos(v),U=Math.sin(v),S=A/x*v,w=Math.cos(S);b.x=E*(2+w)*.5*C,b.y=E*(2+w)*U*.5,b.z=E*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},tf=class n extends $e{constructor(e=new ec(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new J,u=new I,d=[],h=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(p,2));function y(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),_(),f()}function g(v){u=e.getPointAt(v/t,u);let x=o.normals[v],A=o.binormals[v];for(let E=0;E<=r;E++){let b=E/r*Math.PI*2,C=Math.sin(b),U=-Math.cos(b);l.x=U*x.x+C*A.x,l.y=U*x.y+C*A.y,l.z=U*x.z+C*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let v=1;v<=t;v++)for(let x=1;x<=r;x++){let A=(r+1)*(v-1)+(x-1),E=(r+1)*v+(x-1),b=(r+1)*v+x,C=(r+1)*(v-1)+x;m.push(A,E,C),m.push(E,b,C)}}function _(){for(let v=0;v<=t;v++)for(let x=0;x<=r;x++)c.x=v/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Vd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},nf=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,s=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],h=d.start,p=d.count;for(let m=h,y=h+p;m<y;m+=3)for(let g=0;g<3;g++){let f=a.getX(m+g),_=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,_),KM(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),KM(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function KM(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var JM=Object.freeze({__proto__:null,BoxGeometry:ks,CapsuleGeometry:Gd,CircleGeometry:Wd,ConeGeometry:Xd,CylinderGeometry:la,DodecahedronGeometry:Yd,EdgesGeometry:qd,ExtrudeGeometry:$d,IcosahedronGeometry:Zd,LatheGeometry:nc,OctahedronGeometry:oc,PlaneGeometry:ia,PolyhedronGeometry:qr,RingGeometry:Kd,ShapeGeometry:Jd,SphereGeometry:ac,TetrahedronGeometry:jd,TorusGeometry:Qd,TorusKnotGeometry:ef,TubeGeometry:tf,WireframeGeometry:nf}),rf=class extends Wt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},sf=class extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lc=class extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},of=class extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},af=class extends Wt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},lf=class extends Wt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cf=class extends Wt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},uf=class extends Wt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hf=class extends Wt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},df=class extends Kt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Rs(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ww(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ew(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function O0(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function qv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}function YI(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let p=0;p<c.times.length;++p){let m=c.times[p]*r;if(!(m<t||m>=i)){d.push(c.times[p]);for(let y=0;y<u;++y)h.push(c.values[p*u+y])}}d.length!==0&&(c.times=Rs(d,c.times.constructor),c.values=Rs(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function qI(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=n.tracks.find(function(f){return f.name===a.name&&f.ValueTypeName===l});if(c===void 0)continue;let u=0,d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=p/3);let m=a.times.length-1,y;if(s<=a.times[0]){let f=u,_=d-u;y=a.values.slice(f,_)}else if(s>=a.times[m]){let f=m*d+u,_=f+d-u;y=a.values.slice(f,_)}else{let f=a.createInterpolant(),_=u,v=d-u;f.evaluate(s),y=f.resultBuffer.slice(_,v)}l==="quaternion"&&new on().fromArray(y).normalize().conjugate().toArray(y);let g=c.times.length;for(let f=0;f<g;++f){let _=f*p+h;if(l==="quaternion")on.multiplyQuaternionsFlat(c.values,_,y,0,c.values,_);else{let v=p-h*2;for(let x=0;x<v;++x)c.values[_+x]-=y[x]}}}return n.blendMode=Hv,n}var $I={convertArray:Rs,isTypedArray:ww,getKeyframeOrder:Ew,sortedArray:O0,flattenJSON:qv,subclip:YI,makeClipAdditive:qI},Hs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ff=class extends Hs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:As,endingEnd:As}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cs:s=e,a=2*t-i;break;case Nl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:o=e,l=2*i-t;break;case Nl:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),y=m*m,g=y*m,f=-h*g+2*h*y-h*m,_=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*m+1,v=(-1-p)*g+(1.5+p)*y+.5*m,x=p*g-p*y;for(let A=0;A!==a;++A)s[A]=f*o[u+A]+_*o[c+A]+v*o[l+A]+x*o[d+A];return s}},cc=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},pf=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ff(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dl:t=this.InterpolantFactoryMethodDiscrete;break;case _d:t=this.InterpolantFactoryMethodLinear;break;case Uh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return _d;case this.InterpolantFactoryMethodSmooth:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ww(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Uh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let m=0;m!==i;++m){let y=t[d+m];if(y!==t[h+m]||y!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=_d;var ar=class extends Vn{constructor(e,t,i){super(e,t,i)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Dl;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends Vn{};uc.prototype.ValueTypeName="color";var Gs=class extends Vn{};Gs.prototype.ValueTypeName="number";var mf=class extends Hs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ws=class extends Vn{InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends Vn{constructor(e,t,i){super(e,t,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Dl;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends Vn{};Xs.prototype.ValueTypeName="vector";var Ys=class{constructor(e="",t=-1,i=[],r=Of){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(KI(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Vn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=Ew(l);l=O0(l,1,u),c=O0(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let d=u[1],h=r[d];h||(r[d]=h=[]),h.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,p,m,y){if(p.length!==0){let g=[],f=[];qv(p,g,f,m),g.length!==0&&y.push(new d(h,g,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let y=0;y<h[m].morphTargets.length;y++)p[h[m].morphTargets[y]]=-1;for(let y in p){let g=[],f=[];for(let _=0;_!==h[m].morphTargets.length;++_){let v=h[m];g.push(v.time),f.push(v.morphTarget===y?1:0)}r.push(new Gs(".morphTargetInfluence["+y+"]",g,f))}l=p.length*o}else{let p=".bones["+t[d].name+"]";i(Xs,p+".position",h,"pos",r),i(Ws,p+".quaternion",h,"rot",r),i(Xs,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ZI(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return uc;case"quaternion":return Ws;case"bool":case"boolean":return ar;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function KI(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ZI(n.type);if(n.times===void 0){let t=[],i=[];qv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var er={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},hc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},bw=new hc,an=class{constructor(e){this.manager=e!==void 0?e:bw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},z0=class extends Error{constructor(e,t){super(e),this.response=t}},mi=class extends an{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:i,onError:r});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ki[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,m=p!==0,y=0,g=new ReadableStream({start(f){_();function _(){d.read().then(({done:v,value:x})=>{if(v)f.close();else{y+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:p});for(let E=0,b=u.length;E<b;E++){let C=u[E];C.onProgress&&C.onProgress(A)}f.enqueue(x),_()}},v=>{f.error(v)})}}});return new Response(g)}else throw new z0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{er.add(e,c);let u=Ki[e];delete Ki[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},B0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new mi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let t=[];for(let i=0;i<e.length;i++){let r=Ys.parse(e[i]);t.push(r)}return t}},V0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=[],a=new oa,l=new mi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(d){l.load(e[d],function(h){let p=s.parse(h,!0);o[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=Lt),a.image=o,a.format=p.format,a.needsUpdate=!0,t&&t(a))},i,r)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){let h=s.parse(d,!0);if(h.isCubemap){let p=h.mipmaps.length/h.mipmapCount;for(let m=0;m<p;m++){o[m]={mipmaps:[]};for(let y=0;y<h.mipmapCount;y++)o[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+y]),o[m].format=h.format,o[m].width=h.width,o[m].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=Lt),a.format=h.format,a.needsUpdate=!0,t&&t(a)},i,r);return a}},qs=class extends an{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=er.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Bl("img");function l(){u(),er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},H0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=new Fs;s.colorSpace=Jn;let o=new qs(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}},G0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Qn,a=new mi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:jn,o.wrapT=c.wrapT!==void 0?c.wrapT:jn,o.magFilter=c.magFilter!==void 0?c.magFilter:Lt,o.minFilter=c.minFilter!==void 0?c.minFilter:Lt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ti),c.mipmapCount===1&&(o.minFilter=Lt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,r),o}},W0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=new Dt,o=new qs(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Li=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},gf=class extends Li{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},e0=new Ue,jM=new I,QM=new I,dc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;jM.setFromMatrixPosition(e.matrixWorld),t.position.copy(jM),QM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(QM),t.updateMatrixWorld(),e0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(e0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},X0=class extends dc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vf=class extends Li{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new X0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},e1=new Ue,gl=new I,t0=new I,Y0=class extends dc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),gl.setFromMatrixPosition(e.matrixWorld),i.position.copy(gl),t0.copy(i.position),t0.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(t0),i.updateMatrixWorld(),r.makeTranslation(-gl.x,-gl.y,-gl.z),e1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e1)}},_f=class extends Li{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},q0=class extends dc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yf=class extends Li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xf=class extends Li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Sf=class extends Li{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Mf=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}},wf=class extends Li{constructor(e=new Mf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Ef=class n extends an{constructor(e){super(e),this.textures={}}load(e,t,i,r){let s=this,o=new mi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=i(o.value);break;case"c":r.uniforms[s].value=new ve().setHex(o.value);break;case"v2":r.uniforms[s].value=new J().fromArray(o.value);break;case"v3":r.uniforms[s].value=new I().fromArray(o.value);break;case"v4":r.uniforms[s].value=new Qe().fromArray(o.value);break;case"m3":r.uniforms[s].value=new He().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Ue().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return n.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:rf,SpriteMaterial:$l,RawShaderMaterial:sf,ShaderMaterial:zn,PointsMaterial:Kl,MeshPhysicalMaterial:of,MeshStandardMaterial:lc,MeshPhongMaterial:af,MeshToonMaterial:lf,MeshNormalMaterial:cf,MeshLambertMaterial:uf,MeshDepthMaterial:Yl,MeshDistanceMaterial:ql,MeshBasicMaterial:Pi,MeshMatcapMaterial:hf,LineDashedMaterial:df,LineBasicMaterial:Kt,Material:Wt};return new t[e]}},fc=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bf=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Tf=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new mi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let t={},i={};function r(p,m){if(t[m]!==void 0)return t[m];let g=p.interleavedBuffers[m],f=s(p,g.buffer),_=Yo(g.type,f),v=new sa(_,g.stride);return v.uuid=g.uuid,t[m]=v,v}function s(p,m){if(i[m]!==void 0)return i[m];let g=p.arrayBuffers[m],f=new Uint32Array(g).buffer;return i[m]=f,f}let o=e.isInstancedBufferGeometry?new bf:new $e,a=e.data.index;if(a!==void 0){let p=Yo(a.type,a.array);o.setIndex(new st(p,1))}let l=e.data.attributes;for(let p in l){let m=l[p],y;if(m.isInterleavedBufferAttribute){let g=r(e.data,m.data);y=new zs(g,m.itemSize,m.offset,m.normalized)}else{let g=Yo(m.type,m.array),f=m.isInstancedBufferAttribute?Yr:st;y=new f(g,m.itemSize,m.normalized)}m.name!==void 0&&(y.name=m.name),m.usage!==void 0&&y.setUsage(m.usage),o.setAttribute(p,y)}let c=e.data.morphAttributes;if(c)for(let p in c){let m=c[p],y=[];for(let g=0,f=m.length;g<f;g++){let _=m[g],v;if(_.isInterleavedBufferAttribute){let x=r(e.data,_.data);v=new zs(x,_.itemSize,_.offset,_.normalized)}else{let x=Yo(_.type,_.array);v=new st(x,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),y.push(v)}o.morphAttributes[p]=y}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let p=0,m=d.length;p!==m;++p){let y=d[p];o.addGroup(y.start,y.count,y.materialIndex)}let h=e.data.boundingSphere;if(h!==void 0){let p=new I;h.center!==void 0&&p.fromArray(h.center),o.boundingSphere=new Gt(p,h.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},$0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=this.path===""?fc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new mi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},i,r)}async loadAsync(e,t){let i=this,r=this.path===""?fc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;let s=new mi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let o=await s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(a)}parse(e,t){let i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,i),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),t!==void 0){let d=!1;for(let h in o)if(o[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){let t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){let s=new ir().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){let i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=new Pd().fromJSON(e[s],r);i[a.uuid]=a}return i}parseGeometries(e,t){let i={};if(e!==void 0){let r=new Tf;for(let s=0,o=e.length;s<o;s++){let a,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(l);break;default:l.type in JM?a=JM[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),i[l.uuid]=a}}return i}parseMaterials(e,t){let i={},r={};if(e!==void 0){let s=new Ef;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){let t={};if(e!==void 0)for(let i=0;i<e.length;i++){let r=e[i],s=Ys.parse(r);t[s.uuid]=s}return t}parseImages(e,t){let i=this,r={},s;function o(l){return i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return o(u)}else return l.data?{data:Yo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new hc(t);s=new qs(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let d=e[c],h=d.url;if(Array.isArray(h)){let p=[];for(let m=0,y=h.length;m<y;m++){let g=h[m],f=a(g);f!==null&&(f instanceof HTMLImageElement?p.push(f):p.push(new Qn(f.data,f.width,f.height)))}r[d.uuid]=new Qi(p)}else{let p=a(d.url);r[d.uuid]=new Qi(p)}}}return r}async parseImagesAsync(e){let t=this,i={},r;async function s(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await r.loadAsync(l)}else return o.data?{data:Yo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new qs(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d],m=await s(p);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Qn(m.data,m.width,m.height)))}i[l.uuid]=new Qi(u)}else{let u=await s(l.url);i[l.uuid]=new Qi(u)}}}return i}parseTextures(e,t){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}let r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,u;Array.isArray(c)?(u=new Fs,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Qn:u=new Dt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=i(a.mapping,JI)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=i(a.wrap[0],t1),u.wrapT=i(a.wrap[1],t1)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=i(a.minFilter,n1)),a.magFilter!==void 0&&(u.magFilter=i(a.magFilter,n1)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),r[a.uuid]=u}return r}parseObject(e,t,i,r,s){let o;function a(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){let p=[];for(let m=0,y=h.length;m<y;m++){let g=h[m];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),p.push(i[g])}return p}return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),i[h]}}function c(h){return r[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),r[h]}let u,d;switch(e.type){case"Scene":o=new Td,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ve(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new bd(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Ed(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new ra(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new xf(e.color,e.intensity);break;case"DirectionalLight":o=new yf(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new _f(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Sf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new vf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new gf(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new wf().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),d=l(e.material),o=new Rd(u,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),d=l(e.material),o=new bt(u,d);break;case"InstancedMesh":u=a(e.geometry),d=l(e.material);let h=e.count,p=e.instanceMatrix,m=e.instanceColor;o=new Id(u,d,h),o.instanceMatrix=new Yr(new Float32Array(p.array),16),m!==void 0&&(o.instanceColor=new Yr(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(e.geometry),d=l(e.material),o=new Ld(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(y=>{let g=new Zt;g.min.fromArray(y.boxMin),g.max.fromArray(y.boxMax);let f=new Gt;return f.radius=y.sphereRadius,f.center.fromArray(y.sphereCenter),{boxInitialized:y.boxInitialized,box:g,sphereInitialized:y.sphereInitialized,sphere:f}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":o=new Cd;break;case"Line":o=new Ii(a(e.geometry),l(e.material));break;case"LineLoop":o=new Ud(a(e.geometry),l(e.material));break;case"LineSegments":o=new ti(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new kd(a(e.geometry),l(e.material));break;case"Sprite":o=new Ad(l(e.material));break;case"Group":o=new Gr;break;case"Bone":o=new Zl;break;default:o=new nt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let h=e.children;for(let p=0;p<h.length;p++)o.add(this.parseObject(h[p],t,i,r,s))}if(e.animations!==void 0){let h=e.animations;for(let p=0;p<h.length;p++){let m=h[p];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let h=e.levels;for(let p=0;p<h.length;p++){let m=h[p],y=o.getObjectByProperty("uuid",m.object);y!==void 0&&o.addLevel(y,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){let r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new nt}})}},JI={UVMapping:If,CubeReflectionMapping:sr,CubeRefractionMapping:Wr,EquirectangularReflectionMapping:Rl,EquirectangularRefractionMapping:Pl,CubeUVReflectionMapping:ca},t1={RepeatWrapping:Il,ClampToEdgeWrapping:jn,MirroredRepeatWrapping:Ll},n1={NearestFilter:Ht,NearestMipmapNearestFilter:Lv,NearestMipmapLinearFilter:Xo,LinearFilter:Lt,LinearMipmapNearestFilter:yl,LinearMipmapLinearFilter:Ti},Z0=class extends an{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=er.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return er.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),er.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});er.add(e,l),s.manager.itemStart(e)}},Ch,pc=class{static getContext(){return Ch===void 0&&(Ch=new(window.AudioContext||window.webkitAudioContext)),Ch}static setContext(e){Ch=e}},K0=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new mi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);pc.getContext().decodeAudioData(c,function(d){t(d)}).catch(a)}catch(c){a(c)}},i,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}},i1=new Ue,r1=new Ue,ys=new Ue,J0=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ys.copy(e.projectionMatrix);let r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(Ls*t.fov*.5)/t.zoom,a,l;r1.elements[12]=-r,i1.elements[12]=r,a=-o*t.aspect+s,l=o*t.aspect+s,ys.elements[0]=2*t.near/(l-a),ys.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(ys),a=-o*t.aspect-s,l=o*t.aspect-s,ys.elements[0]=2*t.near/(l-a),ys.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(ys)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(r1),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(i1)}},Af=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=s1();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function s1(){return performance.now()}var xs=new I,o1=new on,jI=new I,Ss=new I,j0=class extends nt{constructor(){super(),this.type="AudioListener",this.context=pc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Af}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xs,o1,jI),Ss.set(0,0,-1).applyQuaternion(o1),t.positionX){let r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(xs.x,r),t.positionY.linearRampToValueAtTime(xs.y,r),t.positionZ.linearRampToValueAtTime(xs.z,r),t.forwardX.linearRampToValueAtTime(Ss.x,r),t.forwardY.linearRampToValueAtTime(Ss.y,r),t.forwardZ.linearRampToValueAtTime(Ss.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(xs.x,xs.y,xs.z),t.setOrientation(Ss.x,Ss.y,Ss.z,i.x,i.y,i.z)}},Cf=class extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Ms=new I,a1=new on,QI=new I,ws=new I,Q0=class extends Cf{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ms,a1,QI),ws.set(0,0,1).applyQuaternion(a1);let t=this.panner;if(t.positionX){let i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ms.x,i),t.positionY.linearRampToValueAtTime(Ms.y,i),t.positionZ.linearRampToValueAtTime(Ms.z,i),t.orientationX.linearRampToValueAtTime(ws.x,i),t.orientationY.linearRampToValueAtTime(ws.y,i),t.orientationZ.linearRampToValueAtTime(ws.z,i)}else t.setPosition(Ms.x,Ms.y,Ms.z),t.setOrientation(ws.x,ws.y,ws.z)}},ev=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Rf=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){on.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;on.multiplyQuaternionsFlat(e,o,e,t,e,i),on.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},$v="\\[\\]\\.:\\/",e3=new RegExp("["+$v+"]","g"),Zv="[^"+$v+"]",t3="[^"+$v.replace("\\.","")+"]",n3=/((?:WC+[\/:])*)/.source.replace("WC",Zv),i3=/(WCOD+)?/.source.replace("WCOD",t3),r3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zv),s3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zv),o3=new RegExp("^"+n3+i3+r3+s3+"$"),a3=["material","materials","bones","map"],tv=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e3,"")}static parseTrackName(e){let t=o3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);a3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=tv;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nv=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=kn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){let h=arguments[u],p=h.uuid,m=t[p];if(m===void 0){m=l++,t[p]=m,e.push(h);for(let y=0,g=o;y!==g;++y)s[y].push(new lt(h,i[y],r[y]))}else if(m<c){a=e[m];let y=--c,g=e[y];t[g.uuid]=m,e[m]=g,t[p]=y,e[y]=h;for(let f=0,_=o;f!==_;++f){let v=s[f],x=v[y],A=v[m];v[m]=x,A===void 0&&(A=new lt(h,i[f],r[f])),v[y]=A}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){let d=s++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let p=0,m=r;p!==m;++p){let y=i[p],g=y[d],f=y[u];y[u]=g,y[d]=f}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<s){let h=--s,p=e[h],m=--o,y=e[m];t[p.uuid]=d,e[d]=p,t[y.uuid]=h,e[h]=y,e.pop();for(let g=0,f=r;g!==f;++g){let _=i[g],v=_[h],x=_[m];_[d]=v,_[h]=x,_.pop()}}else{let h=--o,p=e[h];h>0&&(t[p.uuid]=d),e[d]=p,e.pop();for(let m=0,y=r;m!==y;++m){let g=i[m];g[d]=g[h],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(d);for(let h=u,p=l.length;h!==p;++h){let m=l[h];d[h]=new lt(m,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=i,o[i]=l,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}},Pf=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:As,endingEnd:As};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=K1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hv:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Of:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===J1;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Z1){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Cs,r.endingEnd=Cs):(e?r.endingStart=this.zeroSlopeAtStart?Cs:As:r.endingStart=Nl,t?r.endingEnd=this.zeroSlopeAtEnd?Cs:As:r.endingEnd=Nl)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}},l3=new Float32Array(1),iv=class extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){let h=r[d],p=h.name,m=u[p];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let y=t&&t._propertyBindings[d].binding.parsedPath;m=new Rf(lt.create(i,p,y),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new cc(new Float32Array(2),new Float32Array(2),1,l3),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Ys.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Of),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Pf(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?Ys.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},rv=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},c3=0,sv=class extends ei{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:c3++}),this.name="",this.usage=Ol,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){let s=Array.isArray(t[i])?t[i]:[t[i]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}},ov=class extends sa{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},av=class{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},l1=new Ue,lv=class{constructor(e,t,i=0,r=1/0){this.ray=new Xr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return l1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l1),this}intersectObject(e,t=!0,i=[]){return cv(e,this,i,t),i.sort(c1),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cv(e[r],this,i,t);return i.sort(c1),i}};function c1(n,e){return n.distance-e.distance}function cv(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)cv(s[o],e,t,!0)}}var uv=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},hv=class{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},dv=class n{constructor(e,t,i,r){n.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}},u1=new J,fv=class{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=u1.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,u1).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},h1=new I,Rh=new I,pv=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){h1.subVectors(e,this.start),Rh.subVectors(this.end,this.start);let i=Rh.dot(Rh),s=Rh.dot(h1)/i;return t&&(s=Et(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},d1=new I,mv=class extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new $e,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new Te(r,3));let s=new Kt({fog:!1,toneMapped:!1});this.cone=new ti(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),d1.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(d1),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Vr=new I,Ph=new Ue,n0=new Ue,gv=class extends ti{constructor(e){let t=Tw(e),i=new $e,r=[],s=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Te(r,3)),i.setAttribute("color",new Te(s,3));let l=new Kt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");n0.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Ph.multiplyMatrices(n0,a.matrixWorld),Vr.setFromMatrixPosition(Ph),r.setXYZ(o,Vr.x,Vr.y,Vr.z),Ph.multiplyMatrices(n0,a.parent.matrixWorld),Vr.setFromMatrixPosition(Ph),r.setXYZ(o+1,Vr.x,Vr.y,Vr.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Tw(n){let e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Tw(n.children[t]));return e}var vv=class extends bt{constructor(e,t,i){let r=new ac(t,4,2),s=new Pi({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},u3=new I,f1=new ve,p1=new ve,_v=class extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let r=new oc(t);r.rotateY(Math.PI*.5),this.material=new Pi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new st(o,3)),this.add(new bt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");f1.copy(this.light.color),p1.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){let s=i<r/2?f1:p1;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(u3.setFromMatrixPosition(this.light.matrixWorld).negate())}},yv=class extends ti{constructor(e=10,t=10,i=4473924,r=8947848){i=new ve(i),r=new ve(r);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}let u=new $e;u.setAttribute("position",new Te(l,3)),u.setAttribute("color",new Te(c,3));let d=new Kt({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},xv=class extends ti{constructor(e=10,t=16,i=8,r=64,s=4473924,o=8947848){s=new ve(s),o=new ve(o);let a=[],l=[];if(t>1)for(let d=0;d<t;d++){let h=d/t*(Math.PI*2),p=Math.sin(h)*e,m=Math.cos(h)*e;a.push(0,0,0),a.push(p,0,m);let y=d&1?s:o;l.push(y.r,y.g,y.b),l.push(y.r,y.g,y.b)}for(let d=0;d<i;d++){let h=d&1?s:o,p=e-e/i*d;for(let m=0;m<r;m++){let y=m/r*(Math.PI*2),g=Math.sin(y)*p,f=Math.cos(y)*p;a.push(g,0,f),l.push(h.r,h.g,h.b),y=(m+1)/r*(Math.PI*2),g=Math.sin(y)*p,f=Math.cos(y)*p,a.push(g,0,f),l.push(h.r,h.g,h.b)}}let c=new $e;c.setAttribute("position",new Te(a,3)),c.setAttribute("color",new Te(l,3));let u=new Kt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},m1=new I,Ih=new I,g1=new I,Sv=class extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new $e;r.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new Kt({fog:!1,toneMapped:!1});this.lightPlane=new Ii(r,s),this.add(this.lightPlane),r=new $e,r.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new Ii(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),m1.setFromMatrixPosition(this.light.matrixWorld),Ih.setFromMatrixPosition(this.light.target.matrixWorld),g1.subVectors(Ih,m1),this.lightPlane.lookAt(Ih),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ih),this.targetLine.scale.z=g1.length()}},Lh=new I,wt=new na,Mv=class extends ti{constructor(e){let t=new $e,i=new Kt({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,y){l(m),l(y)}function l(m){r.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(r.length/3-1)}t.setAttribute("position",new Te(r,3)),t.setAttribute("color",new Te(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new ve(16755200),u=new ve(16711680),d=new ve(43775),h=new ve(16777215),p=new ve(3355443);this.setColors(c,u,d,h,p)}setColors(e,t,i,r,s){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,i.r,i.g,i.b),a.setXYZ(33,i.r,i.g,i.b),a.setXYZ(34,i.r,i.g,i.b),a.setXYZ(35,i.r,i.g,i.b),a.setXYZ(36,i.r,i.g,i.b),a.setXYZ(37,i.r,i.g,i.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,i=1,r=1;wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ct("c",t,e,wt,0,0,-1),Ct("t",t,e,wt,0,0,1),Ct("n1",t,e,wt,-i,-r,-1),Ct("n2",t,e,wt,i,-r,-1),Ct("n3",t,e,wt,-i,r,-1),Ct("n4",t,e,wt,i,r,-1),Ct("f1",t,e,wt,-i,-r,1),Ct("f2",t,e,wt,i,-r,1),Ct("f3",t,e,wt,-i,r,1),Ct("f4",t,e,wt,i,r,1),Ct("u1",t,e,wt,i*.7,r*1.1,-1),Ct("u2",t,e,wt,-i*.7,r*1.1,-1),Ct("u3",t,e,wt,0,r*2,-1),Ct("cf1",t,e,wt,-i,0,1),Ct("cf2",t,e,wt,i,0,1),Ct("cf3",t,e,wt,0,-r,1),Ct("cf4",t,e,wt,0,r,1),Ct("cn1",t,e,wt,-i,0,-1),Ct("cn2",t,e,wt,i,0,-1),Ct("cn3",t,e,wt,0,-r,-1),Ct("cn4",t,e,wt,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ct(n,e,t,i,r,s,o){Lh.set(r,s,o).unproject(i);let a=e[n];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Lh.x,Lh.y,Lh.z)}}var Dh=new Zt,wv=class extends ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),s=new $e;s.setIndex(new st(i,1)),s.setAttribute("position",new st(r,3)),super(s,new Kt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Dh.setFromObject(this.object),Dh.isEmpty())return;let t=Dh.min,i=Dh.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Ev=class extends ti{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new $e;s.setIndex(new st(i,1)),s.setAttribute("position",new Te(r,3)),super(s,new Kt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},bv=class extends Ii{constructor(e,t=1,i=16776960){let r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new $e;o.setAttribute("position",new Te(s,3)),o.computeBoundingSphere(),super(o,new Kt({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $e;l.setAttribute("position",new Te(a,3)),l.computeBoundingSphere(),this.add(new bt(l,new Pi({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},v1=new I,Nh,i0,Tv=class extends nt{constructor(e=new I(0,0,1),t=new I(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Nh===void 0&&(Nh=new $e,Nh.setAttribute("position",new Te([0,0,0,0,1,0],3)),i0=new la(0,.5,1,5,1),i0.translate(0,-.5,0)),this.position.copy(t),this.line=new Ii(Nh,new Kt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new bt(i0,new Pi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{v1.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(v1,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Av=class extends ti{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new $e;r.setAttribute("position",new Te(t,3)),r.setAttribute("color",new Te(i,3));let s=new Kt({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){let r=new ve,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Cv=class{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Bs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){let _=[];for(let v=0,x=f.length;v<x;v++){let A=f[v],E=new ir;E.curves=A.curves,_.push(E)}return _}function i(f,_){let v=_.length,x=!1;for(let A=v-1,E=0;E<v;A=E++){let b=_[A],C=_[E],U=C.x-b.x,S=C.y-b.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(b=_[E],U=-U,C=_[A],S=-S),f.y<b.y||f.y>C.y)continue;if(f.y===b.y){if(f.x===b.x)return!0}else{let w=S*(f.x-b.x)-U*(f.y-b.y);if(w===0)return!0;if(w<0)continue;x=!x}}else{if(f.y!==b.y)continue;if(C.x<=f.x&&f.x<=b.x||b.x<=f.x&&f.x<=C.x)return!0}}return x}let r=Ci.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l,c=[];if(s.length===1)return a=s[0],l=new ir,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;let d=[],h=[],p=[],m=0,y;h[m]=void 0,p[m]=[];for(let f=0,_=s.length;f<_;f++)a=s[f],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!u&&h[m]&&m++,h[m]={s:new ir,p:y},h[m].s.curves=a.curves,u&&m++,p[m]=[]):p[m].push({h:a,p:y[0]});if(!h[0])return t(s);if(h.length>1){let f=!1,_=0;for(let v=0,x=h.length;v<x;v++)d[v]=[];for(let v=0,x=h.length;v<x;v++){let A=p[v];for(let E=0;E<A.length;E++){let b=A[E],C=!0;for(let U=0;U<h.length;U++)i(b.p,h[U].p)&&(v!==U&&_++,C?(C=!1,d[U].push(b)):f=!0);C&&d[v].push(b)}}_>0&&f===!1&&(p=d)}let g;for(let f=0,_=h.length;f<_;f++){l=h[f].s,c.push(l),g=p[f];for(let v=0,x=g.length;v<x;v++)l.holes.push(g[v].h)}return c}},Rv=class extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},Pv=class extends Fn{constructor(e=1,t=1,i=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var ur=Zs(_c()),v3=`
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
`;function _3(n){(0,hr.useEffect)(()=>{let e=n.current;if(!e)return;let t=Array.from(e.querySelectorAll("[data-reveal]"));if(!("IntersectionObserver"in window)){t.forEach(r=>r.classList.add("in"));return}let i=new IntersectionObserver(r=>r.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),i.unobserve(s.target))}),{threshold:0,rootMargin:"0px 0px -8% 0px"});return t.forEach(r=>i.observe(r)),()=>i.disconnect()},[])}var Jv=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Gf=(n,e,t)=>{let i=Jv((t-n)/(e-n));return i*i*(3-2*i)},Wf=[{p:0,pos:[0,19,34],look:[0,0,0]},{p:.22,pos:[23,9,19],look:[0,1,0]},{p:.46,pos:[6,7,24],look:[-2,2,-4]},{p:.72,pos:[-21,12,12],look:[0,0,0]},{p:1,pos:[0,42,.01],look:[0,0,0]}];function y3({prefix:n,opacity:e=.55,intensity:t=1}){let i=(0,hr.useRef)(null),r=(0,hr.useRef)(null);(0,hr.useEffect)(()=>{let o=i.current,a=r.current;if(!o||!a||!o.parentElement)return;let l=o.parentElement,c=!1,u=()=>{},d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return(async()=>{let h=Kv;if(!h||!h.WebGLRenderer){o.classList.add("is-fallback");return}if(c)return;let p;try{p=new h.WebGLRenderer({canvas:a,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{o.classList.add("is-fallback");return}let m=window.innerWidth<720;p.setPixelRatio(Math.min(window.devicePixelRatio||1,m?1.5:1.75)),p.setClearColor(0,0);let y=new h.Scene,g=new h.PerspectiveCamera(50,1,.1,200),f=64,_=m?80:130,v=new h.PlaneGeometry(f,f,_,_);v.rotateX(-Math.PI/2);let x=v.attributes.position,A=x.count,E=new Float32Array(A),b=new Float32Array(A);for(let W=0;W<A;W++)E[W]=x.getX(W),b[W]=x.getZ(W);let C=new Float32Array(A*3);v.setAttribute("color",new h.BufferAttribute(C,3));let U=new h.PointsMaterial({size:m?.15:.11,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1});y.add(new h.Points(v,U));let S=(W,H,se,ee)=>ee*(1.3*Math.sin(W*.16+se*.35)*Math.cos(H*.14-se*.25)+.55*Math.sin((W-H)*.3+se*.5)+.25*Math.cos(Math.hypot(W,H)*.45-se*.8)),w=9,O=new h.MeshBasicMaterial({transparent:!0,opacity:.8}),z=new h.SphereGeometry(.18,14,14),V=[],K=[];for(let W=0;W<w;W++){let H=W/w*Math.PI*2,se=9+W%3*3.2;K.push({x:Math.cos(H)*se,z:Math.sin(H)*se,y:2.4+W%2*1.4,ph:W*1.7});let ee=new h.Mesh(z,O);V.push(ee),y.add(ee)}let F=new h.Mesh(new h.SphereGeometry(.38,20,20),O);y.add(F);let ie=new Float32Array(w*2*2*3),X=new h.BufferGeometry;X.setAttribute("position",new h.BufferAttribute(ie,3));let me=new h.LineBasicMaterial({transparent:!0,opacity:.45});y.add(new h.LineSegments(X,me));let ge=new h.LineBasicMaterial({transparent:!0,opacity:.4}),_e=W=>{let H=[];for(let se=0;se<128;se++){let ee=se/128*Math.PI*2;H.push(new h.Vector3(Math.cos(ee)*W,0,Math.sin(ee)*W))}return new h.BufferGeometry().setFromPoints(H)},We=new h.LineLoop(_e(3.2),ge),Ze=new h.LineLoop(_e(4.6),ge);y.add(We,Ze);let q=()=>{let W=getComputedStyle(l),H=(Q,pe)=>new h.Color((W.getPropertyValue(n+Q)||pe).trim()||pe),se=H("mint","#0FAE7B"),ee=H("violet","#B62AA6"),oe=H("amber","#C77417"),Ve=new h.Color;for(let Q=0;Q<A;Q++){let pe=Jv((E[Q]+b[Q]*.45)/(f*.95)+.5);pe<.5?Ve.copy(se).lerp(ee,pe*2):Ve.copy(ee).lerp(oe,(pe-.5)*2),C[Q*3]=Ve.r,C[Q*3+1]=Ve.g,C[Q*3+2]=Ve.b}v.attributes.color.needsUpdate=!0,O.color.copy(se),me.color.copy(ee),ge.color.copy(oe),Z=!0},re=()=>{let W=o.clientWidth||window.innerWidth,H=o.clientHeight||window.innerHeight;p.setSize(W,H,!1),g.aspect=W/H,g.fov=W<720?62:50,g.updateProjectionMatrix(),Z=!0},Ee=()=>{let W=l.getBoundingClientRect(),H=W.height-window.innerHeight;return H>0?Jv(-W.top/H):0},he=0,Ne=0,De=0,ke=0,Xe=W=>{he=W.clientX/window.innerWidth-.5,Ne=W.clientY/window.innerHeight-.5},Z=!0,P=Ee(),le=0,ce=performance.now(),te=new h.Vector3,ue=new h.Vector3,Pe=W=>{let H=0;for(;H<Wf.length-2&&W>Wf[H+1].p;)H++;let se=Wf[H],ee=Wf[H+1],oe=Gf(0,1,(W-se.p)/(ee.p-se.p));te.set(se.pos[0]+(ee.pos[0]-se.pos[0])*oe+De*4,se.pos[1]+(ee.pos[1]-se.pos[1])*oe-ke*2.5,se.pos[2]+(ee.pos[2]-se.pos[2])*oe),ue.set(se.look[0]+(ee.look[0]-se.look[0])*oe,se.look[1]+(ee.look[1]-se.look[1])*oe,se.look[2]+(ee.look[2]-se.look[2])*oe),g.position.copy(te),g.lookAt(ue)},ye=!0,R=W=>{if(le=requestAnimationFrame(R),document.hidden)return;let H=l.getBoundingClientRect();if(H.bottom<0||H.top>window.innerHeight)return;let se=Ee(),ee=Math.abs(se-P)>1e-4||Math.abs(he-De)>.001||Math.abs(Ne-ke)>.001;if(d&&!ee&&!Z)return;P+=(se-P)*(d?1:.07),De+=(he-De)*.05,ke+=(Ne-ke)*.05;let oe=d?0:(W-ce)/1e3,Ve=(1.6-1.48*Gf(.6,.9,P))*t;for(let Ae=0;Ae<A;Ae++)x.setY(Ae,S(E[Ae],b[Ae],oe,Ve));x.needsUpdate=!0;let Q=2.5*Gf(.12,.45,P)-1.5*Gf(.75,1,P),pe=4+Q;F.position.set(0,pe+Math.sin(oe*.9)*.25,0),We.position.copy(F.position),Ze.position.copy(F.position),We.rotation.set(.5+oe*.2,oe*.3,0),Ze.rotation.set(-.4,-oe*.22,.6+oe*.15);let Fe=0;for(let Ae=0;Ae<w;Ae++){let de=K[Ae],qe=S(de.x,de.z,oe,Ve)+de.y+Q+Math.sin(oe*1.1+de.ph)*.3;V[Ae].position.set(de.x,qe,de.z)}for(let Ae=0;Ae<w;Ae++){let de=V[Ae].position,qe=V[(Ae+1)%w].position,ze=F.position;ie.set([de.x,de.y,de.z,qe.x,qe.y,qe.z,de.x,de.y,de.z,ze.x,ze.y,ze.z],Fe),Fe+=12}X.attributes.position.needsUpdate=!0,Pe(P),p.render(y,g),Z=!1,ye&&(ye=!1,o.classList.add("ready"))},M=new ResizeObserver(re);M.observe(o);let k=window.matchMedia("(prefers-color-scheme: dark)");k.addEventListener("change",q);let $=new MutationObserver(q);$.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]}),d||window.addEventListener("pointermove",Xe,{passive:!0}),re(),q(),le=requestAnimationFrame(R),u=()=>{cancelAnimationFrame(le),M.disconnect(),$.disconnect(),k.removeEventListener("change",q),window.removeEventListener("pointermove",Xe),v.dispose(),U.dispose(),z.dispose(),F.geometry.dispose(),O.dispose(),X.dispose(),me.dispose(),We.geometry.dispose(),Ze.geometry.dispose(),ge.dispose(),p.dispose()},c&&u()})(),()=>{c=!0,u()}},[n,t]);let s={"--ap3d-bg":`var(${n}bg)`,"--ap3d-mint":`var(${n}mint)`,"--ap3d-violet":`var(${n}violet)`,"--ap3d-opacity":e};return(0,ur.jsxs)("div",{ref:i,className:"ap3d-stage",style:s,"aria-hidden":"true",children:[(0,ur.jsx)("canvas",{ref:r}),(0,ur.jsx)("div",{className:"ap3d-veil"})]})}function x3(){(0,hr.useEffect)(()=>{let n="apollo-deck-fonts";if(!document.getElementById(n)){let e=document.createElement("link");e.id=n,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap",document.head.appendChild(e)}},[])}function S3(n){(0,hr.useEffect)(()=>{let e=n.current;if(!e)return;let t=i=>{let r=i.target.closest("[data-embed-src]");if(!r)return;let s=document.createElement("iframe");s.src=r.getAttribute("data-embed-src")||"",s.title=r.getAttribute("data-embed-title")||"Embedded demo",s.className="embed-frame",s.allow="fullscreen; accelerometer; gyroscope",r.replaceWith(s)};return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[])}var M3=`
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
  .apollo-deck .shot img{display:block; width:100%; height:auto; aspect-ratio:16/10; background:#e3e8e6;}
  .apollo-deck .shot--dark img{background:#1a2023;}
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
  .apollo-deck .price-includes li::before{content:"\u2014"; position:absolute; left:0; color:var(--apollo-text-faint);}
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
`,w3=[{name:"Autodesk",sub:"Civil 3D"},{name:"AutoCAD"},{name:"Bluebeam",sub:"Revu"},{name:"HydroCAD"},{name:"Esri",sub:"ArcGIS"},{name:"Bentley",sub:"OpenRoads"},{name:"Carlson",sub:"Civil"},{name:"Trimble",sub:"Business Center"}],Xf=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Pw=n=>`<div class="stack-set"${n?' aria-hidden="true"':""}>`+w3.map(e=>e.logo?`<div class="stack-item"><img src="${Xf(e.logo)}" alt="${n?"":Xf(e.name+(e.sub?" "+e.sub:""))}" loading="lazy"></div>`:`<div class="stack-item">${Xf(e.name)}${e.sub?`<small>${Xf(e.sub)}</small>`:""}</div>`).join("")+"</div>",E3=`
    <div class="stack">
      <div class="stack-label">Works alongside the software you already run</div>
      <div class="stack-viewport"><div class="stack-track">${Pw(!1)}${Pw(!0)}</div></div>
    </div>`,Zr="https://rchase-sudo.github.io/apollo-site/assets",b3=n=>n.replace(/<img src="([^"]+)\.jpg"/g,(e,t)=>{let r=/pm-dashboard|redline-workspace/.test(t)?"(max-width:820px) 100vw, 1100px":"(max-width:820px) 100vw, 560px";return`<img src="${t}-1400.webp" srcset="${t}-800.webp 800w, ${t}-1400.webp 1400w" sizes="${r}" width="1400" height="875" decoding="async"`}),T3=`${Zr}/pm-dashboard.jpg`,A3=`${Zr}/pm-schedule.jpg`,C3=`${Zr}/pm-tasks.jpg`,R3=`${Zr}/redline-workspace.jpg`,P3=`${Zr}/redline-ai-takeoff.jpg`,I3=`${Zr}/redline-ai-set-review.jpg`,L3=`${Zr}/redline-live-session.jpg`,D3=`${Zr}/redline-snap-measure.jpg`,N3=`
  <div class="wrap cover">
    <div class="cover-top">
      <div class="mark" aria-hidden="true"></div>
      <div>
        <div class="cover-brand">Apollo Development</div>
        <div class="cover-tag">Software for Civil Engineers</div>
      </div>
    </div>
    <div>
      <div class="eyebrow"><b>Civil &amp; site engineering</b> \xB7 Drafted \xB7 Proposals \xB7 Drainage \xB7 Redline \xB7 PM</div>
      <h1 class="cover-head">The tools civil engineers <em>should have had</em> years ago.</h1>
    </div>
    <p class="cover-sub">Apollo builds software for land development firms. It produces concept plans from an address and proposals in your firm's own style from one prompt. It runs drainage analysis that lays out subcatchments and shows where the design falls short. Redline handles plan markup with AI built in, and PM Dashboard runs your projects, budgets and people in one place. The tools fit around Civil 3D and HydroCAD, so you keep the software that works.</p>
    ${E3}
    <div class="cover-meta"><span class="dot"></span>apollodevelopment.io &nbsp;\xB7&nbsp; rchase@apollodevelopment.io</div>
    <div class="scroll-hint">Scroll</div>
  </div>
  <div class="grad-rule"></div>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">01 \u2014 The Problem</div>
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
      <div class="eyebrow">02 \u2014 The Approach</div>
      <h2 class="headline">Automate the setup. Keep the engineer in charge.</h2>
      <div class="thesis-block">
        <p>Apollo tools do the repetitive first 80%: the layout, the draft, the delineation, the first-pass model. Your engineers review, adjust, and sign off. Nothing leaves the office without professional judgment on it.</p>
        <p>And because the output is built to move into the software you already run, there's no migration project and no retraining the whole team. Your stack stays. The hours don't.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" data-reveal>
      <div class="eyebrow">03 \u2014 The Products</div>
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
          <img src="${T3}" alt="PM Dashboard home: firm totals, project health with budget burn, and a needs-attention list" loading="lazy">
          <figcaption><b>Dashboard.</b> Backlog, unbilled WIP, A/R and utilization up top. Every project's fee spent against percent complete, and one list of what needs attention: over-budget jobs, overdue invoices, overbooked staff.</figcaption>
        </figure>
        <div class="shot-grid">
          <figure class="shot">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${A3}" alt="Resource plan: planned hours per person per week, over-capacity weeks in red" loading="lazy">
            <figcaption><b>Schedule.</b> Planned hours per person, per week. Over-capacity weeks show red, and planned hours are checked against the budget hours left.</figcaption>
          </figure>
          <figure class="shot">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${C3}" alt="Task board: to do, in progress, review and done, with project numbers, owners and due dates" loading="lazy">
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
          <img src="${R3}" alt="Redline workspace: sheet thumbnails, plan with area, count and dimension markups, an approval stamp, properties panel and markups list" loading="lazy">
          <figcaption><b>Markup and measure.</b> Clouds, callouts, counts, areas and stamps, all calibrated to the sheet scale. Every markup lands in a sortable list with its measurement, status and author, and exports to CSV.</figcaption>
        </figure>
        <div class="shot-grid">
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${P3}" alt="AI takeoff: pavement, building and island areas traced and snapped to linework, with totals" loading="lazy">
            <figcaption><b>AI takeoff.</b> Ask for pavement, building, lawn or gravel areas. The AI traces each one, snaps the corners to the linework and nets out the islands. You check the boundaries and the totals update live.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${I3}" alt="AI set review: findings ranked high, medium and low, marked up on the sheets" loading="lazy">
            <figcaption><b>AI set review.</b> Reviews the whole set and ranks what it finds: pipe velocities, pond outflow against pre-development, wetland impacts, a missing sheet in the index. Each finding is clouded on the sheet it refers to.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${L3}" alt="Live review session with a city engineer and contractor marking up the same sheet, with chat and activity record" loading="lazy">
            <figcaption><b>Live sessions.</b> Share a session ID and the reviewer, the contractor and your team mark up the same sheet at once. Chat and a full record of who changed what sit alongside.</figcaption>
          </figure>
          <figure class="shot shot--dark">
            <div class="shot__bar"><i></i><i></i><i></i></div>
            <img src="${D3}" alt="Polylength measurement along a storm drain run at 240% zoom, with the tool chest of saved presets" loading="lazy">
            <figcaption><b>Snap and measure.</b> Measurements snap to the drawing\u2019s own linework. Tool Chest presets keep your standard markups (storm runs, limit of work, loam &amp; seed by depth) one click away.</figcaption>
          </figure>
        </div>
      </div>

      <div class="mock-row">
        <div class="mock">
          <div class="mock__eyebrow">Drainage Analyst \xB7 Illustrative output</div>
          <p class="mock__desc">Pre vs. post peak discharge at the design point</p>
          <div class="mock__divider"></div>
          <div class="mock__lines">
            <div class="mock__line"><span>Storm</span><span>Pre &nbsp;/&nbsp; Post (cfs)</span></div>
            <div class="mock__line"><span>2-yr</span><span>3.1 &nbsp;/&nbsp; 2.8</span></div>
            <div class="mock__line"><span>10-yr</span><span>6.4 &nbsp;/&nbsp; 6.0</span></div>
            <div class="mock__line" style="color:var(--apollo-amber);"><span>25-yr</span><span>8.2 &nbsp;/&nbsp; 9.1 \u25B2</span></div>
          </div>
          <div class="mock__divider"></div>
          <div class="mock__flag">Suggested fix</div>
          <div class="mock__job-cust">Raise basin 1 outlet weir 0.4 ft and add a 6" low-flow orifice. Re-run shows 25-yr post at 7.9 cfs.</div>
        </div>
        <div class="mock">
          <div class="mock__eyebrow">Proposal Studio \xB7 Prompt</div>
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
      <div class="eyebrow">04 \u2014 Your Stack</div>
      <h2 class="headline">Built around the tools you already pay for.</h2>
      <p class="lede">Civil 3D, Bluebeam, and HydroCAD are where the final work lives. Apollo handles what happens before and between them.</p>
      <div class="cmp-hint">Swipe to compare \u2192</div>
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
      <div class="eyebrow">05 \u2014 How It Works</div>
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
      <div class="eyebrow">06 \u2014 Who It's For</div>
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
      <div class="eyebrow">07 \u2014 Pricing</div>
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
      <div class="eyebrow">08 \u2014 Next Step</div>
      <div class="closer">
        <div>
          <h2>Put it on a real project this week.</h2>
          <p>Send us a site you're working on. We'll run it through the tools and show you the output before you sign up for anything.</p>
        </div>
        <a class="btn" href="mailto:rchase@apollodevelopment.io?subject=Apollo%20tools%20demo">Request a demo \u2192</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="wrap">
      <span class="mono">\xA9 Apollo Development</span>
      <span class="mono">apollodevelopment.io</span>
    </div>
    <div class="wrap"><span class="mono tm-note">Autodesk, AutoCAD, Civil 3D, Bluebeam, HydroCAD, Deltek, Ajera, Esri, ArcGIS, Bentley, OpenRoads, Carlson, and Trimble are trademarks of their respective owners. Apollo Development is not affiliated with or endorsed by them.</span></div>
  </footer>
`;function jv(){x3();let n=(0,hr.useRef)(null);return _3(n),S3(n),(0,ur.jsxs)("div",{className:"apollo-deck",ref:n,children:[(0,ur.jsx)("style",{children:M3+v3}),(0,ur.jsx)(y3,{prefix:"--apollo-",opacity:.55}),(0,ur.jsx)("div",{className:"ap3d-content",dangerouslySetInnerHTML:{__html:b3(N3)}})]})}var Lw=Zs(_c());(0,Iw.createRoot)(document.getElementById("root")).render((0,Lw.jsx)(jv,{}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
