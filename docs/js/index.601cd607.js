(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={index:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/kanagawa_population_info/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"21bb":function(e,t,a){"use strict";a("2dad")},"2dad":function(e,t,a){},4986:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleSideMenu.apply(null,arguments)}}}),a("v-toolbar-title",[e._v("神奈川県内人口状況")]),a("v-spacer")],1),a("SideNav"),a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":"","align-start":""}},[a("router-view")],1)],1)],1)},o=[],i=a("5530"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.$store.state.drawer,callback:function(t){e.$set(e.$store.state,"drawer",t)},expression:"$store.state.drawer"}},[a("v-list",[a("v-list-item",[a("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleSideMenu.apply(null,arguments)}}}),a("v-list-item-content",[a("v-list-item-title",[e._v("Menu")])],1)],1),a("v-divider"),e._l(e.items,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.link}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)},l=[],c=a("2f62"),u={data:function(){return{items:[{title:"ホーム",icon:"mdi-home",link:{name:"Home"}},{title:"人口一覧",icon:"mdi-table-large",link:{name:"PopList"}},{title:"人口割合",icon:"mdi-chart-arc",link:{name:"PopPieChart"}},{title:"サイトについて",icon:"mdi-information-outline",link:{name:"About"}}]}},methods:Object(i["a"])({},Object(c["b"])(["toggleSideMenu"]))},f=u,p=a("2877"),_=a("6544"),v=a.n(_),h=a("5bc1"),m=a("ce7e"),d=a("132d"),g=a("8860"),y=a("da13"),b=a("5d23"),x=a("34c3"),w=a("f774"),j=Object(p["a"])(f,s,l,!1,null,null,null),P=j.exports;v()(j,{VAppBarNavIcon:h["a"],VDivider:m["a"],VIcon:d["a"],VList:g["a"],VListItem:y["a"],VListItemContent:b["a"],VListItemIcon:x["a"],VListItemTitle:b["b"],VNavigationDrawer:w["a"]});var k={name:"App",components:{SideNav:P},data:function(){return{}},methods:Object(i["a"])({},Object(c["b"])(["toggleSideMenu"]))},O=k,I=a("7496"),C=a("40dc"),V=a("a523"),A=a("f6c4"),S=a("2fa4"),M=a("2a7f"),E=Object(p["a"])(O,r,o,!1,null,null,null),L=E.exports;v()(E,{VApp:I["a"],VAppBar:C["a"],VAppBarNavIcon:h["a"],VContainer:V["a"],VMain:A["a"],VSpacer:S["a"],VToolbarTitle:M["a"]});var $=a("8c4f"),N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("神奈川県内人口状況")]),a("main",[a("p",[e._v("神奈川県の市町村人口状況を表示します。")]),a("p",[e._v("表示形式を左上メニューからお選びください")])])])}],D={name:"Home"},H=D,z=(a("21bb"),Object(p["a"])(H,N,T,!1,null,null,null)),B=z.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PopList"},[a("v-container",{attrs:{"text-xs-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[e._v("市町村別人口一覧")]),a("div",[e._v("（選択）地域： "),a("span",{staticClass:"select_field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.select_area,expression:"select_area"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select_area=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("全域（選択して下さい）")]),e._l(e.area_categories,(function(t){return a("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])}))],2),a("button",{on:{click:e.clear_category}},[e._v("×(clear)")])])]),a("div",[e._v("（選択）集計月： "),a("span",{staticClass:"select_field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.select_month,expression:"select_month"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select_month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("（選択して下さい）")]),e._l(e.month_list,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.label)+" ")])}))],2)]),a("p",[e._v("各市町村の情報（集計年月："+e._s(e.get_month)+"）：")])]),e.get_error?a("div",[e._v(" "+e._s(e.err_message)+" ")]):a("div",[a("v-flex",{attrs:{xs12:"","mt-5":"","justify-center":""}},[a("v-data-table",{staticClass:"city_info",attrs:{headers:e.headers,items:e.search_list,color:"primary",app:"",lighten:""}})],1)],1)])],1)],1)],1)},J=[],G=a("b85c"),K=(a("dca8"),a("498a"),a("4de4"),a("caad"),a("2532"),a("bc3a")),q=a.n(K),Q="https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/",R=Object.freeze({name:"My App",version:"0.0.2",helpers:{filterPrefInfo:function(e){var t,a=[],n=Object(G["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;"県全域"==r.area_name&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a},filterCityInfo:function(e){var t,a=[],n=Object(G["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.code>0&&"県全域"!=r.area_name&&"区"!=r.city_type&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a}}});function U(e,t,a){q.a.get(e).then((function(e){t(e.data[0])})).catch((function(e){console.log("Error occurred in API"),console.log(e),a(e)}))}var W={name:"PopList",data:function(){return{get_error:!1,err_message:"データ取得に失敗しました。",get_month:"",response:"",get_info:[],pref_info:[],city_info:[],headers:[{text:"コード",value:"code",class:"px-0"},{text:"名称",value:"city_name",class:"px-0"},{text:"地域",value:"area_name",class:"px-0"},{text:"世帯数",value:"household",class:"px-0"},{text:"人口",value:"population",class:"px-0"},{text:"人口増減(先月比)",value:"change_pop",class:"px-0"},{text:"１世帯人数",value:"pop_per_house",class:"px-0"},{text:"人口密度",value:"pop_per_area",class:"px-0"}],select_area:"",area_categories:[{id:11,name:"横浜"},{id:12,name:"川崎"},{id:13,name:"県央"},{id:14,name:"横須賀三浦"},{id:15,name:"湘南"},{id:16,name:"県西"}],select_month:"",month_list:[]}},created:function(){this.get_month="202109";for(var e=["2021","2020","2019"],t=["12","11","10","09","08","07","06","05","04","03","02","01"],a=!0,n=0,r=e;n<r.length;n++){var o,i=r[n],s=Object(G["a"])(t);try{for(s.s();!(o=s.n()).done;){var l=o.value;if(i+l==this.get_month&&(a=!1),!a){var c={id:i+l,label:i+"年"+l+"月"};this.month_list.push(c)}}}catch(u){s.e(u)}finally{s.f()}}this.getInfo(this.get_month)},methods:{clear_category:function(){this.select_area=""},setInfo:function(e){this.pref_info=R.helpers.filterPrefInfo(e),console.log(this.pref_info),this.city_info=R.helpers.filterCityInfo(e),console.log(this.city_info)},setError:function(e){this.get_error=e},getInfo:function(e){var t=Q+"jinkotosetai_"+e+".json";this.get_error=!1,U(t,this.setInfo,this.setError)}},watch:{select_month:function(){console.log(this.select_month),this.get_month=this.select_month,this.getInfo(this.get_month)}},computed:{search_list:function(){var e=this.select_area.trim();return""===e?this.city_info:this.city_info.filter((function(t){return t.area_name.includes(e)}))}}},X=W,Y=(a("5db0"),a("8fea")),Z=a("0e8f"),ee=a("a722"),te=Object(p["a"])(X,F,J,!1,null,null,null),ae=te.exports;v()(te,{VContainer:V["a"],VDataTable:Y["a"],VFlex:Z["a"],VLayout:ee["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PopList"},[a("v-container",{attrs:{"text-xs-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[e._v("人口割合（市町村内訳）")]),a("div",[e._v("（選択）地域： "),a("span",{staticClass:"select_field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.select_area,expression:"select_area"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select_area=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("全域（選択して下さい）")]),e._l(e.area_categories,(function(t){return a("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])}))],2),a("button",{on:{click:e.clear_category}},[e._v("×(clear)")])])]),a("div",[e._v("（選択）集計月： "),a("span",{staticClass:"select_field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.select_month,expression:"select_month"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select_month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("（選択して下さい）")]),e._l(e.month_list,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.label)+" ")])}))],2)]),a("p",[e._v("各市町村の情報（集計年月："+e._s(e.get_month)+"）：")])]),e.get_error?a("div",[e._v(" "+e._s(e.err_message)+" ")]):a("div",[a("v-flex",{attrs:{xs12:"","mt-5":"","justify-center":""}},[a("v-data-table",{staticClass:"city_info",attrs:{headers:e.headers,items:e.search_list,color:"primary",app:"",lighten:""}})],1)],1)])],1)],1)],1)},re=[],oe="https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/",ie=Object.freeze({name:"My App",version:"0.0.2",helpers:{filterPrefInfo:function(e){var t,a=[],n=Object(G["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;"県全域"==r.area_name&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a},filterCityInfo:function(e){var t,a=[],n=Object(G["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.code>0&&"県全域"!=r.area_name&&"区"!=r.city_type&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a}}});function se(e,t,a){q.a.get(e).then((function(e){t(e.data[0])})).catch((function(e){console.log("Error occurred in API"),console.log(e),a(e)}))}var le={name:"PopPieChart",data:function(){return{get_error:!1,err_message:"データ取得に失敗しました。",get_month:"",response:"",get_info:[],pref_info:[],city_info:[],headers:[{text:"コード",value:"code",class:"px-0"},{text:"名称",value:"city_name",class:"px-0"},{text:"地域",value:"area_name",class:"px-0"},{text:"世帯数",value:"household",class:"px-0"},{text:"人口",value:"population",class:"px-0"},{text:"人口増減(先月比)",value:"change_pop",class:"px-0"},{text:"１世帯人数",value:"pop_per_house",class:"px-0"},{text:"人口密度",value:"pop_per_area",class:"px-0"}],select_area:"",area_categories:[{id:11,name:"横浜"},{id:12,name:"川崎"},{id:13,name:"県央"},{id:14,name:"横須賀三浦"},{id:15,name:"湘南"},{id:16,name:"県西"}],select_month:"",month_list:[]}},created:function(){this.get_month="202109";for(var e=["2021","2020","2019"],t=["12","11","10","09","08","07","06","05","04","03","02","01"],a=!0,n=0,r=e;n<r.length;n++){var o,i=r[n],s=Object(G["a"])(t);try{for(s.s();!(o=s.n()).done;){var l=o.value;if(i+l==this.get_month&&(a=!1),!a){var c={id:i+l,label:i+"年"+l+"月"};this.month_list.push(c)}}}catch(u){s.e(u)}finally{s.f()}}this.getInfo(this.get_month)},methods:{clear_category:function(){this.select_area=""},setInfo:function(e){this.pref_info=ie.helpers.filterPrefInfo(e),console.log(this.pref_info),this.city_info=ie.helpers.filterCityInfo(e),console.log(this.city_info)},setError:function(e){this.get_error=e},getInfo:function(e){var t=oe+"jinkotosetai_"+e+".json";this.get_error=!1,se(t,this.setInfo,this.setError)}},watch:{select_month:function(){console.log(this.select_month),this.get_month=this.select_month,this.getInfo(this.get_month)}},computed:{search_list:function(){var e=this.select_area.trim();return""===e?this.city_info:this.city_info.filter((function(t){return t.area_name.includes(e)}))}}},ce=le,ue=(a("57a8"),Object(p["a"])(ce,ne,re,!1,null,null,null)),fe=ue.exports;v()(ue,{VContainer:V["a"],VDataTable:Y["a"],VFlex:Z["a"],VLayout:ee["a"]});var pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("about this page")]),a("div",[e._v("This page shows Population information of Kanagawa Prefecture.")]),a("main",[a("div",[e._v("Data source : "),a("a",{attrs:{href:"https://www.pref.kanagawa.jp/docs/x6z/tc30/jinko/kohyosiryo.html",target:"_blank"}},[e._v("神奈川県人口統計調査（月報）")])])]),a("div",[a("span",[e._v("Contents source : "),a("a",{attrs:{href:"https://github.com/sgtao/kanagawa_population_info",target:"_blank"}},[e._v("GitHub")])]),e._v("、 "),a("span",[e._v("Copyright: 2021"),a("a",{attrs:{href:"mailto:sg.tao.so@gmail.com"}},[e._v("@sgtao")])])])])}],ve={name:"About"},he=ve,me=(a("f26d"),Object(p["a"])(he,pe,_e,!1,null,null,null)),de=me.exports;n["a"].use($["a"]);var ge=[{path:"/",name:"Home",component:B},{path:"/PopList",name:"PopList",component:ae},{path:"/PopPieChart",name:"PopPieChart",component:fe},{path:"/about",name:"About",component:de}],ye=new $["a"]({mode:"history",base:"/kanagawa_population_info/",routes:ge}),be=ye;n["a"].use(c["a"]);var xe=new c["a"].Store({state:{drawer:!1},mutations:{toggleSideMenu:function(e){e.drawer=!e.drawer}},actions:{toggleSideMenu:function(e){var t=e.commit;t("toggleSideMenu")}}}),we=a("f309");n["a"].use(we["a"]);var je=new we["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:be,store:xe,vuetify:je,render:function(e){return e(L)}}).$mount("#app")},"57a8":function(e,t,a){"use strict";a("8aca")},"5db0":function(e,t,a){"use strict";a("4986")},"5f83":function(e,t,a){},"8aca":function(e,t,a){},f26d:function(e,t,a){"use strict";a("5f83")}});
//# sourceMappingURL=index.601cd607.js.map