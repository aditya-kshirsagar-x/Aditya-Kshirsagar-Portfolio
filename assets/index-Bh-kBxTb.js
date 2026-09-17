var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,O={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(O[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),k=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return k.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var A=null,fn=null;function pn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(A!==null||fn!==null)&&(bu(),A&&(t=A,e=fn,fn=A=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function j(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=j(Dn),kn=h({},Dn,{view:0,detail:0}),M=j(kn),An,jn,Mn,Nn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=j(Nn),Fn=j(h({},Nn,{dataTransfer:0})),In=j(h({},kn,{relatedTarget:0})),Ln=j(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=j(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=j(h({},Dn,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=j(h({},kn,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=j(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=j(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=j(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),N=j(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=j(h({},Dn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=_n&&`CompositionEvent`in window,Qn=null;_n&&`documentMode`in document&&(Qn=document.documentMode);var $n=_n&&`TextEvent`in window&&!Qn,er=_n&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=Cn(),Sn=xn=bn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){A?fn?fn.push(r):fn=[r]:A=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Gt(Ot(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(_n){var _r;if(_n){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,dn(e)),hn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=_n&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Kt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};_n&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Mt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=pi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=pi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Je(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=me(null),Xi=null,I=null;function Zi(e,t,n){D(Yi,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Yi.current,he(Yi)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Xi=e,I=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Xi,e)}function aa(e,t){return Xi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},I===null){if(e===null)throw Error(i(308));I=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else I=I.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=T.S;T.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=me(null);function Sa(){var e=xa.current;return e===null?G.pooledCache:e}function Ca(e,t){t===null?D(xa,xa.current):D(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case re:return t=ja(t),f(e,t,n)}if(ue(t)||se(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=ja(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=ja(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=ja(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=me(null),no=me(0);function ro(e,t){e=Gl,D(no,e),D(to,t),Gl=e|t.baseLanes}function io(){D(no,Gl),D(to,to.current)}function ao(){Gl=no.current,he(to),he(no)}var oo=me(null),so=null;function co(e){var t=e.alternate;D(L,L.current&1),D(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){D(L,L.current),D(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(D(L,L.current),D(oo,e),so===null&&(so=e)):fo(e)}function fo(){D(L,L.current),D(oo,oo.current)}function po(e){he(oo),so===e&&(so=null),he(L)}var L=me(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,go=null,_o=!1,vo=!1,B=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Vs:Hs,B=!1,a=n(r,i),B=!1,vo&&(a=Eo(t,n,r,i)),To(e),a}function To(e){T.H=Bs;var t=z!==null&&z.next!==null;if(ho=0,go=z=R=null,_o=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&na(e)&&(ac=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(vo&&(xo=null),bo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,go=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Us,o=t(n,r)}while(vo);return o}function Do(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}ho=0,go=z=R=null,vo=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return go===null?R.memoizedState=go=e:go=go.next=e,go}function Mo(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=go===null?R.memoizedState:go.next;if(t!==null)go=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},go===null?R.memoizedState=go=e:go=go.next=e}return go}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Aa(xo,e,t),t=R,(go===null?t.memoizedState:go.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(Mo(),z,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((ho&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Kl|=p;f=u.action,B&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ac=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=R,a=Mo(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||go!==null&&go.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||ho&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=No(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Ko(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),B){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,z,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(F){var n=G.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,R,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(Mo(),z,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Mo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=Mo(),n=z;if(n!==null)return is(t,n,e);Mo(),t=t.memoizedState,n=Mo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=No(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return Mo().memoizedState}function ls(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Co(r,z.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(R.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=No(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=Mo().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),B){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||ho&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return Dr(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(q&261930)?(ac=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Kl|=e,t):(e=Ss(e,n,r),Dr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Is(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ya(c,r),pu(e)):Fs(e,t,r,pu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,de,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},pu())}function ks(){return ia(Qf)}function As(){return Mo().memoizedState}function js(){return Mo().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,pu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),G===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Ls(e){var t=e.alternate;return e===R||t!==null&&t===R}function Rs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Bs={readContext:ia,use:Fo,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};Bs.useEffectEvent=V;var Vs={readContext:ia,use:Fo,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(B){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(B){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(jo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=G.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return jo().memoizedState=Ms.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:ia,use:Fo,useCallback:bs,useContext:ia,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(Mo(),z.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(Mo(),z,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:ia,use:Fo,useCallback:bs,useContext:ia,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Mo();return z===null?Ss(n,e,t):Cs(n,z.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=Mo();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,z,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ti(e)}function Xs(e){console.error(e)}function Zs(e){ti(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ka(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ec(e.stateNode,r,a),Ya(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref){if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ac||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=G,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),ic;Du(),t=mc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=pc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ac?(ko(e,t,a),jc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Ua||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Ua||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ki(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:wa()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(L.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(co(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=G,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),ic;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Va(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(L,o),oc(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Ki();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(L,L.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}}else ac=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=G,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Xl|=t)}function zc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,Gi(t))Ui(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return Qi(t.type),H(t),null;case 19:if(he(L),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return D(L,L.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return H(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=L.current,D(L,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(L),null;case 4:return xe(),null;case 10:return Qi(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&he(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ii(t),t.tag){case 3:Qi(ua),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:he(L);break;case 10:Qi(t.type);break;case 22:case 23:po(t),ao(),e!==null&&he(xa);break;case 24:Qi(ua)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Uc(5,n);break;case 1:if(Sl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),nl=i,rl=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:rl||Jc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null){if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),dl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,dl(e,t,n),rl=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,_l(t,e),rl=d,nl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Cl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Uc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),qc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?mt():dd()}function mu(){if(Yl===0){if(!(q&536870912)||F){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Yl=e}else Yl=536870912}return e=oo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),st(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ie(),10<a)){if(yu(r,t,Yl,!Hl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,I=Xi=null,Ao(e),Fa=null,Ia=0,e=K;for(;e!==null;)Hc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=hi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ai(),n}function Cu(e,t){R=null,T.H=Bs,t===Ta||t===Da?(t=Na(),J=3):t===Ea?(t=Na(),J=4):J=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,Qs(e,Ci(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(q&4194048)===q?so===null:(q&62914560)===q||q&536870912?e===so:!1}function Tu(){var e=T.H;return T.H=Bs,e===null?Bs:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&oo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,I=Xi=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ai()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ka(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return I=Xi=null,T.H=r,T.A=a,W=n,K===null?(G=null,q=0,ai(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Pc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Ao(t);default:Hc(n,t),t=K=gi(t,Gl),t=Pc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){I=Xi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(rc(e,i,t,n,q)){Y=1,Qs(e,Ci(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,Qs(e,Ci(n,e.current)),K=null;return}t.flags&32768?(F||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Bc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,ct(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,E.p=a,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=ec(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ci(n,e),n=tc(2),r=qa(t,n,2),r!==null&&(nc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=ci(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=nt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=dn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Gr:case Kr:case qr:l=Ln;break;case Zr:l=Jn;break;case`scroll`:case`scrollend`:l=M;break;case`wheel`:l=N;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c)){if(gr)v=Tr;else{v=Cr;var y=Sr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!O.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=c(g(),1),b=c(u(),1),x=v();function S({onFinished:e}){return(0,b.useEffect)(()=>{let t=document.documentElement,n=()=>t.style.setProperty(`--s`,Math.min(window.innerWidth/1200,window.innerHeight/800));window.addEventListener(`resize`,n,{passive:!0}),n();let r=document.getElementById(`bar`);if(!r)return;r.innerHTML=``;let i=[];for(let e=0;e<56;e++){let t=document.createElement(`i`);t.className=`tick`+((e+1)%8==0?` mk`:``),r.appendChild(t),i.push(t)}let a=[[0,0],[.045,9],[.115,9.6],[.16,22],[.205,23],[.3,38],[.345,39.5],[.4,53],[.475,54],[.545,68],[.6,69],[.665,81],[.735,82],[.8,92],[.855,93],[.925,99],[.985,99.4],[1,100]],o=8600,s=10620,c=e=>1-(1-e)**2.1,l=e=>{if(e>=1)return 100;for(let t=0;t<a.length-1;t++){let[n,r]=a[t],[i,o]=a[t+1];if(e<=i)return r+(o-r)*c((e-n)/(i-n))}return 100},u=[[0,`INITIALIZING CORE SYSTEMS`],[24,`ESTABLISHING SECURE UPLINK`],[52,`SYNCHRONIZING NODE ARRAY`],[78,`DECRYPTING PAYLOAD STREAM`],[100,`UPLINK ESTABLISHED`]],d=e=>{let t=u[0][1];for(let[n,r]of u)e>=n&&(t=r);return t},f=document.getElementById(`num`),p=document.getElementById(`dots`),m=document.getElementById(`haze`),h=document.getElementById(`stage`),g=document.getElementById(`plate`),_=document.querySelector(`.status`),v=performance.now(),y=-1,b=-1,x=-1,S=``,C=0,w;function ee(t){let n=(t-v)%s,r=Math.floor((t-v)/s);if(r>0&&e){e();return}r!==C&&(C=r,h&&(h.classList.remove(`reset`),h.offsetWidth,h.classList.add(`reset`)));let a=n<o?l(n/o):n<10200?100:0,c=n<10200||(n-o-1600)%220<130,u=Math.round(a);if(u!==b&&f){f.textContent=String(u),b=u;let e=d(u);e!==S&&_&&(S=e,_.firstChild.nodeValue=e)}f&&f.parentElement&&(f.parentElement.style.opacity=c?``:`.22`);let te=Math.round(a/100*56);if(te!==y){for(let e=0;e<56;e++){let t=e<te;i[e]&&i[e].classList.contains(`on`)!==t&&i[e].classList.toggle(`on`,t)}if(te>y&&y>=0&&te>0&&i[te-1]){let e=i[te-1];e.classList.remove(`flash`),e.offsetWidth,e.classList.add(`flash`),m&&(m.classList.remove(`pulse`),m.offsetWidth,m.classList.add(`pulse`))}m&&m.style.setProperty(`--lit-w`,(te>0?(te-1)*10.883636363636363+5.4+5.483636363636363/2:0)+`px`),te===56&&g&&(g.classList.remove(`hit`),g.offsetWidth,g.classList.add(`hit`)),y=te}let ne=u>=100?0:Math.floor((t-v)/380%4);ne!==x&&p&&(p.textContent=`...`.slice(0,ne),x=ne),w=requestAnimationFrame(ee)}return w=requestAnimationFrame(ee),()=>{window.removeEventListener(`resize`,n),cancelAnimationFrame(w)}},[e]),(0,x.jsxs)(`div`,{className:`fixed inset-0 bg-black z-50 overflow-hidden font-mono select-none`,children:[(0,x.jsx)(`style`,{children:`
        :root { --s: 1; --bg: #000000; --green: #2fe07d; --green-dim: rgba(55,225,130,.26); --line: rgba(120,255,185,.46); --ink-hi: #d9f4e6; }
        .pool { position:fixed; inset:0; pointer-events:none; background:radial-gradient(ellipse 60% 44% at 50% 52%, rgba(24,150,92,.17) 0%, rgba(10,58,38,.08) 38%, transparent 100%); }
        .scene { position:fixed; inset:0; overflow:hidden; background: #000000; }
        .stage { position:absolute; left:50%; top:50%; width:1200px; height:800px; transform:translate(-50%,-50%) scale(var(--s)); transform-origin:center; }
        .stage > * { position:absolute; }
        .plate { left:530px; top:270px; width:140px; height:84px; background:var(--line); clip-path:polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px); }
        .plate::after { content:""; position:absolute; inset:1.2px; background:linear-gradient(180deg,#07251a,#041a12); clip-path:polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px); }
        .plate.hit { animation:plateHit .5s ease-out; }
        @keyframes plateHit { 0% { background:#c8ffe2; } 100% { background:var(--line); } }
        .brk { width:9px; height:9px; pointer-events:none; }
        .brk::before, .brk::after { content:""; position:absolute; background:var(--green); opacity:.9; }
        .brk::before { width:9px; height:1.2px; } .brk::after { width:1.2px; height:9px; }
        .brk.tr { left:661px; top:270px; } .brk.tr::before { right:0; top:0; } .brk.tr::after { right:0; top:0; }
        .brk.bl { left:530px; top:345px; } .brk.bl::before { left:0; bottom:0; } .brk.bl::after { left:0; bottom:0; }
        .readout { left:530px; top:284.9px; width:140px; height:0; text-align:center; line-height:1; color:var(--green); text-shadow:0 0 4px rgba(70,235,145,.6); }
        .readout b { font-size:47px; font-weight:280; letter-spacing:2.4px; }
        .readout u { font-size:15px; text-decoration:none; opacity:.62; position:relative; top:-1px; left:3px; }
        .haze { left:298px; top:438px; width:0; height:0; pointer-events:none; }
        .haze i { position:absolute; left:0; top:0; width:calc(var(--lit-w,0px) + 250px); height:250px; transform:translate(-125px,-128px); background:radial-gradient(ellipse 50% 50% at center, rgba(56,225,140,.26) 0%, transparent 100%); filter:blur(6px); transition:width .16s linear; }
        .haze i.pulse { animation:hazePulse .3s ease-out; }
        @keyframes hazePulse { 0% { filter:blur(6px) brightness(1.3); } 100% { filter:blur(6px) brightness(1); } }
        .bar { left:298px; top:420px; width:604px; height:44px; display:flex; justify-content:space-between; align-items:flex-end; }
        .tick { width:5.4px; height:32px; background:var(--green-dim); transform:skewX(12deg); }
        .tick.mk { height:44px; }
        .tick.on { background:#33cf76; box-shadow:0 0 4px rgba(95,240,155,.6); }
        .tick.flash { animation:ignite .32s ease-out; }
        @keyframes ignite { 0% { background:#dcffec; box-shadow:0 0 11px #fff; } 100% { background:#33cf76; } }
        .barlabel { left:298px; top:396.4px; font-size:20.4px; font-weight:500; color:var(--ink-hi); }
        .status { left:0; top:507px; width:1200px; text-align:center; font-size:14px; font-weight:500; letter-spacing:1.42px; color:#9fd0b6; }
        .status .dots { letter-spacing:-1.9px; margin-left:-6px; }
        .marker { width:0; height:0; position:absolute; }
        .marker i { position:absolute; background:var(--green); opacity:.72; }
        .marker .h { width:9px; height:1.2px; } .marker .v { width:1.2px; height:9px; }
        .marker .a-h, .marker .a-v { left:-17px; top:-17px; }
        .marker .dia { left:-4px; top:-4px; width:8px; height:8px; background:var(--green); transform:rotate(45deg); }
        .m-tl { left:274px; top:340px; } .m-tr { left:926px; top:340px; }
        .m-bl { left:274px; top:508px; } .m-br { left:926px; top:508px; }
        .rail { left:0; top:0; width:1200px; height:800px; position:absolute; }
        .rail.right { transform:scaleX(-1); }
        .rail .wire { left:104px; top:433px; width:92px; height:1.4px; background:rgba(120,255,185,.24); position:absolute; }
        .rail .cap { top:428px; height:5px; background:#2bd074; position:absolute; }
        .rail .cap.a { left:104px; width:10px; } .rail .cap.b { left:181px; width:15px; }
        .mod { left:204px; top:404px; width:36px; height:62px; position:absolute; }
        .mod .hatch { top:0; width:36px; height:2px; background:#cfe8da; position:absolute; }
        .mod .ret { top:8px; left:3px; width:30px; height:30px; border-radius:50%; border:1.3px solid rgba(206,235,220,.82); position:absolute; }
        .mod .dot { top:12.5px; left:15.5px; width:5px; height:5px; border-radius:50%; background:var(--green); position:absolute; }
        .mod .slab { top:46px; width:36px; height:5px; background:#dcefe4; position:absolute; }
        .mod .led { top:55px; height:2.6px; background:#9dc3b0; position:absolute; }
        .scan { position:fixed; inset:0; pointer-events:none; opacity:.18; background:repeating-linear-gradient(to bottom, rgba(160,255,205,.05) 0 1px, transparent 1px 3px); }
      `}),(0,x.jsx)(`div`,{className:`pool`}),(0,x.jsx)(`div`,{className:`scene`,children:(0,x.jsxs)(`div`,{className:`stage`,id:`stage`,children:[(0,x.jsx)(`div`,{className:`haze`,children:(0,x.jsx)(`i`,{id:`haze`})}),(0,x.jsx)(`div`,{className:`plate`,id:`plate`}),(0,x.jsx)(`div`,{className:`brk tr`}),(0,x.jsx)(`div`,{className:`brk bl`}),(0,x.jsxs)(`div`,{className:`readout`,children:[(0,x.jsx)(`b`,{id:`num`,children:`50`}),(0,x.jsx)(`u`,{children:`%`})]}),(0,x.jsx)(`div`,{className:`barlabel`,children:`UPLINK`}),(0,x.jsx)(`div`,{className:`bar`,id:`bar`}),(0,x.jsxs)(`div`,{className:`status`,children:[`ESTABLISHING SECURE UPLINK`,(0,x.jsx)(`span`,{className:`dots`,id:`dots`,children:`...`})]}),(0,x.jsxs)(`div`,{className:`marker m-tl`,children:[(0,x.jsx)(`i`,{className:`h a-h`}),(0,x.jsx)(`i`,{className:`v a-v`}),(0,x.jsx)(`i`,{className:`dia`})]}),(0,x.jsxs)(`div`,{className:`marker m-tr`,children:[(0,x.jsx)(`i`,{className:`h a-h`}),(0,x.jsx)(`i`,{className:`v a-v`}),(0,x.jsx)(`i`,{className:`dia`})]}),(0,x.jsxs)(`div`,{className:`marker m-bl`,children:[(0,x.jsx)(`i`,{className:`h a-h`}),(0,x.jsx)(`i`,{className:`v a-v`}),(0,x.jsx)(`i`,{className:`dia`})]}),(0,x.jsxs)(`div`,{className:`marker m-br`,children:[(0,x.jsx)(`i`,{className:`h a-h`}),(0,x.jsx)(`i`,{className:`v a-v`}),(0,x.jsx)(`i`,{className:`dia`})]}),(0,x.jsxs)(`div`,{className:`rail left`,children:[(0,x.jsx)(`div`,{className:`wire`}),(0,x.jsx)(`div`,{className:`cap a`}),(0,x.jsx)(`div`,{className:`cap b`}),(0,x.jsxs)(`div`,{className:`mod`,children:[(0,x.jsx)(`div`,{className:`hatch`}),(0,x.jsx)(`div`,{className:`ret`}),(0,x.jsx)(`div`,{className:`dot`}),(0,x.jsx)(`div`,{className:`slab`})]})]}),(0,x.jsxs)(`div`,{className:`rail right`,children:[(0,x.jsx)(`div`,{className:`wire`}),(0,x.jsx)(`div`,{className:`cap a`}),(0,x.jsx)(`div`,{className:`cap b`}),(0,x.jsxs)(`div`,{className:`mod`,children:[(0,x.jsx)(`div`,{className:`hatch`}),(0,x.jsx)(`div`,{className:`ret`}),(0,x.jsx)(`div`,{className:`dot`}),(0,x.jsx)(`div`,{className:`slab`})]})]})]})}),(0,x.jsx)(`div`,{className:`scan`})]})}var C=[{id:`home`,label:`Home`},{id:`about`,label:`About`},{id:`projects`,label:`Projects`},{id:`skills`,label:`Skills`},{id:`contact`,label:`Contact`}],w=`
/* =========================================================
   Navbar.css — Liquid Glass system
   Tailwind still handles layout/utility; this file owns the
   glass surfaces, shine, and pointer-driven ambient light so
   those effects live in one maintainable place instead of
   being duplicated as inline styles everywhere.
   ========================================================= */

.glass-nav {
    --glow-x: 50%;
    --glow-y: 0%;
    --nav-bg: rgba(255, 255, 255, 0.035);
    --nav-border: rgba(255, 255, 255, 0.08);
    --nav-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
    background: var(--nav-bg);
    border: 1px solid var(--nav-border);
    box-shadow: var(--nav-shadow);
    -webkit-backdrop-filter: blur(14px) saturate(130%);
    backdrop-filter: blur(14px) saturate(130%);
    transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Fallback for browsers without backdrop-filter support */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .glass-nav {
        background: rgba(8, 10, 12, 0.92);
    }
}

.glass-nav--scrolled {
    --nav-bg: rgba(10, 12, 14, 0.6);
    --nav-border: rgba(255, 255, 255, 0.1);
    --nav-shadow: 0 10px 32px rgba(0, 0, 0, 0.45);
}

/* Top hairline — the "edge catching light" reflection */
.glass-nav__edge {
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.22),
        transparent
    );
    pointer-events: none;
}

/* Ambient light that tracks the pointer via CSS vars, updated
   directly on the DOM — never through React state. Kept very
   faint: this is reflected light on glass, not a spotlight. */
.glass-nav__glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.045;
    background: radial-gradient(
        320px circle at var(--glow-x) var(--glow-y),
        #7fd8e8,
        transparent 70%
    );
    will-change: background;
}

@media (hover: none), (pointer: coarse) {
    .glass-nav__glow {
        display: none;
    }
}

/* ---------------------------------------------------------
   Nav links
   --------------------------------------------------------- */
.nav-link {
    position: relative;
    color: #9ca3af;
    transition: color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover,
.nav-link:focus-visible {
    color: #ffffff;
    transform: translate3d(0, -1px, 0);
}

.nav-link__pill {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
}

.nav-link:hover .nav-link__pill,
.nav-link:focus-visible .nav-link__pill {
    opacity: 1;
}

.nav-link__underline {
    position: absolute;
    left: 50%;
    bottom: -1px;
    height: 1px;
    width: 18px;
    transform: translate3d(-50%, 0, 0) scaleX(0);
    background: #ffffff;
    border-radius: 9999px;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        background 0.3s ease;
}

.nav-link:hover .nav-link__underline,
.nav-link:focus-visible .nav-link__underline {
    transform: translate3d(-50%, 0, 0) scaleX(1);
}

.nav-link--active {
    color: #ffffff;
}

.nav-link--active .nav-link__underline {
    transform: translate3d(-50%, 0, 0) scaleX(1);
    background: #7fd8e8;
}

/* ---------------------------------------------------------
   Hire Me — restrained liquid-glass CTA.
   Neutral glass is the material; cyan is a hairline accent
   only, never a fill.
   --------------------------------------------------------- */
.glass-btn {
    position: relative;
    overflow: hidden;
    color: #f5f7f7;
    background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 0.06),
        rgba(255, 255, 255, 0.02)
    );
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    will-change: transform;
}

.glass-btn:hover,
.glass-btn:focus-visible {
    border-color: rgba(127, 216, 232, 0.4);
    background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 0.09),
        rgba(255, 255, 255, 0.03)
    );
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14),
        0 0 10px rgba(127, 216, 232, 0.12);
}

.glass-btn:active {
    transform: scale(0.97) !important;
}

.glass-btn__shine {
    position: absolute;
    inset: -40% -20%;
    background: linear-gradient(
        115deg,
        transparent 40%,
        rgba(255, 255, 255, 0.16) 50%,
        transparent 60%
    );
    opacity: 0;
    transform: translate3d(-60%, 0, 0);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
        opacity 0.3s ease;
    pointer-events: none;
}

.glass-btn:hover .glass-btn__shine,
.glass-btn:focus-visible .glass-btn__shine {
    opacity: 1;
    transform: translate3d(60%, 0, 0);
}

/* ---------------------------------------------------------
   Mobile panel
   --------------------------------------------------------- */
.mobile-panel {
    background: rgba(10, 12, 14, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(20px) saturate(130%);
    backdrop-filter: blur(20px) saturate(130%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .mobile-panel {
        background: rgba(6, 8, 10, 0.96);
    }
}

.mobile-scrim {
    background: rgba(5, 5, 5, 0.7);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

/* ---------------------------------------------------------
   Motion & input-mode guards
   --------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
    .glass-nav,
    .glass-nav *,
    .nav-link,
    .nav-link *,
    .glass-btn,
    .glass-btn *,
    .mobile-panel,
    .mobile-panel * {
        transition-duration: 0.001ms !important;
        animation-duration: 0.001ms !important;
    }

    .glass-nav__glow {
        display: none;
    }
}
`,ee=`(hover: hover) and (pointer: fine)`,te=`(prefers-reduced-motion: reduce)`,ne=()=>typeof window<`u`&&window.matchMedia(ee).matches&&!window.matchMedia(te).matches;function re(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(`home`),o=(0,b.useRef)(null),s=(0,b.useRef)(null),c=(0,b.useRef)(null),l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useRef)(!1),f=(0,b.useRef)(null),p=(0,b.useRef)(null),m=(0,b.useRef)({x:.5,y:0}),h=(0,b.useRef)(null),g=(0,b.useRef)(null),_=(0,b.useRef)({x:0,y:0}),v=(0,b.useRef)(!1),y=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=()=>{let e=window.scrollY>24;e!==d.current&&(d.current=e,t(e)),f.current=null},n=()=>{f.current===null&&(f.current=window.requestAnimationFrame(e))};return window.addEventListener(`scroll`,n,{passive:!0}),e(),()=>{window.removeEventListener(`scroll`,n),f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null)}},[]),(0,b.useEffect)(()=>{let e=C.map(e=>document.getElementById(e.id)).filter(Boolean);if(e.length===0)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&a(e.target.id)})},{rootMargin:`-40% 0px -50% 0px`,threshold:0});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[]),(0,b.useEffect)(()=>{if(!n)return;let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,l.current?.focus(),()=>{document.body.style.overflow=e}},[n]),(0,b.useEffect)(()=>{if(!n)return;let e=e=>{if(e.key===`Escape`){r(!1),u.current?.focus();return}if(e.key===`Tab`&&c.current){let t=c.current.querySelectorAll(`a[href], button:not([disabled])`);if(t.length===0)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]);let S=(0,b.useCallback)(()=>{if(o.current){let{x:e,y:t}=m.current;o.current.style.setProperty(`--glow-x`,`${e}%`),o.current.style.setProperty(`--glow-y`,`${t}%`)}p.current=null},[]),ee=(0,b.useCallback)(()=>{!o.current||!ne()||(h.current=o.current.getBoundingClientRect())},[]),te=(0,b.useCallback)(e=>{if(!o.current||!ne())return;let t=h.current||o.current.getBoundingClientRect();m.current={x:(e.clientX-t.left)/t.width*100,y:(e.clientY-t.top)/t.height*100},p.current===null&&(p.current=window.requestAnimationFrame(S))},[S]);(0,b.useEffect)(()=>()=>{p.current!==null&&window.cancelAnimationFrame(p.current)},[]);let re=(0,b.useCallback)(()=>{if(s.current){let{x:e,y:t}=_.current,n=v.current?1.02:1;s.current.style.transform=`translate3d(${e}px, ${t}px, 0) scale(${n})`}g.current=null},[]),ie=(0,b.useCallback)(()=>{g.current===null&&(g.current=window.requestAnimationFrame(re))},[re]),ae=(0,b.useCallback)(()=>{!s.current||!ne()||(y.current=s.current.getBoundingClientRect(),v.current=!0,ie())},[ie]),oe=(0,b.useCallback)(e=>{if(!s.current||!ne())return;let t=y.current||s.current.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2);_.current={x:Math.max(-6,Math.min(6,n*.14)),y:Math.max(-5,Math.min(5,r*.22))},ie()},[ie]),se=(0,b.useCallback)(()=>{v.current=!1,_.current={x:0,y:0},ie()},[ie]);(0,b.useEffect)(()=>()=>{g.current!==null&&window.cancelAnimationFrame(g.current)},[]);let ce=()=>r(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`style`,{children:w}),(0,x.jsx)(`nav`,{ref:o,onMouseEnter:ee,onMouseMove:te,"aria-label":`Primary`,className:[`fixed left-1/2 z-50 -translate-x-1/2`,`w-[94%] md:w-[92%] max-w-6xl`,`transition-all duration-500 ease-out`,e?`top-3`:`top-5`].join(` `),children:(0,x.jsxs)(`div`,{className:[`glass-nav`,e?`glass-nav--scrolled`:``,`rounded-2xl md:rounded-full`].join(` `),children:[(0,x.jsx)(`div`,{className:`glass-nav__glow`,"aria-hidden":`true`}),(0,x.jsx)(`div`,{className:`glass-nav__edge`,"aria-hidden":`true`}),(0,x.jsxs)(`div`,{className:[`relative flex items-center justify-between`,`px-4 sm:px-5 md:px-6 lg:px-7 transition-all duration-500 ease-out`,`gap-2 md:gap-3`,e?`h-[54px]`:`h-16`].join(` `),children:[(0,x.jsxs)(`a`,{href:`#home`,className:`group relative flex flex-col leading-none shrink-0 outline-none`,children:[(0,x.jsxs)(`span`,{className:`flex items-baseline gap-[6px] text-[12px] sm:text-[13px] md:text-[14px] font-semibold tracking-[0.2em] text-white transition-all duration-300 group-hover:tracking-[0.24em] group-focus-visible:tracking-[0.24em]`,children:[`ADITYA`,(0,x.jsx)(`span`,{className:`text-[#cdeef3] transition-opacity duration-300 opacity-70 group-hover:opacity-100`,children:`KSHIRSAGAR`})]}),(0,x.jsx)(`span`,{"aria-hidden":`true`,className:`mt-1 h-px w-0 bg-gradient-to-r from-white/70 to-transparent transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full`}),(0,x.jsx)(`span`,{className:`absolute -inset-3 rounded-xl opacity-0 group-focus-visible:opacity-100 ring-1 ring-white/30 transition-opacity`})]}),(0,x.jsx)(`ul`,{className:`hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center`,children:C.map(e=>{let t=i===e.id;return(0,x.jsx)(`li`,{children:(0,x.jsxs)(`a`,{href:`#${e.id}`,"aria-current":t?`true`:void 0,className:[`nav-link`,t?`nav-link--active`:``,`relative block px-3 lg:px-4 py-2 text-[11px] lg:text-[12px] font-medium tracking-[0.12em] uppercase`,`rounded-full outline-none whitespace-nowrap`,`focus-visible:ring-1 focus-visible:ring-white/40`].join(` `),children:[(0,x.jsx)(`span`,{className:`nav-link__pill`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`relative`,children:e.label}),(0,x.jsx)(`span`,{className:`nav-link__underline`,"aria-hidden":`true`})]})},e.id)})}),(0,x.jsx)(`div`,{className:`hidden md:flex items-center shrink-0`,children:(0,x.jsxs)(`a`,{ref:s,href:`#contact`,onMouseEnter:ae,onMouseMove:oe,onMouseLeave:se,className:`glass-btn rounded-full px-4 lg:px-5 py-2 text-[11px] lg:text-[12px] font-semibold tracking-[0.08em] uppercase outline-none focus-visible:ring-2 focus-visible:ring-white/40 whitespace-nowrap`,children:[(0,x.jsx)(`span`,{className:`glass-btn__shine`,"aria-hidden":`true`}),(0,x.jsxs)(`span`,{className:`relative inline-flex items-center gap-1.5`,children:[`Hire Me`,(0,x.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]})}),(0,x.jsx)(`button`,{ref:u,type:`button`,onClick:()=>r(e=>!e),"aria-expanded":n,"aria-controls":`mobile-nav-panel`,"aria-label":n?`Close menu`:`Open menu`,className:`relative flex h-9 w-9 items-center justify-center rounded-full text-white/80 outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 md:hidden shrink-0`,children:(0,x.jsxs)(`span`,{className:`relative block h-3.5 w-4`,children:[(0,x.jsx)(`span`,{className:[`absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ease-out`,n?`top-1/2 rotate-45`:``].join(` `)}),(0,x.jsx)(`span`,{className:[`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200`,n?`opacity-0`:`opacity-100`].join(` `)}),(0,x.jsx)(`span`,{className:[`absolute left-0 bottom-0 h-px w-full bg-current transition-all duration-300 ease-out`,n?`bottom-1/2 -rotate-45`:``].join(` `)})]})})]})]})}),(0,x.jsxs)(`div`,{id:`mobile-nav-panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`Mobile navigation`,className:[`fixed inset-0 z-40 md:hidden`,`transition-opacity duration-500 ease-out`,n?`visible opacity-100`:`invisible opacity-0`].join(` `),children:[(0,x.jsx)(`button`,{type:`button`,"aria-hidden":`true`,tabIndex:-1,onClick:ce,className:`mobile-scrim absolute inset-0 h-full w-full cursor-default`}),(0,x.jsxs)(`div`,{ref:c,className:[`mobile-panel absolute inset-x-4 top-20 rounded-3xl p-8`,`transition-all duration-500 ease-out`,n?`translate-y-0 scale-100 opacity-100`:`-translate-y-3 scale-[0.98] opacity-0`].join(` `),children:[(0,x.jsx)(`ul`,{className:`flex flex-col gap-1`,children:C.map((e,t)=>(0,x.jsx)(`li`,{style:{transitionDelay:n?`${80+t*60}ms`:`0ms`,opacity:+!!n,transform:n?`translateY(0)`:`translateY(8px)`,transition:`opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)`},children:(0,x.jsx)(`a`,{ref:t===0?l:void 0,href:`#${e.id}`,onClick:ce,"aria-current":i===e.id?`true`:void 0,className:[`block rounded-xl px-3 py-3 text-lg font-medium tracking-wide outline-none transition-colors duration-300`,`focus-visible:ring-1 focus-visible:ring-white/40`,i===e.id?`text-white`:`text-[#9CA3AF] hover:text-white active:text-white`].join(` `),children:e.label})},e.id))}),(0,x.jsx)(`div`,{className:`mt-6 flex flex-col gap-3 border-t border-white/10 pt-6`,style:{transitionDelay:n?`340ms`:`0ms`,opacity:+!!n,transform:n?`translateY(0)`:`translateY(8px)`,transition:`opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)`},children:(0,x.jsxs)(`a`,{href:`#contact`,onClick:ce,className:`glass-btn rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.08em] uppercase`,children:[(0,x.jsx)(`span`,{className:`glass-btn__shine`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`relative`,children:`Hire Me →`})]})})]})]})]})}var ie=`
.projects-section {
  --accent: #00e5ff;
  --accent-soft: rgba(0, 229, 255, 0.35);
  --violet: #6e6bff;
  --surface: #050505;
  position: relative;
  background: var(--surface);
  overflow: clip;
}

/* ---------------------------------------------------------------------
   Ambient atmosphere behind the whole section (static, no repaint loop)
   --------------------------------------------------------------------- */
.projects-section .projects-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.projects-section .projects-atmosphere::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  width: 1200px;
  height: 1200px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0, 229, 255, 0.07) 0%, rgba(0, 229, 255, 0) 60%);
}

.projects-section .projects-grain {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.projects-section .projects-hairline-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent);
  pointer-events: none;
}

/* ---------------------------------------------------------------------
   Header actions row (title + GitHub profile CTA)
   --------------------------------------------------------------------- */
.projects-section .projects-header-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.projects-section .github-profile-link {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .projects-section .github-profile-link {
    background: rgba(12, 13, 14, 0.92);
  }
}

.projects-section .github-profile-link:hover,
.projects-section .github-profile-link:focus-visible {
  border-color: var(--accent-soft);
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 12px 28px -14px rgba(0, 229, 255, 0.35);
}

/* ---------------------------------------------------------------------
   Panel — the 3D tilt surface (CSS-variable driven, no React re-render)
   --------------------------------------------------------------------- */
.projects-section .project-panel {
  --rx: 0deg;
  --ry: 0deg;
  --mx: 50%;
  --my: 50%;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1400px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
  will-change: transform;
}

.projects-section .project-panel:hover,
.projects-section .project-panel:focus-within {
  box-shadow: 0 30px 60px -28px rgba(0, 0, 0, 0.75);
}

/* Glass surface */
.projects-section .project-glass {
  position: relative;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.4s ease;
}

/* Inner top highlight — a hairline of light along the top edge of the glass */
.projects-section .project-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 30%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(1px)) {
  .projects-section .project-glass {
    background: linear-gradient(155deg, rgba(14, 16, 18, 0.94), rgba(10, 11, 12, 0.92));
  }
}

.projects-section .project-panel:hover .project-glass,
.projects-section .project-panel:focus-within .project-glass {
  border-color: rgba(0, 229, 255, 0.35);
}

/* Featured (hackathon) treatment — tasteful, not a different design language */
.projects-section .project-panel.is-featured .project-glass {
  border-color: rgba(0, 229, 255, 0.24);
  box-shadow: inset 0 0 0 1px rgba(0, 229, 255, 0.07);
}

.projects-section .project-panel.is-featured:hover .project-glass,
.projects-section .project-panel.is-featured:focus-within .project-glass {
  border-color: rgba(0, 229, 255, 0.6);
}

.projects-section .featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: rgba(0, 229, 255, 0.08);
  color: var(--accent);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  width: fit-content;
}

.projects-section .featured-badge .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

/* Light sweep that follows the cursor — CSS var only, no React state */
.projects-section .project-glass::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    380px circle at var(--mx) var(--my),
    rgba(0, 229, 255, 0.13),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.projects-section .project-panel:hover .project-glass::after,
.projects-section .project-panel:focus-within .project-glass::after {
  opacity: 1;
}

/* ---------------------------------------------------------------------
   Visual / artwork stage — prism + parallax
   --------------------------------------------------------------------- */
.projects-section .project-visual {
  position: relative;
  overflow: hidden;
  background: radial-gradient(120% 140% at 15% 0%, #0d1b1f 0%, #050505 55%);
}

.projects-section .project-visual img,
.projects-section .visual-fallback {
  transform: translateZ(0) scale(1.04);
  transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.projects-section .project-panel:hover .project-visual img,
.projects-section .project-panel:hover .visual-fallback {
  transform: scale(1.05);
}

.projects-section .visual-fallback {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(110, 107, 255, 0.08)),
    repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.04) 0 2px, transparent 2px 40px);
}

/* Prism shard — transform/opacity only, no filter animation */
.projects-section .prism-shard {
  position: absolute;
  width: 60%;
  height: 140%;
  top: -20%;
  right: -10%;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.12), rgba(0, 229, 255, 0.06) 40%, transparent 70%);
  clip-path: polygon(30% 0%, 100% 10%, 85% 100%, 10% 90%);
  transform: rotate(0deg) translateZ(30px);
  opacity: 0.85;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
  pointer-events: none;
  mix-blend-mode: screen;
}

.projects-section .project-panel:hover .prism-shard {
  transform: rotate(4deg) translateZ(30px) scale(1.03);
  opacity: 1;
}

/* Giant editorial index number */
.projects-section .project-index {
  position: absolute;
  bottom: -0.15em;
  right: 0.1em;
  font-size: clamp(6rem, 14vw, 11rem);
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.14);
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
}

/* Meta panel content lift */
.projects-section .project-meta > * {
  transform: translateZ(20px);
}

/* Tech pill */
.projects-section .tech-pill {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.projects-section .tech-pill:hover {
  border-color: var(--accent-soft);
  background: rgba(0, 229, 255, 0.06);
  color: var(--accent);
  transform: translateY(-1px);
}

/* Action links */
.projects-section .action-link {
  position: relative;
  overflow: hidden;
}

.projects-section .action-link .arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.projects-section .action-link:hover .arrow,
.projects-section .action-link:focus-visible .arrow {
  transform: translateX(5px);
}

.projects-section .action-link.primary {
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: linear-gradient(180deg, rgba(0, 229, 255, 0.12), rgba(0, 229, 255, 0.02));
}

.projects-section .action-link.primary:hover,
.projects-section .action-link.primary:focus-visible {
  border-color: var(--accent);
  box-shadow: 0 0 24px -4px var(--accent-soft);
}

.projects-section .action-link.repo,
.projects-section .action-link.secondary {
  transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.projects-section .action-link.repo:hover,
.projects-section .action-link.repo:focus-visible,
.projects-section .action-link.secondary:hover,
.projects-section .action-link.secondary:focus-visible {
  transform: translateY(-2px) scale(1.015);
}

.projects-section .action-link.disabled {
  opacity: 0.35;
  pointer-events: none;
}

.projects-section .action-link:focus-visible,
.projects-section .tech-pill:focus-visible,
.projects-section .github-profile-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* ---------------------------------------------------------------------
   Scroll reveal — opacity + transform only (GPU-friendly, reversible)
   --------------------------------------------------------------------- */
.projects-section .reveal-item {
  opacity: 0;
  transform: translate3d(0, 30px, 0) scale(0.985);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.projects-section .reveal-item.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

/* ---------------------------------------------------------------------
   Mobile / coarse pointer: quiet the 3D and cursor effects, keep content
   --------------------------------------------------------------------- */
@media (max-width: 768px), (hover: none), (pointer: coarse) {
  .projects-section .project-panel {
    transform: none !important;
  }
  .projects-section .prism-shard {
    display: none;
  }
  .projects-section .project-glass::after {
    display: none;
  }
  .projects-section .project-visual img,
  .projects-section .visual-fallback {
    transform: none !important;
  }
  .projects-section .project-glass {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .projects-section .github-profile-link:hover {
    transform: none;
  }
}

@media (max-width: 768px) {
  .projects-section .projects-grain {
    display: none;
  }
}

/* Small-phone safety net — no horizontal overflow, no clipped text */
@media (max-width: 380px) {
  .projects-section .project-index {
    font-size: clamp(4rem, 20vw, 7rem);
  }
  .projects-section .project-meta {
    padding: 1.75rem 1.5rem !important;
  }
}

/* ---------------------------------------------------------------------
   Reduced motion: show everything, skip the movement
   --------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .projects-section .reveal-item {
    transition: none;
    opacity: 1;
    transform: none;
  }
  .projects-section .project-panel {
    transition: none;
    transform: none !important;
  }
  .projects-section .project-visual img,
  .projects-section .visual-fallback,
  .projects-section .prism-shard,
  .projects-section .action-link .arrow,
  .projects-section .tech-pill,
  .projects-section .github-profile-link {
    transition: none !important;
    transform: none !important;
  }
}
`,ae=`https://github.com/aditya-kshirsagar-x`,oe=[{id:1,title:`TBG Smart Campus`,type:`Web Application`,description:`A digital campus interface built for T.B.G. Polytechnic — student-facing navigation, campus resources, and dashboard views in a modern, responsive layout.`,image:`/images/projects/tbg-smart-campus.png`,tags:[`React`,`Vite`,`Tailwind CSS`],liveUrl:`https://tbg-smart-campus.vercel.app`,repoUrl:`https://github.com/aditya-kshirsagar-x/tbg-smart-campus`,backendUrl:`https://github.com/aditya-kshirsagar-x/smart-campus-backend`,highlights:[`Student-focused navigation`,`Responsive dashboard views`,`Built and deployed with Vite`]},{id:2,title:`Smart Hostel Management System — Hackathon: Logic Legends`,type:`Hackathon Project`,description:`A hostel/accommodation management platform — covering room allocation, hostel operations, and complaint & maintenance workflows for administrators — built and presented as the 'Logic Legends' hackathon submission, demonstrating rapid problem-solving and collaborative development under time constraints.`,image:`/images/projects/smart-hostel.png`,tags:[`React`,`Rapid Prototyping`,`Team Collaboration`],liveUrl:`https://umarbtec-coder.github.io/Hackathon-Logic_Legends`,repoUrl:`https://github.com/umarbtec-coder/Hackathon-Logic_Legends`,highlights:[`Room allocation workflow`,`Complaint & maintenance tracking`,`Built under hackathon time constraints`],featured:!0},{id:3,title:`Client-Server Chat Application`,type:`Academic / Technical Project`,description:`A client-server communication system demonstrating real-time messaging, multi-user handling, and socket-based networking architecture.`,image:`/images/projects/client-server-chat.png`,tags:[`Java`,`Socket Programming`,`Multithreading`],liveUrl:``,repoUrl:`https://github.com/aditya-kshirsagar-x/client-server-chat-application`,highlights:[`Real-time multi-client messaging`,`Custom server-client architecture`,`Multithreaded connection handling`]}];function se({className:e=`w-4 h-4`}){return(0,x.jsx)(`svg`,{className:`arrow ${e}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})}function ce({className:e=`w-4 h-4`}){return(0,x.jsx)(`svg`,{className:e,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,x.jsx)(`path`,{d:`M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z`})})}function le({project:e,displayNumber:t,isFirst:n}){let r=(0,b.useRef)(null),i=(0,b.useRef)(null);return(0,x.jsxs)(`div`,{className:`project-visual aspect-[16/10] md:aspect-[16/9]`,children:[(0,x.jsx)(`img`,{ref:r,src:e.image,alt:`Representative artwork for ${e.title}`,loading:n?`eager`:`lazy`,decoding:`async`,onError:()=>{r.current&&(r.current.style.display=`none`),i.current&&(i.current.style.display=`block`)},className:`absolute inset-0 h-full w-full object-cover`}),(0,x.jsx)(`div`,{ref:i,className:`visual-fallback absolute inset-0`,style:{display:`none`},"aria-hidden":`true`}),(0,x.jsx)(`div`,{className:`prism-shard`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`project-index`,"aria-hidden":`true`,children:String(t).padStart(2,`0`)}),(0,x.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0`})]})}function ue(e){(0,b.useEffect)(()=>{let t=e.current;if(!t)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=window.matchMedia(`(pointer: coarse), (hover: none)`);if(n.matches||r.matches)return;let i=null,a=null,o=null,s=()=>{if(a=null,!o||!i)return;let e=(o.clientX-i.left)/i.width,n=(o.clientY-i.top)/i.height,r=Math.min(Math.max(e,0),1),s=Math.min(Math.max(n,0),1),c=(r-.5)*6,l=(.5-s)*5;t.style.setProperty(`--rx`,`${l}deg`),t.style.setProperty(`--ry`,`${c}deg`),t.style.setProperty(`--mx`,`${r*100}%`),t.style.setProperty(`--my`,`${s*100}%`)},c=()=>{i=t.getBoundingClientRect()},l=e=>{o=e,a??=requestAnimationFrame(s)},u=()=>{a!=null&&(cancelAnimationFrame(a),a=null),o=null,i=null,t.style.setProperty(`--rx`,`0deg`),t.style.setProperty(`--ry`,`0deg`)};return t.addEventListener(`pointerenter`,c,{passive:!0}),t.addEventListener(`pointermove`,l,{passive:!0}),t.addEventListener(`pointerleave`,u,{passive:!0}),()=>{t.removeEventListener(`pointerenter`,c),t.removeEventListener(`pointermove`,l),t.removeEventListener(`pointerleave`,u),a!=null&&cancelAnimationFrame(a)}},[e])}function T({project:e,displayNumber:t,isFirst:n,reversed:r}){let i=(0,b.useRef)(null);ue(i);let a=!!e.liveUrl,o=!!e.repoUrl,s=!!e.backendUrl;return(0,x.jsx)(`article`,{ref:i,className:`project-panel grid grid-cols-1 md:grid-cols-12 gap-0 ${e.featured?`is-featured`:``} ${r?`md:[direction:rtl]`:``}`,children:(0,x.jsxs)(`div`,{className:`project-glass md:col-span-12 grid grid-cols-1 md:grid-cols-12 ${r?`[direction:ltr]`:``}`,children:[(0,x.jsx)(`div`,{className:`md:col-span-7`,children:(0,x.jsx)(le,{project:e,displayNumber:t,isFirst:n})}),(0,x.jsxs)(`div`,{className:`project-meta md:col-span-5 flex flex-col justify-center gap-5 p-8 md:p-10`,children:[e.featured&&(0,x.jsxs)(`span`,{className:`featured-badge`,children:[(0,x.jsx)(`span`,{className:`dot`,"aria-hidden":`true`}),`Hackathon`]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#9CA3AF]`,children:[(0,x.jsx)(`span`,{className:`h-px w-6 bg-white/20`}),e.type]}),(0,x.jsx)(`h3`,{className:`text-2xl md:text-[1.75rem] font-semibold text-white leading-snug`,children:e.title}),(0,x.jsx)(`p`,{className:`text-sm leading-relaxed text-[#9CA3AF]`,children:e.description}),e.highlights?.length>0&&(0,x.jsx)(`ul`,{className:`flex flex-col gap-1.5`,children:e.highlights.map(e=>(0,x.jsxs)(`li`,{className:`flex items-start gap-2 text-xs text-[#9CA3AF]`,children:[(0,x.jsx)(`span`,{className:`mt-1 h-1 w-1 rounded-full bg-[#00E5FF]/70 shrink-0`}),e]},e))}),e.tags?.length>0&&(0,x.jsx)(`div`,{className:`flex flex-wrap gap-2 pt-1`,children:e.tags.map(e=>(0,x.jsx)(`span`,{className:`tech-pill rounded-full px-3 py-1 text-[11px] text-[#9CA3AF]`,children:e},e))}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 pt-3`,children:[(0,x.jsxs)(`a`,{href:a?e.liveUrl:void 0,target:a?`_blank`:void 0,rel:a?`noopener noreferrer`:void 0,"aria-disabled":!a,tabIndex:a?0:-1,className:`action-link primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white ${a?``:`disabled`}`,children:[`Live Experience`,(0,x.jsx)(se,{})]}),(0,x.jsxs)(`a`,{href:o?e.repoUrl:void 0,target:o?`_blank`:void 0,rel:o?`noopener noreferrer`:void 0,"aria-disabled":!o,tabIndex:o?0:-1,className:`action-link repo inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] hover:text-white hover:border-white/25 transition-colors ${o?``:`disabled`}`,children:[(0,x.jsx)(ce,{}),o?`View Repository`:`Source Pending`,o&&(0,x.jsx)(se,{})]}),s&&(0,x.jsxs)(`a`,{href:e.backendUrl,target:`_blank`,rel:`noopener noreferrer`,className:`action-link secondary inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] hover:text-white hover:border-white/25 transition-colors`,children:[(0,x.jsx)(ce,{}),`View Backend`,(0,x.jsx)(se,{})]})]})]})]})})}function E(e){(0,b.useEffect)(()=>{let t=e.current;if(!t)return;let n=Array.from(t.querySelectorAll(`.reveal-item`));if(n.length===0)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){n.forEach(e=>e.classList.add(`is-visible`));return}n.forEach((e,t)=>{e.dataset.revealIndex=String(t)});let r=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;if(e.isIntersecting){let e=Number(t.dataset.revealIndex||0);t.style.transitionDelay=`${Math.min(e,4)*90}ms`,t.classList.add(`is-visible`)}else t.style.transitionDelay=`0ms`,t.classList.remove(`is-visible`)})},{threshold:.15,rootMargin:`0px 0px -8% 0px`});return n.forEach(e=>r.observe(e)),()=>r.disconnect()},[e])}function de(){let e=(0,b.useRef)(null);return E(e),(0,x.jsxs)(`section`,{id:`projects`,ref:e,className:`projects-section py-24 md:py-32 px-6`,children:[(0,x.jsx)(`style`,{children:ie}),(0,x.jsxs)(`div`,{className:`projects-atmosphere`,"aria-hidden":`true`,children:[(0,x.jsx)(`div`,{className:`projects-hairline-grid`}),(0,x.jsx)(`div`,{className:`projects-grain`})]}),(0,x.jsxs)(`div`,{className:`relative z-10 max-w-6xl mx-auto`,children:[(0,x.jsx)(`header`,{className:`mb-16 md:mb-24`,children:(0,x.jsxs)(`div`,{className:`projects-header-row`,children:[(0,x.jsxs)(`div`,{className:`max-w-2xl`,children:[(0,x.jsxs)(`div`,{className:`reveal-item flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#00E5FF] mb-6`,children:[(0,x.jsx)(`span`,{className:`h-px w-8 bg-[#00E5FF]/60`}),`02 — Selected Work`]}),(0,x.jsxs)(`h2`,{className:`reveal-item text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight`,children:[`Projects that solve`,(0,x.jsx)(`br`,{}),`real problems.`]})]}),(0,x.jsxs)(`a`,{href:ae,target:`_blank`,rel:`noopener noreferrer`,className:`reveal-item github-profile-link inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white shrink-0`,children:[(0,x.jsx)(ce,{}),`GitHub Profile`,(0,x.jsx)(se,{})]})]})}),(0,x.jsx)(`div`,{className:`flex flex-col gap-8 md:gap-10`,children:oe.map((e,t)=>(0,x.jsx)(`div`,{className:`reveal-item`,children:(0,x.jsx)(T,{project:e,displayNumber:t+1,isFirst:t===0,reversed:t%2==1})},e.id))})]})]})}var fe={email:`adityakshirsagar762060@gmail.com`,phone:`+91 7620606131`,phoneHref:`tel:+917620606131`,socials:[]},pe=`
.contact-section {
  --accent: #00e5ff;
  --accent-soft: rgba(0, 229, 255, 0.35);
  --surface: #050505;
  position: relative;
  background: var(--surface);
  overflow: clip;
}

/* Ambient atmosphere + fade into footer */
.contact-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.contact-atmosphere::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1100px;
  height: 1100px;
  transform: translate(-50%, -30%);
  background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, rgba(0, 229, 255, 0) 60%);
}

.contact-fade-out {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: linear-gradient(to bottom, rgba(5, 5, 5, 0), var(--surface));
  pointer-events: none;
}

.contact-grain {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.contact-hairline-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent);
  pointer-events: none;
}

/* Mouse-follow ambient light for the whole contact stage */
.contact-stage {
  --mx: 50%;
  --my: 40%;
  position: relative;
}

.contact-stage::before {
  content: "";
  position: absolute;
  inset: -10% -10% -10% -10%;
  background: radial-gradient(520px circle at var(--mx) var(--my), rgba(0, 229, 255, 0.06), transparent 60%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}

.contact-stage.is-active::before {
  opacity: 1;
}

/* Glass prism / orb signature visual */
.contact-orb-wrap {
  position: relative;
  pointer-events: none;
}

.contact-orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 9999px;
  background:
    radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.35), transparent 45%),
    radial-gradient(circle at 65% 70%, rgba(0, 229, 255, 0.25), transparent 55%),
    linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(0, 229, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(2px);
  box-shadow:
    0 0 80px -10px rgba(0, 229, 255, 0.25),
    inset 0 0 60px rgba(255, 255, 255, 0.04);
  animation: orb-float 9s ease-in-out infinite;
}

.contact-prism {
  position: absolute;
  width: 190px;
  height: 190px;
  top: 40%;
  left: 15%;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.14), rgba(0, 229, 255, 0.08) 45%, transparent 75%);
  clip-path: polygon(30% 0%, 100% 15%, 80% 100%, 5% 85%);
  mix-blend-mode: screen;
  animation: prism-float 11s ease-in-out infinite reverse;
}

@keyframes orb-float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-18px) translateX(8px); }
}

@keyframes prism-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(14px) rotate(3deg); }
}

/* Glass surfaces shared by info card / form */
.glass-panel {
  position: relative;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.012));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  transition: border-color 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}

.glass-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 40%);
  pointer-events: none;
}

/* Subtle 3D tilt on the form container only, paused while focused */
.tilt-panel {
  --rx: 0deg;
  --ry: 0deg;
  transform: perspective(1400px) rotateX(var(--rx)) rotateY(var(--ry));
  will-change: transform;
}

.tilt-panel.is-focused {
  --rx: 0deg;
  --ry: 0deg;
}

/* Floating contact info items */
.info-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-link:hover,
.info-link:focus-visible {
  border-color: var(--accent-soft);
  background: rgba(0, 229, 255, 0.05);
  transform: translateY(-2px);
}

.info-link .info-icon {
  transition: transform 0.35s ease;
}

.info-link:hover .info-icon,
.info-link:focus-visible .info-icon {
  transform: translateX(2px);
}

/* Status dot */
.status-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: var(--accent);
}

.status-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: var(--accent);
  opacity: 0.35;
  animation: status-pulse 2.4s ease-out infinite;
}

@keyframes status-pulse {
  0% { transform: scale(1); opacity: 0.35; }
  100% { transform: scale(2.4); opacity: 0; }
}

/* Inputs */
.field-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.field-input:hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.field-input:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.12);
}

.field-label {
  transition: color 0.3s ease;
}

.field-group:focus-within .field-label {
  color: var(--accent);
}

/* Submit button */
.submit-btn {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: linear-gradient(180deg, rgba(0, 229, 255, 0.14), rgba(0, 229, 255, 0.02));
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  border-color: var(--accent);
  box-shadow: 0 0 28px -6px var(--accent-soft);
  transform: translateY(-1px);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.submit-btn .arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.submit-btn:hover:not(:disabled) .arrow {
  transform: translateX(4px);
}

/* Copy button feedback */
.copy-btn {
  transition: color 0.3s ease, border-color 0.3s ease;
}

/* Scroll reveal */
.reveal-item {
  opacity: 0;
  transform: translateY(26px);
  filter: blur(6px);
  transition:
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Mobile: quiet the motion, keep everything visible */
@media (max-width: 768px) {
  .tilt-panel {
    transform: none !important;
  }
  .contact-stage::before {
    display: none;
  }
  .contact-orb,
  .contact-prism {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-item {
    transition: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
  .tilt-panel {
    transition: none;
    transform: none !important;
  }
  .contact-orb,
  .contact-prism {
    animation: none;
  }
  .status-dot::after {
    animation: none;
    display: none;
  }
}
`;function me({className:e=`w-5 h-5`}){return(0,x.jsx)(`svg`,{className:e,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,d:`M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z`})})}function he({className:e=`w-5 h-5`}){return(0,x.jsx)(`svg`,{className:e,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,d:`M3 5c0-1.1.9-2 2-2h2.28a1 1 0 01.98.8l.7 3.5a1 1 0 01-.5 1.08L6.6 9.53a11.5 11.5 0 007.87 7.87l1.15-1.86a1 1 0 011.08-.5l3.5.7a1 1 0 01.8.98V19a2 2 0 01-2 2h-1C10.7 21 3 13.3 3 4V5z`})})}function D({className:e=`w-4 h-4`}){return(0,x.jsxs)(`svg`,{className:e,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,x.jsx)(`rect`,{x:`9`,y:`9`,width:`11`,height:`11`,rx:`2`,strokeWidth:`1.6`}),(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,d:`M5 15V5a2 2 0 012-2h10`})]})}function ge({className:e=`w-4 h-4`}){return(0,x.jsx)(`svg`,{className:e,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M5 13l4 4L19 7`})})}function _e({className:e=`w-4 h-4`}){return(0,x.jsx)(`svg`,{className:`arrow ${e}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,x.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})}function ve(){let e=(0,b.useRef)(null),t=(0,b.useRef)(null),n=(0,b.useRef)(null),r=(0,b.useRef)(null),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(`idle`),[c,l]=(0,b.useState)({name:``,email:``,subject:``,message:``}),[u,d]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let t=e.current?.querySelectorAll(`.reveal-item`);if(!t||t.length===0)return;let n=new IntersectionObserver(e=>{e.forEach((e,t)=>{e.isIntersecting&&(e.target.style.transitionDelay=`${Math.min(t,5)*90}ms`,e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.15});return t.forEach(e=>n.observe(e)),()=>n.disconnect()},[]),(0,b.useEffect)(()=>{let e=t.current;if(!e)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=window.matchMedia(`(pointer: coarse)`).matches;if(n||i)return;let a=t=>{r.current&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width*100,i=(t.clientY-n.top)/n.height*100;e.style.setProperty(`--mx`,`${r}%`),e.style.setProperty(`--my`,`${i}%`)})},o=()=>e.classList.add(`is-active`),s=()=>e.classList.remove(`is-active`);return e.addEventListener(`mousemove`,a),e.addEventListener(`mouseenter`,o),e.addEventListener(`mouseleave`,s),()=>{e.removeEventListener(`mousemove`,a),e.removeEventListener(`mouseenter`,o),e.removeEventListener(`mouseleave`,s),r.current&&cancelAnimationFrame(r.current)}},[]),(0,b.useEffect)(()=>{let e=n.current;if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=window.matchMedia(`(pointer: coarse)`).matches;if(t||r)return;let i=t=>{if(u)return;let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width,i=(t.clientY-n.top)/n.height;e.style.setProperty(`--ry`,`${(r-.5)*3.5}deg`),e.style.setProperty(`--rx`,`${(.5-i)*2.5}deg`)},a=()=>{e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)};return e.addEventListener(`mousemove`,i),e.addEventListener(`mouseleave`,a),()=>{e.removeEventListener(`mousemove`,i),e.removeEventListener(`mouseleave`,a)}},[u]);let f=async()=>{try{await navigator.clipboard.writeText(fe.email),a(!0),setTimeout(()=>a(!1),2e3)}catch{}},p=e=>t=>l(n=>({...n,[e]:t.target.value}));return(0,x.jsxs)(`section`,{id:`contact`,ref:e,className:`contact-section py-24 md:py-32 px-6`,children:[(0,x.jsx)(`style`,{children:pe}),(0,x.jsxs)(`div`,{className:`contact-atmosphere`,"aria-hidden":`true`,children:[(0,x.jsx)(`div`,{className:`contact-hairline-grid`}),(0,x.jsx)(`div`,{className:`contact-grain`})]}),(0,x.jsxs)(`div`,{className:`relative z-10 max-w-6xl mx-auto`,children:[(0,x.jsxs)(`header`,{className:`mb-16 md:mb-20 max-w-2xl`,children:[(0,x.jsxs)(`div`,{className:`reveal-item flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#00E5FF] mb-6`,children:[(0,x.jsx)(`span`,{className:`h-px w-8 bg-[#00E5FF]/60`}),`05 — Contact`]}),(0,x.jsxs)(`h2`,{className:`reveal-item text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5`,children:[`Let's build`,(0,x.jsx)(`br`,{}),`something meaningful.`]}),(0,x.jsx)(`p`,{className:`reveal-item text-sm md:text-base text-[#9CA3AF] leading-relaxed`,children:`Have a project, internship opportunity, or technical collaboration in mind? I'd be glad to hear from you.`})]}),(0,x.jsxs)(`div`,{ref:t,className:`contact-stage grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,x.jsxs)(`div`,{className:`reveal-item lg:col-span-5 relative`,children:[(0,x.jsxs)(`div`,{className:`contact-orb-wrap absolute inset-0 hidden lg:block`,"aria-hidden":`true`,children:[(0,x.jsx)(`div`,{className:`contact-orb`,style:{top:`-40px`,right:`-30px`}}),(0,x.jsx)(`div`,{className:`contact-prism`})]}),(0,x.jsxs)(`div`,{className:`glass-panel relative p-8 md:p-10 flex flex-col gap-6`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 text-xs tracking-widest uppercase text-[#9CA3AF]`,children:[(0,x.jsx)(`span`,{className:`status-dot`}),`Available for Opportunities`]}),(0,x.jsx)(`p`,{className:`text-sm text-[#9CA3AF] leading-relaxed`,children:`Open to internships, freelance work, and full-stack collaboration.`}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-3 mt-2`,children:[(0,x.jsxs)(`a`,{href:`mailto:${fe.email}`,className:`info-link rounded-xl px-5 py-4`,children:[(0,x.jsx)(me,{className:`info-icon w-5 h-5 text-[#00E5FF] shrink-0`}),(0,x.jsxs)(`div`,{className:`flex flex-col min-w-0`,children:[(0,x.jsx)(`span`,{className:`text-[11px] uppercase tracking-widest text-[#9CA3AF]`,children:`Email`}),(0,x.jsx)(`span`,{className:`text-sm text-white truncate`,children:fe.email})]})]}),(0,x.jsxs)(`a`,{href:fe.phoneHref,className:`info-link rounded-xl px-5 py-4`,children:[(0,x.jsx)(he,{className:`info-icon w-5 h-5 text-[#00E5FF] shrink-0`}),(0,x.jsxs)(`div`,{className:`flex flex-col`,children:[(0,x.jsx)(`span`,{className:`text-[11px] uppercase tracking-widest text-[#9CA3AF]`,children:`Phone`}),(0,x.jsx)(`span`,{className:`text-sm text-white`,children:fe.phone})]})]}),(0,x.jsxs)(`button`,{type:`button`,onClick:f,className:`copy-btn self-start inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#00E5FF] mt-1 px-1`,"aria-live":`polite`,children:[i?(0,x.jsx)(ge,{className:`w-4 h-4 text-[#00E5FF]`}):(0,x.jsx)(D,{}),i?`Copied!`:`Copy Email`]})]}),fe.socials.length>0&&(0,x.jsx)(`div`,{className:`flex flex-wrap gap-3 pt-4 border-t border-white/10 mt-2`,children:fe.socials.map(e=>(0,x.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors`,children:e.label},e.label))})]})]}),(0,x.jsx)(`div`,{className:`reveal-item lg:col-span-7`,children:(0,x.jsxs)(`form`,{ref:n,onSubmit:async e=>{e.preventDefault(),s(`sending`),await new Promise(e=>setTimeout(e,900)),s(`ready`),setTimeout(()=>s(`idle`),5e3)},onFocus:()=>d(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||d(!1)},className:`glass-panel tilt-panel ${u?`is-focused`:``} p-8 md:p-10 flex flex-col gap-5`,children:[(0,x.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-5`,children:[(0,x.jsxs)(`div`,{className:`field-group`,children:[(0,x.jsx)(`label`,{htmlFor:`contact-name`,className:`field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2`,children:`Name`}),(0,x.jsx)(`input`,{id:`contact-name`,type:`text`,required:!0,placeholder:`Your name`,value:c.name,onChange:p(`name`),className:`field-input px-4 py-3 text-sm`})]}),(0,x.jsxs)(`div`,{className:`field-group`,children:[(0,x.jsx)(`label`,{htmlFor:`contact-email`,className:`field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2`,children:`Email`}),(0,x.jsx)(`input`,{id:`contact-email`,type:`email`,required:!0,placeholder:`you@example.com`,value:c.email,onChange:p(`email`),className:`field-input px-4 py-3 text-sm`})]})]}),(0,x.jsxs)(`div`,{className:`field-group`,children:[(0,x.jsx)(`label`,{htmlFor:`contact-subject`,className:`field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2`,children:`Subject`}),(0,x.jsx)(`input`,{id:`contact-subject`,type:`text`,placeholder:`Project / Opportunity`,value:c.subject,onChange:p(`subject`),className:`field-input px-4 py-3 text-sm`})]}),(0,x.jsxs)(`div`,{className:`field-group`,children:[(0,x.jsx)(`label`,{htmlFor:`contact-message`,className:`field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2`,children:`Message`}),(0,x.jsx)(`textarea`,{id:`contact-message`,rows:`5`,required:!0,placeholder:`Tell me about your idea...`,value:c.message,onChange:p(`message`),className:`field-input px-4 py-3 text-sm resize-none`})]}),(0,x.jsxs)(`button`,{type:`submit`,disabled:o===`sending`,className:`submit-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white mt-2`,children:[o===`sending`?`Sending...`:`Send Message`,o===`idle`&&(0,x.jsx)(_e,{})]}),(0,x.jsx)(`p`,{className:`text-xs text-[#9CA3AF] leading-relaxed`,role:`status`,"aria-live":`polite`,children:o===`ready`?`Message ready — this form isn't connected to a backend yet, so please reach out directly by email or phone for now.`:`Prefer a direct line? Use the email or phone above — they connect instantly.`})]})})]})]}),(0,x.jsx)(`div`,{className:`contact-fade-out`,"aria-hidden":`true`})]})}var ye=[`React`,`Node.js`,`Express`,`MongoDB`,`JavaScript`],be=[{code:`01`,title:`Frontend`,description:`Building responsive, interactive interfaces with modern component architecture.`,items:[{name:`React.js`,note:`Component-based UI`},{name:`JavaScript`,note:`Core scripting language`},{name:`HTML5`,note:`Semantic markup`},{name:`CSS3`,note:`Styling & layout`},{name:`Tailwind CSS`,note:`Utility-first styling`},{name:`Vite`,note:`Build tooling`}]},{code:`02`,title:`Backend`,description:`Designing server logic, routing, and APIs that connect interfaces to data.`,items:[{name:`Node.js`,note:`JS runtime`},{name:`Express.js`,note:`Server framework`},{name:`REST APIs`,note:`Data endpoints`},{name:`Authentication`,note:`Sessions & access`},{name:`Server Routing`,note:`Request handling`}]},{code:`03`,title:`Database & Systems`,description:`Structuring data and client-server communication for reliable applications.`,items:[{name:`MongoDB`,note:`NoSQL database`},{name:`Database Management`,note:`Schema & queries`},{name:`Client-Server Architecture`,note:`App communication model`}]},{code:`04`,title:`Tools & Deployment`,description:`Managing version control, testing, and shipping projects to production.`,items:[{name:`Git`,note:`Version control`},{name:`GitHub`,note:`Code hosting`},{name:`Vercel`,note:`Deployment`},{name:`VS Code`,note:`Editor`},{name:`Postman`,note:`API testing`}]}],xe=[{id:`client-server-chat`,title:`Client-Server Chat Application`,type:`Real-time systems`,summary:`A real-time messaging application built on a multithreaded client-server model, handling concurrent connections over a socket-based network layer.`,stack:[`Java`,`Client-Server Architecture`,`Networking`,`Multithreading`,`Real-time Communication`],image:`/images/projects/client-server-chat.png`,link:``,featured:!0,caseStudy:{problem:`Multiple users needed to exchange messages at the same time, over the network, without one connection blocking or slowing down another.`,approach:`Designed a client-server model in Java where each incoming connection is handled on its own thread, communicating over a socket-based network layer so messages move between clients in real time.`,highlights:[`Multithreaded connection handling, one thread per client`,`Socket-based network layer for real-time delivery`,`Client-server protocol for message routing between users`],outcome:`Demonstrates the ability to design a networked system from first principles — concurrency, sockets, and protocol design — without relying on a higher-level real-time framework.`}},{id:`smart-campus`,title:`Smart Student Campus Dashboard`,type:`Dashboard`,summary:`A campus information dashboard built with React and Vite, presenting student data through a responsive interface.`,stack:[`React`,`JavaScript`,`Responsive UI`,`Dashboard Architecture`,`Vite`],image:`/images/projects/smart-campus.png`,link:``,caseStudy:{problem:`Campus and student information needed a single, readable interface instead of being scattered across disconnected views.`,approach:`Built a component-driven dashboard in React, using Vite for fast local iteration, and structured the layout to stay legible as the amount of student data on screen grows.`,highlights:[`Component-based dashboard architecture`,`Responsive layout that adapts across screen sizes`,`Vite-powered build for fast development iteration`],outcome:`Demonstrates frontend architecture skills for data-dense interfaces — organizing information so it stays usable, not just displayed.`}},{id:`smart-hostel`,title:`Smart Hostel Management System`,type:`Full-stack platform`,summary:`A full-stack management system for hostel operations, pairing a React interface with a database-backed dashboard.`,stack:[`React`,`Full-Stack Architecture`,`Database`,`Management Dashboard`],image:`/images/projects/smart-hostel.png`,link:``,caseStudy:{problem:`Hostel operations needed a centralized way to manage records, rather than tracking them manually or across disconnected tools.`,approach:`Paired a React front end with a database-backed dashboard, connecting the interface directly to persistent data so records stay consistent across views.`,highlights:[`Full-stack architecture connecting UI to a database layer`,`Management dashboard for day-to-day operational data`,`Schema and query design behind the interface`],outcome:`Demonstrates end-to-end full-stack development — from data modeling through to the interface someone actually uses.`}},{id:`portfolio-elearning`,title:`Portfolio / E-Learning Platform`,type:`Content platform`,summary:`A content-driven platform structured around courses, built with React and responsive design principles.`,stack:[`React`,`JavaScript`,`Responsive Design`,`Course & Content Architecture`],image:`/images/projects/portfolio.png`,link:``,caseStudy:{problem:`Course-style content needed a structure that stays organized and easy to navigate as more material is added.`,approach:`Built the platform in React around a course-and-content architecture, applying responsive design principles so the same structure holds up on any device.`,highlights:[`Content and course data modeled as reusable structures`,`Responsive component layout throughout`,`Navigation built around how course content is organized`],outcome:`Demonstrates content-driven application structure — modeling real content, not just static pages.`}}];function Se(){let[e,t]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);t(e.matches);let n=e=>t(e.matches);return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[]),e}function Ce(){let[e,t]=(0,b.useState)(()=>typeof window>`u`?!1:window.matchMedia(`(pointer: coarse)`).matches);return(0,b.useEffect)(()=>{let e=window.matchMedia(`(pointer: coarse)`);t(e.matches);let n=e=>t(e.matches);return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[]),e}function we({tilt:e=!0,maxTilt:t=6,disabled:n=!1}={}){let r=(0,b.useRef)(null),i=(0,b.useRef)(null),a=(0,b.useRef)(null),o=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let s=r.current;if(!s||n)return;let c=()=>{a.current=null;let n=i.current,r=o.current;if(!n||!r)return;let c=Math.min(Math.max((r.clientX-n.left)/n.width,0),1),l=Math.min(Math.max((r.clientY-n.top)/n.height,0),1);if(s.style.setProperty(`--mx`,`${c*100}%`),s.style.setProperty(`--my`,`${l*100}%`),e){let e=(c-.5)*t*2,n=(.5-l)*t*2;s.style.setProperty(`--rx`,`${n}deg`),s.style.setProperty(`--ry`,`${e}deg`)}},l=()=>{i.current=s.getBoundingClientRect()},u=e=>{o.current=e,a.current??=requestAnimationFrame(c)},d=()=>{a.current!=null&&(cancelAnimationFrame(a.current),a.current=null),o.current=null,i.current=null,s.style.setProperty(`--rx`,`0deg`),s.style.setProperty(`--ry`,`0deg`),s.style.setProperty(`--mx`,`50%`),s.style.setProperty(`--my`,`50%`)};return s.addEventListener(`pointerenter`,l,{passive:!0}),s.addEventListener(`pointermove`,u,{passive:!0}),s.addEventListener(`pointerleave`,d,{passive:!0}),()=>{s.removeEventListener(`pointerenter`,l),s.removeEventListener(`pointermove`,u),s.removeEventListener(`pointerleave`,d),a.current!=null&&cancelAnimationFrame(a.current)}},[e,t,n]),r}function Te(e=!1){let t=(0,b.useRef)(null),[n,r]=(0,b.useState)(e);return(0,b.useEffect)(()=>{if(e){r(!0);return}let n=t.current;if(!n)return;let i=new IntersectionObserver(([e])=>{r(e.isIntersecting)},{threshold:.15,rootMargin:`0px 0px -8% 0px`});return i.observe(n),()=>i.disconnect()},[e]),[t,n]}function Ee(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:`corner corner-tl`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`corner corner-tr`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`corner corner-bl`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`corner corner-br`,"aria-hidden":`true`})]})}function De({name:e,note:t}){return(0,x.jsxs)(`button`,{type:`button`,className:`tech-tag`,"aria-label":`${e}: ${t}`,children:[(0,x.jsx)(`span`,{children:e}),(0,x.jsx)(`span`,{className:`tech-tag-note`,"aria-hidden":`true`,children:t})]})}function Oe({group:e,index:t,interactionsDisabled:n}){let r=we({tilt:!0,maxTilt:6,disabled:n});return(0,x.jsxs)(`article`,{ref:r,className:`skill-card group`,style:{transitionDelay:`${t*70}ms`},children:[(0,x.jsx)(Ee,{}),(0,x.jsx)(`div`,{className:`skill-card-spotlight`,"aria-hidden":`true`}),(0,x.jsxs)(`div`,{className:`skill-card-head`,children:[(0,x.jsx)(`span`,{className:`skill-card-code`,children:e.code}),(0,x.jsx)(`h3`,{className:`skill-card-title`,children:e.title})]}),(0,x.jsx)(`p`,{className:`skill-card-desc`,children:e.description}),(0,x.jsx)(`ul`,{className:`skill-card-list`,role:`list`,children:e.items.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(De,{name:e.name,note:e.note})},e.name))}),(0,x.jsxs)(`div`,{className:`skill-card-foot`,children:[(0,x.jsxs)(`span`,{children:[`CATEGORY `,e.code]}),(0,x.jsxs)(`span`,{className:`skill-card-signal`,children:[(0,x.jsx)(`span`,{className:`signal-dot`,"aria-hidden":`true`}),`ACTIVE`]})]})]})}function ke(){return(0,x.jsxs)(`svg`,{viewBox:`0 0 200 130`,width:`100%`,height:`100%`,focusable:`false`,"aria-hidden":`true`,children:[(0,x.jsxs)(`g`,{stroke:`rgba(255,255,255,0.22)`,strokeWidth:`1`,fill:`none`,children:[(0,x.jsx)(`line`,{x1:`100`,y1:`65`,x2:`34`,y2:`24`}),(0,x.jsx)(`line`,{x1:`100`,y1:`65`,x2:`34`,y2:`106`}),(0,x.jsx)(`line`,{x1:`100`,y1:`65`,x2:`166`,y2:`24`}),(0,x.jsx)(`line`,{x1:`100`,y1:`65`,x2:`166`,y2:`106`,strokeDasharray:`3 4`})]}),(0,x.jsx)(`circle`,{cx:`100`,cy:`65`,r:`11`,fill:`rgba(255,255,255,0.06)`,stroke:`rgba(255,255,255,0.42)`,strokeWidth:`1.2`}),(0,x.jsx)(`circle`,{cx:`100`,cy:`65`,r:`3.2`,fill:`rgba(255,255,255,0.55)`}),(0,x.jsx)(`circle`,{cx:`34`,cy:`24`,r:`5`,fill:`rgba(255,255,255,0.32)`}),(0,x.jsx)(`circle`,{cx:`34`,cy:`106`,r:`5`,fill:`rgba(255,255,255,0.32)`}),(0,x.jsx)(`circle`,{cx:`166`,cy:`24`,r:`5`,fill:`rgba(255,255,255,0.32)`}),(0,x.jsx)(`circle`,{className:`preview-accent`,cx:`166`,cy:`106`,r:`5`,fill:`#7fe3d9`})]})}function Ae(){return(0,x.jsxs)(`svg`,{viewBox:`0 0 200 130`,width:`100%`,height:`100%`,focusable:`false`,"aria-hidden":`true`,children:[(0,x.jsx)(`rect`,{x:`18`,y:`18`,width:`70`,height:`42`,rx:`3`,stroke:`rgba(255,255,255,0.24)`,fill:`rgba(255,255,255,0.035)`}),(0,x.jsx)(`rect`,{x:`98`,y:`18`,width:`84`,height:`18`,rx:`3`,stroke:`rgba(255,255,255,0.2)`,fill:`rgba(255,255,255,0.03)`}),(0,x.jsx)(`rect`,{className:`preview-accent`,x:`98`,y:`42`,width:`84`,height:`18`,rx:`3`,stroke:`rgba(127,227,217,0.5)`,fill:`rgba(127,227,217,0.06)`}),(0,x.jsx)(`rect`,{x:`18`,y:`70`,width:`164`,height:`42`,rx:`3`,stroke:`rgba(255,255,255,0.18)`,fill:`rgba(255,255,255,0.025)`}),(0,x.jsx)(`line`,{x1:`30`,y1:`91`,x2:`66`,y2:`91`,stroke:`rgba(255,255,255,0.3)`}),(0,x.jsx)(`line`,{x1:`76`,y1:`91`,x2:`102`,y2:`91`,stroke:`rgba(255,255,255,0.18)`}),(0,x.jsx)(`line`,{x1:`112`,y1:`91`,x2:`150`,y2:`91`,stroke:`rgba(255,255,255,0.18)`})]})}function je(){return(0,x.jsxs)(`svg`,{viewBox:`0 0 200 130`,width:`100%`,height:`100%`,focusable:`false`,"aria-hidden":`true`,children:[(0,x.jsx)(`ellipse`,{cx:`44`,cy:`30`,rx:`24`,ry:`8`,stroke:`rgba(255,255,255,0.32)`,fill:`rgba(255,255,255,0.04)`}),(0,x.jsx)(`path`,{d:`M20 30 v40 a24 8 0 0 0 48 0 v-40`,stroke:`rgba(255,255,255,0.24)`,fill:`rgba(255,255,255,0.02)`}),(0,x.jsx)(`line`,{x1:`20`,y1:`50`,x2:`68`,y2:`50`,stroke:`rgba(255,255,255,0.15)`}),(0,x.jsxs)(`g`,{stroke:`rgba(255,255,255,0.22)`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`96`,y:`20`,width:`86`,height:`13`,rx:`2`}),(0,x.jsx)(`rect`,{x:`96`,y:`40`,width:`86`,height:`13`,rx:`2`}),(0,x.jsx)(`rect`,{className:`preview-accent`,x:`96`,y:`60`,width:`58`,height:`13`,rx:`2`,stroke:`rgba(127,227,217,0.55)`})]})]})}function Me(){return(0,x.jsxs)(`svg`,{viewBox:`0 0 200 130`,width:`100%`,height:`100%`,focusable:`false`,"aria-hidden":`true`,children:[(0,x.jsx)(`rect`,{x:`18`,y:`18`,width:`164`,height:`26`,rx:`3`,stroke:`rgba(255,255,255,0.26)`,fill:`rgba(255,255,255,0.035)`}),(0,x.jsx)(`rect`,{x:`18`,y:`54`,width:`102`,height:`20`,rx:`3`,stroke:`rgba(255,255,255,0.2)`,fill:`rgba(255,255,255,0.03)`}),(0,x.jsx)(`rect`,{className:`preview-accent`,x:`128`,y:`54`,width:`54`,height:`20`,rx:`3`,stroke:`rgba(127,227,217,0.5)`,fill:`rgba(127,227,217,0.06)`}),(0,x.jsx)(`rect`,{x:`18`,y:`84`,width:`164`,height:`28`,rx:`3`,stroke:`rgba(255,255,255,0.16)`,fill:`rgba(255,255,255,0.02)`})]})}var Ne={"client-server-chat":ke,"smart-campus":Ae,"smart-hostel":je,"portfolio-elearning":Me};function Pe({project:e,label:t}){let n=Ne[e.id]||ke;return(0,x.jsxs)(`div`,{className:`project-preview-fallback`,role:`img`,"aria-label":t,children:[(0,x.jsx)(`div`,{className:`project-preview-graphic`,children:(0,x.jsx)(n,{})}),(0,x.jsxs)(`div`,{className:`project-preview-meta`,"aria-hidden":`true`,children:[(0,x.jsxs)(`div`,{className:`project-preview-toprow`,children:[(0,x.jsx)(`span`,{className:`project-preview-kicker`,children:`Project Preview`}),(0,x.jsxs)(`span`,{className:`project-preview-status`,children:[(0,x.jsx)(`span`,{className:`project-preview-dot`}),`System`]})]}),(0,x.jsx)(`h5`,{className:`project-preview-title`,children:e.title}),(0,x.jsxs)(`div`,{className:`project-preview-subrow`,children:[(0,x.jsx)(`span`,{className:`project-preview-id`,children:e.id}),e.stack.slice(0,2).map(e=>(0,x.jsx)(`span`,{className:`project-preview-tag`,children:e},e))]})]})]})}function Fe({image:e,alt:t,project:n}){let[r,i]=(0,b.useState)(!1);return r||!e?(0,x.jsx)(Pe,{project:n,label:`Representational technical preview for ${n.title}, ${n.type}`}):(0,x.jsx)(`img`,{src:e,alt:t,loading:`lazy`,className:`project-image`,onError:()=>i(!0)})}function Ie(){return(0,x.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`12`,height:`12`,"aria-hidden":`true`,className:`case-study-chevron`,children:(0,x.jsx)(`path`,{d:`M4 6l4 4 4-4`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Le({id:e,open:t,caseStudy:n}){return(0,x.jsx)(`div`,{id:e,className:`case-study-collapse${t?` is-open`:``}`,"aria-hidden":!t,children:(0,x.jsx)(`div`,{className:`case-study-collapse-inner`,children:(0,x.jsxs)(`div`,{className:`case-study-grid`,children:[(0,x.jsxs)(`div`,{className:`case-study-item`,children:[(0,x.jsx)(`span`,{className:`case-study-label`,children:`Problem`}),(0,x.jsx)(`p`,{children:n.problem})]}),(0,x.jsxs)(`div`,{className:`case-study-item`,children:[(0,x.jsx)(`span`,{className:`case-study-label`,children:`Approach`}),(0,x.jsx)(`p`,{children:n.approach})]}),(0,x.jsxs)(`div`,{className:`case-study-item`,children:[(0,x.jsx)(`span`,{className:`case-study-label`,children:`Key implementation`}),(0,x.jsx)(`ul`,{role:`list`,children:n.highlights.map(e=>(0,x.jsx)(`li`,{children:e},e))})]}),(0,x.jsxs)(`div`,{className:`case-study-item`,children:[(0,x.jsx)(`span`,{className:`case-study-label`,children:`Outcome`}),(0,x.jsx)(`p`,{children:n.outcome})]})]})})})}function Re({project:e,index:t,interactionsDisabled:n}){let r=we({tilt:!0,maxTilt:4,disabled:n}),[i,a]=(0,b.useState)(!1),o=`${e.id}-case-study`;return(0,x.jsxs)(`article`,{ref:r,className:`project-card group${e.featured?` project-card-featured`:``}`,style:{transitionDelay:`${t*90}ms`},children:[(0,x.jsxs)(`div`,{className:`project-media`,children:[(0,x.jsx)(Fe,{image:e.image,alt:`Screenshot of the ${e.title} interface`,project:e}),(0,x.jsx)(`div`,{className:`project-media-overlay`,"aria-hidden":`true`}),e.type&&(0,x.jsx)(`span`,{className:`project-media-type`,children:e.type})]}),(0,x.jsxs)(`div`,{className:`project-body`,children:[(0,x.jsx)(`h4`,{className:`project-title`,children:e.title}),(0,x.jsx)(`p`,{className:`project-summary`,children:e.summary}),(0,x.jsx)(`ul`,{className:`project-stack`,role:`list`,children:e.stack.map(e=>(0,x.jsx)(`li`,{children:e},e))}),(0,x.jsxs)(`div`,{className:`project-foot`,children:[(0,x.jsxs)(`button`,{type:`button`,className:`case-study-toggle${i?` is-open`:``}`,"aria-expanded":i,"aria-controls":o,onClick:()=>a(e=>!e),children:[(0,x.jsx)(`span`,{children:i?`Hide case study`:`View case study`}),(0,x.jsx)(Ie,{})]}),e.link&&(0,x.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,className:`project-live-link`,children:[(0,x.jsx)(`span`,{children:`Live`}),(0,x.jsx)(`span`,{className:`project-link-arrow`,"aria-hidden":`true`,children:`→`})]})]}),(0,x.jsx)(Le,{id:o,open:i,caseStudy:e.caseStudy})]})]})}function ze(){let e=Se(),t=Ce(),n=e||t,[r,i]=Te(e),[a,o]=Te(e),[s,c]=Te(e);return(0,x.jsxs)(`section`,{id:`skills`,className:`skills-section`,"aria-labelledby":`skills-heading`,children:[(0,x.jsxs)(`div`,{className:`skills-container`,children:[(0,x.jsxs)(`header`,{ref:r,className:`skills-header reveal${i?` is-visible`:``}`,children:[(0,x.jsx)(`p`,{className:`skills-eyebrow`,children:`01 — Expertise`}),(0,x.jsx)(`h2`,{id:`skills-heading`,className:`skills-heading`,children:`Tools I Build With`}),(0,x.jsx)(`p`,{className:`skills-subtitle`,children:`The technologies I use to design, build, and ship full-stack web applications — from interactive interfaces to the servers and databases running behind them.`}),(0,x.jsx)(`ul`,{className:`core-stack`,role:`list`,"aria-label":`Core technology stack`,children:ye.map((e,t)=>(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`span`,{children:e}),t<ye.length-1&&(0,x.jsx)(`span`,{className:`core-stack-sep`,"aria-hidden":`true`,children:`/`})]},e))})]}),(0,x.jsx)(`div`,{ref:a,className:`skills-grid reveal${o?` is-visible`:``}`,children:be.map((e,t)=>(0,x.jsx)(Oe,{group:e,index:t,interactionsDisabled:n},e.code))}),(0,x.jsxs)(`div`,{className:`projects-header`,children:[(0,x.jsx)(`p`,{className:`skills-eyebrow`,children:`02 — Selected Work`}),(0,x.jsx)(`h3`,{className:`projects-heading`,children:`Selected Technical Work`}),(0,x.jsx)(`p`,{className:`skills-subtitle`,children:`A few applications I've built, spanning real-time systems, dashboards, and full-stack platforms.`})]}),(0,x.jsx)(`div`,{ref:s,className:`projects-grid reveal${c?` is-visible`:``}`,children:xe.map((e,t)=>(0,x.jsx)(Re,{project:e,index:t,interactionsDisabled:n},e.id))})]}),(0,x.jsx)(`style`,{children:`
                .skills-section {
                    position: relative;
                    background: #050505;
                    color: #ffffff;
                    padding: 7rem 1.5rem;
                    overflow: hidden;
                    isolation: isolate;
                }

                /* ---------- quiet static atmosphere (no repaint loop, no masking
                   of real content — lives entirely behind everything on its own layer) ---------- */

                .skills-section::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                    background:
                        radial-gradient(circle 560px at 50% -10%, rgba(255, 255, 255, 0.05), transparent 62%),
                        radial-gradient(circle 480px at 108% 112%, rgba(255, 255, 255, 0.03), transparent 65%),
                        linear-gradient(to right, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
                    background-size: auto, auto, 64px 64px, 64px 64px;
                    -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 20%, black, transparent 75%);
                    mask-image: radial-gradient(ellipse 85% 65% at 50% 20%, black, transparent 75%);
                }

                .skills-container {
                    position: relative;
                    z-index: 1;
                    max-width: 80rem;
                    margin: 0 auto;
                }

                /* ---------- header ---------- */

                .skills-eyebrow {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.72rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: #7fe3d9;
                    margin-bottom: 1.1rem;
                    opacity: 0.85;
                }

                .skills-heading,
                .projects-heading {
                    font-size: clamp(2.25rem, 5vw, 3.75rem);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.05;
                    margin-bottom: 1.25rem;
                }

                .projects-heading {
                    font-size: clamp(1.75rem, 3.2vw, 2.5rem);
                    margin-bottom: 0.75rem;
                }

                .skills-subtitle {
                    max-width: 38rem;
                    color: #9ca3af;
                    font-size: 1rem;
                    line-height: 1.7;
                }

                .core-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-top: 2.25rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.8rem;
                    letter-spacing: 0.06em;
                    color: #ffffff;
                }

                .core-stack li {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    transition: color 0.25s ease;
                }

                .core-stack li:hover {
                    color: #7fe3d9;
                }

                .core-stack-sep {
                    color: #7fe3d9;
                    opacity: 0.5;
                }

                .projects-header {
                    margin-top: 6rem;
                    margin-bottom: 3rem;
                }

                /* ---------------------------------------------------------------------
                   SCROLL REVEAL — fully reversible, no flicker
                   ---------------------------------------------------------------------
                   The JSX toggles .is-visible on .reveal based on
                   entry.isIntersecting directly (see useRevealOnScroll), so it
                   naturally flips both ways — scroll down reveals, scroll up reverses,
                   with zero extra logic here. Because this uses plain CSS transitions
                   (never animation / animation-fill-mode: forwards), the reverse
                   is smooth and automatic.

                   Each child gets a tiny built-in stagger via nth-child so cards enter
                   as a wave rather than all at once. The JSX also sets an inline
                   transition-delay per card (index * 70ms / 90ms) — inline style
                   always wins over a stylesheet rule at equal specificity, so this
                   nth-child stagger is just a safe fallback for any reveal group that
                   doesn't set its own delay.
                   ------------------------------------------------------------------- */

                .reveal > * {
                    opacity: 0;
                    transform: perspective(900px) translate3d(0, 28px, 0) scale(0.97) rotateX(3deg);
                    transform-origin: 50% 100%;
                    transition:
                        opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                    backface-visibility: hidden;
                    will-change: opacity, transform;
                }

                .reveal > *:nth-child(1) { transition-delay: 0ms; }
                .reveal > *:nth-child(2) { transition-delay: 80ms; }
                .reveal > *:nth-child(3) { transition-delay: 160ms; }
                .reveal > *:nth-child(4) { transition-delay: 240ms; }
                .reveal > *:nth-child(n+5) { transition-delay: 300ms; }

                .reveal.is-visible > * {
                    opacity: 1;
                    transform: perspective(900px) translate3d(0, 0, 0) scale(1) rotateX(0deg);
                }

                /* ---------- skill grid / cards ---------- */

                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                }

                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }
                }

                .skill-card {
                    --rx: 0deg;
                    --ry: 0deg;
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    padding: 2rem;
                    border-radius: 1.1rem;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.016));
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 20px 50px -25px rgba(0, 0, 0, 0.7);
                    transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
                    transform-style: preserve-3d;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                            border-color 0.4s ease,
                                            box-shadow 0.4s ease;
                    overflow: hidden;
                }

                @supports not (backdrop-filter: blur(1px)) {
                    .skill-card {
                        background: linear-gradient(180deg, rgba(15, 16, 17, 0.95), rgba(9, 10, 11, 0.93));
                    }
                }

                /* thin glass edge highlight — static, decorative, no animation */
                .skill-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(155deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 40%);
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    opacity: 0.6;
                }

                /* liquid pointer light — the real .skill-card-spotlight DOM node the
                   JSX renders, driven purely by --mx/--my. Neutral silver, not blue.
                   Opacity/transform only. */
                .skill-card-spotlight {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(320px circle at var(--mx) var(--my), rgba(255, 255, 255, 0.07), transparent 62%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .skill-card:hover,
                .skill-card:focus-within {
                    border-color: rgba(255, 255, 255, 0.22);
                    box-shadow: 0 34px 64px -28px rgba(0, 0, 0, 0.85);
                    will-change: transform;
                    transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-6px) scale(1.015) translate3d(0, 0, 0);
                }

                .skill-card:hover .skill-card-spotlight,
                .skill-card:focus-within .skill-card-spotlight {
                    opacity: 1;
                }

                .skill-card-head {
                    display: flex;
                    align-items: baseline;
                    gap: 0.85rem;
                    margin-bottom: 0.75rem;
                    transform: translateZ(16px);
                }

                .skill-card-code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.85rem;
                    color: #7fe3d9;
                    letter-spacing: 0.05em;
                    opacity: 0.9;
                }

                .skill-card-title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }

                .skill-card-desc {
                    position: relative;
                    color: #9ca3af;
                    font-size: 0.92rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    max-width: 26rem;
                    transform: translateZ(12px);
                }

                .skill-card-list {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-bottom: 1.75rem;
                    transform: translateZ(10px);
                }

                .skill-card-foot {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.68rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #6b7280;
                }

                .skill-card-signal {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #7fe3d9;
                }

                .signal-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 999px;
                    background: #7fe3d9;
                    animation: pulse-dot 2.2s ease-in-out infinite;
                }

                /* lightweight pulse — opacity + transform only, no shadow expansion */
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.45; transform: scale(0.82); }
                }

                /* corner brackets — the section's recurring signature detail;
                   this is the one place a tiny accent signal is welcome */

                .corner {
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border-color: rgba(255, 255, 255, 0.16);
                    opacity: 0.5;
                    transition: opacity 0.35s ease, border-color 0.35s ease;
                    pointer-events: none;
                }

                .group:hover .corner,
                .skill-card:hover .corner,
                .skill-card:focus-within .corner {
                    opacity: 1;
                    border-color: rgba(127, 227, 217, 0.6);
                }

                .corner-tl { top: 10px; left: 10px; border-top: 1px solid; border-left: 1px solid; }
                .corner-tr { top: 10px; right: 10px; border-top: 1px solid; border-right: 1px solid; }
                .corner-bl { bottom: 10px; left: 10px; border-bottom: 1px solid; border-left: 1px solid; }
                .corner-br { bottom: 10px; right: 10px; border-bottom: 1px solid; border-right: 1px solid; }

                /* ---------- tech tags (micro-interaction) ---------- */

                .tech-tag {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.78rem;
                    color: #d1d5db;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.6rem;
                    padding: 0.5rem 0.85rem;
                    cursor: default;
                    transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
                }

                .tech-tag:hover,
                .tech-tag:focus-visible {
                    color: #ffffff;
                    border-color: rgba(255, 255, 255, 0.3);
                    background: rgba(255, 255, 255, 0.07);
                    transform: translateY(-1px);
                    outline: none;
                }

                .tech-tag-note {
                    position: absolute;
                    left: 50%;
                    bottom: calc(100% + 8px);
                    transform: translateX(-50%) translateY(4px);
                    white-space: nowrap;
                    max-width: 14rem;
                    font-size: 0.68rem;
                    letter-spacing: 0.04em;
                    color: #050505;
                    background: #e5e7eb;
                    padding: 0.32rem 0.6rem;
                    border-radius: 0.4rem;
                    box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    z-index: 5;
                }

                .tech-tag:hover .tech-tag-note,
                .tech-tag:focus-visible .tech-tag-note {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }

                /* keep tooltips from clipping off-screen near the section edges */
                .skill-card-list li:first-child .tech-tag-note {
                    left: 0;
                    transform: translateX(0) translateY(4px);
                }

                .skill-card-list li:first-child .tech-tag:hover .tech-tag-note,
                .skill-card-list li:first-child .tech-tag:focus-visible .tech-tag-note {
                    transform: translateX(0) translateY(0);
                }

                .skill-card-list li:last-child .tech-tag-note {
                    left: auto;
                    right: 0;
                    transform: translateX(0) translateY(4px);
                }

                .skill-card-list li:last-child .tech-tag:hover .tech-tag-note,
                .skill-card-list li:last-child .tech-tag:focus-visible .tech-tag-note {
                    transform: translateX(0) translateY(0);
                }

                /* ---------- project grid / cards ---------- */

                .projects-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (min-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .project-card-featured {
                        grid-column: span 2;
                    }
                    .project-card-featured .project-media {
                        aspect-ratio: 21 / 9;
                    }
                }

                .project-card {
                    --rx: 0deg;
                    --ry: 0deg;
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    border-radius: 1.1rem;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    box-shadow: 0 20px 50px -28px rgba(0, 0, 0, 0.7);
                    transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
                    transform-style: preserve-3d;
                    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                                            border-color 0.45s ease,
                                            box-shadow 0.45s ease;
                }

                @supports not (backdrop-filter: blur(1px)) {
                    .project-card {
                        background: rgba(10, 11, 12, 0.92);
                    }
                }

                .project-card-featured {
                    border-color: rgba(255, 255, 255, 0.12);
                    box-shadow: inset 0 0 0 1px rgba(127, 227, 217, 0.05), 0 20px 50px -28px rgba(0, 0, 0, 0.7);
                }

                .project-card-featured:hover,
                .project-card-featured:focus-within {
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .project-card:hover,
                .project-card:focus-within {
                    border-color: rgba(255, 255, 255, 0.22);
                    box-shadow: 0 34px 74px -30px rgba(0, 0, 0, 0.85);
                    will-change: transform;
                    transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01) translate3d(0, 0, 0);
                }

                .project-media {
                    position: relative;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                    background: linear-gradient(160deg, #0d0d0d, #050505);
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transform: scale(1);
                    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .project-card:hover .project-image,
                .project-card:focus-within .project-image {
                    transform: scale(1.035);
                }

                /* ---------- premium representational preview (image fallback) ----------
                   Shown only when a project has no image, or the image fails to load.
                   Structure: a static SVG schematic (top) + minimal text meta (bottom).
                   All motion here is transform/opacity/background-position only. */

                .project-preview-fallback {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 0.75rem;
                    padding: 1.35rem 1.5rem 1.25rem;
                    background:
                        linear-gradient(155deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.014) 55%),
                        repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.028) 0 2px, transparent 2px 42px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    transform: scale(1);
                    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease;
                }

                .project-card:hover .project-preview-fallback,
                .project-card:focus-within .project-preview-fallback {
                    transform: scale(1.03);
                    border-color: rgba(255, 255, 255, 0.12);
                }

                /* soft neutral light reflection — a diagonal sheen that drifts into
                   view on hover via background-position only (no size/opacity thrash) */
                .project-preview-fallback::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.05) 45%, transparent 60%);
                    background-size: 220% 220%;
                    background-position: -60% -60%;
                    transition: background-position 0.9s ease;
                    pointer-events: none;
                }

                .project-card:hover .project-preview-fallback::after,
                .project-card:focus-within .project-preview-fallback::after {
                    background-position: 140% 140%;
                }

                .project-preview-graphic {
                    position: relative;
                    flex: 1 1 auto;
                    min-height: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.25rem 0.5rem;
                    color: rgba(255, 255, 255, 0.5);
                    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .project-card:hover .project-preview-graphic,
                .project-card:focus-within .project-preview-graphic {
                    transform: translateY(-2px) scale(1.015);
                }

                .project-preview-graphic svg {
                    max-width: 100%;
                    max-height: 100%;
                }

                .preview-accent {
                    animation: preview-accent-pulse 2.6s ease-in-out infinite;
                    transform-origin: center;
                    transform-box: fill-box;
                }

                @keyframes preview-accent-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.88); }
                }

                .project-preview-meta {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }

                .project-preview-toprow {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.75rem;
                }

                .project-preview-kicker {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.64rem;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(156, 163, 175, 0.85);
                }

                .project-preview-status {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.64rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(127, 227, 217, 0.85);
                }

                .project-preview-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 999px;
                    background: #7fe3d9;
                    animation: pulse-dot 2.2s ease-in-out infinite;
                }

                .project-preview-title {
                    font-size: 0.95rem;
                    font-weight: 600;
                    letter-spacing: -0.005em;
                    color: rgba(245, 245, 246, 0.92);
                    line-height: 1.3;
                }

                .project-preview-subrow {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.4rem;
                }

                .project-preview-id {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.62rem;
                    letter-spacing: 0.04em;
                    color: rgba(156, 163, 175, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.35rem;
                    padding: 0.18rem 0.4rem;
                }

                .project-preview-tag {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.62rem;
                    letter-spacing: 0.03em;
                    color: rgba(209, 213, 219, 0.85);
                    background: rgba(255, 255, 255, 0.045);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.35rem;
                    padding: 0.18rem 0.45rem;
                }

                .project-media-type {
                    position: absolute;
                    top: 0.9rem;
                    left: 0.9rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.66rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #e5e7eb;
                    background: rgba(5, 5, 5, 0.55);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-radius: 999px;
                    padding: 0.32rem 0.7rem;
                    backdrop-filter: blur(6px);
                    -webkit-backdrop-filter: blur(6px);
                }

                .project-media-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(5, 5, 5, 0) 42%, rgba(5, 5, 5, 0.88) 100%),
                        radial-gradient(60% 60% at var(--mx) var(--my), rgba(255, 255, 255, 0.06), transparent 70%);
                    opacity: 0.85;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .project-card:hover .project-media-overlay,
                .project-card:focus-within .project-media-overlay {
                    opacity: 1;
                }

                .project-body {
                    padding: 1.75rem;
                }

                .project-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.6rem;
                    color: #f4f4f5;
                    transition: color 0.3s ease;
                }

                .project-card:hover .project-title,
                .project-card:focus-within .project-title {
                    color: #ffffff;
                }

                .project-summary {
                    color: #9ca3af;
                    font-size: 0.9rem;
                    line-height: 1.65;
                    margin-bottom: 1.1rem;
                }

                .project-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.45rem;
                    margin-bottom: 1.4rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.72rem;
                    letter-spacing: 0.03em;
                    color: #d1d5db;
                }

                .project-stack li {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.5rem;
                    padding: 0.3rem 0.6rem;
                    transition: border-color 0.25s ease, color 0.25s ease;
                }

                .project-card:hover .project-stack li {
                    border-color: rgba(255, 255, 255, 0.16);
                }

                .project-foot {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding-top: 1.1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                /* ---------- case-study toggle button ---------- */

                .case-study-toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.55rem;
                    font-family: inherit;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-radius: 999px;
                    padding: 0.55rem 1rem;
                    cursor: pointer;
                    transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
                }

                .case-study-toggle:hover,
                .case-study-toggle:focus-visible {
                    border-color: rgba(255, 255, 255, 0.32);
                    background: rgba(255, 255, 255, 0.08);
                    outline: none;
                }

                .case-study-toggle.is-open {
                    color: #7fe3d9;
                    border-color: rgba(127, 227, 217, 0.35);
                }

                .case-study-chevron {
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .case-study-toggle.is-open .case-study-chevron {
                    transform: rotate(180deg);
                }

                /* ---------- live-project link (only rendered when a real URL exists) ---------- */

                .project-live-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #9ca3af;
                    transition: color 0.3s ease;
                }

                .project-live-link:hover,
                .project-live-link:focus-visible {
                    color: #ffffff;
                }

                .project-link-arrow {
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .project-live-link:hover .project-link-arrow,
                .project-live-link:focus-visible .project-link-arrow {
                    transform: translateX(4px);
                }

                /* ---------- case-study panel ---------------------------------------
                   Expand/collapse uses the grid-template-rows 0fr/1fr technique so
                   height:auto content can transition smoothly without a JS-measured
                   height and without animating an actual layout property on every
                   frame — it only runs once, on a discrete click, never continuously.
                   ------------------------------------------------------------------- */

                .case-study-collapse {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .case-study-collapse.is-open {
                    grid-template-rows: 1fr;
                }

                .case-study-collapse-inner {
                    overflow: hidden;
                    min-height: 0;
                }

                .case-study-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                    padding-top: 1.5rem;
                    margin-top: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.07);
                }

                @media (min-width: 640px) {
                    .case-study-grid {
                        grid-template-columns: 1fr 1fr;
                        column-gap: 1.75rem;
                    }
                }

                .case-study-item p,
                .case-study-item ul {
                    color: #9ca3af;
                    font-size: 0.88rem;
                    line-height: 1.65;
                }

                .case-study-item ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .case-study-item li {
                    position: relative;
                    padding-left: 1rem;
                }

                .case-study-item li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0.6em;
                    width: 5px;
                    height: 1px;
                    background: #7fe3d9;
                    opacity: 0.7;
                }

                .case-study-label {
                    display: block;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.66rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #7fe3d9;
                    opacity: 0.85;
                    margin-bottom: 0.5rem;
                }

                /* ---------- accessibility ---------- */

                .skill-card:focus-visible,
                .project-card:focus-visible,
                .project-live-link:focus-visible,
                .case-study-toggle:focus-visible,
                .tech-tag:focus-visible {
                    outline: 2px solid #7fe3d9;
                    outline-offset: 2px;
                }

                @media (prefers-reduced-motion: reduce) {
                    .skill-card,
                    .project-card,
                    .project-image,
                    .project-link-arrow,
                    .project-title,
                    .project-media-overlay,
                    .tech-tag,
                    .core-stack li,
                    .corner,
                    .case-study-chevron,
                    .project-preview-fallback,
                    .project-preview-fallback::after,
                    .project-preview-graphic,
                    .reveal > * {
                        transition: opacity 0.2s ease !important;
                        transform: none !important;
                    }

                    .case-study-collapse {
                        transition: none !important;
                    }

                    .skill-card:hover,
                    .project-card:hover,
                    .skill-card:focus-within,
                    .project-card:focus-within {
                        transform: none !important;
                    }

                    .project-card:hover .project-preview-fallback,
                    .project-card:focus-within .project-preview-fallback,
                    .project-card:hover .project-preview-graphic,
                    .project-card:focus-within .project-preview-graphic {
                        transform: none !important;
                    }

                    .signal-dot,
                    .project-preview-dot,
                    .preview-accent {
                        animation: none !important;
                    }

                    .reveal > * {
                        opacity: 1 !important;
                    }
                }

                /* ---------- coarse pointer / touch: disable 3D + pointer-light,
                   keep glass, spacing, content, and tap feedback ---------- */

                @media (hover: none), (pointer: coarse) {
                    .skill-card,
                    .project-card {
                        transform: none !important;
                    }

                    .skill-card:hover,
                    .skill-card:focus-within,
                    .project-card:hover,
                    .project-card:focus-within {
                        transform: none !important;
                    }

                    .skill-card-spotlight {
                        display: none;
                    }

                    .project-media-overlay {
                        opacity: 1;
                    }

                    .project-card:hover .project-image,
                    .project-card:focus-within .project-image {
                        transform: none;
                    }

                    .project-card:hover .project-preview-fallback,
                    .project-card:focus-within .project-preview-fallback,
                    .project-card:hover .project-preview-graphic,
                    .project-card:focus-within .project-preview-graphic {
                        transform: none;
                    }

                    .project-preview-fallback::after {
                        background-position: -60% -60%;
                    }

                    .skill-card,
                    .project-card {
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                    }

                    /* keep the reveal entrance on touch, just simplify the tilt */
                    .reveal > * {
                        transform: translate3d(0, 24px, 0) scale(0.98);
                    }

                    .reveal.is-visible > * {
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }

                /* ---------- low-end / narrow viewport: lighten the render path
                   further while keeping every card, image and link intact ---------- */

                @media (max-width: 480px) {
                    .skills-section { padding: 4.5rem 1.25rem; }
                    .skills-section::before { display: none; }
                    .skill-card { padding: 1.5rem; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
                    .project-body { padding: 1.35rem; }
                    .project-card { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
                    .project-foot { flex-wrap: wrap; }
                    .project-preview-fallback { padding: 1rem 1.1rem 0.95rem; gap: 0.55rem; }
                    .project-preview-title { font-size: 0.85rem; }
                    .project-preview-kicker { font-size: 0.58rem; }
                    .project-preview-id,
                    .project-preview-tag { font-size: 0.58rem; padding: 0.14rem 0.35rem; }
                }
            `})]})}var Be=`/Aditya-Kshirsagar-Portfolio/assets/Home-B2U7q6s0.jpeg`,Ve=(0,b.createContext)({});function He(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ue=typeof window<`u`?b.useLayoutEffect:b.useEffect,We=(0,b.createContext)(null);function Ge(e,t){e.indexOf(t)===-1&&e.push(t)}function Ke(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var qe=(e,t,n)=>n>t?t:n<e?e:n,Je={},Ye=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Xe=e=>typeof e==`object`&&!!e,Ze=e=>/^0[^.\s]+$/u.test(e);function Qe(e){let t;return()=>(t===void 0&&(t=e()),t)}var $e=e=>e,et=(...e)=>e.reduce((e,t)=>n=>t(e(n))),tt=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},nt=class{constructor(){this.subscriptions=[]}add(e){return Ge(this.subscriptions,e),()=>Ke(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},rt=e=>e*1e3,it=e=>e/1e3,at=(e,t)=>t?1e3/t*e:0,ot=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,st=1e-7,ct=12;function lt(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ot(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>st&&++s<ct);return o}function ut(e,t,n,r){if(e===t&&n===r)return $e;let i=t=>lt(t,0,1,e,n);return e=>e===0||e===1?e:ot(i(e),t,r)}var dt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ft=e=>t=>1-e(1-t),pt=ut(.33,1.53,.69,.99),mt=ft(pt),ht=dt(mt),gt=e=>e>=1?1:(e*=2)<1?.5*mt(e):.5*(2-2**(-10*(e-1))),_t=e=>1-Math.sin(Math.acos(e)),vt=ft(_t),yt=dt(_t),bt=ut(.42,0,1,1),xt=ut(0,0,.58,1),St=ut(.42,0,.58,1),Ct=e=>Array.isArray(e)&&typeof e[0]!=`number`,wt=e=>Array.isArray(e)&&typeof e[0]==`number`,Tt={linear:$e,easeIn:bt,easeInOut:St,easeOut:xt,circIn:_t,circInOut:yt,circOut:vt,backIn:mt,backInOut:ht,backOut:pt,anticipate:gt},Et=e=>typeof e==`string`,Dt=e=>{if(wt(e)){e.length;let[t,n,r,i]=e;return ut(t,n,r,i)}return Et(e)?(Tt[e],`${e}`,Tt[e]):e},Ot=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function kt(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var At=40;function jt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ot.reduce((e,t)=>(e[t]=kt(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Je.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,At),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ot.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ot.length;t++)o[Ot[t]].cancel(e)},state:i,steps:o}}var{schedule:O,cancel:Mt,state:Nt,steps:Pt}=jt(typeof requestAnimationFrame<`u`?requestAnimationFrame:$e,!0),Ft;function It(){Ft=void 0}var Lt={now:()=>(Ft===void 0&&Lt.set(Nt.isProcessing||Je.useManualTiming?Nt.timestamp:performance.now()),Ft),set:e=>{Ft=e,queueMicrotask(It)}},Rt=e=>t=>typeof t==`string`&&t.startsWith(e),zt=Rt(`--`),Bt=Rt(`var(--`),Vt=e=>Bt(e)?Ht.test(e.split(`/*`)[0].trim()):!1,Ht=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ut(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Wt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Gt={...Wt,transform:e=>qe(0,1,e)},Kt={...Wt,default:1},qt=e=>Math.round(e*1e5)/1e5,Jt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Yt(e){return e==null}var Xt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Zt=(e,t)=>n=>!!(typeof n==`string`&&Xt.test(n)&&n.startsWith(e)||t&&!Yt(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Jt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},$t=e=>qe(0,255,e),en={...Wt,transform:e=>Math.round($t(e))},tn={test:Zt(`rgb`,`red`),parse:Qt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+en.transform(e)+`, `+en.transform(t)+`, `+en.transform(n)+`, `+qt(Gt.transform(r))+`)`};function nn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var rn={test:Zt(`#`),parse:nn,transform:tn.transform},an=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),on=an(`deg`),sn=an(`%`),k=an(`px`),cn=an(`vh`),ln=an(`vw`),un={...sn,parse:e=>sn.parse(e)/100,transform:e=>sn.transform(e*100)},dn={test:Zt(`hsl`,`hue`),parse:Qt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+sn.transform(qt(t))+`, `+sn.transform(qt(n))+`, `+qt(Gt.transform(r))+`)`},A={test:e=>tn.test(e)||rn.test(e)||dn.test(e),parse:e=>tn.test(e)?tn.parse(e):dn.test(e)?dn.parse(e):rn.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?tn.transform(e):dn.transform(e),getAnimatableNone:e=>{let t=A.parse(e);return t.alpha=0,A.transform(t)}},fn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pn(e){return isNaN(e)&&typeof e==`string`&&(e.match(Jt)?.length||0)+(e.match(fn)?.length||0)>0}var mn=`number`,hn=`color`,gn=`var`,_n=`var(`,vn="${}",yn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(yn,e=>(A.test(e)?(r.color.push(a),i.push(hn),n.push(A.parse(e))):e.startsWith(_n)?(r.var.push(a),i.push(gn),n.push(e)):(r.number.push(a),i.push(mn),n.push(parseFloat(e))),++a,vn)).split(vn),indexes:r,types:i}}function xn(e){return bn(e).values}function Sn({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===mn?qt(r[a]):e===hn?A.transform(r[a]):r[a]}return i}}function Cn(e){return Sn(bn(e))}var wn=e=>typeof e==`number`?0:A.test(e)?A.getAnimatableNone(e):e,Tn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:wn(e);function En(e){let t=bn(e);return Sn(t)(t.values.map((e,n)=>Tn(e,t.split[n])))}var j={test:pn,parse:xn,createTransformer:Cn,getAnimatableNone:En};function Dn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function On({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Dn(s,r,e+1/3),a=Dn(s,r,e),o=Dn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function kn(e,t){return n=>n>0?t:e}var M=(e,t,n)=>e+(t-e)*n,An=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},jn=[rn,tn,dn],Mn=e=>jn.find(t=>t.test(e));function Nn(e){let t=Mn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===dn&&(n=On(n)),n}var Pn=(e,t)=>{let n=Nn(e),r=Nn(t);if(!n||!r)return kn(e,t);let i={...n};return e=>(i.red=An(n.red,r.red,e),i.green=An(n.green,r.green,e),i.blue=An(n.blue,r.blue,e),i.alpha=M(n.alpha,r.alpha,e),tn.transform(i))},Fn=new Set([`none`,`hidden`]);function In(e,t){return Fn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ln(e,t){return n=>M(e,t,n)}function Rn(e){return typeof e==`number`?Ln:typeof e==`string`?Vt(e)?kn:A.test(e)?Pn:Hn:Array.isArray(e)?zn:typeof e==`object`?A.test(e)?Pn:Bn:kn}function zn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Rn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Bn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Rn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Vn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Hn=(e,t)=>{let n=j.createTransformer(t),r=bn(e),i=bn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Fn.has(e)&&!i.values.length||Fn.has(t)&&!r.values.length?In(e,t):et(zn(Vn(r,i),i.values),n):(`${e}${t}`,kn(e,t))};function Un(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?M(e,t,n):Rn(e)(e,t)}var Wn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>O.update(t,e),stop:()=>Mt(t),now:()=>Nt.isProcessing?Nt.timestamp:Lt.now()}},Gn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Kn=2e4;function qn(e,t=50,n=Kn,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function Jn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(qn(r),Kn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:it(i)}}var N={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Yn(e,t){return e*Math.sqrt(1-t*t)}var Xn=12;function Zn(e,t,n){let r=n;for(let n=1;n<Xn;n++)r-=e(r)/t(r);return r}var Qn=.001;function $n({duration:e=N.duration,bounce:t=N.bounce,velocity:n=N.velocity,mass:r=N.mass}){let i,a;N.maxDuration;let o=1-t;o=qe(N.minDamping,N.maxDamping,o),e=qe(N.minDuration,N.maxDuration,it(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Yn(t,o),c=Math.exp(-i);return Qn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o*o*t*t*e,c=Math.exp(-r),l=Yn(t*t,o);return(-i(t)+Qn>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Zn(i,a,s);if(e=rt(e),isNaN(c))return{stiffness:N.stiffness,damping:N.damping,duration:e};{let t=c*c*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var er=[`duration`,`bounce`],tr=[`stiffness`,`damping`,`mass`];function nr(e,t){return t.some(t=>e[t]!==void 0)}function rr(e){let t={velocity:N.velocity,stiffness:N.stiffness,damping:N.damping,mass:N.mass,isResolvedFromDuration:!1,...e};if(!nr(e,tr)&&nr(e,er)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*qe(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:N.mass,stiffness:i,damping:a}}else{let n=$n({...e,velocity:0});t={...t,...n,mass:N.mass},t.isResolvedFromDuration=!0}}return t}function ir(e=N.visualDuration,t=N.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=rr({...n,velocity:-it(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=it(Math.sqrt(c/u)),v=h*_,y=Math.abs(g)<5;r||=y?N.restSpeed.granular:N.restSpeed.default,i||=y?N.restDelta.granular:N.restDelta.default;let b,x;if(h<1){let e=Yn(_,h),t=(m+v*g)/e,n=v*t+g*e,r=v*g-t*e,i=-1,a=0,s=0,c=c=>{if(c!==i){i=c;let l=Math.exp(-v*c),u=Math.sin(e*c),d=Math.cos(e*c);a=o-l*(t*u+g*d),s=l*(n*u+r*d)}};b=e=>(c(e),a),x=e=>(c(e),s)}else if(h===1){b=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;x=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);b=t=>{let n=Math.exp(-v*t),r=Math.min(e*t,300);return o-n*((m+v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+v*g)/e,n=v*t-g*e,r=v*g-t*e;x=t=>{let i=Math.exp(-v*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let S={calculatedDuration:p&&d||null,velocity:e=>rt(x(e)),next:e=>{let t=b(e);if(p)s.done=e>=d;else{let n=rt(x(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(qn(S),Kn),t=Gn(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}ir.applyToOptions=e=>{let t=Jn(e,100,ir);return e.ease=t.ease,e.duration=rt(t.duration),e.type=`keyframes`,e};function ar({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=ir({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function or(e,t,n){let r=[],i=n||Je.mix||Un,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=et(Array.isArray(t)?t[n]||$e:t,a)),r.push(a)}return r}function sr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=or(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=tt(e[r],e[r+1],n);return s[r](i)};return n?t=>l(qe(e[0],e[a-1],t)):l}function cr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=tt(0,t,r);e.push(M(n,1,i))}}function lr(e){let t=[0];return cr(t,e.length-1),t}function ur(e,t){return e.map(e=>e*t)}function dr(e,t){return e.map(()=>t||St).splice(0,e.length-1)}function fr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Ct(r)?r.map(Dt):Dt(r),a={done:!1,value:t[0]},o=sr(ur(n&&n.length===t.length?n:lr(t),e),t,{ease:Array.isArray(i)?i:dr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var pr=5;function mr(e,t,n){let r=Math.max(t-pr,0);return at(n-e(r),t-r)}var hr=e=>e!==null;function gr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(hr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var _r={decay:ar,inertia:ar,tween:fr,keyframes:fr,spring:ir};function vr(e){typeof e.type==`string`&&(e.type=_r[e.type])}var yr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},br=e=>e/100,xr=class extends yr{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Lt.now()&&this.tick(Lt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;vr(e);let{type:t=fr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||fr;s!==fr&&typeof o[0]!=`number`&&(this.mixKeyframes=et(br,Un(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=qn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=qe(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ar&&(b.value=gr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return it(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+it(e)}get time(){return it(this.currentTime)}set time(e){e=rt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return mr(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Lt.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=it(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Wn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Lt.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Sr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Cr=e=>e*180/Math.PI,wr=e=>Er(Cr(Math.atan2(e[1],e[0]))),Tr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:wr,rotateZ:wr,skewX:e=>Cr(Math.atan(e[1])),skewY:e=>Cr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Er=e=>(e%=360,e<0&&(e+=360),e),Dr=wr,Or=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),kr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ar={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Or,scaleY:kr,scale:e=>(Or(e)+kr(e))/2,rotateX:e=>Er(Cr(Math.atan2(e[6],e[5]))),rotateY:e=>Er(Cr(Math.atan2(-e[2],e[0]))),rotateZ:Dr,rotate:Dr,skewX:e=>Cr(Math.atan(e[4])),skewY:e=>Cr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function jr(e){return+!!e.includes(`scale`)}function Mr(e,t){if(!e||e===`none`)return jr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Ar,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Tr,i=t}if(!i)return jr(t);let a=r[t],o=i[1].split(`,`).map(Pr);return typeof a==`function`?a(o):o[a]}var Nr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Mr(n,t)};function Pr(e){return parseFloat(e.trim())}var Fr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ir=new Set([...Fr,`pathRotation`]),Lr=e=>e===Wt||e===k,Rr=new Set([`x`,`y`,`z`]),zr=Fr.filter(e=>!Rr.has(e));function Br(e){let t=[];return zr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Vr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Mr(t,`x`),y:(e,{transform:t})=>Mr(t,`y`)};Vr.translateX=Vr.x,Vr.translateY=Vr.y;var Hr=new Set,Ur=!1,Wr=!1,Gr=!1;function Kr(){if(Wr){let e=Array.from(Hr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Br(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Wr=!1,Ur=!1,Hr.forEach(e=>e.complete(Gr)),Hr.clear()}function qr(){Hr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wr=!0)})}function Jr(){Gr=!0,qr(),Kr(),Gr=!1}var Yr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Hr.add(this),Ur||(Ur=!0,O.read(qr),O.resolveKeyframes(Kr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Sr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Hr.delete(this)}cancel(){this.state===`scheduled`&&(Hr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Xr=e=>e.startsWith(`--`);function Zr(e,t,n){Xr(t)?e.style.setProperty(t,n):e.style[t]=n}var Qr={};function $r(e,t){let n=Qe(e);return()=>Qr[t]??n()}var ei=$r(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ti=$r(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ni=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ri={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ni([0,.65,.55,1]),circOut:ni([.55,0,1,.45]),backIn:ni([.31,.01,.66,-.59]),backOut:ni([.33,1.53,.69,.99])};function ii(e,t){if(e)return typeof e==`function`?ti()?Gn(e,t):`ease-out`:wt(e)?ni(e):Array.isArray(e)?e.map(e=>ii(e,t)||ri.easeOut):ri[e]}function ai(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ii(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function oi(e){return typeof e==`function`&&`applyToOptions`in e}function si({type:e,...t}){return oi(e)&&ti()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var ci=class extends yr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=si(e);this.animation=ai(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=gr(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Zr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return it(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+it(e)}get time(){return it(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=rt(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ei()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),$e):r(this)}},li={anticipate:gt,backInOut:ht,circInOut:yt};function ui(e){return e in li}function di(e){typeof e.ease==`string`&&ui(e.ease)&&(e.ease=li[e.ease])}var fi=10,pi=class extends ci{constructor(e){di(e),vr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new xr({...a,autoplay:!1}),s=Math.max(fi,Lt.now()-this.startTime),c=qe(0,fi,s-fi),l=o.sample(s).value,{name:u}=this.options;i&&u&&Zr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},mi=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(j.test(e)||e===`0`)&&!e.startsWith(`url(`));function hi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function gi(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=mi(i,t),s=mi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:hi(e)||(n===`spring`||oi(n))&&r}function _i(e){e.duration=0,e.type=`keyframes`}var vi=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),yi=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function bi(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&yi.test(e[t]))return!0;return!1}var xi=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Si=Qe(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Ci(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Si()&&n&&(vi.has(n)||xi.has(n)&&bi(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var wi=40,Ti=class extends yr{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Lt.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Yr;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Lt.now();let u=!0;gi(e,i,a,o)||(u=!1,(Je.instantAnimations||!s)&&l?.(gr(e,n,t)),e[0]=e[e.length-1],_i(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>wi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Ci(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new pi({...d,element:p})}catch{m=new xr(d)}else m=new xr(d);m.finished.then(()=>{this.notifyFinished()}).catch($e),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Jr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Ei(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Di=30,Oi=e=>!isNaN(parseFloat(e)),ki={current:void 0},Ai=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Lt.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Lt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Oi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new nt);let n=this.events[e].add(t);return e===`change`?()=>{n(),O.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ki.current&&ki.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Di)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Di);return at(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ji(e,t){return new Ai(e,t)}function Mi(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ni(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Mi(n,e)}var Pi={type:`spring`,stiffness:500,damping:25,restSpeed:10},Fi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ii={type:`keyframes`,duration:.8},Li={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ri=(e,{keyframes:t})=>t.length>2?Ii:Ir.has(e)?e.startsWith(`scale`)?Fi(t[1]):Pi:Li,P=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function F(e){for(let t in e)if(!P.has(t))return!0;return!1}var zi=(e,t,n,r={},i,a)=>o=>{let s=Ni(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=rt(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};F(s)||Object.assign(u,Ri(e,u)),u.duration&&=rt(u.duration),u.repeatDelay&&=rt(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(_i(u),u.delay===0&&(d=!0)),(Je.instantAnimations||Je.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,_i(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=gr(u.keyframes,s);if(e!==void 0){O.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new xr(u):new Ti(u)},Bi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Vi(e){let t=Bi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Hi(e,t,n=1){`${e}`;let[r,i]=Vi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ye(e)?parseFloat(e):e}return Vt(i)?Hi(i,t,n+1):i}function Ui(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Wi(e,t,n,r){if(typeof t==`function`){let[i,a]=Ui(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ui(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Gi(e,t,n){let r=e.getProps();return Wi(r,t,n===void 0?r.custom:n,e)}var Ki=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Fr]),qi=e=>Array.isArray(e);function Ji(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ji(n))}function Yi(e){return qi(e)?e[e.length-1]||0:e}function Xi(e,t){let{transitionEnd:n={},transition:r={},...i}=Gi(e,t)||{};i={...i,...n};for(let t in i)Ji(e,t,Yi(i[t]))}var I=e=>!!(e&&e.getVelocity);function Zi(e){return!!(I(e)&&e.add)}function Qi(e,t){let n=e.getValue(`willChange`);if(Zi(n))return n.add(t);if(!n&&Je.WillChange){let n=new Je.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function $i(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ea=`data-`+$i(`framerAppearId`);function ta(e){return e.props[ea]}var na=typeof window<`u`;function ra({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ia(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Mi(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&ra(f,t))continue;let o={delay:n,...Ni(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){O.update(()=>r.set(i));continue}let p=!1;if(na&&window.MotionHandoffAnimation){let n=ta(e);if(n){let e=window.MotionHandoffAnimation(n,t,O);e!==null&&(o.startTime=e,p=!0)}}Qi(e,t);let m=l??e.shouldReduceMotion;r.start(zi(t,r,i,m&&Ki.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>O.update(()=>{o&&Xi(e,o)});d.length?Promise.all(d).then(t):t()}return d}function aa(e,t,n={}){let r=Gi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ia(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return oa(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function oa(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(aa(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Ei(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function sa(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>aa(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=aa(e,t,n);else{let i=typeof t==`function`?Gi(e,t,n.custom):t;r=Promise.all(ia(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var ca={test:e=>e===`auto`,parse:e=>e},la=e=>t=>t.test(e),ua=[Wt,k,sn,on,ln,cn,ca],da=e=>ua.find(la(e));function fa(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||Ze(e)}var pa=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ma(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Jt)||[];if(!r)return e;let i=n.replace(r,``),a=+!!pa.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var ha=/\b([a-z-]*)\(.*?\)/gu,ga={...j,getAnimatableNone:e=>{let t=e.match(ha);return t?t.map(ma).join(` `):e}},_a={...j,getAnimatableNone:e=>{let t=j.parse(e);return j.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},va={...Wt,transform:Math.round},ya={borderWidth:k,borderTopWidth:k,borderRightWidth:k,borderBottomWidth:k,borderLeftWidth:k,borderRadius:k,borderTopLeftRadius:k,borderTopRightRadius:k,borderBottomRightRadius:k,borderBottomLeftRadius:k,width:k,maxWidth:k,height:k,maxHeight:k,top:k,right:k,bottom:k,left:k,inset:k,insetBlock:k,insetBlockStart:k,insetBlockEnd:k,insetInline:k,insetInlineStart:k,insetInlineEnd:k,padding:k,paddingTop:k,paddingRight:k,paddingBottom:k,paddingLeft:k,paddingBlock:k,paddingBlockStart:k,paddingBlockEnd:k,paddingInline:k,paddingInlineStart:k,paddingInlineEnd:k,margin:k,marginTop:k,marginRight:k,marginBottom:k,marginLeft:k,marginBlock:k,marginBlockStart:k,marginBlockEnd:k,marginInline:k,marginInlineStart:k,marginInlineEnd:k,fontSize:k,backgroundPositionX:k,backgroundPositionY:k,rotate:on,pathRotation:on,rotateX:on,rotateY:on,rotateZ:on,scale:Kt,scaleX:Kt,scaleY:Kt,scaleZ:Kt,skew:on,skewX:on,skewY:on,distance:k,translateX:k,translateY:k,translateZ:k,x:k,y:k,z:k,perspective:k,transformPerspective:k,opacity:Gt,originX:un,originY:un,originZ:k,zIndex:va,fillOpacity:Gt,strokeOpacity:Gt,numOctaves:va},ba={...ya,color:A,backgroundColor:A,outlineColor:A,fill:A,stroke:A,borderColor:A,borderTopColor:A,borderRightColor:A,borderBottomColor:A,borderLeftColor:A,filter:ga,WebkitFilter:ga,mask:_a,WebkitMask:_a},xa=e=>ba[e],Sa=new Set([ga,_a]);function Ca(e,t){let n=xa(e);return Sa.has(n)||(n=j),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var wa=new Set([`auto`,`none`,`0`]);function Ta(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!wa.has(t)&&bn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ca(n,i)}var Ea=class extends Yr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Vt(r))){let i=Hi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ki.has(n)||e.length!==2)return;let[r,i]=e,a=da(r),o=da(i);if(Ut(r)!==Ut(i)&&Vr[n]){this.needsMeasurement=!0;return}if(a!==o){if(Lr(a)&&Lr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Vr[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||fa(e[t]))&&n.push(t);n.length&&Ta(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Vr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Da=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Oa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ka=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Aa(e){return Xe(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:ja,cancel:Ma}=jt(queueMicrotask,!1),Na={x:!1,y:!1};function Pa(){return Na.x||Na.y}function Fa(e){return e===`x`||e===`y`?Na[e]?null:(Na[e]=!0,()=>{Na[e]=!1}):Na.x||Na.y?null:(Na.x=Na.y=!0,()=>{Na.x=Na.y=!1})}function Ia(e,t){let n=Oa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function La(e){return!(e.pointerType===`touch`||Pa())}function Ra(e,t,n={}){let[r,i,a]=Ia(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!La(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var za=(e,t)=>t?e===t||za(e,t.parentElement):!1,Ba=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Va=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ha(e){return Va.has(e.tagName)||e.isContentEditable===!0}var Ua=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Wa(e){return Ua.has(e.tagName)||e.isContentEditable===!0}var Ga=new WeakSet;function Ka(e){return t=>{t.key===`Enter`&&e(t)}}function qa(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ja=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ka(()=>{if(Ga.has(n))return;qa(n,`down`);let e=Ka(()=>{qa(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>qa(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ya(e){return Ba(e)&&!Pa()}var Xa=new WeakSet;function Za(e,t,n={}){let[r,i,a]=Ia(e,n),o=e=>{let r=e.currentTarget;if(!Ya(e)||Xa.has(e))return;Ga.add(r),n.stopPropagation&&Xa.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Ga.has(r)&&Ga.delete(r),Ya(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||za(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Aa(e)&&(e.addEventListener(`focus`,e=>Ja(e,i)),!Ha(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Qa(e){return Xe(e)&&`ownerSVGElement`in e}var $a=new WeakMap,eo,to=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Qa(r)&&`getBBox`in r?r.getBBox()[t]:r[n],no=to(`inline`,`width`,`offsetWidth`),ro=to(`block`,`height`,`offsetHeight`);function io({target:e,borderBoxSize:t}){$a.get(e)?.forEach(n=>{n(e,{get width(){return no(e,t)},get height(){return ro(e,t)}})})}function ao(e){e.forEach(io)}function oo(){typeof ResizeObserver>`u`||(eo=new ResizeObserver(ao))}function so(e,t){eo||oo();let n=Oa(e);return n.forEach(e=>{let n=$a.get(e);n||(n=new Set,$a.set(e,n)),n.add(t),eo?.observe(e)}),()=>{n.forEach(e=>{let n=$a.get(e);n?.delete(t),n?.size||eo?.unobserve(e)})}}var co=new Set,lo;function uo(){lo=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};co.forEach(t=>t(e))},window.addEventListener(`resize`,lo)}function fo(e){return co.add(e),lo||uo(),()=>{co.delete(e),!co.size&&typeof lo==`function`&&(window.removeEventListener(`resize`,lo),lo=void 0)}}function po(e,t){return typeof e==`function`?fo(e):so(e,t)}var L={value:null,addProjectionMetrics:null};function mo(e){return Qa(e)&&e.tagName===`svg`}function ho(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=sr(i,a,o);return t?s(r):s}var R=[...ua,A,j],z=e=>R.find(la(e)),go=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:go(),y:go()}),vo=()=>({min:0,max:0}),B=()=>({x:vo(),y:vo()}),yo=new WeakMap;function bo(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function xo(e){return typeof e==`string`||Array.isArray(e)}var So=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],V=[`initial`,...So];function Co(e){return bo(e.animate)||V.some(t=>xo(e[t]))}function wo(e){return!!(Co(e)||e.variants)}function To(e,t,n){for(let r in t){let i=t[r],a=n[r];if(I(i))e.addValue(r,i);else if(I(a))e.addValue(r,ji(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,ji(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Eo={current:null},Do={current:!1},Oo=typeof window<`u`;function ko(){if(Do.current=!0,Oo){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Eo.current=e.matches;e.addEventListener(`change`,t),t()}else Eo.current=!1}}var Ao=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],jo={};function Mo(e){jo=e}function No(){return jo}var Po=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Yr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Lt.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,O.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Co(t),this.isVariantNode=wo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&I(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,yo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Do.current||ko(),this.shouldReduceMotion=Eo.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Mt(this.notifyUpdate),Mt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&vi.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new ci({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:rt(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Ir.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&O.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in jo){let t=jo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):B()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ao.length;t++){let n=Ao[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=To(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ji(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ye(n)||Ze(n))?n=parseFloat(n):!z(n)&&j.test(t)&&(n=Ca(e,t)),this.setBaseTarget(e,I(n)?n.get():n)),I(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Wi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!I(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new nt),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ja.render(this.render)}},Fo=class extends Po{constructor(){super(...arguments),this.KeyframeResolver=Ea}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;I(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Io=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Lo({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ro({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function zo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bo(e){return e===void 0||e===1}function Vo({scale:e,scaleX:t,scaleY:n}){return!Bo(e)||!Bo(t)||!Bo(n)}function Ho(e){return Vo(e)||Uo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Uo(e){return Wo(e.x)||Wo(e.y)}function Wo(e){return e&&e!==`0%`}function Go(e,t,n){return n+t*(e-n)}function Ko(e,t,n,r,i){return i!==void 0&&(e=Go(e,i,r)),Go(e,n,r)+t}function qo(e,t=0,n=1,r,i){e.min=Ko(e.min,t,n,r,i),e.max=Ko(e.max,t,n,r,i)}function Jo(e,{x:t,y:n}){qo(e.x,t.translate,t.scale,t.originPoint),qo(e.y,n.translate,n.scale,n.originPoint)}var Yo=.999999999999,Xo=1.0000000000001;function Zo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qo(e.x,-a.scroll.offset.x),Qo(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Jo(e,o)),r&&Ho(a.latestValues)&&ts(e,a.latestValues,a.layout?.layoutBox))}t.x<Xo&&t.x>Yo&&(t.x=1),t.y<Xo&&t.y>Yo&&(t.y=1)}function Qo(e,t){e.min+=t,e.max+=t}function $o(e,t,n,r,i=.5){qo(e,t,n,M(e.min,e.max,i),r)}function es(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function ts(e,t,n){let r=n??e;$o(e.x,es(t.x,r.x),t.scaleX,t.scale,t.originX),$o(e.y,es(t.y,r.y),t.scaleY,t.scale,t.originY)}function ns(e,t){return Lo(zo(e.getBoundingClientRect(),t))}function rs(e,t,n){let r=ns(e,n),{scroll:i}=t;return i&&(Qo(r.x,i.offset.x),Qo(r.y,i.offset.y)),r}var is={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},as=Fr.length;function os(e,t,n){let r=``,i=!0;for(let a=0;a<as;a++){let o=Fr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ka(s,ya[o]);if(!c){i=!1;let t=is[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${ka(a,ya.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function ss(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ir.has(e)){o=!0;continue}if(zt(e)){i[e]=n;continue}{let t=ka(n,ya[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=os(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function cs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function ls(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var us={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(k.test(e))e=parseFloat(e);else return e}return`${ls(e,t.target.x)}% ${ls(e,t.target.y)}%`}},ds={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=j.parse(e);if(i.length>5)return r;let a=j.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=M(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},fs={borderRadius:{...us,applyTo:[...Da]},borderTopLeftRadius:us,borderTopRightRadius:us,borderBottomLeftRadius:us,borderBottomRightRadius:us,boxShadow:ds};function ps(e,{layout:t,layoutId:n}){return Ir.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!fs[e]||e===`opacity`)}function ms(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(I(r[t])||i&&I(i[t])||ps(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function hs(e){return window.getComputedStyle(e)}var gs=class extends Fo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=cs}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Ir.has(t))return this.projection?.isProjecting?jr(t):Nr(e,t);{let n=hs(e),r=(zt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ns(e,t)}build(e,t,n){ss(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ms(e,t,n)}},_s={offset:`stroke-dashoffset`,array:`stroke-dasharray`},vs={offset:`strokeDashoffset`,array:`strokeDasharray`};function ys(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?_s:vs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var bs=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function xs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(ss(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of bs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ys(d,i,a,o,!1)}var Ss=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Cs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ws(e,t,n,r){cs(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ss.has(n)?n:$i(n),t.attrs[n])}function Ts(e,t,n){let r=ms(e,t,n);for(let n in e)if(I(e[n])||I(t[n])){let t=Fr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Es=class extends Fo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=B}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ir.has(t)){let e=xa(t);return e&&e.default||0}if(bs.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Ss.has(t)?t:$i(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ts(e,t,n)}build(e,t,n){xs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ws(e,t,n,r)}mount(e){this.isSVGTag=Cs(e.tagName),super.mount(e)}},Ds=V.length;function Os(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Os(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ds;n++){let r=V[n],i=e.props[r];(xo(i)||i===!1)&&(t[r]=i)}return t}function ks(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var As=[...So].reverse(),js=So.length;function Ms(e){return t=>Promise.all(t.map(({animation:t,options:n})=>sa(e,t,n)))}function Ns(e){let t=Ms(e),n=Is(),r=!0,i=!1,a=t=>(n,r)=>{let i=Gi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Os(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<js;t++){let p=As[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=xo(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||bo(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Ps(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=qi(t)&&qi(n)?!ks(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Gi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Ei(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Gi(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Is(),i=!0}}}function Ps(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ks(t,e):!1}function Fs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Is(){return{animate:Fs(!0),whileInView:Fs(),whileHover:Fs(),whileTap:Fs(),whileDrag:Fs(),whileFocus:Fs(),exit:Fs()}}function Ls(e,t){e.min=t.min,e.max=t.max}function Rs(e,t){Ls(e.x,t.x),Ls(e.y,t.y)}function zs(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Bs=.9999,Vs=1.0001,Hs=-.01,Us=.01;function Ws(e){return e.max-e.min}function Gs(e,t,n){return Math.abs(e-t)<=n}function Ks(e,t,n,r=.5){e.origin=r,e.originPoint=M(t.min,t.max,e.origin),e.scale=Ws(n)/Ws(t),e.translate=M(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Bs&&e.scale<=Vs||isNaN(e.scale))&&(e.scale=1),(e.translate>=Hs&&e.translate<=Us||isNaN(e.translate))&&(e.translate=0)}function qs(e,t,n,r){Ks(e.x,t.x,n.x,r?r.originX:void 0),Ks(e.y,t.y,n.y,r?r.originY:void 0)}function Js(e,t,n,r=0){e.min=(r?M(n.min,n.max,r):n.min)+t.min,e.max=e.min+Ws(t)}function Ys(e,t,n,r){Js(e.x,t.x,n.x,r?.x),Js(e.y,t.y,n.y,r?.y)}function Xs(e,t,n,r=0){let i=r?M(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Ws(t)}function Zs(e,t,n,r){Xs(e.x,t.x,n.x,r?.x),Xs(e.y,t.y,n.y,r?.y)}function Qs(e,t,n,r,i){return e-=t,e=Go(e,1/n,r),i!==void 0&&(e=Go(e,1/i,r)),e}function $s(e,t=0,n=1,r=.5,i,a=e,o=e){if(sn.test(t)&&(t=parseFloat(t),t=M(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=M(a.min,a.max,r);e===a&&(s-=t),e.min=Qs(e.min,t,n,s,i),e.max=Qs(e.max,t,n,s,i)}function ec(e,t,[n,r,i],a,o){$s(e,t[n],t[r],t[i],t.scale,a,o)}var tc=[`x`,`scaleX`,`originX`],nc=[`y`,`scaleY`,`originY`];function rc(e,t,n,r){ec(e.x,t,tc,n?n.x:void 0,r?r.x:void 0),ec(e.y,t,nc,n?n.y:void 0,r?r.y:void 0)}function ic(e){return e.translate===0&&e.scale===1}function ac(e){return ic(e.x)&&ic(e.y)}function oc(e,t){return e.min===t.min&&e.max===t.max}function sc(e,t){return oc(e.x,t.x)&&oc(e.y,t.y)}function cc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function lc(e,t){return cc(e.x,t.x)&&cc(e.y,t.y)}function uc(e){return Ws(e.x)/Ws(e.y)}function dc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function fc(e){return[e(`x`),e(`y`)]}function pc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var mc=Da.length,hc=e=>typeof e==`string`?parseFloat(e):e,gc=e=>typeof e==`number`||k.test(e);function _c(e,t,n,r,i,a){i?(e.opacity=M(0,n.opacity??1,yc(r)),e.opacityExit=M(t.opacity??1,0,bc(r))):a&&(e.opacity=M(t.opacity??1,n.opacity??1,r));for(let i=0;i<mc;i++){let a=Da[i],o=vc(t,a),s=vc(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||gc(o)===gc(s)?(e[a]=Math.max(M(hc(o),hc(s),r),0),(sn.test(s)||sn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=M(t.rotate||0,n.rotate||0,r))}function vc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var yc=xc(0,.5,vt),bc=xc(.5,.95,$e);function xc(e,t,n){return r=>r<e?0:r>t?1:n(tt(e,t,r))}function Sc(e,t,n){let r=I(e)?e:ji(e);return r.start(zi(``,r,t,n)),r.animation}function Cc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var wc=(e,t)=>e.depth-t.depth,Tc=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ge(this.children,e),this.isDirty=!0}remove(e){Ke(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(wc),this.isDirty=!1,this.children.forEach(e)}};function Ec(e,t){let n=Lt.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Mt(r),e(a-t))};return O.setup(r,!0),()=>Mt(r)}function Dc(e){return I(e)?e.get():e}var Oc=class{constructor(){this.members=[]}add(e){Ge(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Ke(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Ke(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},kc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ac={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},jc=[``,`X`,`Y`,`Z`],Mc=1e3,Nc=0;function Pc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Fc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ta(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,O,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Fc(r)}function Ic({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Nc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,L.value&&(Ac.nodes=Ac.calculatedTargetDeltas=Ac.calculatedProjections=0),this.nodes.forEach(zc),this.nodes.forEach(qc),this.nodes.forEach(Jc),this.nodes.forEach(H),L.addProjectionMetrics&&L.addProjectionMetrics(Ac)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Tc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new nt),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Qa(t)&&!mo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;O.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Ec(i,250),kc.hasAnimatedSinceResize&&(kc.hasAnimatedSinceResize=!1,this.nodes.forEach(Kc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||tl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!lc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ni(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Kc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Hc),this.nodes.forEach(Vc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Uc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Wc),this.nodes.forEach(Gc),this.nodes.forEach(Lc),this.nodes.forEach(Rc)):this.nodes.forEach(Uc),this.clearAllSnapshots();let e=Lt.now();Nt.delta=qe(0,1e3/60,e-Nt.timestamp),Nt.timestamp=e,Nt.isProcessing=!0,Pt.update.process(Nt),Pt.preRender.process(Nt),Pt.render.process(Nt),Nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ja.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Bc),this.sharedNodes.forEach(Xc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,O.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){O.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ws(this.snapshot.measuredBox.x)&&!Ws(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=B(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ac(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Ho(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),al(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return B();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(sl))){let{scroll:e}=this.root;e&&(Qo(t.x,e.offset.x),Qo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=B();if(Rs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Rs(t,e),Qo(t.x,i.offset.x),Qo(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||B();Rs(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Qo(r.x,-n.scroll.offset.x),Qo(r.y,-n.scroll.offset.y)),Ho(n.latestValues)&&ts(r,n.latestValues,n.layout?.layoutBox)}return Ho(this.latestValues)&&ts(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=B();Rs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Ho(n.latestValues))continue;let r;n.instance&&(Vo(n.latestValues)&&n.updateSnapshot(),r=B(),Rs(r,n.measurePageBox())),rc(t,n.latestValues,n.snapshot?.layoutBox,r)}return Ho(this.latestValues)&&rc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Nt.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=B(),this.targetWithTransforms=B()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ys(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Rs(this.target,this.layout.layoutBox),Jo(this.target,this.targetDelta)):Rs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),L.value&&Ac.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Vo(this.parent.latestValues)||Uo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=B(),this.relativeTargetOrigin=B(),Zs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Rs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Nt.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Rs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Zo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=B());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zs(this.prevProjectionDelta.x,this.projectionDelta.x),zs(this.prevProjectionDelta.y,this.projectionDelta.y)),qs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!dc(this.projectionDelta.x,this.prevProjectionDelta.x)||!dc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),L.value&&Ac.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=B(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(el));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=M(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=M(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Zc(o.x,e.x,n),Zc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zs(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),$c(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&sc(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=B(),Rs(f,this.relativeTarget)),c&&(this.animationValues=a,_c(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Mt(this.pendingAnimation),void 0),this.pendingAnimation=O.update(()=>{kc.hasAnimatedSinceResize=!0,this.motionValue||=ji(0),this.motionValue.jump(0,!1),this.currentAnimation=Sc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&ol(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||B();let t=Ws(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ws(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Rs(t,n),ts(t,i),qs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Oc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Pc(`z`,e,r,this.animationValues);for(let t=0;t<jc.length;t++)Pc(`rotate${jc[t]}`,e,r,this.animationValues),Pc(`skew${jc[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Dc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Dc(t?.pointerEvents)||``),this.hasProjected&&!Ho(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=pc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in fs){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=fs[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Dc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Vc),this.root.sharedNodes.clear()}}}function Lc(e){e.updateLayout()}function Rc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)fc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ws(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ls(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else ol(i,t.layoutBox,n)&&fc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ws(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=_o();qs(o,n,t.layoutBox);let s=_o();a?qs(s,e.applyTransform(r,!0),t.measuredBox):qs(s,n,t.layoutBox);let c=!ac(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=B();Zs(s,t.layoutBox,i.layoutBox,o);let c=B();Zs(c,n,a.layoutBox,o),lc(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function zc(e){L.value&&Ac.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function H(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Bc(e){e.clearSnapshot()}function Vc(e){e.clearMeasurements()}function Hc(e){e.isLayoutDirty=!0,e.updateLayout()}function Uc(e){e.isLayoutDirty=!1}function Wc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Gc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Kc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function qc(e){e.resolveTargetDelta()}function Jc(e){e.calcProjection()}function Yc(e){e.resetSkewAndRotation()}function Xc(e){e.removeLeadSnapshot()}function Zc(e,t,n){e.translate=M(t.translate,0,n),e.scale=M(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qc(e,t,n,r){e.min=M(t.min,n.min,r),e.max=M(t.max,n.max,r)}function $c(e,t,n,r){Qc(e.x,t.x,n.x,r),Qc(e.y,t.y,n.y,r)}function el(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var tl={duration:.45,ease:[.4,0,.1,1]},nl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rl=nl(`applewebkit/`)&&!nl(`chrome/`)?Math.round:$e;function il(e){e.min=rl(e.min),e.max=rl(e.max)}function al(e){il(e.x),il(e.y)}function ol(e,t,n){return e===`position`||e===`preserve-aspect`&&!Gs(uc(t),uc(n),.2)}function sl(e){return e!==e.root&&e.scroll?.wasRoot}var cl=Ic({attachResizeListener:(e,t)=>Cc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),ll={current:void 0},U=Ic({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ll.current){let e=new cl({});e.mount(window),e.setOptions({layoutScroll:!0}),ll.current=e}return ll.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ul=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function dl(e=!0){let t=(0,b.useContext)(We);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var fl=(0,b.createContext)({strict:!1}),pl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},ml=!1;function hl(){if(ml)return;let e={};for(let t in pl)e[t]={isEnabled:e=>pl[t].some(t=>!!e[t])};Mo(e),ml=!0}function gl(){return hl(),No()}function _l(e){let t=gl();for(let n in e)t[n]={...t[n],...e[n]};Mo(t)}var vl=(0,b.createContext)({});function yl(e,t){if(Co(e)){let{initial:t,animate:n}=e;return{initial:t===!1||xo(t)?t:void 0,animate:xo(n)?n:void 0}}return e.inherit===!1?{}:t}function bl(e){let{initial:t,animate:n}=yl(e,(0,b.useContext)(vl));return(0,b.useMemo)(()=>({initial:t,animate:n}),[xl(t),xl(n)])}function xl(e){return Array.isArray(e)?e.join(` `):e}var Sl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cl(e,t,n){for(let r in t)!I(t[r])&&!ps(r,n)&&(e[r]=t[r])}function wl({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=Sl();return ss(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Tl(e,t){let n=e.style||{},r={};return Cl(r,n,e),Object.assign(r,wl(e,t)),r}function El(e,t){let n={},r=Tl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Dl=()=>({...Sl(),attrs:{}});function Ol(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=Dl();return xs(n,t,Cs(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Cl(t,e.style,e),i.style={...t,...i.style}}return i}var kl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Al(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||kl.has(e)}function jl(e,t){return e.startsWith(`on`)?!Al(e):t?.(e)??!Al(e)}function Ml(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(I(e[a])||(jl(a,r)||n===!0&&Al(a)||!t&&!Al(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var Nl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Pl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Nl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Fl(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Pl(e)?Ol:El)(t,r,i,e),l=Ml(t,typeof e==`string`,a,s),u=e===b.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,b.useMemo)(()=>I(d)?d.get():d,[d]);return(0,b.createElement)(e,{...u,children:f})}function Il({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Ll(n,r,i,e),renderState:t()}}function Ll(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Dc(a[e]);let{initial:o,animate:s}=e,c=Co(e),l=wo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!bo(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Wi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Rl=e=>(t,n)=>{let r=(0,b.useContext)(vl),i=(0,b.useContext)(We),a=()=>Il(e,t,r,i);return n?a():He(a)},zl=Rl({scrapeMotionValuesFromProps:ms,createRenderState:Sl}),Bl=Rl({scrapeMotionValuesFromProps:Ts,createRenderState:Dl}),W=Symbol.for(`motionComponentSymbol`);function G(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var K=(0,b.createContext)({});function q(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function J(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(vl),s=(0,b.useContext)(fl),c=(0,b.useContext)(We),l=(0,b.useContext)(ul),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(K);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Vl(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[ea],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Ue(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Vl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Hl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&q(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Hl(e){if(e)return e.options.allowProjection===!1?Hl(e.parent):e.projection}function Ul(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&_l(r);let a=n?n===`svg`:Pl(e),o=a?Bl:zl;function s(n,s){let c,l={...(0,b.useContext)(ul),...n,layoutId:Wl(n)},{isStatic:u,isValidProp:d}=l,f=bl(n),p=o(n,u);if(!u&&typeof window<`u`){Gl(l,r);let t=Y(l);c=t.MeasureLayout,f.visualElement=J(e,p,l,i,t.ProjectionNode,a)}return(0,x.jsxs)(vl.Provider,{value:f,children:[c&&f.visualElement?(0,x.jsx)(c,{visualElement:f.visualElement,...l}):null,Fl(e,n,G(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[W]=e,c}function Wl({layoutId:e}){let t=(0,b.useContext)(Ve).id;return t&&e!==void 0?t+`-`+e:e}function Gl(e,t){(0,b.useContext)(fl).strict}function Y(e){let{drag:t,layout:n}=gl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Kl(e,t){if(typeof Proxy>`u`)return Ul;let n=new Map,r=(n,r)=>Ul(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ul(a,void 0,e,t)),n.get(a))})}var ql=(e,t)=>t.isSVG??Pl(e)?new Es(t):new gs(t,{allowProjection:e!==b.Fragment}),Jl=class extends Io{constructor(e){super(e),e.animationState||=Ns(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();bo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Yl=0,Xl={animation:{Feature:Jl},exit:{Feature:class extends Io{constructor(){super(...arguments),this.id=Yl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Gi(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Zl(e){return{point:{x:e.pageX,y:e.pageY}}}var Ql=e=>t=>Ba(t)&&e(t,Zl(t));function $l(e,t,n,r){return Cc(e,t,Ql(n),r)}var eu=({current:e})=>e?e.ownerDocument.defaultView:null,tu=(e,t)=>Math.abs(e-t);function nu(e,t){let n=tu(e.x,t.x),r=tu(e.y,t.y);return Math.sqrt(n**2+r**2)}var ru=new Set([`auto`,`scroll`]),iu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=X(this.lastRawMoveEventInfo,this.transformPagePoint));let e=ou(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=nu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Nt;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=X(t,this.transformPagePoint),O.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ou(e.type===`pointercancel`?this.lastMoveEventInfo:X(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ba(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=X(Zl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Nt;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ou(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=et($l(this.contextWindow,`pointermove`,this.handlePointerMove,d),$l(this.contextWindow,`pointerup`,this.handlePointerUp,d),$l(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ru.has(e.overflowX)||ru.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),O.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Mt(this.updatePoint)}};function X(e,t){return t?{point:t(e.point)}:e}function au(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ou({point:e},t){return{point:e,delta:au(e,cu(t)),offset:au(e,su(t)),velocity:lu(t,.1)}}function su(e){return e[0]}function cu(e){return e[e.length-1]}function lu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=cu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>rt(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>rt(t)*2&&(r=e[1]);let a=it(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function uu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?M(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?M(n,e,r.max):Math.min(e,n)),e}function du(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function fu(e,{top:t,left:n,bottom:r,right:i}){return{x:du(e.x,n,i),y:du(e.y,t,r)}}function pu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function mu(e,t){return{x:pu(e.x,t.x),y:pu(e.y,t.y)}}function hu(e,t){let n=.5,r=Ws(e),i=Ws(t);return i>r?n=tt(t.min,t.max-r,e.min):r>i&&(n=tt(e.min,e.max-i,t.min)),qe(0,1,n)}function gu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var _u=.35;function vu(e=_u){return e===!1?e=0:e===!0&&(e=_u),{x:yu(e,`left`,`right`),y:yu(e,`top`,`bottom`)}}function yu(e,t,n){return{min:bu(e,t),max:bu(e,n)}}function bu(e,t){return typeof e==`number`?e:e[t]||0}var xu=new WeakMap,Su=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=B(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Zl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Fa(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),fc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(sn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ws(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&O.update(()=>i(e,t),!1,!0),Qi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Eu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&O.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new iu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:eu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&O.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Tu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=uu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&q(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?fu(n.layoutBox,e):!1,this.elastic=vu(t),r!==this.constraints&&!q(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&fc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=gu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!q(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=rs(n,r.root,this.visualElement.getTransformPagePoint()),a=mu(r.layout.layoutBox,i);if(t){let e=t(Ro(a));this.hasMutatedConstraints=!!e,e&&(a=Lo(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=fc(o=>{if(!Tu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Qi(this.visualElement,e),n.start(zi(e,n,0,t,this.visualElement,!1))}stopAnimation(){fc(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){fc(t=>{let{drag:n}=this.getProps();if(!Tu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-M(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!q(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};fc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=hu({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),fc(t=>{if(!Tu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(M(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;xu.set(this.visualElement,this);let e=this.visualElement.current,t=$l(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Wa(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();q(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=wu(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),O.read(r);let o=Cc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(fc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=_u,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Cu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function wu(e,t,n){let r=po(e,Cu(n)),i=po(t,Cu(n));return()=>{r(),i()}}function Tu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Eu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Du=class extends Io{constructor(e){super(e),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new Su(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Ou=e=>(t,n)=>{e&&O.update(()=>e(t,n),!1,!0)},ku=class extends Io{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(e){this.session=new iu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ou(e),onStart:Ou(t),onMove:Ou(n),onEnd:(e,t)=>{delete this.session,r&&O.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=$l(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Au=!1,ju=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Au&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),kc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Au=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||O.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),ja.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Au=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Mu(e){let[t,n]=dl(),r=(0,b.useContext)(Ve);return(0,x.jsx)(ju,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(K),isPresent:t,safeToRemove:n})}var Nu={pan:{Feature:ku},drag:{Feature:Du,ProjectionNode:U,MeasureLayout:Mu}};function Pu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&O.postRender(()=>i(t,Zl(t)))}var Fu=class extends Io{mount(){let{current:e}=this.node;e&&(this.unmount=Ra(e,(e,t)=>(Pu(this.node,t,`Start`),e=>Pu(this.node,e,`End`))))}unmount(){}},Iu=class extends Io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=et(Cc(this.node.current,`focus`,()=>this.onFocus()),Cc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Lu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&O.postRender(()=>i(t,Zl(t)))}var Ru=class extends Io{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Za(e,(e,t)=>(Lu(this.node,t,`Start`),(e,{success:t})=>Lu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},zu=new WeakMap,Bu=new WeakMap,Vu=e=>{let t=zu.get(e.target);t&&t(e)},Hu=e=>{e.forEach(Vu)};function Uu({root:e,...t}){let n=e||document;Bu.has(n)||Bu.set(n,{});let r=Bu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Hu,{root:e,...t})),r[i]}function Wu(e,t,n){let r=Uu(t);return zu.set(e,n),r.observe(e),()=>{zu.delete(e),r.unobserve(e)}}var Z={some:0,all:1},Gu=class extends Io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Z[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Wu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Ku(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Ku({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var qu={inView:{Feature:Gu},tap:{Feature:Ru},focus:{Feature:Iu},hover:{Feature:Fu}},Ju={layout:{ProjectionNode:U,MeasureLayout:Mu}},Yu=Kl({...Xl,...qu,...Nu,...Ju},ql);function Xu(e){let t=He(()=>ji(e)),{isStatic:n}=(0,b.useContext)(ul);if(n){let[,n]=(0,b.useState)(e);(0,b.useEffect)(()=>t.on(`change`,n),[])}return t}function Zu(e,t){let n=Xu(t()),r=()=>n.set(t());return r(),Ue(()=>{let t=()=>O.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),Mt(r)}}),n}function Qu(e){ki.current=[],e();let t=Zu(ki.current,e);return ki.current=void 0,t}function $u(e,t,n,r){if(typeof e==`function`)return Qu(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return td(e,t,n,r);let i=typeof t==`function`?t:ho(t,n,r),a=Array.isArray(e)?ed(e,i):ed([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function ed(e,t){let n=He(()=>[]);return Zu(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function td(e,t,n,r){let i=He(()=>Object.keys(n)),a=He(()=>({}));for(let o of i)a[o]=$u(e,t,n[o],r);return a}function nd(e){let t=(0,b.useRef)(0),{isStatic:n}=(0,b.useContext)(ul);(0,b.useEffect)(()=>{if(n)return;let r=({timestamp:n,delta:r})=>{t.current||=n,e(n-t.current,r)};return O.update(r,!0),()=>Mt(r)},[e])}var rd=Yu,id=({text:e,disabled:t=!1,speed:n=2,className:r=``,color:i=`#b5b5b5`,shineColor:a=`#ffffff`,spread:o=120,yoyo:s=!1,pauseOnHover:c=!1,direction:l=`left`,delay:u=0})=>{let[d,f]=(0,b.useState)(!1),p=Xu(0),m=(0,b.useRef)(0),h=(0,b.useRef)(null),g=(0,b.useRef)(l===`left`?1:-1),_=n*1e3,v=u*1e3;nd(e=>{if(t||d){h.current=null;return}if(h.current===null){h.current=e;return}let n=e-h.current;if(h.current=e,m.current+=n,s){let e=_+v,t=e*2,n=m.current%t;if(n<_){let e=n/_*100;p.set(g.current===1?e:100-e)}else if(n<e)p.set(g.current===1?100:0);else if(n<e+_){let t=100-(n-e)/_*100;p.set(g.current===1?t:100-t)}else p.set(g.current===1?0:100)}else{let e=_+v,t=m.current%e;if(t<_){let e=t/_*100;p.set(g.current===1?e:100-e)}else p.set(g.current===1?100:0)}}),(0,b.useEffect)(()=>{g.current=l===`left`?1:-1,m.current=0,p.set(0)},[l]);let y=$u(p,e=>`${150-e*2}% center`),S=(0,b.useCallback)(()=>{c&&f(!0)},[c]),C=(0,b.useCallback)(()=>{c&&f(!1)},[c]),w={backgroundImage:`linear-gradient(${o}deg, ${i} 0%, ${i} 35%, ${a} 50%, ${i} 65%, ${i} 100%)`,backgroundSize:`200% auto`,WebkitBackgroundClip:`text`,backgroundClip:`text`,WebkitTextFillColor:`transparent`};return(0,x.jsx)(rd.span,{className:`inline-block ${r}`,style:{...w,backgroundPosition:y},onMouseEnter:S,onMouseLeave:C,children:e})};function ad(){let[e,t]=(0,b.useState)({x:0,y:0}),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),o=(0,b.useRef)(null),s=(0,b.useRef)(null),c=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let e=setTimeout(()=>r(!0),100);return()=>clearTimeout(e)},[]),(0,b.useEffect)(()=>{let e=e=>{window.innerWidth<768||(c.current&&cancelAnimationFrame(c.current),c.current=requestAnimationFrame(()=>{let n=s.current?.getBoundingClientRect();if(!n)return;let r=(e.clientX-n.left-n.width/2)*.02,i=(e.clientY-n.top-n.height/2)*.02;t({x:r,y:i})}))};return window.addEventListener(`mousemove`,e),()=>{window.removeEventListener(`mousemove`,e),c.current&&cancelAnimationFrame(c.current)}},[]),(0,x.jsxs)(`section`,{id:`home`,ref:s,className:`relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between`,style:{background:`linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #051015 100%)`},children:[(0,x.jsxs)(`div`,{className:`absolute inset-0 pointer-events-none`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-30`,style:{background:`radial-gradient(ellipse 120% 80% at 50% 40%, rgba(0, 229, 255, 0.08), transparent 60%)`}}),(0,x.jsx)(`div`,{className:`absolute inset-0`,style:{background:`radial-gradient(ellipse 100% 100% at 50% 100%, rgba(30, 144, 255, 0.05), transparent 50%)`}}),(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-[0.02]`,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noise)'/%3E%3C/svg%3E")`,backgroundSize:`400px 400px`}}),(0,x.jsx)(`div`,{className:`absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl`}),(0,x.jsx)(`div`,{className:`absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-500/6 to-transparent rounded-full blur-3xl`}),(0,x.jsx)(`div`,{className:`absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-indigo-500/4 to-transparent rounded-full blur-3xl`})]}),(0,x.jsxs)(`div`,{className:`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-12`,children:[(0,x.jsx)(`div`,{className:`mb-6 md:mb-8 transform transition-all duration-900 ease-out ${n?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`}`,children:(0,x.jsx)(`div`,{className:`backdrop-blur-xl bg-gradient-to-r from-white/8 to-white/3 border border-white/15 hover:border-white/25 rounded-full px-5 py-2.5 text-center cursor-default transition-all duration-500 hover:from-white/12 hover:to-white/6`,style:{boxShadow:`inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2)`},children:(0,x.jsx)(`span`,{className:`text-xs md:text-sm text-white/70 tracking-widest uppercase font-light`,children:`Available for Work`})})}),(0,x.jsxs)(`div`,{className:`text-center mb-8 md:mb-10 transform transition-all duration-1000 ease-out ${n?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`}`,children:[(0,x.jsx)(`h1`,{className:`text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight uppercase`,style:{letterSpacing:`0.04em`,textShadow:`0 2px 20px rgba(255, 255, 255, 0.15)`},children:(0,x.jsx)(id,{text:`ADITYA DASHARATH KSHIRSAGAR`,disabled:!1,speed:3,color:`#b5b5b5`,shineColor:`#ffffff`})}),(0,x.jsx)(`div`,{className:`mx-auto w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-3 opacity-80`})]}),(0,x.jsx)(`div`,{className:`mb-10 md:mb-12 transform transition-all duration-1100 ease-out ${n?`opacity-100 scale-100`:`opacity-0 scale-95`}`,children:(0,x.jsx)(`div`,{className:`backdrop-blur-xl bg-white/5 border border-white/10 px-6 md:px-8 py-3 rounded-lg`,children:(0,x.jsx)(`p`,{className:`text-sm md:text-base text-white/80 font-light tracking-wide`,children:`MERN Stack Developer`})})}),(0,x.jsxs)(`div`,{className:`w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 items-center justify-center mb-10 md:mb-12`,children:[(0,x.jsxs)(`div`,{className:`flex flex-col gap-6 transform transition-all duration-1000 delay-300 ease-out ${n?`opacity-100 translate-x-0`:`opacity-0 -translate-x-12`}`,children:[(0,x.jsxs)(`div`,{className:`group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden`,style:{boxShadow:`inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)`,transform:`translateY(${e.y*.8}px) translateX(${e.x*.4}px)`},children:[(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0`}),(0,x.jsxs)(`div`,{className:`relative z-10`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold`,children:`Tech Stack`}),(0,x.jsx)(`p`,{className:`text-sm md:text-base text-white/95 font-medium leading-relaxed`,children:`React • Node.js • Express • MongoDB`}),(0,x.jsx)(`p`,{className:`text-xs text-white/40 mt-2`,children:`MERN Full Stack`})]})]}),(0,x.jsxs)(`div`,{className:`group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden`,style:{boxShadow:`inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)`,transform:`translateY(${e.y*.6}px) translateX(${e.x*.35}px)`},children:[(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0`}),(0,x.jsxs)(`div`,{className:`relative z-10`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold`,children:`Experience`}),(0,x.jsx)(`p`,{className:`text-sm md:text-base text-white/95 font-medium`,children:`Mountreach Solution Pvt. Ltd.`}),(0,x.jsx)(`p`,{className:`text-xs text-white/60 mt-2`,children:`MERN Stack Developer`}),(0,x.jsxs)(`div`,{className:`mt-3 flex items-center gap-1`,children:[(0,x.jsx)(`span`,{className:`w-2 h-2 bg-cyan-400/60 rounded-full`}),(0,x.jsx)(`p`,{className:`text-xs text-white/50`,children:`Intern of the Month`})]})]})]})]}),(0,x.jsx)(`div`,{className:`flex justify-center order-first lg:order-none transform transition-all duration-1000 delay-500 ease-out ${n?`opacity-100 scale-100`:`opacity-0 scale-90`}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:(0,x.jsx)(`div`,{ref:o,className:`relative group`,style:{perspective:`1200px`,transform:`perspective(1200px) rotateX(${e.y*8}deg) rotateY(${-e.x*8}deg) ${i?`scale(1.02)`:`scale(1)`}`,transition:`transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)`,willChange:`transform`},children:(0,x.jsx)(`div`,{className:`relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96`,children:(0,x.jsxs)(`div`,{className:`relative w-full h-full bg-[#0a0a0a] rounded-3xl border border-white/20 hover:border-cyan-400/50 transition-colors duration-500 overflow-hidden`,style:{boxShadow:`0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)`},children:[(0,x.jsx)(`img`,{src:Be,alt:`Aditya Kshirsagar - MERN Stack Developer`,className:`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500`}),(0,x.jsx)(`div`,{className:`absolute top-3 left-3 w-2 h-3 border-l-2 border-t-2 border-white/30 rounded-tl group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none`}),(0,x.jsx)(`div`,{className:`absolute top-3 right-3 w-2 h-3 border-r-2 border-t-2 border-white/30 rounded-tr group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none`}),(0,x.jsx)(`div`,{className:`absolute bottom-3 left-3 w-2 h-3 border-l-2 border-b-2 border-white/30 rounded-bl group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none`}),(0,x.jsx)(`div`,{className:`absolute bottom-3 right-3 w-2 h-3 border-r-2 border-b-2 border-white/30 rounded-br group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none`})]})})})}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-6 transform transition-all duration-1000 delay-700 ease-out ${n?`opacity-100 translate-x-0`:`opacity-0 translate-x-12`}`,children:[(0,x.jsxs)(`div`,{className:`group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden`,style:{boxShadow:`inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)`,transform:`translateY(${e.y*.8}px) translateX(${-e.x*.4}px)`},children:[(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0`}),(0,x.jsxs)(`div`,{className:`relative z-10`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold`,children:`Recognition`}),(0,x.jsx)(`p`,{className:`text-sm md:text-base text-white/95 font-medium`,children:`Intern of the Month`}),(0,x.jsx)(`p`,{className:`text-xs text-white/60 mt-2`,children:`Mountreach Solution Pvt. Ltd.`}),(0,x.jsx)(`div`,{className:`mt-3 flex gap-2`,children:(0,x.jsx)(`span`,{className:`px-2 py-0.5 bg-cyan-400/20 border border-cyan-400/40 rounded-full text-xs text-cyan-300`,children:`Excellence`})})]})]}),(0,x.jsxs)(`div`,{className:`group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden`,style:{boxShadow:`inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)`,transform:`translateY(${e.y*.6}px) translateX(${-e.x*.35}px)`},children:[(0,x.jsx)(`div`,{className:`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0`}),(0,x.jsxs)(`div`,{className:`relative z-10`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold`,children:`Focus Areas`}),(0,x.jsx)(`p`,{className:`text-sm md:text-base text-white/95 font-medium`,children:`Full-Stack Development`}),(0,x.jsx)(`p`,{className:`text-xs text-white/60 mt-2`,children:`Smart Web Applications & UI/UX`})]})]})]})]}),(0,x.jsx)(`div`,{className:`text-center mb-8 max-w-2xl px-4 transform transition-all duration-1100 delay-800 ease-out ${n?`opacity-100 translate-y-0`:`opacity-0 translate-y-6`}`,children:(0,x.jsx)(`p`,{className:`text-base md:text-lg text-white/70 font-light leading-relaxed`,children:`I craft modern, scalable web experiences using the MERN stack. Passionate about performance, user experience, and clean, maintainable code architecture.`})}),(0,x.jsx)(`div`,{className:`mt-auto pt-4 transform transition-all duration-1000 delay-1000 ease-out ${n?`opacity-100 translate-y-0`:`opacity-0 translate-y-6`}`,children:(0,x.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,x.jsx)(`p`,{className:`text-xs text-white/50 tracking-widest uppercase font-light`,children:`Scroll to explore`}),(0,x.jsxs)(`div`,{className:`flex flex-col gap-1 items-center`,children:[(0,x.jsx)(`div`,{className:`w-px h-6 bg-gradient-to-b from-white/50 to-transparent`}),(0,x.jsx)(`div`,{className:`w-1 h-1 rounded-full bg-cyan-400 animate-ping`})]})]})})]}),(0,x.jsx)(`style`,{children:`
        a:focus-visible {
          outline: 2px solid rgba(0, 229, 255, 0.9);
          outline-offset: 3px;
          border-radius: 0.75rem;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background-color: rgba(0, 229, 255, 0.2);
          color: white;
        }
      `})]})}var od=`/Aditya-Kshirsagar-Portfolio/assets/profile-kIF9RmEz.jpeg`,sd=[`React`,`JavaScript`,`Node.js`,`Express.js`,`MongoDB`,`HTML`,`CSS`,`Git`,`GitHub`],cd=[{key:`github`,label:`GitHub`,href:`https://github.com/aditya-kshirsagar-x`,aria:`Visit Aditya Kshirsagar on GitHub`},{key:`instagram`,label:`Instagram`,href:`https://www.instagram.com/aditya____kshirsagar_?igsi=d3piY2dseXlyaQ==`,aria:`Visit Aditya Kshirsagar on Instagram`},{key:`linkedin`,label:`LinkedIn`,href:`https://www.linkedin.com/in/aditya-kshirsagar-a8169b428`,aria:`Visit Aditya Kshirsagar on LinkedIn`}],ld=`
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=JetBrains+Mono:wght@400;500&display=swap');

.about-section {
  --about-bg: #050505;
  --about-text: #f5f5f5;
  --about-muted: #9ca3af;
  --about-accent: #00e5ff;
  --about-accent-dim: rgba(0, 229, 255, 0.14);
  --about-glass: rgba(255, 255, 255, 0.035);
  --about-glass-strong: rgba(255, 255, 255, 0.06);
  --about-border: rgba(255, 255, 255, 0.09);
  --about-border-hover: rgba(0, 229, 255, 0.35);

  --ambient-x: 50%;
  --ambient-y: 30%;

  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: var(--about-bg);
  color: var(--about-text);
  padding: clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 5vw, 3rem);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  /* new stacking context established above avoids paints from
     bleeding into the rest of the page during scroll animation */
}

.about-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  contain: strict;
}

.about-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 75%);
}

.about-grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  /* static image, painted once — no per-frame recompute */
}

.about-ambient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    480px circle at var(--ambient-x) var(--ambient-y),
    rgba(0, 229, 255, 0.06),
    transparent 70%
  );
  will-change: background;
}

.about-container {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

.about-header {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--about-accent);
  padding-bottom: 1.25rem;
}

.about-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: clamp(2.3rem, 6vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -0.01em;
  color: var(--about-text);
  margin: 0 0 1.25rem;
}

.about-heading .line {
  display: block;
  overflow: hidden;
}

.about-heading .word {
  display: inline-block;
  transform: translateY(110%);
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--wd, 0) * 70ms);
  will-change: transform, opacity;
}

.is-visible .about-heading .word {
  transform: translateY(0);
  opacity: 1;
}

.about-subtitle {
  max-width: 34rem;
  color: var(--about-muted);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.6;
}

.about-main {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.about-story p {
  color: var(--about-muted);
  font-size: clamp(0.95rem, 1.1vw, 1.02rem);
  line-height: 1.75;
  margin: 0 0 1.15rem;
}

.about-story strong {
  color: var(--about-text);
  font-weight: 600;
}

.about-stack {
  margin-top: 2rem;
}

.stack-label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--about-muted);
  margin-bottom: 0.9rem;
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: var(--about-text);
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .pill {
    background: rgba(10, 11, 12, 0.9);
  }
}

@media (hover: hover) and (pointer: fine) {
  .pill:hover {
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    color: var(--about-accent);
    transform: translateY(-2px);
  }
}

.about-visual {
  display: flex;
  justify-content: center;
}

.glass-profile {
  --rx: 0deg;
  --ry: 0deg;
  --mx: 50%;
  --my: 50%;

  position: relative;
  width: 100%;
  max-width: 320px;
  padding: 1.5rem 1.5rem 1.75rem;
  border-radius: 28px;
  border: 1px solid var(--about-border);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 30px 60px -20px rgba(0, 0, 0, 0.7);
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease;
  will-change: transform;
}

@supports not (backdrop-filter: blur(1px)) {
  .glass-profile {
    background: rgba(12, 13, 14, 0.94);
  }
}

@media (hover: hover) and (pointer: fine) {
  .glass-profile:hover {
    border-color: var(--about-border-hover);
  }
}

.glass-profile-sheen {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    180px circle at var(--mx) var(--my),
    rgba(255, 255, 255, 0.12),
    transparent 60%
  );
  pointer-events: none;
}

.glass-profile-photo {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: grayscale(0.15) contrast(1.05);
  transform: scale(1);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (hover: hover) and (pointer: fine) {
  .glass-profile:hover .glass-profile-photo img {
    transform: scale(1.03);
  }
}

.glass-profile-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 35%);
  pointer-events: none;
}

.glass-profile-caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 1.1rem;
  text-align: center;
}

.glass-name {
  font-family: 'Fraunces', serif;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.glass-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--about-accent);
  position: relative;
  padding-top: 0.55rem;
  margin-top: 0.25rem;
}

.glass-role::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 1px;
  background: var(--about-accent);
  opacity: 0.5;
}

/* ---------------------------------------------------------------------
   Social profile row — compact glass buttons, digital-business-card feel
   --------------------------------------------------------------------- */
.social-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--about-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .social-link {
    background: rgba(10, 11, 12, 0.9);
  }
}

.social-link svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (hover: hover) and (pointer: fine) {
  .social-link:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    color: var(--about-text);
  }

  .social-link:hover svg {
    transform: translateY(-1px);
  }
}

.social-link:focus-visible {
  outline: 2px solid var(--about-accent);
  outline-offset: 3px;
}

.about-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.meta-card {
  --rx: 0deg;
  --ry: 0deg;

  position: relative;
  padding: 1.6rem 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(0) scale(1);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
  outline-offset: 4px;
  will-change: transform;
}

@supports not (backdrop-filter: blur(1px)) {
  .meta-card {
    background: rgba(12, 13, 14, 0.92);
  }
}

@media (hover: hover) and (pointer: fine) {
  .meta-card:hover {
    transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01);
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    box-shadow: 0 20px 40px -24px rgba(0, 229, 255, 0.25);
  }
}

.meta-card:focus-visible {
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01);
  border-color: var(--about-border-hover);
  outline: 2px solid var(--about-accent);
}

.meta-card--accent {
  border-color: rgba(0, 229, 255, 0.25);
  background: linear-gradient(160deg, var(--about-accent-dim), transparent 70%);
}

.meta-kicker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}

.meta-kicker {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--about-muted);
}

/* Title row that hosts an inline status LED directly beside the text */
.meta-title--status {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

/* Status LED — a quiet, professional "active" indicator, CSS-only pulse */
.status-led {
  --led-color: #ff4d4f;

  position: relative;
  width: 7px;
  height: 7px;
  min-width: 7px;
  border-radius: 50%;
  background: var(--led-color);
  box-shadow: 0 0 5px 0.5px rgba(255, 77, 79, 0.65);
  flex-shrink: 0;
}

.status-led::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid var(--led-color);
  opacity: 0.5;
  animation: status-pulse 2.4s ease-in-out infinite;
}

@keyframes status-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(0.85);
    opacity: 0;
  }
}

.meta-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--about-text);
  margin: 0 0 0.3rem;
  line-height: 1.3;
}

.meta-detail {
  font-size: 0.85rem;
  color: var(--about-muted);
  margin: 0;
}

.stagger {
  opacity: 0;
  transform: translate3d(0, 24px, 0) scale(0.98);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--d, 0) * 90ms);
  will-change: transform, opacity;
}

