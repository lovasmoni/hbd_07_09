(this.webpackJsonpexam1=this.webpackJsonpexam1||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(6),i=t.n(a),c=t(21),s=t.n(c),r=(t(35),t(36),t(2)),o=function(){for(var e=new Date,n=2021,t=new Date("7/9/"+n);t.getTime()<e.getTime();)n++,t=new Date("7/9/"+n);var a,i=t.getTime()-e.getTime(),c=Math.ceil(i/864e5),s=e.getFullYear(),o=1971;return a=e.getMonth()<6||6===e.getMonth()&&e.getDate()<9?s-o-1:s-o,Object(r.jsx)("div",{className:"App",children:6===e.getMonth()&&9===e.getDate()?Object(r.jsxs)("h1",{children:["BOLDOG ",a,". SZ\xdcLINAPOT!!!"]}):Object(r.jsxs)("h2",{children:["M\xe1r csak ",c," nap van h\xe1tra a k\xf6vetkez\u0151 sz\xfclet\xe9snapodig..."]})})},m=t(20),d=[{name:"Kov\xe1cs B\xe9la",pets:[{name:"Bodri",animal:"dog",isVaccinated:!1},{name:"Cirmi",animal:"cat",isVaccinated:!1}]},{name:"Varga Lajos",pets:[{name:"Frakk",animal:"dog",isVaccinated:!1}]},{name:"Nagy B\xe9la",pets:[{name:"Cs\u0151rike",animal:"pigeon",isVaccinated:!1}]}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.environment,t=void 0===n?"test":n,a=Object(m.b)({environment:t,models:{client:m.a},seeds:function(e){},routes:function(){this.namespace="/api",this.timing=2e3,this.get("clients",(function(e,n){var t=n.queryParams.search;return d.filter((function(e){return e.name.includes(t)}))})),this.post("/pets",(function(e,n){var t=JSON.parse(n.requestBody),a=t.name,i=t.isVaccinated;return d.forEach((function(e){e.pets.forEach((function(e){e.name===a&&(e.isVaccinated=i)}))})),{success:!0}}))}})}({environment:"development"}),s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dc520d67.chunk.js.map