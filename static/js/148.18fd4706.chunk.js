"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[148],{3540:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(6373),a="Loader_spinner__iDFIv",c=e(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.Ll,{heigth:"100",width:"100",color:"grey",ariaLabel:"loading-indicator"})})}},3148:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r=e(885),a=e(501),c=e(9126),u=e(2791),i=e(409),s=e(3540),o=e(184);function p(){var n=(0,a.lr)(),t=(0,r.Z)(n,2),e=t[0],c=t[1],p=(0,u.useState)([]),f=(0,r.Z)(p,2),l=f[0],h=f[1],d=e.get("query");console.log(c),(0,u.useEffect)((function(){i.bI(d).then(h)}),[d]);var v=l.results;return(0,o.jsxs)(o.Fragment,{children:[!v&&(0,o.jsx)("div",{children:(0,o.jsx)(s.Z,{})}),v&&(0,o.jsx)("ul",{children:v.map((function(n){var t=n.id,e=n.original_title,r=n.name;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(t),children:(0,o.jsxs)("p",{children:[e," ",r]})})},t)}))})]})}var f="Movies_searchbar__uTZk4",l="Movies_form__mp42q",h="Movies_button__hVjwG",d="Movies_buttonLabel__XagoV",v="Movies_input__OE3ef";function _(){var n=(0,a.lr)(),t=(0,r.Z)(n,2),e=t[0],u=t[1],i=e.get("query");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("section",{className:f,children:(0,o.jsxs)("form",{className:l,onSubmit:function(){},children:[(0,o.jsx)("input",{className:v,value:i||"",onChange:function(n){var t=n.target.value;u(t?{query:t}:{})}}),(0,o.jsx)("button",{type:"submit","aria-label":"Search",className:h,children:(0,o.jsx)("span",{className:d,children:(0,o.jsx)(c.dVI,{})})})]})}),(0,o.jsx)("section",{children:i&&(0,o.jsx)(p,{})})]})}},7361:function(n,t,e){e.d(t,{$h:function(){return a},Sk:function(){return i},_J:function(){return u},_n:function(){return r},bV:function(){return c}});var r="https://api.themoviedb.org/3",a="90bfee2a572d35f95b357659a69aab32",c="https://image.tmdb.org/t/p/w500",u="https://michaelnakache.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png",i="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"},409:function(n,t,e){e.d(t,{Hx:function(){return g},Y5:function(){return h},bI:function(){return f},wr:function(){return o},xc:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),s=e(7361);function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s._n,"/trending/movie/day?api_key=").concat(s.$h));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s._n,"/search/movie?api_key=").concat(s.$h,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s._n,"/movie/").concat(t,"?api_key=").concat(s.$h,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s._n,"/movie/").concat(t,"/credits?api_key=").concat(s.$h,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s._n,"/movie/").concat(t,"/reviews?api_key=").concat(s.$h,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.baseURL=s._n}}]);
//# sourceMappingURL=148.18fd4706.chunk.js.map