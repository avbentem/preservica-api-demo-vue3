(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["indexes"],{"00dc":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return o}));n("99af"),n("7db0"),n("4160"),n("caad"),n("a15b"),n("d81d"),n("13d5"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("96cf");var r=n("1da1"),a=n("7a23"),i=n("d0f2"),c=[{name:"Top-level list",code:"top-level-list"},{name:"Search",code:"search"},{name:"Search within",code:"search-within"},{name:"Object children",code:"object-children"}],l=/^sdb:[IS]O\|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,u=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function o(){var e=Object(i["b"])(),t=e.fetchWithToken,n=Object(a["B"])({q:"",fields:[{name:"xip.title",values:[""]},{name:"xip.description",values:[""]},{name:"xip.document_type",values:["IO"]},{name:"xip.format_group_r_Display",values:[]},{name:"xip.created",values:[]}],sort:[{sortFields:["xip.created"],sortOrder:"desc"}],facets:["xip.created","xip.format_group_r_Display"],"facet.xip.created.range":[["*","","Pre 2015"],["2015-01-01","","2015"],["2016-01-01","","2016"],["2017-01-01","","2017"],["2018-01-01","","2018"],["2019-01-01","","2019"],["2020-01-01","","2020"],["2021-01-01","*","2021 and later"]]}),c=Object(a["B"])(void 0),l=Object(a["B"])(void 0),u=Object(a["B"])(n.value.fields.map((function(e){return e.name})).join()),o=Object(a["B"])(0),d=Object(a["B"])(10),s=Object(a["B"])("search"),f=Object(a["B"])(),b=Object(a["B"])(),p=Object(a["B"])(),h=Object(a["B"])(void 0),v=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t("api/content/indexed-fields");case 2:return n=e.sent,e.next=5,n.json();case 5:return c.value=e.sent.value,l.value=c.value.reduce((function(e,t){return e[t.shortKey]=t,e}),{}),e.abrupt("return",c.value);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var r,a,i,c,l,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return h.value=void 0,a=encodeURIComponent(f.value||""),i="search-within"===s.value?"&parenthierarchy=".concat(a):"",c="object-children"===s.value?"&id=".concat(a):"",l="q=".concat(JSON.stringify(n.value),"&start=").concat(o.value,"&max=").concat(d.value,"&metadata=").concat(encodeURIComponent(u.value)).concat(i).concat(c),e.next=7,t("api/content/".concat(s.value),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:l});case 7:return v=e.sent,e.next=10,v.json();case 10:h.value=e.sent.value,p.value=JSON.stringify(h.value,null,2),null===(r=h.value.facets)||void 0===r||r.forEach((function(e){e.terms.forEach((function(e){e.name=e.name.split(" ")[0],e.displayName=e.displayName.replace(/^_.*? /,"")}))})),b.value=h.value.facets.reduce((function(e,t){return e[t.name]=t.terms.reduce((function(e,r){var a,i,c,l,u;b.value?e[r.name]=null!==(a=null===(i=b.value)||void 0===i?void 0:i[t.name][r.name])&&void 0!==a?a:null:e[r.name]=null!==(c=null===(l=n.value.fields.find((function(e){return e.name===t.name})))||void 0===l||null===(u=l.values)||void 0===u?void 0:u.includes(r.name))&&void 0!==c?c:null;return e}),{}),e}),{});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{getIndexedFields:v,indexedFields:c,indexedFieldsLookup:l,searchType:s,searchParent:f,query:n,metadata:u,start:o,max:d,facetsTermsStates:b,search:m,json:p,result:h}}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),c=n("1d80"),l=n("4840"),u=n("8aa5"),o=n("50c4"),d=n("14c3"),s=n("9263"),f=n("d039"),b=[].push,p=Math.min,h=4294967295,v=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,i);var l,u,o,d=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,f+"g");while(l=s.call(v,r)){if(u=v.lastIndex,u>p&&(d.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&b.apply(d,l.slice(1)),o=l[0].length,p=u,d.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return p===r.length?!o&&v.test("")||d.push(""):d.push(r.slice(p)),d.length>i?d.slice(0,i):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=c(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a,n):r.call(String(a),t,n)},function(e,a){var c=n(r,e,this,a,r!==t);if(c.done)return c.value;var s=i(e),f=String(this),b=l(s,RegExp),m=s.unicode,O=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),j=new b(v?s:"^(?:"+s.source+")",O),g=void 0===a?h:a>>>0;if(0===g)return[];if(0===f.length)return null===d(j,f)?[f]:[];var x=0,y=0,w=[];while(y<f.length){j.lastIndex=v?y:0;var S,I=d(j,v?f:f.slice(y));if(null===I||(S=p(o(j.lastIndex+(v?0:y)),f.length))===x)y=u(f,y,m);else{if(w.push(f.slice(x,y)),w.length===g)return w;for(var k=1;k<=I.length-1;k++)if(w.push(I[k]),w.length===g)return w;y=x=S}}return w.push(f.slice(x)),w}]}),!v)},"13d5":function(e,t,n){"use strict";var r=n("23e7"),a=n("d58f").left,i=n("a640"),c=n("ae40"),l=n("2d00"),u=n("605d"),o=i("reduce"),d=c("reduce",{1:0}),s=!u&&l>79&&l<83;r({target:"Array",proto:!0,forced:!o||!d||s},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"212d":function(e,t,n){"use strict";var r=n("7a23"),a={class:"p-d-flex p-jc-end"},i={class:"p-input-icon-left"},c=Object(r["m"])("i",{class:"pi pi-search"},null,-1);function l(e,t,n,l,u,o){var d=Object(r["E"])("InputText"),s=Object(r["E"])("Column"),f=Object(r["E"])("DataTable");return e.fields?(Object(r["w"])(),Object(r["h"])(f,{key:0,value:e.fields,selection:e.selection,"onUpdate:selection":t[2]||(t[2]=function(t){return e.setSelection(t)}),autoLayout:!0,responsiveLayout:"scroll",sortMode:"multiple",multiSortMeta:e.multiSortMeta,filters:e.filters,class:"p-datatable-sm"},{header:Object(r["P"])((function(){return[Object(r["m"])("div",a,[Object(r["m"])("span",i,[c,Object(r["m"])(d,{modelValue:e.filters["global"].value,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filters["global"].value=t}),placeholder:"all-column search",size:"50"},null,8,["modelValue"])])])]})),default:Object(r["P"])((function(){return[(Object(r["w"])(!0),Object(r["h"])(r["a"],null,Object(r["C"])(e.selection?[1]:[],(function(e){return Object(r["w"])(),Object(r["h"])(s,{key:e,selectionMode:"multiple",headerStyle:"width: 3rem"})})),128)),Object(r["m"])(s,{field:"shortName",header:"source",sortable:!0,headerClass:"p-text-center",bodyClass:"p-text-center"}),Object(r["m"])(s,{field:"displayName",header:"name",sortable:!0}),Object(r["m"])(s,{field:"shortKey",header:"key",sortable:!0}),Object(r["m"])(s,{field:"type",header:"type",sortable:!0}),Object(r["m"])(s,{field:"facetable",header:"facet",sortable:!0})]})),_:1},8,["value","selection","multiSortMeta","filters"])):Object(r["i"])("",!0)}var u=n("0393"),o=Object(r["n"])({props:{fields:{type:Object,required:!1},selection:{type:Object,required:!1}},setup:function(e,t){var n=t.emit,a=Object(r["B"])({global:{value:null,matchMode:u["a"].CONTAINS}}),i=Object(r["B"])([{field:"shortName",order:-1},{field:"displayName",order:1}]),c=function(e){n("update:selection",e)};return{filters:a,multiSortMeta:i,setSelection:c}}});o.render=l;t["a"]=o},"7db0":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").find,i=n("44d2"),c=n("ae40"),l="find",u=!0,o=c(l);l in[]&&Array(1)[l]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!o},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(l)},"8c18":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"indexes intro p-mb-6"},i=Object(r["m"])("h1",null,"Indexed fields",-1),c=Object(r["m"])("p",null,[Object(r["l"])(" The "),Object(r["m"])("a",{href:"https://developers.preservica.com/api-reference/8-content-api"},"Content API"),Object(r["l"])(" can return the indexed fields, which can be used for search facets. ")],-1),l={key:0},u={class:"json"};function o(e,t,n,o,d,s){var f=Object(r["E"])("AuthWarning"),b=Object(r["E"])("Button"),p=Object(r["E"])("IndexedFieldsTable"),h=Object(r["E"])("AccordionTab"),v=Object(r["E"])("Accordion");return Object(r["w"])(),Object(r["h"])(r["a"],null,[Object(r["m"])("div",a,[i,c,Object(r["m"])(f),e.configured?(Object(r["w"])(),Object(r["h"])(b,{key:0,icon:"pi pi-cloud-download",onClick:e.getFields,label:"Get indexed fields"},null,8,["onClick"])):Object(r["i"])("",!0)]),e.indexedFields?(Object(r["w"])(),Object(r["h"])("div",l,[Object(r["m"])(v,{activeIndex:0},{default:Object(r["P"])((function(){return[Object(r["m"])(h,{header:"Table"},{default:Object(r["P"])((function(){return[Object(r["m"])(p,{fields:e.indexedFields},null,8,["fields"])]})),_:1}),Object(r["m"])(h,{header:"JSON"},{default:Object(r["P"])((function(){return[Object(r["m"])("div",u,Object(r["I"])(e.indexedFields),1)]})),_:1})]})),_:1})])):Object(r["i"])("",!0)],64)}n("96cf");var d=n("1da1"),s=n("34f5"),f=n("212d"),b=n("d0f2"),p=n("00dc"),h=n("0393"),v=Object(r["n"])({components:{AuthWarning:s["a"],IndexedFieldsTable:f["a"]},setup:function(){var e=Object(b["b"])(),t=e.configured,n=Object(p["d"])(),a=n.getIndexedFields,i=Object(r["B"])(void 0),c=Object(r["B"])({global:{value:null,matchMode:h["a"].CONTAINS}}),l=Object(r["B"])([{field:"shortName",order:1},{field:"displayName",order:1}]),u=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:i.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{configured:t,indexedFields:i,filters:c,multiSortMeta:l,getFields:u}}});v.render=o;t["default"]=v},d58f:function(e,t,n){var r=n("1c0b"),a=n("7b0b"),i=n("44ad"),c=n("50c4"),l=function(e){return function(t,n,l,u){r(n);var o=a(t),d=i(o),s=c(o.length),f=e?s-1:0,b=e?-1:1;if(l<2)while(1){if(f in d){u=d[f],f+=b;break}if(f+=b,e?f<0:s<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:s>f;f+=b)f in d&&(u=n(u,d[f],f,o));return u}};e.exports={left:l(!1),right:l(!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,i=n("1dde"),c=n("ae40"),l=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!l||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=indexes.84f39306.js.map