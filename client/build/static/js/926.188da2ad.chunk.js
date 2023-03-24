"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[926,599],{58191:function(e,n,r){var t=r(66934),a=r(79836),l=r(68870),i=r(56890),s=r(35855),u=r(53994),o=r(53382),c=r(763),d=r(80184),m=(0,t.ZP)(a.Z)((function(e){e.theme;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),h=function(e,n){return n.content?n.content(e):(0,c.get)(e,n.path)};n.Z=function(e){var n=e.columns,r=e.data;return(0,d.jsx)(l.Z,{width:"100%",overflow:"auto",children:(0,d.jsxs)(m,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(s.Z,{children:n.map((function(e,n){return(0,d.jsx)(u.Z,{id:n,align:"center",children:e.name})}))})}),(0,d.jsx)(o.Z,{children:r.map((function(e,r){return(0,d.jsx)(s.Z,{children:n.map((function(n,r){return(0,d.jsx)(u.Z,{align:"center",children:h(e,n)})}))},r)}))})]})})}},34599:function(e,n,r){r.r(n),r.d(n,{Container:function(){return b}});var t=r(29439),a=r(74165),l=r(15861),i=r(29886),s=r(39709),u=r(68870),o=r(57621),c=r(61889),d=r(93006),m=r(93457),h=r(10649),f=r(3606),p=r(92506),x=r(72791),Z=r(57689),v=r(62797),j=r(80184),w=(0,m.Z)(u.Z)((function(){return{display:"flex",alignItems:"center"}})),g=(0,m.Z)(w)((function(){return{justifyContent:"center"}})),b=(0,m.Z)(g)((function(){return{width:"90vw","& .card":{width:"80vw",margin:"1rem",borderRadius:12},borderColor:"#1A2038"}})),E={email:"",password:"",fullName:"",userSide:"Doctor",levelOfEducation:""},y=v.Ry().shape({fullName:v.Z_().required("Full name id required"),userSide:v.Z_().nullable(),password:v.Z_().min(6,"Password must be 6 character length").required("Password is required!"),email:v.Z_().email("Invalid Email address").required("Email is required!"),levelOfEducation:v.Z_().required("PLease enter leader's level of education")}),P=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.post("".concat(f.Z.url,"/auth/patient-doc"),n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){(0,i.u)();var e=(0,Z.s0)(),n=(0,x.useState)(!1),r=(0,t.Z)(n,2),m=r[0],h=r[1],f=function(){var n=(0,l.Z)((0,a.Z)().mark((function n(r){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,P(r);case 4:e("/dashboard/view-users"),h(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),h(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsx)(b,{children:(0,j.jsx)(o.Z,{className:"card",children:(0,j.jsx)(c.ZP,{container:!0,children:(0,j.jsx)(c.ZP,{item:!0,sm:12,xs:12,children:(0,j.jsx)(u.Z,{p:4,height:"100%",children:(0,j.jsx)(p.J9,{onSubmit:f,initialValues:E,validationSchema:y,children:function(e){var n=e.values,r=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,j.jsxs)("form",{onSubmit:i,children:[(0,j.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,j.jsx)(d.Z,{fullWidth:!0,size:"small",type:"text",name:"fullName",label:"Full Name",variant:"outlined",onBlur:l,value:n.fullName,onChange:a,helperText:t.fullName&&r.fullName,error:Boolean(r.fullName&&t.fullName),sx:{mb:3}})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,j.jsx)(d.Z,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:l,value:n.email,onChange:a,helperText:t.email&&r.email,error:Boolean(r.email&&t.email),sx:{mb:3}})})]}),(0,j.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,j.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,j.jsx)(d.Z,{fullWidth:!0,size:"small",type:"text",name:"levelOfEducation",label:"level of education",variant:"outlined",onBlur:l,value:n.levelOfEducation,onChange:a,helperText:t.levelOfEducation&&r.levelOfEducation,error:Boolean(r.levelOfEducation&&t.levelOfEducation),sx:{mb:3}})}),(0,j.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,j.jsx)(d.Z,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:l,value:n.password,onChange:a,helperText:t.password&&r.password,error:Boolean(r.password&&t.password),sx:{mb:2}})})]}),(0,j.jsx)(s.Z,{type:"submit",color:"primary",loading:m,variant:"contained",sx:{mb:2,mt:3},children:"Register Doctor"})]})}})})})})})})}},79926:function(e,n,r){r.r(n);var t=r(74165),a=r(15861),l=r(29439),i=r(10649),s=r(3606),u=r(72791),o=r(58191),c=r(34599),d=r(80184);n.default=function(){var e=(0,u.useState)([]),n=(0,l.Z)(e,2),r=n[0],m=n[1],h=(0,u.useState)(!1),f=(0,l.Z)(h,2),p=f[0],x=(f[1],function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.Z.url,"/auth/users"));case 2:n=e.sent,r=n.data.data,console.log(r),m(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,u.useEffect)((function(){x()}),[p]),(0,d.jsxs)(c.Container,{children:[(0,d.jsx)(o.Z,{columns:[{path:"fullName",name:"Full Name"},{path:"email",name:"Email"},{path:"userSide",name:"User type"},{path:"levelOfEducation",name:"Education Level"}],data:r}),";"]})}}}]);
//# sourceMappingURL=926.188da2ad.chunk.js.map