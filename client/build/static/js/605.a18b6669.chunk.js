"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[605,9926,428,8888],{58191:function(e,n,t){var a=t(66934),r=t(79836),s=t(68870),c=t(56890),i=t(35855),o=t(53994),u=t(53382),d=t(763),l=t(80184),f=(0,a.ZP)(r.Z)((function(e){e.theme;return{width:0,minWidth:"100%",overflow:"auto",whiteSpace:"nowrap"}})),m=function(e,n){return n.content?n.content(e):(0,d.get)(e,n.path)};n.Z=function(e){var n=e.columns,t=e.data;return(0,l.jsx)(s.Z,{sx:{display:"block",overflowY:"auto",whiteSpace:"nowrap"},component:r.Z,children:(0,l.jsxs)(f,{children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)(i.Z,{children:n.map((function(e,n){return(0,l.jsx)(o.Z,{id:n,align:"center",children:e.name})}))})}),(0,l.jsx)(u.Z,{sx:{width:"100%"},children:t.map((function(e,t){return(0,l.jsx)(i.Z,{children:n.map((function(n,t){return(0,l.jsx)(o.Z,{align:"center",children:m(e,n)})}))},t)}))})]})})}},60605:function(e,n,t){t.r(n);var a=t(54261),r=t(38888),s=t(80428),c=t(79926),i=t(80184);n.default=function(){var e=(0,a.Z)().user;return"Admin"===e.userSide?(0,i.jsx)(c.default,{}):"Patient"===e.userSide?(0,i.jsx)(r.default,{}):(0,i.jsx)(s.default,{})}},38888:function(e,n,t){t.r(n);var a=t(74165),r=t(15861),s=t(29439),c=t(10649),i=t(3606),o=t(72791),u=t(57689),d=t(58191),l=t(20890),f=t(54261),m=t(80184);n.default=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],h=n[1],p=(0,o.useState)(!1),x=(0,s.Z)(p,2),Z=x[0],g=(x[1],(0,f.Z)().user,(0,u.s0)(),function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i.Z.url,"/cares/personal"));case 2:n=e.sent,t=n.data.data,h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,o.useEffect)((function(){g()}),[Z]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,{variant:"h4",sx:{textAlign:"center"},children:"Patient requests"}),(0,m.jsx)(d.Z,{columns:[{path:"anyAllergies",name:"Allergic?"},{path:"allergicFoods",name:"Allergic Foods"},{path:"beenDiagnosed",name:"Diagnosed Recently?"},{path:"diagnosedDisease",name:"Diagnosed Diseases"},{path:"recommendedFoods",name:"Recommended Foods"},{path:"description",name:"Description"}],data:t}),";"]})}},80428:function(e,n,t){t.r(n);var a=t(74165),r=t(15861),s=t(29439),c=t(36151),i=t(20890),o=t(10649),u=t(3606),d=t(72791),l=t(57689),f=t(58191),m=t(80184);n.default=function(){var e=(0,d.useState)([]),n=(0,s.Z)(e,2),t=n[0],h=n[1],p=(0,d.useState)(!1),x=(0,s.Z)(p,2),Z=x[0],g=(x[1],(0,l.s0)()),v=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u.Z.url,"/cares"));case 2:n=e.sent,t=n.data.data,h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=[{name:"Requester Name",content:function(e){return(0,m.jsx)(m.Fragment,{children:e.User.fullName})}},{name:"Requester Email",content:function(e){return(0,m.jsx)(m.Fragment,{children:e.User.email})}},{path:"anyAllergies",name:"Allergic?"},{path:"allergicFoods",name:"Allergic Foods"},{path:"beenDiagnosed",name:"Diagnosed Recently?"},{path:"diagnosedDisease",name:"Diagnosed Diseases"},{path:"recommendedFoods",name:"Recommended Foods"},{path:"description",name:"Description"},{name:"Actions",content:function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Z,{onClick:function(){!function(e){g("/dashboard/doctor-give-response/".concat(e.id))}(e)},children:"Acton"})})}},{name:"Patient Details",content:function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Z,{onClick:function(){!function(e){g("/dashboard/patient-details/".concat(e.createdBy))}(e)},children:"patient Details"})})}}];return(0,d.useEffect)((function(){v()}),[Z]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{variant:"h4",sx:{textAlign:"center"},children:"Patient requests"}),(0,m.jsx)(f.Z,{columns:j,data:t})]})}},79926:function(e,n,t){t.r(n);var a=t(74165),r=t(15861),s=t(29439),c=t(20890),i=t(10649),o=t(3606),u=t(72791),d=t(58191),l=t(80184);n.default=function(){var e=(0,u.useState)([]),n=(0,s.Z)(e,2),t=n[0],f=n[1],m=(0,u.useState)(!1),h=(0,s.Z)(m,2),p=h[0],x=(h[1],function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o.Z.url,"/auth/users"));case 2:n=e.sent,t=n.data.data,f(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,u.useEffect)((function(){x()}),[p]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{variant:"h4",sx:{textAlign:"center"},children:"List of users"}),(0,l.jsx)(d.Z,{columns:[{path:"fullName",name:"Full Name"},{path:"email",name:"Email"},{path:"userSide",name:"User type"},{path:"levelOfEducation",name:"Education Level"}],data:t}),";"]})}}}]);
//# sourceMappingURL=605.a18b6669.chunk.js.map