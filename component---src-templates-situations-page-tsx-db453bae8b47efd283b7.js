(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"50Lu":function(e,t,a){e.exports={situationDetail:"situation-detail-module--situationDetail--FlH1Z"}},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("W+yO"),i=a.n(r),c=function(e){var t=e.children;return l.a.createElement("h1",{className:i.a.headline},t)}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("TSYQ"),l=a.n(n),r=a("q1tI"),i=a.n(r),c=a("dT4H"),o=a("pvlE"),u=a.n(o),m=function(e){return l()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,r=function(e){var a;return l()("breadcrumb__item",u.a.breadcrumbItem,((a={})[u.a.breadcrumbItemActive]=e===t.length-1,a))};return i.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},i.a.createElement("ol",{className:m(n)},t.map((function(e,t){return i.a.createElement("li",{key:"breadcrumb-item-"+t,className:r(t)},function(e){return void 0!==e.title}(e)?i.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",label:e.title}):i.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,t,a){e.exports={headline:"headline-module--headline--2EZlD"}},fkDn:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a("q1tI"),l=a.n(n),r=a("LYUY"),i=Object(r.a)(l.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room"),c=Object(r.a)(l.a.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event"),o=a("6Hpx"),u=a("dT4H"),m=a("QoFz"),s=a("I+D7"),d=a("jufJ"),b=a("50Lu"),v=a.n(b),E=a("TSYQ"),f=a.n(E),p=Object(r.a)(l.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),h=Object(r.a)(l.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),N=a("l41P"),_=a.n(N),g=a("zoQI"),j=function(e){var t=e.title,a=e.text,r=Object(n.useState)(!1),i=r[0],c=r[1],o=Object(n.useCallback)((function(){c(!i)}),[i]);return l.a.createElement("div",{className:_.a.section},l.a.createElement("div",{className:f()(_.a.sectionHeading,"d-flex","justify-content-between","align-items-center"),onClick:o},t,l.a.createElement(g.a,{icon:i?l.a.createElement(p,null):l.a.createElement(h,null),className:f()(_.a.sectionButton,"d-flex","justify-content-center","align-items-center"),variant:"yellow"})),i&&l.a.createElement("div",{className:_.a.sectionContent},a))},y=function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement(j,Object.assign({key:t},e))})))},k=a("ptG0"),w=function(e){var t,a,n,r,b,E,f,p,h,N=e.situation,_=e.type;return l.a.createElement("div",{className:v.a.situationDetail},l.a.createElement(o.a,null,l.a.createElement("div",{className:"pt-1"},l.a.createElement(m.a,{items:[{title:Object(d.b)("home"),url:"/"},{title:Object(d.b)("measure"===_?"current_measures":"life_situations"),url:Object(d.b)("slug_"+_+"s")},{title:null===(t=N.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(n=N.relationships)||void 0===n||null===(r=n.situation_type)||void 0===r||null===(b=r.path)||void 0===b?void 0:b.alias},N.title],variant:"inverse"})),l.a.createElement("div",{className:"mt-3"},l.a.createElement(s.a,null,N.title)),l.a.createElement("article",{className:"bg-white rounded p-2 pb-3 mb-1"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:null==N||null===(E=N.content)||void 0===E?void 0:E.processed}}),(null===(f=N.links)||void 0===f?void 0:f.length)?l.a.createElement("div",{className:"mt-1"},l.a.createElement("h3",{className:"mb-1 color-blue-dark"},"Související odkazy a zdroje"),l.a.createElement("div",null,N.links.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(u.a,{className:"color-blue mb-1",to:e.uri},e.title))})))):"",(null===(p=N.relationships)||void 0===p?void 0:p.region.length)?l.a.createElement("div",{className:"mt-2"},l.a.createElement("h3",{className:"mb-1 color-blue-dark"},Object(d.b)("location_validity")),l.a.createElement("div",{className:"d-flex align-items-center color-blue mb-1"},l.a.createElement(i,null)," ",l.a.createElement("span",{className:"text-uppercase font-weight-medium"},N.relationships.region.map((function(e){return e.name})).join(", ")))):"",N.valid_from||N.valid_to?l.a.createElement("div",{className:"d-flex align-items-center color-blue"},l.a.createElement(c,null)," ",l.a.createElement("span",{className:"text-uppercase font-weight-medium"},N.valid_from&&"Od "+N.valid_from+" ",N.valid_to&&"Do "+N.valid_to)):""),(null===(h=N.questions_answers)||void 0===h?void 0:h.length)?l.a.createElement(k.a,{variant:"blue",title:Object(d.b)("faq"),boldedTitleCount:2},l.a.createElement(y,{data:N.questions_answers.map((function(e){return{title:e.question,text:e.value}}))})):""))}},l41P:function(e,t,a){e.exports={section:"accordion-section-module--section--BMIm5",sectionHeading:"accordion-section-module--sectionHeading--1aw0-",sectionButton:"accordion-section-module--sectionButton--1rqdf",sectionContent:"accordion-section-module--sectionContent--3m_BR"}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},xzpE:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("fkDn"),i=a("21qS");t.default=function(e){var t=e.data;return l.a.createElement(i.a,null,l.a.createElement(r.a,{situation:t.situation,type:"situation"}))};var c="3174973331"}}]);
//# sourceMappingURL=component---src-templates-situations-page-tsx-db453bae8b47efd283b7.js.map