(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{686:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("73bba828",content,!0,{sourceMap:!1})},687:function(t,e,n){var o=n(14)((function(i){return i[1]}));o.push([t.i,".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599.98px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}",""]),o.locals={},t.exports=o},768:function(t,e,n){"use strict";n(10),n(8),n(9),n(4),n(12),n(7),n(13);var o=n(1),r=(n(19),n(686),n(601));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:[String,Number],transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return l(l({},r.a.options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}})},857:function(t,e,n){"use strict";n.r(e);var o=n(768),r=n(174),c=n(78),l={data:function(){return{sheet:!1}}},f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(o.a,{attrs:{inset:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{color:"orange",dark:""}},"v-btn",c,!1),o),[t._v("\n                Open Inset\n            ")])]}}]),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),e(c.a,{staticClass:"text-center",attrs:{height:"200px"}},[e(r.a,{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:function(e){t.sheet=!t.sheet}}},[t._v("\n                close\n            ")]),t._v(" "),e("div",{staticClass:"my-3"},[t._v("\n                This is a bottom sheet using the inset prop\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);