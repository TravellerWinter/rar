/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-applicationcache-audio-batteryapi-blobconstructor-canvas-canvastext-contenteditable-contextmenu-cookies-cors-cryptography-customelements-customevent-customprotocolhandler-dart-dataview-eventlistener-forcetouch-geolocation-history-indexeddb-json-mathml-pagevisibility-pointerlock-queryselector-search-serviceworker-touchevents-unicode-video-setclasses !*/
!function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,i,a,s;for(var c in x)if(x.hasOwnProperty(c)){if(e=[],t=x[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),b.push((r?"":"no-")+s.join("-"))}}function i(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?_.className.baseVal=t:_.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==o.length?Modernizr[o[0]]=t:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=t),i([(t&&0!=t?"":"no-")+o.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function l(e,n,o,r){var i,s,c,l,u="modernizr",f=a("div"),p=d();if(parseInt(o,10))for(;o--;)c=a("div"),c.id=r?r[o]:u+(o+1),f.appendChild(c);return i=a("style"),i.type="text/css",i.id="s"+u,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=l,_.offsetHeight):f.parentNode.removeChild(f),!!s}function u(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?f(r,n||t):r);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}function m(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(v(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+v(t[r])+":"+o+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==y(e,null,"position")})}return n}function h(e,t,r,i){function c(){l&&(delete A.style,delete A.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var d=m(e,r);if(!o(d,"undefined"))return d}for(var l,f,p,v,y,h=["modernizr","tspan","samp"];!A.style&&h.length;)l=!0,A.modElem=a(h.shift()),A.style=A.modElem.style;for(p=e.length,f=0;p>f;f++)if(v=e[f],y=A.style[v],u(v,"-")&&(v=s(v)),A.style[v]!==n){if(i||o(r,"undefined"))return c(),"pfx"==t?v:!0;try{A.style[v]=r}catch(g){}if(A.style[v]!=y)return c(),"pfx"==t?v:!0}return c(),!1}function g(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,i):(s=(e+" "+L.join(a+" ")+a).split(" "),p(s,t,n))}function T(e,t){var n=e.deleteDatabase(t);n.onsuccess=function(){c("indexeddb.deletedatabase",!0)},n.onerror=function(){c("indexeddb.deletedatabase",!1)}}var b=[],x=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(e){return e instanceof TypeError}return!1}),Modernizr.addTest("customevent","CustomEvent"in e&&"function"==typeof e.CustomEvent),Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),Modernizr.addTest("serviceworker","serviceWorker"in navigator);var _=t.documentElement;Modernizr.addTest("contextmenu","contextMenu"in _&&"HTMLMenuItemElement"in e);var w="svg"===_.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=a("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("contenteditable",function(){if("contentEditable"in _){var e=a("div");return e.contentEditable=!0,"true"===e.contentEditable}});var E=function(){function e(e,t){var r;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r):!1}var o=!("onblur"in t.documentElement);return e}();C.hasEvent=E,Modernizr.addTest("ambientlight",E("devicelight",e)),Modernizr.addTest("inputsearchevent",E("search"));var S;!function(){var e={}.hasOwnProperty;S=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,o;for(e=0;e<n.length;e++)(o=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=c});var P=C.testStyles=l;Modernizr.addTest("mathml",function(){var e;return P("#modernizr{position:absolute;display:inline-block}",function(t){t.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=t.offsetHeight>t.offsetWidth}),e}),Modernizr.addTest("unicode",function(){var e,t=a("span"),n=a("span");return P("#modernizr{font-family:Arial,sans;font-size:300em;}",function(o){t.innerHTML=w?"妇":"&#5987;",n.innerHTML=w?"☆":"&#9734;",o.appendChild(t),o.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e});var O="Moz O ms Webkit",k=C._config.usePrefixes?O.split(" "):[];C._cssomPrefixes=k;var z=function(t){var o,r=j.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),o=t.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+t;for(var a=0;r>a;a++){var s=j[a],c=s.toUpperCase()+"_"+o;if(c in i)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=z;var L=C._config.usePrefixes?O.toLowerCase().split(" "):[];C._domPrefixes=L;var M={elem:a("modernizr")};Modernizr._q.push(function(){delete M.elem});var A={style:M.elem.style};Modernizr._q.unshift(function(){delete A.style}),C.testAllProps=g;var N=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=s(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("batteryapi",!!N("battery",navigator),{aliases:["battery-api"]});var $=N("crypto",e);Modernizr.addTest("crypto",!!N("subtle",$)),Modernizr.addTest("dart",!!N("startDart",navigator)),Modernizr.addTest("forcetouch",function(){return E(N("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addAsyncTest(function(){var t;try{t=N("indexedDB",e)}catch(n){}if(t){var o="modernizr-"+Math.random(),r=t.open(o);r.onerror=function(){r.error&&"InvalidStateError"===r.error.name?c("indexeddb",!1):(c("indexeddb",!0),T(t,o))},r.onsuccess=function(){c("indexeddb",!0),T(t,o)}}else c("indexeddb",!1)}),Modernizr.addTest("pagevisibility",!!N("hidden",t,!1)),Modernizr.addTest("pointerlock",!!N("exitPointerLock",t)),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var j=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=j,Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",j.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(o,function(e){n=9===e.offsetTop})}return n}),r(),i(b),delete C.addTest,delete C.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);