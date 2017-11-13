(function(){"use strict"
function e(e,t){return caches.keys().then(function(n){n.forEach(function(n){var c=0===n.indexOf(e),s=n!==t
c&&s&&caches.delete(n)})})}function t(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()})
var n=["assets/dcmetromap-c8338c4430d40429928fe8ca05b6abba.js","assets/dcmetromap-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-0a312920b60cc303ffafa3f5e1806c7a.js","assets/vendor-ec0964f6a245377d4c5a5542b1f8a5fb.css"],c="esw-asset-cache-1",s=n.map(function(e){return new URL(e,self.location).toString()}),i=function(){caches.open(c).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===s.indexOf(t.url)&&e.delete(t)})})})}
self.addEventListener("install",function(e){e.waitUntil(caches.open(c).then(function(e){return Promise.all(s.map(function(t){var n=new Request(t,{mode:"cors"})
return fetch(n).then(function(n){if(n.status>=400){var c=new Error("Request for "+t+" failed with status "+n.statusText)
throw c}return e.put(t,n)}).catch(function(e){console.error("Not caching "+t+" due to "+e)})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([e("esw-asset-cache",c),i()]))}),self.addEventListener("fetch",function(e){var t="GET"===e.request.method,n=-1!==s.indexOf(e.request.url)
t&&n&&e.respondWith(caches.match(e.request,{cacheName:c}).then(function(t){return t||fetch(e.request)}))})
var a=[],r=[],f=new URL("index.html",self.location).toString()
self.addEventListener("install",function(e){e.waitUntil(fetch(f,{credentials:"include"}).then(function(e){return caches.open("esw-index-1").then(function(t){return t.put(f,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",function(e){var n=e.request,c="GET"===n.method,s=-1!==n.headers.get("accept").indexOf("text/html"),i=new URL(n.url).origin===location.origin,o=t(n.url,a),u=!r.length||t(n.url,r)
c&&s&&i&&u&&!o&&e.respondWith(caches.match(f,{cacheName:"esw-index-1"}))})})()
