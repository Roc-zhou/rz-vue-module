!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("rz-vue-module",[],t):"object"==typeof exports?exports["rz-vue-module"]=t():n["rz-vue-module"]=t()}(window,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){var r=e(6);"string"==typeof r&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};e(2)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(a).concat([i]).join("\n")}var o,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var o=0;o<n.length;o++){var s=n[o];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){"use strict";var r,i={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function s(n,t){for(var e=[],r={},i=0;i<n.length;i++){var a=n[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):e.push(r[o]={id:o,parts:[s]})}return e}function l(n,t){for(var e=0;e<n.length;e++){var r=n[e],a=i[r.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(g(r.parts[o],t))}else{for(var s=[];o<r.parts.length;o++)s.push(g(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var r=e.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach(function(e){t.setAttribute(e,n.attributes[e])}),"function"==typeof n.insert)n.insert(t);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function p(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(a,o[t]):n.appendChild(a)}}function f(n,t,e){var r=e.css,i=e.media,a=e.sourceMap;if(i&&n.setAttribute("media",i),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(n,t){var e,r,i;if(t.singleton){var a=m++;e=h||(h=u(t)),r=p.bind(null,e,a,!1),i=p.bind(null,e,a,!0)}else e=u(t),r=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=s(n,t);return l(e,t),function(n){for(var r=[],a=0;a<e.length;a++){var o=e[a],u=i[o.id];u&&(u.refs--,r.push(u))}n&&l(s(n,t),t);for(var c=0;c<r.length;c++){var d=r[c];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete i[d.id]}}}}},function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};e(2)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(1)(!1)).push([n.i,'/*\r\n * @Author: roc_zhou\r\n * 2019 1137938565@qq.com\r\n * https://github.com/Roc-zhou/rz-ui\r\n */\r\n\r\n* {\r\n  box-sizing: border-box !important;\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n  /*white-space: normal;*/\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n*[class~="no-select"]:not(input):not(textarea) {\r\n  -moz-user-select: none;\r\n  /*火狐*/\r\n  -webkit-user-select: none;\r\n  /*webkit浏览器*/\r\n  -ms-user-select: none;\r\n  /*IE10*/\r\n  -khtml-user-select: none;\r\n  /*早期浏览器*/\r\n  user-select: none;\r\n}\r\nhtml,\r\nbody {\r\n  font-family: \'Avenir\', Helvetica, Arial, sans-serif;\r\n  width: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: auto;\r\n}\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\r\n  display: block\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block;\r\n  vertical-align: baseline\r\n}\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0\r\n}\r\n\r\n[hidden], template {\r\n  display: none\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\na:active,\r\na:hover {\r\n  outline: 0\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: 700\r\n}\r\n\r\ndfn {\r\n  font-style: italic\r\n}\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: .67em 0\r\n}\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000\r\n}\r\n\r\nsub, sup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline\r\n}\r\n\r\nsup {\r\n  top: -.5em\r\n}\r\n\r\nsub {\r\n  bottom: -.25em\r\n}\r\n\r\nimg {\r\n  border: 0\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px\r\n}\r\n\r\nhr {\r\n  box-sizing: content-box;\r\n  height: 0\r\n}\r\n\r\npre {\r\n  overflow: auto\r\n}\r\ncode, kbd, pre, samp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em\r\n}\r\n.clear-both::after {\r\n  content: "clear.both";\r\n  display: block;\r\n  height: 0;\r\n  clear: both;\r\n  visibility: hidden;\r\n}\r\n\r\n.clear-both + * {\r\n  clear: both;\r\n}\r\n.disabled {\r\n  /*禁止點擊*/\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: .75;\r\n}\r\n.flex-box, .flex-auto, .flex-wrap, .flex-column, [class*="items-"], [class*="justify-"], [class*="align-"] {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n}\r\n.flex-wrap {\r\n  flex-wrap: wrap;\r\n  -webkit-flex-wrap: wrap;\r\n}\r\n.flex-column {\r\n  -webkit-flex-direction: column;\r\n  flex-direction: column;\r\n}\r\n.flex-auto > * {\r\n  -webkit-flex: 1;\r\n  flex: 1;\r\n}\r\n.items-start {\r\n  -webkit-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.items-end {\r\n  -webkit-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.items-center {\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.items-baseline {\r\n  -webkit-align-items: baseline;\r\n  align-items: baseline;\r\n}\r\n\r\n.items-strecth {\r\n  -webkit-align-items: strecth;\r\n  align-items: strecth;\r\n}\r\n\r\n.justify-start {\r\n  -webkit-justify-content: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  -webkit-justify-content: flex-end;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.justify-center {\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between {\r\n  -webkit-justify-content: space-between;\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-around {\r\n  -webkit-justify-content: space-around;\r\n  justify-content: space-around;\r\n}\r\n\r\n.align-between {\r\n  -webkit-justify-content: space-between;\r\n  justify-content: space-between;\r\n}\r\n\r\n.align-center {\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.align-start {\r\n  -webkit-justify-content: flex-start;\r\n  justify-content: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.align-end {\r\n  -webkit-justify-content: flex-end;\r\n  justify-content: flex-end;\r\n  -webkit-align-items: flex-end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.relative-box {\r\n  position: relative;\r\n}\r\n\r\n.absolute-box {\r\n  position: absolute;\r\n}\r\n\r\n.fixed-box {\r\n  position: fixed;\r\n}\r\n\r\n/*鼠标状态*/\r\n\r\n.cursor-pointer {\r\n  /*连接*/\r\n  cursor: pointer;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  -khtml-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.cursor-grabbing {\r\n  cursor: grabbing; /*手抓型*/\r\n}\r\n\r\n.cursor-none {\r\n  /*禁止*/\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n  -moz-user-select: none;\r\n  /*火狐*/\r\n  -webkit-user-select: none;\r\n  /*webkit浏览器*/\r\n  -ms-user-select: none;\r\n  /*IE10*/\r\n  -khtml-user-select: none;\r\n  /*早期浏览器*/\r\n  user-select: none;\r\n}\r\n\r\n.cursor-crosshair {\r\n  /*十字架*/\r\n  cursor: crosshair\r\n}\r\n\r\n.cursor-move {\r\n  /*移动*/\r\n  cursor: move\r\n}\r\n\r\n.cursor-resize {\r\n  /*改变大小*/\r\n  cursor: e-resize\r\n}\r\n\r\n.cursor-text {\r\n  /*文字编辑*/\r\n  cursor: text\r\n}\r\n\r\n.cursor-wait {\r\n  /*等待*/\r\n  cursor: wait\r\n}\r\n\r\n.cursor-help {\r\n  /*帮助*/\r\n  cursor: help\r\n}',""])},function(n,t,e){"use strict";var r=e(0);e.n(r).a},function(n,t,e){(n.exports=e(1)(!1)).push([n.i,"\n.items-center[data-v-7ce968d5] {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-align-items: center;\r\n  align-items: center;\n}\n@media screen and (max-width: 755px) {\n.mo-paging[data-v-7ce968d5] {\r\n    display: inline-block;\r\n    padding: 0;\r\n    /* margin: 2em 0; */\r\n    font-size: 0;\r\n    list-style: none;\r\n    user-select: none;\n}\n.paging-item[data-v-7ce968d5] {\r\n    display: inline;\r\n    font-size: 0.390625rem /* 25/64 */;\r\n    position: relative;\r\n    padding: 0.15625rem /* 10/64 */ 0.234375rem /* 15/64 */;\r\n    text-decoration: none;\r\n    border: 1px solid #ccc;\r\n    background-color: #fff;\r\n    margin-left: -1px;\r\n    cursor: pointer;\n}\n.paging-item[data-v-7ce968d5]:first-child {\r\n    margin-left: 0;\n}\n.paging-item-disabled[data-v-7ce968d5],\r\n  .paging-item-more[data-v-7ce968d5] {\r\n    background-color: #fff;\r\n    color: #505050;\n}\n.paging-item-disabled[data-v-7ce968d5] {\r\n    cursor: not-allowed;\r\n    opacity: 0.75;\n}\n.paging-item-more[data-v-7ce968d5],\r\n  .paging-item-current[data-v-7ce968d5] {\r\n    cursor: default;\n}\r\n  /* 选中 */\n.paging-item-current[data-v-7ce968d5] {\r\n    background-color: #f2f2f2;\r\n    position: relative;\r\n    z-index: 1;\r\n    border-color: #ccc;\n}\n}\n@media screen and (min-width: 755px) {\n.mo-paging[data-v-7ce968d5] {\r\n    display: inline-block;\r\n    padding: 0;\r\n    font-size: 0;\r\n    list-style: none;\r\n    user-select: none;\n}\n.paging-item[data-v-7ce968d5] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 32px;\r\n    height: 32px;\r\n    text-decoration: none;\r\n    border: 1px solid #e4e4e4;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    margin-left: -1px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    color: #333333;\r\n    text-align: center;\r\n    line-height: 32px;\r\n    margin: 0 5px;\n}\n.paging-item[data-v-7ce968d5]:first-child {\r\n    margin-left: 0;\n}\n.paging-item[data-v-7ce968d5]:hover {\r\n    background-color: #333;\r\n    color: #fff;\n}\n.paging-item-disabled[data-v-7ce968d5],\r\n  .paging-item-more[data-v-7ce968d5] {\r\n    background-color: #fff;\r\n    color: #505050;\n}\n.paging-item-disabled[data-v-7ce968d5] {\r\n    cursor: not-allowed;\r\n    opacity: 0.75;\n}\n.paging-item-more[data-v-7ce968d5],\r\n  .paging-item-current[data-v-7ce968d5] {\r\n    cursor: default;\n}\r\n  /* 选中 */\n.paging-item-current[data-v-7ce968d5] {\r\n    background-color: #333;\r\n    color: #fff;\r\n    position: relative;\n}\n.one[data-v-7ce968d5] {\r\n    width: 75px;\n}\n.two[data-v-7ce968d5] {\r\n    width: 60px;\n}\n}\r\n",""])},function(n,t,e){"use strict";e.r(t);e(3);var r={name:"rz-vue-page",props:{perPages:{type:Number,default:5},pageIndex:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:20}},methods:{prev:function(){this.index>1&&(this.go(this.index-1),this.setScrollTop(0))},next:function(){this.index<this.pages&&(this.go(this.index+1),this.setScrollTop(0))},first:function(){1!==this.index&&(this.go(1),this.setScrollTop(0))},last:function(){this.index!=this.pages&&(this.go(this.pages),this.setScrollTop(0))},go:function(n){this.index!==n&&(this.index=n,this.$emit("change",this.index),this.setScrollTop(0))},setScrollTop:function(n){document.documentElement.scrollTop=n,window.pageYOffset=n,document.body.scrollTop=n},backTop:function(){this.setScrollTop(0)}},computed:{pages:function(){return Math.ceil(this.size/this.limit)},pagers:function(){var n=[],t=this.perPages,e=this.pages,r=this.index,i=(t-1)/2,a={start:r-i,end:r+i};a.start<1&&(a.end=a.end+(1-a.start),a.start=1),a.end>e&&(a.start=a.start-(a.end-e),a.end=e),a.start<1&&(a.start=1),this.showPrevMore=a.start>1,this.showNextMore=a.end<e;for(var o=a.start;o<=a.end;o++)n.push(o);return n}},data:function(){return{index:this.pageIndex,limit:this.pageSize,size:this.total||1,showPrevMore:!1,showNextMore:!1}},watch:{pageIndex:function(n){this.index=n||1},pageSize:function(n){this.limit=n||10},total:function(n){this.size=n||1}}};e(5);function i(n,t,e,r,i,a,o,s){var l,u="function"==typeof n?n.options:n;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),i&&i.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(n,t){return l.call(t),c(n,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:n,options:u}}var a=i(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"paging justify-center"},[e("ul",{staticClass:"mo-paging"},[e("li",{class:["paging-item","paging-item--prev","items-center",{"paging-item-disabled":1===n.index},"one"],on:{click:function(t){return t.stopPropagation(),n.prev(t)}}},[n._v("上一页")]),n._v(" "),e("li",{class:["paging-item","paging-item--first","items-center",{"paging-item-disabled":1===n.index},"two"],on:{click:function(t){return t.stopPropagation(),n.first(t)}}},[n._v("首页")]),n._v(" "),n.showPrevMore?e("li",{class:["paging-item","items-center","paging-item-more"]},[n._v("...")]):n._e(),n._v(" "),n._l(n.pagers,function(t){return e("li",{class:["paging-item","items-center",{"paging-item-current":n.index===t}],on:{click:function(e){return e.stopPropagation(),n.go(t)}}},[n._v(n._s(t))])}),n._v(" "),n.showNextMore?e("li",{class:["paging-item","items-center","paging-item-more"]},[n._v("...")]):n._e(),n._v(" "),e("li",{class:["paging-item","items-center","paging-item--last",{"paging-item-disabled":n.index===n.pages},"two"],on:{click:function(t){return t.stopPropagation(),n.last(t)}}},[n._v("尾页")]),n._v(" "),e("li",{class:["paging-item","items-center","paging-item--next",{"paging-item-disabled":n.index===n.pages},"one"],on:{click:function(t){return t.stopPropagation(),n.next(t)}}},[n._v("下一页")])],2)])},[],!1,null,"7ce968d5",null).exports,o=i({beforeRouteEnter:function(n,t,e){return e(function(n){})},name:"timer",props:{focus:{type:String,default:"获取验证码"},time:{type:Number,default:60},template:{type:String,default:"{{time}} S"},blur:{type:String,default:"再次发送"},value:{type:Boolean,default:!1}},data:function(){return{timer:new Function,timerText:this.focus}},computed:{},watch:{value:function(n,t){return n||(clearInterval(this.timer),this.timerText=this.focus),n&&this.timerFn()}},methods:{activeFn:function(){return this.$emit("start",this.value)},timerFn:function(){var n=this,t=this.template,e=this.blur,r=this.time;return this.timer=setInterval(function(){if(!(r>0))return n.$emit("input",!1),clearInterval(n.timer),n.timerText=e;r--,n.timerText=t.replace(/\{\{(\S*)\}\}/g,r)},1e3)}},destroyed:function(){return clearInterval(this.timer)}},function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"timer justify-center items-center no-select",class:n.value?"cursor-none":"cursor-pointer",domProps:{textContent:n._s(n.timerText)},on:{click:function(t){return t.stopPropagation(),n.activeFn(t)}}})},[],!1,null,"19a33b2f",null).exports,s=function(){return(s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},l=function(){function n(n,t,e){var r=this;this.target=n,this.endVal=t,this.options=e,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(n){r.startTime||(r.startTime=n);var t=n-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.countDown?r.frameVal=r.startVal-(r.startVal-r.endVal)*(t/r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration),r.countDown?r.frameVal=r.frameVal<r.endVal?r.endVal:r.frameVal:r.frameVal=r.frameVal>r.endVal?r.endVal:r.frameVal,r.frameVal=Math.round(r.frameVal*r.decimalMult)/r.decimalMult,r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(n){var t,e,i,a,o,s=n<0?"-":"";if(t=Math.abs(n).toFixed(r.options.decimalPlaces),i=(e=(t+="").split("."))[0],a=e.length>1?r.options.decimal+e[1]:"",r.options.useGrouping){o="";for(var l=0,u=i.length;l<u;++l)0!==l&&l%3==0&&(o=r.options.separator+o),o=i[u-l-1]+o;i=o}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,function(n){return r.options.numerals[+n]}),a=a.replace(/[0-9]/g,function(n){return r.options.numerals[+n]})),s+r.options.prefix+i+a+r.options.suffix},this.easeOutExpo=function(n,t,e,r){return e*(1-Math.pow(2,-10*n/r))*1024/1023+t},this.options=s({},this.defaults,e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof n?document.getElementById(n):n,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return n.prototype.determineDirectionAndSmartEasing=function(){var n=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>n;var t=n-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold){this.finalEndVal=n;var e=this.countDown?1:-1;this.endVal=n+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=n,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(n){this.error||(this.callback=n,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(n){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(n),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(n){var t=this.formattingFn(n);"INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t},n.prototype.ensureNumber=function(n){return"number"==typeof n&&!isNaN(n)},n.prototype.validateValue=function(n){var t=Number(n);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: "+n,null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();function u(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(n){i=!0,a=n}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p={Page:a,Timer:o,CountUp:i({name:"CountUp",props:{startVal:{type:Number,default:0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},useGrouping:{type:Boolean,default:!0},useEasing:{type:Boolean,default:!0},separator:{type:String,default:","},decimal:{type:String,default:"."},prefix:{type:String,default:""},suffix:{type:String,default:""},delay:{type:Number,default:0},endVal:{type:Number,required:!0}},data:function(){return{counter:null,options:{startVal:this.startVal,decimalPlaces:this.decimalPlaces,duration:this.duration,useGrouping:this.useGrouping,useEasing:this.useEasing,separator:this.separator,decimal:this.decimal,prefix:this.prefix,suffix:this.suffix}}},computed:{counterId:function(){return"count-to-".concat(this._uid)}},methods:{},mounted:function(){var n=this;this.$nextTick(function(){n.counter=new l(n.counterId,n.endVal,n.options),setTimeout(function(){n.counter.error||n.counter.start()},n.delay)})},watch:{endVal:function(n,t){this.counter.update(n)}}},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"CountUp justify-center"},[t("span",{attrs:{id:this.counterId}})])},[],!1,null,null,null).exports},f=function(n){for(var t=0,e=Object.entries(p);t<e.length;t++){var r=d(e[t],2),i=r[0],a=r[1];n.component(i,a)}};window&&window.Vue&&f(window.Vue);t.default=function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(e,!0).forEach(function(t){c(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}({},p,{install:f})}])});
//# sourceMappingURL=rz-vue-module.js.map