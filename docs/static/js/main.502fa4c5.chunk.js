(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),o=n(5),i=n.n(o),r=(n(12),n(4)),a=n(3),l=n(6),u=n(2).makeAutoObservable,h=function(){function e(t){Object(a.a)(this,e),this.list=[],this.rootStore=t,u(this),console.log("  this.rootStore ",this.rootStore)}return Object(l.a)(e,[{key:"addExpense",value:function(e){var t=e.month,n={amount:e.amount,title:"",month:t};this.list.push(n)}},{key:"deleteExpense",value:function(e){this.list=this.list.filter((function(t,n){return n!==e}))}}]),e}(),j=n(2),m=function(){function e(t){Object(a.a)(this,e),this.month="January",this.rootStore=t,Object(j.makeAutoObservable)(this)}return Object(l.a)(e,[{key:"changeMonth",value:function(e){this.month=e}}]),e}(),b=c.a.createContext(new function e(){Object(a.a)(this,e),this.expenseStore=new h(this),this.infoStore=new m(this)}),d=function(){return c.a.useContext(b)},f=["january","february","march","april","may","june","july","august"],x=n(1),O=Object(r.a)((function(){var e=Object(s.useRef)(null),t=d(),n=t.expenseStore,c=t.infoStore;return Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("input",{type:"number",placeholder:"enter amount",className:"form-control col-sm-6",ref:e}),Object(x.jsx)("select",{className:"form-control col-sm-3",onChange:function(e){c.changeMonth(e.target.value)},children:f.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)}))}),Object(x.jsx)("button",{onClick:function(){var t=e.current;n.addExpense({month:c.month,amount:t.value}),t.value="",t.focus()},className:"btn btn-primary col-sm-2",children:"Add Expense"})]})})),p=Object(r.a)((function(){var e=d().expenseStore;return Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"Expense List"}),Object(x.jsx)(O,{}),Object(x.jsx)("ul",{className:"list-group mt-4",children:e.list&&e.list.length>0?e.list.map((function(t,n){return Object(x.jsx)("li",{className:"list-group-item",onClick:function(){e.deleteExpense(n)},children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-6",children:t.month}),Object(x.jsx)("div",{className:"col-sm-6",children:t.amount})]})},n)})):Object(x.jsx)("p",{className:"alert alert-info",children:"You don't have any list!"})})]})})),v=Object(r.a)((function(){var e=d().infoStore;return Object(x.jsx)("section",{className:"info-wrapper",children:Object(x.jsx)("h3",{className:"highlight",children:e.month})})}));var g=function(){return Object(x.jsxs)("div",{className:"App container",children:[Object(x.jsx)(v,{}),Object(x.jsx)(p,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),o(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.502fa4c5.chunk.js.map