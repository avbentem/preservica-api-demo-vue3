(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({indexes:"indexes","oai-pmh":"oai-pmh",search:"search"}[e]||e)+"."+{indexes:"646f342b","oai-pmh":"59dc7c67",search:"7c22f9b9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/preservica-api-demo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"34f5":function(e,t,n){"use strict";var r=n("7a23"),o={key:0},a=Object(r["createTextVNode"])(" You need to "),c=Object(r["createTextVNode"])("configure this demo"),i=Object(r["createTextVNode"])(" to access your data. ");function s(e,t,n,s,u,l){var d=Object(r["resolveComponent"])("router-link");return e.configured?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("p",o,[a,Object(r["createVNode"])(d,{to:"/config"},{default:Object(r["withCtx"])((function(){return[c]})),_:1}),i]))}var u=n("d0f2"),l=Object(r["defineComponent"])({setup:function(){var e=Object(u["b"])(),t=e.configured;return{configured:t}}});l.render=s;t["a"]=l},"577e":function(e,t,n){"use strict";n("7efa")},"7efa":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("a7bd"),a=n.n(o),c=n("51e4"),i=n.n(c),s=n("6549"),u=n.n(s),l=n("f1d0"),d=n.n(l),p=n("c524"),f=n.n(p),h=n("3ac1"),b=n.n(h),m=n("23a5"),v=n.n(m),O=n("404c"),j=n.n(O),g=n("a84a"),w=n.n(g),x=n("86b0"),k=n.n(x),y=n("b51d"),V=n.n(y),N=n("65d1"),T=n.n(N),C=n("6060"),P=n.n(C),S=n("8459"),A=n.n(S),I=n("40f3"),R=n.n(I),B={id:"nav"},D=Object(r["createTextVNode"])("home"),U=Object(r["createTextVNode"])(" | "),_=Object(r["createTextVNode"])("configuration"),z=Object(r["createTextVNode"])(" | "),F=Object(r["createTextVNode"])("indexed fields"),M=Object(r["createTextVNode"])(" | "),W=Object(r["createTextVNode"])("search"),E=Object(r["createTextVNode"])(" | "),L=Object(r["createTextVNode"])("oai-pmh");function H(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("router-link"),s=Object(r["resolveComponent"])("router-view"),u=Object(r["resolveComponent"])("Toast");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",B,[Object(r["createVNode"])(i,{to:"/"},{default:Object(r["withCtx"])((function(){return[D]})),_:1}),U,Object(r["createVNode"])(i,{to:"/config"},{default:Object(r["withCtx"])((function(){return[_]})),_:1}),z,Object(r["createVNode"])(i,{to:"/indexes"},{default:Object(r["withCtx"])((function(){return[F]})),_:1}),M,Object(r["createVNode"])(i,{to:"/search"},{default:Object(r["withCtx"])((function(){return[W]})),_:1}),E,Object(r["createVNode"])(i,{to:"/oai-pmh"},{default:Object(r["withCtx"])((function(){return[L]})),_:1})]),Object(r["createVNode"])(s,{id:"view"}),Object(r["createVNode"])(u)],64)}var q=n("d0f2"),G={setup:function(){Object(q["a"])()}};n("577e");G.render=H;var J=G,Y=(n("d3b7"),n("6c02")),K={class:"home intro"},Q=Object(r["createVNode"])("h1",null,"Preservica APIs demo",-1),X=Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])(" This is a (work in progress) kitchen sink showing various usage examples for some of "),Object(r["createVNode"])("a",{href:"https://developers.preservica.com/api-reference"},"the Preservica APIs.")],-1),Z=Object(r["createVNode"])("p",null,"This application runs in your browser.",-1);function $(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("AuthWarning");return Object(r["openBlock"])(),Object(r["createBlock"])("div",K,[Q,X,Z,Object(r["createVNode"])(i)])}var ee=n("34f5"),te=Object(r["defineComponent"])({name:"Home",components:{AuthWarning:ee["a"]}});te.render=$;var ne=te,re={class:"configuration intro"},oe=Object(r["createVNode"])("h1",null,"Configuration",-1),ae={key:0},ce={key:1},ie=Object(r["createStaticVNode"])('<p> Due to the server&#39;s (lack of) CORS settings, the Preservica APIs cannot be used from a browser directly, so this needs a CORS proxy server. </p><p> The Preservica APIs needs authorization, even for anonymous access. When logged in to Preservica SaaS, the session cookie <a href="https://eu.preservica.com/OAI-PMH/?verb=Identify">can be used</a>. </p><p> A successful login on <a href="https://developers.preservica.com/api-reference/6-access-token-api">the Access Token API</a> yields an access token and a refresh token. A successful token is valid for 15 minutes. However, the refresh token is valid for the same short period as the access token (and can only be used once), so is only useful when continuously accessing the API. In this demo the refresh token is ignored, and instead a new login is performed whenever the access token has expired. </p><p> A token can also be generated through the externally authenticated acquisition API. This allows a trusted external application to acquire Preservica access rights without being authenticated by Preservica. See the documentation linked above. </p><p><s>The resulting access token can also (for a short time) be used in <a href="https://eu.preservica.com/api/content/documentation.html">the Swagger UI interface</a> (adjust URL to match your SaaS domain).</s></p>',5);function se(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("ConfigInput");return Object(r["openBlock"])(),Object(r["createBlock"])("div",re,[oe,Object(r["createVNode"])(i),e.configured?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("h2",ae,'Please complete the form and hit "Save" or "Log in"')),e.authorized?(Object(r["openBlock"])(),Object(r["createBlock"])("h2",ce,"Welcome, "+Object(r["toDisplayString"])(e.user.fullName),1)):Object(r["createCommentVNode"])("",!0),ie])}var ue={class:"configinput"},le=Object(r["createVNode"])("h2",null,"Server and credentials",-1),de={class:"p-fluid p-formgrid p-grid"},pe={class:"p-field p-col-12"},fe=Object(r["createVNode"])("label",{for:"proxy"},"CORS proxy",-1),he={class:"p-field p-col-12"},be=Object(r["createVNode"])("label",{for:"host"},"API host",-1),me={class:"p-field p-col-12 p-md-3"},ve=Object(r["createVNode"])("label",{for:"tenant"},"Tenant",-1),Oe={class:"p-field p-col-12 p-md-5"},je=Object(r["createVNode"])("label",{for:"username"},"Username",-1),ge={class:"p-field p-col-12 p-md-4"},we=Object(r["createVNode"])("label",{for:"password"},"Password",-1),xe=Object(r["createTextVNode"])("   "),ke=Object(r["createTextVNode"])("   ");function ye(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("InputText"),s=Object(r["resolveComponent"])("Button"),u=Object(r["resolveDirective"])("tooltip");return Object(r["openBlock"])(),Object(r["createBlock"])("div",ue,[le,Object(r["createVNode"])("div",de,[Object(r["createVNode"])("div",pe,[fe,Object(r["createVNode"])(i,{id:"proxy",type:"text",modelValue:e.config.proxy,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.config.proxy=t})},null,8,["modelValue"])]),Object(r["createVNode"])("div",he,[be,Object(r["createVNode"])(i,{id:"host",type:"text",modelValue:e.config.host,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.config.host=t})},null,8,["modelValue"])]),Object(r["createVNode"])("div",me,[ve,Object(r["createVNode"])(i,{id:"tenant",type:"text",modelValue:e.config.tenant,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.config.tenant=t})},null,8,["modelValue"])]),Object(r["createVNode"])("div",Oe,[je,Object(r["createVNode"])(i,{id:"username",type:"text",modelValue:e.config.username,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.config.username=t})},null,8,["modelValue"])]),Object(r["createVNode"])("div",ge,[we,Object(r["createVNode"])(i,{id:"password",type:"password",modelValue:e.config.password,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.config.password=t})},null,8,["modelValue"])])]),Object(r["withDirectives"])(Object(r["createVNode"])(s,{icon:"pi pi-save",onClick:e.save,label:"Save"},null,8,["onClick"]),[[u,"Set the configuration, but do not log in yet",void 0,{top:!0}]]),xe,Object(r["withDirectives"])(Object(r["createVNode"])(s,{icon:"pi pi-user",onClick:e.login,label:"Log in"},null,8,["onClick"]),[[u,"Set the configuration and log in",void 0,{top:!0}]]),ke,Object(r["withDirectives"])(Object(r["createVNode"])(s,{icon:"pi pi-lock",onClick:e.getToken,label:"Get token"},null,8,["onClick"]),[[u,"Show the current token, or refresh if needed",void 0,{top:!0}]])])}n("96cf");var Ve=n("1da1"),Ne=n("5502"),Te=n("89d3"),Ce=Object(r["defineComponent"])({setup:function(){var e=Object(Te["useToast"])(),t=Object(Ne["b"])(),n=Object(q["b"])(),o=Object(r["ref"])(t.state.config),a=function(){var t=Object(Ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.setConfig(o.value),e.add({severity:"info",summary:"Saved config",detail:"But not logging in yet",life:3e3});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(Ve["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.add({severity:"info",summary:"Logging in",detail:o.value.username,life:3e3}),t.next=3,n.login(o.value);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(Ve["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getToken();case 2:r=t.sent,e.add({severity:"info",summary:"Token",detail:r});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{config:o,save:a,login:c,getToken:i}}});Ce.render=ye;var Pe=Ce,Se=Object(r["defineComponent"])({setup:function(){var e=Object(q["b"])(),t=e.configured,n=e.authorized,r=e.user;return{configured:t,authorized:n,user:r}},components:{ConfigInput:Pe}});Se.render=se;var Ae=Se,Ie=[{path:"/",name:"Home",component:ne},{path:"/config",name:"Configuration",component:Ae},{path:"/indexes",name:"Indexed fields",component:function(){return n.e("indexes").then(n.bind(null,"8c18"))}},{path:"/oai-pmh",name:"OAI-PMH",component:function(){return n.e("oai-pmh").then(n.bind(null,"a905"))}},{path:"/search",name:"Search",component:function(){return n.e("search").then(n.bind(null,"2d3b"))}}],Re=Object(Y["a"])({history:Object(Y["b"])("/preservica-api-demo/"),routes:Ie}),Be=Re,De=Object(Ne["a"])({state:{config:{proxy:"https://proxy.arjanvanbentem.nl/?url=",host:"https://eu.preservica.com/",username:"",password:"",tenant:""}},mutations:{setConfig:function(e,t){e.config=t}},actions:{},modules:{}}),Ue=(n("bddf"),n("4121"),n("098b"),n("e1ae"),Object(r["createApp"])(J));Ue.use(De),Ue.use(Be),Ue.use(T.a,{ripple:!0}),Ue.use(A.a),Ue.component("Accordion",a.a),Ue.component("AccordionTab",i.a),Ue.component("Button",u.a),Ue.component("Column",f.a),Ue.component("ColumnGroup",b.a),Ue.component("Checkbox",d.a),Ue.component("DataTable",v.a),Ue.component("Dropdown",j.a),Ue.component("InputText",w.a),Ue.component("MultiSelect",k.a),Ue.component("Password",V.a),Ue.component("Toast",P.a),Ue.directive("tooltip",R.a),Ue.mount("#app")},d0f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));n("a4d3"),n("e01a"),n("d3b7");var r=n("7a23"),o=(n("99af"),n("5530")),a=(n("96cf"),n("1da1")),c=n("d4ec"),i=n("89d3"),s=6e4,u=function e(){var t=this;Object(c["a"])(this,e),this.toast=Object(i["useToast"])(),this.user=Object(r["ref"])(void 0),this.configured=Object(r["ref"])(!1),this.authorized=Object(r["ref"])(!1),this.setConfig=function(e){t.config=e,t.configured.value=!0,t.authorized.value=!1},this.login=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){var r,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n&&t.setConfig(n),t.authorized.value=!1,r=t.config,o="username=".concat(null===r||void 0===r?void 0:r.username,"&password=").concat(null===r||void 0===r?void 0:r.password,"&tenant=").concat(null===r||void 0===r?void 0:r.tenant,"&includeUserDetails=true"),e.next=6,t.fetchWithDefaults("api/accesstoken/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,t.user.value={user:c.user,fullName:c.fullName,email:c.email,roles:c.roles,token:c.token,refreshToken:c["refresh-token"],validForMinutes:c.validFor,validFrom:Date.now(),validUntil:Date.now()+60*c.validFor*1e3},t.authorized.value=!0,t.toast.add({severity:"success",summary:"Got new token",detail:t.user.value.token,life:2e3});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getToken=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.config){e.next=3;break}throw t.toast.add({severity:"error",summary:"Not configured",detail:"You need to set the configuration first"}),"No credentials set";case 3:if(t.user.value&&!(t.user.value.validUntil-Date.now()<s)){e.next=6;break}return e.next=6,t.login();case 6:if(t.user.value){e.next=8;break}throw"Failed to authenticate";case 8:return e.abrupt("return",t.user.value.token);case 9:case"end":return e.stop()}}),e)}))),this.fetchWithToken=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getToken();case 2:return o=e.sent,e.abrupt("return",t.fetchWithDefaults(n,r,o));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.fullUrl=function(e){var n,r,o,a=(null===(n=t.config)||void 0===n?void 0:n.host)+e;return null!==(r=t.config)&&void 0!==r&&r.proxy?"".concat(null===(o=t.config)||void 0===o?void 0:o.proxy).concat(encodeURIComponent(a)):a},this.fetchWithDefaults=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n,r,a){var c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c={headers:{Accept:"application/json"}},e.next=3,fetch(t.fullUrl(n),Object(o["a"])(Object(o["a"])(Object(o["a"])({},c),r),{},{headers:Object(o["a"])(Object(o["a"])(Object(o["a"])({},c.headers),null===r||void 0===r?void 0:r.headers),a?{"Preservica-Access-Token":a}:null)})).catch((function(e){throw t.toast.add({severity:"error",summary:"Failed to connect to proxy or server",detail:e}),new Error("Failed to connect to proxy or Preservica server")}));case 3:if(i=e.sent,i.ok){e.next=17;break}return e.t0=t.toast,e.t1="".concat(i.status,": ").concat(i.statusText),e.next=9,i.text();case 9:if(e.t2=e.sent,e.t2){e.next=12;break}e.t2=n;case 12:throw e.t3=e.t2,e.t4={severity:"error",summary:e.t1,detail:e.t3},e.t0.add.call(e.t0,e.t4),console.error(i),new Error(i.statusText);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},l=Symbol();function d(){Object(r["provide"])(l,new u)}function p(){var e=Object(r["inject"])(l);if(!e)throw Error("plugins/Auth not provided");return e}}});
//# sourceMappingURL=app.505dd2eb.js.map