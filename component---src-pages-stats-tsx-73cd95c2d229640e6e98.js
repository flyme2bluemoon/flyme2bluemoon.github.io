"use strict";(self.webpackChunkgithub_pages=self.webpackChunkgithub_pages||[]).push([[284],{8798:function(e,t,r){var n;r.r(t);var a=r(4942),c=r(5861),s=r(7757),o=r.n(s),l=r(7294),u=r(7562),i=r(8642),d=r(6622);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,l.useState)({}),t=e[0],a=e[1],s=function(){var e=(0,c.Z)(o().mark((function e(){var t,r,n,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.uE)();case 2:for(t=e.sent,r={},n=[],c=0;c<t.length;c++)null!==t[c].language&&n.push((0,u._z)(t[c].name));return e.next=8,Promise.all(n).then((function(e){for(var t=0;t<e.length;t++)for(var n=Object.keys(e[t]),a=0;a<n.length;a++)r[n[a]]=r[n[a]]?r[n[a]]+e[t][n[a]]:e[t][n[a]]}));case 8:r=Object.entries(r).sort((function(e,t){var r=e[1];return t[1]-r})).reduce((function(e,t){var r,n=t[0],a=t[1];return f(f({},e),{},((r={})[n]=a,r))}),{}),a(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){s()}),[]),l.createElement(i.Z,{pageTitle:"Stats"},l.createElement("div",{className:"max-w-[1280px] mx-auto"},l.createElement("h1",{className:"text-6xl font-bold py-6"},"My Github Stats"),l.createElement("div",null,l.createElement("div",{className:"rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"},l.createElement("h2",{className:"text-4xl font-semibold"},"Most Used Languages"),l.createElement("hr",{className:"my-6 border-gray-500 dark:border-gray-400"}),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex flex-row"},Object.keys(t).map((function(e){var a=Object.values(t).reduce((function(e,t){return e+t}),0),c=Object.keys(t).indexOf(e),s=Object.keys(t).length-1;return l.createElement("div",{key:e,className:"h-2.5 "+(0===c?"rounded-l":"")+" "+(c===s?"rounded-r":""),style:{width:t[e]/a*100+"%",backgroundColor:(n||(n=r.t(d,2)))[e].color}})}))),l.createElement("div",{className:"grid grid-cols-3"},Object.keys(t).map((function(e){var a=Object.values(t).reduce((function(e,t){return e+t}),0);return l.createElement("div",{key:e,className:"w-[80%] mx-auto py-4"},l.createElement("span",{style:{color:(n||(n=r.t(d,2)))[e].color}},"●")," ",l.createElement("span",{className:"font-semibold"},e)," ",(t[e]/a*100).toFixed(2),"%")}))),l.createElement("small",{className:"text-gray-500 dark:text-gray-400"},"Data from Github API based on most used language in each public repo")))))}}}]);
//# sourceMappingURL=component---src-pages-stats-tsx-73cd95c2d229640e6e98.js.map