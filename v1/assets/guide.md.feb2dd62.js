import{_ as e,c as a,o as t,d as r}from"./app.bac07cc6.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[{"level":2,"title":"How it works","slug":"how-it-works","link":"#how-it-works","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Why not...?","slug":"why-not","link":"#why-not","children":[{"level":3,"title":"axios-cache-adapter","slug":"axios-cache-adapter","link":"#axios-cache-adapter","children":[]},{"level":3,"title":"Fetch and some state management library?","slug":"fetch-and-some-state-management-library","link":"#fetch-and-some-state-management-library","children":[]}]}],"relativePath":"guide.md","lastUpdated":1672757833000}'),i={name:"guide.md"},s=r('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><p>Axios Cache Interceptor is a, as it name says, a interceptor for axios to handle caching. It was created to help developers call axios multiple times without having to worry about overloading the network or coding himself a simple and buggy cache system.</p><p>Each request goes through an interceptor applied to your axios instance. There, we handle each request and decide if we should send it to the network or return a cached response.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><p>By using axios interceptors instead of adapters, each request is passed through the interceptor before calling the adapter and before returning to the original caller. Adapters are the final step and they are responsible for the actual network call, so, by choosing to use interceptors, we create a minimally invasive approach that allows you to still use the axios adapter of your choice.</p><p>Before the request is delivered to the adapter, our request interceptor checks if the request have already been cached and if it&#39;s a valid one, checks if the request should be cached (sometimes you don&#39;t want cache at all, and it&#39;s ok), if there&#39;s already a request sent to the network that we can wait for it and many more other checks.</p><p>After the adapter gets the response, we check if it belongs to a <em>cacheable</em> request, saves it into the storage, resolves other requests awaiting for the same resource and finally returns the response to the original caller.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>TTL, Cache-Control and ETag.</li><li>Return previous cached request if the new one failed.</li><li>Handles parallel requests</li><li>100% Customizable</li><li>Built-in storages like In-Memory, Local Storage and Session Storage.</li><li>Less than 4.3Kb minified and gzipped.</li><li>Development mode to debug your requests.</li><li>22 times faster than using axios and 8% faster than <code>axios-cache-adapter</code>.</li><li>And much more...</li></ul><h2 id="why-not" tabindex="-1">Why not...? <a class="header-anchor" href="#why-not" aria-hidden="true">#</a></h2><h3 id="axios-cache-adapter" tabindex="-1">axios-cache-adapter <a class="header-anchor" href="#axios-cache-adapter" aria-hidden="true">#</a></h3><p>The creation of this library is heavily inspired by axios-cache-adapter. It was a great library but now it is unmaintained and has a lot of unresolved issues. Also, it weights more than 4x the size of this library with less features and less performance.</p><h3 id="fetch-and-some-state-management-library" tabindex="-1">Fetch and some state management library? <a class="header-anchor" href="#fetch-and-some-state-management-library" aria-hidden="true">#</a></h3><p>As this library was built to be used with axios and to handle storage itself, I can assure that it is more performant that any glued code you may find and/or write yourself. About state management libraries and other similar things, <a href="https://arthur.place/implications-of-cache-or-state" target="_blank" rel="noreferrer">this blog post</a> explains why cache is more correct, architectural way, instead of state.</p>',14),o=[s];function n(h,l,d,c,u,p){return t(),a("div",null,o)}const g=e(i,[["render",n]]);export{f as __pageData,g as default};
