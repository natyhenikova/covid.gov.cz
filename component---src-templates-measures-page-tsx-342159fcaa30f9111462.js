(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8A7j":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return w}));var l=a("q1tI"),n=a.n(l),i=a("+uiX"),r=a("n214"),s=a("21qS"),o=a("pIBI"),u=a.n(o),m=a("dT4H"),d=a("YwZP"),c=a("cCXt"),v=a("jufJ"),p=a("daHu"),h=a("bwGF"),f=a("PIBz"),_=a("AebV"),b=function(e){var t,a,i,r,s=e.measure,o=Object(v.b)().t,b=Boolean(s.source),E=Boolean(null==s||null===(t=s.relationships)||void 0===t||null===(a=t.region)||void 0===a?void 0:a.length),g=Boolean((null==s?void 0:s.valid_from)||(null==s?void 0:s.valid_to)),y=Object(d.useLocation)().hash,k=function(e,t){var a,l,n=t,i=e.replace("#",""),r=null!==(a=null==t||null===(l=t.relationships)||void 0===l?void 0:l.versions.filter((function(e){return e.valid_from>(null==n?void 0:n.valid_from)})).sort((function(e,t){return e.valid_from>t.valid_from?1:-1})))&&void 0!==a?a:[],s=r.findIndex((function(e){return e.valid_from.replace(/T.*/,"")===i})),o=r[s]||n,u=r[s+1],m=u?u.valid_from:"",d=m.replace(/T.*/,"");return{versionToDisplay:o,isDisplayedVersionCurrent:-1===s,nextVersionFrom:m,nextVersionHash:d?"#"+d:void 0}}(function(){var e=Object(l.useState)(!1),t=e[0],a=e[1];return Object(l.useEffect)((function(){a(!0)}),[]),t}()?y:"",s),w=k.versionToDisplay,x=k.isDisplayedVersionCurrent,T=k.nextVersionFrom,C=k.nextVersionHash;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:s.title,subtitle:s.norm,lastUpdated:null==s?void 0:s.last_updated,processedContent:null==w||null===(i=w.content)||void 0===i?void 0:i.processed,beforeContent:n.a.createElement(n.a.Fragment,null,!x&&n.a.createElement(f.a,{key:s.path.alias+"-current",className:"position-relative",variant:"alert",title:u()(u()(o("measure_valid_from"),/{{(.*)}}/,(function(e){return n.a.createElement("a",{href:"#",className:"stretched-link",key:"current-version-link"},e)})),"{date}",(function(){return n.a.createElement(_.a,{datetime:null==w?void 0:w.valid_from,suffix:"",key:"current-version-time"})}))}),T&&n.a.createElement(f.a,{key:s.path.alias+"-future",className:"position-relative",variant:"info",title:u()(u()(o("measure_changes"),/{{(.*)}}/,(function(e){return n.a.createElement("a",{href:C,className:"stretched-link",key:"next-version-link"},e)})),"{date}",(function(){return n.a.createElement(_.a,{datetime:T,suffix:"",key:"next-version-time"})}))}))}),n.a.createElement("div",{className:"bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3"},E&&n.a.createElement(p.a,{regions:null==s||null===(r=s.relationships)||void 0===r?void 0:r.region}),g&&n.a.createElement(p.b,{displayTime:!0,validFrom:null==w?void 0:w.valid_from,validTo:null==w?void 0:w.valid_to}),b&&n.a.createElement("div",{className:"pt-2"},n.a.createElement("hr",null),n.a.createElement("h3",{className:"mb-1 color-blue-dark"},o("related")),n.a.createElement("div",null,n.a.createElement(m.a,{className:"color-blue mb-1",to:s.source.uri},s.source.title))),n.a.createElement(h.a,{isMobile:!0,lastUpdated:null==s?void 0:s.last_updated})))},E=a("CSOH"),g=a("Z3BO"),y=a("6Hpx"),k=a("QoFz"),w=(t.default=function(e){var t,a,l,o,u,m,d,c,p,h,f,_,w,x=e.data,T=e.pageContext,C=Object(v.b)().t,B=x.measureType.relationships.measure.map((function(e){return{id:e.id,name:e.title,path:e.path.alias,isActive:e.path.alias===T.slug,theme:"white"}}));return n.a.createElement(s.a,{pageContext:T,hasTransparentHeader:!1,showSearchInHeader:!0,showBackgroundImage:!1},n.a.createElement(r.a,{title:x.measure.title,description:x.measure.meta_description||C("current_measures_overview_meta"),pagePath:x.measure.path.alias,htmlLanguage:x.measure.langcode}),n.a.createElement(i.a,{datePublished:x.measure.valid_from?x.measure.valid_from:x.measure.created,dateModified:x.measure.changed,title:x.measure.title,langCode:x.measure.langcode,isBlogPost:!0,description:x.measure.meta_description,breadcrumbItems:[{title:C("home"),url:"/"},{title:C("current_measures"),url:C("slug_measures")},{title:null===(t=x.measure.relationships)||void 0===t||null===(a=t.situation_type)||void 0===a?void 0:a.name,url:null===(l=x.measure.relationships)||void 0===l||null===(o=l.situation_type)||void 0===o||null===(u=o.path)||void 0===u?void 0:u.alias},x.measure.title]}),n.a.createElement(y.a,null,n.a.createElement("div",{className:"pt-1 pb-1 pt-md-3 pb-md-3"},n.a.createElement(k.a,{items:[{title:C("home"),url:"/"},{title:C("current_measures"),url:C("slug_measures")},{title:null===(m=x.measure.relationships)||void 0===m||null===(d=m.measure_type)||void 0===d?void 0:d.name,url:null===(c=x.measure.relationships)||void 0===c||null===(p=c.measure_type)||void 0===p||null===(h=p.path)||void 0===h?void 0:h.alias},x.measure.title]})),n.a.createElement(E.a,{theme:"white",menu:n.a.createElement(g.c,{theme:"white",items:B,linkBack:{slug:T.listSlug,title:C("current_measures")},title:x.measureType.name,titleIconCode:null===(f=x.measureType)||void 0===f||null===(_=f.relationships)||void 0===_||null===(w=_.icon)||void 0===w?void 0:w.code}),hideMenuOnMobile:!0},n.a.createElement(b,{measure:x.measure}))))},"1717479903")}}]);
//# sourceMappingURL=component---src-templates-measures-page-tsx-342159fcaa30f9111462.js.map