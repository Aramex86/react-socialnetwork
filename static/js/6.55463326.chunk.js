(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{390:function(e,t,n){"use strict";var r,a=n(0),o=(r=a)&&"object"===typeof r&&"default"in r?r.default:r,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var s="styles_scroll-to-top__2A70v";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles_scroll-to-top__2A70v {\n    background-color: white;\n    right: 40px;\n    bottom: 40px;\n    position: fixed;\n    z-index: 2;\n    cursor: pointer;\n    border-radius: 7px;\n    width: 40px;\n    height: 40px;\n    transition: opacity 1s ease-in-out;\n    box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);\n    border: none;\n    outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n    transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");e.exports=function(e){var t=e.top,n=void 0===t?20:t,r=e.className,i=void 0===r?s:r,l=e.color,p=void 0===l?"black":l,u=e.smooth,m=void 0!==u&&u,d=e.component,f=void 0===d?"":d,h=e.viewBox,v=void 0===h?"0 0 256 256":h,g=e.svgPath,b=void 0===g?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":g,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["top","className","color","smooth","component","viewBox","svgPath"]),w=a.useState(!1),E=w[0],x=w[1];a.useEffect((function(){return document.addEventListener("scroll",N),function(){return document.removeEventListener("scroll",N)}}),[]);var N=function(){x(document.documentElement.scrollTop>n)};return o.createElement(o.Fragment,null,E&&o.createElement("button",c({className:i,onClick:function(){return function(e){void 0===e&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(m)}},y),f||o.createElement("svg",{fill:p,viewBox:v},o.createElement("path",{d:b}))))}},393:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return y}));var r=n(31),a=n(32),o=n(34),c=n(33),s=n(0),i=n.n(s),l=n(62),p=function(e){var t=e.title,n=e.description,r=e.url,a=e.image,o=e.publishedAt,c=e.source,s=e.isFetching;return i.a.createElement(i.a.Fragment,null,s?i.a.createElement(l.a,null):null,i.a.createElement("div",{className:"article-wrapper"},i.a.createElement("h3",{className:"article-wrapper_title"},t),i.a.createElement("img",{className:"article-wrapper_image",src:a,alt:"img"}),i.a.createElement("p",{className:"article-wrapper_desc"},n),i.a.createElement("div",{className:"article-wrapper_fotter"},i.a.createElement("span",{className:"article-wrapper_fotter-author"},c.name),i.a.createElement("span",{className:"article-wrapper_fotter-urlto"},i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"source")),i.a.createElement("span",{className:"article-wrapper_fotter-date"},o),i.a.createElement("span",{className:"article-wrapper_fotter-source"}))))},u=n(390),m=n.n(u),d=function(e){var t=e.articles,n=e.isFetching,r=t.map((function(e,t){return i.a.createElement(p,{key:t,author:e.author,title:e.title,description:e.description,url:e.url,content:e.content,publishedAt:e.publishedAt,image:e.image,source:e.source,isFetching:n})}));return i.a.createElement("div",null,r,i.a.createElement(m.a,{smooth:!0,className:"up",svgPath:""}))},f=function(e){return e.newsPage.articles},h=function(e){return e.newsPage.isFetching},v=n(25),g=n(119),b=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getNewsRequest()}},{key:"render",value:function(){return console.log(this.props),i.a.createElement(d,{articles:this.props.articles,isFetching:this.props.isFetching})}}]),n}(s.Component),y=function(e){return{articles:f(e),isFetching:h(e)}};t.default=Object(v.b)(y,{getNews:g.b,getNewsRequest:g.c})(b)}}]);
//# sourceMappingURL=6.55463326.chunk.js.map