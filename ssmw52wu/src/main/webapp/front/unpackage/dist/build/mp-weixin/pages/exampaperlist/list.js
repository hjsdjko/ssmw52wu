(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exampaperlist/list"],{"0487":function(e,t,n){},"0951":function(e,t,n){"use strict";var r=n("0487"),a=n.n(r);a.a},7921:function(e,t,n){"use strict";(function(e){n("1f4f");r(n("66fd"));var t=r(n("b1a5"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"79f1":function(e,t,n){"use strict";n.r(t);var r=n("e2a1"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},b1a5:function(e,t,n){"use strict";n.r(t);var r=n("e78a"),a=n("79f1");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("0951");var u,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=c.exports},e2a1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,a,s,u){try{var i=e[s](u),c=i.value}catch(o){return void n(o)}i.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function i(e){s(u,r,a,i,c,"next",e)}function c(e){s(u,r,a,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",userid:""}},onLoad:function(e){this.userid=e.userid,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return u(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("exampaper",{page:e.num,limit:e.size,status:1});case 2:a=n.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onDetailTap:function(e){var t=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.deleteRecords(t.userid,e);case 2:t.$utils.jump("./exam?id=".concat(e));case 3:case"end":return n.stop()}}),n)})))()},search:function(){var e=this;return u(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.mescroll.num=1,n={page:e.mescroll.num,limit:e.mescroll.size},t.next=4,e.$api.list("exampaper",n);case 4:a=t.sent,1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 9:case"end":return t.stop()}}),t)})))()}}};t.default=i},e78a:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"540a"))}},a=function(){var e=this,t=e.$createElement;e._self._c},s=[]}},[["7921","common/runtime","common/vendor"]]]);