(window.webpackJsonp=window.webpackJsonp||[]).push([[3,27,88],{618:function(e,t,r){"use strict";r.r(t);var o=r(173),n=r(282),l=r(39),c=r(280),d=r(610),m={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},f=r(36),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t(n.a,[t(l.d,{staticClass:"text-h5 grey lighten-2"},[e._v(" ຂໍ້ຄວາມ ")]),e._v(" "),t(l.c,[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),t(c.a),e._v(" "),t(l.a,[t(d.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.toggleDialog}},[e._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},662:function(e,t,r){"use strict";r.r(t);var o=r(614),n=r(173),l=r(282),c=r(39),d=r(612),m=r(596),f=r(280),v=r(680),_=r(622),h=r(218),D=r(273),x=r(172),w=r(275),k=r(52),y=r(611),O=r(610),R=r(93),$=r(629),j=(r(10),r(8),r(9),r(12),r(13),r(24)),U=r(1),C=(r(105),r(29),r(4),r(7),r(34),r(32),r(297)),L=r(672),P=r(49);function M(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(t){Object(U.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={middleware:"auths",mixins:[L.default],data:function(){return{preview:!1,previewSrc:null,dialog:!1,dialogMessage:!1,message:"",isloading:!1,valid:!0,name:"",title:"Create product",rules:{nameRule:[function(e){return!!e||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(e){return e&&e.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ຈຳນວ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],minRule:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(e){var t=0,r=0;return e?(e.forEach((function(e){t+=e.size,console.log("Size: "+e.size)})),r=t/e.length,console.log("File size: aaa"+e.length+" Each: "+r||!1)):console.log("File: "+e),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},category:[],formData:{outlet:1,pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0,createdAt:null,minStock:0,barCode:"",receiveUnitId:1,stockUnitId:1},outlet:[]}},mounted:function(){this.fetchCategory(),this.fetchOutlet()},watch:{message:function(e){this.dialogMessage=null!=e},formData:function(e){console.log("Watch fromData"+e)}},computed:I(I({},Object(P.c)(["findAllProduct","findAllClient","findAllPayment","findAllUnit","findAllCurrency"])),{},{unitList:function(){return this.findAllUnit}}),methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},fetchCategory:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("category_f").then((function(t){console.log("=>category"+t.data),e.category=t.data.map((function(e){return{categ_id:e.categ_id,categ_name:e.categ_name,categ_desc:e.categ_desc}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},fetchOutlet:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("outlet").then((function(t){console.log("=>outlet"+t.data),e.outlet=t.data.map((function(e){return{outlet_id:e.id,outlet_name:e.name,outlet_tel:e.tel}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},uploadFiles:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:return console.log("Outlet: "+e.formData.outlet),e.isloading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.isloading=!1,Object(C.c)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.$emit("refresh"),e.$emit("close-dialog")})).catch((function(t){e.isloading=!1,Object(C.b)(e.$swal,"Error",t)}));case 9:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0}}},E=(r(745),r(36)),component=Object(E.a)(S,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(m.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v(" "),t(l.a,[t(c.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),t(c.c,[t(_.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(y.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"outlet_name","item-value":"outlet_id",items:e.outlet,label:"ຮ້ານ*"},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"categ_name","item-value":"categ_id",items:e.category,label:"ປະເພດສິນຄ້າ*"},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{value:e.formData.pro_id||"1XXX",counter:10,label:"ໄອດີສິນຄ້າ",disabled:"",required:""}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{counter:50,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ*",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{counter:10,rules:e.rules.priceRule,label:"ລາຄາ*",type:"number",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ຕົ້ນທຶນ*",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(v.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{counter:10,type:"number",rules:e.rules.minRule,label:"ສຕັອກຂັ້ນຕ່ຳ*",required:""},model:{value:e.formData.minStock,callback:function(t){e.$set(e.formData,"minStock",t)},expression:"formData.minStock"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{label:"barcode",required:""},model:{value:e.formData.barCode,callback:function(t){e.$set(e.formData,"barCode",t)},expression:"formData.barCode"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"name","item-value":"id",items:e.unitList,label:"ຫົວຫນ່ວຍຮັບເຄື່ອງ*"},model:{value:e.formData.receiveUnitId,callback:function(t){e.$set(e.formData,"receiveUnitId",t)},expression:"formData.receiveUnitId"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"name","item-value":"id",items:e.unitList,label:"ຫົວຫນ່ວຍນັບສາງ*"},model:{value:e.formData.stockUnitId,callback:function(t){e.$set(e.formData,"stockUnitId",t)},expression:"formData.stockUnitId"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t($.a,{attrs:{outlined:"",name:"input-7-4",counter:"100",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}})],1)],1),e._v(" "),e._e(),e._v(" "),t("div",[t(D.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,o){return[t(x.a,{key:o},[t(w.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(h.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(k.a,[t(k.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(k.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(O.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFile(o)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(f.a,{key:o+r.NAME})]}))],2)],1)],1)],1),e._v(" "),t(c.a,[t(O.a),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n        Close\n      ")]),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.uploadFiles}},[e._v("\n        Save\n      ")])],1)],1),e._v(" "),t("nuxt-child")],1)}),[],!1,null,"c35dc16a",null);t.default=component.exports;installComponents(component,{DialogClassicMessage:r(618).default,LoadingIndicator:r(295).default,DiaImage:r(645).default})},672:function(e,t,r){"use strict";r.r(t);r(4),r(47),r(56),r(654),r(385),r(32),r(107);var o={data:function(){return{imagesPreviewURL:[],files:[]}},methods:{onFilesChange:function(e){var t=e;if(this.files=e,t){console.log("FILE LEN: "+t.length);for(var i=0;i<t.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(t[i]),NAME:t[i].name,isvalid:this.sizeValidate(t[i].size)})}else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1)},sizeValidate:function(e){console.log("SIZE"+e);var t=2e7;if(e>t)return"Max size is ".concat(2e4,"Kb")}}},n=r(36),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports},694:function(e,t,r){var content=r(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("5739cdbd",content,!0,{sourceMap:!1})},745:function(e,t,r){"use strict";r(694)},746:function(e,t,r){var o=r(14)((function(i){return i[1]}));o.push([e.i,'.grey[data-v-c35dc16a],.text-h5[data-v-c35dc16a]{font-family:"Noto Sans Lao"}',""]),o.locals={},e.exports=o}}]);