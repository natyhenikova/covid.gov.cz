(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AebV:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a.n(r),i=function(e){var t=e.datetime,a=e.prefix,r=e.suffix,i=void 0===r?" ":r;return n.a.createElement("time",{dateTime:t},a,new Date(t).toLocaleString("cs-CZ",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Prague"}),i)}},Fjk4:function(e,t,a){"use strict";var r=a("+uiX");a.d(t,"a",(function(){return r.b}))},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("q1tI"),n=a.n(r),i=a("W+yO"),l=a.n(i),m=function(e){var t=e.children;return n.a.createElement("h1",{className:l.a.headline},t)}},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("TSYQ"),n=a.n(r),i=a("q1tI"),l=a.n(i),m=a("dT4H"),c=a("pvlE"),u=a.n(c),o=function(e){return n()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,a=e.variant,r=void 0===a?"normal":a,i=function(e){var a;return n()("breadcrumb__item",u.a.breadcrumbItem,((a={})[u.a.breadcrumbItemActive]=e===t.length-1,a))};return l.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},l.a.createElement("ol",{className:o(r)},t.map((function(e,t){return l.a.createElement("li",{key:"breadcrumb-item-"+t,className:i(t)},function(e){return void 0!==e.title}(e)?l.a.createElement(m.a,{to:e.url,className:"breadcrumb__link",label:e.title}):l.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,t,a){e.exports={headline:"headline-module--headline--2EZlD"}},Yal5:function(e,t,a){e.exports={listItem:"measure-list-card-module--listItem--2NERh",buttonWrapper:"measure-list-card-module--buttonWrapper--3V2sV"}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},vsBx:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));var r=a("q1tI"),n=a.n(r),i=a("n214"),l=a("6Hpx"),m=a("I+D7"),c=a("21qS"),u=a("QoFz"),o=a("jufJ"),s=a("zoQI"),d=a("dT4H"),b=a("AebV"),v=a("Yal5"),p=a.n(v),f=a("TSYQ"),E=a.n(f),g=function(e){var t=e.title,a=e.description,r=e.link,i=e.area,l=e.validFrom,m=e.validTo;return n.a.createElement(d.a,{to:r,className:E()("card p-2 mb-2 text-decoration-none",p.a.listItem)},n.a.createElement("h2",{className:"font-weight-medium mb-1"},t),n.a.createElement("p",{className:"mt-0 color-gray"},a),n.a.createElement("div",{className:"d-flex justify-content-between align-items-end"},n.a.createElement("div",null,n.a.createElement("div",{className:p.a.measureListCardDetail},Object(o.b)("applies_for")," ",i),n.a.createElement("div",{className:p.a.measureListCardDetail},l&&n.a.createElement(b.a,{datetime:l,prefix:Object(o.b)("from")+" "}),m&&n.a.createElement(b.a,{datetime:m,prefix:Object(o.b)("to")+" "}))),n.a.createElement("div",{className:p.a.buttonWrapper},n.a.createElement(s.a,{text:Object(o.b)("detail"),variant:"outline"}))))},h=a("Fjk4"),I=(t.default=function(e){var t,a=e.data,r=e.pageContext,s=a.measureType,d=(null===(t=s.relationships)||void 0===t?void 0:t.measure)||[],b=new Intl.Collator([r.langCode]);return d.sort((function(e,t){return b.compare(e.title,t.title)})),n.a.createElement(c.a,{pageContext:r},n.a.createElement(i.a,{title:s.name,description:Object(o.b)("current_measures_overview_meta"),pagePath:r.slug}),n.a.createElement(h.a,{url:"https://covid.gov.cz"+r.slug,langCode:r.langCode,isBlogPost:!1,title:s.name,description:Object(o.b)("current_measures_overview_meta")}),n.a.createElement(l.a,null,n.a.createElement("div",{className:"pt-1"},n.a.createElement(u.a,{items:[{title:Object(o.b)("home"),url:"/"},{title:Object(o.b)("current_measures"),url:Object(o.b)("slug_measures")},s.name],variant:"inverse"})),n.a.createElement("div",{className:"mt-3"},n.a.createElement(m.a,null,s.name)),n.a.createElement("div",null,d.map((function(e){var t,a,r;return n.a.createElement(g,{key:"taxonomyTermMeasureType-list-item-"+e.id,title:e.title,description:e.norm,link:null===(t=e.path)||void 0===t?void 0:t.alias,validFrom:e.valid_from,validTo:e.valid_to,area:null===(a=e.relationships)||void 0===a||null===(r=a.region)||void 0===r?void 0:r.map((function(e){return e.name})).join(" ,")})})))))},"3770274620")}}]);
//# sourceMappingURL=component---src-templates-measures-list-tsx-4ee20fcc73b43805f78c.js.map