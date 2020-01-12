(this["webpackJsonpchrono-cube"]=this["webpackJsonpchrono-cube"]||[]).push([[0],{115:function(e){e.exports=JSON.parse('[{"username":"eug-vs","role":"Back-end, front-end, management"},{"username":"asketonim","role":"Front-end, management"}]')},116:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),o=a.n(r),c=a(9),l=a.n(c),i=a(164),u=a(163),s=(a(92),a(78)),m=Object(s.a)({palette:{type:"dark",primary:{main:"#0a0909"},secondary:{main:"#ff7315"},background:{default:"#232020",paper:"#0f0e0e",elevation:"rgba(255, 255, 255, 0.04)"},text:{primary:"#f4f4f4",secondary:"#6f6666"}}}),d=a(148),p=a(149),h=a(36),g=a(166),f=a(150),E=a(66),v=a(44),b=a.n(v),y=a(69),w=a.n(y),j=a(70),k=a.n(j),O=a(71),S=a.n(O),C=Object(E.a)((function(e){return{logo:{color:e.palette.secondary.main,margin:e.spacing(0,3,0,3)},tab:{"& .MuiTab-wrapper":{padding:e.spacing(2),flexDirection:"row","& svg":{marginRight:e.spacing(1),marginBottom:"0 !important"}}}}})),N=function(e){var t=e.page,a=e.setPage,n=C(),r={app:o.a.createElement(b.a,null),profile:o.a.createElement(w.a,null),scoreboard:o.a.createElement(k.a,null),contribute:o.a.createElement(S.a,null)};return o.a.createElement(d.a,{position:"sticky"},o.a.createElement(p.a,null,o.a.createElement(h.a,{variant:"h4",className:n.logo},"ChronoCube"),o.a.createElement(g.a,{onChange:function(e,t){a(t)},value:t},Object.keys(r).map((function(e){return o.a.createElement(f.a,{label:e,icon:r[e],value:e,className:n.tab,key:e})})))))},I=a(47),T=a.n(I),x="https://eugvs.pythonanywhere.com/api/",R=function(e){return T.a.get(x+e)},z=function(e,t){return T.a.post(x+e,t)},D=a(151),L=a(72),M=a(82),P=Object(E.a)((function(e){return{surface:{position:"absolute",display:"flex",flexDirection:"column",background:e.palette.background.elevation,overflowY:"auto",scrollbarColor:"".concat(e.palette.primary.dark," ").concat(e.palette.primary.light)}}})),B=function(e){var t=e.size,a=e.position,n=e.children,r=P();return o.a.createElement(M.a,{elevation:3,style:Object(L.a)({},t,{},a),className:r.surface},n)},U=Object(E.a)((function(e){return{header:{padding:e.spacing(1,0,1,2),background:e.palette.background.elevation}}})),Y=function(e){var t=e.type,a=e.name,n=e.children,r=U(),c={height:"85vh"},l={bottom:"3vh"};return"primary"===t?(c.width="63vw",l.left="2vw"):"secondary"===t?(c.width="31vw",l.right="2vw"):"mono"===t&&(l.left="2vw",l.right="2vw"),o.a.createElement(B,{size:c,position:l},a&&o.a.createElement("div",null,o.a.createElement(h.a,{variant:"h5",className:r.header},a),o.a.createElement(D.a,null)),n)},W=Object(E.a)((function(e){return{content:{padding:e.spacing(0,2,1,2),marginBottom:e.spacing(1),"& a":{color:e.palette.secondary.light},"& .MuiButton-root":{color:e.palette.background.paper,margin:e.spacing(1,2,2,0),fontWeight:"bold"}}}})),A=function(e){var t=e.sectionName,a=e.children,n=W();return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{variant:"h4"},t),o.a.createElement(D.a,{variant:"middle"}),o.a.createElement(h.a,{component:"div",className:n.content},a))},F=Object(E.a)((function(e){return{root:{textAlign:"center",padding:e.spacing(5),background:e.palette.primary.main,marginTop:e.spacing(10)}}})),V=function(e){var t="",a=Math.floor(e/6e4);a<10&&(t+="0"),t+=a+":";var n=Math.floor(e/1e3);n<10&&(t+="0"),n>59&&(n%=60),t+=n+":";var r=Math.floor(e%1e3/10);return r<10&&(t+="0"),t+=r},H=function(e){var t=e.registerResult,a=F(),c=Object(r.useState)("00:00:00"),l=Object(n.a)(c,2),i=l[0],u=l[1],s=Object(r.useState)("idle"),m=Object(n.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(0),f=Object(n.a)(g,2),E=f[0],v=f[1];Object(r.useEffect)((function(){clearInterval(E);var e=Date.now();"countdown"===d&&v(setInterval((function(){var t=15e3-(Date.now()-e);t<=0&&p("over"),u(V(t))}),10)),"running"===d&&v(setInterval((function(){u(V(Date.now()-e))}),10)),"over"===d&&u("00:00:00")}),[d]);var b=function(e){e.preventDefault(),32===e.keyCode&&"idle"===d&&p("countdown")},y=function(e){clearInterval(E),32===e.keyCode&&("running"===d?(t(i),p("idle")):p("over"===d?"idle":"running"))};Object(r.useEffect)((function(){return window.addEventListener("keyup",y),window.addEventListener("keypress",b),function(){window.removeEventListener("keyup",y),window.removeEventListener("keypress",b)}}));return o.a.createElement(M.a,{elevation:3,className:a.root},o.a.createElement(h.a,{variant:"h1"}," ",i," "),o.a.createElement(h.a,{variant:"h5",color:function(){switch(d){case"running":return"primary";case"over":return"secondary";default:return"textSecondary"}}()},function(){switch(d){case"running":return"_";case"countdown":return"Release SPACE to begin";case"over":return"You are too late!";default:return"Hold SPACE to start countdown"}}()))},J=a(80),q=a(73),_=function(e){var t=e.itemSize,a=e.itemCount,n=e.renderItem;return o.a.createElement("div",{style:{flex:"1 1 auto",overflow:"hidden"}},o.a.createElement(q.a,null,(function(e){var r=e.width,c=e.height;return o.a.createElement(J.a,{height:c,width:r,itemSize:t,itemCount:a},n)})))},G=a(152),K=a(153),Q=a(168),X=a(154),Z=a(79),$=a(156),ee=a(157),te=a(158),ae=a(74),ne=a.n(ae),re={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},oe=Object(E.a)((function(e){return{root:{padding:e.spacing(1),"& .MuiTypography-h3":{color:e.palette.secondary.main,margin:e.spacing(2)}}}})),ce=function(e){var t=e.data,a=e.removeThisCard,c=oe(),l=Object(r.useState)(null),i=Object(n.a)(l,2),u=i[0],s=i[1],m=t.author?t.author.username:"anonymous",d=new Date(t.date),p=function(){s(null)};return o.a.createElement(G.a,{elevation:5,className:c.root},o.a.createElement(K.a,{avatar:"anonymous"===m?o.a.createElement(Q.a,null):o.a.createElement(Q.a,null,m[0].toUpperCase()),title:m,subheader:d.toLocaleString("default",re),action:o.a.createElement(X.a,{onClick:function(e){s(e.currentTarget)}},o.a.createElement(ne.a,null))}),o.a.createElement(Z.a,{anchorEl:u,open:Boolean(u),keepMounted:!0,onClose:p},o.a.createElement($.a,{onClick:function(){(function(e,t){return T.a.delete(x+e,t)})("solutions/".concat(t.id,"/")).then((function(){a(t.id)})),p()}},"Delete")),o.a.createElement(ee.a,null,o.a.createElement(te.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(te.a,{item:!0},o.a.createElement(b.a,null)),o.a.createElement(te.a,{item:!0},o.a.createElement(h.a,{variant:"h3"},t.result)))))},le=a(159),ie=Object(E.a)((function(e){return{primary:{padding:e.spacing(4)},cell:{padding:e.spacing(5)}}})),ue=function(e){var t=e.user,a=e.recentSolutions,n=e.setRecentSolutions,r=e.setPage,c=ie(),l=function(e){n(a.filter((function(t){return t.id!==e})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y,{type:"primary"},o.a.createElement("div",{className:c.primary},o.a.createElement(A,{sectionName:"Welcome to ChronoCube!"},o.a.createElement("p",null,"ChronoCube is a professional speedcubing timer. Share your results publicly - let everyone see your progress and achievements! Every speedcuber will benefit from using it - both amateur and professional!"),o.a.createElement(le.a,{variant:"contained",color:"secondary",onClick:function(){r("contribute")}}," Learn more ")),null===t.id&&o.a.createElement(A,{sectionName:"Log into an account"},o.a.createElement("p",null," Tell us your name so we can track your progress"),o.a.createElement(le.a,{variant:"contained",color:"secondary",onClick:function(){r("profile")},size:"large"}," Login ")),o.a.createElement(H,{registerResult:function(e){var r={author_id:t.id,result:e};z("solutions/",r).then((function(e){n([e.data].concat(a))}))}}))),o.a.createElement(Y,{type:"secondary",name:"Recent solutions"},o.a.createElement(_,{itemSize:270,itemCount:a.length,renderItem:function(e){var t=e.index,n=e.style,r=a[t];return o.a.createElement("div",{style:n,className:c.cell},o.a.createElement(ce,{data:r,removeThisCard:l}))}})))},se=a(160),me=Object(E.a)((function(e){return{root:{padding:e.spacing(1)}}})),de=function(){var e=me();return o.a.createElement(G.a,{elevation:5,className:e.root},o.a.createElement(K.a,{avatar:o.a.createElement(se.a,{color:"secondary"}),title:"Loading",subheader:"Please, wait."}))},pe=Object(E.a)((function(e){return{cell:{display:"flex",justifyContent:"center",padding:e.spacing(4),"& .MuiCard-root":{width:"30%"}}}})),he=function(){var e=pe(),t=Object(r.useState)([]),a=Object(n.a)(t,2),c=a[0],l=a[1],i=function(){R("scoreboard/").then((function(e){l(e.data)}))},u=function(e){i()};Object(r.useEffect)((function(){setTimeout(i,300)}),[]);return o.a.createElement(Y,{type:"mono"},0===c.length&&o.a.createElement("div",{className:e.cell},o.a.createElement(de,null)),o.a.createElement(_,{itemSize:300,itemCount:c.length,renderItem:function(t){var a=t.index,n=t.style;return o.a.createElement("div",{style:n,className:e.cell},o.a.createElement(ce,{data:c[a],removeThisCard:u}))}}))},ge=a(161),fe=a(155),Ee=a(117),ve=a(75),be=a.n(ve),ye=a(77),we=a.n(ye),je=a(76),ke=a.n(je),Oe=Object(E.a)((function(e){return{mono:{padding:e.spacing(4),"& .MuiAvatar-root":{marginRight:e.spacing(2),width:e.spacing(6),height:e.spacing(6)}}}})),Se=a(115),Ce=function(){var e=Oe();return o.a.createElement(Y,{type:"mono"},o.a.createElement("div",{className:e.mono},o.a.createElement(A,{sectionName:"Thank You for using ChronoCube!"},o.a.createElement("p",null,"ChronoCube is an Open-Source application, and we welcome anyone who desires to help our project!"),o.a.createElement(le.a,{variant:"contained",color:"secondary",startIcon:o.a.createElement(be.a,null),href:"https://github.com/users/Eug-VS/projects/3"},"Track our progress")),o.a.createElement(A,{sectionName:"Technology stack"},o.a.createElement("p",null," We only use modern and most relevant technologies to achieve the best results! "),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(ge.a,{href:"https://www.django-rest-framework.org/"},"Django REST Framework")),o.a.createElement("li",null,o.a.createElement(ge.a,{href:"https://reactjs.org/"},"React.js")),o.a.createElement("li",null,o.a.createElement(ge.a,{href:"https://material-ui.com/"},"Material UI components"))),o.a.createElement("p",null," Special thanks to other Open-Source projects which made ChronoCube possible: "),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(ge.a,{href:"https://github.com/bvaughn/react-window"},"react-window")))),o.a.createElement(A,{sectionName:"How can I contribute to the project?"},o.a.createElement("p",null," Thank You for considering helping our project! "),o.a.createElement("p",null,"All the development process is being tracked on the ",o.a.createElement(ge.a,{href:"https://github.com/users/Eug-VS/projects/3"},"KanBan board"),". You can always check it to see what is the current state of the project. To contribute your code, fork our repository and then open a ",o.a.createElement(ge.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests"},"Pull Request"),". We will carefully review and, hopefully, accept it! If you are unfamiliar with this kind of workflow, we recommend reading ",o.a.createElement(ge.a,{href:"https://github.com/features/project-management/"},"GitHub guidelines"),"."),o.a.createElement("p",null,"We always welcome newcomers! If you are unfamiliar with certain technologies or even with the development in general, it is great time to start learning something new! Our community will kindly assist every your step, and with us you can easily become highly-evaluated developer!"),o.a.createElement(le.a,{variant:"contained",color:"secondary",startIcon:o.a.createElement(ke.a,null),href:"https://github.com/Eug-VS/chrono-cube/issues/new"},"Suggest feature"),o.a.createElement(le.a,{variant:"contained",color:"secondary",startIcon:o.a.createElement(we.a,null),href:"https://github.com/Eug-VS/chrono-cube/issues/new"},"Report a bug")),o.a.createElement(A,{sectionName:"Developers"},o.a.createElement(fe.a,null,Se.map((function(e){var t="https://github.com/".concat(e.username);return o.a.createElement("div",{key:e.username},o.a.createElement(Ee.a,null,o.a.createElement(ge.a,{href:t},o.a.createElement(Q.a,{alt:e.username,src:"".concat(t,".png")})),o.a.createElement("div",null,o.a.createElement(ge.a,{href:t},e.username),o.a.createElement(h.a,{component:"div",color:"textSecondary"},e.role))),o.a.createElement(D.a,{variant:"middle"}))})),o.a.createElement(Ee.a,null,o.a.createElement(Q.a,null),"You can be here!")),o.a.createElement(le.a,{variant:"contained",color:"secondary",size:"large",href:"https://github.com/users/Eug-VS/projects/3"},"Join us!"))))},Ne=a(165),Ie=a(162),Te=a(167),xe=function(e){var t=e.setUser,a=Object(r.useState)(""),c=Object(n.a)(a,2),l=c[0],i=c[1],u=Object(r.useState)(!1),s=Object(n.a)(u,2),m=s[0],d=s[1];return o.a.createElement(A,{sectionName:"Tell us who you are"},o.a.createElement("p",null," Choose yourself a username to track your progress and compete with others: "),o.a.createElement(te.a,{container:!0,direction:"column"},o.a.createElement(te.a,{item:!0},o.a.createElement(Ne.a,{variant:"outlined",color:"secondary",label:"Username",value:l,onChange:function(e){i(e.target.value)}})),o.a.createElement(te.a,{item:!0},o.a.createElement(Ie.a,{control:o.a.createElement(Te.a,{color:"secondary",onChange:function(e){d(e.target.checked)}}),label:"Remember me"})),o.a.createElement(te.a,{item:!0},o.a.createElement(le.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){""!==l&&z("users/",{username:l}).then((function(e){var a=e.data;t(a),m&&localStorage.setItem("userId",a.id)})).catch((function(e){R("users/").then((function(e){var a=e.data.filter((function(e){return e.username===l}))[0];t(a),m&&localStorage.setItem("userId",a.id)}))}))}},"Submit!"))))},Re=Object(E.a)((function(e){return{primary:{padding:e.spacing(4)},cell:{padding:e.spacing(5)}}})),ze=function(e){var t=e.user,a=e.setUser,c=Re(),l=Object(r.useState)([]),i=Object(n.a)(l,2),u=i[0],s=i[1];Object(r.useEffect)((function(){R("solutions/?author=".concat(t.id)).then((function(e){s(e.data.reverse())}))}),[t]);var m=function(e){s(u.filter((function(t){return t.id!==e})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y,{type:"primary"},o.a.createElement("div",{className:c.primary},t.id?o.a.createElement(A,{sectionName:"Welcome back, ".concat(t.username,"!")},o.a.createElement("p",null," Total amount of solutions: ",u.length," "),o.a.createElement("p",null," You can always log out from your account! "),o.a.createElement(le.a,{variant:"contained",color:"secondary",onClick:function(){a({username:"anonymous",id:null}),localStorage.clear()}},"Logout")):o.a.createElement(xe,{setUser:a}))),o.a.createElement(Y,{type:"secondary",name:"History"},o.a.createElement(_,{itemSize:270,itemCount:u.length,renderItem:function(e){var t=e.index,a=e.style;return o.a.createElement("div",{style:a,className:c.cell},o.a.createElement(ce,{data:u[t],removeThisCard:m}))}})))};document.body.style.overflow="hidden",l.a.render(o.a.createElement((function(){var e=Object(r.useState)("app"),t=Object(n.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)({username:"anonymous",id:null}),s=Object(n.a)(l,2),d=s[0],p=s[1],h=Object(r.useState)([]),g=Object(n.a)(h,2),f=g[0],E=g[1];Object(r.useEffect)((function(){var e=+localStorage.getItem("userId");e&&R("users/").then((function(t){p(t.data.filter((function(t){return t.id===+e}))[0])}))}),[]);return o.a.createElement(u.a,{theme:m},o.a.createElement(i.a,null),o.a.createElement(N,{page:a,setPage:c}),o.a.createElement((function(e){switch(e.page){case"app":return o.a.createElement(ue,{user:d,recentSolutions:f,setRecentSolutions:E,setPage:c});case"profile":return o.a.createElement(ze,{user:d,setUser:p});case"scoreboard":return o.a.createElement(he,null);case"contribute":default:return o.a.createElement(Ce,null)}}),{page:a}))}),null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(116)}},[[87,1,2]]]);
//# sourceMappingURL=main.f6193adc.chunk.js.map