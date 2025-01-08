"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{4904:(e,r,t)=>{t.d(r,{D:()=>l,ThemeProvider:()=>i});var a=t(5155),o=t(2115);let n=(0,o.createContext)();function i(e){let{children:r}=e,[t,i]=(0,o.useState)(!1),[l,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{let e=localStorage.getItem("theme");e?i("dark"===e):i(window.matchMedia("(prefers-color-scheme: dark)").matches),d(!0)},[]),l)?(0,a.jsx)(n.Provider,{value:{isDarkMode:t,toggleTheme:()=>{i(e=>{let r=!e;return localStorage.setItem("theme",r?"dark":"light"),r})}},children:r}):(0,a.jsx)(n.Provider,{value:{isDarkMode:!1,toggleTheme:()=>{}},children:(0,a.jsx)("div",{style:{visibility:"hidden"},children:r})})}function l(){let e=(0,o.useContext)(n);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},4958:(e,r,t)=>{t.d(r,{Ae:()=>N,CursorBadgeContainer:()=>L,CursorBadgeText:()=>R,Fr:()=>H,HF:()=>E,IF:()=>D,KB:()=>S,Mj:()=>W,NS:()=>C,Np:()=>z,PM:()=>w,S0:()=>v,X8:()=>h,YC:()=>M,Zj:()=>T,cl:()=>I,cy:()=>j,dv:()=>F,ee:()=>P,iH:()=>k,ir:()=>u,qC:()=>m,uq:()=>b,vT:()=>c,vy:()=>y,yR:()=>A,yk:()=>Y,zn:()=>B});var a=t(9142),o=t(2282),n=t(615),i=t(4364),l=t(5417),d=t(810),g=t(894),p=t(6106),s=t(9234),x=t(3592);let f=e=>"isDarkMode"!==e,c=(0,a.Ay)("nav",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"8px 0"}}),b=(0,a.Ay)("div")(e=>{let{theme:r}=e;return{display:"none",gap:"24px",alignItems:"center",[r.breakpoints.up("md")]:{display:"flex"}}}),u=(0,a.Ay)(o.A,{shouldForwardProp:f})(e=>{let{theme:r,isDarkMode:t}=e;return{color:t?"#ffffff":"#333",fontWeight:500,padding:"0 16px","&:hover":{backgroundColor:t?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}});(0,a.Ay)(n.Ay)({cursor:"pointer",justifyContent:"flex-end",textAlign:"right",paddingRight:"24px","&:hover":{background:"linear-gradient(90deg, rgba(255, 51, 102, 0.1), rgba(78, 205, 196, 0.1))"}}),(0,a.Ay)("div",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"16px",display:"flex",justifyContent:"flex-end",alignItems:"center",borderBottom:r?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.1)",background:r?"rgba(30, 30, 30, 0.95)":"rgba(255, 255, 255, 0.95)"}}),(0,a.Ay)("section",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{background:r?"#121212":"linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)",backgroundSize:r?"auto":"400% 400%",animation:r?"none":"gradient 15s ease infinite",color:"white",padding:"100px 0 80px",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:r?"none":"radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)"}}}),(0,a.Ay)(i.A)({maxWidth:"xl"}),(0,a.Ay)(l.Ay)({alignItems:"center",padding:"0 16px"}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{fontSize:"4rem",fontWeight:700,marginBottom:"16px",background:r?"linear-gradient(-45deg, #4ECDC4, #45B7D1, #90CAF9, #64B5F6)":"linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)",backgroundSize:"300% 300%",animation:"gradient 5s ease infinite",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:r?"0 0 30px rgba(78, 205, 196, 0.3)":"none"}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{fontSize:"2.5rem",marginBottom:"24px",color:r?"#90CAF9":"#1565C0",fontWeight:500}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{fontSize:"1.2rem",marginBottom:"32px",maxWidth:"800px",lineHeight:1.6,color:r?"rgba(255, 255, 255, 0.87)":"inherit"}}),(0,a.Ay)("div")({display:"flex",gap:"32px",flexWrap:"wrap",marginTop:"32px"});let m=(0,a.Ay)("nav",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{position:"fixed",width:"100%",top:0,left:0,background:r?"rgba(18, 18, 18, 0.8)":"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(20px)",zIndex:1100,boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",borderBottom:r?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.1)"}});(0,a.Ay)(g.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{display:"flex",background:r?"linear-gradient(-45deg, #1E88E5, #1565C0)":"linear-gradient(-45deg, #FF3366, #FF6B6B)",color:"white","@media (min-width: 900px)":{display:"none"},"&:hover":{background:r?"linear-gradient(-45deg, #1565C0, #1E88E5)":"linear-gradient(-45deg, #FF6B6B, #FF3366)"}}});let A=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#4ECDC4":"#1a237e",fontSize:"36px",fontWeight:600,marginBottom:"1.5rem",transition:"color 0.3s ease"}});(0,a.Ay)(g.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#90CAF9":"#1E88E5",padding:"12px","&:hover":{color:r?"#64B5F6":"#1565C0"},transition:"all 0.3s ease"}});let h=(0,a.Ay)("section",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"80px 0",background:r?"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)":"linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)",position:"relative",overflow:"hidden"}}),F=(0,a.Ay)(p.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"1.5rem",background:r?"rgba(30, 30, 30, 0.9)":"rgba(255, 255, 255, 0.9)",transition:"all 0.3s ease","@media (max-width: 900px)":{display:"table-cell",width:"100%"},"&:hover":{transform:"translateY(-4px)",boxShadow:r?"0 8px 20px rgba(255,255,255,0.08)":"0 8px 20px rgba(0,0,0,0.08)"}}}),y=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{marginBottom:"1rem",color:r?"#fff":"#1a237e",fontSize:"24px",fontWeight:600}}),k=(0,a.Ay)("div",{shouldForwardProp:e=>!["isDarkMode","theme"].includes(e)})({display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px"}),C=(0,a.Ay)(s.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{margin:"4px",background:r?"linear-gradient(45deg, #1E88E5, #64B5F6)":"linear-gradient(45deg, #FF3366, #FF6B6B)",color:"white","&:hover":{background:r?"linear-gradient(45deg, #64B5F6, #1E88E5)":"linear-gradient(45deg, #FF6B6B, #FF3366)",transform:"translateY(-2px)"},transition:"all 0.3s ease",cursor:"default"}}),B=(0,a.Ay)(s.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{margin:"4px",backgroundColor:r?"#1E88E5":"#0d47a1",color:"white","&:hover":{backgroundColor:r?"#1565C0":"#1a237e",transform:"translateY(-2px)"},transition:"all 0.3s ease",cursor:"default"}});(0,a.Ay)("div",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"120px 0",background:r?"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)":"linear-gradient(135deg, #ffffff 0%, #F8F9FA 100%)"}}),(0,a.Ay)(p.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"40px",marginBottom:"32px",transition:"all 0.3s ease",background:r?"rgba(30, 30, 30, 0.9)":"rgba(255, 255, 255, 0.9)",borderLeft:"4px solid #4ECDC4",color:r?"#ffffff":"inherit","&:hover":{transform:"translateY(-4px)",borderLeft:"4px solid #FF3366",boxShadow:r?"0 8px 30px rgba(255,255,255,0.12)":"0 8px 30px rgba(0,0,0,0.12)"}}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#fff":"#1a237e",marginBottom:"8px",fontWeight:600}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#90caf9":"#0d47a1",marginBottom:"8px"}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",marginBottom:"16px"}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{marginBottom:"16px",color:r?"rgba(255, 255, 255, 0.87)":"inherit"}}),(0,a.Ay)(x.A,{shouldForwardProp:e=>!["isDarkMode","theme"].includes(e)})({display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"}),(0,a.Ay)(s.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{backgroundColor:r?"#1E88E5":"#e3f2fd",color:r?"#fff":"#1a237e","&:hover":{backgroundColor:r?"#1565C0":"#1a237e",color:"#fff",transform:"translateY(-2px)"},transition:"all 0.3s ease"}}),(0,a.Ay)("div",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"120px 0",background:r?"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)":"linear-gradient(135deg, #E3F2FD 0%, #F5F5F5 50%, #E3F2FD 100%)",position:"relative",overflow:"hidden"}}),(0,a.Ay)(p.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"40px",height:"100%",minHeight:"300px",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"16px",background:r?"rgba(30, 30, 30, 0.9)":"rgba(255, 255, 255, 0.9)",borderLeft:"4px solid #4ECDC4",transition:"all 0.3s ease","&:hover":{transform:"translateY(-4px)",borderLeft:"4px solid #FF3366",boxShadow:r?"0 8px 30px rgba(78, 205, 196, 0.1)":"0 8px 30px rgba(0,0,0,0.12)"}}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#fff":"#1a237e",marginBottom:"8px",fontSize:"36px",fontWeight:600}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",marginBottom:"16px"}}),(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"rgba(255, 255, 255, 0.87)":"inherit",marginBottom:"16px",lineHeight:1.6,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",textOverflow:"ellipsis"}}),(0,a.Ay)(s.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{backgroundColor:r?"#1E88E5":"#e3f2fd",color:r?"#fff":"#1a237e",margin:"4px","&:hover":{backgroundColor:r?"#1565C0":"#1a237e",color:"#fff",transform:"translateY(-2px)"},transition:"all 0.3s ease"}});let v=(0,a.Ay)("section",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"80px 0",background:r?"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)":"linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)"}}),w=(0,a.Ay)(p.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"24px",marginBottom:"24px",background:r?"rgba(30, 30, 30, 0.8)":"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)",borderRadius:"8px",border:r?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease","&:hover":{transform:"translateY(-4px)",boxShadow:r?"0 8px 30px rgba(255,255,255,0.12)":"0 8px 30px rgba(0,0,0,0.12)"}}}),E=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#fff":"#1a237e",marginBottom:"8px",fontSize:"24px",fontWeight:600}}),S=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#90CAF9":"#1565c0",marginBottom:"8px",fontSize:"24px",fontWeight:500}}),D=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"rgba(255, 255, 255, 0.7)":"text.secondary",fontSize:"0.9rem"}}),W=(0,a.Ay)(p.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"24px",marginBottom:"24px",background:r?"rgba(30, 30, 30, 0.8)":"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)",borderRadius:"8px",border:r?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease","&:hover":{transform:"translateY(-4px)",boxShadow:r?"0 8px 30px rgba(255,255,255,0.12)":"0 8px 30px rgba(0,0,0,0.12)",background:r?"rgba(40, 40, 40, 0.9)":"rgba(255, 255, 255, 0.9)"}}}),z=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#fff":"#1a237e",marginBottom:"12px",fontSize:"1.1rem",fontWeight:600}}),I=(0,a.Ay)(s.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{margin:"4px",background:r?"linear-gradient(45deg, #1E88E5, #1565C0)":"linear-gradient(45deg, #FF3366, #FF6B6B)",color:"white","&:hover":{background:r?"linear-gradient(45deg, #1565C0, #1E88E5)":"linear-gradient(45deg, #FF6B6B, #FF3366)",transform:"translateY(-2px)"},transition:"all 0.3s ease"}}),Y=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"rgba(255, 255, 255, 0.87)":"text.secondary",marginBottom:"8px"}}),j=(0,a.Ay)("section",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{padding:"80px 0",background:r?"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)":"linear-gradient(135deg, #2563eb 0%, #db2777 100%)",color:"white",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:r?"radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)":"radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"}}}),T=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{fontSize:"36px",fontWeight:600,marginBottom:"1.5rem",textAlign:"center",color:r?"#4ECDC4":"#ffffff"}}),M=(0,a.Ay)(x.A)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"3rem",position:"relative",zIndex:1}),P=(0,a.Ay)(x.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease"}}),H=(0,a.Ay)("a",{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{color:r?"#90CAF9":"#ffffff",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease","&:hover":{transform:"translateY(-4px)",color:r?"#64B5F6":"#e0e0e0"}}});(0,a.Ay)(o.A)({color:"white",minWidth:"auto",padding:"8px","&:hover":{color:"#FFD93D",transform:"translateY(-2px)",backgroundColor:"transparent"},transition:"all 0.3s ease"});let L=(0,a.Ay)(x.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{position:"fixed",bottom:20,right:20,zIndex:1e3,padding:"8px 16px",display:"flex",alignItems:"center",gap:"8px",background:r?"#1a1a1a":"linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)",backgroundSize:"300% 300%",animation:r?"none":"gradient 5s ease infinite",color:r?"#90CAF9":"white",borderRadius:"20px",cursor:"pointer",transition:"transform 0.3s ease, box-shadow 0.3s ease",backdropFilter:"blur(10px)",boxShadow:r?"0 4px 15px rgba(255,255,255,0.05)":"0 4px 15px rgba(0,0,0,0.1)",border:r?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(255,255,255,0.2)",textDecoration:"none","&:hover":{transform:"translateY(-2px)",boxShadow:r?"0 8px 30px rgba(255,255,255,0.1)":"0 8px 30px rgba(0,0,0,0.2)",border:r?"1px solid rgba(255,255,255,0.2)":"1px solid rgba(255,255,255,0.3)"}}}),R=(0,a.Ay)(d.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{fontWeight:500,color:r?"#90CAF9":"white",display:"flex",alignItems:"center",gap:"4px",fontSize:"0.875rem"}}),N=(0,a.Ay)(g.A,{shouldForwardProp:f})(e=>{let{isDarkMode:r}=e;return{position:"fixed",bottom:80,right:20,zIndex:1e3,background:r?"#1a1a1a":"#fff",color:r?"#90CAF9":"#1E88E5",border:r?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(0,0,0,0.1)","&:hover":{background:r?"#2c2c2c":"#f5f5f5",transform:"translateY(-2px)"},transition:"all 0.3s ease"}})}}]);