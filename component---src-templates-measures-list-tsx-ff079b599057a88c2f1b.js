(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AebV:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t("q1tI"),n=t.n(r),i=function(e){var a=e.datetime,t=e.prefix,r=e.suffix,i=void 0===r?" ":r;return n.a.createElement("time",{dateTime:a},t,new Date(a).toLocaleString("cs-CZ",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Prague"}),i)}},"I+D7":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("q1tI"),n=t.n(r),i=t("W+yO"),m=t.n(i),l=function(e){var a=e.children;return n.a.createElement("h1",{className:m.a.headline},a)}},QoFz:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("TSYQ"),n=t.n(r),i=t("q1tI"),m=t.n(i),l=t("dT4H"),c=t("pvlE"),u=t.n(c),o=function(e){return n()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var a=e.items,t=e.variant,r=void 0===t?"normal":t,i=function(e){var t;return n()("breadcrumb__item",u.a.breadcrumbItem,((t={})[u.a.breadcrumbItemActive]=e===a.length-1,t))};return m.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},m.a.createElement("ol",{className:o(r)},a.map((function(e,a){return m.a.createElement("li",{key:"breadcrumb-item-"+a,className:i(a)},function(e){return void 0!==e.title}(e)?m.a.createElement(l.a,{to:e.url,className:"breadcrumb__link",label:e.title}):m.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,a,t){e.exports={headline:"headline-module--headline--2EZlD"}},Yal5:function(e,a,t){},pvlE:function(e,a,t){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},vsBx:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return E}));var r=t("q1tI"),n=t.n(r),i=t("n214"),m=t("6Hpx"),l=t("I+D7"),c=t("21qS"),u=t("QoFz"),o=t("jufJ"),s=t("zoQI"),d=t("dT4H"),b=t("AebV"),v=t("Yal5"),p=t.n(v),f=function(e){var a=e.title,t=e.description,r=e.link,i=e.area,m=e.validFrom,l=e.validTo;return n.a.createElement(d.a,{to:r,className:"card p-2 mb-2 text-decoration-none"},n.a.createElement("h2",{className:"font-weight-medium mb-1"},a),n.a.createElement("p",{className:"mt-0 color-gray"},t),n.a.createElement("div",{className:"d-flex justify-content-between align-items-end"},n.a.createElement("div",null,n.a.createElement("div",{className:p.a.measureListCardDetail},Object(o.b)("applies_for")," ",i),n.a.createElement("div",{className:p.a.measureListCardDetail},m&&n.a.createElement(b.a,{datetime:m,prefix:Object(o.b)("from")+" "}),l&&n.a.createElement(b.a,{datetime:l,prefix:Object(o.b)("to")+" "}))),n.a.createElement("div",null,n.a.createElement(s.a,{text:Object(o.b)("detail"),variant:"outline"}))))},E=(a.default=function(e){var a,t,r=e.data.taxonomyTermMeasureType;return n.a.createElement(c.a,null,n.a.createElement(i.a,{title:r.name,description:Object(o.b)("current_measures_overview_meta"),pagePath:"/measures",schema:'{\n          "@type": "WebSite",\n          "@id": "https://covid.gov.cz/#measures",\n          "url": "https://covid.gov.cz/measures",\n          "name": "Current Measures",\n          "publisher": {\n            "@id": "https://gov.cz"\n          }\n        }'}),n.a.createElement(m.a,null,n.a.createElement("div",{className:"pt-1"},n.a.createElement(u.a,{items:[{title:Object(o.b)("home"),url:"/"},{title:Object(o.b)("current_measures"),url:Object(o.b)("slug_measures")},r.name],variant:"inverse"})),n.a.createElement("div",{className:"mt-3"},n.a.createElement(l.a,null,r.name)),n.a.createElement("div",null,null===(a=r.relationships)||void 0===a||null===(t=a.measure)||void 0===t?void 0:t.map((function(e){var a,t,r;return n.a.createElement(f,{key:"taxonomyTermMeasureType-list-item-"+e.id,title:e.title,description:e.norm,link:null===(a=e.path)||void 0===a?void 0:a.alias,validFrom:e.valid_from,validTo:e.valid_to,area:null===(t=e.relationships)||void 0===t||null===(r=t.region)||void 0===r?void 0:r.map((function(e){return e.name})).join(" ,")})})))))},"431837386")}}]);
//# sourceMappingURL=component---src-templates-measures-list-tsx-ff079b599057a88c2f1b.js.map