"use strict";(self.webpackChunkjenil_keval_rikin_template=self.webpackChunkjenil_keval_rikin_template||[]).push([[3237],{75522:function(n,t,e){e.d(t,{Z:function(){return M}});var i=e(30168),a=e(63366),r=e(87462),o=e(72791),s=e(28182),h=(e(52007),e(52554)),l=e(80163),u=e(18545),c=e(79476),d=e(94695),m=e(80085),p=e(34923);function f(n){return(0,p.Z)("MuiSkeleton",n)}(0,e(50782).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,g,b,w,k,y,Z,C,x=e(80184),R=["animation","className","component","height","style","variant","width"],_=(0,h.F4)(k||(k=v||(v=(0,i.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=(0,h.F4)(y||(y=g||(g=(0,i.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),S=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.styleProps;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.styleProps,i=(0,u.Wy)(t.shape.borderRadius)||"px",a=(0,u.YL)(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:(0,c.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(i,"/").concat(Math.round(a/.6*10)/10).concat(i),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.styleProps.animation&&(0,h.iv)(Z||(Z=b||(b=(0,i.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),_)}),(function(n){var t=n.styleProps,e=n.theme;return"wave"===t.animation&&(0,h.iv)(C||(C=w||(w=(0,i.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,e.palette.action.hover)})),M=o.forwardRef((function(n,t){var e=(0,m.Z)({props:n,name:"MuiSkeleton"}),i=e.animation,o=void 0===i?"pulse":i,h=e.className,u=e.component,c=void 0===u?"span":u,d=e.height,p=e.style,v=e.variant,g=void 0===v?"text":v,b=e.width,w=(0,a.Z)(e,R),k=(0,r.Z)({},e,{animation:o,component:c,variant:g,hasChildren:Boolean(w.children)}),y=function(n){var t=n.classes,e=n.variant,i=n.animation,a=n.hasChildren,r=n.width,o=n.height,s={root:["root",e,i,a&&"withChildren",a&&!r&&"fitContent",a&&!o&&"heightAuto"]};return(0,l.Z)(s,f,t)}(k);return(0,x.jsx)(S,(0,r.Z)({as:c,ref:t,className:(0,s.Z)(y.root,h),styleProps:k},w,{style:(0,r.Z)({width:b,height:d},p)}))}))},96248:function(n,t,e){e.d(t,{Z:function(){return o}});var i=e(70885),a=e(72791),r=0;function o(n){var t=a.useState(n),e=(0,i.Z)(t,2),o=e[0],s=e[1],h=n||o;return a.useEffect((function(){null==o&&s("mui-".concat(r+=1))}),[o]),h}}}]);
//# sourceMappingURL=3237.59b51780.chunk.js.map