(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return l}));r(0);var t=r(173);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a={sidebar_label:"process",title:"process"},s=[{value:"Properties",id:"properties",children:[{value:"process.versions.qode Readonly",id:"processversionsqode-readonly",children:[]},{value:"process.versions.qt(compiled) Readonly",id:"processversionsqtcompiled-readonly",children:[]},{value:"process.versions.qt(runtime) Readonly",id:"processversionsqtruntime-readonly",children:[]}]}],c={rightToc:s},p="wrapper";function l(e){var n=e.components,r=i(e,["components"]);return Object(t.b)(p,o({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Extensions to process object.")),Object(t.b)("p",null,"Qode's ",Object(t.b)("inlineCode",{parentName:"p"},"process")," object is extended from the\n",Object(t.b)("a",o({parentName:"p"},{href:"https://nodejs.org/api/process.html"}),"Node.js ",Object(t.b)("inlineCode",{parentName:"a"},"process")," object"),".\nIt adds the following properties :"),Object(t.b)("h2",{id:"properties"},"Properties"),Object(t.b)("h3",{id:"processversionsqode-readonly"},Object(t.b)("inlineCode",{parentName:"h3"},"process.versions.qode")," ",Object(t.b)("em",{parentName:"h3"},"Readonly")),Object(t.b)("p",null,"A ",Object(t.b)("inlineCode",{parentName:"p"},"String")," representing Qode's version string. Qode is a lightly modified version of NodeJs that allows running Qt and NodeJs under a single process."),Object(t.b)("h3",{id:"processversionsqtcompiled-readonly"},Object(t.b)("inlineCode",{parentName:"h3"},"process.versions.qt(compiled)")," ",Object(t.b)("em",{parentName:"h3"},"Readonly")),Object(t.b)("p",null,"A ",Object(t.b)("inlineCode",{parentName:"p"},"String")," representing Qt version used when compile Qode binary. This can be useful to know which version of Qt is binary compatible with the version of Qode you are running. This is useful when running qode with a different version of Qt than what it was compiled with."),Object(t.b)("h3",{id:"processversionsqtruntime-readonly"},Object(t.b)("inlineCode",{parentName:"h3"},"process.versions.qt(runtime)")," ",Object(t.b)("em",{parentName:"h3"},"Readonly")),Object(t.b)("p",null,"A ",Object(t.b)("inlineCode",{parentName:"p"},"String")," representing Qt version of the Qt library loaded during runtime. This can be useful to know which version of Qt you are using at runtime as compared to the version of Qt used when Qode was compiled.This is possible since Qt is dynamically linked to Qode and you could replace the Qt dynamic libraries with any binary compatible library. Hence, this is useful when running qode with a different version of Qt than what it was compiled with."))}l.isMDXComponent=!0},173:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t),i=o.a.createContext({}),a=function(e){var n=o.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},s=function(e){var n=a(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=a(r),d=t,u=l[s+"."+d]||l[d]||p[d]||i;return r?o.a.createElement(u,Object.assign({},{ref:n},c,{components:r})):o.a.createElement(u,Object.assign({},{ref:n},c))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=l;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:t,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);