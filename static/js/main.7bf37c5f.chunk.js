(this["webpackJsonpcastlewood-flix"]=this["webpackJsonpcastlewood-flix"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),o=n.n(i),s=(n(28),n(29),n(4)),r=n.n(s),l=n(6),d=n(5),u=n(19),f=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),v="bbff14127eb5d6c515f846d9ffbde2d3",b={fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchAdventureMovies:"/discover/movie?api_key=".concat(v,"&with_genres=12"),fetchAnimationMovies:"/discover/movie?api_key=".concat(v,"&with_genres=16"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchFamilyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10751"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-us")},h=(n(48),n(0));var j=function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(b.fetchTopRated);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center"},children:[Object(h.jsxs)("div",{className:"banner__contents",children:[Object(h.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(h.jsxs)("div",{className:"banner__buttons",children:[Object(h.jsx)("button",{className:"banner__button",children:"Play"}),Object(h.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(h.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-2)+"...":e)})]}),Object(h.jsx)("div",{className:"banner__fadebottom"})]})};n(50);var _=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(h.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(h.jsx)("img",{className:"nav__logo",src:"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/126140804_105258228085950_4806496747748946221_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF-mLAvc7C4aZqVOI_3N_ia7Rm4zngotDXtGbjOeCi0NXKsF7bbEquto9tn3PnVycmo0mvsICNjqy2RX3Y0vb4e&_nc_ohc=XYQ-UffUQhwAX9wMZVz&_nc_ht=scontent.fkhi1-1.fna&oh=dc8b0644b7ff27f5aba28985603ea70e&oe=60C79985",alt:"CastleWood flix"}),Object(h.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",alt:"CastleWood flix avatar"})]})},p=n(20),m=n(23),g=n.n(m);n(72);var O=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),o=Object(d.a)(i,2),s=o[0],u=o[1],v=Object(c.useState)(""),b=Object(d.a)(v,2),j=b[0],_=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(h.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),onClick:function(){return function(e){j?_(""):g()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e.message)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),j&&Object(h.jsx)(p.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var x=function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(_,{}),Object(h.jsx)(j,{}),Object(h.jsx)(O,{title:"Netflix Original",isLargeRow:!0,fetchUrl:b.fetchNetflixOriginals}),Object(h.jsx)(O,{title:"Top Rated Movies",fetchUrl:b.fetchTopRated}),Object(h.jsx)(O,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),Object(h.jsx)(O,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),Object(h.jsx)(O,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.7bf37c5f.chunk.js.map