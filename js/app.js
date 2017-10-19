"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function t(e,n,i){function r(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return r(n||t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(t,e,n){!function(t,i){"object"==(void 0===n?"undefined":_typeof(n))&&"object"==(void 0===e?"undefined":_typeof(e))?e.exports=i():"function"==typeof define&&define.amd?define("vue-easy-slider",[],i):"object"==(void 0===n?"undefined":_typeof(n))?n["vue-easy-slider"]=i():t["vue-easy-slider"]=i()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var r=i(n(1)),o=i(n(11));e.Slider=r.default,e.SliderItem=o.default},function(t,e,n){n(2);var i=n(7)(n(8),n(10),"data-v-5dba9d84",null);t.exports=i.exports},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),n(5)("1be75862",i,!0)},function(t,e,n){(t.exports=n(4)()).push([t.id,".slider[data-v-5dba9d84]{position:relative;overflow:hidden}.slider:hover .btn-left[data-v-5dba9d84]{background:linear-gradient(90deg,rgba(0,0,0,.2),transparent)}.slider:hover .btn-right[data-v-5dba9d84]{background:linear-gradient(-90deg,rgba(0,0,0,.2),transparent)}.items[data-v-5dba9d84]{position:relative;height:100%;width:100%}.btn[data-v-5dba9d84]{position:absolute;top:0;z-index:999;height:100%;width:50px;border:none;background:rgba(0,0,0,.1);outline:none;transition:background .3s;cursor:pointer}.btn-left[data-v-5dba9d84]{left:0;background:linear-gradient(90deg,rgba(0,0,0,.1),transparent)}.btn-right[data-v-5dba9d84]{right:0;background:linear-gradient(-90deg,rgba(0,0,0,.1),transparent)}.slider-icon[data-v-5dba9d84]{display:inline-block;width:15px;height:15px;border-left:2px solid hsla(0,0%,100%,.6);border-bottom:2px solid hsla(0,0%,100%,.6);transition:border .2s}.slider-icon-left[data-v-5dba9d84]{transform:rotate(45deg)}.slider-icon-right[data-v-5dba9d84]{transform:rotate(-135deg)}.btn:hover .slider-icon[data-v-5dba9d84]{border-color:#fff}.indicators[data-v-5dba9d84]{position:absolute;bottom:20px;z-index:999}.indi-center[data-v-5dba9d84]{left:50%;transform:translateX(-50%)}.indi-left[data-v-5dba9d84]{left:6%}.indi-right[data-v-5dba9d84]{right:6%}.slider-indicator-icon[data-v-5dba9d84]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[data-v-5dba9d84]{background-color:hsla(0,0%,100%,.2)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(o(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(o(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(h)return m;i.parentNode.removeChild(i)}if(v){var o=p++;i=f||(f=r()),e=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),e=u.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function u(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document,d=n(6),c={},l=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=d(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(u=c[a.id]).refs--,n.push(u)}e?(r=d(t,e),i(r)):r=[];for(o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete c[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],u={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=_typeof(t.default);"object"!==a&&"function"!==a||(r=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),i){var s=Object.create(u.computed||null);Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}}),u.computed=s}return{esModule:r,exports:o,options:u}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);e.default={data:function(){return{children:[],nowItemIndex:0,timer:0}},props:{width:{type:String,default:"auto"},height:{type:String,default:"300px"},interval:{type:Number,default:3e3},speed:{type:Number,default:500},auto:{type:Boolean,default:!0},indicators:{default:"center"},controlBtn:{type:Boolean,default:!0},animation:{type:String,default:"normal"},initIndex:{type:Number,default:0}},computed:{childrenLength:function(){return this.children.length}},methods:{updateItems:function(){var t=this;this.children=this.$children.filter(function(t){return"easy-slider-item"===t.$options.name}),this.nowItemIndex=this.initIndex;var e=this.children[this.nowItemIndex];e&&e.initItem(),this.$nextTick(function(){e&&(t.handleSetTopItem(e),t.autoplay())})},handleSetTopItem:function(t,e){t&&t.$el&&(t.$el.style.zIndex=99),e&&e.$el&&(e.$el.style.zIndex=98)},autoplay:function(){if(this.auto&&!(this.childrenLength<2)){var t=this;this.timer&&clearInterval(this.timer),this.timer=setInterval(function(){var e=(t.nowItemIndex+1)%t.childrenLength;t.jump(e)},t.interval)}},jump:function(t){var e=this.children[this.nowItemIndex],n=this.children[t],i=t-this.nowItemIndex,r=i>0;i===-(this.childrenLength-1)&&(r=!0),i===this.childrenLength-1&&(r=!1),e&&n&&(e.hideHandle(r),n.showHandle(r),this.nowItemIndex=t,this.$emit("changeSlide",{index:t}))},prev:function(){if(!(this.childrenLength<2)){var t=this.nowItemIndex-1==-1?this.childrenLength-1:this.nowItemIndex-1;this.$emit("previous",{original:this.nowItemIndex,next:t}),this.jump(t),this.autoplay()}},next:function(){if(!(this.childrenLength<2)){var t=(this.nowItemIndex+1)%this.childrenLength;this.$emit("next",{original:this.nowItemIndex,next:t}),this.jump(t),this.autoplay()}},indicatorHandle:function(t){this.childrenLength<2||t!==this.nowItemIndex&&(this.jump(t),this.autoplay())}},created:function(){this.handleItemChange=(0,i.throttle)(this.updateItems,100),this.jump=(0,i.debounce)(this.jump,this.speed+100)},beforeMount:function(){this.handleItemChange()},activated:function(){this.handleItemChange()},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},deactivated:function(){this.timer&&clearTimeout(this.timer)}}},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.throttle=function(t,e,n){var i,r=null;return function(){var o=this,a=arguments,u=+new Date;clearTimeout(r),i||(i=u),u-i>=n?(t.apply(o,a),i=u):r=setTimeout(function(){t.apply(o,a)},e)}},e.debounce=function(t,e){var n=!1;return function(){n||(n=!0,t.apply(this,arguments),setTimeout(function(){return n=!1},e))}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider",style:{width:t.width,height:t.height}},[n("div",{staticClass:"items"},[t._t("default")],2),t._v(" "),t.indicators?n("div",{class:"indicators indi-"+t.indicators,on:{click:function(t){t.stopPropagation()}}},t._l(t.childrenLength,function(e){return n("span",{key:e,staticClass:"slider-indicator-icon",class:{"slider-indicator-active":t.nowItemIndex===e-1},on:{click:function(n){t.indicatorHandle(e-1)}}})})):t._e(),t._v(" "),t.controlBtn?n("button",{staticClass:"btn btn-left",on:{click:function(e){e.stopPropagation(),t.prev(e)}}},[n("i",{staticClass:"slider-icon slider-icon-left"})]):t._e(),t._v(" "),t.controlBtn?n("button",{staticClass:"btn btn-right",on:{click:function(e){e.stopPropagation(),t.next(e)}}},[n("i",{staticClass:"slider-icon slider-icon-right"})]):t._e()])},staticRenderFns:[]}},function(t,e,n){n(12);var i=n(7)(n(14),n(36),"data-v-31c81028",null);t.exports=i.exports},function(t,e,n){var i=n(13);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),n(5)("061c0d1f",i,!0)},function(t,e,n){(t.exports=n(4)()).push([t.id,".slider-item[data-v-31c81028],.wrap[data-v-31c81028]{position:absolute;top:0;left:0;width:100%;height:100%}",""])},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(15)),r=function(t){var e=getComputedStyle(t).width;return parseFloat(e)},o=function(t,e){return e?-t:t},a=function(t,e,n){new i.default(t,e).animate(n)},u={normal:{beforeEnter:function(t,e){var n=o(r(e),!t.direction);e.style.transform="translateX("+n+"px)"},enter:function(t,e,n){var i=o(r(e),!t.direction);a(t.speed,function(t){e.style.transform="translateX("+(i-i*t)+"px)"},n)},leave:function(t,e,n){var i=o(r(e),t.direction);a(t.speed,function(t){e.style.transform="translateX("+i*t+"px)"},n)}},fade:{beforeEnter:function(t,e){e.style.opacity=0,e.style.transform="translateX("+(t.direction?"10px":"-10px")+")"},enter:function(t,e,n){var i=t.direction?10:-10;a(t.speed,function(t){e.style.opacity=t,e.style.transform="translateX("+(i-i*t)+"px)"},n)},leave:function(t,e,n){var i=t.direction?-10:10;a(t.speed,function(t){e.style.opacity=1-t,e.style.transform="translateX("+i*t+"px)"},n)}}};e.default={name:"easy-slider-item",data:function(){return{animate:!1,direction:0,speed:0,show:!1,animation:""}},props:{onClick:{type:Function,default:function(){}}},methods:{beforeEnter:function(t){u[this.animation].beforeEnter(this,t)},enter:function(t,e){u[this.animation].enter(this,t,e)},leave:function(t,e){var n=this;u[this.animation].leave(this,t,function(){e(),n.show=!1})},showHandle:function(t){var e=this;this.direction=t,this.show=!0,this.$nextTick(function(){return e.animate=!0})},hideHandle:function(t){this.direction=t,this.animate=!1},initItem:function(){this.animate=!0,this.show=!0}},created:function(){this.$parent.handleItemChange(),this.speed=this.$parent.speed,this.animation=this.$parent.animation}}},function(t,e,n){function i(t){return t&&t.__esModule?t:{default:t}}function r(){return!performance&&performance.now?performance.now():Date.now?Date.now():(new Date).getTime()}Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(16)),a=i(n(17));void 0===window.requestAnimationFrame&&(window.requestAnimationFrame=function(t){return setTimeout(function(){t(r())},1e3/60)},window.cancelAnimationFrame=function(t){return clearTimeout(t)});var u=function(){function t(e,n,i){(0,o.default)(this,t),this.duration=e,this.update=n,this.easing=i}return(0,a.default)(t,[{key:"animate",value:function(t){function e(s){n=n||s;var d=Math.min(1,(s-n)/i);r.call(a,o?o(d):d,d),d<1?u=requestAnimationFrame(e):t(a)}var n=0,i=this.duration,r=this.update,o=this.easing,a=this,u=0;a.cancel=function(){cancelAnimationFrame(u),r.call(a,0,0),t(new Error("User canceled!"))},u=requestAnimationFrame(e)}},{key:"ease",value:function(e){return new t(this.duration,this.update,e)}}]),t}();e.default=u},function(t,e){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n(18));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={default:n(19),__esModule:!0}},function(t,e,n){n(20);var i=n(23).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(21);i(i.S+i.F*!n(31),"Object",{defineProperty:n(27).f})},function(t,e,n){var i=n(22),r=n(23),o=n(24),a=n(26),u="prototype",s=function t(e,n,s){var d,c,l,f=e&t.F,p=e&t.G,h=e&t.S,m=e&t.P,v=e&t.B,g=e&t.W,b=p?r:r[n]||(r[n]={}),y=b[u],x=p?i:h?i[n]:(i[n]||{})[u];p&&(s=n);for(d in s)(c=!f&&x&&void 0!==x[d])&&d in b||(l=c?x[d]:s[d],b[d]=p&&"function"!=typeof x[d]?s[d]:v&&c?o(l,i):g&&x[d]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):m&&"function"==typeof l?o(Function.call,l):l,m&&((b.virtual||(b.virtual={}))[d]=l,e&t.R&&y&&!y[d]&&a(y,d,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(25);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(27),r=n(35);t.exports=n(31)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(28),r=n(30),o=n(34),a=Object.defineProperty;e.f=n(31)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(29);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==(void 0===t?"undefined":_typeof(t))?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(31)&&!n(32)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(32)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(29),r=n(22).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(29);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"slider-item",on:{click:t.onClick}},[n("transition",{attrs:{css:!1},on:{beforeEnter:t.beforeEnter,enter:t.enter,leave:t.leave}},[t.animate?n("div",{staticClass:"wrap"},[t._t("default")],2):t._e()])],1):t._e()},staticRenderFns:[]}}])})},{}],2:[function(t,e,n){var i=t("vue-easy-slider");new Vue({el:"#slideshow",data:function(){return{items:[{name:"django",backgroundImage:"django.jpg",headline:"The IPHONE UNCHAINED.",text:"Tarantino’s outrageous film Djano Unchained needed an equally in your face mobile experience. Bloody good awesomeness ensued."},{name:"vizio",backgroundImage:"vizio.jpg",headline:"SAY HELLO TO THE future of VIZIO.",text:"When Vizio needed to pull the wrap off its new family of PCs they called on Envoy to conceptualize, direct and produce a series of short product films."},{name:"escape",backgroundImage:"escape.jpg",headline:"HELPING Earth’s Greatest Secrets break out.",text:"Activate rocket boots! We created a series of out of this world mobile apps and games to introduce the hilarious animated film Escape From Planet Earth."},{name:"utlra",backgroundImage:"ultra.jpg",headline:"WORLD MEET ULTRA. ULTRA MEET WORLD.",text:"Asked to launch T-Mobile’s new internationally-minded brand, Ultra Mobile, we created a campaign that’s creativity knows no borders."}]}},computed:{getHeight:function(){return"675px"}},methods:{getStyle:function(t){var e="background-image: url(/images/"+t.backgroundImage+"); background-repeat: no-repeat;";return e+="height: 675px;"}},components:{Slider:i.Slider,SliderItem:i.SliderItem}})},{"vue-easy-slider":1}]},{},[2]);