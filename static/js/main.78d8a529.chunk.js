(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(7),i=n.n(o),a=n(2),l=(n(12),n(5)),s=n(0),u=function(t){var e=t.variable,n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)([]),j=Object(a.a)(u,2),h=j[0],b=j[1],d=Object(c.useState)(null),f=Object(a.a)(d,2),p=f[0],x=f[1];return Object(s.jsxs)("div",{className:"rand_names",children:[Object(s.jsx)("div",{style:{display:p?"block":"none",height:"40px",textAlign:"center",fontSize:"36px",fontWeight:"800",color:"darkred"},children:p}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsxs)("label",{children:["Enter ",e,"s"]}),Object(s.jsxs)("span",{style:{maxHeight:"60px",display:"flex",justifyContent:"center",width:"100%"},children:[Object(s.jsx)("input",{style:{maxHeight:"60px"},htmlFor:"name",onKeyDown:function(t){if("Enter"===t.key){if(!o)return;b([].concat(Object(l.a)(h),[o])),i("")}},id:"name_input",type:"text",value:o,onChange:function(t){return i(t.target.value)}}),Object(s.jsxs)("button",{onClick:function(){o&&(b([].concat(Object(l.a)(h),[o])),i(""),document.getElementById("name_input").focus())},children:["Add ",e]})]}),Object(s.jsxs)("button",{onClick:function(){x(h.filter((function(t){return t!==p}))[Math.floor(Math.random()*h.length-(p?1:0))])},children:[" Draw ",e]}),Object(s.jsx)("button",{onClick:function(){return x(function(){var t=h[Math.floor(Math.random()*h.length)],e=h.filter((function(e){return e!==t}))[Math.floor(Math.random()*(h.length-1))];return"".concat(t," and ").concat(e)}())},children:" Draw Two"}),Object(s.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to empty the bucket?")&&(b([]),i(""),x(null))},children:"Empty Bucket"}),h.length>0&&Object(s.jsxs)("p",{children:[e,"s in Bucket: ",h.map((function(t){return Object(s.jsxs)("span",{style:{display:"block"},children:[t," ",Object(s.jsx)("span",{style:{color:"red"},onClick:function(){return b(Object(l.a)(h.filter((function(e){return e!==t}))))},children:"x"})]})}))]})]})]})},j=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)("button",{onClick:function(){var t=prompt("What are you choosing?");"s"===t.charAt(t.length-1)&&(t=t.slice(0,-1)),r(t.charAt(0).toUpperCase()+t.slice(1))},children:[" ",n?"New Choice":"Start"]}),n&&Object(s.jsx)(u,{variable:n})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.78d8a529.chunk.js.map