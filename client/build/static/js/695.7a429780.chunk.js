"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[695],{77695:function(e,n,i){i.r(n),i.d(n,{default:function(){return pe}});var r=i(4942),o=i(36314),l=i(93457),t=i(52791),s=i(4215),a=i(1413),c=i(29439),d=i(45987),u=i(36151),h=i(5289),x=i(97123),m=i(39157),Z=i(65661),j=i(85523),p=i(90493),g=i(84852),f=i(49900),v=i(61419),b=i(88970),C=i(72791),y=i(80184),k=["onClose","value","open"],w=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function S(e){var n=e.onClose,i=e.value,r=e.open,o=(0,d.Z)(e,k),l=(0,C.useState)(i),t=(0,c.Z)(l,2),s=t[0],p=t[1],g=(0,C.useRef)(null);(0,C.useEffect)((function(){r||p(i)}),[i,r]);return(0,y.jsxs)(h.Z,(0,a.Z)((0,a.Z)({maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onExiting:function(){null!==g.current&&g.current.focus()}},"aria-labelledby":"confirmation-dialog-title",open:r},o),{},{children:[(0,y.jsx)(Z.Z,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),(0,y.jsx)(m.Z,{dividers:!0,children:(0,y.jsx)(b.Z,{ref:g,"aria-label":"Ringtone",name:"ringtone",value:s,onChange:function(e,n){return p(n)},children:w.map((function(e){return(0,y.jsx)(j.Z,{value:e,control:(0,y.jsx)(v.Z,{}),label:e},e)}))})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:function(){return n()},children:"Cancel"}),(0,y.jsx)(u.Z,{onClick:function(){return n(s)},color:"primary",children:"Ok"})]})]}))}var P=(0,l.Z)("div")((function(e){return{width:"100%",maxWidth:360,backgroundColor:e.theme.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function T(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=C.useState("Dione"),l=(0,c.Z)(o,2),t=l[0],s=l[1];return(0,y.jsx)(P,{children:(0,y.jsxs)(p.Z,{component:"div",role:"list",children:[(0,y.jsx)(g.ZP,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Interruptions"})}),(0,y.jsx)(g.ZP,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){r(!0)},role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Phone ringtone",secondary:t})}),(0,y.jsx)(g.ZP,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Default notification ringtone",secondary:"Tethys"})}),(0,y.jsx)(S,{keepMounted:!0,open:i,value:t,className:"paper",id:"ringtone-menu",onClose:function(e){r(!1),e&&s(e)}})]})})}var F=i(29823),D=i(13400),G=i(20890),O=(0,l.Z)(Z.Z)((function(e){var n=e.theme;return{margin:0,padding:n.spacing(2),"& .closeButton":{position:"absolute",right:n.spacing(1),top:n.spacing(1),color:n.palette.grey[500]}}})),W=function(e){var n=e.children,i=e.onClose;return(0,y.jsxs)(O,{disableTypography:!0,children:[(0,y.jsx)(G.Z,{variant:"h6",children:n}),i?(0,y.jsx)(D.Z,{"aria-label":"Close",className:"closeButton",onClick:i,children:(0,y.jsx)(F.Z,{})}):null]})},A=(0,l.Z)(m.Z)((function(e){return{"&.root":{padding:e.theme.spacing(2)}}})),B=(0,l.Z)(x.Z)((function(e){return{"&.root":{margin:0,padding:e.theme.spacing(1)}}})),L=function(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:function(){return r(!0)},children:"Open dialog"}),(0,y.jsxs)(h.Z,{onClose:o,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,y.jsx)(W,{id:"customized-dialog-title",onClose:o,children:"Modal title"}),(0,y.jsxs)(A,{dividers:!0,children:[(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),(0,y.jsx)(B,{children:(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Save changes"})})]})]})},z=i(51691),N=i(55931),M=C.forwardRef((function(e,n){return(0,y.jsx)(N.Z,(0,a.Z)({direction:"up",ref:n},e))}));function R(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1];function o(){r(!1)}return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Slide in alert dialog"}),(0,y.jsxs)(h.Z,{open:i,keepMounted:!0,onClose:o,TransitionComponent:M,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[(0,y.jsx)(Z.Z,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(z.Z,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Agree"})]})]})]})}var V=i(68870),E=i(93006);function U(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1];function o(){r(!1)}return(0,y.jsxs)(V.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Open form dialog"}),(0,y.jsxs)(h.Z,{open:i,onClose:o,"aria-labelledby":"form-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"form-dialog-title",children:"Subscribe"}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(z.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,y.jsx)(E.Z,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})]}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:o,children:"Cancel"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Subscribe"})]})]})]})}var q=i(84395),H=i(94721),_=i(34663),I=i(30418),K=i(63019),Y=C.forwardRef((function(e,n){return(0,y.jsx)(N.Z,(0,a.Z)({direction:"up",ref:n},e))}));function J(){var e=(0,I.Z)(),n=C.useState(!1),i=(0,c.Z)(n,2),r=i[0],o=i[1];function l(){o(!1)}return(0,y.jsxs)(V.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){o(!0)},children:"Open full-screen dialog"}),(0,y.jsxs)(h.Z,{fullScreen:!0,open:r,onClose:l,TransitionComponent:Y,children:[(0,y.jsx)(q.Z,{sx:{position:"relative"},children:(0,y.jsxs)(_.Z,{children:[(0,y.jsx)(D.Z,{edge:"start",color:"inherit",onClick:l,"aria-label":"Close",children:(0,y.jsx)(F.Z,{})}),(0,y.jsx)(K.H6,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),(0,y.jsx)(u.Z,{color:"inherit",onClick:l,children:"save"})]})}),(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(g.ZP,{button:!0,children:(0,y.jsx)(f.Z,{primary:"Phone ringtone",secondary:"Titania"})}),(0,y.jsx)(H.Z,{}),(0,y.jsx)(g.ZP,{button:!0,children:(0,y.jsx)(f.Z,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var Q=i(68096),X=i(30829),$=i(23786),ee=i(58406),ne=i(9955),ie=(0,l.Z)("div")((function(e){var n=e.theme;return{"& form":{display:"flex",margin:"auto",flexDirection:"column",width:"fit-content"},"& .formControl":{marginTop:n.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:n.spacing(1)}}}));function re(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=C.useState(!0),l=(0,c.Z)(o,2),t=l[0],s=l[1],a=C.useState("sm"),d=(0,c.Z)(a,2),p=d[0],g=d[1];function f(){r(!1)}return(0,y.jsxs)(ie,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Open max-width dialog"}),(0,y.jsxs)(h.Z,{open:i,fullWidth:t,maxWidth:p,onClose:f,"aria-labelledby":"max-width-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"max-width-dialog-title",children:"Optional sizes"}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(z.Z,{children:"You can set my maximum width and whether to adapt or not."}),(0,y.jsxs)("form",{noValidate:!0,children:[(0,y.jsxs)(Q.Z,{className:"formControl",children:[(0,y.jsx)(X.Z,{htmlFor:"max-width",children:"maxWidth"}),(0,y.jsxs)(ee.Z,{value:p,onChange:function(e){g(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[(0,y.jsx)($.Z,{value:!1,children:"false"}),(0,y.jsx)($.Z,{value:"xs",children:"xs"}),(0,y.jsx)($.Z,{value:"sm",children:"sm"}),(0,y.jsx)($.Z,{value:"md",children:"md"}),(0,y.jsx)($.Z,{value:"lg",children:"lg"}),(0,y.jsx)($.Z,{value:"xl",children:"xl"})]})]}),(0,y.jsx)(j.Z,{className:"formControlLabel",label:"Full width",control:(0,y.jsx)(ne.Z,{checked:t,onChange:function(e){s(e.target.checked)},value:"fullWidth"})})]})]}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(u.Z,{onClick:f,color:"primary",children:"Close"})})]})]})}var oe=i(95193);function le(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=(0,I.Z)(),l=(0,oe.Z)(o.breakpoints.down("sm"));function t(){r(!1)}return(0,y.jsxs)(V.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Open responsive dialog"}),(0,y.jsxs)(h.Z,{fullScreen:l,open:i,onClose:t,"aria-labelledby":"responsive-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"responsive-dialog-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(z.Z,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:t,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:t,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}function te(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)(V.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open alert dialog"}),(0,y.jsxs)(h.Z,{open:i,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,y.jsx)(Z.Z,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(z.Z,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var se=i(42419),ae=i(40501),ce=i(93044),de=i(50427),ue=i(20653),he=["onClose","selectedValue"],xe=["username@gmail.com","user02@gmail.com"];function me(e){var n=e.onClose,i=e.selectedValue,r=(0,d.Z)(e,he);function o(e){n(e)}return(0,y.jsxs)(h.Z,(0,a.Z)((0,a.Z)({onClose:function(){n(i)},"aria-labelledby":"simple-dialog-title"},r),{},{children:[(0,y.jsx)(Z.Z,{id:"simple-dialog-title",children:"Set backup account"}),(0,y.jsxs)(p.Z,{children:[xe.map((function(e){return(0,y.jsxs)(g.ZP,{button:!0,onClick:function(){return o(e)},children:[(0,y.jsx)(ue.Z,{children:(0,y.jsx)(ce.Z,{sx:{backgroundColor:de.Z[100],color:de.Z[600]},children:(0,y.jsx)(ae.Z,{})})}),(0,y.jsx)(f.Z,{primary:e})]},e)})),(0,y.jsxs)(g.ZP,{button:!0,onClick:function(){return o("addAccount")},children:[(0,y.jsx)(ue.Z,{children:(0,y.jsx)(ce.Z,{children:(0,y.jsx)(se.Z,{})})}),(0,y.jsx)(f.Z,{primary:"add account"})]})]})]}))}function Ze(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=(0,C.useState)("user02@gmail.com"),l=(0,c.Z)(o,2),t=l[0],s=l[1];return(0,y.jsxs)(V.Z,{children:[(0,y.jsxs)(G.Z,{variant:"subtitle1",children:["Selected: ",t]}),(0,y.jsx)("br",{}),(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open simple dialog"}),(0,y.jsx)(me,{selectedValue:t,open:i,onClose:function(e){r(!1),s(e)}})]})}var je=(0,l.Z)("div")((function(e){var n,i=e.theme;return n={margin:"30px"},(0,r.Z)(n,i.breakpoints.down("sm"),{margin:"16px"}),(0,r.Z)(n,"& .breadcrumb",(0,r.Z)({marginBottom:"30px"},i.breakpoints.down("sm"),{marginBottom:"16px"})),n})),pe=function(){return(0,y.jsxs)(je,{children:[(0,y.jsx)(t.Z,{className:"breadcrumb",children:(0,y.jsx)(s.aG,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),(0,y.jsxs)(o.Z,{spacing:3,children:[(0,y.jsx)(s.sF,{title:"simple Dialog",children:(0,y.jsx)(Ze,{})}),(0,y.jsx)(s.sF,{title:"alert dialog",children:(0,y.jsx)(te,{})}),(0,y.jsx)(s.sF,{title:"transition",children:(0,y.jsx)(R,{})}),(0,y.jsx)(s.sF,{title:"form dialog",children:(0,y.jsx)(U,{})}),(0,y.jsx)(s.sF,{title:"customized dialog",children:(0,y.jsx)(L,{})}),(0,y.jsx)(s.sF,{title:"full-screen dialog",children:(0,y.jsx)(J,{})}),(0,y.jsx)(s.sF,{title:"optimized size dialog",children:(0,y.jsx)(re,{})}),(0,y.jsx)(s.sF,{title:"responsive dialog",children:(0,y.jsx)(le,{})}),(0,y.jsx)(s.sF,{title:"confirmation dialog",children:(0,y.jsx)(T,{})})]})]})}}}]);
//# sourceMappingURL=695.7a429780.chunk.js.map