(this["webpackJsonpreact-material"]=this["webpackJsonpreact-material"]||[]).push([[0],{108:function(e,a,t){e.exports=t(139)},113:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(113),t(36)),m=t(10),i=t(43),s=t(201),p=t(183),d=t(203),u=t(64),E=t(189),h=t(205),g=t(184),y=t(206),v=t(185),b=t(186),f=t(187),x=t(188),k=t(182),N=t(89),w=t.n(N),C=t(90),I=t.n(C),j=(t(85),t(80),t(84),t(86),t(87),t(88),[{key:"dashboard",name:"Dashboard",route:"/",icon:"icon-home",divider:!1,submenu:[]},{key:"patients",name:"Patients",route:"/patients",icon:"ico icon-patient",divider:!1,submenu:[]},{key:"appointments",name:"Appointments",route:"/appointments",icon:"ico icon-appointment",divider:!0,submenu:[]},{key:"laboratory",name:"Laboratory",route:"/laboratory",icon:"ico icon-laboratory",divider:!1,submenu:[]},{key:"radiology",name:"Radiology",route:"/radiology",icon:"ico icon-x-ray",divider:!1,submenu:[]},{key:"pharmacy",name:"Pharmacy",route:"/pharmacy",icon:"ico icon-medicine",divider:!0,submenu:[]},{key:"patient-pool",name:"Patient pool",route:"/patient-pool",icon:"ico icon-data-collection",divider:!1,submenu:[]},{key:"ward",name:"Ward management",route:"/ward",icon:"ico icon-hospital",divider:!1,submenu:[]},{key:"billing",name:"Billing management",route:"/billing",icon:"ico icon-invoice",divider:!0,submenu:[]},{key:"staff",name:"Staff management",route:"/staff",icon:"ico icon-id-card",divider:!1,submenu:[]}]),P=Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},navWidth:{width:"240px"},navLink:{borderRadius:"0 42px 42px 0",transition:e.transitions.create("all",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),"&:hover":{backgroundColor:e.palette.primary.main,color:"#fff"}},active:{boxShadow:"6px 0px 0px inset "+e.palette.primary.main,color:e.palette.primary.main+" !important",borderRadius:"0 42px 42px 0","&:hover":{backgroundColor:e.palette.primary.main,color:"#fff !important"}}}})),R=function(e){var a=P(),t=r.a.useState(""),n=Object(c.a)(t,2),l=n[0],o=n[1];return r.a.createElement(h.a,{open:"true",variant:"permanent",onMouseEnter:e.onHover,onMouseLeave:e.onHover},r.a.createElement(p.a,null),r.a.createElement(g.a,{component:"nav",className:e.hoverClass,id:e.elId},j.map((function(e,t){return e.submenu.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{key:e.name,button:!0,onClick:function(){return function(e){o(l===e?"":e)}(t)}},r.a.createElement(v.a,null,r.a.createElement("i",{className:e.icon})),r.a.createElement(b.a,{primary:e.name}),t===l?r.a.createElement(w.a,null):r.a.createElement(I.a,null)),r.a.createElement(f.a,{in:t===l,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.a,{component:"div",disablePadding:!0},e.submenu.map((function(e,t){return r.a.createElement(y.a,{key:e.name,button:!0,className:a.nested,component:i.b,to:e.route},r.a.createElement(b.a,{primary:"-- "+e.name}))})))),r.a.createElement(x.a,null)):r.a.createElement(r.a.Fragment,null,"/"==e.route?r.a.createElement(y.a,{button:!0,key:e.name,className:a.navLink,component:i.b,to:e.route,exact:!0,activeClassName:a.active+" active"},r.a.createElement(v.a,null,r.a.createElement("i",{className:e.icon+" navLinkIcon",style:{fontSize:"24px"}})),r.a.createElement(b.a,{primary:e.name,style:{whiteSpace:"nowrap"}})):r.a.createElement(y.a,{button:!0,key:e.name,className:a.navLink,component:i.b,to:e.route,activeClassName:a.active+" active"},r.a.createElement(v.a,null,r.a.createElement("i",{className:e.icon+" navLinkIcon"})),r.a.createElement(b.a,{primary:e.name,style:{whiteSpace:"nowrap"}})),e.divider?r.a.createElement(x.a,null):"")}))))},S=t(196),A=t(95),L=t(91),B=t.n(L),O=t(92),W=t.n(O),D=t(63),T=Object(A.a)({palette:{primary:{main:B.a[500],contrastText:"#fff"},secondary:{main:W.a[500]},error:{main:D.a[500]}}}),F=function(e){return e.children},H=t(12),M=t.n(H),G=(t(137),t(49)),z=t.n(G),J=t(197),Y=t(98),_=t(198),q=t(207),V=t(199),$=t(200),K=t(93),Q=(t(138),t(4)),U=t(192),X=t(195),Z=t(190),ee=t(191),ae=t(193),te=t(202),ne=t(194),re=[{id:"name",label:"Name",minWidth:170},{id:"mobile",label:"Mobile",minWidth:100},{id:"appointment_for",label:"Appointment For",minWidth:50},{id:"date",label:"Date",minWidth:100,align:"right"},{id:"time",label:"Time",minWidth:50,align:"right"},{id:"action",label:"Action",minWidth:170,align:"right"}];function le(e,a,t,n,r,l){return{name:e,mobile:a,appointment_for:t,date:n,time:r,action:l}}var oe=[le("Raj","+91-9876543210","Dog","15/Aug/2020","02:00",r.a.createElement("div",null,r.a.createElement(E.a,{color:"secondary"},r.a.createElement(M.a,{name:"check"}))," ",r.a.createElement(E.a,{style:{color:T.palette.error.main}},r.a.createElement(M.a,{name:"close"})))),le("Raj","+91-9876543210","Dog","15/Aug/2020","02:30",r.a.createElement("div",null,r.a.createElement(E.a,{color:"secondary"},r.a.createElement(M.a,{name:"check"}))," ",r.a.createElement(E.a,{style:{color:T.palette.error.main}},r.a.createElement(M.a,{name:"close"})))),le("Raj","+91-9876543210","Dog","15/Aug/2020","03:00","Approved"),le("Raj","+91-9876543210","Dog","15/Aug/2020","03:20","Rejected"),le("Raj","+91-9876543210","Dog","15/Aug/2020","04:00",r.a.createElement("div",null,r.a.createElement(E.a,{color:"secondary"},r.a.createElement(M.a,{name:"check"}))," ",r.a.createElement(E.a,{style:{color:T.palette.error.main}},r.a.createElement(M.a,{name:"close"})))),le("Raj","+91-9876543210","Dog","15/Aug/2020","05:45",r.a.createElement("div",null,r.a.createElement(E.a,{color:"secondary"},r.a.createElement(M.a,{name:"check"}))," ",r.a.createElement(E.a,{style:{color:T.palette.error.main}},r.a.createElement(M.a,{name:"close"}))))],ce=Object(Q.a)((function(e){return{head:{backgroundColor:e.palette.common.white,color:e.palette.common.black},body:{fontSize:14}}}))(Z.a),me=Object(k.a)({root:{width:"100%"},container:{maxHeight:440},error:{color:T.palette.error.main}});function ie(){var e=me(),a=r.a.useState(0),t=Object(c.a)(a,2),n=t[0],l=t[1],o=r.a.useState(10),m=Object(c.a)(o,2),i=m[0],s=m[1];return r.a.createElement("div",{className:e.root},r.a.createElement(ee.a,{className:e.container},r.a.createElement(U.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(ae.a,{color:"primary"},r.a.createElement(ne.a,null,re.map((function(e){return r.a.createElement(ce,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(X.a,null,oe.slice(n*i,n*i+i).map((function(e){return r.a.createElement(ne.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},re.map((function(a){var t=e[a.id];return r.a.createElement(Z.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.a.createElement(te.a,{rowsPerPageOptions:[10,25,100],component:"div",count:oe.length,rowsPerPage:i,page:n,onChangePage:function(e,a){l(a)},onChangeRowsPerPage:function(e){s(+e.target.value),l(0)}}))}var se=Object(k.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},primaryBg:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},secondaryBg:{backgroundColor:e.palette.secondary.main},infoBg:{backgroundColor:e.palette.info.main},warningBg:{backgroundColor:e.palette.warning.main}}})),pe={title:"Revenue comparison",hAxis:{title:"Year"},vAxis:{title:"Revenue"},colors:["#ff9800","#2196f3","#4caf50"]},de=function(){var e=se();return r.a.createElement(F,null,r.a.createElement(S.a,{theme:T},r.a.createElement(J.a,{container:!0,spacing:3},r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(Y.a,{p:2,className:e.paper+" profileCard"},r.a.createElement(d.a,{component:"div",className:"profileCardImg",elevation:2},r.a.createElement("img",{src:z.a})),r.a.createElement(d.a,{component:"h3",m:1},"Dr. Radhakrishnan. MBBS,PhD"),r.a.createElement(d.a,{component:"p",mb:2},"Specialist in Veterinary treatment for pets"),r.a.createElement(J.a,{container:!0},r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement("span",{className:"countSpan"},"206"),r.a.createElement("span",null,"Clients")),r.a.createElement(J.a,{item:!0,xs:1}),r.a.createElement(J.a,{item:!0,xs:4},r.a.createElement("span",{className:"countSpan"},"1282"),r.a.createElement("span",null,"Appointments")),r.a.createElement(J.a,{item:!0,xs:1}),r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement("span",{className:"countSpan"},"4.8/5"),r.a.createElement("span",null,"Rating")))),r.a.createElement(Y.a,{style:{marginTop:"16px"},className:e.paper},r.a.createElement(d.a,{component:"h4",m:1},"Recent queries"),r.a.createElement(d.a,{component:"div",mb:2},r.a.createElement(g.a,{className:e.root},r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(_.a,null,r.a.createElement(q.a,{src:z.a})),r.a.createElement(b.a,{primary:"Is home visit is available?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Raj")," \u2014 I am looking for a home visit, is this available please reply me",r.a.createElement(d.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",style:{width:"100%"}},r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"phone"})),r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"envelope"}))))})),r.a.createElement(x.a,null),r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(_.a,null,r.a.createElement(q.a,{src:z.a})),r.a.createElement(b.a,{primary:"Is home visit is available?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Raj")," \u2014 I am looking for a home visit, is this available please reply me",r.a.createElement(d.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",style:{width:"100%"}},r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"phone"})),r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"envelope"}))))})),r.a.createElement(x.a,null),r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(_.a,null,r.a.createElement(q.a,{src:z.a})),r.a.createElement(b.a,{primary:"Is home visit is available?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Raj")," \u2014 I am looking for a home visit, is this available please reply me",r.a.createElement(d.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",style:{width:"100%"}},r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"phone"})),r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"envelope"}))))})),r.a.createElement(x.a,null)))),r.a.createElement(Y.a,{style:{marginTop:"16px"},className:e.paper},r.a.createElement(d.a,{component:"h4",m:1},"ToDo List"),r.a.createElement(d.a,{component:"div",mb:2},r.a.createElement(g.a,{className:e.root},r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(b.a,{primary:"Need to purchase stocks!.",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Pharma")," \u2014 Pharmacy item stocklist")})),r.a.createElement(x.a,null),r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(b.a,{primary:"Appointment with client at 3'O clock.",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Raj")," \u2014 #100, 7th street, Gandhi road, +91-9999999999")})),r.a.createElement(x.a,null),r.a.createElement(y.a,{alignItems:"flex-start"},r.a.createElement(b.a,{primary:"Attend seminar at Gandhi park",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"#100, 7th street, Gandhi road, +91-9999999999"))})),r.a.createElement(x.a,null))))),r.a.createElement(J.a,{item:!0,xs:9},r.a.createElement(J.a,{container:!0,spacing:3},r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(d.a,{component:"div",className:" dashCard"},r.a.createElement(d.a,{component:"div",className:e.primaryBg+" card-body"},r.a.createElement(d.a,{component:"span",className:"dashIcon"},r.a.createElement("i",{className:"icon-people"})),r.a.createElement(d.a,{component:"div",className:"counterInside"},r.a.createElement(d.a,{component:"h3",className:"dashCount"},"80"),r.a.createElement(d.a,{component:"p",m:0,className:"dashLabel"},"Todays Appointments"))))),r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(d.a,{component:"div",className:" dashCard"},r.a.createElement(d.a,{component:"div",className:e.secondaryBg+" card-body"},r.a.createElement(d.a,{component:"span",className:"dashIcon"},r.a.createElement("i",{className:"icon-people"})),r.a.createElement(d.a,{component:"div",className:"counterInside"},r.a.createElement(d.a,{component:"h3",className:"dashCount"},"80"),r.a.createElement(d.a,{component:"p",m:0,className:"dashLabel"},"Total Appointments"))))),r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(d.a,{component:"div",className:" dashCard"},r.a.createElement(d.a,{component:"div",className:e.infoBg+" card-body"},r.a.createElement(d.a,{component:"span",className:"dashIcon"},r.a.createElement("i",{className:"icon-people"})),r.a.createElement(d.a,{component:"div",className:"counterInside"},r.a.createElement(d.a,{component:"h3",className:"dashCount"},"45%"),r.a.createElement(d.a,{component:"p",m:0,className:"dashLabel"},"Stocks"))))),r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(d.a,{component:"div",className:" dashCard"},r.a.createElement(d.a,{component:"div",className:e.warningBg+" card-body"},r.a.createElement(d.a,{component:"span",className:"dashIcon"},r.a.createElement("i",{className:"icon-people"})),r.a.createElement(d.a,{component:"div",className:"counterInside"},r.a.createElement(d.a,{component:"h3",className:"dashCount"},"80k"),r.a.createElement(d.a,{component:"p",m:0,className:"dashLabel"},"Total Revenue"))))),r.a.createElement(J.a,{item:!0,xs:12},r.a.createElement(V.a,{style:{minHeight:"400px"}},r.a.createElement($.a,null,r.a.createElement(K.a,{chartType:"AreaChart",data:[["Year","Hospital Income","Pharmacy Income","Stock Expenses"],["2017",12300,8945,12005],["2018",24030,6e3,5600],["2019",3e4,21e3,20005],["2020",50233,45e3,1e4]],options:pe,width:"100%",height:"400px",legendToggle:!0})))),r.a.createElement(J.a,{item:!0,xs:12},r.a.createElement(V.a,{style:{minHeight:"400px"}},r.a.createElement($.a,{class:e.paper},r.a.createElement(d.a,{component:"h4",m:1,style:{textAlign:"left"}},"Recent appointments"),r.a.createElement(ie,null)))))))))},ue=function(){return r.a.createElement("div",null,"Patients")},Ee=Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},navWidth:{width:"240px"},mainCont:{marginLeft:"64px",transition:e.transitions.create("margin-left",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerhover:{width:"64px",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}}));var he=function(){var e=Ee(),a=!0,t=Object(n.useState)({hover:!1}),l=Object(c.a)(t,2);return l[0],l[1],r.a.createElement(i.a,null,r.a.createElement(S.a,{theme:T},r.a.createElement(s.a,{color:"grey",position:"fixed",style:{zIndex:T.zIndex.drawer+1},elevation:0},r.a.createElement(p.a,null,r.a.createElement(d.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"}},r.a.createElement(u.a,{variant:"h6",noWrap:!0},"LOGO"),r.a.createElement(d.a,{component:"div"},r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"bell"})),r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"settings"})),r.a.createElement(E.a,null,r.a.createElement(M.a,{name:"logout"})))))),r.a.createElement(p.a,null),r.a.createElement(R,{hoverClass:e.drawerhover,elId:"sideMenu",onHover:function(){a?(document.getElementById("sideMenu").style.width="240px",document.getElementById("mainCont").style.marginLeft="240px",a=!1):(document.getElementById("sideMenu").style.width="64px",document.getElementById("mainCont").style.marginLeft="64px",a=!0)}}),r.a.createElement("main",{className:e.mainCont,id:"mainCont"},r.a.createElement(m.a,{path:"/",exact:!0,component:de}),r.a.createElement(m.a,{path:"/patients",component:ue}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[108,1,2]]]);
//# sourceMappingURL=main.ecd62d42.chunk.js.map