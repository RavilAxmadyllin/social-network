(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return P})),n.d(t,"f",(function(){return I})),n.d(t,"b",(function(){return w}));var a=n(15),r=n.n(a),o=n(35),l=n(27),u=n(6),s=n(9),c="SOCIAL_NETWORK/DIALOGS/GET_MESSAGES",i="SOCIAL_NETWORK/DIALOGS/GENERAL_MESSAGES",f="SOCIAL_NETWORK/DIALOGS/GET_DIALOGS",m="SOCIAL_NETWORK/DIALOGS/PUT_UP_DIALOG",p="SOCIAL_NETWORK/DIALOGS/SET_SELECT_DIALOG",d="SOCIAL_NETWORK/DIALOGS/GET_NEW_MESSAGES_COUNT",g={dialogs:[],messages:[],generalMessage:[],selectDialog:!1,newMessagesCount:0};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(u.a)({},e,{generalMessage:[].concat(Object(l.a)(e.generalMessage),Object(l.a)(t.messages))});case c:return Object(u.a)({},e,{messages:Object(l.a)(t.messages)});case f:return Object(u.a)({},e,{dialogs:t.dialogs});case d:return Object(u.a)({},e,{newMessagesCount:t.count});case m:return Object(u.a)({},e,{dialogs:[].concat(Object(l.a)(e.dialogs.filter((function(e){return e.id===t.userId}))),Object(l.a)(e.dialogs.filter((function(e){return e.id!==t.userId}))))});case p:return Object(u.a)({},e,{selectDialog:t.select});default:return e}};var E=function(e){return{type:d,count:e}},h=function(e){return{type:m,userId:e}},b=function(e){return{type:p,select:e}},O=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getDialogs();case 2:n=e.sent,t({type:f,dialogs:n}),t(S());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getMessage(e);case 2:a=t.sent,n((r=a.items,{type:c,messages:r})),n(S());case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a,o){var l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.b.sendMessage(e,t);case 2:a(v(e)),l=o().dialogsPage.dialogs.find((function(t){return t.id===e})),a(l?h(e):O());case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},S=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getNewMessageCount();case 2:n=e.sent,t(E(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(t){"ws"!==e&&e&&(t(function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.startDialog(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),t(v(e)),t(b(!0))),t(O())}},I=function(e){return function(t){"ws"!==e?(t(v(e)),t(b(!0))):t(b(!1))}},w=function(e){return function(t){t(function(e){return{type:i,messages:e}}(e))}}},132:function(e,t,n){e.exports={page:"Profile_page__26mpX"}},158:function(e,t,n){e.exports=n(285)},16:function(e,t,n){e.exports={bar:"Nav_bar__QZHth",link:"Nav_link__f1WjG",list:"Nav_list__3k5QM",linkCount:"Nav_linkCount__2vnhl",active:"Nav_active__1iS-s"}},241:function(e,t,n){},242:function(e,t,n){},247:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n(27),u=n(6),s=n(9),c=n(31),i="SOCIAL_NETWORK/PROFILE/ADD_POST",f="SOCIAL_NETWORK/PROFILE/SET_PROFILE_USERS",m="SOCIAL_NETWORK/PROFILE/GET_PROFILE_STATUS",p="SOCIAL_NETWORK/PROFILE/SET_PHOTOS",d="SOCIAL_NETWORK/PROFILE/TOGGLE_PROFILE_MODE",g="SOCIAL_NETWORK/PROFILE/DELETE_POST",E={profile:null,profileEditMode:!1,status:"",posts:[{id:1,message:"hello my darling",likesCounter:12},{id:2,message:"Its my first post ",likesCounter:0},{id:3,message:"hello my darling",likesCounter:1}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=Object(u.a)({},e);switch(t.type){case i:var a={id:Math.random(),message:t.newPost,likesCounter:0};return Object(u.a)({},e,{posts:[a].concat(Object(l.a)(e.posts))});case g:return Object(u.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.id}))});case p:return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.data})});case d:return Object(u.a)({},e,{profileEditMode:t.mode});case f:return Object(u.a)({},e,{profile:t.data});case m:return Object(u.a)({},e,{status:t.status});default:return n}},b=function(e){return{type:d,mode:e}},O=function(e){return{type:m,status:e}},v=function(e){return function(t){s.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:f,data:n}))}))}},_=n(101),S="SOCIAL_NETWORK/USERS/FOLLOW",P="SOCIAL_NETWORK/USERS/SET_STATE",I="SOCIAL_NETWORK/USERS/SET_CURRENT_PAGE",w="SOCIAL_NETWORK/USERS/SET_TOTAL_COUNT",j="SOCIAL_NETWORK/USERS/TOGGLE_IS_LOADING",C={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoading:!0,isFollowedInProgress:[2]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(u.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)({},e,{followed:!e.followed}):e}))});case P:return Object(u.a)({},e,{users:t.users});case I:return Object(u.a)({},e,{currentPage:t.currentPage});case w:return Object(u.a)({},e,{totalUsersCount:t.total});case j:return Object(u.a)({},e,{isLoading:t.param});case"SOCIAL_NETWORK/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)({},e,{isFollowedInProgress:t.isFetching?[].concat(Object(l.a)(e.isFollowedInProgress),[t.userId]):e.isFollowedInProgress.filter((function(e){return e!==t.userId}))});default:return e}},A=function(e){return{type:S,userId:e}},N=function(e){return{type:j,param:e}},k=function(e,t){return{type:"SOCIAL_NETWORK/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T="SOCIAL_NETWORK/AUTH/SET_AUTH_DATA",L="SOCIAL_NETWORK/AUTH/GET_CAPTCHA",R={userId:null,email:null,login:null,isAuth:!1,captcha:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(u.a)({},e,{},t.data);case L:return Object(u.a)({},e,{captcha:t.url});default:return e}},F=function(e,t,n,a){return{type:T,data:{userId:e,email:t,login:n,isAuth:a}}},x=function(){return function(e){s.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,a=n.email,r=n.id,o=n.login;e(F(r,a,o,!0))}}))}},U=n(127),D=n(125),G=n(15),W=n.n(G),K=n(35),J={init:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SOCIAL_NETWORK_INITIALIZED_SUCCESS":return Object(u.a)({},e,{init:!0});default:return e}},H=Object(o.c)({profilePage:h,dialogsPage:_.a,usersPage:y,auth:M,form:D.a,app:z}),V=Object(o.e)(H,Object(o.a)(U.a));window.store=V;var Z,Q=V,B=n(66),X=n.n(B),Y=(n(241),n(22)),q=n(23),$=n(25),ee=n(24),te=n(26),ne=(n(242),n(16)),ae=n.n(ne),re=n(11),oe=function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{className:ae.a.bar},r.a.createElement("li",null,r.a.createElement(re.b,{className:ae.a.link,activeClassName:ae.a.active,to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(re.b,{className:ae.a.link,activeClassName:ae.a.active,to:"/news"},"News")),r.a.createElement("li",{className:ae.a.list},r.a.createElement(re.b,{className:ae.a.link,activeClassName:ae.a.active,to:"/dialogs"},"Message"),e.newMessagesCount>0&&r.a.createElement("span",{className:ae.a.linkCount},e.newMessagesCount)),r.a.createElement("li",null,r.a.createElement(re.b,{className:ae.a.link,activeClassName:ae.a.active,to:"/photo"},"Photo")),r.a.createElement("li",null,r.a.createElement(re.b,{className:ae.a.link,activeClassName:ae.a.active,to:"/users"},"Users"))))},le=n(34),ue=n(10),se=n(68),ce=n.n(se),ie=n(43),fe=n.n(ie),me=function(e){var t=e.user,n=e.isFollowedInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",{className:ce.a.item},r.a.createElement(re.b,{to:"profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:fe.a,alt:"user",width:"50px"})),r.a.createElement("div",null,t.name," "),t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"follow"))},pe=(n(247),function(){return r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),de=function(e){return e.loading?r.a.createElement(pe,null):r.a.createElement("div",null,r.a.createElement("div",{className:ce.a.block},e.users.map((function(t){return r.a.createElement(me,{key:t.id,user:t,follow:e.follow,isFollowedInProgress:e.isFollowedInProgress,unfollow:e.unfollow})}))))},ge=n(131),Ee=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),he=function(e){return e.usersPage.pageSize},be=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isLoading},_e=function(e){return e.usersPage.isFollowedInProgress},Se=n(55),Pe=n(89),Ie=n.n(Pe),we=function(e){for(var t=Object(a.useState)(1),n=Object(Se.a)(t,2),o=n[0],l=n[1],u=Math.ceil(e.totalUsersCount/e.pageSize),s=[],c=1;c<=u;c++)s.push(c);var i=Math.ceil(u/10),f=10*(o-1)+1,m=10*o;return r.a.createElement("div",{className:Ie.a.page},o>1&&r.a.createElement("button",{onClick:function(){l(o-1)}},"<"),s.filter((function(e){return e>=f&&e<=m})).map((function(t){return r.a.createElement("span",{key:t,onClick:function(){return e.onPageChanged(t)},className:e.currentPage===t?"".concat(Ie.a.selected):""},t)})),i&&u>m&&r.a.createElement("button",{onClick:function(){l(o+1)}},">"))},je=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return Object(te.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize}),r.a.createElement(de,{follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,loading:this.props.isLoading,isFollowedInProgress:this.props.isFollowedInProgress,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress}))}}]),t}(r.a.Component),Ce=Object(ue.b)((function(e){return{users:Ee(e),pageSize:he(e),totalUsersCount:be(e),currentPage:Oe(e),isLoading:ve(e),isFollowedInProgress:_e(e)}}),{unfollow:function(e){return function(t){t(k(!0,e)),s.d.unfollow(e).then((function(n){0===n.data.resultCode&&t(A(e)),t(k(!1,e))}))}},follow:function(e){return function(t){t(k(!0,e)),s.d.follow(e).then((function(n){0===n.data.resultCode&&t(A(e)),t(k(!1,e))}))}},toggleIsFollowingProgress:k,getUsersThunk:function(e,t){return function(n){n(N(!0)),s.d.getUsers(e,t).then((function(t){var a,r;n({type:I,currentPage:e}),n((a=t.totalCount,{type:w,total:a})),n((r=t.items,{type:P,users:r})),n(N(!1))}))}}})(je),ye=n(132),Ae=n.n(ye),Ne=n(39),ke=n.n(Ne),Te=function(e){var t=e.title,n=e.value;return r.a.createElement("li",null,r.a.createElement("strong",null,t," ")," ",n)},Le=function(e){var t=e.profile,n=e.toggleProfileMode;return r.a.createElement("ul",{className:ke.a.descList},r.a.createElement(Te,{title:"aboutMe :",value:t.aboutMe}),r.a.createElement(Te,{title:"lookingForAJob :",value:t.lookingForAJob?"yeas":"no"}),r.a.createElement(Te,{title:"lookingForAJobDescription :",value:t.lookingForAJobDescription}),Object.keys(t.contacts).map((function(e){return r.a.createElement(Te,{key:e,title:e,value:t.contacts[e]})})),r.a.createElement("button",{onClick:function(){return n(!0)}},"change"))},Re=n(56),Me=n(123),Fe=n(124),xe=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,l=(n.warning,Object(Re.a)(e,["input","meta"]));return r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,l)),a&&o&&r.a.createElement("span",null,o))},Ue=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,l=(n.warning,Object(Re.a)(e,["input","meta"]));return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,l)),a&&o&&r.a.createElement("span",null,o))},De=Object(Fe.a)({form:"profileEdit"})((function(e){var t=e.error,n=Object(Re.a)(e,["error"]);return r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement("button",null,"sub")," ",r.a.createElement("button",{onClick:function(){return n.toggle(!1)}},"back"),t&&r.a.createElement("div",{style:{color:"red"}},t),r.a.createElement("div",null,"Full name: ",r.a.createElement(Me.a,{type:"text",component:"input",name:"fullName"})),r.a.createElement("div",null,"About me: ",r.a.createElement(Me.a,{type:"text",component:"input",name:"aboutMe"})),r.a.createElement("div",null,"lookingForAJob : ",r.a.createElement(Me.a,{type:"checkbox",component:"input",name:"lookingForAJob"})),r.a.createElement("div",null,"lookingForAJobDescription: ",r.a.createElement(Me.a,{type:"text",component:"textarea",name:"lookingForAJobDescription"})),Object.keys(n.profile.contacts).map((function(e){return r.a.createElement("div",{key:e},e,r.a.createElement(Me.a,{type:"text",component:Ue,name:"contacts.".concat(e)}))})))})),Ge=function(e){var t=e.profile.photos.large?e.profile.photos.large:"https://placekitten.com/200/260";return e.profile?r.a.createElement("div",{className:ke.a.wrap},r.a.createElement("div",{className:ke.a.colImg},r.a.createElement("img",{src:t,alt:"info"}),e.isOwner?r.a.createElement("input",{onChange:function(t){t.target.files.length&&e.savePhotos(t.target.files[0])},type:"file"}):r.a.createElement(re.b,{to:"/dialogs/"+e.profile.userId},r.a.createElement("button",null,"send"))),r.a.createElement("div",{className:ke.a.desc},r.a.createElement("h1",null,e.profile.fullName),r.a.createElement(We,{status:e.status,updateStatus:e.updateStatus}),e.mode?r.a.createElement(De,{onSubmit:function(t){e.editProfile(t)},profile:e.profile,initialValues:e.profile,toggle:e.toggleProfileMode}):r.a.createElement(Le,{profile:e.profile,toggleProfileMode:e.toggleProfileMode}))):r.a.createElement(pe,null)},We=function(e){var t=Object(a.useState)(e.status),n=Object(Se.a)(t,2),o=n[0],l=n[1],u=Object(a.useState)(!1),s=Object(Se.a)(u,2),c=s[0],i=s[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:ke.a.status},r.a.createElement("strong",null,"status :"),c?r.a.createElement("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},value:o,onChange:function(e){l(e.currentTarget.value)}}):r.a.createElement("span",{onDoubleClick:function(){i(!0)}},o))},Ke=n(40),Je=n.n(Ke),ze=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:Je.a.postCreate},r.a.createElement("div",{style:{flexDirection:"column"},className:Je.a.header},r.a.createElement("img",{src:fe.a,alt:""}),r.a.createElement("div",null,"NAME PROFILE")),r.a.createElement("div",null,e.message)))},He=function(e){return e?void 0:"Field is required"},Ve=(Z=20,function(e){return e&&e.length>Z?"Max simbols ".concat(Z," "):void 0}),Ze=Object(Fe.a)({form:"addPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(Me.a,{name:"newPostText",component:xe,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",validate:[He,Ve]}),r.a.createElement("button",null,"add post"))})),Qe=r.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return r.a.createElement(ze,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:Je.a.wrap},r.a.createElement("div",{className:Je.a.postCreate},r.a.createElement("div",{className:Je.a.header},r.a.createElement("img",{src:fe.a,alt:""}),r.a.createElement("div",null,"NAME PROFILE")),r.a.createElement(Ze,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}})),t)})),Be=Object(ue.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){return e({type:i,newPost:t})}}}))(Qe),Xe=function(e){return e.profile?r.a.createElement("div",{className:Ae.a.page},r.a.createElement(Ge,{mode:e.mode,toggleProfileMode:e.toggleProfileMode,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhotos:e.savePhotos,editProfile:e.editProfile}),r.a.createElement(Be,null)):r.a.createElement(pe,null)},Ye=function(e){function t(){return Object(Y.a)(this,t),Object($.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(q.a)(t,[{key:"restorProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.setProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.restorProfile()}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.userId!==this.props.match.params.userId&&this.restorProfile()}},{key:"render",value:function(){return r.a.createElement(Xe,{profile:this.props.profile,status:this.props.status,isOwner:!this.props.match.params.userId,savePhotos:this.props.savePhotos,updateStatus:this.props.updateStatus,mode:this.props.mode,toggleProfileMode:this.props.toggleProfileMode,editProfile:this.props.editProfile})}}]),t}(r.a.Component),qe=Object(o.d)(Object(ue.b)((function(e){return{userId:e.auth.userId,profile:e.profilePage.profile,status:e.profilePage.status,mode:e.profilePage.profileEditMode}}),{setProfile:v,getStatus:function(e){return function(t){s.c.getStatus(e).then((function(e){t(O(e.data))}))}},updateStatus:function(e){return function(t){s.c.updateStatus(e).then((function(n){if(0===n.data.resultCode)return t(O(e))}))}},savePhotos:function(e){return function(t){s.c.changePhotos(e).then((function(e){var n;t((n=e.data.data.photos,{type:p,data:n}))}))}},toggleProfileMode:b,editProfile:function(e){return function(t,n){s.c.editProfile(e).then((function(e){var a=n().auth.userId;if(0===e.data.resultCode)t(v(a)),t(b(!1));else{var r=e.data.messages[0].length>0?e.data.messages[0]:"some error";1===e.data.resultCode&&t(Object(c.a)("profileEdit",{_error:r}))}}))}}}),le.g,(function(e){var t=function(t){function n(){return Object(Y.a)(this,n),Object($.a)(this,Object(ee.a)(n).apply(this,arguments))}return Object(te.a)(n,t),Object(q.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(le.a,{to:"/login"})}}]),n}(r.a.Component);return Object(ue.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}))(Ye),$e=n(57),et=n.n($e),tt=function(e){return r.a.createElement("header",{className:et.a.header},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:et.a.headerInner},r.a.createElement("h2",null,"social network"),r.a.createElement("div",{className:et.a.logo},e.isAuth?r.a.createElement("span",null,e.email," ",r.a.createElement("button",{onClick:e.logout},"logout")):r.a.createElement(re.b,{to:"/login"},r.a.createElement("div",{className:et.a.logo},e.isAuth?e.login:"login"))))))},nt=function(e){function t(){return Object(Y.a)(this,t),Object($.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return r.a.createElement(tt,Object.assign({},this.props,{isAuth:this.props.isAuth}))}}]),t}(r.a.Component),at=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,email:e.auth.email}}),{getAuthUserData:x,logout:function(){return function(e){s.a.signOut().then((function(t){e(F(null,null,null,!1))}))}}})(nt),rt=Object(Fe.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Me.a,{name:"email",component:"input",type:"text",placeholder:"login",validate:[He]}),r.a.createElement("div",null,r.a.createElement("b",null,"free@samuraijs.com"))),r.a.createElement("div",null,r.a.createElement(Me.a,{name:"password",component:"input",type:"password",placeholder:"password"}),r.a.createElement("div",null,r.a.createElement("b",null,"free"))),r.a.createElement("div",null,r.a.createElement(Me.a,{name:"rememberMe",component:"input",type:"checkbox"}),r.a.createElement("label",{htmlFor:"checkbox"},"Remember me")),e.error&&r.a.createElement("div",null,r.a.createElement("span",{style:{background:"red"}},e.error)),e.captcha&&r.a.createElement("img",{src:e.captcha,alt:"captcha"}),e.captcha&&r.a.createElement("div",null," ",r.a.createElement(Me.a,{name:"captcha",component:"input",type:"text",placeholder:"captcha"})),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("button",{type:"reset"},"Reset"))})),ot=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{loginUser:function(e,t,n,a){return function(r){s.a.signIn(e,t,n,a).then((function(e){if(0===e.data.resultCode)r(x());else{10===e.data.resultCode&&s.a.captcha().then((function(e){var t;r((t=e.data.url,{type:L,url:t})),r(x())}));var t=e.data.messages[0].length>0?e.data.messages[0]:"some error";r(Object(c.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?r.a.createElement(le.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Login")),r.a.createElement(rt,{onSubmit:function(t){var n=t.email,a=t.password,r=t.rememberMe,o=t.captcha;e.loginUser(n,a,r,o)},captcha:e.captcha}))})),lt=r.a.lazy((function(){return n.e(3).then(n.bind(null,288))})),ut=function(e){function t(){return Object(Y.a)(this,t),Object($.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){this.props.initialized()}},{key:"render",value:function(){return this.props.init?r.a.createElement("div",{className:"App"},r.a.createElement(at,null),r.a.createElement("div",{className:"content"},r.a.createElement(oe,{newMessagesCount:this.props.newMessagesCount}),r.a.createElement("main",null,r.a.createElement(le.d,null,r.a.createElement(le.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(le.b,{exact:!0,path:"/",render:function(){return r.a.createElement(le.a,{to:"/profile"})}}),r.a.createElement(le.b,{path:"/dialogs/:userId?",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(pe,null)},r.a.createElement(lt,{userId:e.match.params.userId}))}}),r.a.createElement(le.b,{path:"/login",render:function(){return r.a.createElement(ot,null)}}),r.a.createElement(le.b,{path:"/users",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(le.b,{path:"*",render:function(){return r.a.createElement("div",null,"404")}}))))):r.a.createElement(pe,null)}}]),t}(r.a.Component),st=Object(ue.b)((function(e){return{init:e.app.init,newMessagesCount:e.dialogsPage.newMessagesCount}}),{initialized:function(){return function(){var e=Object(K.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(x());case 2:return e.next=4,t({type:"SOCIAL_NETWORK_INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ut);X.a.render(r.a.createElement(re.a,null,r.a.createElement(ue.a,{store:Q},r.a.createElement(st,null))),document.getElementById("root"))},39:function(e,t,n){e.exports={wrap:"ProfileInfo_wrap__2YKbh",colImg:"ProfileInfo_colImg__1_sjH",desc:"ProfileInfo_desc__14KuT",status:"ProfileInfo_status__3b_Ta",descList:"ProfileInfo_descList__3KJDJ"}},40:function(e,t,n){e.exports={wrap:"MyPost_wrap__3uDbc",postCreate:"MyPost_postCreate__w5t6T",header:"MyPost_header__3VQHd"}},43:function(e,t,n){e.exports=n.p+"static/media/user.f4f3dd7a.png"},57:function(e,t,n){e.exports={header:"Header_header__rREVv",headerInner:"Header_headerInner__3JU6L",logo:"Header_logo__3kERA"}},68:function(e,t,n){e.exports={block:"Users_block__Viggj",item:"Users_item__1rnXv"}},89:function(e,t,n){e.exports={selected:"Pagination_selected__2Gk6S",page:"Pagination_page__2y8RZ"}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(126),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ef3df34b-f620-4141-98a4-941ac190a9df"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t,"&sortOrder=asc")).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},l={getProfile:function(e){return r.get("/profile/".concat(e))},editProfile:function(e){return r.put("/profile",e)},getStatus:function(e){return r.get("/profile/status/".concat(e))},updateStatus:function(e){return r.put("/profile/status",{status:e})},changePhotos:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},u={me:function(){return r.get("auth/me")},signIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},signOut:function(){return r.delete("auth/login")},captcha:function(){return r.get("security/get-captcha-url")}},s={getDialogs:function(){return r.get("dialogs").then((function(e){return e.data}))},startDialog:function(e){return r.put("dialogs/".concat(e)).then((function(e){return e.data}))},getMessage:function(e){return r.get("dialogs/".concat(e,"/messages")).then((function(e){return e.data}))},sendMessage:function(e,t){return r.post("dialogs/".concat(e,"/messages"),{body:t}).then((function(e){return e.data}))},getNewMessageCount:function(){return r.get("dialogs/messages/new/count").then((function(e){return e.data}))}}}},[[158,1,2]]]);
//# sourceMappingURL=main.4579e198.chunk.js.map