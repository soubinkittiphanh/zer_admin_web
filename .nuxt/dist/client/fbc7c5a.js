(window.webpackJsonp=window.webpackJsonp||[]).push([[67,14,32,33],{619:function(t,e,r){"use strict";var n=r(1),o=(r(37),r(53),r(227),r(9),r(4),r(7),r(58),r(88),r(10),r(8),r(12),r(13),r(5)),c=r(106),l=r(126);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},629:function(t,e,r){"use strict";r.r(e);var n=r(280),o=r(47),c=r(612),l=r(281),d=r(611),f={props:{orderDetail:{type:Object,default:""},showTotal:{type:Boolean,default:!1},gross:{type:String,default:"0"}}},m=r(44),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"ml-4"},[e(o.d,[t._v(t._s(this.orderDetail.title))]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຈຳນວນ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.amount)+" ອໍເດີ")])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດຂາຍ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.sale))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ສ່ວນຫລຸດ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.discount))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("COD/RIDER FEE")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.gross))])],1),t._v(" "),e(l.a),t._v(" "),t.showTotal?e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຈຳນວນເງິນທີ່ໄດ້ຮັບຈາກລູກຄ້າ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(t.gross))])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,r){"use strict";r.r(e);var n,o=r(613),c=r(173),l=r(280),d=r(47),f=r(608),m=r(619),h=r(610),v=r(94),_=r(1),y=r(24),w=(r(105),r(20),r(30),r(73)),O=(n={props:{isEdit:{type:Boolean,default:!1},id:{type:Number,require:!1}},data:function(){return{isSubmitting:!1,form:{orderId:this.id,status:2,userId:"",reason:""},cancelList:[{id:2,name:"cancel"},{id:3,name:"return"}]}},computed:{codeRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ "},function(t){return t&&t.length>=2||"ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ"}]},nameRule:function(){return[function(t){return!!t||"ກະລຸນາ ຊື່ ສາຂາ "}]},numberRule:function(){return[function(t){return/^[0-9]*$/.test(t)||!t||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]}},mounted:function(){this.loadBranch()}},Object(_.a)(n,"computed",{user:function(){return this.$auth.user||""}}),Object(_.a)(n,"methods",{submitForm:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=13;break}if(t.isSubmitting=!0,!t.isEdit){e.next=7;break}return e.next=5,t.$axios.put("branch/update/".concat(t.id),t.form).then((function(e){200==e.status?(Object(w.i)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(w.h)(t.$swal,"Error",e.data)})).catch((function(e){Object(w.h)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 5:e.next=11;break;case 7:return t.form.userId=t.user.id,console.log("Form: ",t.form),e.next=11,t.$axios.put("/api/changeOrderStatus",t.form).then((function(e){200==e.status?(Object(w.i)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(w.h)(t.$swal,"Error",e.data)})).catch((function(e){Object(w.h)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 11:e.next=14;break;case 13:return e.abrupt("return");case 14:t.isSubmitting=!1;case 15:case"end":return e.stop()}}),e)})))()},loadBranch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id||!t.isEdit){e.next=5;break}return t.isSubmitting=!0,e.next=4,t.$axios.get("branch/find/".concat(t.id)).then((function(e){t.form=e.data})).catch((function(e){Object(w.h)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 4:t.isSubmitting=!1;case 5:case"end":return e.stop()}}),e)})))()},refreshData:function(){this.$emit("refresh")}}),n),D=r(44),component=Object(D.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(l.a,{staticClass:"pa-4"},[t._v("\n        ຍົກເລີກບິນ\n        "),e(m.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(v.a,{attrs:{disabled:"",label:"ເລກທີອໍເດີ ",required:""},model:{value:t.form.orderId,callback:function(e){t.$set(t.form,"orderId",e)},expression:"form.orderId"}}),t._v(" "),e(o.a,{attrs:{"item-text":"name","item-value":"id",items:t.cancelList,label:"ເລືອກການຍົກເລີກ *"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),t._v(" "),e(v.a,{attrs:{label:"ເຫດຜົນການຍົກເລີກ"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(d.a,[e(h.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ຍົກເລີກ\n            ")]),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.submitForm(!0)}}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(295).default})},636:function(t,e,r){"use strict";r(298);var n=r(301);e.a=Object(n.a)("layout")},644:function(t,e,r){"use strict";r.r(e);var n=r(173),o=r(280),c=r(47),l=r(612),d=r(615),f=r(608),m=r(281),h=r(611),v=r(610),_=(r(32),r(30),r(181),r(24)),y=(r(105),r(73)),w={props:{header:{type:Object,default:null},isQuotation:{type:Boolean,default:!1}},methods:{post:function(){Object(y.a)(this.$swal,"You are posting to invoice ?",this.postToInvoice)},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},toggleDialog:function(){this.$emit("close-dialog")},postToInvoice:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isloading){e.next=2;break}return e.abrupt("return");case 2:return t.isloading=!0,{startDate:t.date,endDate:t.date2},e.next=6,t.$axios.put("api/sale/postToInvoice/".concat(t.header.id)).then((function(e){t.$emit("reload"),Object(y.i)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ")})).catch((function(e){Object(y.h)(t.$swal,"Error","Could no load data "+e.Error),console.log("Error ===>: "+e)}));case 6:t.isloading=!1;case 7:case"end":return e.stop()}}),e)})))()}},data:function(){return{search:"",isloading:!1,headers:[{text:"ສິນຄ້າ",align:"start",value:"product.pro_name"},{text:"ຈຳນວນ",align:"end",value:"quantity"},{text:"ລາຄາ",align:"end",value:"price",sortable:!0},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ລວມ",align:"end",value:"total",sortable:!1}]}}},O=r(44),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(c.b,[e(h.a,[e(l.a,{attrs:{cols:"6"}},[t._v("\n                    "+t._s(t.isQuotation?"Quotation #":"Invoice #")+"\n                    "+t._s(t.header.id)+"\n                ")]),t._v(" "),t.isQuotation?e(l.a,{staticStyle:{"text-align":"right"},attrs:{cols:"6"}},[e(n.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined"},on:{click:t.post}},[t._v("\n                        Post to invoice"),e("span",{staticClass:"mdi mdi-cloud-download"})])],1):t._e()],1)],1),t._v(" "),e(m.a),t._v(" "),e(c.c,[e(o.a,[e(c.c,[e("div",[e(h.a,[e(l.a,{attrs:{cols:"4"}},[e(h.a,[e(l.a,{attrs:{cols:"12"}},[t._v("ວັນທີ: "+t._s(t.header.bookingDate)+" ")]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ຊື່ລູກຄ້າ: "+t._s(t.header.client.name))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ເບີໂທ: "+t._s(t.header.client.telephone))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ບໍລິສັດ: "+t._s(t.header.client.company))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ການຊຳລະ: "+t._s(t.header.payment.payment_code)+" ")])],1)],1),t._v(" "),e(l.a,{attrs:{cols:"4"}},[e(h.a,[e(l.a,{attrs:{cols:"12"}},[t._v("ສະກຸນ: "+t._s(t.header.currency.code))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ອັດຕາແລກປ່ຽນ: "+t._s(t.header.exchangeRate))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ສ່ວນຫລຸດ: "+t._s(t.header.discount))]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ຍອດລວມທັງໝົດ: "+t._s(t.getFormatNum(t.header.total)))])],1)],1),t._v(" "),e(l.a,{staticStyle:{"text-align":"end"},attrs:{cols:"4"}},[e(h.a,[e(l.a,{attrs:{cols:"12"}},[t._v("ຜູ້ລົງ: "+t._s(t.header.user.cus_id)+" ")]),t._v(" "),e(l.a,{attrs:{cols:"12"}},[t._v("ຊື່: "+t._s(t.header.user.cus_name))])],1)],1)],1)],1)])],1),t._v(" "),e(m.a),t._v(" "),t.header.lines?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.header.lines},scopedSlots:t._u([{key:"item.function",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-wallet"})])]}},{key:"item.price",fn:function(e){var r=e.item;return[t._v("\n                    "+t._s(t.getFormatNum(r.price))+"\n                ")]}},{key:"item.discount",fn:function(e){var r=e.item;return[t._v("\n                    "+t._s(t.getFormatNum(r.discount))+"\n                ")]}},{key:"item.total",fn:function(e){var r=e.item;return[t._v("\n                    "+t._s(t.getFormatNum(r.total))+"\n                ")]}}],null,!0)}):t._e()],1),t._v(" "),e(c.a,[e(v.a),t._v(" "),e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.toggleDialog}},[t._v("\n                Close\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(295).default})},697:function(t,e,r){var content=r(756);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("b091ced2",content,!0,{sourceMap:!1})},755:function(t,e,r){"use strict";r(697)},756:function(t,e,r){var n=r(14)((function(i){return i[1]}));n.push([t.i,'.grey[data-v-3d74de70],.text-h5[data-v-3d74de70]{font-family:"Noto Sans Lao"}table[data-v-3d74de70]{border:1px solid #000}',""]),n.locals={},t.exports=n},816:function(t,e,r){"use strict";r.r(e);var n=r(173),o=r(280),c=r(47),l=r(279),d=r(612),f=r(615),m=r(795),h=r(608),v=r(281),_=r(636),y=r(286),w=r(611),O=r(94),D=(r(30),r(181),r(48),r(32),r(60),r(39),r(8),r(74),r(84),r(51),r(21)),x=r(24),k=(r(4),r(7),r(37),r(53),r(9),r(79),r(59),r(63),r(23),r(390),r(105),r(73));function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var j={components:{OrderDetailPos:r(644).default},middleware:"auths",data:function(){return{whatsappContactLink:"",componentKey:0,dialogOrderDetail:!1,selectedOrder:"",wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,valid:!0,name:"",search:"",userId:null,orderHeaderList:[],loadDataNoCancelOrder:[],codPaid:[],componentCancelFormKey:1,cancelForm:!1,OrderIdSelected:"",headers:[{text:"ວັນທີ",align:"center",value:"bookingDate",sortable:!0},{text:"ID ລູກຄ້າ",align:"center",value:"client.id",sortable:!0},{text:"ລູກຄ້າ",align:"center",value:"client.name",sortable:!0},{text:"ເບີໂທ",align:"center",value:"client.telephone",sortable:!0},{text:"ຊຳລະດ້ວຍ",align:"center",value:"payment.payment_code",sortable:!0},{text:"Due date",align:"center",value:"client.credit",sortable:!0},{text:"ສະກຸນເງິນ",align:"center",value:"currency.code",sortable:!0},{text:"ອັດຕາແລກປ່ຽນ",align:"center",value:"exchangeRate",sortable:!0},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ລວມ",align:"end",value:"total",sortable:!1},{text:"ຜູ້ລົງທຸລະກຳ",align:"end",value:"user.cus_name",sortable:!1},{text:"ເວລາລົງ",align:"end",value:"createdAt",sortable:!1},{text:"",align:"end",value:"id",sortable:!1}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},watch:{isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.loadData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.loadData()}},computed:{totalSale:function(){var t=0;return this.creditOrder.forEach((function(e){t+=e.total})),t},totalSaleRaw:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),console.log("Price total: "+t),t},totalDiscount:function(){var t=0;return this.orderHeaderList.forEach((function(e){t+=parseInt(e.discount)})),t},noCancelData:function(){var t=this;return this.loadDataNoCancelOrder=[],this.orderHeaderList.forEach((function(element){console.log(element.recordStatus),1===element.recordStatus&&(console.log("Concept applied"),t.loadDataNoCancelOrder.push(element))})),this.loadDataNoCancelOrder},unpaidCodOrder:function(){var t=[],e={};this.orderHeaderList.forEach((function(element){"PENDING"===element.paymentStatus&&element.payment.includes("COD")&&(console.log("Concept applied"),t.push(element))}));var r=t.reduce((function(t,e){return t+e.cartTotal}),0),n=t.reduce((function(t,e){return t+e.discount}),0);return e.amount=t.length,e.saleRawNumber=r,e.sale=this.getFormatNum(r),e.discount=this.getFormatNum(n),e.gross=this.getFormatNum(0),e.title="ຍອດບິນ COD",e},creditOrder:function(){return this.orderHeaderList.filter((function(t){return 4==t.paymentId}))}},methods:{countDay:function(t){return Object(k.b)(t)},dueDate:function(t,e){return console.log("DATE ",t," to ",e),Object(k.e)(t,e)},numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},whatsappLink:function(t){var e=t.cusTel.trim(),r=e.substring(e.length-8);this.whatsappContactLink="https://api.whatsapp.com/send?phone=+85620".concat(r,"&text=").concat(encodeURIComponent("ສະບາຍດີ ລູກຄ້າ "))},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},editItem:function(t){this.componentKey+=1,this.selectedOrderId=t.orderId.toString(),this.dialogOrderDetail=!this.dialogOrderDetail},viewItem:function(t){this.componentKey+=1,this.selectedOrder=t,this.dialogOrderDetail=!0},cancelItem:function(t){console.log("Order id",t.orderId),this.componentCancelFormKey+=1,this.OrderIdSelected=t.orderId,this.cancelForm=!0},handleEvent:function(){this.dialogOrderDetail=!1},loadData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,r={startDate:t.date,endDate:t.date2},e.next=4,t.$axios.get("api/sale/findByDate",{params:{date:r}}).then((function(e){t.orderHeaderList=[];var r,n=S(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;t.orderHeaderList.push(o)}}catch(t){n.e(t)}finally{n.f()}console.log("====> "+t.orderHeaderList.length)})).catch((function(e){Object(k.h)(t.$swal,"Error","Could no load data "+e.Error),console.log("Error ===>: "+e)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),r=Object(D.a)(e,3),n=r[0],o=r[1],c=r[2];return"".concat(o,"/").concat(c,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),r=Object(D.a)(e,3),n=r[0],o=r[1],c=r[2];return"".concat(c,"-").concat(n.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}},C=(r(755),r(44)),component=Object(C.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(h.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(h.a,{attrs:{"max-width":"1024",persistent:""},model:{value:t.dialogOrderDetail,callback:function(e){t.dialogOrderDetail=e},expression:"dialogOrderDetail"}},[e("OrderDetailPos",{key:t.componentKey,attrs:{header:t.selectedOrder},on:{"close-dialog":function(e){t.dialogOrderDetail=!1}}})],1),t._v(" "),e(h.a,{attrs:{"max-width":"1024"},model:{value:t.cancelForm,callback:function(e){t.cancelForm=e},expression:"cancelForm"}},[e("cancel-ticket-form",{key:t.componentCancelFormKey,attrs:{id:t.OrderIdSelected},on:{"close-dialog":function(e){t.cancelForm=!1},reload:function(e){t.cancelForm=!1,t.loadData()}}})],1),t._v(" "),e(o.a,[e(c.d,[e(_.a,{attrs:{row:"",wrap:""}},[e(d.a,{attrs:{cols:"6"}},[e(y.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(O.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(y.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(O.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(m.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1),t._v(" "),e(d.a,{attrs:{cols:"6"}},[e(O.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(O.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດຜູ້ຂາຍ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1),t._v(" "),e(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(n.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined"},on:{click:t.loadData}},[t._v("\n            ດຶງລາຍງານ"),e("span",{staticClass:"mdi mdi-cloud-download"})])],1)],1)],1),t._v(" "),e(v.a),t._v(" "),e(c.c,[e(_.a,{attrs:{row:"",wrap:""}},[e(w.a,[e(d.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{showTotal:!0,gross:t.getFormatNum(t.totalSaleRaw-+this.unpaidCodOrder.saleRawNumber),orderDetail:{title:"ຍອດບິນ",amount:t.getFormatNum(t.creditOrder.length),sale:t.getFormatNum(t.totalSale),discount:t.getFormatNum(t.totalDiscount),gross:t.getFormatNum(t.totalSale-t.totalDiscount)}}})],1),t._v(" "),e(d.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{i:"",orderDetail:this.unpaidCodOrder}})],1)],1)],1)],1),t._v(" "),t.creditOrder?e(f.a,{attrs:{headers:t.headers,search:t.search,items:t.creditOrder},scopedSlots:t._u([{key:"item.bookingDate",fn:function(r){var n=r.item;return[t._v("\n        "+t._s(n.bookingDate.split("T")[0])+"\n        "),t._v(" "),e("h6",{style:{color:t.countDay(n.bookingDate.split("T")[0])>n.client.credit?"red":"green"}},[t._v("\n          "+t._s(t.countDay(n.bookingDate.split("T")[0]))+"\n        ")])]}},{key:"item.client.credit",fn:function(r){var n=r.item;return[new Date(t.dueDate(n.bookingDate,n.client.credit).toISOString().split("T")[0])<new Date?e(l.a,{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[t._v("\n          "+t._s(t.dueDate(n.bookingDate,n.client.credit).toISOString().split("T")[0])+"\n        ")]):e(l.a,{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[t._v("\n          "+t._s(t.dueDate(n.bookingDate,n.client.credit).toISOString().split("T")[0])+"\n        ")])]}},{key:"item.discount",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(r.discount))+"\n      ")]}},{key:"item.total",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.numberWithCommas(r.total))+"\n      ")]}},{key:"item.createdAt",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(r.createdAt.split(".")[0])+"\n      ")]}},{key:"item.id",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.viewItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-eye"})])]}},{key:"item.cancel",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.cancelItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-sync"})])]}},{key:"item.cusTel",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.whatsappLink(o)}}},[t._v("\n          "+t._s(o.cusTel)+"\n          "),e("a",{attrs:{href:t.whatsappContactLink,target:"_blank"}},[t._v("Whatsapp")])])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,"3d74de70",null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(295).default,OrderDetailPos:r(644).default,CancelTicketForm:r(633).default,OrderSumaryCard:r(629).default})}}]);