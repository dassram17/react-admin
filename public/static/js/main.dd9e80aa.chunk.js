(this["webpackJsonpreact-material"]=this["webpackJsonpreact-material"]||[]).push([[0],{111:function(e,a,t){e.exports=t.p+"static/media/doctor_toon.04a9f166.png"},144:function(e,a,t){e.exports=t(176)},152:function(e,a,t){},153:function(e,a,t){},172:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),i=t(78),c=t(79),m=t(47),s=t(108),u=(t(152),t(40)),d=t(14),p=(t(153),t(36)),g=t(31),h=t(11),f=t.n(h),E=t(237),b=(t(172),t(128)),v=t(109),y=t.n(v),x=t(110),k=t.n(x),C=t(80),w=Object(b.a)({palette:{primary:{main:y.a[500],contrastText:"#fff"},secondary:{main:k.a[500]},error:{main:C.a[500]}}}),T=t(111),I=t.n(T),N=t(230),O=t(255),P=t(238),S=t(55),j=t(239),A=t(231),W=t(232),V=t(180),L=t(181),R=t(188),F=t(234),q=t(183),B=t(182),D=t(185),M=t(235),_=t(258),U=t(236),H=t(257),z=Object(N.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{},form:{width:"65%",margin:"0 auto"},errorText:{color:e.palette.error.main,fontSize:"0.75rem",marginLeft:"14px",marginRight:"14px",lineHeight:"1.66",fontWeight:400}}})),G=function(e){var a=z(),t=function(e){return null!==e.icon?l.a.createElement(A.a,{position:e.iconPosition},e.icon):null};return Object(n.useEffect)((function(){})),l.a.createElement(O.a,{mb:4},function(n){switch(n.elType){case"Input":return l.a.createElement(W.a,{error:!n.isValid&&n.touched,type:n.elConfig.type,label:n.elConfig.label,placeholder:n.elConfig.placeholder,className:a.textField,helperText:n.elConfig.helperText,variant:n.elConfig.variant,fullWidth:n.elConfig.fullWidth,InputProps:{startAdornment:t(n.elConfig)},value:n.value,onChange:e.changed});case"Select":return l.a.createElement(V.a,{variant:"outlined",className:a.formControl,fullWidth:!0,error:!n.isValid&&n.touched},l.a.createElement(L.a,null,n.elConfig.label),l.a.createElement(R.a,{value:n.elConfig.value,label:n.elConfig.label,onChange:e.changed},n.elConfig.options.map((function(e,a){return l.a.createElement(F.a,{key:e.value,value:e.value},e.displayValue)}))),l.a.createElement(q.a,null,n.elConfig.helperText));case"Textarea":return l.a.createElement(W.a,{error:!n.isValid&&n.touched,type:n.elConfig.type,label:n.elConfig.label,placeholder:n.elConfig.placeholder,className:a.textField,helperText:n.elConfig.helperText,variant:n.elConfig.variant,fullWidth:n.elConfig.fullWidth,InputProps:{startAdornment:t(n.elConfig),multiline:!0,rows:n.elConfig.rows,rowsMax:n.elConfig.rowsMax},value:n.value,onChange:e.changed});case"Checkbox":return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{component:"legend"},n.elConfig.label),l.a.createElement(D.a,{row:!0},n.elConfig.options.map((function(a,t){return l.a.createElement(M.a,{key:a.value,control:l.a.createElement(_.a,{checked:a.checked,name:n.elConfig.name,value:a.value,onChange:e.changed}),label:a.label})}))),l.a.createElement("div",{className:a.errorText},n.elConfig.helperText));case"Radio":return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{component:"legend"},n.elConfig.label),l.a.createElement(U.a,{row:!0,"aria-label":"gender",name:n.elConfig.name,value:n.value,onChange:e.changed},n.elConfig.options.map((function(e,a){return l.a.createElement(M.a,{key:e.value,value:e.value,labelPlacement:n.elConfig.labelPlacement,control:l.a.createElement(H.a,null),label:e.label})}))));default:return l.a.createElement(W.a,{type:"text",label:"Username",className:a.textField,helperText:"",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:l.a.createElement(A.a,{position:"start"},l.a.createElement(f.a,{name:"user"}))}})}}(e.config))},J=function(e,a){var t=!0,n="";return a.map((function(a,l){a.required&&(t=""!==e.trim()&&t,n=t?"":a.message),a.minLength&&e.length>0&&(t=e.length>=a.minLength&&t,n=t?"":a.message),a.maxLength&&e.length>0&&(t=e.length<=a.maxLength&&t,n=t?"":a.message),a.email&&e.length>0&&(t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&t,n=t?"":a.message)})),n},X=Object(N.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{},invalid:{color:"red"},form:{width:"65%",margin:"0 auto"}}})),Y=Object(i.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,token:e.auth.token,message:e.auth.message,status:e.auth.status}}),(function(e){return{onAuth:function(a,t){return e(function(e,a){return function(t){t({type:"AUTH_START"}),"admin@gmail.com"===e&&"123456"===a?setTimeout((function(){t(function(e){return{type:"AUTH_SUCCESS",token:e.token,status:e.status,message:e.message}}({token:"tkn121212",status:"success",message:"Loggedin successfully!.."})),t({type:"AUTH_RESET"})}),5e3):setTimeout((function(){t(function(e){return{type:"AUTH_FAILURE",error:e.code,status:e.status,message:e.message}}({code:401,status:"failed",message:"Check your username or password!."})),t({type:"AUTH_RESET"})}),5e3)}}(a,t))}}}))(Object(c.b)((function(e){var a=X(),t=Object(d.g)();Object(n.useEffect)((function(){localStorage.getItem("auth")&&t.push("/admin/dashboard")}));var r=Object(n.useState)({formValid:!1,loginForm:{username:{elType:"Input",elConfig:{type:"input",label:"Username",placeholder:"Username",name:"username",icon:l.a.createElement(f.a,{name:"user"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter username"},{minLength:6,message:"Must be 6 characters long!."},{email:!0,message:"Not an email"}]},password:{elType:"Input",elConfig:{type:"password",label:"Password",placeholder:"Password",name:"password",icon:l.a.createElement(f.a,{name:"key"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter password"},{minLength:6,message:"Must be 6 characters long!."}]}}}),o=Object(g.a)(r,2),i=o[0],c=o[1],m=[];for(var s in i.loginForm)m.push({id:s,config:i.loginForm[s]});e.loading,e.error&&e.enqueueSnackbar(e.message,{variant:"error"}),"success"===e.status&&(e.enqueueSnackbar(e.message,{variant:"success"}),localStorage.setItem("auth",e.token),t.push("/admin/dashboard"));return l.a.createElement(E.a,{theme:w},l.a.createElement(O.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"loginCont",style:{height:"100vh"}},l.a.createElement(P.a,null,l.a.createElement(O.a,{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",style:{width:"50vw"}},l.a.createElement(O.a,{className:"loginLeftBox"},l.a.createElement(O.a,{style:{fontSize:"32px",marginBottom:"24px",color:"#fff"}},"Logo"),l.a.createElement(O.a,{component:"img",src:I.a,className:"toonImg"}),l.a.createElement(O.a,{color:"white",m:2},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.")),l.a.createElement(O.a,{className:"loginFormBox"},l.a.createElement("form",{className:a.form,onSubmit:function(a){a.preventDefault(),e.onAuth(i.loginForm.username.value,i.loginForm.password.value)}},l.a.createElement(O.a,{mt:12,mb:6},l.a.createElement(S.a,{variant:"h5",component:"h5",color:"primary"},"LOGIN"),l.a.createElement(S.a,{component:"span"},"Please login to your account")),m.map((function(e,a){return l.a.createElement(G,{key:e.id,config:e.config,changed:function(a){return function(e,a){var t=Object(p.a)({},i.loginForm),n=Object(p.a)({},t[a]);n.touched=!0,n.value=e.target.value,t[a]=n,null===n.rules?n.isValid=!0:(n.isValid=""===J(e.target.value,n.rules),n.elConfig.helperText=J(e.target.value,n.rules));var l=!0;for(var r in t)l=t[r].isValid&&l;c({loginForm:t,formValid:l})}(a,e.id)}})})),l.a.createElement(O.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end"},l.a.createElement(j.a,{variant:"contained",color:"primary",disabled:!i.formValid||e.loading,type:"submit"},e.loading?"Please wait...":"Login"))))))))}))),$=t(260),K=t(240),Q=t(233),Z=t(184),ee=t(241),ae=t(242),te=t(228),ne=t(243),le=t(123),re=t.n(le),oe=t(124),ie=t.n(oe),ce=t(112),me=t.n(ce),se=t(113),ue=t.n(se),de=t(114),pe=t.n(de),ge=t(115),he=t.n(ge),fe=t(116),Ee=t.n(fe),be=t(117),ve=t.n(be),ye=t(119),xe=t.n(ye),ke=t(118),Ce=t.n(ke),we=t(120),Te=t.n(we),Ie=t(121),Ne=t.n(Ie),Oe=t(122),Pe=t.n(Oe),Se=function(e){switch(e){case"home":return l.a.createElement(me.a,null);case"patients":return l.a.createElement(ue.a,null);case"appointments":return l.a.createElement(pe.a,null);case"laboratory":return l.a.createElement(he.a,null);case"radiology":return l.a.createElement(Ee.a,null);case"pharmacy":return l.a.createElement(ve.a,null);case"pool":return l.a.createElement(Ce.a,null);case"ward":return l.a.createElement(xe.a,null);case"billing":return l.a.createElement(Te.a,null);case"staff":return l.a.createElement(Ne.a,null);case"forms":return l.a.createElement(Pe.a,null);default:return""}},je=[{key:"dashboard",name:"Dashboard",route:"/admin/dashboard",icon:Se("home"),divider:!1,submenu:[]},{key:"patients",name:"Patients",route:"/admin/patients",icon:Se("patients"),divider:!1,submenu:[]},{key:"appointments",name:"Appointments",route:"/admin/appointments",icon:Se("appointments"),divider:!0,submenu:[]},{key:"laboratory",name:"Laboratory",route:"/admin/laboratory",icon:Se("laboratory"),divider:!1,submenu:[]},{key:"radiology",name:"Radiology",route:"/admin/radiology",icon:Se("radiology"),divider:!1,submenu:[]},{key:"pharmacy",name:"Pharmacy",route:"/admin/pharmacy",icon:Se("pharmacy"),divider:!0,submenu:[]},{key:"patient-pool",name:"Patient pool",route:"/admin/patient-pool",icon:Se("pool"),divider:!1,submenu:[]},{key:"ward",name:"Ward management",route:"/admin/ward",icon:Se("ward"),divider:!1,submenu:[]},{key:"billing",name:"Billing management",route:"/admin/billing",icon:Se("billing"),divider:!0,submenu:[]},{key:"staff",name:"Staff management",route:"/admin/staff",icon:Se("staff"),divider:!1,submenu:[]},{key:"forms",name:"Forms",route:"/admin/forms",icon:Se("forms"),divider:!1,submenu:[]}],Ae=Object(N.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},navWidth:{width:"240px"},navLink:{borderRadius:"0 42px 42px 0",transition:e.transitions.create("all",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),"&:hover":{backgroundColor:e.palette.primary.main,color:"#fff"}},active:{boxShadow:"6px 0px 0px inset "+e.palette.primary.main,color:e.palette.primary.main+" !important",borderRadius:"0 42px 42px 0","&:hover":{backgroundColor:e.palette.primary.main,color:"#fff !important"}}}})),We=function(e){var a=Ae(),t=l.a.useState(""),n=Object(g.a)(t,2),r=n[0],o=n[1];return l.a.createElement($.a,{open:!0,variant:"permanent",onMouseEnter:e.onMouseOver,onMouseLeave:e.onMouseLeave},l.a.createElement(K.a,null),l.a.createElement(Q.a,{component:"nav",className:e.hoverClass,id:e.elId},je.map((function(e,t){return e.submenu.length>0?l.a.createElement(l.a.Fragment,{key:e.key},l.a.createElement(Z.a,{key:e.key,button:!0,onClick:function(){return function(e){o(r===e?"":e)}(t)}},l.a.createElement(ee.a,null,l.a.createElement("i",{className:e.icon})),l.a.createElement(ae.a,{primary:e.name}),t===r?l.a.createElement(re.a,null):l.a.createElement(ie.a,null)),l.a.createElement(te.a,{in:t===r,timeout:"auto",unmountOnExit:!0},l.a.createElement(Q.a,{component:"div",disablePadding:!0},e.submenu.map((function(e,t){return l.a.createElement(Z.a,{key:e.key,button:!0,className:a.nested,component:u.b,to:e.route},l.a.createElement(ae.a,{primary:"-- "+e.name}))})))),l.a.createElement(ne.a,null)):l.a.createElement(l.a.Fragment,{key:e.key},"/"===e.route?l.a.createElement(Z.a,{button:!0,key:e.key,className:a.navLink,component:u.b,to:e.route,exact:!0,activeClassName:a.active+" active"},l.a.createElement(ee.a,null,e.icon),l.a.createElement(ae.a,{primary:e.name,style:{whiteSpace:"nowrap"}})):l.a.createElement(Z.a,{button:!0,key:e.key,className:a.navLink,component:u.b,to:e.route,activeClassName:a.active+" active"},l.a.createElement(ee.a,null,e.icon),l.a.createElement(ae.a,{primary:e.name,style:{whiteSpace:"nowrap"}})),e.divider?l.a.createElement(ne.a,null):"")}))))},Ve=t(244),Le=t(186),Re=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ve.a,{color:"default",position:"fixed",style:{zIndex:w.zIndex.drawer+1},elevation:0},l.a.createElement(K.a,{style:{backgroundColor:"#fff"}},l.a.createElement(O.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"}},l.a.createElement(S.a,{variant:"h6",noWrap:!0},"LOGO"),l.a.createElement(O.a,{component:"div"},l.a.createElement(Le.a,null,l.a.createElement(f.a,{name:"bell"})),l.a.createElement(Le.a,null,l.a.createElement(f.a,{name:"settings"})),l.a.createElement(Le.a,{onClick:e.logoutClick},l.a.createElement(f.a,{name:"logout"})))))))},Fe=Object(N.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},navWidth:{width:"240px"},mainCont:{marginLeft:"64px",transition:e.transitions.create("margin-left",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerhover:{width:"64px",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}})),qe=function(e){var a=Fe(),t=Object(d.g)();Object(n.useEffect)((function(){console.log("com zzx"),localStorage.getItem("auth")||t.push("/login")}));return l.a.createElement(E.a,{theme:w},l.a.createElement(Re,{logoutClick:function(){console.log(t),localStorage.clear(),t.push("/login")}}),l.a.createElement(K.a,null),l.a.createElement(We,{hoverClass:a.drawerhover,elId:"sideMenu",onMouseOver:function(){document.getElementById("sideMenu").style.width="240px",document.getElementById("mainCont").style.marginLeft="240px"},onMouseLeave:function(){document.getElementById("sideMenu").style.width="64px",document.getElementById("mainCont").style.marginLeft="64px"}}),l.a.createElement("main",{className:a.mainCont,id:"mainCont"},e.children))},Be=t(61),De=t.n(Be),Me=t(251),_e=t(131),Ue=t(252),He=t(261),ze=t(253),Ge=t(125),Je=(t(175),t(4)),Xe=t(247),Ye=t(250),$e=t(245),Ke=t(246),Qe=t(248),Ze=t(259),ea=t(249),aa=[{id:"name",label:"Name",minWidth:170},{id:"mobile",label:"Mobile",minWidth:100},{id:"appointment_for",label:"Appointment For",minWidth:50},{id:"date",label:"Date",minWidth:100,align:"right"},{id:"time",label:"Time",minWidth:50,align:"right"},{id:"action",label:"Action",minWidth:170,align:"right"}];function ta(e,a,t,n,l,r){return{name:e,mobile:a,appointment_for:t,date:n,time:l,action:r}}var na=[ta("Raj","+91-9876543210","Dog","15/Aug/2020","02:00",l.a.createElement("div",null,l.a.createElement(Le.a,{color:"secondary"},l.a.createElement(f.a,{name:"check"}))," ",l.a.createElement(Le.a,{style:{color:w.palette.error.main}},l.a.createElement(f.a,{name:"close"})))),ta("Raj","+91-9876543210","Dog","15/Aug/2020","02:30",l.a.createElement("div",null,l.a.createElement(Le.a,{color:"secondary"},l.a.createElement(f.a,{name:"check"}))," ",l.a.createElement(Le.a,{style:{color:w.palette.error.main}},l.a.createElement(f.a,{name:"close"})))),ta("Raj","+91-9876543210","Dog","15/Aug/2020","03:00","Approved"),ta("Raj","+91-9876543210","Dog","15/Aug/2020","03:20","Rejected"),ta("Raj","+91-9876543210","Dog","15/Aug/2020","04:00",l.a.createElement("div",null,l.a.createElement(Le.a,{color:"secondary"},l.a.createElement(f.a,{name:"check"}))," ",l.a.createElement(Le.a,{style:{color:w.palette.error.main}},l.a.createElement(f.a,{name:"close"})))),ta("Raj","+91-9876543210","Dog","15/Aug/2020","05:45",l.a.createElement("div",null,l.a.createElement(Le.a,{color:"secondary"},l.a.createElement(f.a,{name:"check"}))," ",l.a.createElement(Le.a,{style:{color:w.palette.error.main}},l.a.createElement(f.a,{name:"close"}))))],la=Object(Je.a)((function(e){return{head:{backgroundColor:e.palette.common.white,color:e.palette.common.black},body:{fontSize:14}}}))($e.a),ra=Object(N.a)({root:{width:"100%"},container:{maxHeight:440},error:{color:w.palette.error.main}});function oa(){var e=ra(),a=l.a.useState(0),t=Object(g.a)(a,2),n=t[0],r=t[1],o=l.a.useState(10),i=Object(g.a)(o,2),c=i[0],m=i[1];return l.a.createElement("div",{className:e.root},l.a.createElement(Ke.a,{className:e.container},l.a.createElement(Xe.a,{stickyHeader:!0,"aria-label":"sticky table"},l.a.createElement(Qe.a,{color:"primary"},l.a.createElement(ea.a,null,aa.map((function(e){return l.a.createElement(la,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),l.a.createElement(Ye.a,null,na.slice(n*c,n*c+c).map((function(e,a){return l.a.createElement(ea.a,{hover:!0,role:"checkbox",tabIndex:-1,key:"app-"+a},aa.map((function(a){var t=e[a.id];return l.a.createElement($e.a,{key:"appcol-"+a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),l.a.createElement(Ze.a,{rowsPerPageOptions:[10,25,100],component:"div",count:na.length,rowsPerPage:c,page:n,onChangePage:function(e,a){r(a)},onChangeRowsPerPage:function(e){m(+e.target.value),r(0)}}))}var ia=Object(N.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},primaryBg:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},secondaryBg:{backgroundColor:e.palette.secondary.main},infoBg:{backgroundColor:e.palette.info.main},warningBg:{backgroundColor:e.palette.warning.main}}})),ca={title:"Revenue comparison",hAxis:{title:"Year"},vAxis:{title:"Revenue"},colors:["#ff9800","#2196f3","#4caf50"]},ma=function(e){var a=ia(),t=[{icon:"icon-people",count:86,label:"Today's appointment",classNm:a.primaryBg},{icon:"icon-people",count:86,label:"Total Appointments",classNm:a.secondaryBg},{icon:"icon-people",count:"45%",label:"Stocks",classNm:a.infoBg},{icon:"icon-people",count:"80k",label:"Total Revenue",classNm:a.warningBg}],r=[{avatar:De.a,name:"John",mobile:"+919000000009",email:"test@mail.com",primary:"Is home visit is vailable?",secondary:" I am looking for a home visit, is this available please reply me..."},{avatar:De.a,name:"Agbar",mobile:"+919000000009",email:"test@mail.com",primary:"Is home visit is vailable?",secondary:" I am looking for a home visit, is this available please reply me..."},{avatar:De.a,name:"George",mobile:"+919000000009",email:"test@mail.com",primary:"Is home visit is vailable?",secondary:" I am looking for a home visit, is this available please reply me..."}],o=Object(n.useState)([]),i=Object(g.a)(o,2),c=i[0],m=i[1];Object(n.useEffect)((function(){setTimeout((function(){s()}),5e3)}));var s=function(){m([{title:"Purchase stocks",key:"Pharma",description:"Pharmacy item stocklist"},{title:"Purchase equiments",key:"Equipment",description:"Equipment needed."},{title:"Meeting",key:"Tambaram",description:"Attend seminar meeting at Tambaram."}])};return l.a.createElement(E.a,{theme:w},l.a.createElement(Me.a,{container:!0,spacing:3},l.a.createElement(Me.a,{item:!0,xs:12,sm:12,md:3},l.a.createElement(_e.a,{p:2,className:a.paper+" profileCard"},l.a.createElement(O.a,{component:"div",className:"profileCardImg",elevation:2},l.a.createElement("img",{src:De.a,alt:"image"})),l.a.createElement(O.a,{component:"h3",m:1},"Dr. Radhakrishnan. MBBS,PhD"),l.a.createElement(O.a,{component:"p",mb:2},"Specialist in Veterinary treatment for pets"),l.a.createElement(Me.a,{container:!0},l.a.createElement(Me.a,{item:!0,xs:3},l.a.createElement("span",{className:"countSpan"},"206"),l.a.createElement("span",null,"Clients")),l.a.createElement(Me.a,{item:!0,xs:1}),l.a.createElement(Me.a,{item:!0,xs:4},l.a.createElement("span",{className:"countSpan"},"1282"),l.a.createElement("span",null,"Appointments")),l.a.createElement(Me.a,{item:!0,xs:1}),l.a.createElement(Me.a,{item:!0,xs:3},l.a.createElement("span",{className:"countSpan"},"4.8/5"),l.a.createElement("span",null,"Rating")))),l.a.createElement(_e.a,{style:{marginTop:"16px"},className:a.paper},l.a.createElement(O.a,{component:"h4",m:1},"Recent queries"),l.a.createElement(O.a,{component:"div",mb:2},l.a.createElement(Q.a,{className:a.root},r.map((function(e,t){return l.a.createElement(Z.a,{key:"query-"+t,alignItems:"flex-start",divider:!0},l.a.createElement(Ue.a,null,l.a.createElement(He.a,{src:e.avatar})),l.a.createElement(ae.a,{primary:e.primary,secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},e.name)," -- "+e.secondary,l.a.createElement(O.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",style:{width:"100%"}},l.a.createElement(Le.a,{component:"a",href:"tel:"+e.mobile,style:{fontSize:"16px"}},l.a.createElement("i",{className:"icon-phone"})),l.a.createElement(Le.a,{component:"a",href:"mailto:"+e.email,style:{fontSize:"16px"}},l.a.createElement("i",{className:"icon-envelope"}))))}))}))))),l.a.createElement(_e.a,{style:{marginTop:"16px"},className:a.paper},l.a.createElement(O.a,{component:"h4",m:1},"ToDo List"),l.a.createElement(O.a,{component:"div",mb:2},l.a.createElement(Q.a,{className:a.root},0===c.length?l.a.createElement(O.a,{component:"p"},"No data found!.."):c.map((function(e,t){return l.a.createElement(Z.a,{alignItems:"flex-start",divider:!0,key:"todo-"+t},l.a.createElement(ae.a,{primary:e.title,secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{component:"span",variant:"body2",className:a.inline,color:"primary"},e.key)," \u2014 "+e.description)}))})))))),l.a.createElement(Me.a,{item:!0,xs:12,sm:12,md:9},l.a.createElement(Me.a,{container:!0,spacing:3},t.map((function(e,a){return l.a.createElement(Me.a,{item:!0,xs:12,sm:6,md:3,key:a},l.a.createElement(O.a,{component:"div",className:" dashCard"},l.a.createElement(O.a,{component:"div",className:e.classNm+" card-body"},l.a.createElement(O.a,{component:"span",className:"dashIcon"},l.a.createElement("i",{className:e.icon})),l.a.createElement(O.a,{component:"div",className:"counterInside"},l.a.createElement(O.a,{component:"h3",className:"dashCount"},e.count),l.a.createElement(O.a,{component:"p",m:0,className:"dashLabel"},e.label)))))})),l.a.createElement(Me.a,{item:!0,xs:12},l.a.createElement(P.a,{style:{minHeight:"400px"}},l.a.createElement(ze.a,null,l.a.createElement(Ge.a,{chartType:"AreaChart",data:[["Year","Hospital Income","Pharmacy Income","Stock Expenses"],["2017",12300,8945,12005],["2018",24030,6e3,5600],["2019",3e4,21e3,20005],["2020",50233,45e3,1e4]],options:ca,width:"100%",height:"400px",legendToggle:!0})))),l.a.createElement(Me.a,{item:!0,xs:12},l.a.createElement(P.a,{style:{minHeight:"400px"}},l.a.createElement(ze.a,{className:a.paper},l.a.createElement(O.a,{component:"h4",m:1,style:{textAlign:"left"}},"Recent appointments"),l.a.createElement(oa,null))))))))},sa=function(){return l.a.createElement("div",null,"Patients")},ua=t(88),da=t(254),pa=t(127),ga=t.n(pa),ha={textInput:{elType:"Input",elConfig:{type:"input",label:"Input",placeholder:"",name:"input",icon:l.a.createElement(f.a,{name:"user"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter username"}]},numberInput:{elType:"Input",elConfig:{type:"number",label:"Number",placeholder:"",name:"number",icon:l.a.createElement(f.a,{name:"phone"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter number"},{maxLength:6,message:"Not more than 6 characters!."}]},telInput:{elType:"Input",elConfig:{type:"tel",label:"Telephone",placeholder:"",name:"telephone",icon:l.a.createElement(ga.a,null),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter telephone"}]},emailInput:{elType:"Input",elConfig:{type:"email",label:"E-Mail",placeholder:"",name:"email",icon:l.a.createElement(f.a,{name:"envelope"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter email"},{email:!0,message:"Not an email"}]},dateInput:{elType:"Input",elConfig:{type:"date",label:"Date",placeholder:"",name:"data",icon:l.a.createElement(f.a,{name:"user"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter date"}]},timeInput:{elType:"Input",elConfig:{type:"time",label:"Time",placeholder:"",name:"time",icon:l.a.createElement(f.a,{name:"user"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:""},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please choose time"}]},selectInput:{elType:"Select",elConfig:{type:"select",label:"Select",placeholder:"",name:"gender",icon:l.a.createElement(f.a,{name:"user"}),iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:"",options:[{value:"",displayValue:"None"},{value:"Opt1",displayValue:"Option 1"},{value:"Opt2",displayValue:"Option 2"}]},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please choose any value"}]},textareaInput:{elType:"Textarea",elConfig:{label:"Textarea",placeholder:"",name:"textarea",icon:"",iconPosition:"start",variant:"outlined",fullWidth:!0,helperText:"",row:1,rowsMax:5},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please enter address"}]},checkboxInput:{elType:"Checkbox",elConfig:{name:"textarea",label:"Checkbox",helperText:"",options:[{label:"Checkbox",checked:!1,value:"apple"},{label:"Checkbox2",checked:!1,value:"banana"}]},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please check atleast one value"}]},radioInput:{elType:"Radio",elConfig:{name:"radio",label:"Gender",labelPlacement:"end",helperText:"",options:[{label:"Male",checked:!1,value:"male"},{label:"Female",checked:!1,value:"female"}]},value:"",touched:!1,isValid:!1,rules:[{required:!0,message:"Please choose any value"}]}},fa=function(){var e=Object(n.useState)({inputs:ha,formIsValid:!1}),a=Object(g.a)(e,2),t=a[0],r=a[1],o=[];for(var i in t.inputs)o.push({id:i,config:t.inputs[i]});return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,null,l.a.createElement(ze.a,null,o.map((function(e,a){return l.a.createElement(G,{key:e.id,config:e.config,changed:function(a){return function(e,a){var n=Object(p.a)({},t.inputs),l=Object(p.a)({},n[a]);if("Checkbox"===l.elType){var o=Object(ua.a)(l.elConfig.options),i=[];o.forEach((function(a){a.value===e.target.value&&(a.checked=e.target.checked)})),o.forEach((function(e){e.checked&&i.push(e.value)})),l.value=i.join(",")}else if("Radio"===l.elType){Object(ua.a)(l.elConfig.options).forEach((function(a){a.value===e.target.value?(a.checked=e.target.checked,l.value=e.target.value):a.checked=!1}))}else l.value=e.target.value;l.touched=!0,null===l.rules?l.isValid=!0:(l.isValid=""===J(l.value,l.rules),l.elConfig.helperText=J(l.value,l.rules)),n[a]=l;var c=!0;for(var m in n)c=n[m].isValid&&c;r({inputs:n,formIsValid:c})}(a,e.id)}})}))),l.a.createElement(da.a,null,l.a.createElement(O.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",width:"100%"},l.a.createElement(j.a,{variant:"contained",color:"primary",disabled:!t.formIsValid||!1,type:"submit"},"Submit")))))};var Ea=function(e){var a=localStorage.getItem("auth");return l.a.createElement(u.a,null,l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/",exact:!0,render:function(){return a?l.a.createElement(d.a,{to:"/admin/dashboard"}):l.a.createElement(d.a,{to:"/login"})}}),l.a.createElement(d.b,{path:"/admin",exact:!0,render:function(){return a?l.a.createElement(d.a,{to:"/admin/dashboard"}):l.a.createElement(d.a,{to:"/login"})}}),l.a.createElement(d.b,{path:"/login",component:Y}),l.a.createElement(d.b,{path:"/admin",exact:!0,component:qe}),l.a.createElement(qe,null,l.a.createElement(d.b,{path:"/admin/dashboard",component:ma}),l.a.createElement(d.b,{path:"/admin/patients",component:sa}),l.a.createElement(d.b,{path:"/admin/forms",component:fa}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ba=function(e,a){return Object(p.a)(Object(p.a)({},e),a)},va={token:null,error:null,message:null,status:null,loading:!1},ya=function(e,a){return ba(e,{token:null,error:null,message:null,status:null,loading:!0})},xa=function(e,a){return ba(e,{token:a.token,message:a.message,error:null,loading:!1,status:a.status})},ka=function(e,a){return ba(e,{error:a.error,message:a.message,loading:!1,status:a.status})},Ca=function(e,a){return ba(e,{token:null,error:null,message:null,status:null,loading:!1})},wa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:va,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_START":return ya(e);case"AUTH_SUCCESS":return xa(e,a);case"AUTH_FAILURE":return ka(e,a);case"AUTH_RESET":return Ca(e);default:return e}},Ta=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,Ia=Object(m.c)({auth:wa}),Na=Object(m.e)(Ia,Ta(Object(m.a)(s.a)));o.a.render(l.a.createElement(i.a,{store:Na},l.a.createElement(c.a,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"center"}},l.a.createElement(Ea,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[144,1,2]]]);
//# sourceMappingURL=main.dd9e80aa.chunk.js.map