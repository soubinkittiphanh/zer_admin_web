(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{640:function(t,e,d){d(6)({target:"Number",stat:!0},{isInteger:d(641)})},641:function(t,e,d){var r=d(44),n=Math.floor;t.exports=Number.isInteger||function(t){return!r(t)&&isFinite(t)&&n(t)===t}},657:function(t,e,d){t.exports=d.p+"img/company_logo.01515f7.jpeg"},721:function(t,e,d){var content=d(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(15).default)("3a51efca",content,!0,{sourceMap:!1})},812:function(t,e,d){"use strict";d(721)},813:function(t,e,d){var r=d(14)((function(i){return i[1]}));r.push([t.i,'*[data-v-24d170d6]{font-family:"Noto Sans Lao"}#body[data-v-24d170d6]{font-size:12px}.title-space[data-v-24d170d6]{margin:4px 0}.heading-14[data-v-24d170d6]{font-size:16px}.text-color[data-v-24d170d6]{color:#246ab2}.page-break[data-v-24d170d6]{page-break-after:auto;page-break-inside:avoid}@media print{.page[data-v-24d170d6],body[data-v-24d170d6]{margin:0}table[data-v-24d170d6]{page-break-inside:auto}td[data-v-24d170d6],tr[data-v-24d170d6]{page-break-after:auto;page-break-inside:avoid}thead[data-v-24d170d6]{display:table-header-group}tfoot[data-v-24d170d6]{display:table-footer-group}#page-break[data-v-24d170d6]{clear:both;page-break-after:always}@page{margin:1cm 0 .2cm 0}}.page-footer[data-v-24d170d6],.page-footer-space[data-v-24d170d6]{height:100px}.page-footer[data-v-24d170d6]{bottom:0;position:fixed;width:21cm}.table td[data-v-24d170d6],th[data-v-24d170d6]{border:1px solid #000;padding:8px;text-align:left}.table th[data-v-24d170d6]{font-size:11pt;text-align:center}.table td[data-v-24d170d6]{font-size:8pt}*[data-v-24d170d6]{font-family:Phetsarath OT}#body[data-v-24d170d6]{background:#ccc}.page[data-v-24d170d6]{background:#fff;display:block;margin:0 auto .5cm}.page[size=A4][data-v-24d170d6]{width:21cm}.page[size=A4][layout=landscape][data-v-24d170d6]{height:21cm;width:29.7cm}.page[size=A3][data-v-24d170d6]{height:42cm;width:29.7cm}.page[size=A3][layout=landscape][data-v-24d170d6]{height:29.7cm;width:42cm}.page[size=A5][data-v-24d170d6]{height:21cm;width:14.8cm}.page[size=A5][layout=landscape][data-v-24d170d6]{height:14.8cm;width:21cm}.d-flex>p[data-v-24d170d6]{margin-bottom:0}.table-layout[data-v-24d170d6]{table-layout:fixed;width:100%}.table-layout>tbody>tr>td[data-v-24d170d6]:first-child{width:130px}.table-layout>tbody>tr>td[data-v-24d170d6]:nth-child(5){width:80px}.table-layout>tbody>tr>td[data-v-24d170d6]:nth-child(6){width:150px}td[data-v-24d170d6]{word-wrap:break-word;padding-left:2px;padding-right:2px;vertical-align:top}',""]),r.locals={},t.exports=r},879:function(t,e,d){"use strict";d.r(e);var r=d(281),n=d(611),o=d(606),c=d(279),l=d(610),v=(d(32),d(10),d(8),d(9),d(4),d(12),d(7),d(13),d(24)),h=d(1),f=(d(105),d(640),d(20),d(49)),_=d(64);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}var m={name:"Quotation",layout:"login",data:function(){return{id:null,header:null,companyLogo:d(657)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.c)(["cartOfProduct","currentSelectedCustomer","currentSelectedPayment","findAllProduct"])),created:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id=t.$route.params.id,!t.id){e.next=6;break}return Number.isInteger(t.id)?t.id:null,e.next=5,t.$axios.get("api/transfer/find/".concat(t.id)).then((function(e){console.log("Data is loading"),t.header=e.data})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 5:t.isloading=!1;case 6:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(_.e)(t)}}},w=m,x=(d(812),d(36)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"body"}},[e("div",{staticClass:"wrapper page",attrs:{size:"A4"}},[e(o.a,[e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("div",{staticClass:"mt-6 mb-6"},[e("img",{attrs:{src:t.companyLogo,width:"200px"}})])]),t._v(" "),e("h1",{staticStyle:{"text-align":"center"}},[t._v("CHITHANH")]),t._v(" "),e("p",{staticClass:"text-color",staticStyle:{"font-size":"11pt","font-weight":"bold","text-align":"center"}},[t._v("\n        Company addres here ...\n      ")]),t._v(" "),e("p",{staticClass:"text-color",staticStyle:{"font-size":"21pt","font-weight":"bold","text-align":"center"}},[t._v("\n        ໃບໂອນເຄື່ອງ / Stock transfer\n      ")]),t._v(" "),e(c.a),t._v(" "),t.header?e("div",[e(l.a,[e(n.a,{attrs:{cols:"6"}},[e("table",{staticClass:"table-layout"},[e("tbody",[e("tr",{staticStyle:{"white-space":"nowrap"}},[e("td",[t._v(" From location: "),e("h2",[t._v("\n                      "+t._s(t.header.srcLocation.name)+"\n                    ")])])]),t._v(" "),e("tr",{staticStyle:{"white-space":"nowrap"}},[e("td",[t._v(" To location: "),e("h2",[t._v("\n\n                      "+t._s(t.header.desLocation.name)+"\n                    ")])])])])])]),t._v(" "),e(n.a,{attrs:{cols:"6","align-self":"end"}},[e("table",{staticClass:"table-layout"},[e("tbody",{staticStyle:{"text-align":"right"}},[e("tr",{staticStyle:{"white-space":"nowrap"}},[e("td",[t._v(" Transfer No: "+t._s(t.header.id))])]),t._v(" "),e("tr",{staticStyle:{"white-space":"nowrap"}},[e("td",[t._v(" Date: "+t._s(t.header.bookingDate))])]),t._v(" "),e("tr",{staticStyle:{"white-space":"nowrap"}},[e("td",[t._v(" Prepare By: "+t._s(t.header.user.cus_name))])])])])])],1)],1):t._e(),t._v(" "),e(c.a),t._v(" "),t.header?e("div",[e("table",{staticClass:"table table-layout",staticStyle:{"border-collapse":"collapse"},attrs:{width:"100%"}},[e("thead",[e("tr",[e("th",{staticStyle:{width:"40px"}},[t._v("#")]),t._v(" "),e("th",{staticStyle:{width:"180px"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{width:"80px"}},[t._v("Qty")]),t._v(" "),e("th",{staticStyle:{width:"80px"}},[t._v("Unit")]),t._v(" "),e("th",{staticStyle:{width:"80px"}},[t._v("Rate")]),t._v(" "),e("th",{staticStyle:{width:"100px"}},[t._v("Price")]),t._v(" "),e("th",{staticStyle:{width:"70px"}},[t._v("Amount")])])]),t._v(" "),e("tbody",[t.header.lines&&t.header.lines.length>0?e("div",{staticStyle:{display:"contents"}},t._l(t.header.lines,(function(line,i){return e("tr",{key:line.id,staticClass:"page-break"},[e("td",{staticClass:"text-center"},[t._v(t._s(++i))]),t._v(" "),e("td",[t._v(t._s(line.product.pro_name))]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(line.quantity))]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(line.unit.name))]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(line.unit.unitRate))]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.formatNumber(line.price)))]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.formatNumber(line.total)))])])})),0):e("div",{staticStyle:{display:"contents"}},[e("tr",[e("td",{attrs:{colspan:"6"}},[t._v("ບໍ່ມີຂໍ້ມູນ")])])]),t._v(" "),e("tr",{staticClass:"page-break"},[e("td",{staticStyle:{"text-align":"right","font-weight":"bold"},attrs:{colspan:"6"}},[t._v("ລາຄາລວມ ")]),t._v(" "),e("td",{staticStyle:{"text-align":"right","font-weight":"bold"}},[t._v(" "+t._s(t.formatNumber(t.header.total)))])])])])]):t._e(),t._v(" "),e("div",{},[e(l.a,{attrs:{"no-gutters":""}},[e(n.a,{attrs:{cols:"5","align-self":"end"}},[e(r.a,{staticClass:"mx-auto ml-0",attrs:{height:"134",width:"100%",outlined:""}},[t._v("\n              Stock keeper signature:\n            ")])],1),t._v(" "),e(n.a,{attrs:{cols:"2"}}),t._v(" "),e(n.a,{attrs:{cols:"5"}},[e(r.a,{staticClass:"mx-auto",attrs:{height:"134",width:"100%",outlined:""}},[t._v("\n              Receiver:\n            ")])],1)],1)],1)],1)],1)])}),[],!1,null,"24d170d6",null);e.default=component.exports}}]);