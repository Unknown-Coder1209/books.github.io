(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-414ae6b5"],{"8e05":function(t,e,i){var s=i("f85e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("499e").default;n("74c02b61",s,!0,{sourceMap:!1,shadowMode:!1})},d504:function(t,e,i){"use strict";i.r(e);var s=i("7496"),n=i("8336"),a=i("b0af"),o=i("99d9"),r=i("62ad"),l=i("a523"),c=i("ce7e"),d=i("0789"),u=i("132d"),p=i("adda"),m=i("d903"),f=i("604c"),h=i("1d4d"),v=i("0fd9"),b=i("3a2f"),w=i("f665"),g=i("9d65"),x=i("4e82"),y=i("c3f0"),_=i("80d2"),C=i("58df");const k=Object(C["a"])(g["a"],Object(x["a"])("windowGroup","v-window-item","v-window"));var T=k.extend().extend().extend({name:"v-window-item",directives:{Touch:y["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(_["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(_["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),A=function(){var t=this,e=t._self._c;return e(s["a"],[e(l["a"],[e(v["a"],{staticClass:"mb-5 mb-lg-8"},[e(r["a"],{staticClass:"mb-2",attrs:{cols:"12",sm:"6"}},[e("h1",[t._v(t._s(t.companyName))]),e("p",{staticClass:"mb-1 text-subtitle-2 font-weight-medium"},[t._v(" Наша библиотека может похвастаться "),e("router-link",{staticClass:"font-weight-bold text-decoration-underline info--text text-non-space",attrs:{to:"/lib"}},[t._v("тысячами книг")]),t._v(". ")],1),e("p",{staticClass:"text-subtitle-2 font-weigth-medium"},[t._v(" В нашей библиотеке, вы легко найдете себе интересную книгу ")]),e(n["a"],{attrs:{color:"primary",to:"/lib"}},[t._v(" Найти книгу по душе ")])],1),e(r["a"],{staticClass:"mx-auto",attrs:{cols:"12",sm:"6"}},[e(p["a"],{attrs:{height:"200px",src:i("e36c")}})],1)],1),e(v["a"],[e(r["a"],{attrs:{cols:"12"}},[e("p",{staticClass:"text-h4 text-center"},[t._v("Наши приемущества")])]),e(d["e"],{staticClass:"d-md-flex",staticStyle:{width:"100%"},attrs:{tag:"span",group:"",appear:""}},t._l(t.opportunitiesService,(function(i,s){return e(r["a"],{key:i,staticClass:"mx-sm-auto px-md-2",attrs:{cols:"12",sm:"10",md:"3"}},[e(a["a"],{staticClass:"h-full",attrs:{hover:""}},[e(o["d"],{staticClass:"justify-center text-center",class:{"px-md-9 py-md-0 pa-lg-4":3===s}},[t._v(" "+t._s(i.title)+" ")]),e(c["a"],{staticClass:"mx-4"}),e(o["a"],{staticClass:"justify-center"},[e(n["a"],{attrs:{fab:""}},[e(u["a"],[t._v("mdi-"+t._s(i.icon))])],1)],1),e(o["c"],{staticClass:"text-center text-subtitle-2"},[t._v(t._s(i.description))])],1)],1)})),1)],1),e(v["a"],[e(r["a"],{staticClass:"pb-0",attrs:{cols:"12"}},[e("p",{staticClass:"text-h4 text-center"},[t._v("Наши лучшие книги")])]),e(r["a"],{attrs:{cols:"12"}},[e(f["b"],[e(w["a"],{attrs:{continuous:"","show-arrows":""},scopedSlots:t._u([{key:"next",fn:function({on:i,attrs:s}){return[e(n["a"],t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),i),[e(u["a"],[t._v(" mdi-book-arrow-right ")])],1)]}},{key:"prev",fn:function({on:i,attrs:s}){return[e(n["a"],t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),i),[e(u["a"],[t._v(" mdi-book-arrow-left ")])],1)]}}]),model:{value:t.booksCarouselItem,callback:function(e){t.booksCarouselItem=e},expression:"booksCarouselItem"}},t._l(t.books,(function(i){return e(T,{key:i},[e(m["a"],{scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:m}){return[e(l["a"],{attrs:{fluid:""}},[e(v["a"],{attrs:{justify:"center"}},[e(r["a"],{attrs:{cols:"12",sm:"6"}},[e(a["a"],[e("div",{staticClass:"py-0 py-sm-2"},[e(p["a"],{staticClass:"white--text align-end",attrs:{contain:t.$vuetify.breakpoint.smAndUp,"lazy-img":i.cover,src:i.cover,"max-height":t.$vuetify.breakpoint.smAndUp?"300":"200"}},[e(o["d"],{staticClass:"d-flex d-sm-none text-body-1 font-weight-bold"},[t._v(" "+t._s(i.title)+" "),e(n["a"],{attrs:{color:"primary",small:""}},[t._v(" Прочитать")])],1)],1)],1),e(c["a"]),e(o["d"],{staticClass:"d-none d-sm-flex justify-sm-space-between"},[t._v(" "+t._s(i.title)+" "),e("span",{staticClass:"flex-sm-grow-1 d-sm-inline-flex align-sm-baseline"},[e(n["a"],{staticClass:"mx-sm-1 mx-md-2 mx-lg-3",attrs:{small:"",color:"primary"}},[t._v(" Прочитать ")]),e("span",{staticClass:"flex-grow-1 d-sm-inline-flex justify-sm-end"},[e(n["a"],{attrs:{icon:""},on:{click:m}},[e(u["a"],{attrs:{rigth:""}},[t._v(" mdi-chevron-"+t._s(s?"down":"up")+" ")])],1)],1)],1)]),e(d["a"],[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.xsOnly||s,expression:"$vuetify.breakpoint.xsOnly || active"}]},[e(c["a"]),e(o["a"],[e(h["a"],{attrs:{"half-increments":"",dense:"",readonly:"",value:i.rating,size:t.$vuetify.breakpoint.xsOnly?"14":"20"}}),e("div",{staticClass:"d-inline-flex flex-grow-1 justify-end"},t._l(t.booksTip,(function(i){return e(b["a"],{key:i,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(n["a"],t._g(t._b({attrs:{icon:"",color:"primary"}},"v-btn",a,!1),s),[e(u["a"],{attrs:{size:t.$vuetify.breakpoint.xsOnly?"14":"20"}},[t._v(" mdi-"+t._s(i.icon)+" ")])],1)]}}],null,!0)},[e("span",[t._v(t._s(i.text))])])})),1)],1)],1)])],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)],1)],1)],1)},j=[],S=i("2f62"),G={name:"Index",data:()=>({booksCarouselItem:0,opportunitiesService:[{icon:"account",title:"Личный кабинет",description:"Баланс, купленные книги, прочитанные книги, книги которые вы планируете прочитать. Все, и в одном месте."},{icon:"credit-card",title:"Оплата онлайн",description:"27/7 вы можете оплатить вашу любимую книгу"},{icon:"account-group",title:"Тех-поддержка",description:"Наши специалисты решат вас вопрос как можно быстрее!"},{icon:"book-multiple",title:"Разнообразие жанров",description:"От фантастики до книг по метафизики, вас ждет удивительный мир фантастов!"}]}),computed:{...Object(S["b"])({books:t=>t.books.books.item,booksTip:t=>t.books.tips,companyName:t=>t.companyName})}},O=G,$=(i("ee2f"),i("2877")),I=Object($["a"])(O,A,j,!1,null,"6753edaa",null);e["default"]=I.exports},d903:function(t,e,i){"use strict";var s=i("4e82"),n=i("58df"),a=i("d9bd"),o=i("2b0e");const r=o["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(a["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(a["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(n["a"])(r,Object(s["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},e36c:function(t,e,i){t.exports=i.p+"img/placeholder.dd4f8628.webp"},ee2f:function(t,e,i){"use strict";i("8e05")},f85e:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".text-opportunities[data-v-6753edaa]{width:70%}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-414ae6b5.e0d72c53.js.map