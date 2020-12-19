(this["webpackJsonpto-do-client"]=this["webpackJsonpto-do-client"]||[]).push([[6],{184:function(e,t,a){"use strict";a.r(t);var r=a(90),s=a.n(r),n=a(91),o=a(96),i=a(32),c=a(2),u=a(85),d=a(0),l=a(155),m=a(170),p=a(58),b=a(186),h=a(180),j=a(156),g=Object(m.a)((function(e){var t;return{header:{top:"2%",marginBottom:"1em",color:"#274e6c",textAlign:"center"},card:(t={margin:"auto"},Object(i.a)(t,e.breakpoints.down("xs"),{minWidth:"90%"}),Object(i.a)(t,e.breakpoints.up("xs"),{maxWidth:"50%"}),Object(i.a)(t,e.breakpoints.up("lg"),{maxWidth:"25%"}),Object(i.a)(t,"padding",e.spacing(2)),Object(i.a)(t,"boxSizing","border-box"),t),textField:{width:"90%",margin:e.spacing(2),marginBottom:0},buttonHolder:{marginTop:20,display:"flex",justifyContent:"end",width:"100%"},form:{display:"flex",flexDirection:"column",alignItems:"center","& .MuiButtonBase-root":Object(i.a)({width:"20%"},e.breakpoints.down("xs"),{width:"30%"})},resetButton:{marginRight:e.spacing(2),border:"1px solid #274e6c",color:"#274e6c"},submitButton:{color:"white"}}}));t.default=function(e){var t=Object(l.a)({mode:"onChange"}),a=t.register,r=t.handleSubmit,i=t.errors,m=t.formState,x=t.clearErrors,O=t.reset,f=Object(d.useState)(""),w=Object(o.a)(f,2),v=w[0],S=w[1],R=Object(d.useState)(""),k=Object(o.a)(R,2),y=k[0],B=k[1],N=Object(d.useState)(""),C=Object(o.a)(N,2),q=C[0],F=C[1],T=g(),P=Object(d.useState)(!1),_=Object(o.a)(P,2),A=_[0],H=_[1],L=Object(d.useState)(""),U=Object(o.a)(L,2),W=U[0],z=U[1],D=function(){S(""),B(""),F(""),x(),O()},J=function(){var e=Object(n.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,r=t.password,e.next=4,u.a.post("/user/signin",{username:a,password:r}).then((function(e){console.log(e),z("Successful Registration"),H(!0),D()})).catch((function(e){z("Registration Failed"),H(!0),console.error(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(p.a,{className:T.card,children:[Object(c.jsx)("h1",{className:T.header,children:"Registration"}),Object(c.jsxs)("form",{onSubmit:r(J),className:T.form,children:[Object(c.jsx)(b.a,{className:T.textField,name:"username",label:"Username *",value:v,onChange:function(e){return S(e.target.value)},inputRef:a({required:"Username required",minLength:{value:5,message:"At least 5 character"},validate:!0}),error:!!i.username,helperText:i.username&&i.username.message}),Object(c.jsx)(b.a,{className:T.textField,name:"password",label:"Password *",type:"password",value:y,onChange:function(e){return B(e.target.value)},inputRef:a({required:"Password required",minLength:{value:8,message:"At least 8 character"},validate:!0}),error:!!i.password,helperText:i.password&&i.password.message}),Object(c.jsx)(b.a,{className:T.textField,name:"password_repeat",label:"Repeat Password *",type:"password",value:q,onChange:function(e){return F(e.target.value)},inputRef:a({required:"Password required",validate:function(e){return e===y||"The passwords do not match"}}),error:!!i.password_repeat,helperText:i.password_repeat&&i.password_repeat.message}),Object(c.jsxs)("div",{className:T.buttonHolder,children:[Object(c.jsx)(h.a,{className:T.resetButton,onClick:D,children:"Reset"}),Object(c.jsx)(h.a,{classes:{root:T.submitButton},disabled:!m.isValid,variant:"contained",color:"primary",type:"submit",children:"Submit"})]})]})]}),Object(c.jsx)(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:A,autoHideDuration:3e3,onClose:function(){return H(!1)},message:W})]})}},85:function(e,t,a){"use strict";var r=a(100),s=a.n(r).a.create({baseURL:"https://to-do-798.herokuapp.com/"});t.a=s}}]);
//# sourceMappingURL=6.20335acb.chunk.js.map