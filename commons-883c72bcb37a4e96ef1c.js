/*! For license information please see commons-883c72bcb37a4e96ef1c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"21qS":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("TSYQ"),o=t.n(r),c=t("KPt9"),i=t.n(c),s=t("Wbzz"),u=t("TCDe"),d=t("dT4H"),m=t("6Hpx"),f=t("oCqU"),v=t("uJxA"),g=t("Wmhb"),_=t.n(g),b=t("Fw+T"),p=t.n(b),h=t("jufJ"),y=t("iEHx"),E=t.n(y),N=function(e){var a=e.languageVariants||{},t=Object(h.a)();return l.a.createElement("div",{className:o()(E.a.localeSelect__wrapper,"d-none d-md-flex align-items-center")},"en"===t?l.a.createElement(d.a,{to:a.cs||"/",noLanguageCodePrefix:!0,className:"text-white"},"CZ"):l.a.createElement(d.a,{to:a.en||"/en/",noLanguageCodePrefix:!0,className:"text-white"},"EN"))},S=function(e){var a=e.navItems,t=e.pageContext,r=Object(n.useState)(!1),c=r[0],i=r[1],s=Object(h.a)(),u=Object(h.b)().t,g=Object(n.useCallback)((function(){i(!c),document.body.style.overflow=c?"unset":"hidden"}),[c]),b=function(){document.body.style.overflow="unset"},y=t.languageVariants||{};return l.a.createElement("div",null,l.a.createElement("div",{className:_.a.gradient}),l.a.createElement("div",{className:_.a.header,role:"banner"},l.a.createElement(m.a,null,l.a.createElement(f.a,{alignItems:"center",className:_.a.header__inner},l.a.createElement(v.a,{col:7,colMd:3,colLg:3},l.a.createElement(d.a,{to:"/",title:"COVID PORTAL - "+u("home")},l.a.createElement("img",{src:p.a,alt:"Covid Portál"}))),l.a.createElement(v.a,{col:5,className:o()(_.a.nav__toggleWrapper,"d-md-none text-right")},l.a.createElement("div",{className:o()(_.a.nav__toggle,c&&_.a["nav__toggle--open"]),onClick:g},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("div",null,u(c?"menu_close":"menu_open").toUpperCase()))),l.a.createElement(v.a,{col:12,colMd:8,colLg:9},l.a.createElement(f.a,{alignItems:"center"},l.a.createElement(v.a,{col:12,colLg:10,colXl:8,className:"d-none d-md-block"},l.a.createElement("div",{className:o()("navigation")},l.a.createElement("ul",{className:o()(_.a.navigation,"nav nav--primary")},a.map((function(e){var a=e.label,t=e.to;return l.a.createElement("li",{className:o()("nav__item"),key:a},l.a.createElement(d.a,{to:t,className:o()("nav__link",_.a.nav__link),activeClassName:"active",partiallyActive:"/"!==t},a))}))))))),l.a.createElement("div",{className:o()(_.a.nav__mobile,c&&_.a["nav__mobile--open"],"d-md-none")},l.a.createElement("div",{className:"d-flex flex-column justify-content-between",style:{height:"100%"}},l.a.createElement("div",null,a.map((function(e){var a=e.label,t=e.to;return l.a.createElement(d.a,{onClick:b,to:t,key:a,className:o()(_.a.nav__mobileLink,"container nav__link--mobile"),activeClassName:_.a["nav__mobileLink--active"],partiallyActive:"/"!==t},a)}))),l.a.createElement("div",{className:"mt-auto"},"en"===s?l.a.createElement(d.a,{to:y.cs||"/",noLanguageCodePrefix:!0,onClick:b,className:o()(_.a.nav__mobileLink,"container")},"Čeština"):l.a.createElement(d.a,{to:y.en||"/en/",noLanguageCodePrefix:!0,onClick:b,className:o()(_.a.nav__mobileLink,"container")},"English")))),l.a.createElement(N,{languageVariants:y})))))},k=t("A5mV"),x=t.n(k),O="1",w="2",j="4",L="3",I=function(){var e=Object(s.useStaticQuery)(C),a=Object(h.a)(),t=function(t){return e.allBlocks.edges.find((function(e){var n=e.node,l=n.langcode===a,r=n.drupal_internal__id===t;return l&&r})).node.content.processed};return l.a.createElement("div",{className:o()(x.a.footer,"footer mt-4"),role:"contentinfo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer__inner pt-md-2"},l.a.createElement("div",{className:"footer__links pb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-6 col-lg-3"},l.a.createElement("div",{className:"footer__box pb-4 pb-lg-0"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t(w)}}))),l.a.createElement("div",{className:"col-12 col-sm-6 col-lg-5"},l.a.createElement("div",{className:"footer__box pb-4 pb-lg-0"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t(j)}}))),l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("div",{className:"footer__box"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t(O)}}))))),l.a.createElement("div",{className:"footer__common"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"footer__box"},l.a.createElement("div",{className:"",dangerouslySetInnerHTML:{__html:t(L)}}))),{}.GATSBY_VERCEL&&l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"footer__box"},l.a.createElement("div",{className:"footer__brand"},"Poslední úspěšný build proběhl v "+new Date(e.currentBuildDate.currentDate).toLocaleString("cs-CZ",{day:"numeric",month:"numeric",weekday:"long",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Prague"})))))))))},C="4279535114",T=t("M4iV"),A=t.n(T),H=t("qhky");a.a=function(e){var a=e.children,t=e.pageContext,n=Object(h.b)().t,r=Object(s.useStaticQuery)("4260621986"),c=[r.mobileImage.childImageSharp.fluid,Object.assign({},r.desktopImage.childImageSharp.fluid,{media:"(min-width: 768px)"})];return l.a.createElement("div",{className:o()("body__wrapper",A.a.wrapper)},l.a.createElement(H.Helmet,null,l.a.createElement("link",{rel:"preload",as:"font",href:i.a,type:"font/woff",crossOrigin:"anonymous"})),l.a.createElement("div",null,l.a.createElement("div",{className:A.a.overflow},l.a.createElement(u.a,{fluid:c,className:A.a.bkgPhoto,alt:"Background image",loading:"eager"}))),l.a.createElement(S,{pageContext:t,navItems:[{label:n("home"),to:"/"},{label:n("life_situations"),to:n("slug_situations")},{label:n("current_measures"),to:n("slug_measures")}]}),l.a.createElement("main",{className:A.a.main},l.a.createElement("div",{className:A.a.mainInner},a)),l.a.createElement(I,null))}},"6Hpx":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("TSYQ"),l=t.n(n),r=t("q1tI"),o=t.n(r),c=function(e){var a=e.children,t=e.variant,n=void 0===t?"normal":t,r=e.className,c=void 0===r?"":r;return o.a.createElement("div",{className:l()({container:"normal"===n},{"container-fluid":"fluid"===n},c)},a)}},A5mV:function(e,a,t){e.exports={footer:"footer-module--footer--3QjQW"}},"Fw+T":function(e,a,t){e.exports=t.p+"static/header-logo-9b33c63217fd4e568462d20e6290fd61.svg"},KPt9:function(e,a,t){e.exports=t.p+"static/pvs-icons-bbbd6be7fd265921f61be81afb67f866.woff"},M4iV:function(e,a,t){e.exports={wrapper:"default-layout-module--wrapper--wgORJ",main:"default-layout-module--main--2W3yI",mainInner:"default-layout-module--mainInner--3mXJ9",overflow:"default-layout-module--overflow--2-sIW",bkgPhoto:"default-layout-module--bkgPhoto--2_SkD"}},TCDe:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return s})),t.d(a,"e",(function(){return u})),t.d(a,"f",(function(){return d})),t.d(a,"g",(function(){return c}));var n=t("q1tI");function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a.indexOf(t=r[n])>=0||(l[t]=e[t]);return l}var o=new Set,c="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function i(e){o.add(e)}function s(e){return o.has(e)}function u(e,a,t,n,r,o,c){return l({},t,{loading:n,shouldLoad:e,"data-main-image":"",style:{opacity:a?1:0},onLoad:function(e){if(!a){i(o);var t=e.target,n=new Image;n.src=t.currentSrc,n.decode?n.decode().catch((function(e){})).then((function(){r(!0)})):r(!0)}},ref:c})}function d(e){return l({},e,{"aria-hidden":!0})}var m=function(e){var a,o,s,u,d=e.as,m=void 0===d?"div":d,f=e.style,v=e.className,g=e.layout,_=void 0===g?"fixed":g,b=e.width,p=e.height,h=e.images,y=e.onStartLoad,E=e.onLoad,N=r(e,["as","style","className","layout","width","height","images","onStartLoad","onLoad"]),S=Object(n.useRef)(),k=Object(n.useRef)(!1),x=Object(n.useRef)(null),O=Object(n.useRef)(null),w=Object(n.useRef)(),j=Object(n.useState)(c),L=j[0],I=j[1],C=Object(n.useState)(!1),T=C[0],A=C[1],H=(a=b,o=p,u={position:"relative"},"fixed"===(s=_)&&(u.width=a,u.height=o),"intrinsic"===s&&(u.display="inline-block"),{className:"gatsby-image",style:u}),P=H.style,W=H.className,M=r(H,["style","className"]);return Object(n.useEffect)((function(){if(S.current){var e=S.current.querySelector("[data-gatsby-image-ssr]");if(c&&e)return y&&y({wasCached:!1}),e.complete&&(E&&E(),i(JSON.stringify(h))),void e.addEventListener("load",(function a(t){e.removeEventListener("load",a),E&&E(),i(JSON.stringify(h))}));t.e(19).then(t.bind(null,"g3QF")).then((function(e){var a=(0,e.createIntersectionObserver)((function(){S.current&&(y&&y({wasCached:!1}),I(!0))}));S.current&&(x.current=a(S))}))}return function(){x.current&&(x.current(S),k.current&&O.current&&O.current())}}),[]),Object(n.useEffect)((function(){if(S.current){var e=S.current.querySelector("[data-gatsby-image-ssr]");if(c&&e&&!k.current)return;t.e(20).then(t.bind(null,"hDf8")).then((function(e){O.current=(0,e.lazyHydrate)(l({layout:_,width:b,height:p,images:h,isLoading:L,isLoaded:T,toggleIsLoaded:function(){E&&E(),A(!0)},ref:w},N),S,k)}))}}),[b,p,_,h,L,T,A,w,N]),Object(n.createElement)(m,Object.assign({},M,{style:l({},P,f),className:W+(v?" "+v:""),ref:S,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},f=function(e){return Object(n.createElement)(m,Object.assign({},e))};f.displayName="GatsbyImage";var v,g=(v=f,function(e){var a=e.fixed,t=e.fluid,o=e.backgroundColor,c=e.critical,i=e.Tag,s=r(e,["fixed","fluid","backgroundColor","critical","Tag"]),u=l({alt:"",as:i},s);return o&&(u.style=u.style||{}),c&&(u.loading="eager"),a&&(Array.isArray(a)&&(a=a[0]),u={placeholder:null,layout:"fixed",width:a.width,height:a.height,images:{fallback:{src:a.src,srcSet:a.srcSet},sources:[]}},(a.base64||a.tracedSVG)&&(u.placeholder={fallback:a.base64||a.tracedSVG}),a.srcWebp&&u.images.sources.push({srcSet:a.srcSetWebp,type:"image/webp"})),t&&(Array.isArray(t)&&(t=t[0]),u={placeholder:null,width:1,height:t.aspectRatio,layout:"responsive",images:{fallback:{src:t.src,srcSet:t.srcSet},sources:[]}},(t.base64||t.tracedSVG)&&(u.placeholder={fallback:t.base64||t.tracedSVG}),t.srcWebp&&u.images.sources.push({srcSet:t.srcSetWebp,type:"image/webp"})),Object(n.createElement)(v,Object.assign({alt:""},s,u))})},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&e.push(o)}else if("object"===r)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(a,[]))||(e.exports=n)}()},Wmhb:function(e,a,t){e.exports={header:"header-module--header--3QwAt",gradient:"header-module--gradient--1KWjT",header__inner:"header-module--header__inner--13-2I",headerInner:"header-module--header__inner--13-2I",navigation:"header-module--navigation--3CF5d",nav__link:"header-module--nav__link--27-lH",navLink:"header-module--nav__link--27-lH",nav__toggleWrapper:"header-module--nav__toggleWrapper--394VP",navToggleWrapper:"header-module--nav__toggleWrapper--394VP",nav__toggle:"header-module--nav__toggle--2FIby",navToggle:"header-module--nav__toggle--2FIby","nav__toggle--open":"header-module--nav__toggle--open--39cId",navToggleOpen:"header-module--nav__toggle--open--39cId",nav__mobile:"header-module--nav__mobile--1U2A4",navMobile:"header-module--nav__mobile--1U2A4","nav__mobile--open":"header-module--nav__mobile--open--1N0Nt",navMobileOpen:"header-module--nav__mobile--open--1N0Nt",nav__mobileLink:"header-module--nav__mobileLink--1tczU",navMobileLink:"header-module--nav__mobileLink--1tczU","nav__mobileLink--active":"header-module--nav__mobileLink--active--3z75I",navMobileLinkActive:"header-module--nav__mobileLink--active--3z75I"}},dT4H:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("zLVn"),l=t("q1tI"),r=t.n(l),o=t("TSYQ"),c=t.n(o),i=t("Wbzz"),s=t("jufJ"),u=new RegExp("^(?:[a-z]+:)?//","i"),d=function(e){var a,t=e.children,o=e.title,d=e.to,m=e.dataTestId,f=e.className,v=e.onClick,g=e.activeClassName,_=e.partiallyActive,b=e.noLanguageCodePrefix,p=Object(n.a)(e,["children","title","to","dataTestId","className","onClick","activeClassName","partiallyActive","noLanguageCodePrefix"]),h=Object(s.a)(),y=Object(l.useMemo)((function(){return u.test(d)}),[d]),E={className:c()((a={external:y},a[f]=f,a)),title:o,"aria-label":o,"data-testid":m};return y?r.a.createElement("a",Object.assign({href:d,onClick:function(e){v&&v(e)},rel:"noreferrer"},E,p),t||o):r.a.createElement(i.Link,Object.assign({onClick:function(e){v&&v(e)},to:b||"cs"===h?d:"/"+h+d,activeClassName:g,partiallyActive:_},E,p),t||o)}},iEHx:function(e,a,t){e.exports={localeSelect__wrapper:"header-locale-select-module--localeSelect__wrapper--1RjXB",localeSelectWrapper:"header-locale-select-module--localeSelect__wrapper--1RjXB",localeSelect__inner:"header-locale-select-module--localeSelect__inner--15rK8",localeSelectInner:"header-locale-select-module--localeSelect__inner--15rK8",localeSelect:"header-locale-select-module--localeSelect--1qOCH",localeSelect__selectBox:"header-locale-select-module--localeSelect__selectBox--28nGk",localeSelectSelectBox:"header-locale-select-module--localeSelect__selectBox--28nGk"}},jufJ:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c}));var n=t("q1tI"),l=t("YwZP"),r=t("nHXM"),o=function(){var e=Object(l.useLocation)().pathname.match(/\/([a-z]{2})\/.*/);if(e){var a=e[1];if(Object(r.c)(a))return a}return"cs"},c=function(){var e=Object(n.useContext)(r.a),a=o();return{t:Object(n.useCallback)(function(e,a){return function(t){var n=e[a][t];return n||(console.error('Translation not found for: "'+t+'"'),t)}}(e,a),[e,a])}}},oCqU:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),l=t.n(n),r=function(e){var a,t=e.children,n=e.className,r=void 0===n?"":n,o=e.justify,c=e.alignItems;return l.a.createElement("div",{className:"row "+(a="",o&&(a+="justify-content-"+o+" "),c&&(a+="align-items-"+c+" "),a=(a+=r).trim())},t)}},uJxA:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),l=t.n(n),r=function(e){var a,t=e.children,n=e.col,r=e.colSm,o=e.colMd,c=e.colLg,i=e.colXl,s=e.className,u=void 0===s?"":s,d=e.alignSelf;return l.a.createElement("div",{className:(a="",n&&(a+="boolean"==typeof n?"col ":"col-"+n+" "),r&&(a+="boolean"==typeof r?"col-sm ":"col-sm-"+r+" "),o&&(a+="boolean"==typeof o?"col-md ":"col-md-"+o+" "),c&&(a+="boolean"==typeof c?"col-lg ":"col-lg-"+c+" "),i&&(a+="boolean"==typeof i?"col-xl ":"col-xl-"+i+" "),d&&(a+="align-self-"+d+" "),a=(a+=u).trim())},t)}},zLVn:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=commons-883c72bcb37a4e96ef1c.js.map