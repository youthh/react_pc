(this.webpackJsonpreact_pc=this.webpackJsonpreact_pc||[]).push([[0],{198:function(e,t,i){},200:function(e,t,i){},201:function(e,t,i){},220:function(e,t,i){},221:function(e,t,i){},223:function(e,t,i){"use strict";i.r(t);var n,c,s,a=i(5),r=i.n(a),o=(i(62),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,226)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))}),l=i(21),u=i(1),j=i.n(u),m=i(6),d=i(18),b=i(15),h={movies:[],pageSize:10,totalMovies:20,currentPage:1,isFetching:!0,currentMovie:null},O=function(e){return{type:"SET-MOVIES",moviesSet:e}},v=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},x=function(e){return{type:"SET-TOTAL-NUM",n:e}},f=function(e,t){return{type:"SET-CURRENT-MOVIE",currentMovie:e,id:t}},p=function(e,t){return function(){var e=Object(m.a)(j.a.mark((function e(t){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(v(!0)),i=Object(b.f)(Object(b.c)()),Object(b.b)(Object(b.a)(i,"movies")).then((function(e){t(O(e.val())),t(v(!1))})),t(x(20));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return e.movies.movies},M=function(e,t,i,n,c){var s=Object(b.c)();Object(b.g)(Object(b.f)(s,"movies/"+c+"/comment/"+e),{id:e,name:t,data:i,txt:n}).then((function(e){return console.log(e)}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-COMMENT":var i={id:e.currentMovie.comment.length,name:t.name,data:t.data,txt:t.txt};return e.currentMovie.comment.push(i),M(i.id,i.name,i.data,i.txt,t.idMov),Object(d.a)(Object(d.a)({},e),{},{currentMovie:Object(d.a)({},e.currentMovie)});case"SET-MOVIES":return Object(d.a)(Object(d.a)({},e),{},{movies:t.moviesSet});case"SET-PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentP});case"SET-TOTAL-NUM":return Object(d.a)(Object(d.a)({},e),{},{totalMovies:t.n});case"TOGGLE-IS-FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"SET-CURRENT-MOVIE":return Object(d.a)(Object(d.a)({},e),{},{currentMovie:t.currentMovie,idM:t.id});default:return e}},_=i(10),y=i(23),C=i(22),S=i(36),k=i.n(S),F=Object(C.a)("post/postThunk",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:3005/posts").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),A=Object(C.b)({name:"post",initialState:{isFetching:!0,post:[]},reducers:{setLike:function(e,t){e.post.map((function(e){e.id===t.payload.id&&(e.likeValue?(e.likeCount-=1,e.likeValue=!1,k.a.patch("http://localhost:3005/posts/"+t.payload.id,{likeValue:!1,likeCount:e.likeCount})):(e.likeValue=!0,e.likeCount+=1,k.a.patch("http://localhost:3005/posts/"+t.payload.id,{likeValue:!0,likeCount:e.likeCount})))}))},setPost:function(e,t){e.post=Object(y.a)(t.payload)},setFetch:function(e,t){e.isFetching=t.payload},showAll:function(e){e.showAll=!e.showAll}},extraReducers:(n={},Object(_.a)(n,F.pending,(function(e){e.isFetching=!0})),Object(_.a)(n,F.fulfilled,(function(e,t){e.isFetching=!1,e.post=t.payload})),Object(_.a)(n,F.rejected,(function(){})),n)}),w=A.actions,T=(w.showAll,w.setLike,w.setFetch,w.setPost,A.reducer),E=i(41),I=Object(C.a)("auth/userLoginThunk",function(){var e=Object(m.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(C.a)("auth/userLogoutThunk",function(){var e=Object(m.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(C.a)("auth/userAuthThunk",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0,"API-KEY":"5735f1e3-bb87-46ff-8b5d-43e7d0fa3ba0"}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),L=Object(C.b)({name:"auth",initialState:{email:null,id:null,login:null,isAuth:!1,isFetching:!1,imgUser:null},reducers:{setFetch:function(e,t){e.isFetching=t},setUser:function(e,t){e.email=t.payload.email,e.id=t.payload.googleId,e.login=t.payload.name,e.imgUser=t.payload.imageUrl,e.isAuth=!0}},extraReducers:(c={},Object(_.a)(c,U.pending,(function(e){e.isFetching=!0})),Object(_.a)(c,U.fulfilled,(function(e,t){e.email=t.payload.data.email,e.id=t.payload.data.id,e.login=t.payload.data.login,0===t.payload.resultCode&&(e.isAuth=!0)})),Object(_.a)(c,I.fulfilled,(function(e,t){e.id=t.payload.data.userId})),Object(_.a)(c,P.fulfilled,(function(e){e.isAuth=!1,e.email=null,e.id=null,e.login=null,e.imgUser=null})),c)}),z=L.actions,R=(z.setUserAuthApi,z.dis,z.setUser),H=L.reducer,V=i(89),G=Object(C.a)("appSlice/initialize",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),D=Object(C.b)({name:"appSlice",initialState:{initialized:!1},reducers:{setInit:function(e){e.initialized=!0}},extraReducers:(s={},Object(_.a)(s,G.pending,(function(){})),Object(_.a)(s,G.fulfilled,(function(e){e.initialized=!0})),s)});Object(V.a)(D.actions);var B=D.reducer,J=Object(C.a)("headerSlice/getSearchMovies",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),K=Object(C.b)({name:"header",initialState:{activeSection:!0,isActiveMenu:!1,theme:!0,searchMovies:[]},reducers:{setActiveMenu:function(e){e.isActiveMenu?e.isActiveMenu=!1:e.isActiveMenu=!0},setThem:function(e){e.theme?e.theme=!1:e.theme=!0},setMoviesSearch:function(e){var t=Object(b.c)(),i=Object(b.e)(Object(b.f)(t,"movies"));e.searchMovies=Object(b.d)(i,(function(e){console.log(e.val())})),e.searchMovies=[]}},extraReducers:{}}),Y=K.actions,Q=Y.setActiveMenu,W=Y.setThem,Z=(Y.setMoviesSearch,K.reducer),q=i(225),X=Object(l.b)({movies:N,authUser:H,post:T,header:Z,form:q.a,app:B}),$=Object(l.d)(X,Object(l.a)(E.a)),ee=i(52),te=i.n(ee),ie=i(12),ne=(i(82),i(14)),ce=(i(198),i(4)),se=function(e){return Object(ce.jsxs)("div",{className:"item_comment",children:[Object(ce.jsx)("h5",{className:"name_user",children:e.name}),Object(ce.jsx)("p",{className:"commentTxt",children:e.txt}),Object(ce.jsx)("p",{className:"dataMovie",children:e.data})]})},ae=function(e){var t=Object(ie.f)();return Object(ce.jsxs)("div",{className:"block_add comment",children:[Object(ce.jsx)("input",{ref:e.txtCom,type:"text",className:"add_txt_comment"}),Object(ce.jsx)("button",{onClick:function(){return e.isAuth?e.addCom():t("/")},className:"add_comment",children:"Add Comment"})]})},re=(i(200),i(201),function(){return Object(ce.jsxs)("div",{className:"lds-spinner",children:[Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{}),Object(ce.jsx)("div",{})]})}),oe=i(93),le=i.n(oe),ue=Object(a.createContext)({type:!0}),je=function(e){var t=e.children,i=Object(ne.d)((function(e){return e.header.theme}));return Object(ce.jsx)(ue.Provider,{value:{type:i},children:t})},me=function(e){var t=Object(a.useContext)(ue).type;return e.currentMovie?Object(ce.jsxs)("div",{className:t?"movie-inside-block":"movie-inside-block lite",children:[Object(ce.jsx)("h3",{className:"movie_name",children:e.currentMovie.name}),Object(ce.jsx)("h4",{className:"movie_item-year",children:e.currentMovie.year}),Object(ce.jsx)("img",{src:e.currentMovie.srs,alt:"movieImg"}),Object(ce.jsx)("h4",{className:"title_about-movie",children:"About movie"}),Object(ce.jsx)("p",{className:"movie_item-describe",children:"\u042d\u0434\u0434\u0438 \u0411\u0440\u043e\u043a \u043f\u0440\u0438\u0441\u043f\u043e\u0441\u0430\u0431\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0436\u0438\u0437\u043d\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044f \u0438\u043d\u043e\u043f\u043b\u0430\u043d\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0431\u0438\u043e\u0442\u0430 \u0412\u0435\u043d\u043e\u043c \u0438 \u043f\u043e\u043f\u0443\u0442\u043d\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442\u0430. \u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u044c\u0438 \u043e \u0441\u0435\u0440\u0438\u0439\u043d\u043e\u043c \u0443\u0431\u0438\u0439\u0446\u0435 \u041a\u043b\u0435\u0442\u0443\u0441\u0435 \u041a\u044d\u0441\u0441\u0438\u0434\u0438, \u0434\u043e\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0441\u0432\u043e\u0438\u0445 \u0434\u043d\u0435\u0439 \u0432 \u043a\u0430\u043c\u0435\u0440\u0435 \u0441\u043c\u0435\u0440\u0442\u043d\u0438\u043a\u043e\u0432, \u0436\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0431\u0435\u0449\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0435\u0433\u043e \u0436\u0438\u0437\u043d\u0438. \u041e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u042d\u0434\u0434\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0424\u0440\u044d\u043d\u0441\u0438\u0441 \u0411\u0430\u0440\u0440\u0438\u0441\u043e\u043d, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0442\u0430\u0439\u043d\u043e \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0432 \u0442\u044e\u0440\u044c\u043c\u0443 \u0437\u0430 \u043e\u0431\u043b\u0430\u0434\u0430\u043d\u0438\u0435 \u043c\u043e\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0441\u0438\u043b\u043e\u0439. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0432\u0438\u0437\u0438\u0442\u0430 \u0411\u0440\u043e\u043a\u0430 \u0432 \u043a\u0430\u043c\u0435\u0440\u0443 \u0441\u043c\u0435\u0440\u0442\u043d\u0438\u043a\u0430 \u041a\u043b\u0435\u0442\u0443\u0441 \u043a\u0443\u0441\u0430\u0435\u0442 \u0440\u0435\u043f\u043e\u0440\u0442\u0435\u0440\u0430, \u0430 \u0435\u0433\u043e \u043a\u0440\u043e\u0432\u044c \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430 \u0432 \u041a\u0430\u0440\u043d\u0430\u0436\u0430 \u2014 \u0431\u043e\u043b\u0435\u0435 \u0441\u043c\u0435\u0440\u0442\u043e\u043d\u043e\u0441\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0412\u0435\u043d\u043e\u043c\u0430. \u041a\u043e\u0433\u0434\u0430 \u041a\u0430\u0440\u043d\u0430\u0436 \u0438 \u0424\u0440\u044d\u043d\u0441\u0438\u0441 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u0435, \u042d\u0434\u0434\u0438 \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u0440\u0438\u0437\u0438\u0441 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0441 \u0412\u0435\u043d\u043e\u043c\u043e\u043c \u0438 \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u0441\u0432\u043e\u0435\u0439 \u0431\u044b\u0432\u0448\u0435\u0439 \u0434\u0435\u0432\u0443\u0448\u043a\u0435 \u042d\u043d\u043d."}),Object(ce.jsx)("div",{className:"movie_block",children:Object(ce.jsx)(le.a,{width:790,height:460,controls:!0,url:e.currentMovie.videoUrl})}),Object(ce.jsxs)("div",{className:"block_comment",children:[Object(ce.jsx)("h4",{className:"comment-title",children:"Comments"}),e.currentMovie.comment.map((function(e){return Object(ce.jsx)(se,{name:e.name,txt:e.txt,data:e.data},e.id)}))]}),Object(ce.jsx)(ae,{addCom:e.addComment,isAuth:e.isAuth,txtCom:e.txt})]}):Object(ce.jsx)(re,{})},de=Object(ne.b)((function(e){return{movie:e.movies.movies,currentMovie:e.movies.currentMovie,isFetching:e.movies.isFetching,isAuth:e.authUser.isAuth,login:e.authUser.login,id:e.movies.idM}}),{addCommentUp:function(e,t,i,n){var c=new Date;return{type:"ADD-COMMENT",id:n,txt:e,data:c.getFullYear()+"/"+(c.getMonth()+1)+"/"+c.getDate()+" "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds(),name:t,idMov:i}},setFetching:v,removeCurrentMovie:f,setCurrentMovie:function(e){return function(t){var i=Object(b.f)(Object(b.c)());Object(b.b)(Object(b.a)(i,"movies/"+e.idMov)).then((function(i){t(f(i.val(),e.idMov))}))}}})((function(e){var t=Object(ie.g)();Object(a.useEffect)((function(){return e.currentMovie||e.setCurrentMovie(t),function(){e.removeCurrentMovie(null)}}),[]);var i=r.a.createRef();return Object(ce.jsx)(ce.Fragment,{children:e.isFetching?Object(ce.jsx)(re,{}):Object(ce.jsx)(me,{addComment:function(){if(""!==i.current.value){var t=i.current.value;e.addCommentUp(t,e.login,e.id),i.current.value=""}else alert("enter some comments")},txt:i,currentMovie:e.currentMovie,isAuth:e.isAuth,id:e.id})})})),be=(i(87),i(13)),he=function(e){var t=Object(ie.g)();return Object(ce.jsx)("div",{className:"movie_item",children:Object(ce.jsxs)(be.b,{to:void 0!==t.movCategory?e.name+"/"+(e.id-1).toString():e.genre+"/"+e.name+"/"+(e.id-1).toString(),className:e.type?"movie__item-link":"movie__item-link lite",children:[Object(ce.jsx)("img",{src:e.img,alt:"venom",className:"movie_item-img"}),Object(ce.jsx)("h3",{className:"movie__item-name",children:e.name}),Object(ce.jsxs)("div",{className:"block_item-describe-movie",children:[Object(ce.jsxs)("p",{className:"movie__year",children:[e.year,","]}),Object(ce.jsx)("p",{className:"movie__genre",children:e.genre})]})]})})},Oe=function(e){var t=Object(a.useContext)(ue).type;return Object(ce.jsx)("div",{children:Object(ce.jsx)("div",{className:"intro",children:Object(ce.jsxs)("div",{className:"container",children:[Object(ce.jsxs)("div",{className:"intro_inner",children:[Object(ce.jsx)("h1",{className:t?"title_main":"title_main lite",children:"Movies"}),Object(ce.jsx)("div",{className:"block_item-movie",children:Object(ce.jsx)(ce.Fragment,{children:e.isFetching?Object(ce.jsx)(re,{}):Object(ce.jsx)("div",{className:"containers__inem-movie",children:e.movie.map((function(e){return Object(ce.jsx)(he,{type:t,id:e.id,name:e.name,year:e.year,genre:e.genre,img:e.srs},e.id)}))})})})]}),"s"]})})})},ve=Object(ne.b)((function(e){return{movie:g(e),pageSize:e.movies.pageSize,totalMovies:e.movies.totalMovies,currentPage:e.movies.currentPage,isFetching:e.movies.isFetching}}),{setMovie:O,setCurrentPage:function(e){return{type:"SET-PAGE",currentP:e}},setTotalCount:x,setFetching:v,getMovies:p})((function(e){return Object(a.useEffect)((function(){return 0===e.movie.length&&e.getMovies(e.currentPage,e.pageSize),function(){e.setMovie([])}}),[]),Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsx)(Oe,{totalMovies:e.totalMovies,pageSize:e.pageSize,movie:e.movie,currentPage:e.currentPage,isFetching:e.isFetching})})})),xe=i(11),fe=function(e){var t=Object(a.useRef)(),i=Object(a.useRef)();Object(a.useEffect)((function(){var i=function(i){e.isMenuOpen&&t.current&&!t.current.contains(i.target)&&e.setIsMenuOpen(!1)};return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}}),[e.isMenuOpen]);var n=[];if(0===n.length){var c=Object(b.c)(),s=Object(b.e)(Object(b.f)(c,"movies"));Object(b.d)(s,(function(e){n=e.val()}))}var r=Object(a.useState)([]),o=Object(xe.a)(r,2),l=o[0],u=o[1],j=Object(ne.c)();return Object(ce.jsx)("div",{className:e.type?"header_block":"header_block lite",children:Object(ce.jsx)("div",{className:"container",children:Object(ce.jsxs)("div",{className:"inner_header",children:[Object(ce.jsx)("menu",{children:Object(ce.jsxs)("ul",{className:"menu",children:[Object(ce.jsx)("li",{className:e.type?"li-hover":"li-hover lite",children:Object(ce.jsx)(be.b,{to:"Home",className:"menu_link",children:"Home"})}),Object(ce.jsxs)("li",{className:e.type?"li-hover":"li-hover lite",children:[Object(ce.jsx)(be.b,{to:"Movies/",className:e.type?"menu_link":"menu_link lite",children:"movies"}),Object(ce.jsxs)("div",{className:e.type?"sub_div-menu":"sub_div-menu lite",children:[Object(ce.jsxs)("ul",{className:"muvie_subMenu",children:[Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Action",children:"Action"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Comedy",children:"Comedy"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Thriller",children:"Thriller"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Sport",children:"Sport"})})]}),Object(ce.jsxs)("ul",{className:"muvie_subMenu",children:[Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Fantasy",children:"Fantasy"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Horror",children:"Horror"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Adventure",children:"Adventure"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)(be.b,{to:"Movies/Fantastic",children:"Fantastic"})})]})]})]}),Object(ce.jsxs)("li",{className:e.type?"li-hover":"li-hover lite",children:[Object(ce.jsx)(be.b,{to:"/Serials",className:"menu_link",children:"Serials"}),Object(ce.jsxs)("div",{className:e.type?"sub_div-menu":"sub_div-menu lite",children:[Object(ce.jsxs)("ul",{className:"muvie_subMenu",children:[Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Action"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Comedy"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Thriller"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Fiction"})})]}),Object(ce.jsxs)("ul",{className:"muvie_subMenu",children:[Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Fantasy"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Horror"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Adventure"})}),Object(ce.jsx)("li",{className:"subMenu_item",children:Object(ce.jsx)("a",{href:"#",children:"Sports"})})]})]})]})]})}),Object(ce.jsxs)("div",{className:"search",children:[Object(ce.jsx)("input",{ref:i,onFocus:function(){e.setTouch(!0),j(J())},id:"search",className:"input_search",onChange:function(e){return function(e){var t=e.target.value,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));u(""!==t?i:[])}(e)},placeholder:"find movie...",type:"search"}),0!==l.length&&Object(ce.jsx)("div",{className:"search_table",children:l.map((function(e,i){return Object(ce.jsx)("li",{className:"search_item",children:Object(ce.jsx)(be.b,{onClick:function(){t.current.value="",u([])},to:"Movies/"+e.genre+"/"+e.name+"/"+(e.id-1).toString(),children:e.name},i)})}))})]}),Object(ce.jsxs)("div",{className:"block_logIn",ref:t,children:[e.authS?Object(ce.jsxs)("div",{onClick:function(){return e.setIsMenuOpen((function(e){return!e}))},className:"user_room",children:[Object(ce.jsx)("div",{className:"ava",children:Object(ce.jsx)("img",{src:e.img?e.img:"https://img.icons8.com/dusk/64/000000/small-smile.png"})}),Object(ce.jsx)("p",{className:"login_col",children:e.login})]}):Object(ce.jsx)(be.b,{to:"/",className:"login",children:"Log In"}),e.isMenuOpen?Object(ce.jsxs)("div",{className:(e.authS&&e.isMenuOpen?"info_prof activeBtn":"info_prof")+(e.type?" ":" lite"),children:[Object(ce.jsx)("div",{children:Object(ce.jsx)("li",{className:"info_user",children:Object(ce.jsx)(be.b,{to:"Profile",children:"Profile"})})}),Object(ce.jsx)("div",{onClick:function(){return e.setTheme()},className:e.theme?"switch-btn switch-on":"switch-btn",children:"\ud83c\udf1c \ud83c\udf1e"}),Object(ce.jsx)("button",{className:"btn_exit",onClick:function(){return e.logout()},children:"Exit"})]}):null]})]})})})},pe=Object(ne.b)((function(e){return{stateLogin:e.authUser.login,authStat:e.authUser.isAuth,activeS:e.header.activeSection,img:e.authUser.imgUser}}),{})((function(e){var t=Object(ne.c)(),i=Object(ne.d)((function(e){return e.header.theme})),n=Object(a.useContext)(ue).type,c=Object(a.useState)(!1),s=Object(xe.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(xe.a)(l,2),j=u[0],m=u[1];return Object(ce.jsx)(fe,{login:e.stateLogin,authS:e.authStat,active:e.activeS,logout:function(){t(P()),t(Q())},img:e.img,theme:i,setTheme:function(){t(W())},setTouch:o,touched:r,isMenuOpen:j,setIsMenuOpen:m,type:n})})),ge=(i(220),function(){var e=Object(ne.d)((function(e){return e.authUser})),t=Object(a.useContext)(ue).type;return Object(ce.jsxs)("div",{children:[Object(ce.jsx)("h1",{className:"title_main",children:"Profile"}),Object(ce.jsx)("div",{className:"box_img",children:Object(ce.jsx)("img",{src:e.imgUser,className:"profile_img",alt:"photo_user"})}),Object(ce.jsx)("h4",{className:t?"email_profile":"email_profile litel",children:e.email}),Object(ce.jsx)("h4",{className:t?"email_profile":"email_profile litel",children:e.login})]})}),Me=(i(221),i(94)),Ne=i.n(Me),_e=function(){var e=Object(ie.f)(),t=Object(ne.c)(),i=function(i){t(R(i.profileObj)),e("/Movies")};return Object(ce.jsx)(Ne.a,{clientId:"318167226025-katjnh9atjt3ipuvlhl1p5nc6obc0tah.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:i,onFailure:i,cookiePolicy:"single_host_origin"})},ye=function(){return Object(ce.jsx)("div",{id:"login",className:"formLog",children:Object(ce.jsxs)("form",{method:"get",children:[Object(ce.jsx)("div",{className:"input",children:Object(ce.jsx)("input",{type:"Email",placeholder:"email",name:"email"})}),Object(ce.jsx)("div",{className:"input",children:Object(ce.jsx)("input",{type:"password",name:"password",placeholder:"password"})}),Object(ce.jsx)(_e,{})]})})},Ce=function(e){var t=Object(ie.g)(),i=Object(ne.d)((function(e){return e.movies.movies})),n=Object(a.useContext)(ue).type,c=Object(ne.c)();return Object(a.useEffect)((function(){c(p())}),[]),Object(ce.jsx)("div",{className:"intro",children:Object(ce.jsx)("div",{className:"container",children:Object(ce.jsxs)("div",{className:"intro_inner",children:[Object(ce.jsxs)("h1",{className:n?"title_main":"title_main lite",children:["Movies ",t.movCategory]}),Object(ce.jsx)("div",{className:"block_item-movie",children:Object(ce.jsx)(ce.Fragment,{children:e.isFetching?Object(ce.jsx)(re,{}):Object(ce.jsx)("div",{className:"containers__inem-movie",children:i.map((function(e){if(e.genre.toLowerCase()===t.movCategory.toLowerCase())return Object(ce.jsx)(he,{type:n,id:e.id,name:e.name,year:e.year,genre:e.genre,img:e.srs},e.id)}))})})})]})})})};var Se=Object(l.c)(Object(ne.b)((function(e){return{init:e.app.initialized}}),null)((function(){return Object(a.useEffect)((function(){document.title="Movies"}),[]),Object(ce.jsxs)("div",{className:"App",children:[Object(ce.jsx)(pe,{}),Object(ce.jsx)("div",{className:"container",children:Object(ce.jsx)("div",{className:"block",children:Object(ce.jsxs)(ie.c,{children:[Object(ce.jsx)(ie.a,{path:"/Home"}),Object(ce.jsx)(ie.a,{path:"/",element:Object(ce.jsx)(ye,{})}),Object(ce.jsx)(ie.a,{path:"Movies/:genre/:movieName/:idMov",element:Object(ce.jsx)(de,{})}),Object(ce.jsx)(ie.a,{path:"/Movies/",element:Object(ce.jsx)(ve,{})}),Object(ce.jsx)(ie.a,{path:"/Serials",element:Object(ce.jsx)("h1",{className:"serial",children:"No Serials yet"})}),Object(ce.jsx)(ie.a,{path:"Profile",element:Object(ce.jsx)(ge,{})}),"}/>",Object(ce.jsx)(ie.a,{path:"/Movies/:movCategory",element:Object(ce.jsx)(Ce,{})})]})})})]})}))),ke=(i(222),i(95)),Fe=(Object(ke.a)({apiKey:"AIzaSyC72PZVaunISF5HPbgukuu4r71VDxas8CE",authDomain:"movies-615eb.firebaseapp.com",projectId:"movies-615eb",storageBucket:"movies-615eb.appspot.com",messagingSenderId:"666672106173",appId:"1:666672106173:web:0c52505d164b26166cc5d4",measurementId:"G-350QHC4WRJ"}),function(e){var t=e.children,i=Object(a.useContext)(ue).type;return Object(ce.jsx)("div",{className:i?"lay":"lay lite",children:t})});te.a.render(Object(ce.jsx)(be.a,{basename:"",children:Object(ce.jsx)(ne.a,{store:$,children:Object(ce.jsx)(je,{children:Object(ce.jsx)(Fe,{children:Object(ce.jsx)(Se,{state:$,dispatch:$.dispatch.bind($)})})})})}),document.getElementById("root")),o()},62:function(e,t,i){},82:function(e,t,i){},87:function(e,t,i){}},[[223,1,2]]]);
//# sourceMappingURL=main.331aafc3.chunk.js.map