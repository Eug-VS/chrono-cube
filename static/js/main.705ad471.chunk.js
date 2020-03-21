(this["webpackJsonpchrono-cube"]=this["webpackJsonpchrono-cube"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),o=a.n(r),c=a(10),l=a.n(c),u=a(9),i=(a(58),a(50)),s=a.n(i),m="https://eugvs.pythonanywhere.com/api/",d=function(e){return s.a.get(m+e)},p=function(e,t){return s.a.post(m+e,t)},h=a(117),E=a(38),f=a(147),g=Object(f.a)((function(e){return{root:{textAlign:"center",padding:e.spacing(5),background:e.palette.background.elevation3,marginTop:e.spacing(10)}}})),b=function(e){var t="",a=Math.floor(e/6e4);a<10&&(t+="0"),t+=a+":";var n=Math.floor(e/1e3);n>59&&(n%=60),n<10&&(t+="0"),t+=n+":";var r=Math.floor(e%1e3/10);return r<10&&(t+="0"),t+=r},v=function(e){var t=e.registerResult,a=g(),c=Object(r.useState)("00:00:00"),l=Object(n.a)(c,2),u=l[0],i=l[1],s=Object(r.useState)("idle"),m=Object(n.a)(s,2),d=m[0],p=m[1];Object(r.useEffect)((function(){var e=Date.now();if("countdown"===d){var t=setInterval((function(){var t=15e3-(Date.now()-e);t<=0&&p("over"),i(b(t))}),10);return function(){return clearInterval(t)}}if("running"===d){var a=setInterval((function(){i(b(Date.now()-e))}),10);return function(){return clearInterval(a)}}"over"===d&&i("00:00:00")}),[d]);var f=function(e){e.preventDefault(),32===e.keyCode&&"idle"===d&&p("countdown")},v=function(e){32===e.keyCode&&("running"===d?(t(u),p("idle")):p("over"===d?"idle":"running"))};Object(r.useEffect)((function(){return window.addEventListener("keyup",v),window.addEventListener("keypress",f),function(){window.removeEventListener("keyup",v),window.removeEventListener("keypress",f)}}));return o.a.createElement(h.a,{className:a.root},o.a.createElement(E.a,{variant:"h1"}," ",u," "),o.a.createElement(E.a,{variant:"h5",color:function(){switch(d){case"running":return"primary";case"over":return"secondary";default:return"textSecondary"}}()},function(){switch(d){case"running":return"Go fast!";case"countdown":return"Release SPACE to begin";case"over":return"You are too late!";default:return"Hold SPACE to start countdown"}}()))},y=a(153),w=a(154),j=a(165),k=a(155),S=a(83),C=a(157),O=a(158),I=a(159),N=a(48),T=a.n(N),R=a(73),L=a.n(R),x=a(74),D=a.n(x),M={month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},P=Object(f.a)((function(e){return{root:{padding:e.spacing(1),background:e.palette.background.elevation2,"& .MuiTypography-h3":{margin:e.spacing(2)}},menu:{"& ul":{background:e.palette.background.elevation3}}}})),U=function(e){var t=e.data,a=e.removeThisCard,c=P(),l=Object(r.useState)(null),u=Object(n.a)(l,2),i=u[0],d=u[1],p=t.author?t.author.username:"anonymous",h=new Date(t.date),f=function(){d(null)};return o.a.createElement(y.a,{className:c.root},o.a.createElement(w.a,{avatar:"anonymous"===p?o.a.createElement(j.a,null):o.a.createElement(j.a,null,p[0].toUpperCase()),title:p,subheader:h.toLocaleString("default",M),action:o.a.createElement(k.a,{onClick:function(e){d(e.currentTarget)}},o.a.createElement(L.a,null))}),o.a.createElement(S.a,{anchorEl:i,open:Boolean(i),keepMounted:!0,onClose:f,className:c.menu},o.a.createElement(C.a,{onClick:function(){var e;(e="solutions/".concat(t.id,"/"),s.a.delete(m+e)).then((function(){a(t.id)})),f()}},o.a.createElement(D.a,null),"Delete")),o.a.createElement(O.a,null,o.a.createElement(I.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(I.a,{item:!0},o.a.createElement(T.a,null)),o.a.createElement(I.a,{item:!0},o.a.createElement(E.a,{variant:"h3",color:"primary"},t.result)))))},Y=a(152),z=Object(f.a)((function(e){return{primary:{padding:e.spacing(4)},cell:{padding:e.spacing(5)}}})),A=function(e){var t=e.user,a=e.recentSolutions,n=e.setRecentSolutions,r=e.setPage,c=z(),l=function(e){n(a.filter((function(t){return t.id!==e})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.e,{type:"primary"},o.a.createElement("div",{className:c.primary},o.a.createElement(u.b,{sectionName:"Welcome to ChronoCube!"},o.a.createElement("p",null,"ChronoCube is a professional speedcubing timer. Share your results publicly - let everyone see your progress and achievements! Every speedcuber will benefit from using it - both amateur and professional!"),o.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:function(){r("contribute")}}," Learn more ")),null===t.id&&o.a.createElement(u.b,{sectionName:"Log into an account"},o.a.createElement("p",null," Tell us your name so we can track your progress"),o.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:function(){r("profile")},size:"large"}," Login ")),o.a.createElement(v,{registerResult:function(e){var r={author_id:t.id,result:e};p("solutions/",r).then((function(e){n([e.data].concat(a))}))}}))),o.a.createElement(u.e,{type:"secondary",name:"Recent solutions"},o.a.createElement(u.d,{itemSize:270,itemCount:a.length,renderItem:function(e){var t=e.index,n=e.style,r=a[t];return o.a.createElement("div",{style:n,className:c.cell},o.a.createElement(U,{data:r,removeThisCard:l}))}})))},V=a(160),W=Object(f.a)((function(e){return{root:{padding:e.spacing(1),background:e.palette.background.elevation2}}})),B=function(){var e=W();return o.a.createElement(y.a,{className:e.root},o.a.createElement(w.a,{avatar:o.a.createElement(V.a,{color:"secondary"}),title:"Loading",subheader:"Please, wait."}))},F=Object(f.a)((function(e){return{cell:{display:"flex",justifyContent:"center",padding:e.spacing(4),"& .MuiCard-root":{width:"30%"}}}})),H=function(){var e=F(),t=Object(r.useState)([]),a=Object(n.a)(t,2),c=a[0],l=a[1],i=function(){d("scoreboard/").then((function(e){l(e.data)}))},s=function(e){i()};Object(r.useEffect)((function(){setTimeout(i,300)}),[]);return o.a.createElement(u.e,{type:"mono"},0===c.length&&o.a.createElement("div",{className:e.cell},o.a.createElement(B,null)),o.a.createElement(u.d,{itemSize:300,itemCount:c.length,renderItem:function(t){var a=t.index,n=t.style;return o.a.createElement("div",{style:n,className:e.cell},o.a.createElement(U,{data:c[a],removeThisCard:s}))}}))},J=a(161),q=a(156),G=a(118),K=a(151),_=a(76),Q=a.n(_),X=a(78),Z=a.n(X),$=a(77),ee=a.n($),te=a(75),ae=Object(f.a)((function(e){return{mono:{padding:e.spacing(4),"& .MuiAvatar-root":{marginRight:e.spacing(2),width:e.spacing(6),height:e.spacing(6)}}}})),ne=function(){var e=ae();return o.a.createElement(u.e,{type:"mono"},o.a.createElement("div",{className:e.mono},o.a.createElement(u.b,{sectionName:"Thank You for using ChronoCube!"},o.a.createElement("p",null,"ChronoCube is an Open-Source application, and we welcome anyone who desires to help our project!"),o.a.createElement(Y.a,{variant:"contained",color:"primary",startIcon:o.a.createElement(Q.a,null),href:"https://github.com/users/Eug-VS/projects/3"},"Track our progress")),o.a.createElement(u.b,{sectionName:"Technology stack"},o.a.createElement("p",null," We only use modern and most relevant technologies to achieve the best results! "),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(J.a,{href:"https://www.django-rest-framework.org/"},"Django REST Framework")),o.a.createElement("li",null,o.a.createElement(J.a,{href:"https://reactjs.org/"},"React.js")),o.a.createElement("li",null,o.a.createElement(J.a,{href:"https://material-ui.com/"},"Material UI components"))),o.a.createElement("p",null," Special thanks to other Open-Source projects which made ChronoCube possible: "),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(J.a,{href:"https://github.com/bvaughn/react-window"},"react-window")))),o.a.createElement(u.b,{sectionName:"How can I contribute to the project?"},o.a.createElement("p",null," Thank You for considering helping our project! "),o.a.createElement("p",null,"All the development process is being tracked on the ",o.a.createElement(J.a,{href:"https://github.com/users/Eug-VS/projects/3"},"KanBan board"),". You can always check it to see what is the current state of the project. To contribute your code, fork our repository and then open a ",o.a.createElement(J.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests"},"Pull Request"),". We will carefully review and, hopefully, accept it! If you are unfamiliar with this kind of workflow, we recommend reading ",o.a.createElement(J.a,{href:"https://github.com/features/project-management/"},"GitHub guidelines"),"."),o.a.createElement("p",null,"We always welcome newcomers! If you are unfamiliar with certain technologies or even with the development in general, it is great time to start learning something new! Our community will kindly assist every your step, and with us you can easily become highly-evaluated developer!"),o.a.createElement(Y.a,{variant:"contained",color:"primary",startIcon:o.a.createElement(ee.a,null),href:"https://github.com/Eug-VS/chrono-cube/issues/new"},"Suggest feature"),o.a.createElement(Y.a,{variant:"contained",color:"primary",startIcon:o.a.createElement(Z.a,null),href:"https://github.com/Eug-VS/chrono-cube/issues/new"},"Report a bug")),o.a.createElement(u.b,{sectionName:"Developers"},o.a.createElement(q.a,null,te.map((function(e){var t="https://github.com/".concat(e.username);return o.a.createElement("div",{key:e.username},o.a.createElement(G.a,null,o.a.createElement(J.a,{href:t},o.a.createElement(j.a,{alt:e.username,src:"".concat(t,".png")})),o.a.createElement("div",null,o.a.createElement(J.a,{href:t},e.username),o.a.createElement(E.a,{component:"div",color:"textSecondary"},e.role))),o.a.createElement(K.a,{variant:"middle"}))})),o.a.createElement(G.a,null,o.a.createElement(j.a,null),"You can be here!")),o.a.createElement(Y.a,{variant:"contained",color:"primary",size:"large",href:"https://github.com/users/Eug-VS/projects/3"},"Join us!"))))},re=a(163),oe=a(162),ce=a(164),le=function(e){var t=e.setUser,a=Object(r.useState)(""),c=Object(n.a)(a,2),l=c[0],i=c[1],s=Object(r.useState)(!1),m=Object(n.a)(s,2),h=m[0],E=m[1];return o.a.createElement(u.b,{sectionName:"Tell us who you are"},o.a.createElement("p",null," Choose yourself a username to track your progress and compete with others: "),o.a.createElement(I.a,{container:!0,direction:"column"},o.a.createElement(I.a,{item:!0},o.a.createElement(re.a,{variant:"outlined",color:"secondary",label:"Username",value:l,onChange:function(e){i(e.target.value)}})),o.a.createElement(I.a,{item:!0},o.a.createElement(oe.a,{control:o.a.createElement(ce.a,{color:"secondary",onChange:function(e){E(e.target.checked)}}),label:"Remember me"})),o.a.createElement(I.a,{item:!0},o.a.createElement(Y.a,{variant:"contained",color:"secondary",onClick:function(){""!==l&&p("users/",{username:l}).then((function(e){var a=e.data;t(a),h&&localStorage.setItem("userId",a.id)})).catch((function(e){d("users/").then((function(e){var a=e.data.filter((function(e){return e.username===l}))[0];t(a),h&&localStorage.setItem("userId",a.id)}))}))}},"Submit!"))))},ue=Object(f.a)((function(e){return{primary:{padding:e.spacing(4)},cell:{padding:e.spacing(5)}}})),ie=function(e){var t=e.user,a=e.setUser,c=ue(),l=Object(r.useState)([]),i=Object(n.a)(l,2),s=i[0],m=i[1];Object(r.useEffect)((function(){d("solutions/?author=".concat(t.id)).then((function(e){m(e.data.reverse())}))}),[t]);var p=function(e){m(s.filter((function(t){return t.id!==e})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.e,{type:"primary"},o.a.createElement("div",{className:c.primary},t.id?o.a.createElement(u.b,{sectionName:"Welcome back, ".concat(t.username,"!")},o.a.createElement("p",null," Total amount of solutions: ",s.length," "),o.a.createElement("p",null," You can always log out from your account! "),o.a.createElement(Y.a,{variant:"contained",color:"secondary",onClick:function(){a({username:"anonymous",id:null}),localStorage.clear()}},"Logout")):o.a.createElement(le,{setUser:a}))),o.a.createElement(u.e,{type:"secondary",name:"History"},o.a.createElement(u.d,{itemSize:270,itemCount:s.length,renderItem:function(e){var t=e.index,a=e.style;return o.a.createElement("div",{style:a,className:c.cell},o.a.createElement(U,{data:s[t],removeThisCard:p}))}})))},se=a(79),me=a.n(se),de=a(80),pe=a.n(de),he=a(81),Ee=a.n(he),fe=function(){var e=Object(r.useState)("app"),t=Object(n.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)({username:"anonymous",id:null}),i=Object(n.a)(l,2),s=i[0],m=i[1],p=Object(r.useState)([]),h=Object(n.a)(p,2),E=h[0],f=h[1],g={app:o.a.createElement(T.a,null),profile:o.a.createElement(me.a,null),scoreboard:o.a.createElement(pe.a,null),contribute:o.a.createElement(Ee.a,null)};Object(r.useEffect)((function(){var e=localStorage.getItem("userId");e&&d("users/").then((function(t){m(t.data.filter((function(t){return t.id===+e}))[0])}))}),[]);var b=function(e){switch(e.page){case"app":return o.a.createElement(A,{user:s,recentSolutions:E,setRecentSolutions:f,setPage:c});case"profile":return o.a.createElement(ie,{user:s,setUser:m});case"scoreboard":return o.a.createElement(H,null);case"contribute":default:return o.a.createElement(ne,null)}};return o.a.createElement(u.a,null,o.a.createElement(u.c,{logo:{title:"ChronoCube",icon:null},contents:g,page:a,setPage:c}),o.a.createElement(b,{page:a}))};document.body.style.overflow="hidden",l.a.render(o.a.createElement(fe,null),document.getElementById("root"))},75:function(e){e.exports=JSON.parse('[{"username":"eug-vs","role":"Back-end, front-end, management"},{"username":"asketonim","role":"Front-end, management"},{"username":"soleni","role":"Testing"}]')},88:function(e,t,a){e.exports=a(115)}},[[88,1,2]]]);
//# sourceMappingURL=main.705ad471.chunk.js.map