(window.webpackJsonp=window.webpackJsonp||[]).push([[4,26],{662:function(e,t,r){"use strict";r.r(t);var o=r(179),n=r(288),l=r(44),c=r(224),d=r(627),m={props:["iUrl"]},f=r(41),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t(n.a,[t(l.d,[e._v(" Image preview ")]),e._v(" "),t(c.a,{attrs:{src:e.iUrl||"No image"}}),e._v(" "),t(l.a,[t(d.a),e._v(" "),t(o.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.$emit("closeDia")}}},[e._v("\n      ປິດ\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},678:function(e,t,r){"use strict";r.r(t);var o=r(631),n=r(179),l=r(288),c=r(44),d=r(629),m=r(624),f=r(609),v=r(286),_=r(697),h=r(639),D=r(224),k=r(279),x=r(178),y=r(281),w=r(57),L=r(628),I=r(627),O=r(99),R=r(646),C=(r(27),r(37),r(11),r(9),r(10),r(13),r(14),r(28)),U=r(2),$=(r(111),r(24),r(34),r(5),r(8),r(39),r(52),r(61),r(671),r(392),r(113),r(303)),j=r(63),P=r(758),S=r(54);function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(U.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A={props:{isEdit:{type:Boolean,default:!1},headerId:{type:Number,default:null}},middleware:"auths",mixins:[P.default],computed:M(M({},Object(S.c)(["findAllProduct","findAllClient","findAllPayment","findAllUnit","findAllCurrency"])),{},{unitList:function(){return this.findAllUnit},host:function(){return Object(j.g)()}}),mounted:function(){console.log("FORMDATA ID: "+this.formData.pro_id),this.pro_id=this.headerId,this.formData.pro_id=this.headerId,console.log("Mounted: "),this.fetchProId(this.headerId),this.fetchCategory(),this.fetchOutlet()},validate:function(data){return console.log("MIXIN ID: "+data.params.id),console.log("PRO DEFUALT ID: "+this.pro_id),/^\d+$/.test(data.params.id)},data:function(){return{imagesPreviewURL:[],files:null,IMG_URL:"",NAME:"",rules:{nameRule:[function(e){return!!e||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(e){return e&&e.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ຈຳນວນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],minRule:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(e){var t=0,r=0;return e?(e.forEach((function(e){t+=e.size,console.log("Size: "+e.size)})),r=t/e.length,console.log("File size: aaa"+e.length+" Each: "+r||!1)):console.log("File: "+e),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},preview:!1,previewSrc:null,title:"Update product",valid:!1,category:[],formData:{pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0,minStock:0,barCode:"",receiveUnitId:1,stockUnitId:1},outlet:[],isLoading:!1,validLocal:!0,diaMessageTitle:"ຄຳເຕືອນ",diaMessageBody:"ທ່ານ ກຳລັງຈະລົບ ຂໍ້ມູນອອກຈາກ ເຊີເວີ ຖາວອນ ກະລຸນາຢືນຢັນ",pro_id:null,dia_confirm:!1,tempImgId:null}},methods:{validateLocal:function(){console.log("VALIDATING..."),this.$refs.formLocal.validate()},fetchCategory:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("category_f").then((function(t){console.log("=>category"+t.data),e.category=t.data.map((function(e){return{categ_id:e.categ_id,categ_name:e.categ_name,categ_desc:e.categ_desc}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},fetchOutlet:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("outlet").then((function(t){console.log("=>outlet"+t.data),e.outlet=t.data.map((function(e){return{outlet_id:e.id,outlet_name:e.name,outlet_tel:e.tel}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0},onFilesChange:function(e){var t=e;if(this.files=e,t)for(var i=0;i<t.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(t[i]),NAME:t[i].name,isvalid:this.sizeValidate(t[i].size)});else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1),this.deleteFileFrServ(e)},sizeValidate:function(e){console.log("SIZE"+e);var t=2e7;if(e>t)return"Max size is ".concat(2e4,"Kb")},fetchProId:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isLoading=!0,console.log("FECT ID:"+e),r.next=4,t.$axios.post("/product_f_id",{proid:e}).then((function(e){console.log("Product ID "+e.data);var r=e.data[0];console.log("===> Min stock",r.minStock);var image=null==e.data[0].img_name?[]:e.data.map((function(e){return{name:e.img_name,path:e.img_path}}));t.formData={pro_category:r.pro_category,pro_id:r.pro_id,pro_name:r.pro_name,pro_price:r.pro_price,pro_desc:r.pro_desc,pro_status:1===r.pro_status||!1,pro_retail_price:r.retail_cost_percent,pro_cost_price:r.cost_price,outlet:r.outlet,minStock:r.minStock,barCode:r.barCode,receiveUnitId:r.receiveUnitId,stockUnitId:r.stockUnitId,pro_image:image},console.log("IMAGE COUNT: "+t.formData.pro_image.length)})).catch((function(e){console.log("Error: "+e),t.message=e}));case 4:t.isLoading=!1;case 5:case"end":return r.stop()}}),r)})))()},deleteFileFrServ:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:Object($.a)(t.$swal,"warning",Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Delete record function"),t.isLoading=!0,r.next=4,t.$axios.post("/unlink_file",{img_name:t.formData.pro_image[e].name}).then((function(r){"Transaction completed"===r.data&&t.formData.pro_image.splice(e,1),Object($.c)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){t.message=e.error}));case 4:t.isLoading=!1;case 5:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},uploadFilesLocal:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("===> Upload data"),e.$refs.formLocal.validate()){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files&&e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti_update",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("close-dialog"),e.$emit("refresh"),Object($.c)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(t){Object($.b)(e.$swal,"Error",t.response.data)}));case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()}}},E=r(41),component=Object(E.a)(A,(function(){var e=this,t=e._self._c;return t("div",[t(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[t("loading-indicator")],1),e._v(" "),t(f.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v(" "),t(l.a,[t(c.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),t(c.c,[t(m.a,[t(h.a,{ref:"formLocal",attrs:{"lazy-validation":""},model:{value:e.validLocal,callback:function(t){e.validLocal=t},expression:"validLocal"}},[t(L.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"outlet_name","item-value":"outlet_id",items:e.outlet,label:"ຮ້ານ*"},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"categ_name","item-value":"categ_id",items:e.category,label:"ປະເພດສິນຄ້າ*"},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:10,disabled:!!e.formData.pro_id,label:"ໄອດີສິນຄ້າ",required:""},model:{value:e.formData.pro_id,callback:function(t){e.$set(e.formData,"pro_id",t)},expression:"formData.pro_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:50,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ*",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:10,rules:e.rules.priceRule,label:"ລາຄາ*",type:"number",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ຕົ້ນທຶນ*",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(_.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{counter:10,type:"number",rules:e.rules.minRule,label:"ສຕັອກຂັ້ນຕ່ຳ*",required:""},model:{value:e.formData.minStock,callback:function(t){e.$set(e.formData,"minStock",t)},expression:"formData.minStock"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(O.a,{attrs:{label:"barcode",required:""},model:{value:e.formData.barCode,callback:function(t){e.$set(e.formData,"barCode",t)},expression:"formData.barCode"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"name","item-value":"id",items:e.unitList,label:"ຫົວຫນ່ວຍຮັບເຄື່ອງ*"},model:{value:e.formData.receiveUnitId,callback:function(t){e.$set(e.formData,"receiveUnitId",t)},expression:"formData.receiveUnitId"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"name","item-value":"id",items:e.unitList,label:"ຫົວຫນ່ວຍນັບສາງ*"},model:{value:e.formData.stockUnitId,callback:function(t){e.$set(e.formData,"stockUnitId",t)},expression:"formData.stockUnitId"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{outlined:"",name:"input-7-4",counter:"100",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}})],1)],1),e._v(" "),t("div",e._l(e.formData.pro_image,(function(img,r){return t(l.a,{key:r,staticClass:"pa-md-6 mx-lg-auto"},[t(L.a,{attrs:{justify:"space-around"}},[t(y.a,{on:{click:function(t){return t.preventDefault(),e.previewImg("".concat(e.host,"/uploads/").concat(img.name))}}},[t(D.a,{attrs:{src:"".concat(e.host,"/uploads/").concat(img.name)}})],1),e._v(" "),t(I.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFileFrServ(r)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1)],1)})),1),e._v(" "),t("div",[t(k.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,o){return[t(x.a,{key:o},[t(y.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(D.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(w.a,[t(w.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(w.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(I.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFileFrServ(o)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(v.a,{key:o+r.NAME})]}))],2)],1)],1)],1),e._v(" "),t("small",[e._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),e._v(" "),t(c.a,[t(I.a),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n                Close\n            ")]),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.uploadFilesLocal}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:r(301).default,DiaImage:r(662).default})},684:function(e,t,r){var content=r(699);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("75161fa9",content,!0,{sourceMap:!1})},698:function(e,t,r){"use strict";r(684)},699:function(e,t,r){var o=r(16)((function(i){return i[1]}));o.push([e.i,".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}",""]),o.locals={},e.exports=o},758:function(e,t,r){"use strict";r.r(t);var o=r(179),n=r(288),l=r(44),c=r(629),d=r(624),m=r(609),f=r(286),v=r(630),_=r(153),h=r(224),D=r(691),k=r(628),x=r(627),y=(r(37),r(698),r(41)),component=Object(y.a)({},(function(){var e=this,t=e._self._c;return t("div",[t(d.a,[t(k.a,[t(c.a,{attrs:{cols:"12",sm:"4"}},[t(v.a,{attrs:{"open-delay":"200"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.hover;return[t(n.a,{class:{"on-hover":o},attrs:{elevation:o?16:2}},[t("router-link",{attrs:{to:"/movie/".concat(e.movie.id)}},[t(h.a,{attrs:{src:e.posterPath,alt:""}})],1)],1)]}}])})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"8"}},[t("h1",{staticClass:"grey--text text-darken-3 mt-5"},[e._v(e._s(this.movie.title))]),e._v(" "),t(k.a,[t(c.a,{attrs:{cols:"12",sm:"2"}},[t(D.a,{attrs:{value:e.movie.vote_average/2,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"3"}},[t("span",{staticClass:"gray--text ml-n7"},[e._v("\n                            "+e._s(10*e.movie.vote_average)+"% | "+e._s(e.movie.release_date)+"\n                        ")])]),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"7"}},[t("div",{staticClass:"subtitle-2 grey--text ml-n16"},e._l(e.movie.genres,(function(r,o){return t("span",{key:o,staticClass:"ml-1"},[e._v("\n                                "+e._s(r.name)+"\n                                "),e.movie.genres.length-1!=o?t("span",[e._v(",")]):e._e()])})),0)])],1),e._v(" "),t("p",{staticClass:"mt-5 grey--text text--darken-3 subheader"},[e._v(e._s(this.movie.overview))]),e._v(" "),t("div",{staticClass:"mt-5"},[t("h2",{staticClass:"mt-5 grey--text text--darken-3"},[e._v("Featured Cast")]),e._v(" "),e._l(e.movie.credits.crew,(function(r,o){return t("div",{key:o,staticClass:"mt-5"},[o<2?t("div",{},[t("h3",[e._v(e._s(r.name))]),e._v(" "),t("span",{staticClass:"grey--text"},[e._v(e._s(r.job))])]):e._e()])}))],2),e._v(" "),t(m.a,{attrs:{persistent:"","max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[t(o.a,e._g(e._b({attrs:{tile:"",color:"error"},on:{click:function(t){return t.preventDefault(),e.openYouTubeModel.apply(null,arguments)}}},"v-btn",l,!1),n),[t(_.a,{attrs:{left:""}},[e._v("mdi-play")]),e._v("Play\n                        ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(n.a,[t(l.d,[t("span",{staticClass:"headline"},[e._v(e._s(this.movie.title))])]),e._v(" "),t(l.c,[t(d.a,[t(k.a,[t(c.a,{attrs:{cols:"12",sm:""}},[t("div",{staticClass:"iframe-container"},[e.isVideo?e._e():t("img",{attrs:{src:e.mediaURL}}),e._v(" "),e.isVideo?t("iframe",{attrs:{allowfullscreen:"",src:e.mediaURL}}):e._e()])])],1)],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(o.a,{attrs:{color:"error",text:""},on:{click:function(t){e.dialog=e.flase}}},[e._v("Close")])],1)],1)],1),e._v(" "),t(o.a,{staticClass:"ml-2",attrs:{tile:"",color:"error"}},[t(_.a,{attrs:{left:""}},[e._v("mdi-heart")]),e._v("Favorite\n                ")],1)],1)],1),e._v(" "),t(f.a,{staticClass:"mt-2"}),e._v(" "),t("Cast",{attrs:{casts:e.movie.credits.cast}}),e._v(" "),t(f.a,{staticClass:"mt-2"}),e._v(" "),t("Images",{attrs:{images:e.movie.images.backdrops}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);