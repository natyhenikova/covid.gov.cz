(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+uiX":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o=r.n(n),a=r("qhky"),i=r("YwZP"),c=r("jufJ"),u=function(e){var t=e.datePublished,r=e.dateModified,n=e.description,u=e.isBlogPost,l=e.isBlogList,s=e.isSpecialList,p=e.title,T=e.langCode,f=e.body,E=e.isHomePage,d=e.breadcrumbItems,m="https://covid.gov.cz"+Object(i.useLocation)().pathname,A=[{"@context":"http://schema.org","@type":"WebSite",url:"https://covid.gov.cz",name:"en"===T?"Covid Portal":"Covid Portál",inLanguage:"en"===T?"en-GB":"cs-CZ"},{"@context":"http://schema.org","@type":"WebPage",url:m,name:p,inLanguage:"en"===T?"en-GB":"cs-CZ"}],h=[],y=1;void 0!==d?(d.forEach((function(e){"string"!=typeof e&&(h.push({"@type":"ListItem",position:y,item:{"@id":e.url,name:e.title}}),y++)})),s||h.push({"@type":"ListItem",position:y++,item:{"@id":m,name:p}})):h.push({"@type":"ListItem",position:y,item:{"@id":m,name:p}}),void 0===r&&(r=t||null);var g=u||l||s?[].concat(A,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:h},u?{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:p,articleBody:f,headline:p,description:n,publisher:{"@type":"Organization",url:"https://gov.cz",logo:"https://gov.cz/images/layout/pvs-logo-mobile.svg",name:"Gov.cz"},mainEntityOfPage:m,author:{"@type":"Organization",url:"https://gov.cz",logo:"https://gov.cz/images/layout/pvs-logo-mobile.svg",name:"Gov.cz"},image:"https://covid.gov.cz/images/ogimage.png",datePublished:t,dateModified:r}:""]):A,S=E?p:p+" · "+Object(c.b)("covid_portal"),b=new URL(m).origin;return o.a.createElement(a.default,{htmlAttributes:{lang:T}},o.a.createElement("meta",{property:"og:url",content:m}),o.a.createElement("meta",{property:"og:title",content:S}),o.a.createElement("meta",{property:"og:locale",content:"en"===T?"en_GB":"cs_CZ"}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:image",content:b+"/images/ogimage.png"}),o.a.createElement("meta",{property:"twitter:image",content:b+"/images/ogimage.png"}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{property:"og:site_name",content:Object(c.b)("covid_portal")}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)))};t.b=u},B6YX:function(e,t,r){"use strict";var n=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,u,l,s=n(t),p=n(r);if(s&&p){if((u=t.length)!=r.length)return!1;for(c=u;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(s!=p)return!1;var T=t instanceof Date,f=r instanceof Date;if(T!=f)return!1;if(T&&f)return t.getTime()==r.getTime();var E=t instanceof RegExp,d=r instanceof RegExp;if(E!=d)return!1;if(E&&d)return t.toString()==r.toString();var m=o(t);if((u=m.length)!==o(r).length)return!1;for(c=u;0!=c--;)if(!a.call(r,m[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=u;0!=c--;)if(!("_owner"===(l=m[c])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},BFM1:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r("q1tI"),a=n(o),i=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function p(){l=e(s.map((function(e){return e.props}))),T.canUseDOM?t(l):r&&(l=r(l))}var T=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),p()},c.componentDidUpdate=function(){p()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),p()},c.render=function(){return a.createElement(n,this.props)},o}(o.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(T,"canUseDOM",u),T}}},"FlE/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},Gytx:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var l=a[u];if(!c(l))return!1;var s=e[l],p=t[l];if(!1===(o=r?r.call(n,s,p,l):void 0)||void 0===o&&s!==p)return!1}return!0}},"Xb/l":function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r("q1tI")),i=u(r("YVoz")),c=r("FlE/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=m(e,c.TAG_NAMES.TITLE),r=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},T=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},d=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();-1===t.indexOf(l)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),u=0;u<a.length;u++){var l=a[u],s=(0,i.default)({},o[l],n[l]);o[l]=s}return e}),[]).reverse()},m=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,_=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,p=e.styleTags,T=e.title,f=e.titleAttributes;R(c.TAG_NAMES.BODY,n),R(c.TAG_NAMES.HTML,o),P(T,f);var E={baseTag:O(c.TAG_NAMES.BASE,r),linkTags:O(c.TAG_NAMES.LINK,a),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,p)},d={},m={};Object.keys(E).forEach((function(e){var t=E[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(m[e]=E[e].oldTags)})),t&&t(),l(e,d,m)},v=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var p=a.indexOf(l);-1!==p&&a.splice(p,1)}for(var T=a.length-1;T>=0;T--)r.removeAttribute(a[T]);o.length===a.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},M=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},C=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,o=I(r,n),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=M(r),a=v(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+s(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&g(b),e.defer?b=y((function(){_(e,(function(){b=null}))})):(_(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,p=e.title,T=void 0===p?"":p,f=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,n),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,n),link:C(c.TAG_NAMES.LINK,a,n),meta:C(c.TAG_NAMES.META,i,n),noscript:C(c.TAG_NAMES.NOSCRIPT,u,n),script:C(c.TAG_NAMES.SCRIPT,l,n),style:C(c.TAG_NAMES.STYLE,s,n),title:C(c.TAG_NAMES.TITLE,{title:T,titleAttributes:f},n)}},t.reducePropsToState=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,r("yLpj"))},n214:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),o=r.n(n),a=r("zLmF"),i=r("Wbzz");var c=function(e){var t=e.title,r=e.description,n=e.image,c=e.pagePath,u=e.ogType,l=void 0===u?"website":u,s=e.requireImage,p=void 0===s||s,T=e.appendSiteTitleToPageTitle,f=void 0===T||T,E=e.twitterCard,d=void 0===E?"summary_large_image":E,m=e.locale,A=e.authorUrl,h=e.publisherUrl,y=e.keywords,g=e.schema,S=Object(i.useStaticQuery)("2446164016").seo,b=S.siteName,_=S.siteUrl,v=S.defaultSiteImage,P=S.defaultLocale,R=S.twitterSite,O=S.twitterCreator,M=S.defaultAuthorUrl,I=S.defaultPublisherUrl,C=S.appleTouch,w=S.favicon16,L=S.favicon32,N=S.globalSchema;if(!t)throw Error("'title' prop is required.");if(!r)throw Error("'description' prop is required.");if(!c)throw Error("'pagePath' prop is required.");var G,H=m||P,j=new URL(c,_),k=n||v,B=f?t+" · "+b:t,x=A||M,U=h||I;if(y&&"string"==typeof y&&(G=y.trim()),y&&Array.isArray(y)&&(G=y.join(", ").trim()),!k&&p)throw Error("Image not supplied. Add a 'defaultSiteImage' to site metadata, or pass in an 'image' prop. Or pass 'false' to the requireImage prop, if this page does not need an image.");var D,F=!!N||!!g;if(F&&!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(D='\n    { "@context": "https://schema.org",\n      "@graph": [\n      '+(N||"")+(N&&g?",":"")+(g||"")+"\n      ]\n    }"))throw Error("Invalid JSON Schema. Check the values of 'globalSchema' in gatsby-config.js, or 'schema' prop of the page");return o.a.createElement(a.Helmet,null,o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:C}),o.a.createElement("link",{rel:"icon",type:"image/png",href:L,sizes:"32x32"}),o.a.createElement("link",{rel:"icon",type:"image/png",href:w,sizes:"16x16"}),o.a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),o.a.createElement("title",null,B),o.a.createElement("meta",{name:"description",content:r}),G&&o.a.createElement("meta",{name:"keywords",content:G}),o.a.createElement("meta",{property:"og:url",content:j}),o.a.createElement("meta",{property:"og:type",content:l}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:r}),o.a.createElement("meta",{property:"og:locale",content:H}),o.a.createElement("meta",{property:"og:site_name",content:b}),p&&o.a.createElement("meta",{property:"og:image",content:new URL(k,_)}),p&&o.a.createElement("meta",{property:"og:image:secure_url",content:new URL(k,_)}),"article"===l&&U&&o.a.createElement("meta",{property:"article:publisher",content:U}),"article"===l&&x&&o.a.createElement("meta",{property:"article:author",content:x}),o.a.createElement("meta",{name:"twitter:card",content:d}),R&&o.a.createElement("meta",{name:"twitter:site",content:R}),O&&o.a.createElement("meta",{name:"twitter:creator",content:O}),F&&o.a.createElement("script",{type:"application/ld+json"},D))}},zLmF:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=p(r("q1tI")),i=p(r("17x9")),c=p(r("BFM1")),u=p(r("B6YX")),l=r("Xb/l"),s=r("FlE/");function p(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,m,A,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(d=h,A=m=function(e){function t(){return f(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},a,((t={})[o.type]=c,t.titleAttributes=n({},i),t));case s.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},i)});case s.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},i)})}return n({},a,((r={})[o.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=T(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=T(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=d.peek,m.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y}}]);
//# sourceMappingURL=83dfe24b9de1033d05c446a76a6e358f07b58c25-26b5d7a4de053a1a88e9.js.map