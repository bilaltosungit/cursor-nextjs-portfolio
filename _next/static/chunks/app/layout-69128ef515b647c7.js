(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2258:(e,t,n)=>{Promise.resolve().then(n.bind(n,3647))},3647:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var o=n(5155),r=n(4904),i=n(4364),l=n(3592),s=n(894),a=n(7833),c=n(9987),d=n(2115),h=n(2460),x=n(8661),u=n(4958);function f(){let[e,t]=(0,d.useState)(0),[n,f]=(0,d.useState)(""),{isDarkMode:g,toggleTheme:b}=(0,r.D)(),m=(0,d.useMemo)(()=>["about","skills","experience","projects","contact"],[]);(0,d.useEffect)(()=>{let e=()=>{let e=window.scrollY;if(e+window.innerHeight>=document.documentElement.scrollHeight-50){f("contact"),t(m.indexOf("contact"));return}for(let n of m){let o=document.getElementById(n);if(o){let r=o.offsetTop-100,i=o.offsetHeight;if(e>=r&&e<r+i){f(n),t(m.indexOf(n));break}}}};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[m]);let w=e=>{t(m.indexOf(e));let n=document.getElementById(e);n&&(n.scrollIntoView({behavior:"smooth"}),f(e))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.qC,{component:"nav",sx:{background:g?"rgba(18, 18, 18, 0.8)":"rgba(255, 255, 255, 0.8)",borderBottom:g?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.1)"},children:(0,o.jsx)(i.A,{maxWidth:"xl",children:(0,o.jsxs)(u.vT,{children:[(0,o.jsx)(u.uq,{children:["About","Skills","Experience","Projects","Contact"].map(e=>(0,o.jsx)(u.ir,{onClick:()=>w(e.toLowerCase()),isDarkMode:g,sx:{color:n===e.toLowerCase()?g?"#4ECDC4":"#FF3366":g?"#ffffff":"#333",borderBottom:n===e.toLowerCase()?"2px solid ".concat(g?"#4ECDC4":"#FF3366"):"none"},children:e},e))}),(0,o.jsx)(l.A,{sx:{display:"flex",alignItems:"center",gap:1},children:(0,o.jsx)(s.A,{onClick:b,sx:{color:g?"#FFD93D":"#333",transition:"all 0.3s ease","&:hover":{transform:"rotate(180deg)"}},children:g?(0,o.jsx)(h.A,{}):(0,o.jsx)(x.A,{})})}),(0,o.jsx)(l.A,{sx:{display:{xs:"flex",md:"none"},width:"100%",alignItems:"center",gap:1,overflow:"hidden"},children:(0,o.jsx)(l.A,{sx:{flex:1,width:"100%",overflowX:"auto",".MuiTabs-root":{minHeight:"48px"},".MuiTabs-scroller":{overflowX:"auto !important","::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none",WebkitOverflowScrolling:"touch",touchAction:"pan-x"}},children:(0,o.jsx)(a.A,{value:e,onChange:(e,n)=>{t(n);let o=m[n],r=document.getElementById(o);r&&(r.scrollIntoView({behavior:"smooth"}),f(o))},variant:"scrollable",scrollButtons:!1,"aria-label":"nav tabs",sx:{"& .MuiTab-root":{color:g?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)",textTransform:"none",fontWeight:500,fontSize:"0.9rem",minWidth:"auto",padding:"12px 16px",minHeight:"48px",flexShrink:0},"& .Mui-selected":{color:g?"#4ECDC4":"#FF3366"},"& .MuiTabs-indicator":{backgroundColor:g?"#4ECDC4":"#FF3366"}},children:["About","Skills","Experience","Projects","Contact"].map(e=>(0,o.jsx)(c.A,{label:e},e))})})})]})})})})}function g(){let[e,t]=(0,d.useState)(0),{isDarkMode:n}=(0,r.D)();return(0,d.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;t(window.scrollY/e*100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsx)(l.A,{sx:{position:"fixed",top:0,left:0,right:0,height:"3px",zIndex:2e3,background:n?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"},children:(0,o.jsx)(l.A,{sx:{height:"100%",width:"".concat(e,"%"),background:n?"linear-gradient(to right, #4ECDC4, #45B7D1)":"linear-gradient(to right, #2563eb, #db2777)",transition:"width 0.1s ease-out"}})})}var b=n(8173),m=n.n(b),w=n(266),p=n.n(w);function j(e){let{children:t}=e;return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsx)("head",{}),(0,o.jsx)("body",{className:p().className,style:{margin:0,padding:0},children:(0,o.jsxs)(r.N,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(f,{}),t,(0,o.jsx)(m(),{href:"https://cursor.sh",target:"_blank",style:{textDecoration:"none"},children:(0,o.jsx)(u.Bs,{children:(0,o.jsx)(u.Pf,{children:"⚡ Built with Cursor"})})})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[487,742,128,81,441,517,358],()=>t(2258)),_N_E=e.O()}]);