(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{283:function(e,a,t){"use strict";var n=t(35),s=t(36),r=t(38),i=t(37),m=t(39),l=t(0),c=t.n(l),o=t(10),u=t(13),g=function(e){return{isAuth:e.auth.isAuth}};a.a=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(o.a,{to:"/login"})}}]),t}(c.a.Component);return Object(u.b)(g)(a)}},290:function(e,a,t){"use strict";t.r(a);var n=t(100),s=t(0),r=t.n(s),i=t(12),m=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:"dialogs__wrapper-items active-item"},r.a.createElement(i.b,{className:"dialogs__wrapper-links",to:a},r.a.createElement("img",{src:e.img,alt:"avatar"}),r.a.createElement("div",null,e.name)))},l=t(24),c=t(90),o=t.n(c),u=function(e){var a=e.profile,t=Object(l.a)(e,["profile"]);return console.log(t),r.a.createElement("div",{className:"message__wrapper"},a?r.a.createElement("img",{src:a.photos.small,alt:"avatar"}):r.a.createElement("img",{src:o.a,alt:"avatar",style:{width:"7rem",height:"4rem"}}),"  ",r.a.createElement("div",{className:"dialogs__wrapper-messages-message"},t.message))},g=t(10),p=t(83),d=t(123),f=t(25),b=t(63),E=Object(b.a)(50),h=Object(d.a)({form:"dialogsForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(p.a,{name:"newAnswer",placeholder:"your message here...",component:f.b,validate:[b.b,E]}),r.a.createElement("button",null,"SEND"))})),v=function(e){if(!e.isAuth)return r.a.createElement(g.a,{to:"/login"});var a=e.dialogs.map((function(e,a){return r.a.createElement(m,{key:a,name:e.name,id:e.id,img:e.img})})),t=e.messages.map((function(a,t){return r.a.createElement(u,{key:t,message:a.message,id:a.id,img:a.img,profile:e.profile})}));return r.a.createElement("div",{className:"dialogs__wrapper"},r.a.createElement("div",{className:"dialogs__wrapper-dialogs"},a),r.a.createElement("div",{className:"dialogs__wrapper-messages"},t," ",r.a.createElement(h,{onSubmit:function(a){e.sendMessage(a.newAnswer)}})))},w=t(13),_=t(283),j=t(8);a.default=Object(j.d)(Object(w.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages,newAnswer:e.messagesPage.newAnswer,profile:e.profilePage.profile}}),(function(e){return{sendMessage:function(a){e(Object(n.a)(a))}}})),_.a)(v)}}]);
//# sourceMappingURL=4.cf034c73.chunk.js.map