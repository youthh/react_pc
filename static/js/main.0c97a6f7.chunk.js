(this.webpackJsonpreact_pc=this.webpackJsonpreact_pc||[]).push([[0],{198:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var c,i,s,a=n(5),r=n.n(a),o=(n(63),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))}),l=n(22),u=n(1),j=n.n(u),d=n(6),m=n(18),b=n(13),h={movies:[],pageSize:10,totalMovies:20,currentPage:1,isFetching:!0,currentMovie:null},O=function(e){return{type:"SET-MOVIES",moviesSet:e}},v=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},f=function(e){return{type:"SET-TOTAL-NUM",n:e}},x=function(e,t){return{type:"SET-CURRENT-MOVIE",currentMovie:e,id:t}},p=function(e){return e.movies.movies},g=function(e,t,n,c,i){var s=Object(b.c)();Object(b.g)(Object(b.f)(s,"movies/"+i+"/comment/"+e),{id:e,name:t,data:n,txt:c}).then((function(e){return console.log(e)}))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-COMMENT":var n={id:e.currentMovie.comment.length,name:t.name,data:t.data,txt:t.txt};return e.currentMovie.comment.push(n),g(n.id,n.name,n.data,n.txt,t.idMov),Object(m.a)(Object(m.a)({},e),{},{currentMovie:Object(m.a)({},e.currentMovie)});case"SET-MOVIES":return Object(m.a)(Object(m.a)({},e),{},{movies:t.moviesSet});case"SET-PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentP});case"SET-TOTAL-NUM":return Object(m.a)(Object(m.a)({},e),{},{totalMovies:t.n});case"TOGGLE-IS-FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case"SET-CURRENT-MOVIE":return Object(m.a)(Object(m.a)({},e),{},{currentMovie:t.currentMovie,idM:t.id});default:return e}},N=n(10),_=n(23),y=n(16),S=n(36),k=n.n(S),C=Object(y.a)("post/postThunk",Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:3005/posts").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),w=Object(y.b)({name:"post",initialState:{isFetching:!0,post:[]},reducers:{setLike:function(e,t){e.post.map((function(e){e.id===t.payload.id&&(e.likeValue?(e.likeCount-=1,e.likeValue=!1,k.a.patch("http://localhost:3005/posts/"+t.payload.id,{likeValue:!1,likeCount:e.likeCount})):(e.likeValue=!0,e.likeCount+=1,k.a.patch("http://localhost:3005/posts/"+t.payload.id,{likeValue:!0,likeCount:e.likeCount})))}))},setPost:function(e,t){e.post=Object(_.a)(t.payload)},setFetch:function(e,t){e.isFetching=t.payload},showAll:function(e){e.showAll=!e.showAll}},extraReducers:(c={},Object(N.a)(c,C.pending,(function(e){e.isFetching=!0})),Object(N.a)(c,C.fulfilled,(function(e,t){e.isFetching=!1,e.post=t.payload})),Object(N.a)(c,C.rejected,(function(){})),c)}),F=w.actions,A=(F.showAll,F.setLike,F.setFetch,F.setPost,w.reducer),T=n(41),E=Object(y.a)("auth/userLoginThunk",function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(y.a)("auth/userLogoutThunk",function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(y.a)("auth/userAuthThunk",Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0,"API-KEY":"5735f1e3-bb87-46ff-8b5d-43e7d0fa3ba0"}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),U=Object(y.b)({name:"auth",initialState:{email:null,id:null,login:null,isAuth:!1,isFetching:!1,imgUser:null},reducers:{setFetch:function(e,t){e.isFetching=t},setUser:function(e,t){e.email=t.payload.email,e.id=t.payload.googleId,e.login=t.payload.name,e.imgUser=t.payload.imageUrl,e.isAuth=!0}},extraReducers:(i={},Object(N.a)(i,P.pending,(function(e){e.isFetching=!0})),Object(N.a)(i,P.fulfilled,(function(e,t){e.email=t.payload.data.email,e.id=t.payload.data.id,e.login=t.payload.data.login,0===t.payload.resultCode&&(e.isAuth=!0)})),Object(N.a)(i,E.fulfilled,(function(e,t){e.id=t.payload.data.userId})),Object(N.a)(i,I.fulfilled,(function(e){e.isAuth=!1,e.email=null,e.id=null,e.login=null,e.imgUser=null})),i)}),L=U.actions,z=(L.setUserAuthApi,L.dis,L.setUser),R=U.reducer,V=n(55),D=Object(y.a)("appSlice/initialize",Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),G=Object(y.b)({name:"appSlice",initialState:{initialized:!1},reducers:{setInit:function(e){e.initialized=!0}},extraReducers:(s={},Object(N.a)(s,D.pending,(function(){})),Object(N.a)(s,D.fulfilled,(function(e){e.initialized=!0})),s)});Object(V.a)(G.actions);var H=G.reducer,B=Object(y.a)("headerSlice/getSearchMovies",Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),J=Object(y.b)({name:"header",initialState:{activeSection:!0,isActiveMenu:!1,theme:!0,searchMovies:[]},reducers:{setActiveMenu:function(e){e.isActiveMenu?e.isActiveMenu=!1:e.isActiveMenu=!0},setThem:function(e){e.theme?e.theme=!1:e.theme=!0},setMoviesSearch:function(e){var t=Object(b.c)(),n=Object(b.e)(Object(b.f)(t,"movies"));e.searchMovies=Object(b.d)(n,(function(e){console.log(e.val())})),e.searchMovies=[]}},extraReducers:{}}),K=J.actions,Y=K.setActiveMenu,Q=K.setThem,W=(K.setMoviesSearch,J.reducer),Z=n(225),q=Object(y.a)("userSlice/setUserDataBase",function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),X=Object(y.b)({name:"userSlice",initialState:{},reducers:{}});Object(V.a)(X.actions);var $=X.reducer,ee=Object(l.b)({movies:M,authUser:R,post:A,header:W,form:Z.a,app:H,user:$}),te=Object(l.d)(ee,Object(l.a)(T.a)),ne=te;window.store=te;var ce=n(52),ie=n.n(ce),se=n(12),ae=(n(83),n(14)),re=(n(198),n(4)),oe=function(e){return Object(re.jsxs)("div",{className:"item_comment",children:[Object(re.jsx)("h5",{className:"name_user",children:e.name}),Object(re.jsx)("p",{className:"commentTxt",children:e.txt}),Object(re.jsx)("p",{className:"dataMovie",children:e.data})]})},le=function(e){var t=Object(se.f)();return Object(re.jsxs)("div",{className:"block_add comment",children:[Object(re.jsx)("input",{ref:e.txtCom,type:"text",className:"add_txt_comment"}),Object(re.jsx)("button",{onClick:function(){return e.isAuth?e.addCom():t("/login")},className:"add_comment",children:"Add Comment"})]})},ue=(n(200),n(201),function(){return Object(re.jsxs)("div",{className:"lds-spinner",children:[Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{}),Object(re.jsx)("div",{})]})}),je=n(93),de=n.n(je),me=Object(a.createContext)({type:!0}),be=function(e){var t=e.children,n=Object(ae.d)((function(e){return e.header.theme}));return Object(re.jsx)(me.Provider,{value:{type:n},children:t})},he=function(e){var t=Object(a.useContext)(me).type;return e.currentMovie?Object(re.jsxs)("div",{className:t?"movie-inside-block":"movie-inside-block lite",children:[Object(re.jsx)("h3",{className:"movie_name",children:e.currentMovie.name}),Object(re.jsx)("h4",{className:"movie_item-year",children:e.currentMovie.year}),Object(re.jsx)("img",{src:e.currentMovie.srs,alt:"movieImg"}),Object(re.jsx)("h4",{className:"title_about-movie",children:"About movie"}),Object(re.jsx)("p",{className:"movie_item-describe",children:"\u042d\u0434\u0434\u0438 \u0411\u0440\u043e\u043a \u043f\u0440\u0438\u0441\u043f\u043e\u0441\u0430\u0431\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0436\u0438\u0437\u043d\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044f \u0438\u043d\u043e\u043f\u043b\u0430\u043d\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0431\u0438\u043e\u0442\u0430 \u0412\u0435\u043d\u043e\u043c \u0438 \u043f\u043e\u043f\u0443\u0442\u043d\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442\u0430. \u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u044c\u0438 \u043e \u0441\u0435\u0440\u0438\u0439\u043d\u043e\u043c \u0443\u0431\u0438\u0439\u0446\u0435 \u041a\u043b\u0435\u0442\u0443\u0441\u0435 \u041a\u044d\u0441\u0441\u0438\u0434\u0438, \u0434\u043e\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0441\u0432\u043e\u0438\u0445 \u0434\u043d\u0435\u0439 \u0432 \u043a\u0430\u043c\u0435\u0440\u0435 \u0441\u043c\u0435\u0440\u0442\u043d\u0438\u043a\u043e\u0432, \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0431\u0435\u0449\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0435\u0433\u043e \u0436\u0438\u0437\u043d\u0438. \u041e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u042d\u0434\u0434\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0424\u0440\u044d\u043d\u0441\u0438\u0441 \u0411\u0430\u0440\u0440\u0438\u0441\u043e\u043d, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0442\u0430\u0439\u043d\u043e \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0432 \u0442\u044e\u0440\u044c\u043c\u0443 \u0437\u0430 \u043e\u0431\u043b\u0430\u0434\u0430\u043d\u0438\u0435 \u043c\u043e\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0441\u0438\u043b\u043e\u0439. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0432\u0438\u0437\u0438\u0442\u0430 \u0411\u0440\u043e\u043a\u0430 \u0432 \u043a\u0430\u043c\u0435\u0440\u0443 \u0441\u043c\u0435\u0440\u0442\u043d\u0438\u043a\u0430 \u041a\u043b\u0435\u0442\u0443\u0441 \u043a\u0443\u0441\u0430\u0435\u0442 \u0440\u0435\u043f\u043e\u0440\u0442\u0435\u0440\u0430, \u0430 \u0435\u0433\u043e \u043a\u0440\u043e\u0432\u044c \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430 \u0432 \u041a\u0430\u0440\u043d\u0430\u0436\u0430 \u2014 \u0431\u043e\u043b\u0435\u0435 \u0441\u043c\u0435\u0440\u0442\u043e\u043d\u043e\u0441\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0412\u0435\u043d\u043e\u043c\u0430. \u041a\u043e\u0433\u0434\u0430 \u041a\u0430\u0440\u043d\u0430\u0436 \u0438 \u0424\u0440\u044d\u043d\u0441\u0438\u0441 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0435, \u042d\u0434\u0434\u0438 \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u0440\u0438\u0437\u0438\u0441 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0441 \u0412\u0435\u043d\u043e\u043c\u043e\u043c \u0438 \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0441\u0432\u043e\u0435\u0439 \u0431\u044b\u0432\u0448\u0435\u0439 \u0434\u0435\u0432\u0443\u0448\u043a\u0435 \u042d\u043d\u043d."}),Object(re.jsx)("div",{className:"movie_block",children:Object(re.jsx)(de.a,{width:790,height:460,controls:!0,url:e.currentMovie.videoUrl})}),Object(re.jsxs)("div",{className:"block_comment",children:[Object(re.jsx)("h4",{className:"comment-title",children:"Comments"}),e.currentMovie.comment.map((function(e){return Object(re.jsx)(oe,{name:e.name,txt:e.txt,data:e.data},e.id)}))]}),Object(re.jsx)(le,{addCom:e.addComment,isAuth:e.isAuth,txtCom:e.txt})]}):Object(re.jsx)(ue,{})},Oe=Object(ae.b)((function(e){return{movie:e.movies.movies,currentMovie:e.movies.currentMovie,isFetching:e.movies.isFetching,isAuth:e.authUser.isAuth,login:e.authUser.login,id:e.movies.idM}}),{addCommentUp:function(e,t,n,c){var i=new Date;return{type:"ADD-COMMENT",id:c,txt:e,data:i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate()+" "+i.getHours()+":"+i.getMinutes()+":"+i.getSeconds(),name:t,idMov:n}},setFetching:v,removeCurrentMovie:x,setCurrentMovie:function(e){return function(t){var n=Object(b.f)(Object(b.c)());Object(b.b)(Object(b.a)(n,"movies/"+e.idMov)).then((function(n){t(x(n.val(),e.idMov))}))}}})((function(e){var t=Object(se.g)();Object(a.useEffect)((function(){return e.currentMovie||e.setCurrentMovie(t),function(){e.removeCurrentMovie(null)}}),[]);var n=r.a.createRef();return Object(re.jsx)(re.Fragment,{children:e.isFetching?Object(re.jsx)(ue,{}):Object(re.jsx)(he,{addComment:function(){if(""!==n.current.value){var t=n.current.value;e.addCommentUp(t,e.login,e.id),n.current.value=""}else alert("enter some comments")},txt:n,currentMovie:e.currentMovie,isAuth:e.isAuth,id:e.id})})})),ve=(n(88),n(19)),fe=function(e){return Object(re.jsx)("div",{className:"movie_item",children:Object(re.jsxs)(ve.b,{to:e.name+"/"+(e.id-1).toString(),className:e.type?"movie__item-link":"movie__item-link lite",children:[Object(re.jsx)("img",{src:e.img,alt:"venom",className:"movie_item-img"}),Object(re.jsx)("h3",{className:"movie__item-name",children:e.name}),Object(re.jsxs)("div",{className:"block_item-describe-movie",children:[Object(re.jsxs)("p",{className:"movie__year",children:[e.year,","]}),Object(re.jsx)("p",{className:"movie__genre",children:e.genre})]})]})})},xe=function(e){var t=Object(a.useContext)(me).type;return Object(re.jsx)("div",{children:Object(re.jsx)("div",{className:"intro",children:Object(re.jsxs)("div",{className:"container",children:[Object(re.jsxs)("div",{className:"intro_inner",children:[Object(re.jsx)("h1",{className:t?"title_main":"title_main lite",children:"Movies"}),Object(re.jsx)("div",{className:"block_item-movie",children:Object(re.jsx)(re.Fragment,{children:e.isFetching?Object(re.jsx)(ue,{}):Object(re.jsx)("div",{className:"containers__inem-movie",children:e.movie.map((function(e){return Object(re.jsx)(fe,{type:t,id:e.id,name:e.name,year:e.year,genre:e.genre,img:e.srs},e.id)}))})})})]}),"s"]})})})},pe=Object(ae.b)((function(e){return{movie:p(e),pageSize:e.movies.pageSize,totalMovies:e.movies.totalMovies,currentPage:e.movies.currentPage,isFetching:e.movies.isFetching}}),{setMovie:O,setCurrentPage:function(e){return{type:"SET-PAGE",currentP:e}},setTotalCount:f,setFetching:v,getMovies:function(e,t){return function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(v(!0)),n=Object(b.f)(Object(b.c)()),Object(b.b)(Object(b.a)(n,"movies")).then((function(e){t(O(e.val())),t(v(!1))})),t(f(20));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(a.useEffect)((function(){return 0===e.movie.length&&e.getMovies(e.currentPage,e.pageSize),function(){e.setMovie([])}}),[]),Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(xe,{totalMovies:e.totalMovies,pageSize:e.pageSize,movie:e.movie,currentPage:e.currentPage,isFetching:e.isFetching})})})),ge=pe,Me=n(11),Ne=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();Object(a.useEffect)((function(){var n=function(n){e.isMenuOpen&&t.current&&!t.current.contains(n.target)&&e.setIsMenuOpen(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e.isMenuOpen]);var c=[];if(0===c.length){var i=Object(b.c)(),s=Object(b.e)(Object(b.f)(i,"movies"));Object(b.d)(s,(function(e){c=e.val()}))}var r=Object(a.useState)([]),o=Object(Me.a)(r,2),l=o[0],u=o[1],j=Object(ae.c)();return Object(re.jsx)("div",{className:e.type?"header_block":"header_block lite",children:Object(re.jsx)("div",{className:"container",children:Object(re.jsxs)("div",{className:"inner_header",children:[Object(re.jsx)("menu",{children:Object(re.jsxs)("ul",{className:"menu",children:[Object(re.jsx)("li",{className:e.type?"li-hover":"li-hover lite",children:Object(re.jsx)(ve.b,{to:"News",className:"menu_link",children:"News"})}),Object(re.jsxs)("li",{className:e.type?"li-hover":"li-hover lite",children:[Object(re.jsx)(ve.b,{to:"Movies",className:e.type?"menu_link":"menu_link lite",children:"movies"}),Object(re.jsxs)("div",{className:e.type?"sub_div-menu":"sub_div-menu lite",children:[Object(re.jsxs)("ul",{className:"muvie_subMenu",children:[Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)(ve.b,{to:"Movies/Action",children:"Action"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Comedy"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Thriller"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Sport"})})]}),Object(re.jsxs)("ul",{className:"muvie_subMenu",children:[Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Fantasy"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Horror"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Adventure"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Fantastic"})})]})]})]}),Object(re.jsxs)("li",{className:e.type?"li-hover":"li-hover lite",children:[Object(re.jsx)(ve.b,{to:"/Serials",className:"menu_link",children:"Serials"}),Object(re.jsxs)("div",{className:e.type?"sub_div-menu":"sub_div-menu lite",children:[Object(re.jsxs)("ul",{className:"muvie_subMenu",children:[Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Action"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Comedy"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Thriller"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Fiction"})})]}),Object(re.jsxs)("ul",{className:"muvie_subMenu",children:[Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Fantasy"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Horror"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Adventure"})}),Object(re.jsx)("li",{className:"subMenu_item",children:Object(re.jsx)("a",{href:"#",children:"Sports"})})]})]})]})]})}),Object(re.jsxs)("div",{className:"search",children:[Object(re.jsx)("input",{ref:n,onFocus:function(){e.setTouch(!0),j(B())},id:"search",className:"input_search",onChange:function(e){return function(e){var t=e.target.value,n=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));u(""!==t?n:[])}(e)},placeholder:"find movie...",type:"search"}),0!==l.length&&Object(re.jsx)("div",{className:"search_table",children:l.map((function(e,n){return Object(re.jsx)("li",{className:"search_item",children:Object(re.jsx)(ve.b,{onClick:function(){t.current.value="",u([])},to:"Movies/"+e.name+"/"+(e.id-1).toString(),children:e.name},n)})}))})]}),Object(re.jsxs)("div",{className:"block_logIn",ref:t,children:[e.authS?Object(re.jsxs)("div",{onClick:function(){return e.setIsMenuOpen((function(e){return!e}))},className:"user_room",children:[Object(re.jsx)("div",{className:"ava",children:Object(re.jsx)("img",{src:e.img?e.img:"https://img.icons8.com/dusk/64/000000/small-smile.png"})}),Object(re.jsx)("p",{className:"login_col",children:e.login})]}):Object(re.jsx)(ve.b,{to:"/login",className:"login",children:"Log In"}),e.isMenuOpen?Object(re.jsxs)("div",{className:(e.authS&&e.isMenuOpen?"info_prof activeBtn":"info_prof")+(e.type?" ":" lite"),children:[Object(re.jsx)("div",{children:Object(re.jsx)("li",{className:"info_user",children:Object(re.jsx)(ve.b,{to:"Profile",children:"Profile"})})}),Object(re.jsx)("div",{onClick:function(){return e.setTheme()},className:e.theme?"switch-btn switch-on":"switch-btn",children:"\ud83c\udf1c \ud83c\udf1e"}),Object(re.jsx)("button",{className:"btn_exit",onClick:function(){return e.logout()},children:"Exit"})]}):null]})]})})})},_e=Object(ae.b)((function(e){return{stateLogin:e.authUser.login,authStat:e.authUser.isAuth,activeS:e.header.activeSection,img:e.authUser.imgUser}}),{})((function(e){var t=Object(ae.c)(),n=Object(ae.d)((function(e){return e.header.theme})),c=Object(a.useContext)(me).type,i=Object(a.useState)(!1),s=Object(Me.a)(i,2),r=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(Me.a)(l,2),j=u[0],d=u[1];return Object(re.jsx)(Ne,{login:e.stateLogin,authS:e.authStat,active:e.activeS,logout:function(){t(I()),t(Y())},img:e.img,theme:n,setTheme:function(){t(Q())},setTouch:o,touched:r,isMenuOpen:j,setIsMenuOpen:d,type:c})})),ye=function(){return Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(ue,{})})},Se=(n(220),function(){var e=Object(ae.d)((function(e){return e.authUser})),t=Object(a.useContext)(me).type;return Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{className:"title_main",children:"Profile"}),Object(re.jsx)("div",{className:"box_img",children:Object(re.jsx)("img",{src:e.imgUser,className:"profile_img",alt:"photo_user"})}),Object(re.jsx)("h4",{className:t?"email_profile":"email_profile litel",children:e.email}),Object(re.jsx)("h4",{className:t?"email_profile":"email_profile litel",children:e.login})]})}),ke=(n(221),n(94)),Ce=n.n(ke),we=function(){var e=Object(se.f)(),t=Object(ae.c)(),n=function(n){t(z(n.profileObj)),t(q(n.profileObj)),e("/Movies")};return Object(re.jsx)(Ce.a,{clientId:"318167226025-katjnh9atjt3ipuvlhl1p5nc6obc0tah.apps.googleusercontent.com",buttonText:"Login",onSuccess:n,onFailure:n,cookiePolicy:"single_host_origin"})},Fe=function(){return Object(re.jsx)("div",{id:"login",className:"formLog",children:Object(re.jsxs)("form",{method:"get",children:[Object(re.jsx)("div",{className:"input",children:Object(re.jsx)("input",{type:"Email",placeholder:"email",name:"email"})}),Object(re.jsx)("div",{className:"input",children:Object(re.jsx)("input",{type:"password",name:"password",placeholder:"password"})}),Object(re.jsx)(we,{})]})})};var Ae=Object(l.c)(Object(ae.b)((function(e){return{init:e.app.initialized}}),null)((function(){return Object(re.jsxs)("div",{className:"App",children:[Object(re.jsx)(_e,{}),Object(re.jsx)("div",{className:"container",children:Object(re.jsxs)(se.c,{children:[Object(re.jsx)(se.a,{path:"/news",element:Object(re.jsx)(ye,{})}),Object(re.jsx)(se.a,{path:"/login",element:Object(re.jsx)(Fe,{})}),Object(re.jsx)(se.a,{path:"Movies/:movieName/:idMov",element:Object(re.jsx)(Oe,{})}),Object(re.jsx)(se.a,{path:"/Movies",element:Object(re.jsx)(ge,{})}),Object(re.jsx)(se.a,{path:"/Serials",element:Object(re.jsx)("h1",{className:"serial",children:"No Serials yet"})}),Object(re.jsx)(se.a,{path:"Profile",element:Object(re.jsx)(Se,{})}),"}/>"]})})]})}))),Te=(n(222),n(95)),Ee=(Object(Te.a)({apiKey:"AIzaSyC72PZVaunISF5HPbgukuu4r71VDxas8CE",authDomain:"movies-615eb.firebaseapp.com",projectId:"movies-615eb",storageBucket:"movies-615eb.appspot.com",messagingSenderId:"666672106173",appId:"1:666672106173:web:0c52505d164b26166cc5d4",measurementId:"G-350QHC4WRJ"}),function(e){var t=e.children,n=Object(a.useContext)(me).type;return Object(re.jsx)("div",{className:n?"lay":"lay lite",children:t})});ie.a.render(Object(re.jsx)(ve.a,{children:Object(re.jsx)(ae.a,{store:ne,children:Object(re.jsx)(be,{children:Object(re.jsx)(Ee,{children:Object(re.jsx)(Ae,{state:ne,dispatch:ne.dispatch.bind(ne)})})})})}),document.getElementById("root")),o()},63:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){}},[[223,1,2]]]);
//# sourceMappingURL=main.0c97a6f7.chunk.js.map