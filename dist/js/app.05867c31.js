(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"098e":function(t,e,s){},"484e":function(t,e,s){},"4f92":function(t,e,s){"use strict";s("cd36")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid p-0 d-flex flex-wrap"},[s("nav-bar"),s("app-content")],1)])},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-navbar py-2 py-md-2 bg-white"},[s("div",{staticClass:"app-navbar-wrapper d-flex flex-column align-items-center w-100"},[s("div",{staticClass:"d-flex w-100 px-4 align-items-center justify-content-between"},[t._m(0),s("div",{staticClass:"navbar-toggler d-block d-md-none",attrs:{"data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("i",{staticClass:"bi bi-list",on:{click:function(t){t.preventDefault()}}})])]),s("div",{staticClass:"navbar-nav collapse d-md-block mb-2 mt-4 align-self-start w-100",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"list-group stepper-list w-100 px-0"},t._l(t.Steps,(function(e,n){return s("li",{key:n,staticClass:"border-top-0 border-end-0 border-bottom-0 list-group-item d-flex text-secondary justify-content-between px-3 py-2",class:[{actives:e.isActive},{disabled:!e.isActive},{"border-3 border-start  border-primary":e.isActive}]},[s("div",[s("i",{staticClass:"bi bi-grid me-2"}),s("span",[t._v(t._s(++n)+". "+t._s(e.text))])]),e.isDone?s("i",{staticClass:"bi bi-check2 rounded-circle border-0 text-center text-secondary fw-bold stepper-list-actives"}):t._e()])})),0)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"align-items-center d-flex"},[s("img",{attrs:{src:"https://demo.toclient.com/assets/img/avatars/svg/man-4.svg",alt:"",width:"32px",height:"32px"}}),s("div",{staticClass:"p-0 mx-1"},[s("h5",{staticClass:"d-inline-block my-0 p-0",staticStyle:{"font-weight":"10px","font-size":"14.4px"}},[t._v(" John ")]),s("p",{staticClass:"m-0 text-muted p-0",staticStyle:{"font-size":"14.4px"}},[t._v(" Welcomes you :) ")])])])}],c=new n["a"],l=c,u={data:function(){return{Steps:[{text:"Idea",isActive:!0,isDone:!1},{text:"Target Users",isActive:!1,isDone:!1},{text:"Technology",isActive:!1,isDone:!1},{text:"Team",isActive:!1,isDone:!1},{text:"Budget",isActive:!1,isDone:!1},{text:"File Upload",isActive:!1,isDone:!1},{text:"Schedule a call",isActive:!1,isDone:!1}]}},mounted:function(){var t=this;l.$on("count",(function(e){for(var s=0;s<e;s++)t.Steps[s].isActive=!1,t.Steps[s].isDone=!0;t.Steps[e].isActive=!0}))}},d=u,p=(s("a909"),s("2877")),m=Object(p["a"])(d,o,r,!1,null,null,null),f=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-content position-relative d-flex flex-column justify-content-start pt-7"},[s("messageBalloon",{attrs:{messages:t.messages}}),s("messageInput",{attrs:{messages:t.messages}})],1)},b=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group d-flex justify-self-end mt-auto position-sticky start-0 bottom-0 px-4 py-3 bg-white"},[s("span",{staticClass:"input-group-text bi bi-envelope ps-3 border-0",staticStyle:{"background-color":"#f9faff"},attrs:{id:"basic-addon1"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"form-control py-3 border-0",staticStyle:{"background-color":"#f9faff"},attrs:{type:"text",disabled:t.secondCount>4,placeholder:"Type Your Answer","aria-label":"Username","aria-describedby":"basic-addon1",id:"msg"},domProps:{value:t.answer},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendAnswer()},input:function(e){e.target.composing||(t.answer=e.target.value)}}}),s("span",{staticClass:"input-group-text border-0 px-6",staticStyle:{"background-color":"#f9faff",cursor:"pointer"},on:{click:function(e){return t.sendAnswer()}}},[s("svg",{staticStyle:{"background-color":"#f9faff"},attrs:{id:"Capa_1","enable-background":"new 0 0 465.882 465.882",height:"21",viewBox:"0 0 465.882 465.882",width:"21",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"}})])])])},g=[],x={props:["messages"],data:function(){return{answer:"",counter:0,secondCount:0,questions:[{question:"Hey what should we call your project?"},{question:"Awesome! So tell me a little more. What is your idea?"},{question:"Sounds good. So who will be the target users?"},{question:"Do you have any specific tech stack in mind?"},{question:"Cool. Are there anyone else working on the project now? Maybe a designer or PM already in?"},{question:"Can you please give me an idea about your budget in terms of time and money? How soon do you want this and how much is your budget?"},{question:"If you have a requirement doc or any files related to the project, please upload them here!"}]}},methods:{sendAnswer:function(){l.$emit("count",this.counter),this.counter++,this.send("me",this.answer,this.time()),this.send("other",this.questions[this.counter].question,this.time()),window.scrollTo(0,document.body.scrollHeight)},send:function(t,e,s){this.messages.push({who:t,text:e,time:s}),this.answer=""},time:function(){var t=new Date,e=t.getHours(),s=t.getMinutes(),n=e>=12?"PM":"AM";e%=12,e=e||12,s=s<10?"0"+s:s;var a=e+":"+s+" "+n;return a}},created:function(){this.send("other","Hey what should we call your project?",this.time())},mounted:function(){var t=this;l.$on("count",(function(e){t.secondCount=e,console.log(e)}))}},y=x,w=Object(p["a"])(y,h,g,!1,null,null,null),C=w.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.messages,(function(e,n){return s("div",{key:n,staticClass:"col-md-12 d-flex align-items-end justify-content-end my-2 pe-2"},[s("div",{staticClass:"box sb1 py-1 px-4",class:[e.who]},[s("div",{staticClass:"row"},[t._v(" "+t._s(e.text)+" ")]),s("small",{staticClass:"float-end d-block"},[t._v(t._s(e.time))])]),"other"==e.who?s("img",{staticClass:"img",attrs:{src:"https://demo.toclient.com/assets/img/avatars/svg/man-4.svg",alt:"",width:"32px",height:"32px"}}):s("img",{staticClass:"img",attrs:{src:"https://demo.toclient.com/assets/img/avatars/svg/man-3.svg",alt:"",width:"32px",height:"32px"}})])})),t.count>=5?s("div",{staticClass:"row m-0 p-0"},[s("div",{staticClass:"col-md-9 text-center border-1 mx-auto bg-white py-3 px-6"},[s("small",{staticClass:"d-block"},[t._v("Max Size 5MB")]),s("small",{staticClass:"d-block mb-1"},[t._v("Supported formats(doc, docx, pdf)")]),t._m(0),s("button",{staticClass:"btn text-primary me-1 p-1",staticStyle:{"font-size":"14px","font-weight":"500","background-color":"#eaeeff"},on:{click:function(e){return t.skip()}}},[t._v(" SKIP FOR NOW ")])])]):t._e(),t.count>=6?s("div",{staticClass:"row m-0 p-0 my-5"},[s("div",{staticClass:"col-md-9 border-1 mx-auto bg-white py-3 ps-6"},[t.nextComp<3?s("small",{staticClass:"d-block my-2"},[t._v("SCHEDULE A 30 MINS CALL")]):t._e(),0==t.nextComp?s("div",[s("small",{staticClass:"d-block my-2"},[t._v("Select a Day")]),s("div",{staticClass:"row"},t._l(t.dates,(function(e,n){return s("div",{key:n,staticClass:"col-md-5 text-center border border-dark m-1 py-1 px-4 hvr",on:{click:function(s){return t.selectDate(e)}}},[s("span",{staticClass:"d-block"},[t._v(t._s(e.gun))]),s("span",{staticClass:"d-block"},[t._v(t._s(e.tarih))])])})),0)]):1==t.nextComp?s("div",[s("small",{staticClass:"d-block my-2"},[t._v("Select a suitable time")]),s("div",{staticClass:"row"},t._l(t.hours,(function(e,n){return s("div",{key:n,staticClass:"col-md-5 text-center border border-dark m-1 py-1 px-4 hvr",on:{click:function(s){return t.selectHour(e)}}},[s("span",{staticClass:"d-block"},[t._v(t._s(e))])])})),0)]):2==t.nextComp?s("div",[s("div",{staticClass:"row"},[t._m(1),s("div",{staticClass:"col-md-8 mt-md-0 mt-2"},[s("h3",{staticClass:"p-0 m-0 fw-light"},[t._v(t._s(t.selectedHour))]),s("h3",{staticClass:"p-0 m-0 fw-light"},[t._v(t._s(t.selectedDate))]),t._m(2),s("div",{staticClass:"form-group my-2 text-muted"},[s("label",[t._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userMail,expression:"userMail"}],staticClass:"form-control",staticStyle:{background:"#f9faff"},attrs:{type:"email",required:"",id:"email",placeholder:"johndoe@mail.com"},domProps:{value:t.userMail},on:{input:function(e){e.target.composing||(t.userMail=e.target.value)}}})]),s("button",{staticClass:"btn text-primary p-1 w-50",staticStyle:{"font-size":"14px","font-weight":"500","background-color":"#eaeeff"},on:{click:function(e){return t.back()}}},[t._v(" Back ")]),s("button",{staticClass:"btn btn-primary p-1 w-50",staticStyle:{"font-size":"14px","font-weight":"500",padding:"9px 15px"},on:{click:function(e){return t.confirm()}}},[t._v(" Confirm Call ")])])])]):s("div",[s("div",{staticClass:"py-4 px-3 text-center"},[s("svg",{staticClass:"d-block mx-auto",attrs:{width:"84px",height:"84px",viewBox:"0 0 84 84",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"}},[s("circle",{staticClass:"border",attrs:{cx:"42",cy:"42",r:"40","stroke-linecap":"round","stroke-width":"4",stroke:"#2e5bff",fill:"none"}}),s("path",{staticClass:"checkmark",attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338","stroke-width":"4",stroke:"#2e5bff",fill:"none"}})]),s("h3",{staticClass:"text-primary mt-2"},[t._v("Call Confirmed")]),s("p",[t._v("Thanks for reaching out. I'll get back to you. John")])])]),t.nextComp<2?s("button",{staticClass:"btn btn-primary float-end me-lg-10 mt-2 py-1 px-6",attrs:{id:"btn",disabled:t.btnIsDisabled},on:{click:function(e){return t.next()}}},[t._v(" NEXT ")]):t._e()])]):t._e()],2)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"btn btn-primary me-1 p-1",staticStyle:{"font-size":"14px","font-weight":"500",padding:"9px 15px"}},[s("i",{staticClass:"bi bi-upload"}),t._v(" UPLOAD A FILE "),s("input",{attrs:{type:"file",hidden:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4 p-0"},[s("img",{staticClass:"callImg",attrs:{src:"https://demo.toclient.com/assets/img/call-require.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3 w-75"},[s("small",{staticClass:"text-muted"},[t._v("Your are running GMT +03:00. Please enter your email address to confirm the call.")])])}],S={props:["messages"],data:function(){return{count:0,test:!1,selectedDate:"",nextComp:0,hours:["10:30 AM","11:00 AM","11:30 AM","12:30 PM","2:30 PM","3:30 PM"],btnIsDisabled:!0,selectedHour:"",userMail:""}},methods:{skip:function(){l.$emit("count",++this.count)},back:function(){this.nextComp--,this.btnIsDisabled=!1},selectDate:function(t){this.selectedDate=t.tarih+" "+t.gun,this.btnIsDisabled=!1},selectHour:function(t){this.selectedHour=t,this.btnIsDisabled=!1},next:function(){this.nextComp++,this.btnIsDisabled=!0},confirm:function(){this.nextComp++,console.log(this.selectedDate),console.log(this.selectedHour),console.log(this.userMail)}},computed:{dates:function(){for(var t=new Date,e=new Date,s=[],n=1;n<7;n++){e.setDate(t.getDate()+n);var a=e.toLocaleString(window.navigator.language,{year:"numeric",month:"long",day:"numeric"}),i=e.toLocaleString(window.navigator.language,{weekday:"long"});s.push({tarih:a,gun:i})}return s}},mounted:function(){var t=this;l.$on("count",(function(e){t.count=e}))}},D=S,A=(s("90f7"),Object(p["a"])(D,_,k,!1,null,"1fd35061",null)),j=A.exports,M={components:{messageInput:C,messageBalloon:j},data:function(){return{messages:[]}}},O=M,P=(s("4f92"),Object(p["a"])(O,v,b,!1,null,null,null)),$=P.exports;s("c30b"),s("cd74");var E={name:"App",components:{navBar:f,appContent:$}},I=E,q=(s("cf25"),Object(p["a"])(I,a,i,!1,null,null,null)),H=q.exports;n["a"].config.productionTip=!1,n["a"].mixin({methods:{getCounter:function(t){l.$emit("count",t)}}}),new n["a"]({render:function(t){return t(H)}}).$mount("#app")},"90f7":function(t,e,s){"use strict";s("098e")},a909:function(t,e,s){"use strict";s("484e")},c30b:function(t,e,s){},cd36:function(t,e,s){},cf25:function(t,e,s){"use strict";s("fea6")},fea6:function(t,e,s){}});
//# sourceMappingURL=app.05867c31.js.map