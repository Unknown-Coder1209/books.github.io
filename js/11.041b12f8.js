(self["webpackChunklib_1"]=self["webpackChunklib_1"]||[]).push([[11],{9011:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return U}});i(541),i(7658),i(5449);var s=i(961),o=i(6878),n=i(6669),a=i(1444),r=i(144),l=r.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=i(4263),d=i(7678),u=i(5352),h=(0,d.Z)(o.Z,(0,c.d)(["left","bottom"]),n.Z,a.Z,l).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,u.kb)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),s=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s},genBadgeContent(){if(this.dot)return;const t=(0,u.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(s.Z,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],i=[(0,u.z9)(this)],{"aria-atomic":s,"aria-label":o,"aria-live":n,role:a,title:r,...l}=this.$attrs;return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},i)}}),p=i(4731),v=i(4145),m=i(4886),f=i(266),g=i(5819),b=i(5093),k=i(7394),x=i(8224),w=i(2305),_=i(5088),y=i(3834),C=i(954),Z=i(6304),F=i(8926),O=i(5187),B=i(9500),$=i(5086),A=i(4611),S=i(3331),M=i(1301),L=i(1713),I=i(5661),N=i(6839),z=i(5942),T=function(){var t=this,e=t._self._c;return e(g.Z,[e(L.Z,[e(f.Z,{attrs:{cols:"12"}},[e(y.Z,[e("p",{staticClass:"text-h4 font-weigth-bold mb-1"},[t._v("Новые книги")]),e("div",{staticClass:"carousel-books pb-4"},t._l(t.books,(function(i,o){return e(f.Z,{key:i,staticClass:"mt-3",attrs:{cols:"8",sm:"6",md:"5",lg:"4"}},[e(_.Z,{attrs:{i:o},scopedSlots:t._u([{key:"default",fn:function({active:n,toggle:a}){return[e(h,{staticClass:"h-full w-full",attrs:{overlap:"",content:"New",color:"error"}},[e(x.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:n}){return[e(v.Z,{staticClass:"h-full transition-all-medium-important",class:{"trasnform-scale-ligth":n},attrs:{hover:""}},[e(S.Z,{attrs:{absolute:"",opacity:".8",color:"info",value:n}},[e(g.Z,[e(L.Z,{staticClass:"ma-0"},[e(f.Z,{staticClass:"py-0",attrs:{cols:"12"}},[e("p",{staticClass:"text-center text-non-space text-caption text-sm-body-1 mb-0",domProps:{textContent:t._s(i.title)}})]),e(f.Z,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[e(p.Z,{attrs:{to:`/books/${o}`,"x-small":t.$vuetify.breakpoint.xsOnly,block:"",elevation:"1"}},[t._v(" Посмотреть ")])],1)],1),e(b.Z,{attrs:{color:"secondary"}}),e(L.Z,{staticClass:"ma-0"},[e(f.Z,{staticClass:"d-flex justify-space-between justify-sm-space-around",attrs:{cols:"12"}},[e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:a}){return[e(p.Z,t._g(t._b({staticClass:"v-btn--tips",attrs:{icon:"",color:i.onLike?"error":"primary"},on:{click:function(e){i.onLike?t.removeOfLikeBooks(i):t.addToLikeBooks(o)}}},"v-btn",a,!1),n),[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:!i.onLike,expression:"!item.onLike"}],staticClass:"position-absolute-important"},[t._v(" mdi-heart-plus ")]),e(k.cu,[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:i.onLike,expression:"item.onLike"}],staticClass:"position-absolute-important"},[t._v(" mdi-cards-heart ")])],1)],1)]}}],null,!0)},[e("span",[t._v(t._s(i.onLike?"Убрать из любимого":"Добавить в любимое")+" ")])]),e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:a}){return[e(p.Z,t._g(t._b({staticClass:"v-btn--tips",attrs:{icon:"",color:i.onCart?"primary":""},on:{click:function(e){i.onCart?t.removeOfCartBooks(i):t.addToCartBooks(o)}}},"v-btn",a,!1),n),[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:!i.onCart,expression:"!item.onCart"}],staticClass:"position-absolute-important"},[t._v(" mdi-cart-outline ")]),e(k.cu,[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:i.onCart,expression:"item.onCart"}],staticClass:"position-absolute-important"},[t._v(" mdi-cart ")])],1)],1)]}}],null,!0)},[e("span",[t._v(t._s(i.onCart?"Убрать из корзины":"Добавить в корзину"))])]),e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:n}){return[e(p.Z,t._g(t._b({staticClass:"v-btn-tips",attrs:{icon:"",to:`/books/${o}#reviews`,color:"primary"}},"v-btn",n,!1),i),[e(s.Z,[t._v("mdi-comment")])],1)]}}],null,!0)},[e("span",[t._v("Посмотреть отзывы")])])],1)],1)],1)],1),e(g.Z,{staticClass:"pa-0"},[e(L.Z,{staticClass:"ma-0",attrs:{dense:t.$vuetify.breakpoint.smAndUp}},[e(f.Z,{attrs:{cols:"12"}},[e(w.Z,{staticClass:"mx-auto",attrs:{contain:"",src:i.cover,width:t.resizerForImage,height:t.resizerForImage}})],1),e(f.Z,{staticClass:"d-flex flex-column flex-sm-row align-sm-baseline",attrs:{cols:"12"}},[e("p",{staticClass:"d-sm-inline-block text-caption text-sm-subtitle-1 font-weight-bold mb-0 pa-sm-4 order-2 order-sm-1",domProps:{textContent:t._s(i.title)}}),e(m.Qq,{staticClass:"text-caption text-sm-subtitle-1 text-end pa-0 pa-sm-4 d-sm-inline-block font-italic flex-grow-1 order-1 order-sm-2",domProps:{textContent:t._s(`- ${i.author}`)}})],1)],1),e(b.Z),e(L.Z,{staticClass:"ma-1"},[e(f.Z,{attrs:{cols:"6"}},t._l(t.books[o].genre,(function(i){return e(s.Z,{key:i,domProps:{textContent:t._s(`mdi-${i.icon}`)}})})),1),e(f.Z,{attrs:{cols:"6"}},[e(p.Z,{attrs:{small:"",block:"",color:"success",to:`/books/${o}`}},[t._v(" "+t._s(i.price)+" "),e(s.Z,{attrs:{small:""}},[t._v("mdi-currency-rub")])],1)],1)],1)],1)],1)]}}],null,!0)})],1)]}}],null,!0)})],1)})),1)])],1)],1),e(L.Z,{attrs:{"justify-sm":"center"}},[e(f.Z,{attrs:{cols:"12"}},[e(v.Z,{directives:[{def:z.Z,name:"click-outside",rawName:"v-click-outside",value:t.filterOptionsClickOutside,expression:"filterOptionsClickOutside"}],attrs:{hover:""}},[e("div",{staticClass:"d-flex w-full"},[e(p.Z,{staticClass:"align-self-center",attrs:{icon:""},on:{click:function(e){t.isOpenFilterOptions=!t.isOpenFilterOptions,t.isFilterOptionClickOutside=!1}}},[e(s.Z,{staticClass:"mx-auto"},[t._v(" mdi-chevron-"+t._s(t.isOpenFilterOptions?"up":"down")+" ")])],1),e(m.Qq,{staticClass:"text-sm-subtitle-2 py-0 pa-sm-4 flex-grow-1 align-self-center text-non-space",class:{"text-center":null!==t.onFilterOptionsModel},on:{click:function(e){t.isOpenFilterOptions=!t.isOpenFilterOptions}}},[t._v(" "+t._s(null===t.onFilterOptionsModel?"Выбрать опции для фильтра":t.onFilterOptions[t.onFilterOptionsModel].text)+" ")]),e(k.T0,{attrs:{appear:""}},[e(p.Z,{directives:[{name:"show",rawName:"v-show",value:t.onFilterOptionsModel>=0&&null!==t.onFilterOptionsModel,expression:"onFilterOptionsModel >= 0 && onFilterOptionsModel !== null"}],staticClass:"align-self-center",attrs:{icon:""},on:{click:function(e){t.onFilterOptionsModel=null}}},[e(s.Z,{attrs:{color:"error"}},[t._v("mdi-close")])],1)],1)],1),e(k.Fx,[e(m.h7,{directives:[{name:"show",rawName:"v-show",value:t.isOpenFilterOptions,expression:"isOpenFilterOptions"}],staticClass:"pa-0"},[e(C.Z,{staticClass:"flex-grow-1 pt-0"},[e($.Z,{attrs:{color:"info"},model:{value:t.onFilterOptionsModel,callback:function(e){t.onFilterOptionsModel=e},expression:"onFilterOptionsModel"}},[t._l(t.onFilterOptions,(function(i,o){return[e(b.Z,{key:o}),e(F.Z,{key:i.text,on:{click:function(e){return t.changeFilterBy(i)}}},[e(A.Z,[e(s.Z,{domProps:{textContent:t._s(`mdi-${i.icon}`)}})],1),e(B.km,[e(B.V9,{domProps:{textContent:t._s(i.text)}})],1),void 0!==i.actionsFilter?e(O.Z,{key:i.actionsFilter,staticClass:"ma-0 align-center justify-center",attrs:{i:o}},[e(k.cu,[e(p.Z,{directives:[{name:"show",rawName:"v-show",value:null===i.actionsFilter.high&&null===i.actionsFilter.low,expression:"item.actionsFilter.high === null && item.actionsFilter.low === null"}],staticClass:"position-absolute",attrs:{icon:""}},[e(s.Z,[t._v(" mdi-minus ")])],1)],1),e(k.cu,[e(p.Z,{directives:[{name:"show",rawName:"v-show",value:!0===i.actionsFilter.low,expression:"item.actionsFilter.low === true"}],staticClass:"position-absolute",attrs:{icon:""}},[e(s.Z,[t._v("mdi-arrow-down-thin")])],1)],1),e(k.cu,[e(p.Z,{directives:[{name:"show",rawName:"v-show",value:!0===i.actionsFilter.high,expression:"item.actionsFilter.high === true"}],staticClass:"position-absolute",attrs:{icon:""}},[e(s.Z,[t._v(" mdi-arrow-up-thin ")])],1)],1)],1):t._e()],1)]})),e(b.Z)],2),e(Z.Z,{attrs:{"prepend-icon":"mdi-account-edit"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(B.V9,[t._v("Авторы")])]},proxy:!0}])},[e($.Z,{attrs:{color:"info"}},[t._l(t.allAutors,(function(i,o){return[e(b.Z,{key:o}),e(F.Z,{key:i},[e(A.Z,[e(s.Z,{attrs:{left:""}},[t._v("mdi-pencil")])],1),e(B.km,[e(B.V9,{domProps:{textContent:t._s(i)}})],1)],1)]}))],2)],1)],1)],1)],1)],1)],1)],1),e(y.Z,{staticClass:"row mw-null justify-sm-center"},t._l(t.choseFilter,(function(i,o){return e(_.Z,{key:i,scopedSlots:t._u([{key:"default",fn:function({toggle:n,active:a}){return[e(f.Z,{attrs:{cols:"12",sm:"9",md:"8",lg:"7"}},[e(v.Z,{staticClass:"d-flex flex-wrap justify-space-between",attrs:{hover:""}},[e(L.Z,{attrs:{dense:"",justify:"center"}},[e(f.Z,{staticClass:"mt-2",attrs:{cols:"6",sm:a?2:4}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp&&!a,expression:"$vuetify.breakpoint.smAndUp && !active"}]},[e(h,{directives:[{name:"show",rawName:"v-show",value:null!==t.badgeContentAfterFilter&&t.onFilterOptionsModel<2,expression:"badgeContentAfterFilter !== null && onFilterOptionsModel < 2"}],attrs:{overlap:"",inline:t.$vuetify.breakpoint.xsOnly,content:t.badgeContentAfterFilter,transition:"v-slide-x-transition"}},[e(w.Z,{staticClass:"mx-auto",attrs:{contain:"",height:"100%",width:t.resizerForImage,"lazy-src":i.cover,src:i.cover}})],1),e(h,{directives:[{name:"show",rawName:"v-show",value:null!==t.badgeContentAfterFilter&&t.onFilterOptionsModel>=2&&0===o,expression:"badgeContentAfterFilter !== null && onFilterOptionsModel >= 2 && i === 0"}],attrs:{overlay:"",content:t.badgeContentAfterFilter,transition:"v-slide-x-transition"}},[e(w.Z,{staticClass:"mx-auto",attrs:{contain:"",height:"100%",width:t.resizerForImage,"lazy-src":i.cover,src:i.cover}})],1),e(w.Z,{directives:[{name:"show",rawName:"v-show",value:null===t.badgeContentAfterFilter||null!==t.badgeContentAfterFilter&&t.onFilterOptionsModel>=1&&o>0,expression:"badgeContentAfterFilter === null || badgeContentAfterFilter !== null && onFilterOptionsModel >= 1 && i > 0"}],staticClass:"mx-auto",attrs:{contain:"",height:"100%",width:t.resizerForImage,"lazy-src":i.cover,src:i.cover}})],1),e(w.Z,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp&&a,expression:"$vuetify.breakpoint.smAndUp && active"}],staticClass:"mx-auto",attrs:{contain:"",height:"100%",width:t.resizerForImage,"lazy-src":i.cover,src:i.cover}}),e(w.Z,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}],staticClass:"mx-auto",attrs:{contain:"",height:"100%",width:t.resizerForImage,"lazy-src":i.cover,src:i.cover}})],1),e(f.Z,{staticClass:"d-inline-flex flex-column",attrs:{cols:"6",sm:a?9:7}},[e("div",{staticClass:"pt-sm-5 pb-sm-0"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}]},[e(m.ZB,{directives:[{name:"show",rawName:"v-show",value:null!==t.badgeContentAfterFilter&&t.onFilterOptionsModel>=2&&0===o,expression:"badgeContentAfterFilter !== null && onFilterOptionsModel >= 2 && i === 0"}],staticClass:"text-center rounded info py-0 px-2 white--text",domProps:{textContent:t._s(t.badgeContentAfterFilter)}}),e(m.ZB,{directives:[{name:"show",rawName:"v-show",value:null!==t.badgeContentAfterFilter&&t.onFilterOptionsModel<2,expression:"badgeContentAfterFilter !== null && onFilterOptionsModel < 2"}],staticClass:"text-center rounded info py-0 px-2 white--text",domProps:{textContent:t._s(t.badgeContentAfterFilter)}})],1),e(m.EB,{staticClass:"py-0 d-contents",domProps:{textContent:t._s(i.title)}}),e(m.Qq,{staticClass:"justify-end font-italic my-sm-1 d-inline-flex w-full",domProps:{textContent:t._s(`- ${i.author}`)}})],1),e("div",{staticClass:"d-none d-sm-flex pa-sm-1 flex-sm-grow-1 flex-sm-column align-md-center",class:{"pa-sm-1 pa-md-2 ":a}},[e(p.Z,{staticClass:"w-full",attrs:{small:"",outlined:""},on:{click:n}},[t._v(" "+t._s(a?"Свернуть":"Посмотреть")+" описание ")]),e(k.Fx,[e(I.Z,{directives:[{name:"show",rawName:"v-show",value:a,expression:"active"}],attrs:{rounded:"",elevation:"1"}},[e(m.EB,[t._v("Описание")]),e(b.Z),e(m.ZB,{domProps:{textContent:t._s(i.description)}}),e(b.Z),e(m.h7,[e("div",{staticClass:"text-subtitle-2"},[t._v(" Жанры: ")]),e("div",{staticClass:"d-flex flex-sm-grow-1 justify-end"},t._l(t.books[o].genre,(function(i){return e(N.Z,{key:i,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:n}){return[e(s.Z,t._g(t._b({},"v-icon",n,!1),o),[t._v(" mdi-"+t._s(i.icon)+" ")])]}}],null,!0)},[e("span",[t._v(t._s(i.text))])])})),1)])],1)],1)],1),e(L.Z,{staticClass:"pl-sm-1 pl-md-2 pr-md-1",attrs:{dense:"","align-sm":"end"}},[e(f.Z,{staticClass:"d-flex justify-end justify-sm-start pr-2 pr-sm-0",attrs:{cols:"12",sm:"4",md:"3"}},[e(p.Z,{attrs:{small:"",block:t.$vuetify.breakpoint.smAndUp,color:"success"}},[t._v(" "+t._s(i.price)+" "),e(s.Z,{attrs:{small:""}},[t._v(" mdi-currency-rub ")])],1)],1),e(f.Z,{staticClass:"pr-2 pr-sm-2",attrs:{cols:"12",sm:"8",md:"9"}},[e(p.Z,{attrs:{block:"",small:"",color:"info",to:`/books/${o}`}},[t._v(" Посмотреть ")])],1)],1)],1),e(f.Z,{staticClass:"px-sm-3",attrs:{cols:"12"}},[e("div",{staticClass:"w-full"},[e(b.Z),e("span",{staticClass:"d-inline-flex w-full"},[e(p.Z,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}],attrs:{icon:""},on:{click:n}},[e(s.Z,[t._v(" mdi-chevron-"+t._s(a?"up":"down")+" ")])],1),e(M.Z,{staticClass:"d-inline-flex",attrs:{dense:"",readonly:"","half-increments":"",size:"19",value:i.rating}}),e("div",{staticClass:"d-inline-flex flex-grow-1 justify-end"},[e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:a}){return[e(p.Z,t._g(t._b({staticClass:"v-btn--tips",attrs:{icon:"",color:i.onLike?"error":"primary"},on:{click:function(e){i.onLike?t.removeOfLikeBooks(i):t.addToLikeBooks(o)}}},"v-btn",a,!1),n),[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:!i.onLike,expression:"!item.onLike"}],staticClass:"position-absolute-important"},[t._v(" mdi-heart-plus ")]),e(k.cu,[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:i.onLike,expression:"item.onLike"}],staticClass:"postion-absolute-important"},[t._v(" mdi-cards-heart ")])],1)],1)]}}],null,!0)},[e("span",[t._v(t._s(i.onLike?"Убрать из любимого":"Добавить в любимое"))])]),e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:a}){return[e(p.Z,t._g(t._b({staticClass:"v-btn--tips",attrs:{icon:"",color:i.onCart?"primary":""},on:{click:function(e){i.onCart?t.removeOfCartBooks(i):t.addToCartBooks(o)}}},"v-btn",a,!1),n),[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:!i.onCart,expression:"!item.onCart"}],staticClass:"position-absolute-important"},[t._v(" mdi-cart-outline ")]),e(k.cu,[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:i.onCart,expression:"item.onCart"}],staticClass:"postion-absolute-important"},[t._v(" mdi-cart ")])],1)],1)]}}],null,!0)},[e("span",[t._v(t._s(i.onCart?"Убрать из корзины":"Добавить в корзину"))])]),e(N.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:n}){return[e(p.Z,t._g(t._b({staticClass:"v-btn--tips",attrs:{icon:"",to:`/books/${o}#reviews`,color:"primary"}},"v-btn",n,!1),i),[e(s.Z,[t._v("mdi-comment")])],1)]}}],null,!0)},[e("span",[t._v("Посмотреть отзывы ")])])],1)],1),e(b.Z,{directives:[{name:"show",rawName:"v-show",value:a,expression:"active"}]}),e(k.Fx,[e("div",{directives:[{name:"show",rawName:"v-show",value:a&&t.$vuetify.breakpoint.xsOnly,expression:"active && $vuetify.breakpoint.xsOnly"}]},[e(m.EB,[t._v("Описание")]),e(b.Z),e(m.ZB,[t._v(t._s(i.description))]),e(b.Z),e(m.h7,[e("div",{staticClass:"text-subtitle-2"},[t._v(" Жанры: ")]),e("div",{staticClass:"d-flex flex-grow-1 justify-end"},t._l(t.books[o].genre,(function(i){return e(N.Z,{key:i,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:n}){return[e(s.Z,t._g(t._b({},"v-icon",n,!1),o),[t._v(" mdi-"+t._s(i.icon)+" ")])]}}],null,!0)},[e("span",[t._v(t._s(i.text))])])})),1)])],1)])],1)])],1)],1)],1)]}}],null,!0)})})),1)],1)},H=[],P=i(4908),E=i.n(P),j=i(629),D=(i(1120),{name:"Lib",data:()=>({isOpenFilterOptions:!1,onFilterOptionsModel:null,onFilterOptionsAuthors:null,onFilterCopies:null,onFilterOptions:[{text:"Физическая копия",options:"physicalCopy",icon:"book-open-blank-variant"},{text:"Электронная копия",options:"onlineCopy",icon:"package-variant-closed"},{text:"По цене",icon:"currency-rub",actionsFilter:{high:null,low:null}},{text:"По рейтингу",icon:"star",actionsFilter:{high:null,low:null}}],genreUserSelect:[]}),methods:{...(0,j.OI)({addToLikeBooks:"books/likeABook",addToCartBooks:"books/cartABook",removeOfLikeBooks:"books/deleteOfLikedBooks",removeOfCartBooks:"books/deleteOfCartedBooks"}),filterOptionsClickOutside(){return this.isOpenFilterOption=!1},onFilterOptionsSwitch(){return this.onFilterOptionModelChange=!0},changeFilterBy(t,e){return t.actionsFilter.low&&!t.actionsFilter.high?(t.actionsFilter.high=null,t.actionsFilter.low=null):t.actionsFilter.high&&!t.actionsFilter.low?(t.actionsFilter.low=!0,t.actionsFilter.high=!1):(t.actionsFilter.high=!0,t.actionsFilter.low=!1)}},computed:{...(0,j.Se)({likeBooks:"books/getLikedBooks",cartBooks:"cart/cartBooksAfterUniq"}),...(0,j.rn)({books:t=>t.books.books.item,booksGenre:"books/allGenres",booksTip(t){t.books.tips;let e=["",this.addToLikeBooks,this.addToCartBooks];t.books.tips.forEach(((t,i)=>{t.action=e[i]}));return t.books.tips},allAutors(t){const e=t.books.books.item;let i=[];return e.forEach((t=>{i.push(t.author)})),i=E()(i),i}}),filterForBooksCopies(){const t=this.books;let e=[],i=[],s=[];switch(t.forEach((t=>{t.copy.physical?i.push(t):t.copy.online?e.push(t):s.push(t)})),this.onFilterOptionsModel){case 0:return i;case 1:return e;default:return[]}},filterForBookPrice(){const t=this.books;return this.onFilterOptions[2].actionsFilter.low&&!this.onFilterOptions[2].actionsFilter.high?t.sort(((t,e)=>t.price-e.price)):this.onFilterOptions[2].actionsFilter.high&&!this.onFilterOptions[2].actionsFilter.low?t.sort(((t,e)=>e.price-t.price)):[]},filterForBookRating(){const t=this.books;return this.onFilterOptions[3].actionsFilter.low&&!this.onFilterOptions[3].actionsFilter.high?t.sort(((t,e)=>t.rating-e.rating)):this.onFilterOptions[3].actionsFilter.high&&!this.onFilterOptions[3].actionsFilter.low?t.sort(((t,e)=>e.rating-t.rating)):[]},choseFilter(){let t=[];switch(this.onFilterOptionsModel){case 0:t=this.filterForBooksCopies;break;case 1:t=this.filterForBooksCopies;break;case 2:if(this.onFilterOptions[2].actionsFilter.low||this.onFilterOptions[2].actionsFilter.high){t=this.filterForBookPrice;break}t=this.books;break;case 3:if(this.onFilterOptions[3].actionsFilter.low||this.onFilterOptions[3].actionsFilter.high){t=this.filterForBookRating;break}t=this.books;break;default:t=this.books;break}return t},badgeContentAfterFilter(){let t=null;switch(this.onFilterOptionsModel){case 0:t="Только физ. копия";break;case 1:t="Только онлайн копия";break;case 2:if(this.onFilterOptions[2].actionsFilter.low){t="Самая дешевая";break}if(this.onFilterOptions[2].actionsFilter.high){t="Самая дорогая";break}t=null;break;case 3:if(this.onFilterOptions[3].actionsFilter.low){t="Наименьший рейтинг";break}if(this.onFilterOptions[3].actionsFilter.high){t="Выбор пользователей";break}t=null;break;default:t=null;break}return t},likeBooksHaveBooks(){},resizerForImage(){let t=null;switch(this.$vuetify.breakpoint.name){case"xs":t=95;break;case"sm":t=140;break;case"md":t=150;break;case"lg":t=160;break}return t}}}),V=D,X=(i(8507),i(1001)),R=(0,X.Z)(V,T,H,!1,null,"72f75132",null),U=R.exports},5900:function(t,e,i){"use strict";i.r(e);var s=i(8081),o=i.n(s),n=i(3645),a=i.n(n),r=a()(o());r.push([t.id,'.active-item-options[data-v-72f75132]{display:inline-block;position:relative!important;transition:all 2s}.active-item-options[data-v-72f75132]:after{-webkit-animation:selected-72f75132 .5s ease-in-out;animation:selected-72f75132 .5s ease-in-out;content:"";position:absolute;bottom:0;left:0;width:100%;height:.1rem;background-color:currentColor}.animate-selected[data-v-72f75132]{cursor:pointer!important;display:inline-block;position:relative!important;transition:all 2s}.animate-selected[data-v-72f75132]:after{-webkit-animation:selected-72f75132 .5s ease-in-out;animation:selected-72f75132 .5s ease-in-out;content:"";position:absolute;bottom:0;left:0;width:100%;height:.1rem;background-color:#80deea}@-webkit-keyframes selected-72f75132{0%{width:0}to{width:100%}}@keyframes selected-72f75132{0%{width:0}to{width:100%}}.carousel-books[data-v-72f75132]{display:flex;flex-direction:row;overflow-x:scroll;overflow-y:hidden;gap:2.2rem;padding:.2rem}',""]),e["default"]=r},5935:function(t,e,i){"use strict";i.r(e);var s=i(8081),o=i.n(s),n=i(3645),a=i.n(n),r=a()(o());r.push([t.id,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),e["default"]=r},3957:function(t,e,i){"use strict";i.r(e);var s=i(8081),o=i.n(s),n=i(3645),a=i.n(n),r=a()(o());r.push([t.id,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e["default"]=r},7903:function(t,e,i){"use strict";i.r(e);var s=i(8081),o=i.n(s),n=i(3645),a=i.n(n),r=a()(o());r.push([t.id,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),e["default"]=r},4908:function(t,e,i){var s=i(5652);function o(t){return t&&t.length?s(t):[]}t.exports=o},8224:function(t,e,i){"use strict";var s=i(3016),o=i(1444),n=i(7678),a=i(4101);e["Z"]=(0,n.Z)(s.Z,o.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,a.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,a.Kd)("v-hover should only contain a single element",this),t)}})},5088:function(t,e,i){"use strict";var s=i(3037),o=i(7678),n=i(4101),a=i(144);const r=a.ZP.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return(0,n.Kd)("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):((0,n.Kd)("v-item should only contain a single element",this),t)}});e["Z"]=(0,o.Z)(r,(0,s.d)("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},1301:function(t,e,i){"use strict";i(4351);var s=i(2240),o=i(6878),n=i(3016),a=i(4338),r=i(7550),l=i(6669),c=i(5352),d=i(7678);e["Z"]=(0,d.Z)(o.Z,n.Z,r.Z,a.Z,l.Z).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,large:e,light:i,medium:s,small:o,size:n,xLarge:a,xSmall:r}=this.$props;return{dark:t,large:e,light:i,medium:s,size:n,small:o,xLarge:a,xSmall:r}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const i=this.genHoverIndex(e,t);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let i=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",(()=>{this.hoverIndex=this.genHoverIndex(t,e)}))},onMouseLeave(){this.runDelay("close",(()=>this.hoverIndex=-1))},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const i={click:e.click};return this.hover&&(i.mouseenter=e=>this.onMouseEnter(e,t),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(s.Z,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(e)])}},render(t){const e=(0,c.MT)(Number(this.length)).map((t=>this.genItem(t)));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}})},6839:function(t,e,i){"use strict";i(6519);var s=i(1452),o=i(6878),n=i(3016),a=i(908),r=i(5943),l=i(5352),c=i(4101),d=i(7678);e["Z"]=(0,d.Z)(o.Z,n.Z,a.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||i?o=s+t.width/2-e.width/2:(this.left||this.right)&&(o=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,l.kb)(this.maxWidth),minWidth:(0,l.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,l.sp)(this,"activator",!0)&&(0,c.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},7550:function(t,e,i){"use strict";i(7658);var s=i(4168),o=i(144);e["Z"]=o.ZP.extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},8507:function(t,e,i){var s=i(5900);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var o=i(4402).Z;o("43085ea4",s,!0,{sourceMap:!1,shadowMode:!1})},5449:function(t,e,i){var s=i(5935);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var o=i(4402).Z;o("f1ee6b18",s,!0,{sourceMap:!1,shadowMode:!1})},4351:function(t,e,i){var s=i(3957);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var o=i(4402).Z;o("0b9c6de6",s,!0,{sourceMap:!1,shadowMode:!1})},6519:function(t,e,i){var s=i(7903);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var o=i(4402).Z;o("70ea7fd4",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=11.041b12f8.js.map