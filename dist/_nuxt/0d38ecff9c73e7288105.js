(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(t,e,n){var content=n(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("5b3bbc70",content,!0,{sourceMap:!1})},147:function(t,e,n){"use strict";var r=n(146);n.n(r).a},148:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,"#__nuxt header.left .limit{max-width:100%}#__nuxt header.left .limit .logo{left:120px}",""])},149:function(t,e,n){var map={"./akbankin-ikonik-kalp-atisi.md":[155,7],"./google-ctf-macerasi-1.md":[156,8],"./google-ctf-macerasi-2.md":[157,9],"./ilim-ile-bilim-arasindaki-fark.md":[158,10],"./kimim.md":[159,11],"./kullanici-deneyiminin-karanlik-tarafi.md":[160,12],"./nerelere-geldik-hanim.md":[161,13],"./robotlar-icin-matematik-temelleri-1.md":[162,14],"./robotlar-icin-matematik-temelleri-2.md":[163,15],"./turkiyedeki-internet-rezilligi.md":[164,16]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=149,t.exports=r},150:function(t,e,n){"use strict";var r={name:"Header",computed:{altRoutes:function(){return"/"===this.$route.path||"/blog"===this.$route.path},darkHeaderRoutes:function(){return"/"===this.$route.path}}},o=(n(147),n(13)),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("header",{class:{left:this.darkHeaderRoutes}},[e("div",{staticClass:"limit"},[e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo-xnb.svg",alt:"XNB"}})])],1)])},[],!1,null,null,null);e.a=component.exports},151:function(t,e,n){"use strict";e.a=["akbankin-ikonik-kalp-atisi","ilim-ile-bilim-arasindaki-fark","kimim","nerelere-geldik-hanim","kullanici-deneyiminin-karanlik-tarafi","google-ctf-macerasi-2","google-ctf-macerasi-1","turkiyedeki-internet-rezilligi"]},152:function(t,e,n){var content=n(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("677a8505",content,!0,{sourceMap:!1})},165:function(t,e,n){"use strict";var r=n(152);n.n(r).a},166:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,".page-enter[data-v-44587b3c]{opacity:0;-webkit-transform:translateX(50px);transform:translateX(50px)}.page-leave-active[data-v-44587b3c]{opacity:0;-webkit-transform:translateX(-50px);transform:translateX(-50px)}main.totem a[data-v-44587b3c]{width:100%}",""])},179:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(48),n(25),n(62),n(47),n(5)),l=n(151),c=["robotlar-icin-matematik-temelleri-1","robotlar-icin-matematik-temelleri-2"],m={components:{Header:n(150).a},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var m,d,f,k;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return(d=Object(o.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(149)("./".concat(e,".md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},m=function(t){return d.apply(this,arguments)},e.store,t.next=5,Promise.all(l.a.map(function(t){return m(t)})).then(function(t){return{blogs:t}});case 5:return f=t.sent,t.next=8,Promise.all(c.map(function(t){return m(t)})).then(function(t){return{lectures:t}});case 8:return k=t.sent,t.abrupt("return",Object(r.a)({},f,k));case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"Yazılar - XNB",htmlAttrs:{lang:"tr"},meta:[{name:"author",content:"Ata Gülalan"},{name:"description",property:"og:description",content:this.desc,hid:"description"},{property:"og:title",content:this.title},{property:"og:image",content:this.image},{name:"twitter:description",content:this.desc},{name:"twitter:image",content:this.image}]}},computed:{url:function(){return"https://xava.me"},image:function(){return"".concat("https://xava.me","/images/og-banner.png")},title:function(){return"Ceci n'est pas un blog"},desc:function(){return"Delirmeye ramak kalmışken."}}},d=(n(165),n(13)),component=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("Header"),t._v(" "),n("main",{staticClass:"totem"},[n("h1",[t._v("Yazılar")]),t._v(" "),n("p",[t._v("Efendim burada, geçenlerde yazdığım yazıları bulacaksınız. En üsttekiler, en son yazılanlardır. Kategoriler yazıların solunda belirtilmiştir.")]),t._v(" "),n("div",{staticClass:"yazilar"},[n("p",t._l(t.blogs,function(e){return n("nuxt-link",{key:e.name,staticClass:"internal",attrs:{to:"/blog/"+e.name}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),1),t._v(" "),n("h2",{attrs:{id:"dersler"}},[t._v("Dersler")]),t._v(" "),n("p",t._l(t.lectures,function(e){return n("nuxt-link",{key:e.name,staticClass:"internal",attrs:{to:"/blog/"+e.name}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),1)])])],1)},[],!1,null,"44587b3c",null);e.default=component.exports}}]);