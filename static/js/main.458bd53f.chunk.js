(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{338:function(e,t,a){e.exports=a.p+"static/media/stock.47bb1941.png"},348:function(e,t,a){e.exports=a(466)},353:function(e,t,a){},354:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=(a(353),a(354),a(27)),i=a(24),u=a(32),s=a(33),m=a(34),d=(a(355),a(129)),v=a(18),f=a(22),b=a(331),p=a.n(b),h=a(305),E=a(337),g=a.n(E);function y(){var e=r.a.useState({columns:[{title:"Item itemName",field:"itemName"},{title:"Category",field:"category"},{title:"Quantity",field:"quantity",type:"numeric"},{title:"Location",field:"location"},{title:"Mark As",field:"marked",type:"numeric"}],data:[{itemName:"Bread",category:"Food",quantity:15,location:"ABC Warehouse"},{itemName:"Water",category:"Drink",quantity:20,location:"XYZ Warehouse"}]}),t=Object(f.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,r.a.createElement(p.a,{options:{exportButton:!0,selection:!0,grouping:!0},title:"Inventory",columns:a.columns,data:a.data,editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t(),n((function(t){var a=Object(v.a)(t.data);return a.push(e),Object(d.a)({},t,{data:a})}))}),500)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){a(),t&&n((function(a){var n=Object(v.a)(a.data);return n[n.indexOf(t)]=e,Object(d.a)({},a,{data:n})}))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t(),n((function(t){var a=Object(v.a)(t.data);return a.splice(a.indexOf(e),1),Object(d.a)({},t,{data:a})}))}),600)}))},allRowsDelete:function(e){return new Promise((function(e){setTimeout((function(){e(),n((function(e){return Object(d.a)({},e,{data:[]})}))}),600)}))}}}),r.a.createElement(h.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(g.a,null)},"Delete all"))}var O=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null))}}]),t}(n.Component),j=(a(314),a(181)),w=a.n(j),k=a(304),x=a(495),D=a(496),N=a(497),T=a(498),I=a(499),M=a(88),B=Object(k.a)({root:{maxWidth:345},media:{height:140},color:"red"});function W(){var e=B();return r.a.createElement(x.a,{className:e.root},r.a.createElement(D.a,null,r.a.createElement(I.a,{className:e.media,image:"https://images.unsplash.com/photo-1518378782190-56da4f3efde6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",title:"Inventory"}),r.a.createElement(T.a,null,r.a.createElement(M.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Services"),r.a.createElement(M.a,{variant:"body2",color:"inherit",component:"p"},"Keep track of your inventory."))),r.a.createElement(N.a,null,r.a.createElement(h.a,{size:"large",color:"inherit"},"INVENTORY")))}var Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={src:"",imgurl:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://api.unsplash.com/photos/random?client_id=c9ce7ec20ba10268b6fbac6164f37ac58339814bae875199a42ba551bdc38702").then((function(t){console.log(t),e.setState({imgurl:t.data.urls.regular})}))}},{key:"render",value:function(){var e={backgroundImage:"url("+this.state.imgurl+")"};return r.a.createElement("div",{style:e},r.a.createElement("div",{className:"cardStyle"},r.a.createElement(W,{m:"2rem"})))}}]),t}(n.Component),C=a(338),R=a.n(C),S=a(100),q=a(87),P=a(339),A=a.n(P),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={time:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("http://worldtimeapi.org/api/ip").then((function(t){console.log(t.data.datetime);var a=new Date;console.log(a),e.setState({time:t.data.datetime})}))}},{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{src:R.a,width:"50px"})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(S.c,{to:"/"},r.a.createElement("a",{class:"nav-link"},"Home",r.a.createElement("span",{class:"sr-only"},"(current)")))),r.a.createElement("li",{class:"nav-item"},r.a.createElement(S.c,{to:"/inventory"},r.a.createElement("a",{class:"nav-link"},"Inventory")))),r.a.createElement("span",{class:"navbar-text"},A()().format("MMMM Do YYYY, h:mm:ss a"))))),r.a.createElement("div",null,r.a.createElement(q.c,null,r.a.createElement(q.a,{path:"/inventory"},r.a.createElement(O,null)),r.a.createElement(q.a,{path:"/"},r.a.createElement(Y,null)))))}}]),t}(r.a.Component);var F=function(){return r.a.createElement(S.a,null,r.a.createElement(S.b,null,r.a.createElement(J,null),r.a.createElement("footer",null,r.a.createElement("h1",null,"Footer"))))};a(465),a(281),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[348,1,2]]]);
//# sourceMappingURL=main.458bd53f.chunk.js.map