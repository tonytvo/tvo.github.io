(self.webpackChunkgatsby_starter_bootstrap=self.webpackChunkgatsby_starter_bootstrap||[]).push([[675],{1822:function(e,t,r){var n;void 0===(n=function(){return function(e){"use strict";var t,r,n,a,i,o,s,l,c,u,d={},f=function(){},p=function(){return"querySelectorAll"in document},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},h=function(e){var t=e.offsetWidth,r=e.offsetHeight,n=0,a=0;do{isNaN(e.offsetTop)||(n+=e.offsetTop),isNaN(e.offsetLeft)||(a+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:r,top:n,left:a}},g=function(e){var t,r;return e!==window?(t=e.clientWidth,r=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight),{width:t,height:r}},y=function(e){return e!==window?{x:e.scrollLeft+h(e).left,y:e.scrollTop+h(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}},b=function(e){return null===e.offsetParent},v=function(e){if(b(e))return!1;var t,n,a,i,d,f,p,m,v=h(e),w=g(r),T=y(r),E=v.width,S=v.height,O=v.top,C=v.left,A=O+S,L=C+E;return t=O+S*o,n=L-E*o,a=A-S*o,i=C+E*o,d=T.y+s,f=T.x-l+w.width,p=T.y-c+w.height,m=T.x+u,t<p&&a>d&&i<f&&n>m},w=function(){t||(clearTimeout(t),t=setTimeout((function(){d.engage(),t=null}),n))};return d.init=function(e){var t=function(e,t){return parseInt(e||t,10)},d=function(e,t){return parseFloat(e||t)};r=(e=e||{}).container||window,a=void 0===e.reset||e.reset,i=void 0===e.handheld||e.handheld,n=t(e.throttle,250),o=d(e.elemCushion,.15),s=t(e.offsetTop,0),l=t(e.offsetRight,0),c=t(e.offsetBottom,0),u=t(e.offsetLeft,0),f=e.callback||f,p()?(m()&&i||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",w,!1),r.addEventListener("scroll",w,!1),r.addEventListener("resize",w,!1)):(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&w()})),r.attachEvent("onscroll",w),r.attachEvent("onresize",w))):console.log("Emergence.js is not supported in this browser.")},d.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),r=t.length,n=0;n<r;n++)e=t[n],v(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,f(e,"visible")):!0===a?(e.setAttribute("data-emergence","hidden"),e.className=e.className,f(e,"reset")):!1===a&&f(e,"noreset");r||d.disengage()},d.disengage=function(){window.removeEventListener?(r.removeEventListener("scroll",w,!1),r.removeEventListener("resize",w,!1)):(r.detachEvent("onscroll",w),r.detachEvent("onresize",w)),clearTimeout(t)},d}()}.call(t,r,t,e))||(e.exports=n)},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],o[c[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},9891:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(1822),i=r.n(a),o=r(5444),s=function(e){var t=e.location,r=e.title;return n.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},n.createElement("div",{className:"container"},n.createElement(o.Link,{className:"text-center",to:"/"},n.createElement("h1",{className:"navbar-brand mb-0"},r)),n.createElement("div",{className:"navbar-nav-scroll"},n.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},n.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},n.createElement(o.Link,{to:"/",className:"nav-link"},"Home")),n.createElement("li",{className:"/about/"===t.pathname?"nav-item active":"nav-item"},n.createElement(o.Link,{to:"/about/",className:"nav-link"},"About")))),n.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},l=function(e){var t=e.author,r=e.title;return n.createElement("div",{className:"footer"},n.createElement("div",{className:"container"},n.createElement("hr",{className:"border-primary"}),n.createElement("p",null,r,n.createElement(o.Link,{to:"/about/"},n.createElement("br",null),n.createElement("strong",null,t)," on About"))))},c=r(8072),u=function(e){var t=e.children,r=e.location;return(0,n.useEffect)((function(){i().init()})),n.createElement("div",null,n.createElement(s,{title:c.siteMetadata.title,location:r}),t,n.createElement(l,{title:c.siteMetadata.title,author:c.siteMetadata.author}))}},9640:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,a,i,o,s=r(7294),l=r(5697),c=r.n(l),u=r(4839),d=r.n(u),f=r(2993),p=r.n(f),m=r(6494),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",S="http-equiv",O="innerHTML",C="itemprop",A="name",L="property",k="rel",x="src",I="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",R="encodeSpecialCharacters",H="onChangeClientState",M="titleTemplate",z=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),V=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,v.TITLE),r=X(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,P);return t||n||void 0},K=function(e){return X(e,H)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||r===k&&"canonical"===e[r].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==O&&s!==T&&s!==C||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],l=h()({},n[s],a[s]);n[s]=l}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(v.BODY,n),le(v.HTML,a),se(d,f);var p={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,i),metaTags:ce(v.META,o),noscriptTags:ce(v.NOSCRIPT,s),scriptTags:ce(v.SCRIPT,c),styleTags:ce(v.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==o.join(",")&&r.setAttribute(_,o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(_,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,a=de(r,n),[s.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(g,r,n),htmlAttributes:fe(y,a,n),link:fe(v.LINK,i,n),meta:fe(v.META,o,n),noscript:fe(v.NOSCRIPT,s,n),script:fe(v.SCRIPT,l,n),style:fe(v.STYLE,c,n),title:fe(v.TITLE,{title:d,titleAttributes:f},n)}},me=d()((function(e){return{baseTag:J([E,I],e),bodyAttributes:Z(g,e),defer:X(e,N),encode:X(e,R),htmlAttributes:Z(y,e),linkTags:$(v.LINK,[k,E],e),metaTags:$(v.META,[A,w,S,L,C],e),noscriptTags:$(v.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:$(v.SCRIPT,[x,O],e),styleTags:$(v.STYLE,[T],e),title:G(e),titleAttributes:Z(b,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return W(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return F({},a,((t={})[n.type]=o,t.titleAttributes=F({},i),t));case v.BODY:return F({},a,{bodyAttributes:F({},i)});case v.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(D(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=D(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=function(e){var t=e.site,r=e.title,n=(null==t?void 0:t.title)||"",a=(null==t?void 0:t.siteUrl)||"",i=(null==t?void 0:t.description)||"",o=r?r+" | "+n:n;return s.createElement(he,{title:o,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+(null==t?void 0:t.twitter)},{property:"og:title",content:o},{property:"og:type",content:"website"},{property:"og:description",content:i},{property:"og:url",content:a+"/about"},{property:"og:image",content:a+"/img/about.jpg"}]})}},8072:function(e){e.exports={siteMetadata:{title:"Tony Vo",description:"Tony Vo",siteUrl:"https://calgarysoftwarecrafters.github.io/",author:"Tony Vo",twitter:"crafterscalgary",adsense:""},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:"//content/posts/",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:"//content/images/",name:"images"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",description:"Tony Vo",homepage_url:"https://calgarysoftwarecrafters.github.io/",start_url:"/",background_color:"#fff",theme_color:"#673ab7",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-plugin-typegen","gatsby-plugin-typescript","gatsby-transformer-sharp"]}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),s=n(r(7316)),l=n(r(7154)),c=n(r(7294)),u=n(r(5697)),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=m(t||r||[]);return n&&n.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=p(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(x,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),s):s})),x=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,C=e.draggable,A=h||g;if(!A)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:I?1:0,transition:j?"opacity "+b+"ms":"none"},s),N="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&R,s,f),M={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:w},z=this.state.isHydrated?m(A):A[0];if(h)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),N&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),z.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:A,generateSources:O}),z.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:A,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,T(A),c.default.createElement(x,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:E},z,{imageVariants:A}))}}));if(g){var V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},N&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},j&&R)}),z.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:A,generateSources:O}),z.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:A,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,T(A),c.default.createElement(x,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:E},z,{imageVariants:A}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}I.propTypes={resolutions:j,sizes:P,fixed:N(u.default.oneOfType([j,u.default.arrayOf(j)])),fluid:N(u.default.oneOfType([P,u.default.arrayOf(P)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=I;t.Z=R}}]);
//# sourceMappingURL=c0236b323238a5fa5909d22b2c74857774b62b01-c512173ac866b30f1613.js.map