(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(44),r=n(9),c={dialogs:[{id:1,name:"Olga",img:"https://randomuser.me/api/portraits/women/88.jpg"},{id:2,name:"Vasea",img:"https://randomuser.me/api/portraits/men/31.jpg"},{id:3,name:"Sveta",img:"https://randomuser.me/api/portraits/women/57.jpg"},{id:4,name:"Misha",img:"https://randomuser.me/api/portraits/men/76.jpg"},{id:5,name:"Slava",img:"https://randomuser.me/api/portraits/men/94.jpg"}],messages:[{id:1,message:"Hello how are you",img:"https://randomuser.me/api/portraits/men/17.jpg"},{id:2,message:"I am fine!!!",img:"https://randomuser.me/api/portraits/women/88.jpg"},{id:3,message:"Happy birthday",img:"https://randomuser.me/api/portraits/men/17.jpg"},{id:4,message:"Thanks yo!!",img:"https://randomuser.me/api/portraits/women/88.jpg"}],newAnswer:""},s=function(e){return{type:"ADD-MESSAGE",newAnswer:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:5,message:t.newAnswer,img:"https://randomuser.me/api/portraits/women/88.jpg"};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(9),r={articles:[]},c=function(e){return{type:"GET_NEWS",articles:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS":return Object(a.a)({},e,{articles:t.articles});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(93),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3cbba7a4-ece5-49a7-bc29-e1705c0d4fa1"}}),c={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getPages:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},s={getProfile:function(e){return r.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("/profile/status/".concat(e))},updateStatus:function(e){return r.put("/profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo/",t,{headers:{"Content-Type":"multipart/term-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={setAuth:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},l={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},132:function(e,t,n){e.exports=n.p+"static/media/loginPagePicture.6da21a6c.jpg"},158:function(e,t,n){e.exports=n(284)},241:function(e,t,n){},242:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(24),r=n(0),c=n.n(r),s=n(84),i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched&&n.error;return c.a.createElement("div",{className:s?"error":"formControl"},c.a.createElement("textarea",Object.assign({},t,r)),s&&c.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched&&n.error;return c.a.createElement("div",{className:s?"error":"formControl"},c.a.createElement("input",Object.assign({},t,r)),s&&c.a.createElement("span",null,n.error))},o=function(e,t,n,a,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return c.a.createElement("div",{className:"form-field"},c.a.createElement(s.a,Object.assign({placeholder:e,name:t,component:n,validate:a,type:r},l)),i)}},284:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(91),c=n(102),s=n(5),i=n.n(s),l=n(13),o=n(9),u=n(12),m={friends:[{name:"Sveta",img:"https://randomuser.me/api/portraits/women/57.jpg"},{name:"Misha",img:"https://randomuser.me/api/portraits/men/76.jpg"},{name:"Olga",img:"https://randomuser.me/api/portraits/women/88.jpg"}],profile:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIDEBAR_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});default:return e}},d=n(44),f=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)({},e,{},a):e}))},g={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(e){return{type:"FOLLOW",userId:e}},E=function(e){return{type:"UNFOLLOW",userId:e}},v=function(e){return{type:"SET_USERS",users:e}},b=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},w=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},O=function(e){return{type:"TOGGLE_PREALOADER",isFetching:e}},_=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},A=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)({},e,{users:f(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)({},e,{users:f(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)({},e,{totalUserCount:t.count});case"TOGGLE_PREALOADER":return Object(o.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(o.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},j=n(35),I="social-network/auth/SET_USER_DATA",S={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},y=function(e,t,n,a){return{type:I,payload:{userId:e,email:t,login:n,isAuth:a}}},P=function(e){return{type:"social-network/auth/GET_CAPTCHA_URL_SUCCES",payload:{captchaUrl:e}}},U=function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.setAuth();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.email,s=a.login,t(y(r,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(P(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:case"social-network/auth/GET_CAPTCHA_URL_SUCCES":return Object(o.a)({},e,{},t.payload);default:return e}},C=n(128),z=n(127),M={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(o.a)({},e,{initialized:!0});default:return e}},G=n(103),L=Object(a.c)({profilePage:r.b,messagesPage:c.b,sideBar:p,usersPage:N,auth:T,form:z.a,app:R,newsPage:G.a}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,x=Object(a.e)(L,D(Object(a.a)(C.a)));window.___store__=x;var Y=x,B=n(0),F=n.n(B),Z=n(62),W=n.n(Z),Q=(n(241),n(28)),V=n(29),J=n(31),H=n(30),X=n(32),K=(n(242),n(11)),q=n(14),$=n(53),ee=n(24),te=n(10),ne=function(e){return F.a.createElement("div",null,F.a.createElement(te.b,{to:"/dialogs"},F.a.createElement("img",{src:e.img,alt:"avatar"}),F.a.createElement("span",null,e.name)))},ae=function(e){var t=e.profile;e.authUserId,Object(ee.a)(e,["profile","authUserId"]),t&&t.userId;return F.a.createElement("div",{className:"nav__wrapper-header"},F.a.createElement(F.a.Fragment,null,F.a.createElement("div",{className:"nav__wrapper-header"},F.a.createElement("img",{src:"https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"img"}),F.a.createElement("div",{className:"profile__shortinfo"},t?F.a.createElement("img",{src:t.photos.large,alt:"avatar",className:"profile__shortinfo-img"}):"",F.a.createElement("p",null,t?t.fullName:"")))))},re=function(e){var t=e.profile,n=e.authUserId,a=Object(ee.a)(e,["profile","authUserId"]),r=Object(B.useState)(!0),c=Object($.a)(r,2),s=c[0],i=c[1],l=window.innerWidth,o=a.sideBar.friends.map((function(e,t){return F.a.createElement(ne,{key:t,name:e.name,img:e.img})}));return F.a.createElement(F.a.Fragment,null,l<450?F.a.createElement("div",{className:"nav__wrapper  nav__wrapper-hide"},s?F.a.createElement("div",null,F.a.createElement("button",{className:"btn_showhide",onClick:function(){i(!1)}},F.a.createElement("div",{className:"btn_showhide-stripe"}))):F.a.createElement("div",null,F.a.createElement("button",{className:"btn_showhide",onClick:function(){i(!0)}},F.a.createElement("div",{className:"btn_showhide-stripe btn_showhide-stripe-hide "})),F.a.createElement("div",null," ",F.a.createElement("div",{className:"nav__wrapper"},a.auth?F.a.createElement(ae,{profile:t,authUserId:n,props:a}):null,F.a.createElement("nav",{className:"nav"},F.a.createElement("ul",{className:"nav__list"},F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/content",className:"nav__list-link"},"Profile")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/dialogs",className:"nav__list-link"},"Messages")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/news",className:"nav__list-link"},"News")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/music",className:"nav__list-link"},"Music")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/allusers",className:"nav__list-link"},"All Users")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/setings",className:"nav__list-link"},"Setings")))),a.auth?F.a.createElement("div",{className:"nav__wrapper-friends"},F.a.createElement("h3",null,"Friends"),F.a.createElement("div",{className:"nav__wrapper-friends-wrapp"},o)):"")))):F.a.createElement("div",{className:"nav__wrapper"},a.auth?F.a.createElement(ae,{profile:t,authUserId:n,props:a}):null,F.a.createElement("nav",{className:"nav"},F.a.createElement("ul",{className:"nav__list"},F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/content",className:"nav__list-link"},"Profile")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/dialogs",className:"nav__list-link"},"Messages")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/news",className:"nav__list-link"},"News")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/music",className:"nav__list-link"},"Music")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/allusers",className:"nav__list-link"},"All Users")),F.a.createElement("li",{className:"nav__list-item"},F.a.createElement(te.b,{to:"/setings",className:"nav__list-link"},"Setings")))),a.auth?F.a.createElement("div",{className:"nav__wrapper-friends"},F.a.createElement("h3",null,"Friends"),F.a.createElement("div",{className:"nav__wrapper-friends-wrapp"},o)):""))},ce=function(e){function t(){return Object(Q.a)(this,t),Object(J.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return F.a.createElement(re,{profile:this.props.profile,authUserId:this.props.authUserId,sideBar:this.props.sideBar,auth:this.props.auth})}}]),t}(B.Component),se=Object(a.d)(K.g,Object(q.b)((function(e){return{sideBar:e.sideBar,profile:e.profilePage.profile,auth:e.auth.isAuth,users:e.usersPage,authUserId:e.auth.userId}}),{getSideBar:function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getSideBar(e);case 2:a=t.sent,console.log(a),n({type:"SET_SIDEBAR_USER_PROFILE",profile:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ce),ie=function(){return F.a.createElement("div",null,F.a.createElement("h1",null,"Music Page"))},le=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),l=[],o=1;o<=i;o++)l.push(o);var u=Math.ceil(i/s),m=Object(B.useState)(1),p=Object($.a)(m,2),d=p[0],f=p[1],g=(d-1)*s+1,h=d*s;return F.a.createElement("div",{className:"paginator__wrapp"},d>1&&F.a.createElement("button",{onClick:function(){f(d-1)}},"PREV"),l.filter((function(e){return e>=g&&e<=h})).map((function(e,t){return F.a.createElement("span",{key:t,className:a===e?"selected":"",onClick:function(t){r(e)}},e)})),u>d&&F.a.createElement("button",{onClick:function(){f(d+1)}},"NEXT"))},oe=n(92),ue=n.n(oe),me=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return F.a.createElement("div",{className:"userspage__wrapp"},F.a.createElement("div",{className:"userspage__wrapp-avatar"},F.a.createElement(te.b,{to:"/content/".concat(t.id)},F.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ue.a,alt:"img"})),F.a.createElement("div",null,t.followed?F.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):F.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),F.a.createElement("div",{className:"userspage__wrapp-info"},F.a.createElement("div",{className:"userspage__wrapp-info-left"},F.a.createElement("div",null,t.name),F.a.createElement("div",null,t.status)),F.a.createElement("div",{className:"userspage__wrapp-info-right"})))},pe=function(e){var t=e.currentPage,n=e.totalUserCount,a=e.pageSize,r=e.onPageChanged,c=e.users,s=Object(ee.a)(e,["currentPage","totalUserCount","pageSize","onPageChanged","users"]);return F.a.createElement("div",{className:"Alluser"},c.map((function(e,t){return F.a.createElement(me,{key:t,user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow})})),F.a.createElement(le,{currentPage:t,onPageChanged:r,pageSize:a,totalItemsCount:n}))},de=n(63),fe=n(131),ge=Object(fe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),he=function(e){return e.usersPage.pageSize},Ee=function(e){return e.usersPage.totalUserCount},ve=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},Oe=function(e){function t(){var e,n;Object(Q.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(J.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.requestUsers(e,n.props.pageSize)},n}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return F.a.createElement(F.a.Fragment,null,this.props.isFetching?F.a.createElement(de.a,null):null,F.a.createElement(pe,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(F.a.Component),_e=Object(a.d)(Object(q.b)((function(e){return{users:ge(e),pageSize:he(e),totalUserCount:Ee(e),currentPage:ve(e),isFetching:be(e),followingInProgress:we(e)}}),{follow:function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=u.d.follow.bind(u.d),A(n,e,a,h);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=u.d.unfollow.bind(u.d),A(n,e,a,E);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:v,setCurrentPage:b,setTotalUsersCount:w,setPrealoader:O,toggleFollowngProggress:_,requestUsers:function(e,t){return function(){var n=Object(l.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(O(!0)),a(b(e)),n.next=4,u.d.getUsers(e,t);case 4:r=n.sent,a(O(!1)),a(v(r.items)),a(w(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Oe),Ae=function(){return F.a.createElement("div",null,F.a.createElement("h1",null,"Setings Page"))},Ne=n(88),je=n.n(Ne),Ie=function(e){var t,n;return F.a.createElement("header",{className:"header"},F.a.createElement("div",{className:"header__logo"},F.a.createElement("div",{className:"header__logo-img"},F.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3"},F.a.createElement("g",{fill:"#61DAFB"},F.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),F.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),F.a.createElement("path",{d:"M520.5 78.1z"})))),F.a.createElement("div",{className:"header__logo-heading"},F.a.createElement("h1",null,"Social Network"))),F.a.createElement("div",{className:"login-btn"},e.isAuth?F.a.createElement("div",{className:"log__out"},(t=e.profile?e.profile.userId:"",n=e.authUserId,t===n?F.a.createElement(F.a.Fragment,null,e.profile?F.a.createElement("img",{src:e.profile.photos.small,alt:"profile",className:"header__photo"}):"",F.a.createElement("span",{className:"header_fullname"},e.profile?e.profile.fullName:e.login),F.a.createElement("button",{onClick:e.logout},F.a.createElement("img",{src:je.a,alt:"sing out"}),F.a.createElement("span",null,"Sing Out"))):F.a.createElement(F.a.Fragment,null,F.a.createElement("button",{onClick:e.logout},F.a.createElement("img",{src:je.a,alt:"sing out"}),F.a.createElement("span",null,"Sing Out"))))):F.a.createElement(te.b,{to:"/login"},"LOGIN")))},Se=function(e){function t(){return Object(Q.a)(this,t),Object(J.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return F.a.createElement(Ie,this.props)}}]),t}(F.a.Component),ye=Object(a.d)(K.g,Object(q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile,authUserId:e.auth.userId}}),{logout:function(){return function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Se),Pe=n(126),Ue=n(25),ke=n(64),Te=n(132),Ce=n.n(Te),ze=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return F.a.createElement(F.a.Fragment,null,F.a.createElement("div",{className:"login-bg"},F.a.createElement("img",{src:Ce.a,alt:"login-pic"})),F.a.createElement("form",{onSubmit:t},Object(Ue.c)("Email","email",Ue.a,[ke.b],"email"),Object(Ue.c)("Password","password",Ue.a,[ke.b],"password"),Object(Ue.c)(null,"rememberMe",Ue.a,[],"checkbox","remember me"),a&&F.a.createElement("img",{src:a,alt:"captcha"}),a&&Object(Ue.c)("Symbols from image","captcha",Ue.a,[ke.b]),n&&F.a.createElement("div",{className:"commonError"},n),F.a.createElement("div",null,F.a.createElement("button",{className:"login__btn"},"Login"))))})),Me=Object(q.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(l.a)(i.a.mark((function r(c){var s,l;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n,a);case 2:0===(s=r.sent).data.resultCode?c(U()):(10===s.data.resultCode&&c(k()),l=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(j.a)("login",{_error:l})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?F.a.createElement(K.a,{to:"/content"}):F.a.createElement("div",{className:"login__wrapper"},F.a.createElement(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Re=function(e){return function(t){return F.a.createElement(F.a.Suspense,{fallback:F.a.createElement("div",null,"Loading...")},F.a.createElement(e,t))}},Ge=F.a.lazy((function(){return n.e(4).then(n.bind(null,292))})),Le=F.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),De=F.a.lazy((function(){return n.e(5).then(n.bind(null,293))})),xe=function(e){function t(){var e,n;Object(Q.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(J.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandleErrors=function(e){alert("some error"),console.error(e)},n}return Object(X.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?F.a.createElement("div",{className:"app-wrapper"},F.a.createElement(ye,null),F.a.createElement(se,null),F.a.createElement("div",{className:"content-wrapper"},F.a.createElement(K.d,null,F.a.createElement(K.b,{exact:!0,path:"/",render:function(){return F.a.createElement(K.a,{to:"/content"})}}),F.a.createElement(K.b,{path:"/content/:userId?",render:Re(Le)}),F.a.createElement(K.b,{path:"/dialogs",render:Re(Ge)}),F.a.createElement(K.b,{path:"/news",render:Re(De)}),F.a.createElement(K.b,{path:"/music",component:ie}),F.a.createElement(K.b,{path:"/allusers",render:function(){return F.a.createElement(_e,null)}}),F.a.createElement(K.b,{path:"/setings",component:Ae}),F.a.createElement(K.b,{path:"/login",component:Me}),F.a.createElement(K.b,{path:"*",render:function(){return F.a.createElement("div",null,"404 NOT FOUND")}})))):F.a.createElement(de.a,null)}}]),t}(B.Component),Ye=Object(a.d)(Object(q.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}})(xe));W.a.render(F.a.createElement(te.a,null,F.a.createElement(q.a,{store:Y},F.a.createElement(Ye,null))),document.getElementById("root"))},63:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",{className:"preloader"})}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},88:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAUVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDgtMTFUMDk6Mzc6NTErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA4LTExVDA5OjQ4OjI3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTExVDA5OjQ4OjI3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ1NDEzYzMtYjIwZS00NjQzLWI3NzgtNjM3NGYxYTM1Y2E5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmY0NTQxM2MzLWIyMGUtNDY0My1iNzc4LTYzNzRmMWEzNWNhOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmY0NTQxM2MzLWIyMGUtNDY0My1iNzc4LTYzNzRmMWEzNWNhOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ1NDEzYzMtYjIwZS00NjQzLWI3NzgtNjM3NGYxYTM1Y2E5IiBzdEV2dDp3aGVuPSIyMDIwLTA4LTExVDA5OjM3OjUxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QVmIQQAAAHxJREFUSInVllEOwCAIQ9tl979y9zWD0TiJkGk/NREfBZSSkKkr9XQA92DPhUaSvfVfCV51b2Y0JE0nOD/AjAdTMv0kGN8iCIi2EEq0zBQJ8KfIO1e0nclfTQfUlMwkIBBjstB6U0jD+sAM0yqN54+KLcp06dFOJ+Dxv4oHR98UOcfIcc8AAAAASUVORK5CYII="},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var a=n(5),r=n.n(a),c=n(13),s=n(44),i=n(9),l=n(12),o=n(35),u={posts:[{id:1,message:"It's Sunny Day",likesCount:10},{id:2,message:"I am fine",likesCount:25},{id:3,message:"Happy birthday",likesCount:30},{id:4,message:"Everything is GooD!!!",likesCount:20}],profile:null,status:""},m=function(e){return{type:"ADD-POST",newText:e}},p=function(e){return{type:"SET_USER_STATUS",status:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCES",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,l.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(d(c)),t.next=10;break;case 8:return n(Object(o.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:7,message:t.newText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_USER_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCES":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},92:function(e,t,n){e.exports=n.p+"static/media/user.f5840b79.png"}},[[158,1,2]]]);
//# sourceMappingURL=main.06e0d189.chunk.js.map