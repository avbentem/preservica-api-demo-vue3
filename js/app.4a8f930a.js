(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return i.p+"js/"+({curl:"curl",indexes:"indexes","oai-pmh":"oai-pmh",search:"search"}[e]||e)+"."+{curl:"03dbc39e",indexes:"71823ca1","oai-pmh":"514f9737",search:"4a95130d"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/preservica-api-demo/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"34f5":function(e,t,n){"use strict";var o=n("7a23"),r={key:0},c=Object(o["createTextVNode"])(" You need to "),a=Object(o["createTextVNode"])("configure this demo"),i=Object(o["createTextVNode"])(" to access your data. ");function u(e,t,n,u,s,l){var d=Object(o["resolveComponent"])("router-link");return e.configured?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("p",r,[c,Object(o["createVNode"])(d,{to:"/config"},{default:Object(o["withCtx"])((function(){return[a]})),_:1}),i]))}var s=n("d0f2"),l=Object(o["defineComponent"])({setup:function(){var e=Object(s["b"])(),t=e.configured;return{configured:t}}});l.render=u;t["a"]=l},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("a7bd"),c=n.n(r),a=n("51e4"),i=n.n(a),u=n("6549"),s=n.n(u),l=n("f1d0"),d=n.n(l),p=n("c524"),f=n.n(p),b=n("3ac1"),h=n.n(b),m=n("23a5"),v=n.n(m),O=n("404c"),j=n.n(O),g=n("a84a"),x=n.n(g),y=n("86b0"),w=n.n(y),V=n("b51d"),k=n.n(V),N=n("65d1"),T=n.n(N),C=n("6060"),P=n.n(C),A=n("8459"),S=n.n(A),B=n("40f3"),R=n.n(B),I={id:"nav"},D=Object(o["createTextVNode"])("home"),U=Object(o["createTextVNode"])(" | "),_=Object(o["createTextVNode"])("configuration"),z=Object(o["createTextVNode"])(" | "),W=Object(o["createTextVNode"])("indexed fields"),F=Object(o["createTextVNode"])(" | "),H=Object(o["createTextVNode"])("search"),M=Object(o["createTextVNode"])(" | "),E=Object(o["createTextVNode"])("oai-pmh"),L=Object(o["createTextVNode"])(" | "),q=Object(o["createTextVNode"])("curl");function G(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("router-link"),u=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("Toast");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",I,[Object(o["createVNode"])(i,{to:"/"},{default:Object(o["withCtx"])((function(){return[D]})),_:1}),U,Object(o["createVNode"])(i,{to:"/config"},{default:Object(o["withCtx"])((function(){return[_]})),_:1}),z,Object(o["createVNode"])(i,{to:"/indexes"},{default:Object(o["withCtx"])((function(){return[W]})),_:1}),F,Object(o["createVNode"])(i,{to:"/search"},{default:Object(o["withCtx"])((function(){return[H]})),_:1}),M,Object(o["createVNode"])(i,{to:"/oai-pmh"},{default:Object(o["withCtx"])((function(){return[E]})),_:1}),L,Object(o["createVNode"])(i,{to:"/curl"},{default:Object(o["withCtx"])((function(){return[q]})),_:1})]),Object(o["createVNode"])(u,{id:"view"},{default:Object(o["withCtx"])((function(e){var t=e.Component;return[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(t)))],1024))]})),_:1}),Object(o["createVNode"])(s)],64)}var J=n("d0f2"),Y={setup:function(){Object(J["a"])()}};n("da24");Y.render=G;var K=Y,X=(n("d3b7"),n("6c02")),Q={class:"home intro"},Z=Object(o["createVNode"])("h1",null,"Preservica APIs demo",-1),$=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" This is a (work in progress) kitchen sink showing various usage examples for some of "),Object(o["createVNode"])("a",{href:"https://developers.preservica.com/api-reference"},"the Preservica APIs.")],-1),ee=Object(o["createVNode"])("p",null,"This application runs in your browser.",-1);function te(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("AuthWarning");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Q,[Z,$,ee,Object(o["createVNode"])(i)])}var ne=n("34f5"),oe=Object(o["defineComponent"])({name:"Home",components:{AuthWarning:ne["a"]}});oe.render=te;var re=oe,ce={class:"configuration intro"},ae=Object(o["createVNode"])("h1",null,"Configuration",-1),ie={key:0},ue={key:1},se=Object(o["createVNode"])("p",null,"The Preservica APIs needs authorization, even for anonymous access.",-1),le=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" When logged in to Preservica SaaS, the session cookie "),Object(o["createVNode"])("a",{href:"https://eu.preservica.com/OAI-PMH/?verb=Identify"},"will be used"),Object(o["createTextVNode"])(" when accessing the APIs in a browser directly. But for most use cases, a successful login on "),Object(o["createVNode"])("a",{href:"https://developers.preservica.com/api-reference/6-access-token-api"},"the Access Token API"),Object(o["createTextVNode"])(" is required and yields an access token and a refresh token. An access token is valid for 15 minutes and can be used in an HTTP header. However, the refresh token is valid for the same short period as the access token (and can only be used once), so is only useful when continuously accessing the API. In this demo the refresh token is ignored, and instead a new login is performed whenever the access token has expired. ")],-1),de=Object(o["createVNode"])("p",null," A token can also be generated through the externally authenticated acquisition API. This allows a trusted external application to acquire Preservica access rights without being authenticated by Preservica. See the documentation linked above. ",-1),pe=Object(o["createVNode"])("p",null,[Object(o["createVNode"])("s",null,[Object(o["createTextVNode"])("The resulting access token can also (for a short time) be used in "),Object(o["createVNode"])("a",{href:"https://eu.preservica.com/api/content/documentation.html"},"the Swagger UI interface"),Object(o["createTextVNode"])(" (adjust URL to match your SaaS domain).")])],-1);function fe(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("ConfigInput");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ce,[ae,Object(o["createVNode"])(i),e.configured?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("h2",ie,'Please complete the form and hit "Save" or "Log in"')),e.authorized?(Object(o["openBlock"])(),Object(o["createBlock"])("h2",ue,"Welcome, "+Object(o["toDisplayString"])(e.user.fullName),1)):Object(o["createCommentVNode"])("",!0),se,le,de,pe])}var be={class:"configinput"},he=Object(o["createVNode"])("h2",null,"Server and credentials",-1),me={class:"p-fluid p-formgrid p-grid p-text-left"},ve={class:"p-field p-col-12"},Oe=Object(o["createVNode"])("label",{for:"proxy"},"CORS proxy",-1),je=Object(o["createVNode"])("small",{id:"proxy-help"},[Object(o["createTextVNode"])(" This demo runs in your browser, but the Preservica APIs do not support "),Object(o["createVNode"])("a",{href:"https://developer.mozilla.org/docs/Web/HTTP/CORS"},"CORS"),Object(o["createTextVNode"])(". A proxy server can add CORS headers to use a browser on a different domain. The full API URL will be appended without any encoding. "),Object(o["createVNode"])("strong",null,"A third-party proxy may log your credentials.")],-1),ge={class:"p-field p-col-12"},xe=Object(o["createVNode"])("label",{for:"host"},"API host",-1),ye={class:"p-field p-col-12 p-md-3"},we=Object(o["createVNode"])("label",{for:"tenant"},"Tenant",-1),Ve={class:"p-field p-col-12 p-md-5"},ke=Object(o["createVNode"])("label",{for:"username"},"Username",-1),Ne={class:"p-field p-col-12 p-md-4"},Te=Object(o["createVNode"])("label",{for:"password"},"Password",-1),Ce=Object(o["createTextVNode"])("   "),Pe=Object(o["createTextVNode"])("   ");function Ae(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("InputText"),u=Object(o["resolveComponent"])("Button"),s=Object(o["resolveDirective"])("tooltip");return Object(o["openBlock"])(),Object(o["createBlock"])("div",be,[he,Object(o["createVNode"])("div",me,[Object(o["createVNode"])("div",ve,[Oe,Object(o["createVNode"])(i,{id:"proxy",type:"text",modelValue:e.config.proxy,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.config.proxy=t}),"aria-describedby":"proxy-help"},null,8,["modelValue"]),je]),Object(o["createVNode"])("div",ge,[xe,Object(o["createVNode"])(i,{id:"host",type:"text",modelValue:e.config.host,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.config.host=t})},null,8,["modelValue"])]),Object(o["createVNode"])("div",ye,[we,Object(o["createVNode"])(i,{id:"tenant",type:"text",modelValue:e.config.tenant,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.config.tenant=t})},null,8,["modelValue"])]),Object(o["createVNode"])("div",Ve,[ke,Object(o["createVNode"])(i,{id:"username",type:"text",modelValue:e.config.username,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.config.username=t})},null,8,["modelValue"])]),Object(o["createVNode"])("div",Ne,[Te,Object(o["createVNode"])(i,{id:"password",type:"password",modelValue:e.config.password,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.config.password=t})},null,8,["modelValue"])])]),Object(o["withDirectives"])(Object(o["createVNode"])(u,{icon:"pi pi-save",onClick:e.save,label:"Save"},null,8,["onClick"]),[[s,"Set the configuration, but do not log in yet",void 0,{top:!0}]]),Ce,Object(o["withDirectives"])(Object(o["createVNode"])(u,{icon:"pi pi-user",onClick:e.login,label:"Log in"},null,8,["onClick"]),[[s,"Set the configuration and log in",void 0,{top:!0}]]),Pe,Object(o["withDirectives"])(Object(o["createVNode"])(u,{icon:"pi pi-lock",onClick:e.getToken,label:"Get token"},null,8,["onClick"]),[[s,"Show the current token, or refresh if needed",void 0,{top:!0}]])])}n("96cf");var Se=n("1da1"),Be=n("5502"),Re=n("89d3"),Ie=Object(o["defineComponent"])({setup:function(){var e=Object(Re["useToast"])(),t=Object(Be["b"])(),n=Object(J["b"])(),r=Object(o["ref"])(t.state.config),c=function(){var t=Object(Se["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.setConfig(r.value),e.add({severity:"info",summary:"Saved config",detail:"But not logging in yet",life:3e3});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(Se["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.add({severity:"info",summary:"Logging in",detail:r.value.username,life:3e3}),t.next=3,n.login(r.value);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(Se["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getToken();case 2:o=t.sent,e.add({severity:"info",summary:"Token",detail:o});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{config:r,save:c,login:a,getToken:i}}});Ie.render=Ae;var De=Ie,Ue=Object(o["defineComponent"])({setup:function(){var e=Object(J["b"])(),t=e.configured,n=e.authorized,o=e.user;return{configured:t,authorized:n,user:o}},components:{ConfigInput:De}});Ue.render=fe;var _e=Ue,ze=[{path:"/",name:"Home",component:re},{path:"/config",name:"Configuration",component:_e},{path:"/indexes",name:"Indexed fields",component:function(){return n.e("indexes").then(n.bind(null,"8c18"))}},{path:"/oai-pmh",name:"OAI-PMH",component:function(){return n.e("oai-pmh").then(n.bind(null,"a905"))}},{path:"/search",name:"Search",component:function(){return n.e("search").then(n.bind(null,"2d3b"))}},{path:"/curl",name:"curl",component:function(){return n.e("curl").then(n.bind(null,"52a2"))}}],We=Object(X["a"])({history:Object(X["b"])("/preservica-api-demo/"),routes:ze}),Fe=We,He=Object(Be["a"])({state:{config:{proxy:"https://proxy.arjanvanbentem.nl/",host:"https://eu.preservica.com/",username:"",password:"",tenant:""}},mutations:{setConfig:function(e,t){e.config=t}},actions:{},modules:{}}),Me=(n("bddf"),n("4121"),n("098b"),n("e1ae"),Object(o["createApp"])(K));Me.use(He),Me.use(Fe),Me.use(T.a,{ripple:!0}),Me.use(S.a),Me.component("Accordion",c.a),Me.component("AccordionTab",i.a),Me.component("Button",s.a),Me.component("Column",f.a),Me.component("ColumnGroup",h.a),Me.component("Checkbox",d.a),Me.component("DataTable",v.a),Me.component("Dropdown",j.a),Me.component("InputText",x.a),Me.component("MultiSelect",w.a),Me.component("Password",k.a),Me.component("Toast",P.a),Me.directive("tooltip",R.a),Me.mount("#app")},d0f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));n("a4d3"),n("e01a"),n("d3b7");var o=n("7a23"),r=(n("99af"),n("a15b"),n("ddb0"),n("3835")),c=n("b85c"),a=n("5530"),i=(n("96cf"),n("1da1")),u=n("d4ec"),s=n("89d3"),l=6e4,d=function e(){var t=this;Object(u["a"])(this,e),this.toast=Object(s["useToast"])(),this.user=Object(o["ref"])(void 0),this.configured=Object(o["ref"])(!1),this.authorized=Object(o["ref"])(!1),this.lastCurl=Object(o["ref"])(""),this.setConfig=function(e){t.config=e,t.configured.value=!0,t.authorized.value=!1},this.login=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var o,r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n&&t.setConfig(n),t.authorized.value=!1,o=t.config,r="username=".concat(null===o||void 0===o?void 0:o.username,"&password=").concat(null===o||void 0===o?void 0:o.password,"&tenant=").concat(null===o||void 0===o?void 0:o.tenant,"&includeUserDetails=true"),e.next=6,t.fetchWithDefaults("api/accesstoken/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,t.user.value={user:a.user,fullName:a.fullName,email:a.email,roles:a.roles,token:a.token,refreshToken:a["refresh-token"],validForMinutes:a.validFor,validFrom:Date.now(),validUntil:Date.now()+60*a.validFor*1e3},t.authorized.value=!0,t.toast.add({severity:"success",summary:"Got new token",detail:t.user.value.token,life:2e3});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getToken=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.config){e.next=3;break}throw t.toast.add({severity:"error",summary:"Not configured",detail:"You need to set the configuration first"}),"No credentials set";case 3:if(t.user.value&&!(t.user.value.validUntil-Date.now()<l)){e.next=6;break}return e.next=6,t.login();case 6:if(t.user.value){e.next=8;break}throw"Failed to authenticate";case 8:return e.abrupt("return",t.user.value.token);case 9:case"end":return e.stop()}}),e)}))),this.fetchWithToken=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,o){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getToken();case 2:return r=e.sent,e.abrupt("return",t.fetchWithDefaults(n,o,r));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.fullUrl=function(e){var n,o,r,c=(null===(n=t.config)||void 0===n?void 0:n.host)+e;return null!==(o=t.config)&&void 0!==o&&o.proxy?"".concat(null===(r=t.config)||void 0===r?void 0:r.proxy).concat(c):c},this.fetchWithDefaults=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,o,i){var u,s,l,d,p,f,b,h,m,v,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s={headers:{Accept:"application/json"}},l=new Request(t.fullUrl(n),Object(a["a"])(Object(a["a"])(Object(a["a"])({},s),o),{},{headers:Object(a["a"])(Object(a["a"])(Object(a["a"])({},s.headers),null===o||void 0===o?void 0:o.headers),i?{"Preservica-Access-Token":i}:null)})),d=[],p=Object(c["a"])(l.headers.entries());try{for(p.s();!(f=p.n()).done;)b=Object(r["a"])(f.value,2),h=b[0],m=b[1],d.push("-H '".concat(h,": ").concat(m,"'"))}catch(j){p.e(j)}finally{p.f()}return v=l.bodyUsed?" --data '".concat(null===o||void 0===o?void 0:o.body,"'"):"",t.lastCurl.value="curl -v '".concat((null===(u=t.config)||void 0===u?void 0:u.host)+n,"' -X ").concat(l.method," ").concat(d.join(" ")).concat(v),e.next=9,fetch(l).catch((function(e){throw t.toast.add({severity:"error",summary:"Failed to connect to proxy or server",detail:e}),new Error("Failed to connect to proxy or Preservica server")}));case 9:if(O=e.sent,O.ok){e.next=23;break}return e.t0=t.toast,e.t1="Error ".concat(O.status),e.next=15,O.text();case 15:if(e.t2=e.sent,e.t2){e.next=18;break}e.t2=n;case 18:throw e.t3=e.t2,e.t4={severity:"error",summary:e.t1,detail:e.t3,life:3e4},e.t0.add.call(e.t0,e.t4),console.error(O),new Error(O.statusText);case 23:return e.abrupt("return",O);case 24:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}()},p=Symbol();function f(){Object(o["provide"])(p,new d)}function b(){var e=Object(o["inject"])(p);if(!e)throw Error("plugins/Auth not provided");return e}},da24:function(e,t,n){"use strict";n("f17a")},f17a:function(e,t,n){}});
//# sourceMappingURL=app.4a8f930a.js.map