.is-visible .stagger {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

/* Low-power / touch devices: cut heavy blur and mouse-only effects */
@media (pointer: coarse), (hover: none) {
  .glass-profile,
  .meta-card,
  .pill,
  .social-link {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .glass-profile,
  .meta-card {
    transform: none !important;
  }

  .glass-profile:hover .glass-profile-photo img {
    transform: none !important;
  }
}

@media (max-width: 900px) {
  .about-main {
    grid-template-columns: 1fr;
  }

  .about-visual {
    order: -1;
  }

  .glass-profile {
    max-width: 260px;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .about-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 380px) {
  .about-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .social-link {
    font-size: 0.62rem;
    padding: 0.45rem 0.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stagger,
  .about-heading .word,
  .glass-profile,
  .meta-card,
  .pill,
  .social-link,
  .glass-profile-photo img {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }

  .status-led::after {
    animation: none !important;
    opacity: 0 !important;
  }
}
`;function ud(e){return(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,...e,children:(0,x.jsx)(`path`,{d:`M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z`})})}function dd(e){return(0,x.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,"aria-hidden":`true`,...e,children:[(0,x.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`5`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,x.jsx)(`circle`,{cx:`17.2`,cy:`6.8`,r:`1`,fill:`currentColor`,stroke:`none`})]})}function fd(e){return(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,...e,children:(0,x.jsx)(`path`,{d:`M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23H8.5V8.25z`})})}function pd({name:e,...t}){return e===`github`?(0,x.jsx)(ud,{...t}):e===`instagram`?(0,x.jsx)(dd,{...t}):e===`linkedin`?(0,x.jsx)(fd,{...t}):null}function md(e=6){let t=(0,b.useRef)(null),n=(0,b.useRef)(!0),r=(0,b.useRef)(null),i=(0,b.useRef)({x:.5,y:.5}),a=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=window.matchMedia(`(pointer: coarse), (hover: none)`).matches,t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;return n.current=!e&&!t,()=>{a.current!=null&&cancelAnimationFrame(a.current)}},[]);let o=()=>{a.current=null;let n=t.current;if(!n)return;let{x:r,y:o}=i.current,s=(r-.5)*e*2,c=(.5-o)*e*2;n.style.setProperty(`--rx`,`${c}deg`),n.style.setProperty(`--ry`,`${s}deg`),n.style.setProperty(`--mx`,`${r*100}%`),n.style.setProperty(`--my`,`${o*100}%`)};return{ref:t,onMouseEnter:()=>{if(!n.current)return;let e=t.current;e&&(r.current=e.getBoundingClientRect())},onMouseMove:e=>{if(!n.current)return;let t=r.current;t&&(i.current={x:(e.clientX-t.left)/t.width,y:(e.clientY-t.top)/t.height},a.current??=requestAnimationFrame(o))},onMouseLeave:()=>{let e=t.current;a.current!=null&&(cancelAnimationFrame(a.current),a.current=null),e&&(e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`))}}}function hd(e=.15,t=`-8% 0px -10% 0px`){let n=(0,b.useRef)(null),[r,i]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let r=n.current;if(!r)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){i(!0);return}let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{threshold:e,rootMargin:t});return a.observe(r),()=>a.disconnect()},[e,t]),{ref:n,inView:r}}function gd(){let e=(0,b.useRef)(null),{ref:t,inView:n}=hd(.15),r=md(6),i=md(4),a=md(4),o=md(4);return(0,b.useEffect)(()=>{let t=e.current;if(!t||window.matchMedia(`(pointer: coarse), (hover: none)`).matches||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let n=null,r=e=>{n||=requestAnimationFrame(()=>{let r=t.getBoundingClientRect(),i=(e.clientX-r.left)/r.width*100,a=(e.clientY-r.top)/r.height*100;t.style.setProperty(`--ambient-x`,`${i}%`),t.style.setProperty(`--ambient-y`,`${a}%`),n=null})};return t.addEventListener(`mousemove`,r,{passive:!0}),()=>{t.removeEventListener(`mousemove`,r),n&&cancelAnimationFrame(n)}},[]),(0,x.jsxs)(`section`,{id:`about`,ref:n=>{e.current=n,t.current=n},className:`about-section ${n?`is-visible`:``}`,"aria-labelledby":`about-heading`,children:[(0,x.jsx)(`style`,{children:ld}),(0,x.jsxs)(`div`,{className:`about-backdrop`,"aria-hidden":`true`,children:[(0,x.jsx)(`div`,{className:`about-grain`}),(0,x.jsx)(`div`,{className:`about-grid`}),(0,x.jsx)(`div`,{className:`about-ambient`})]}),(0,x.jsxs)(`div`,{className:`about-container`,children:[(0,x.jsxs)(`header`,{className:`about-header stagger`,style:{"--d":`0`},children:[(0,x.jsx)(`span`,{className:`about-eyebrow`,children:`01 — About`}),(0,x.jsxs)(`h2`,{id:`about-heading`,className:`about-heading`,children:[(0,x.jsx)(`span`,{className:`line`,children:`The person`.split(` `).map((e,t)=>(0,x.jsx)(`span`,{className:`word`,style:{"--wd":t},children:e},t))}),(0,x.jsx)(`span`,{className:`line`,children:`behind the code`.split(` `).map((e,t)=>(0,x.jsx)(`span`,{className:`word`,style:{"--wd":t+2},children:e},t))})]}),(0,x.jsx)(`p`,{className:`about-subtitle`,children:`Developer focused on building thoughtful, scalable digital experiences.`})]}),(0,x.jsxs)(`div`,{className:`about-main`,children:[(0,x.jsxs)(`div`,{className:`about-story stagger`,style:{"--d":`1`},children:[(0,x.jsx)(`p`,{children:`Aditya Kshirsagar is a Computer Engineering diploma graduate with a focused specialization in MERN stack development. His work sits at the intersection of clean architecture and considered interface design — building full-stack applications that are as maintainable on the server as they are pleasant to use on screen.`}),(0,x.jsxs)(`p`,{children:[`That foundation was tested and sharpened at`,` `,(0,x.jsx)(`strong`,{children:`Mountreach Solution Private Limited`}),`, where hands-on experience with production codebases turned classroom fundamentals into practical engineering instinct — writing React interfaces, building Node and Express services, and shaping MongoDB data layers for real users.`]}),(0,x.jsx)(`p`,{children:`The approach stays consistent regardless of the problem: understand the system before touching the code, favor clarity over cleverness, and keep learning as the stack evolves.`}),(0,x.jsxs)(`div`,{className:`about-stack`,role:`list`,"aria-label":`Core technologies`,children:[(0,x.jsx)(`span`,{className:`stack-label`,children:`Core stack`}),(0,x.jsx)(`div`,{className:`stack-pills`,children:sd.map(e=>(0,x.jsx)(`span`,{className:`pill`,role:`listitem`,children:e},e))})]})]}),(0,x.jsx)(`div`,{className:`about-visual stagger`,style:{"--d":`2`},children:(0,x.jsxs)(`div`,{className:`glass-profile`,ref:r.ref,onMouseEnter:r.onMouseEnter,onMouseMove:r.onMouseMove,onMouseLeave:r.onMouseLeave,children:[(0,x.jsx)(`div`,{className:`glass-profile-sheen`,"aria-hidden":`true`}),(0,x.jsx)(`div`,{className:`glass-profile-photo`,children:(0,x.jsx)(`img`,{src:od,alt:`Portrait of Aditya Kshirsagar`,loading:`lazy`,decoding:`async`})}),(0,x.jsxs)(`div`,{className:`glass-profile-caption`,children:[(0,x.jsx)(`span`,{className:`glass-name`,children:`Aditya Kshirsagar`}),(0,x.jsx)(`span`,{className:`glass-role`,children:`MERN Stack Developer`})]}),(0,x.jsx)(`nav`,{className:`social-row`,"aria-label":`Social profiles`,children:cd.map(e=>(0,x.jsxs)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`social-link`,"aria-label":e.aria,children:[(0,x.jsx)(pd,{name:e.key}),e.label]},e.key))})]})})]}),(0,x.jsxs)(`div`,{className:`about-meta`,children:[(0,x.jsxs)(`article`,{className:`meta-card stagger`,style:{"--d":`3`},ref:i.ref,onMouseEnter:i.onMouseEnter,onMouseMove:i.onMouseMove,onMouseLeave:i.onMouseLeave,tabIndex:0,children:[(0,x.jsx)(`div`,{className:`meta-kicker-row`,children:(0,x.jsx)(`span`,{className:`meta-kicker`,children:`Experience`})}),(0,x.jsx)(`h3`,{className:`meta-title`,children:`Mountreach Solution Pvt. Ltd.`}),(0,x.jsx)(`p`,{className:`meta-detail`,children:`MERN Stack Developer`})]}),(0,x.jsxs)(`article`,{className:`meta-card stagger`,style:{"--d":`4`},ref:a.ref,onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseLeave:a.onMouseLeave,tabIndex:0,children:[(0,x.jsx)(`div`,{className:`meta-kicker-row`,children:(0,x.jsx)(`span`,{className:`meta-kicker`,children:`Education`})}),(0,x.jsx)(`h3`,{className:`meta-title`,children:`Diploma, Computer Engineering`}),(0,x.jsx)(`p`,{className:`meta-detail`,children:`Polytechnic`})]}),(0,x.jsxs)(`article`,{className:`meta-card meta-card--accent stagger`,style:{"--d":`5`},ref:o.ref,onMouseEnter:o.onMouseEnter,onMouseMove:o.onMouseMove,onMouseLeave:o.onMouseLeave,tabIndex:0,children:[(0,x.jsx)(`div`,{className:`meta-kicker-row`,children:(0,x.jsx)(`span`,{className:`meta-kicker`,children:`Recognition`})}),(0,x.jsxs)(`h3`,{className:`meta-title meta-title--status`,children:[(0,x.jsx)(`span`,{className:`status-led`,"aria-hidden":`true`}),`Intern of the Month`]}),(0,x.jsx)(`p`,{className:`meta-detail`,children:`Mountreach Solution Pvt. Ltd.`})]})]})]})]})}function _d(){let[e,t]=(0,b.useState)(!0);return(0,x.jsxs)(`div`,{className:`
        relative
        min-h-screen
        w-full
        overflow-x-clip
        bg-[#050505]
        text-white
        antialiased
      `,style:{WebkitFontSmoothing:`antialiased`,MozOsxFontSmoothing:`grayscale`},children:[(0,x.jsxs)(`div`,{"aria-hidden":`true`,className:`
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        `,children:[(0,x.jsx)(`div`,{className:`
            absolute
            left-1/2
            top-[-300px]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.035]
            blur-[140px]
          `}),(0,x.jsx)(`div`,{className:`
            absolute
            right-[-220px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[150px]
          `}),(0,x.jsx)(`div`,{className:`
            absolute
            bottom-[-260px]
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.018]
            blur-[150px]
          `}),(0,x.jsx)(`div`,{className:`
            absolute
            inset-0
            opacity-[0.02]
          `,style:{backgroundImage:`
              linear-gradient(
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              )
            `,backgroundSize:`80px 80px`}}),(0,x.jsx)(`div`,{className:`
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.30)_100%)]
          `})]}),e&&(0,x.jsx)(`div`,{className:`fixed inset-0 z-[9999]`,children:(0,x.jsx)(S,{onFinished:()=>{t(!1)}})}),(0,x.jsxs)(`div`,{className:`relative z-10 min-h-screen`,children:[(0,x.jsx)(re,{}),(0,x.jsxs)(`main`,{children:[(0,x.jsx)(ad,{}),(0,x.jsx)(gd,{}),(0,x.jsx)(de,{}),(0,x.jsx)(ze,{}),(0,x.jsx)(ve,{})]}),(0,x.jsx)(`footer`,{className:`
            border-t
            border-white/[0.06]
            bg-black/20
            px-6
            py-10
          `,children:(0,x.jsxs)(`div`,{className:`
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            `,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`
                  text-sm
                  font-semibold
                  tracking-[0.18em]
                  text-white/85
                `,children:`ADITYA KSHIRSAGAR`}),(0,x.jsx)(`p`,{className:`
                  mt-2
                  text-xs
                  text-white/35
                `,children:`MERN Stack Developer · Computer Engineering`})]}),(0,x.jsxs)(`p`,{className:`
                text-xs
                text-white/30
              `,children:[`© `,new Date().getFullYear(),` Aditya Kshirsagar. All rights reserved.`]})]})})]})]})}var vd=document.getElementById(`root`);if(!vd)throw Error(`Root element #root was not found.`);y.createRoot(vd).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(_d,{})}));