(this["webpackJsonpto-do-client"]=this["webpackJsonpto-do-client"]||[]).push([[7],{112:function(e,t,a){"use strict";var r=a(118),n=a.n(r).a.create({baseURL:"https://to-do-798.herokuapp.com/"});n.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.common.Authorization="Bearer ".concat(t)),e})),t.a=n},192:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var r=a(113),n=a.n(r),o=a(114),s=a(49),i=a(16),c=a(2),u=a(103),l=a(80),m=a(195),d=a(188),p=a(167),g=a(0),h=a(137),b=a(28),j=a(112),f=Object(u.a)((function(e){var t;return{header:{top:"2%",marginBottom:"1em",color:"#274e6c",textAlign:"center"},card:(t={maxWidth:500,margin:e.spacing(2)},Object(i.a)(t,e.breakpoints.up(550),{margin:"auto",marginTop:e.spacing(2)}),Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),t),textField:{width:"90%",margin:e.spacing(2),marginBottom:0},submitButton:{float:"right",marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:"8%"},clearButton:{float:"right",margin:e.spacing(1)},buttonHolder:{marginTop:20,width:"100%"},registration:{width:"100%",position:"static",fontSize:16,textAlign:"center",marginTop:50,color:"#274e6c","& a":{color:"#de7a22",textDecoration:"none"},"& a:hover":{textDecoration:"underline"}}}}));function x(e){var t=Object(h.a)({mode:"onChange"}),a=t.register,r=t.handleSubmit,i=t.errors,u=t.formState,x=t.clearErrors,O=t.reset,v=Object(g.useState)(""),w=Object(s.a)(v,2),S=w[0],k=w[1],N=Object(g.useState)(""),B=Object(s.a)(N,2),y=B[0],C=B[1],T=Object(g.useState)(!1),q=Object(s.a)(T,2),A=q[0],R=q[1],D=f(),F=function(){var t=Object(o.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/user/login",{username:S,password:y}).then((function(t){localStorage.setItem("token",t.data.token),e.history.push("/todos")})).catch((function(e){console.error(e),R(!0)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{className:D.card,children:[Object(c.jsx)("h1",{className:D.header,children:"Login"}),Object(c.jsxs)("form",{onSubmit:r(F),children:[Object(c.jsx)(m.a,{className:D.textField,defaultValue:S,onChange:function(e){return k(e.target.value)},inputRef:a({required:"Username required",minLength:{value:5,message:"At least 5 characters"},validate:!0}),error:!!i.username,helperText:i.username&&i.username.message,name:"username",label:"Username *"}),Object(c.jsx)(m.a,{className:D.textField,defaultValue:y,onChange:function(e){return C(e.target.value)},label:"Password *",name:"password",type:"password",autoComplete:"true",inputRef:a({required:"Password required",minLength:{value:8,message:"At least 8 characters"},validate:!0}),error:!!i.password,helperText:i.password&&i.password.message}),Object(c.jsxs)("div",{className:D.buttonHolder,children:[Object(c.jsx)(d.a,{className:D.submitButton,variant:"contained",color:"primary",type:"submit",disabled:!u.isValid,children:"Submit"}),Object(c.jsx)(d.a,{className:D.clearButton,variant:"outlined",color:"primary",onClick:function(){return k(""),C(""),x(),void O()},children:"Clear"})]}),Object(c.jsxs)("h4",{className:D.registration,children:["New Member? ",Object(c.jsx)(b.b,{to:"/registration",children:"Register here"})]})]})]}),Object(c.jsx)(p.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:A,autoHideDuration:3e3,onClose:function(){return R(!1)},message:"Incorrect username and password"})]})}}}]);
//# sourceMappingURL=7.c3ba055c.chunk.js.map