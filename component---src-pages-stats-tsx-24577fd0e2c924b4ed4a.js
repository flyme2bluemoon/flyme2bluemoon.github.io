"use strict";(self.webpackChunkgithub_pages=self.webpackChunkgithub_pages||[]).push([[284],{1410:function(e,a,t){var r;t.r(a);var l=t(7294),s=t(1691),n=t(6622);a.default=function(e){var a=e.data,c=JSON.parse(a.allLanguagesNode.edges[0].node.histogram);return l.createElement(s.Z,{pageTitle:"Stats"},l.createElement("div",{className:"max-w-[1280px] mx-auto"},l.createElement("h1",{className:"text-6xl font-bold py-6"},"My Github Stats"),l.createElement("div",null,l.createElement("div",{className:"rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"},l.createElement("h2",{className:"text-4xl font-semibold"},"Most Used Languages"),l.createElement("hr",{className:"my-6 border-gray-500 dark:border-gray-400"}),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex flex-row"},Object.keys(c).map((function(e){var a=Object.values(c).reduce((function(e,a){return e+a}),0),s=Object.keys(c).indexOf(e),d=Object.keys(c).length-1;return l.createElement("div",{key:e,className:"h-2.5 "+(0===s?"rounded-l":"")+" "+(s===d?"rounded-r":""),style:{width:c[e]/a*100+"%",backgroundColor:(r||(r=t.t(n,2)))[e].color}})}))),l.createElement("div",{className:"grid grid-cols-3"},Object.keys(c).map((function(e){var a=Object.values(c).reduce((function(e,a){return e+a}),0);return l.createElement("div",{key:e,className:"w-[80%] mx-auto py-4"},l.createElement("span",{style:{color:(r||(r=t.t(n,2)))[e].color}},"●")," ",l.createElement("span",{className:"font-semibold"},e)," ",(c[e]/a*100).toFixed(2),"%")}))),l.createElement("small",{className:"text-gray-500 dark:text-gray-400"},"Data from Github API based on most used language in each public repo")))))}}}]);
//# sourceMappingURL=component---src-pages-stats-tsx-24577fd0e2c924b4ed4a.js.map