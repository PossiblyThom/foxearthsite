/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function(g){function c(e){if(a[e])return a[e].exports;var f=a[e]={i:e,l:!1,exports:{}};return g[e].call(f.exports,f,f.exports,c),f.l=!0,f.exports}var a={};c.m=g;c.c=a;c.d=function(e,f,a){c.o(e,f)||Object.defineProperty(e,f,{enumerable:!0,get:a})};c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};c.t=function(e,a){if((1&a&&(e=c(e)),8&a)||4&a&&"object"==typeof e&&e&&e.__esModule)return e;
var g=Object.create(null);if(c.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var k in e)c.d(g,k,function(a){return e[a]}.bind(null,k));return g};c.n=function(a){var f=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(f,"a",f),f};c.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};c.p="";c(c.s=11)}([,,function(g,c){g.exports=function(a){"complete"===document.readyState||"interactive"===document.readyState?a.call():
document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&a.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",a)}},,function(g,c,a){c=a(5);g.exports="undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{}},function(g,c){function a(c){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===
Symbol&&a!==Symbol.prototype?"symbol":typeof a})(c)}var e;e=function(){return this}();try{e=e||(new Function("return this"))()}catch(f){"object"===("undefined"==typeof window?"undefined":a(window))&&(e=window)}g.exports=e},,,,,,function(g,c,a){g.exports=a(12)},function(g,c,a){function e(a){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}
a.r(c);g=a(2);g=a.n(g);var f=a(4),n=a(13),k=f.window.jarallax;if(f.window.jarallax=n.default,f.window.jarallax.noConflict=function(){return f.window.jarallax=k,this},void 0!==f.jQuery){a=function(){var a=arguments||[];Array.prototype.unshift.call(a,this);a=n.default.apply(f.window,a);return"object"!==e(a)?a:this};a.constructor=n.default.constructor;var r=f.jQuery.fn.jarallax;f.jQuery.fn.jarallax=a;f.jQuery.fn.jarallax.noConflict=function(){return f.jQuery.fn.jarallax=r,this}}g()(function(){Object(n.default)(document.querySelectorAll("[data-jarallax]"))})},
function(g,c,a){function e(a,l){var d;if(!(d=function(b){if(Array.isArray(b))return b}(a)||function(b,a){if(Symbol.iterator in Object(b)||"[object Arguments]"===Object.prototype.toString.call(b)){var l=[],d=!0,c=!1,e=void 0;try{for(var f,v=b[Symbol.iterator]();!(d=(f=v.next()).done)&&(l.push(f.value),!a||l.length!==a);d=!0);}catch(g){c=!0,e=g}finally{try{d||null==v.return||v.return()}finally{if(c)throw e;}}return l}}(a,l)))throw new TypeError("Invalid attempt to destructure non-iterable instance");
return d}function f(a){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,l){for(var d=0;d<l.length;d++){var b=l[d];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(a,b.key,b)}}function k(){h=A?(!u&&document.body&&((u=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
document.body.appendChild(u)),(u?u.clientHeight:0)||p.window.innerHeight||document.documentElement.clientHeight):p.window.innerHeight||document.documentElement.clientHeight}function r(){q.length&&(q.forEach(function(a,l){var d=a.instance,b=a.oldData,m=d.$item.getBoundingClientRect(),m={width:m.width,height:m.height,top:m.top,bottom:m.bottom,wndW:p.window.innerWidth,wndH:h},c=!b||b.wndW!==m.wndW||b.wndH!==m.wndH||b.width!==m.width||b.height!==m.height,b=c||!b||b.top!==m.top||b.bottom!==m.bottom;q[l].oldData=
m;c&&d.onResize();b&&d.onScroll()}),B()(r))}function x(a,l){("object"===("undefined"==typeof HTMLElement?"undefined":f(HTMLElement))?a instanceof HTMLElement:a&&"object"===f(a)&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)&&(a=[a]);for(var d,b=l,m=Array.prototype.slice.call(arguments,2),c=a.length,e=0;e<c;e++)if("object"===f(b)||void 0===b?a[e].jarallax||(a[e].jarallax=new y(a[e],b)):a[e].jarallax&&(d=a[e].jarallax[b].apply(a[e].jarallax,m)),void 0!==d)return d;return a}a.r(c);g=a(2);g=
a.n(g);var z=a(14),B=a.n(z),p=a(4),u,h,C=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/")||-1<navigator.userAgent.indexOf("Edge/"),A=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),w=function(){for(var a=["transform","WebkitTransform","MozTransform"],l=document.createElement("div"),d=0;d<a.length;d++)if(l&&void 0!==l.style[a[d]])return a[d];return!1}();k();p.window.addEventListener("resize",k);p.window.addEventListener("orientationchange",
k);p.window.addEventListener("load",k);g()(function(){k()});var q=[],D=0,y=function(){function a(l,d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");!0;var b=this;b.instanceID=D++;b.$item=l;b.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,
videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var m=b.$item.dataset||{},c={};if(Object.keys(m).forEach(function(a){var d=a.substr(0,1).toLowerCase()+a.substr(1);d&&void 0!==b.defaults[d]&&(c[d]=m[a])}),b.options=b.extend({},b.defaults,c,d),b.pureOptions=b.extend({},b.options),Object.keys(b.options).forEach(function(a){"true"===b.options[a]?b.options[a]=!0:"false"===b.options[a]&&(b.options[a]=!1)}),b.options.speed=Math.min(2,Math.max(-1,parseFloat(b.options.speed))),
"string"==typeof b.options.disableParallax&&(b.options.disableParallax=new RegExp(b.options.disableParallax)),b.options.disableParallax instanceof RegExp){var g=b.options.disableParallax;b.options.disableParallax=function(){return g.test(navigator.userAgent)}}if("function"!=typeof b.options.disableParallax&&(b.options.disableParallax=function(){return!1}),"string"==typeof b.options.disableVideo&&(b.options.disableVideo=new RegExp(b.options.disableVideo)),b.options.disableVideo instanceof RegExp){var h=
b.options.disableVideo;b.options.disableVideo=function(){return h.test(navigator.userAgent)}}"function"!=typeof b.options.disableVideo&&(b.options.disableVideo=function(){return!1});var k=b.options.elementInViewport;k&&"object"===f(k)&&void 0!==k.length&&(k=e(k,1)[0]);k instanceof Element||(k=null);b.options.elementInViewport=k;b.image={src:b.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"};b.initImg()&&b.canInitParallax()&&
b.init()}return function(a,d,b){d&&n(a.prototype,d);b&&n(a,b)}(a,[{key:"css",value:function(a,d){return"string"==typeof d?p.window.getComputedStyle(a).getPropertyValue(d):(d.transform&&w&&(d[w]=d.transform),Object.keys(d).forEach(function(b){a.style[b]=d[b]}),a)}},{key:"extend",value:function(a){var d=arguments;return a=a||{},Object.keys(arguments).forEach(function(b){d[b]&&Object.keys(d[b]).forEach(function(c){a[c]=d[b][c]})}),a}},{key:"getWindowData",value:function(){return{width:p.window.innerWidth||
document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var a=this.options.imgElement;return a&&"string"==typeof a&&(a=this.$item.querySelector(a)),a instanceof Element||(this.options.imgSrc?(a=new Image).src=this.options.imgSrc:a=null),a&&(this.options.keepImg?this.image.$item=a.cloneNode(!0):(this.image.$item=a,this.image.$itemParent=a.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
this.image.bgImage=this.css(this.$item,"background-image")),!(!this.image.bgImage||"none"===this.image.bgImage))}},{key:"canInitParallax",value:function(){return w&&!this.options.disableParallax()}},{key:"init",value:function(){var a={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},d={};if(!this.options.keepImg){var b=this.$item.getAttribute("style");(b&&this.$item.setAttribute("data-jarallax-original-styles",b),this.image.useImgTag)&&(b=this.image.$item.getAttribute("style"))&&
this.image.$item.setAttribute("data-jarallax-original-styles",b)}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,a),this.css(this.image.$container,{"z-index":this.options.zIndex}),C&&this.css(this.image.$container,{opacity:.9999}),this.image.$container.setAttribute("id","jarallax-container-".concat(this.instanceID)),
this.$item.appendChild(this.image.$container),this.image.useImgTag?d=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"font-family":"object-fit: ".concat(this.options.imgSize,"; object-position: ").concat(this.options.imgPosition,";"),"max-width":"none"},a,d):(this.image.$item=document.createElement("div"),this.image.src&&(d=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,
"background-image":this.image.bgImage||'url("'.concat(this.image.src,'")')},a,d))),"opacity"!==this.options.type&&"scale"!==this.options.type&&"scale-opacity"!==this.options.type&&1!==this.options.speed||(this.image.position="absolute"),"fixed"===this.image.position)a=function(a){for(var b=[];null!==a.parentElement;)1===(a=a.parentElement).nodeType&&b.push(a);return b}(this.$item).filter(function(a){a=p.window.getComputedStyle(a);var b=a["-webkit-transform"]||a["-moz-transform"]||a.transform;return b&&
"none"!==b||/(auto|scroll)/.test(a.overflow+a["overflow-y"]+a["overflow-x"])}),this.image.position=a.length?"absolute":"fixed";d.position=this.image.position;this.css(this.image.$item,d);this.image.$container.appendChild(this.image.$item);this.onResize();this.onScroll(!0);this.options.onInit&&this.options.onInit.call(this);"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"});this.addToParallaxList()}},{key:"addToParallaxList",value:function(){q.push({instance:this});
1===q.length&&r()}},{key:"removeFromParallaxList",value:function(){var a=this;q.forEach(function(d,b){d.instance.instanceID===a.instanceID&&q.splice(b,1)})}},{key:"destroy",value:function(){this.removeFromParallaxList();var a=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),a?this.$item.setAttribute("style",a):this.$item.removeAttribute("style"),this.image.useImgTag){var d=this.image.$item.getAttribute("data-jarallax-original-styles");
this.image.$item.removeAttribute("data-jarallax-original-styles");d?this.image.$item.setAttribute("style",a):this.image.$item.removeAttribute("style");this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles);this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container);this.options.onDestroy&&this.options.onDestroy.call(this);delete this.$item.jarallax}},{key:"clipContainer",
value:function(){if("fixed"===this.image.position){var a=this.image.$container.getBoundingClientRect(),d=a.width,a=a.height;this.$clipStyles||(this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","jarallax-clip-".concat(this.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles));d="#jarallax-container-".concat(this.instanceID," {\n           clip: rect(0 ").concat(d,"px ").concat(a,
"px 0);\n           clip: rect(0, ").concat(d,"px, ").concat(a,"px, 0);\n        }");this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=d:this.$clipStyles.innerHTML=d}}},{key:"coverImage",value:function(){var a=this.image.$container.getBoundingClientRect(),d=a.height,b=this.options.speed,c="scroll"===this.options.type||"scroll-opacity"===this.options.type,e=0,f=d,g=0;return c&&(0>b?(e=b*Math.max(d,h),h<d&&(e-=b*(d-h))):e=b*(d+h),1<b?f=Math.abs(e-h):0>b?f=e/b+Math.abs(e):f+=(h-d)*(1-b),
e/=2),this.parallaxScrollDistance=e,g=c?(h-f)/2:(d-f)/2,this.css(this.image.$item,{height:"".concat(f,"px"),marginTop:"".concat(g,"px"),left:"fixed"===this.image.position?"".concat(a.left,"px"):"0",width:"".concat(a.width,"px")}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:f,marginTop:g},container:a}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(a){var d=this.$item.getBoundingClientRect(),b=d.top,c=d.height,
e={},f=d;if(this.options.elementInViewport&&(f=this.options.elementInViewport.getBoundingClientRect()),this.isElementInViewport=0<=f.bottom&&0<=f.right&&f.top<=h&&f.left<=p.window.innerWidth,a||this.isElementInViewport){a=Math.max(0,b);var f=Math.max(0,c+b),g=Math.max(0,-b),k=Math.max(0,b+c-h),n=Math.max(0,c-(b+c-h)),q=Math.max(0,-b+h-c),r=1-2*(h-b)/(h+c),t=1;if(c<h?t=1-(g||k)/c:f<=h?t=f/h:n<=h&&(t=n/h),"opacity"!==this.options.type&&"scale-opacity"!==this.options.type&&"scroll-opacity"!==this.options.type||
(e.transform="translate3d(0,0,0)",e.opacity=t),"scale"===this.options.type||"scale-opacity"===this.options.type)c=1,0>this.options.speed?c-=this.options.speed*t:c+=this.options.speed*(1-t),e.transform="scale(".concat(c,") translate3d(0,0,0)");if("scroll"===this.options.type||"scroll-opacity"===this.options.type)c=this.parallaxScrollDistance*r,"absolute"===this.image.position&&(c-=b),e.transform="translate3d(0,".concat(c,"px,0)");this.css(this.image.$item,e);this.options.onScroll&&this.options.onScroll.call(this,
{section:d,beforeTop:a,beforeTopEnd:f,afterTop:g,beforeBottom:k,beforeBottomEnd:n,afterBottom:q,visiblePercent:t,fromViewportCenter:r})}}},{key:"onResize",value:function(){this.coverImage();this.clipContainer()}}]),a}();x.constructor=y;c.default=x},function(g,c,a){c=a(15);a=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||function(a){var c=+new Date,f=Math.max(0,16-(c-e));a=setTimeout(a,f);return e=c,a};var e=+new Date,f=c.cancelAnimationFrame||c.webkitCancelAnimationFrame||
c.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(a=a.bind(c),f=f.bind(c));(g.exports=a).cancel=f},function(g,c,a){c=a(5);g.exports="undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{}}]);