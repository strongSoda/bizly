(this.webpackJsonpbizly=this.webpackJsonpbizly||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(6),s=t.n(c),i=(t(11),t(2)),o=t.n(i),u=t(4),l=t(5),f=(t.p,t(13),t(0)),b={suffix:{animal:["bear","panda","bee"],object:["book","paper","clip"],building:["house","shop","club","road"],food:["cookie","juice","lemon","lime","melon","fig"],phrase:["chat","gram","ly","soft","y","i"]}};var p=function(){var e=Object(r.useState)("banner"),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)([]),s=Object(l.a)(c,2),i=s[0],p=s[1],j=function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],Object.keys(b.suffix).map((function(e,r){return"phrase"===e?b.suffix[e].map((function(e){return n.push(t+e)})):b.suffix[e].map((function(e){return n.push(t+" "+e)}))})),console.log("@@@@@@@@@@@@@",n),p(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t){e.next=3;break}return e.abrupt("return");case 3:r=[],Object.keys(b.suffix).map((function(e,n){return"phrase"===e?b.suffix[e].map((function(e){return r.push(t+e)})):b.suffix[e].map((function(e){return r.push(t+" "+e)}))})),console.log("@@@@@@@@@@@@@",r),p(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){j()}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{className:"brand",children:"Bizly"}),Object(f.jsx)("p",{className:"desc",children:"Name your buisness"})]}),Object(f.jsxs)("form",{className:"card",onSubmit:h,children:[Object(f.jsx)("label",{className:"input",children:"Enter one keyword for your business"}),Object(f.jsx)("input",{className:"input__field",type:"text",placeholder:"Enter one keyword of your business",onChange:function(e){return a(e.target.value)},value:t}),Object(f.jsx)("button",{type:"submit",children:"Find Names"})]}),(null===i||void 0===i?void 0:i.length)>0&&Object(f.jsxs)("div",{className:"bizNames",children:[Object(f.jsx)("h1",{children:"Results"}),null===i||void 0===i?void 0:i.map((function(e){return Object(f.jsxs)("div",{className:"bizName",children:[Object(f.jsx)("span",{className:"name",children:e}),Object(f.jsxs)("span",{className:"links",children:[Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://www.google.com/search?q=".concat(e),target:"_blank",rel:"noreferrer",children:"Search Google"})}),Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://www.namecheap.com/domains/registration/results/?utm_source=CJ&utm_medium=Affiliate&utm_campaign=100530391&ref=cj&affnetwork=cj&cjevent=e6808f56489d11ec816bca140a180513&domain=".concat(e),target:"_blank",rel:"noreferrer",children:"Find Domain"})}),Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://looka.com/onboarding?company_name=".concat(e),target:"_blank",rel:"noreferrer",children:"Design Logo"})})]})]})}))]})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.395491f0.chunk.js.map