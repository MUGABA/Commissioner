(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[324],{45649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(28610)},56125:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(4942),o=t(63366),i=t(87462),u=t(72791),a=t(28182),c=t(26752),s=t(94419),l=t(66934),d=t(31402),f=t(81314),p=t(4999),v=t(13967),m=t(42071),h=t(75878),Z=t(21217);function g(e){return(0,Z.Z)("MuiCollapse",e)}(0,h.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var y=t(80184),w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===t.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})})),E=(0,l.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,n){return n.wrapper}})((function(e){var n=e.ownerState;return(0,i.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),b=(0,l.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,n){return n.wrapperInner}})((function(e){var n=e.ownerState;return(0,i.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),S=u.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCollapse"}),l=t.addEndListener,h=t.children,Z=t.className,S=t.collapsedSize,k=void 0===S?"0px":S,C=t.component,R=t.easing,M=t.in,P=t.onEnter,j=t.onEntered,z=t.onEntering,N=t.onExit,I=t.onExited,T=t.onExiting,_=t.orientation,D=void 0===_?"vertical":_,F=t.style,A=t.timeout,O=void 0===A?f.x9.standard:A,W=t.TransitionComponent,H=void 0===W?c.ZP:W,L=(0,o.Z)(t,w),B=(0,i.Z)({},t,{orientation:D,collapsedSize:k}),$=function(e){var n=e.orientation,t=e.classes,r={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,s.Z)(r,g,t)}(B),V=(0,v.Z)(),q=u.useRef(),G=u.useRef(null),J=u.useRef(),K="number"===typeof k?"".concat(k,"px"):k,Q="horizontal"===D,U=Q?"width":"height";u.useEffect((function(){return function(){clearTimeout(q.current)}}),[]);var X=u.useRef(null),Y=(0,m.Z)(n,X),ee=function(e){return function(n){if(e){var t=X.current;void 0===n?e(t):e(t,n)}}},ne=function(){return G.current?G.current[Q?"clientWidth":"clientHeight"]:0},te=ee((function(e,n){G.current&&Q&&(G.current.style.position="absolute"),e.style[U]=K,P&&P(e,n)})),re=ee((function(e,n){var t=ne();G.current&&Q&&(G.current.style.position="");var r=(0,p.C)({style:F,timeout:O,easing:R},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===O){var u=V.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(u,"ms"),J.current=u}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[U]="".concat(t,"px"),e.style.transitionTimingFunction=i,z&&z(e,n)})),oe=ee((function(e,n){e.style[U]="auto",j&&j(e,n)})),ie=ee((function(e){e.style[U]="".concat(ne(),"px"),N&&N(e)})),ue=ee(I),ae=ee((function(e){var n=ne(),t=(0,p.C)({style:F,timeout:O,easing:R},{mode:"exit"}),r=t.duration,o=t.easing;if("auto"===O){var i=V.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[U]=K,e.style.transitionTimingFunction=o,T&&T(e)}));return(0,y.jsx)(H,(0,i.Z)({in:M,onEnter:te,onEntered:oe,onEntering:re,onExit:ie,onExited:ue,onExiting:ae,addEndListener:function(e){"auto"===O&&(q.current=setTimeout(e,J.current||0)),l&&l(X.current,e)},nodeRef:X,timeout:"auto"===O?null:O},L,{children:function(e,n){return(0,y.jsx)(x,(0,i.Z)({as:C,className:(0,a.Z)($.root,Z,{entered:$.entered,exited:!M&&"0px"===K&&$.hidden}[e]),style:(0,i.Z)((0,r.Z)({},Q?"minWidth":"minHeight",K),F),ownerState:(0,i.Z)({},B,{state:e}),ref:Y},n,{children:(0,y.jsx)(E,{ownerState:(0,i.Z)({},B,{state:e}),className:$.wrapper,ref:G,children:(0,y.jsx)(b,{ownerState:(0,i.Z)({},B,{state:e}),className:$.wrapperInner,children:h})})}))}}))}));S.muiSupportAuto=!0;var k=S},36314:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r=t(4942),o=t(63366),i=t(87462),u=t(72791),a=t(28182),c=t(82466),s=t(94419),l=t(21217),d=t(93457),f=t(86083),p=t(78519),v=t(85080),m=t(51184),h=t(45682),Z=t(80184),g=["component","direction","spacing","divider","children","className"],y=(0,v.Z)(),w=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function x(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:y})}function E(e,n){var t=u.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(u.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var b=function(e){var n=e.ownerState,t=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:t},(0,m.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var u=(0,h.hB)(t),a=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),s=(0,m.P$)({values:n.direction,base:a}),l=(0,m.P$)({values:n.spacing,base:a});"object"===typeof s&&Object.keys(s).forEach((function(e,n,t){if(!s[e]){var r=n>0?s[t[n-1]]:"column";s[e]=r}}));o=(0,c.Z)(o,(0,m.k9)({theme:t},l,(function(e,t){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=t?s[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,h.NA)(u,e))};var o})))}return o=(0,m.dt)(t.breakpoints,o)};var S=t(66934),k=t(31402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?w:n,r=e.useThemeProps,c=void 0===r?x:r,d=e.componentName,f=void 0===d?"MuiStack":d,v=t(b),m=u.forwardRef((function(e,n){var t=c(e),r=(0,p.Z)(t),u=r.component,d=void 0===u?"div":u,m=r.direction,h=void 0===m?"column":m,y=r.spacing,w=void 0===y?0:y,x=r.divider,b=r.children,S=r.className,k=(0,o.Z)(r,g),C={direction:h,spacing:w},R=(0,s.Z)({root:["root"]},(function(e){return(0,l.Z)(f,e)}),{});return(0,Z.jsx)(v,(0,i.Z)({as:d,ownerState:C,ref:n,className:(0,a.Z)(R.root,S)},k,{children:x?E(b,x):b}))}));return m}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiStack"})}}),R=C},31260:function(e,n,t){"use strict";var r=t(78949);n.Z=r.Z},28610:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return u.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return w.Z}});var r=t(55902),o=t(14036),i=t(31260),u=t(74223),a=t(83199);var c=function(e,n){return function(){return null}},s=t(19103),l=t(98301),d=t(17602);t(87462);var f=function(e,n){return function(){return null}},p=t(62971).Z,v=t(40162),m=t(67384);var h=function(e,n,t,r,o){return null},Z=t(98278),g=t(89683),y=t(42071),w=t(68221),x={configure:function(e){r.Z.configure(e)}}},19103:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(72791);var o=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},98278:function(e,n,t){"use strict";var r=t(58959);n.Z=r.Z},67384:function(e,n,t){"use strict";var r=t(96248);n.Z=r.Z},58959:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(29439),o=t(72791);function i(e){var n=e.controlled,t=e.default,i=(e.name,e.state,o.useRef(void 0!==n).current),u=o.useState(t),a=(0,r.Z)(u,2),c=a[0],s=a[1];return[i?n:c,o.useCallback((function(e){i||s(e)}),[])]}},96248:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return c}});var o=t(29439),i=t(72791),u=0;var a=(r||(r=t.t(i,2))).useId;function c(e){if(void 0!==a){var n=a();return null!=e?e:n}return function(e){var n=i.useState(e),t=(0,o.Z)(n,2),r=t[0],a=t[1],c=e||r;return i.useEffect((function(){null==r&&a("mui-".concat(u+=1))}),[r]),c}(e)}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=324.2fe42288.chunk.js.map