(window.webpackJsonp=window.webpackJsonp||[]).push([[41,17,19],{554:function(t,e,n){"use strict";n.r(e);var r=n(243),o=n(138),l=n(240),c=n(74),component=Object(c.a)({},(function(){var t=this._self._c;return t(r.a,{attrs:{color:"primary",dark:""}},[t(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(l.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);var r=n(536),o=n(243),l=n(138),c=n(241),d=n(549),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=n(74),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(l.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(c.a),t._v(" "),e(l.a,[e(d.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},564:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(26),n(207);var r=function(t,title,e){t({icon:"error",title:title,text:e,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},o=function(t,title,text){t({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},l=function(t){return(new Intl.NumberFormat).format(t)}},565:function(t,e,n){"use strict";var r=n(2),o=(n(40),n(57),n(257),n(10),n(4),n(8),n(48),n(108),n(9),n(11),n(13),n(14),n(5)),l=n(93),c=n(111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},568:function(t,e,n){n(571)},571:function(t,e,n){"use strict";var r=n(6),o=n(27),l=n(18),c=n(59),d=n(22),f=n(80),m=n(206),h=n(31),v=n(102),_=n(258),y=n(354),x=n(25),w=n(49),O=x("replace"),D=TypeError,k=l("".indexOf),I=l("".replace),S=l("".slice),C=Math.max,j=function(t,e,n){return n>t.length?-1:""===e?n:k(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,l,x,F,N,E,A,T,$=c(this),R=0,P=0,B="";if(!f(t)){if((n=m(t))&&(r=h(c(_(t))),!~k(r,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(l=v(t,O))return o(l,t,$,e);if(w&&n)return I(h($),t,e)}for(x=h($),F=h(t),(N=d(e))||(e=h(e)),E=F.length,A=C(1,E),R=j(x,F,0);-1!==R;)T=N?h(e(F,R,x)):y(F,x,R,[],void 0,e),B+=S(x,P,R)+T,P=R+E,R=j(x,F,R+A);return P<x.length&&(B+=S(x,P)),B}})},586:function(t,e,n){"use strict";n(259);var r=n(261);e.a=Object(r.a)("layout")},589:function(t,e,n){"use strict";n.r(e);var r=n(243),o=n(138),l=n(574),c=n(241),d=n(572),f={props:{orderDetail:{type:Object,default:""}}},m=n(74),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ml-4"},[e(o.d,[t._v(t._s(this.orderDetail.title))]),t._v(" "),e(d.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຈຳນວນ")]),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.amount)+" ອໍເດີ")])],1),t._v(" "),e(c.a),t._v(" "),e(d.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດຂາຍ")]),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.sale))])],1),t._v(" "),e(c.a),t._v(" "),e(d.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v("ສ່ວນຫລຸດ")]),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.discount))])],1),t._v(" "),e(c.a),t._v(" "),e(d.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດເຫລືອ")]),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.gross))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},612:function(t,e,n){var content=n(670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3e5affca",content,!0,{sourceMap:!1})},629:function(t,e,n){"use strict";n.r(e);var r=n(536),o=n(243),l=n(138),c=n(547),d=n(563),f=n(565),m=n(56),h=n(549),v=n(85),_=(n(9),n(11),n(10),n(4),n(13),n(8),n(14),n(2)),y=n(38),x=(n(139),n(21),n(30),n(40),n(57),n(47),n(564));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={props:{amount:{type:Number,require:!0,default:0},orderId:{type:Number,require:!0},lockingSessionId:{type:String,require:!0}},computed:{userId:function(){return this.$auth.user.id},userName:function(){return this.$auth.user.name}},data:function(){return{loaddata:[],isloading:!1,valid:!0,message:null,dialogMessage:!1,paymentAmount:0,codFee:0,form_data:{txn_his_id:1e3,txn_id:1e3,txn_type:"CASH",txn_his_amount:1e4,user_id:this.userId,user_balance:this.cusBalance,txn_his_inputter:this.$store.getters.loggedInUser.id,txn_his_date:"2021-09-25 00:00:00"},rule:{idRules:[function(t){return!!t||"ໄອດີ is required"}],amountRules:[function(t){return!!t||"ກລນ ໃສ່ຈຳນວນ is required"}],amountCODRules:[function(t){return!t||"ກລນ ໃສ່ຈຳນວນ is required"}],txnRule:[function(t){return!!t||"ກະລຸນາເລືອກ ລາຍການທຸລະກຳ is required"}]}}},created:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:console.log("Assign amount: ",t.paymentAmount);case 3:case"end":return e.stop()}}),e)})))()},watch:{userId:function(t){this.form_data.user_id=t},amount:function(t){console.log("New amount: ",t),this.paymentAmount=t}},methods:{selectChange:function(t){console.log("SELECT: "+t),this.form_data.txn_id=t},submitDatas:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading=!0,console.log("AMOUNT: ",t.amount),t.$refs.form.validate()){e.next=6;break}return console.log("From validate is verified"),t.isloading=!1,e.abrupt("return");case 6:return n={lockingSessionId:t.lockingSessionId,paymentCode:t.form_data.txn_type,codFee:t.codFee,orderId:t.orderId,userId:t.userId,amount:t.paymentAmount},"/order_cod_settle",e.next=10,t.$axios.post("/order_cod_settle",O({},n)).then((function(e){return t.message=e.data,console.log("this.message",t.message),t.message.includes("completed")?(console.log("RELOAD DATA TRIGGER"),t.refreshData(!0),Object(x.c)(t.$swal,"Succeed","Your transaction completed")):Object(x.b)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")})).catch((function(e){t.message="Error: "+e}));case 10:t.isloading=!1;case 11:case"end":return e.stop()}}),e)})))()},fetchData:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("payment").then((function(e){t.loaddata=e.data.map((function(t){return console.log(t.txn_id),{txn_id:t.payment_code,txn_type:t.payment_code,txn_name:t.payment_name}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 2:case"end":return e.stop()}}),e)})))()},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},formatNum:function(t){return(new Intl.NumberFormat).format(t)},refreshData:function(t){this.$emit("reload",t)}}},k=n(74),component=Object(k.a)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(l.d,[t._v("\n      ຊຳລະບິນ "+t._s(this.orderId+"-"+this.lockingSessionId||"null")+" ຍອດ:\n      "+t._s(t.formatNum(this.amount))+" ")]),t._v(" "),e(c.a,[e(f.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(v.a,{attrs:{counter:10,rules:t.rule.idRules,label:"ໄອດີ ຜູ້ລົງ",required:"",disabled:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),e(m.a,{attrs:{items:t.loaddata,"item-value":function(t){return t.txn_id},"item-text":function(t){return t.txn_id+" - "+t.txn_name},"append-outer-icon":"mdi-cash-check","menu-props":"auto","hide-details":"",label:"ປະເພດການຊຳລະ","single-line":"",rules:t.rule.txnRule},on:{change:t.selectChange},model:{value:t.form_data.txn_type,callback:function(e){t.$set(t.form_data,"txn_type",e)},expression:"form_data.txn_type"}}),t._v(" "),e(v.a,{attrs:{counter:10,rules:t.rule.amountRules,label:"ຈຳນວນເງິນ: "+t.formatNum(t.paymentAmount),required:""},model:{value:t.paymentAmount,callback:function(e){t.paymentAmount=e},expression:"paymentAmount"}}),t._v(" "),e(v.a,{attrs:{counter:10,rules:t.rule.amountCODRules,label:"ຄ່າທຳນຽມ COD: "+t.formatNum(t.codFee),required:""},model:{value:t.codFee,callback:function(e){t.codFee=e},expression:"codFee"}})],1),t._v("\n      "+t._s(t.userId)+"\n      "),t._t("default")],2),t._v(" "),e(l.a,[e(h.a),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n        ປິດ\n      ")]),t._v(" "),e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.submitDatas}},[t._v(" ບັນທຶກ ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(554).default})},669:function(t,e,n){"use strict";n(612)},670:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,'.grey[data-v-b10ae5da],.text-h5[data-v-b10ae5da]{font-family:"Noto Sans Lao"}table[data-v-b10ae5da]{border:1px solid #000}',""]),r.locals={},t.exports=r},709:function(t,e,n){"use strict";n.r(e);var r=n(536),o=n(243),l=n(138),c=n(574),d=n(701),f=n(700),m=n(563),h=n(586),v=n(244),_=n(572),y=n(85),x=(n(29),n(252),n(75),n(568),n(24)),w=n(38),O=(n(4),n(8),n(69),n(26),n(47),n(30),n(578),n(139),n(564),{middleware:"auths",data:function(){return{formData:{cusId:1e4,cusBalance:0},orderLockingSessionId:"",componentSettlementKey:1,payment:!1,paymentAmount:0,OrderIdSelected:"",whatsappContactLink:"",componentKey:0,dialogOrderDetail:!1,selectedOrderId:"",wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,message:"",valid:!0,name:"",search:"",userId:null,orderHeaderList:[],loadDataNoCancelOrder:[],headers:[{text:"ວັນທີ",align:"center",value:"bookingDate",sortable:!0},{text:"ຈຳນວນ ວັນ",align:"center",value:"codCount",sortable:!0},{text:"ຊື່ລູກຄ້າ",align:"center",value:"cusName"},{text:"ເບີໂທ",align:"center",value:"cusTel"},{text:"ບ່ອນສົ່ງ",align:"center",value:"cusAddress"},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ລວມ",align:"end",value:"cartTotal",sortable:!1},{text:"ຂົນສົ່ງ",align:"end",value:"shippingCompany",sortable:!1},{text:"ການຊຳລະ",align:"end",value:"payment",sortable:!1},{text:"ຮ້ານ",align:"end",value:"shopName",sortable:!1},{text:"ກົດຊຳລະ",align:"end",value:"function",sortable:!1}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},watch:{message:function(t){this.dialog=null!=t},isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.loadData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.loadData()}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)},totalSale:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),console.log("Price total: "+t),this.getFormatNum(t)},totalSaleOriginal:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),console.log("Price total: "+t),this.getFormatNum(t)},totalDiscount:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.discount),t+=parseInt(e.discount)})),console.log("Price total: "+t),this.getFormatNum(t)},noCancelData:function(){var t=this;return this.loadDataNoCancelOrder=[],this.orderHeaderList.forEach((function(element){console.log(element.recordStatus),1===element.recordStatus&&(console.log("Concept applied"),t.loadDataNoCancelOrder.push(element))})),this.loadDataNoCancelOrder}},beforeEnter:function(){console.log("Hook is being called"),this.refreshComponent()},methods:{whatsappLink:function(t){var e=t.cusTel.trim(),n=e.substring(e.length-8);this.whatsappContactLink="https://api.whatsapp.com/send?phone=+85620".concat(n,"&text=").concat(encodeURIComponent("ສະບາຍດີ ລູກຄ້າ "))},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},editItem:function(t){console.log("Edit test",t.order_price_total.replaceAll(",","")),console.log("Order id",t.order_id),this.componentSettlementKey+=1,this.paymentAmount=+t.order_price_total.replaceAll(",",""),this.OrderIdSelected=t.orderId,this.orderLockingSessionId=t.lockingSessionId,this.payment=!0},handleEvent:function(){this.dialogOrderDetail=!1},codDayCount:function(t){var e=t.split("-")[1]+"/"+t.split("-")[2]+"/"+t.split("-")[0],n=new Date(e),r=(new Date).getTime()-n.getTime();return Math.ceil(r/864e5)},loadData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/dynamicCustomer/findDymCustomerByCOD?fdate="+t.date+"&tdate="+t.date2).then((function(e){t.orderHeaderList=e.data.map((function(e){return{cartTotal:e.cart_total,codFee:e.cod_fee,cusAddress:e.dest_delivery_branch,discount:e.discount,id:e.id,lockingSessionId:e.locking_session_id,cusName:e.name,payment:e.payment_code,riderFee:e.rider_fee,shippingFeeBy:e.shipping_fee_by,shopName:e.outlet_name,shippingCompany:e.source_delivery_branch,cusTel:e.tel,bookingDate:e.txn_date.split("T")[0],recordStatus:1,orderId:e.order_id,codCount:t.codDayCount(e.txn_date.split("T")[0]),order_price_total:t.getFormatNum(e.cart_total)}})),console.log(t.orderHeaderList.length)})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(x.a)(e,3),r=n[0],o=n[1],l=n[2];return"".concat(o,"/").concat(l,"/").concat(r)},parseDate:function(t){if(!t)return null;var e=t.split("/"),n=Object(x.a)(e,3),r=n[0],o=n[1],l=n[2];return"".concat(l,"-").concat(r.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}}),D=(n(669),n(74)),component=Object(D.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"max-width":"1024"},model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}},[e("settlement",{key:t.componentSettlementKey,attrs:{amount:t.paymentAmount,"order-id":t.OrderIdSelected,"locking-session-id":t.orderLockingSessionId},on:{"close-dialog":function(e){t.payment=!1},reload:function(e){t.payment=!1,t.loadData()}}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,[e(l.d,[e(h.a,{attrs:{row:"",wrap:""}},[e(c.a,{attrs:{cols:"6"}},[e(v.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(v.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(y.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e(y.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(y.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດຜູ້ຂາຍ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),e(r.a,{on:{click:t.loadData}},[t._v(" ດຶງລາຍງານ ")])],1)],1)],1),t._v(" "),e(l.c,[e(h.a,{attrs:{row:"",wrap:""}},[e(_.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{orderDetail:{title:"ຍອດບິນ",amount:t.getFormatNum(t.noCancelData.length),sale:t.totalSale,discount:t.totalDiscount,gross:t.getFormatNum(t.totalSale.replaceAll(",","")-t.totalDiscount.replaceAll(",",""))}}})],1),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}})],1)],1)],1),t._v(" "),t.orderHeaderList?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.orderHeaderList},scopedSlots:t._u([{key:"item.function",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-wallet"})])]}},{key:"item.cusTel",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.whatsappLink(o)}}},[t._v("\n          "+t._s(o.cusTel)+"\n          "),e("a",{attrs:{href:t.whatsappContactLink,target:"_blank"}},[t._v("Whatsapp")])])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,"b10ae5da",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:n(557).default,Settlement:n(629).default,LoadingIndicator:n(554).default,OrderSumaryCard:n(589).default})}}]);