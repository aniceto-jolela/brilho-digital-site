(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{1496:function(e,t,n){"use strict";n.d(t,{ZP:function(){return F},FO:function(){return v},Dz:function(){return Z}});var o=n(7462),r=n(3366),s=n(8883),a=n(6500),c=n(8320);const i=["variant"];function l(e){return 0===e.length}function u(e){const{variant:t}=e,n=(0,r.Z)(e,i);let o=t||"";return Object.keys(n).sort().forEach((t=>{o+="color"===t?l(o)?e[t]:(0,c.Z)(e[t]):`${l(o)?t:(0,c.Z)(t)}${(0,c.Z)(e[t].toString())}`})),o}var m=n(6523);const d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],p=["theme"],h=["theme"];function _(e){return 0===Object.keys(e).length}function f(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const g=(0,a.Z)();var x=n(247);const v=e=>f(e)&&"classes"!==e,Z=f,j=function(e={}){const{defaultTheme:t=g,rootShouldForwardProp:n=f,slotShouldForwardProp:a=f,styleFunctionSx:c=m.Z}=e;return(e,i={})=>{const{name:l,slot:m,skipVariantsResolver:g,skipSx:x,overridesResolver:v}=i,Z=(0,r.Z)(i,d),j=void 0!==g?g:m&&"Root"!==m||!1,F=x||!1;let w=f;"Root"===m?w=n:m&&(w=a);const b=(0,s.ZP)(e,(0,o.Z)({shouldForwardProp:w,label:undefined},Z)),L=(e,...n)=>{const s=n?n.map((e=>"function"===typeof e&&e.__emotion_real!==e?n=>{let{theme:s}=n,a=(0,r.Z)(n,p);return e((0,o.Z)({theme:_(s)?t:s},a))}:e)):[];let a=e;l&&v&&s.push((e=>{const n=_(e.theme)?t:e.theme,r=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(l,n);if(r){const t={};return Object.entries(r).forEach((([r,s])=>{t[r]="function"===typeof s?s((0,o.Z)({},e,{theme:n})):s})),v(e,t)}return null})),l&&!j&&s.push((e=>{const n=_(e.theme)?t:e.theme;return((e,t,n,o)=>{var r,s;const{ownerState:a={}}=e,c=[],i=null==n||null==(r=n.components)||null==(s=r[o])?void 0:s.variants;return i&&i.forEach((n=>{let o=!0;Object.keys(n.props).forEach((t=>{a[t]!==n.props[t]&&e[t]!==n.props[t]&&(o=!1)})),o&&c.push(t[u(n.props)])})),c})(e,((e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const o={};return n.forEach((e=>{const t=u(e.props);o[t]=e.style})),o})(l,n),n,l)})),F||s.push((e=>{const n=_(e.theme)?t:e.theme;return c((0,o.Z)({},e,{theme:n}))}));const i=s.length-n.length;if(Array.isArray(e)&&i>0){const t=new Array(i).fill("");a=[...e,...t],a.raw=[...e.raw,...t]}else"function"===typeof e&&e.__emotion_real!==e&&(a=n=>{let{theme:s}=n,a=(0,r.Z)(n,h);return e((0,o.Z)({theme:_(s)?t:s},a))});return b(a,...s)};return b.withConfig&&(L.withConfig=b.withConfig),L}}({defaultTheme:x.Z,rootShouldForwardProp:v});var F=j},4780:function(e,t,n){"use strict";function o(e,t,n){const o={};return Object.keys(e).forEach((r=>{o[r]=e[r].reduce(((e,o)=>(o&&(n&&n[o]&&e.push(n[o]),e.push(t(o))),e)),[]).join(" ")})),o}n.d(t,{Z:function(){return o}})},4867:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(7078);const r={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function s(e,t,n="Mui"){const s=r[t];return s?`${n}-${s}`:`${o.Z.generate(e)}-${t}`}},1588:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(4867);function r(e,t,n="Mui"){const r={};return t.forEach((t=>{r[t]=(0,o.Z)(e,t,n)})),r}},9684:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/components/designer/templants",function(){return n(2008)}])},2008:function(e,t,n){"use strict";n.r(t),n.d(t,{Templants:function(){return u}});var o=n(5893),r=n(7357),s=n(5861),a=n(9486),c=n.n(a),i=n(9661),l=[{id:0,src:"/img/designers/template/1.jpg"},{id:1,src:"/img/designers/flyer/1.jpg"}],u=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.Z,{sx:{flexGrow:1,marginTop:15},children:[(0,o.jsxs)(r.Z,{sx:{fontSize:500,alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,o.jsx)(r.Z,{sx:{marginBottom:-10},className:c().templantsLetraTop,children:(0,o.jsx)(s.Z,{sx:{marginLeft:25},children:"Flyer"})}),(0,o.jsxs)(r.Z,{sx:{transform:"rotate(-90deg)",bgcolor:"indigo",width:0,marginLeft:1,MozMarginStart:60,zIndex:1},children:[" ",(0,o.jsx)("span",{className:c().marca,children:"B"})," "]}),(0,o.jsx)(r.Z,{sx:{transform:"rotate(90deg)",bgcolor:"lightblue",width:0,marginTop:-139,marginLeft:-2,MozMarginEnd:50},children:(0,o.jsx)("span",{className:"".concat(c().marca," ").concat(c().templants),children:"D"})}),(0,o.jsx)(r.Z,{sx:{mt:-20,ml:-58},className:c().templantsCirculo,children:(0,o.jsx)(i.Z,{sx:{bgcolor:"#f07e0d62",width:120,height:120},children:" "})})]}),(0,o.jsxs)(r.Z,{sx:{marginTop:-34,marginBottom:30,textAlign:"center"},className:c().templantsConteudo,children:[(0,o.jsx)(s.Z,{sx:{marginRight:25,bgColor:"red",marginBottom:5},children:"Template"}),(0,o.jsx)(r.Z,{component:"img",src:l[0].src,sx:{width:118,height:118,marginLeft:-1}}),(0,o.jsx)(r.Z,{component:"img",src:l[1].src,sx:{width:118,height:118,marginLeft:5}})]})]})})}},9486:function(e){e.exports={marca:"FontInter_marca__hNdvM",templants:"FontInter_templants__ed5xi",templantsConteudo:"FontInter_templantsConteudo__Rlg3r",templantsLetraTop:"FontInter_templantsLetraTop__ob2Do",templantsCirculo:"FontInter_templantsCirculo__tvt16",marcas:"FontInter_marcas__Zld_M",marcasConteudo:"FontInter_marcasConteudo__Ru4RC",marcasLetaTop:"FontInter_marcasLetaTop__0gBbd",marcasCirculo:"FontInter_marcasCirculo__XJjP_",animacao:"FontInter_animacao__0kyfE",animacaoConteudo:"FontInter_animacaoConteudo__B_huO",animacaoLetraTop:"FontInter_animacaoLetraTop__SE5Ep",animacaoLetraTopMobile:"FontInter_animacaoLetraTopMobile__aNod7",cvMdSelecionado:"FontInter_cvMdSelecionado__UKJPq",cvLgSelecionado:"FontInter_cvLgSelecionado__Beoj_",cvLegenda:"FontInter_cvLegenda__u49aq",cvLegendaRight:"FontInter_cvLegendaRight__k4jpD"}}},function(e){e.O(0,[357,178,774,888,179],(function(){return t=9684,e(e.s=t);var t}));var t=e.O();_N_E=t}]);