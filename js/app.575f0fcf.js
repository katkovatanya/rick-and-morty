(function(){"use strict";var e={5026:function(e,t,a){var n=a(3751),r=a(375);const o={class:"search"};function s(e,t,a,n,s,i){const c=(0,r.g2)("app-banner"),d=(0,r.g2)("my-input"),l=(0,r.g2)("my-button"),u=(0,r.g2)("my-select"),p=(0,r.g2)("card-list"),f=(0,r.g2)("my-loader"),v=(0,r.g2)("app-pagination");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(c),(0,r.Lk)("div",o,[(0,r.bF)(d,{modelValue:s.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>s.searchQuery=e),placeholder:"Поиск..."},null,8,["modelValue"]),(0,r.bF)(l,{onClick:i.fetchCards},{default:(0,r.k6)((()=>[(0,r.eW)("Искать")])),_:1},8,["onClick"]),(0,r.bF)(u,{modelValue:s.selectedSort,"onUpdate:modelValue":t[1]||(t[1]=e=>s.selectedSort=e),options:s.sortOptions},null,8,["modelValue","options"])]),s.isCardsLoading?((0,r.uX)(),(0,r.Wv)(f,{key:1})):((0,r.uX)(),(0,r.Wv)(p,{key:0,cards:i.sortedCards},null,8,["cards"])),(0,r.bF)(v,{page:s.page,totalPages:s.totalPages,onChangePage:i.changePage},null,8,["page","totalPages","onChangePage"])])}function i(e,t,a,o,s,i){const c=(0,r.g2)("card-item");return(0,r.uX)(),(0,r.Wv)(n.F,{tag:"div",class:"card-list",name:"list"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.cards,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.id,card:e},null,8,["card"])))),128))])),_:1})}var c=a(33);const d={class:"card"},l=["src","alt"],u={class:"card__text"},p={class:"card__title"},f={class:"card__status"},v={class:"card__subtitle"};function g(e,t,a,o,s,i){const g=(0,r.g2)("card-info");return(0,r.uX)(),(0,r.Wv)(n.eB,{name:"card",appear:""},{default:(0,r.k6)((()=>[(0,r.Lk)("div",d,[(0,r.Lk)("img",{src:a.card.image,alt:a.card.name},null,8,l),(0,r.Lk)("div",u,[(0,r.Lk)("div",null,[(0,r.Lk)("h2",p,(0,c.v_)(a.card.name),1),(0,r.Lk)("div",f,[(0,r.Lk)("div",{class:(0,c.C4)(["status__icon",{status__icon__alive:"Alive"===a.card.status,status__icon__dead:"Dead"===a.card.status}])},null,2),(0,r.Lk)("div",v,(0,c.v_)(a.card.status)+" - "+(0,c.v_)(a.card.species),1)])]),(0,r.bF)(g,{isLocation:!0,card:a.card},null,8,["card"]),(0,r.bF)(g,{isLocation:!1,card:a.card},null,8,["card"])])])])),_:1})}const m=e=>((0,r.Qi)("data-v-c244f5f4"),e=e(),(0,r.jt)(),e),h={key:0,class:"info"},y=m((()=>(0,r.Lk)("div",{class:"info-title"},"Last known location:",-1))),b={class:"info-body"},_={key:1,class:"info"},C=m((()=>(0,r.Lk)("div",{class:"info-title"},"First seen in:",-1))),k={class:"info-body"};function L(e,t,a,n,o,s){return a.isLocation?((0,r.uX)(),(0,r.CE)("div",h,[y,(0,r.Lk)("div",b,(0,c.v_)(a.card.location.name),1)])):((0,r.uX)(),(0,r.CE)("div",_,[C,(0,r.Lk)("div",k,(0,c.v_)(o.episodeName),1)]))}var P=a(4335),O={props:{card:{type:Object,required:!0},isLocation:{type:Boolean,required:!0}},data(){return{episodeName:""}},created(){this.fetchEpisodeName()},methods:{fetchEpisodeName(){P.A.get(this.card.episode[0]).then((e=>{this.episodeName=e.data.name})).catch((e=>{console.error(e)}))}}},E=a(4621);const X=(0,E.A)(O,[["render",L],["__scopeId","data-v-c244f5f4"]]);var A=X,I={components:{CardInfo:A},props:{card:{type:Object,required:!0}}};const F=(0,E.A)(I,[["render",g],["__scopeId","data-v-e34c28da"]]);var w=F,S={components:{CardItem:w},props:{cards:{type:Array,required:!0}}};const V=(0,E.A)(S,[["render",i],["__scopeId","data-v-7b6bc184"]]);var j=V;const x={class:"title"};function M(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("h1",x,"Rick and Morty")}var N={};const W=(0,E.A)(N,[["render",M],["__scopeId","data-v-06f519f9"]]);var Q=W;const q={class:"page__wrapper"},T=["onClick"];function $(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("div",q,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.visiblePages,(e=>((0,r.uX)(),(0,r.CE)("div",{class:(0,c.C4)({page:"number"===typeof e,"current-page":a.page===e}),key:e,onClick:t=>"number"===typeof e?s.changePage(e):null},(0,c.v_)(e),11,T)))),128))])}a(4114);var B={props:["page","totalPages"],methods:{changePage(e){this.$emit("change-page",e)}},computed:{visiblePages(){const e=3,t=3,a=2,n="...";let r=[];for(let o=1;o<=this.totalPages;o++)o<=e||o>this.totalPages-e||o>=Math.floor(this.totalPages/2)&&o<Math.floor(this.totalPages/2)+t||o>=this.page-a&&o<=this.page+a?r.push(o):o!==e+1&&o!==Math.floor(this.totalPages/2)+t&&o!==this.page-a-1&&o!==this.page+a+1||r.push(n);return r=r.filter(((e,t,a)=>"number"===typeof e||"string"===typeof e&&"number"===typeof a[t+1])),r}}};const K=(0,E.A)(B,[["render",$],["__scopeId","data-v-2bb7ef54"]]);var R=K,U={name:"App",components:{CardList:j,AppBanner:Q,AppPagination:R},data(){return{cards:[],isCardsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"name",name:"По имени"},{value:"status",name:"По статусу"}]}},methods:{changePage(e){this.page=e},async fetchCards(){try{this.isCardsLoading=!0;const e=await P.A.get("https://rickandmortyapi.com/api/character",{params:{page:this.page,limit:this.limit,name:this.searchQuery}});this.totalPages=e.data.info.pages,this.cards=e.data.results}catch(e){alert("Ошибка или карточки по запросу не найдены")}finally{this.isCardsLoading=!1}}},mounted(){this.fetchCards()},computed:{sortedCards(){return[...this.cards].sort(((e,t)=>e[this.selectedSort]?.localeCompare(t[this.selectedSort])))}},watch:{page(){this.fetchCards()}}};const D=(0,E.A)(U,[["render",s]]);var G=D;const z=["v-model"],H=(0,r.Lk)("option",{disabled:"",value:""},"Сортировка",-1),J=["value"];function Y(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("select",{class:"select","v-model":a.modelValue,onChange:t[0]||(t[0]=(...e)=>s.cangeOption&&s.cangeOption(...e))},[H,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.options,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.value,value:e.value},(0,c.v_)(e.name),9,J)))),128))],40,z)}var Z={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{cangeOption(e){this.$emit("update:modelValue",e.target.value)}}};const ee=(0,E.A)(Z,[["render",Y]]);var te=ee;const ae=["value"];function ne(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("input",{value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>s.updateInput&&s.updateInput(...e)),class:"input",type:"text"},null,40,ae)}var re={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const oe=(0,E.A)(re,[["render",ne],["__scopeId","data-v-97baff56"]]);var se=oe;const ie={class:"btn"};function ce(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("button",ie,[(0,r.RG)(e.$slots,"default")])}var de={name:"my-button"};const le=(0,E.A)(de,[["render",ce]]);var ue=le;const pe={class:"spinner"};function fe(e,t,a,n,o,s){return(0,r.uX)(),(0,r.CE)("div",pe)}var ve={name:"my-loader"};const ge=(0,E.A)(ve,[["render",fe],["__scopeId","data-v-bb0bdcf8"]]);var me=ge,he=[te,se,ue,me];const ye=(0,n.Ef)(G);he.forEach((e=>{ye.component(e.name,e)})),ye.mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],i=n[1],c=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var l=c(a)}for(t&&t(n);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5026)}));n=a.O(n)})();
//# sourceMappingURL=app.575f0fcf.js.map