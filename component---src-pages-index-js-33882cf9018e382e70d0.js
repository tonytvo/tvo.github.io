"use strict";(self.webpackChunktvo_blog_generator=self.webpackChunktvo_blog_generator||[]).push([[678],{9535:function(e,t,a){var l=a(7294),i=a(5444),n=a(6125);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"You should follow them on Twitter")))}},7704:function(e,t,a){a.r(t);var l=a(7294),i=a(5444),n=a(9535),r=a(7198),c=a(3751);t.default=function(e){var t,a=e.data,o=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:o,title:s},l.createElement(c.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-33882cf9018e382e70d0.js.map