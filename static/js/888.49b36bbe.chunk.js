"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{8193:function(e,t,n){n.d(t,{Z:function(){return a}});var i="Container_container__VVOCq",r=n(184);function a(e){var t=e.children;return(0,r.jsx)("div",{className:i,children:t})}},3540:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(6373),r="Loader_spinner__iDFIv",a=n(184),s=function(){return(0,a.jsx)("div",{className:r,children:(0,a.jsx)(i.Ll,{heigth:"100",width:"100",color:"grey",ariaLabel:"loading-indicator"})})}},8888:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(885),r=n(2791),a=n(501),s=n(6871),c=n(7692),o=n(409),l=n(7361),u=n(3540),d=n(8193),p={section:"MovieDetails_section__3J5A0",list:"MovieDetails_list__y5Rs9",filmTitle:"MovieDetails_filmTitle__xRoqU",title:"MovieDetails_title__RBndM",listGenres:"MovieDetails_listGenres__LvBS4",itemGenres:"MovieDetails_itemGenres__Uj8xy",button:"MovieDetails_button__PGjyO",listAdditionInfo:"MovieDetails_listAdditionInfo__dV0-t",link:"MovieDetails_link__wf74g","active-link":"MovieDetails_active-link__Or5EC MovieDetails_link__wf74g",poster:"MovieDetails_poster__Gw9Qy"},f=n(184);function v(){var e=(0,r.useState)([]),t=(0,i.Z)(e,2),n=t[0],v=t[1],h=(0,r.useState)(!1),_=(0,i.Z)(h,2),m=_[0],x=_[1],g=(0,s.UO)().movieId,j=(0,s.TH)(),w=(0,s.s0)();(0,r.useEffect)((function(){x(!0),o.Y5(g).then(v).finally(x(!1))}),[g]);var k=n.poster_path,y=n.original_title,b=n.name,N=n.release_date,D=n.vote_average,M=n.overview,Z=n.genres,G=l.bV+k;return(0,f.jsxs)(d.Z,{children:[(0,f.jsx)("div",{children:(0,f.jsxs)("button",{className:p.button,onClick:function(){var e,t;return w(null!==(e=null===j||void 0===j||null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:[(0,f.jsx)(c.YiX,{}),"Go back"]})}),(0,f.jsxs)("section",{className:p.section,children:[m&&(0,f.jsx)(u.Z,{}),(0,f.jsx)("div",{className:p.poster,children:k?(0,f.jsx)("img",{src:G,alt:"Poster",width:700}):(0,f.jsx)("img",{src:l._J,alt:"Poster"})}),(0,f.jsxs)("ul",{className:p.list,children:[(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsxs)("h2",{className:p.filmTitle,children:[y," ",b," ",function(){if(null!==N)return"("+String(N).slice(0,4)+")"}()]}),(0,f.jsxs)("p",{children:["Vote average: ",function(){if(null!==D){var e=parseInt(10*D);return String(e)+"%"}}()]})]}),(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsx)("h3",{className:p.title,children:"Overviews"}),(0,f.jsx)("p",{children:M})]}),(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsx)("h3",{className:p.title,children:"Genres"}),Z&&(0,f.jsx)("ul",{className:p.listGenres,children:Z.map((function(e){var t=e.id,n=e.name;return(0,f.jsx)("li",{className:p.itemGenres,children:n},t)}))})]})]})]}),(0,f.jsxs)("section",{children:[(0,f.jsx)("h3",{className:p.title,children:"Additional information"}),(0,f.jsxs)("ul",{className:p.listAdditionInfo,children:[(0,f.jsx)("li",{className:p.title,children:(0,f.jsx)(a.OL,{state:j.state,to:"/movies/".concat(g,"/cast"),className:function(e){return e.isActive?p["active-link"]:p.link},children:"Cast"})}),(0,f.jsx)("li",{className:p.title,children:(0,f.jsx)(a.OL,{state:j.state,to:"/movies/".concat(g,"/reviews"),className:function(e){return e.isActive?p["active-link"]:p.link},children:"Reviews"})})]}),(0,f.jsx)(s.j3,{})]})]})}},7361:function(e,t,n){n.d(t,{$h:function(){return r},Sk:function(){return c},_J:function(){return s},_n:function(){return i},bV:function(){return a}});var i="https://api.themoviedb.org/3",r="90bfee2a572d35f95b357659a69aab32",a="https://image.tmdb.org/t/p/w500",s="https://michaelnakache.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png",c="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"},409:function(e,t,n){n.d(t,{Hx:function(){return m},Y5:function(){return f},bI:function(){return d},wr:function(){return l},xc:function(){return h}});var i=n(5861),r=n(7757),a=n.n(r),s=n(4569),c=n.n(s),o=n(7361);function l(){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(o._n,"/trending/movie/day?api_key=").concat(o.$h));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(o._n,"/search/movie?api_key=").concat(o.$h,"&query=").concat(t,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(o._n,"/movie/").concat(t,"?api_key=").concat(o.$h,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(o._n,"/movie/").concat(t,"/credits?api_key=").concat(o.$h,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(o._n,"/movie/").concat(t,"/reviews?api_key=").concat(o.$h,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c().defaults.baseURL=o._n}}]);
//# sourceMappingURL=888.49b36bbe.chunk.js.map