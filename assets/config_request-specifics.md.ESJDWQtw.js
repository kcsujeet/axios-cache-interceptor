import{_ as a,D as t,o as n,c as h,I as i,U as s}from"./chunks/framework.JdTYmXmh.js";const l="/assets/disk-cache-screenshot.vSzI_AKN.png",I=JSON.parse('{"title":"Request specifics","description":"","frontmatter":{},"headers":[],"relativePath":"config/request-specifics.md","filePath":"config/request-specifics.md","lastUpdated":1701984465000}'),p={name:"config/request-specifics.md"},r=s('<h1 id="request-specifics" tabindex="-1">Request specifics <a class="header-anchor" href="#request-specifics" aria-label="Permalink to &quot;Request specifics&quot;">​</a></h1><p>Each request can have its own cache customization, by using the <code>cache</code> property. This way, you can have requests behaving differently from each other without much effort.</p><p>The inline documentation is self explanatory, but here is a shortly brief of what each property does:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can override every request specific property when creating the cached axios client, the same way you do with the <a href="./../config">global options</a>.</p></div><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2>',5),o=s('<ul><li>Type: <code>string</code></li><li>default: <em>(auto generated by the current <a href="./../guide/request-id#custom-generator">key generator</a>)</em></li></ul><p>The <a href="./../guide/request-id">Request ID</a> used in this request.</p><p>It may have been generated by the <a href="./../guide/request-id#custom-generator">Key Generator</a> or a custom one provided by <a href="./request-specifics#id"><code>config.id</code></a></p><h2 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache&quot;">​</a></h2>',4),c=s(`<ul><li>Type: <code>false</code> or <code>Partial&lt;CacheProperties&lt;R, D&gt;&gt;</code>.</li><li>Default: <code>{}</code> <em>(Inherits from global configuration)</em></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>As this property is optional, when not provided, all properties will inherit from global configuration</p></div><p>The cache option available through the request config is where all the cache customization happens.</p><p>Setting the <code>cache</code> property to <code>false</code> will disable the cache for this request.</p><p>This does not mean that the cache will be excluded from the storage, in which case, you can do that by deleting the storage entry:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Make a request with cache disabled.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">requestId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Delete the cache entry for this request.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(requestId);</span></span></code></pre></div><h2 id="cache-ttl" tabindex="-1">cache.ttl <a class="header-anchor" href="#cache-ttl" aria-label="Permalink to &quot;cache.ttl&quot;">​</a></h2>`,7),d=s('<ul><li>Type: <code>number</code></li><li>Default: <code>1000 * 60 * 5</code> <em>(5 Minutes)</em></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When using <a href="#cache-interpretheader"><strong>interpretHeader</strong></a>, this value will only be used if the interpreter can’t determine their TTL value to override this one.</p></div><p>The time until the cached value is expired in milliseconds.</p><p>If a function is used, it will receive the complete response and waits to return a TTL value</p><h2 id="cache-interpretheader" tabindex="-1">cache.interpretHeader <a class="header-anchor" href="#cache-interpretheader" aria-label="Permalink to &quot;cache.interpretHeader&quot;">​</a></h2>',5),k=s('<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can override the default behavior by changing the <strong><a href="./../config#headerinterpreter">headerInterpreter</a></strong> option.</p></div><p>If activated, when the response is received, the <code>ttl</code> property will be inferred from the requests headers. As described in the MDN docs and HTML specification.</p><p>See the actual implementation of the <a href="https://github.com/arthurfiorette/axios-cache-interceptor/blob/main/src/header/interpreter.ts" target="_blank" rel="noreferrer"><code>interpretHeader</code></a> method for more information.</p><h2 id="cache-cachetakeover" tabindex="-1">cache.cacheTakeover <a class="header-anchor" href="#cache-cachetakeover" aria-label="Permalink to &quot;cache.cacheTakeover&quot;">​</a></h2>',5),E=s('<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>As most of our cache strategies depends on well known defined HTTP headers, most browsers also use those headers to define their own cache strategies and storages.</p><details class="details custom-block"><summary>This can be seen when opening network tab in your browser’s dev tools.</summary><p><img src="'+l+'" alt="Network tab in Chrome Dev Tools" title="A network disk-cache example"></p></details><p>When your requested routes includes <code>Cache-Control</code> in their responses, you may end up with we and your browser caching the response, resulting in a <strong>double layer of cache</strong>.</p><p>This option solves this by including some predefined headers in the request, that should tell any client / adapter to not cache the response, thus only we will cache it.</p><p><strong>These are headers used in our specific request, it won’t affect any other request or response that the server may handle.</strong></p><p>Headers included:</p><ul><li><code>Cache-Control: no-cache</code></li><li><code>Pragma: no-cache</code></li><li><code>Expires: 0</code></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This option will not work on most <strong>CORS</strong> requests, as the browser will throw <code>Request header field pragma is not allowed by Access-Control-Allow-Headers in preflight response.</code>.</p><p>When you encounter this error, you need to make sure <code>Cache-Control</code>, <code>Pragma</code> and <code>Expires</code> headers are included into your server’s <code>Access-Control-Allow-Headers</code> CORS configuration.</p><p>If you cannot do such thing, you can fallback to disabling this option. Learn more on why it should be enabled at <a href="https://github.com/arthurfiorette/axios-cache-interceptor/issues/437#issuecomment-1361262194" target="_blank" rel="noreferrer">#437</a> and in this <a href="https://stackoverflow.com/a/62781874/14681561" target="_blank" rel="noreferrer">StackOverflow</a> answer.</p></div><h2 id="cache-methods" tabindex="-1">cache.methods <a class="header-anchor" href="#cache-methods" aria-label="Permalink to &quot;cache.methods&quot;">​</a></h2>',10),u=s(`<ul><li>Type: <code>Method[]</code></li><li>Default: <code>[&quot;get&quot;]</code></li></ul><p>Specifies which methods we should handle and cache. This is where you can enable caching to <code>POST</code>, <code>PUT</code>, <code>DELETE</code> and other methods, as the default is only <code>GET</code>.</p><p>If you want to enable cache for <code>POST</code> requests, you can do:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Globally enables caching for POST requests</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setupCache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(instance, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;get&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;post&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Just for this request</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    methods: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;post&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>We use <code>methods</code> in a per-request configuration setup because sometimes you have exceptions to the method rule.</p><h2 id="cache-cachepredicate" tabindex="-1">cache.cachePredicate <a class="header-anchor" href="#cache-cachepredicate" aria-label="Permalink to &quot;cache.cachePredicate&quot;">​</a></h2>`,6),g=s(`<ul><li>Type: <code>CachePredicate&lt;R, D&gt;</code></li><li>Default: <code>{ statusCheck: (status) =&gt; [200, 203, 300, 301, 302, 404, 405, 410, 414, 501].includes(status) }</code><em>(These default status codes follows RFC 7231)</em></li></ul><p>An object or function that will be tested against the response to indicate if it can be cached. You can use <code>statusCheck</code>, <code>containsHeader</code> and <code>responseMatch</code> to test against the response.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">auth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cachePredicate: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Only cache if the response comes with a &quot;good&quot; status code</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      statusCheck</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// some calculation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Tests against any header present in the response.</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      containsHeaders: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;x-custom-header-3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // some calculation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Check custom response body</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      responseMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Sample that only caches if the response is authenticated</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.auth.status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;authenticated&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="cache-update" tabindex="-1">cache.update <a class="header-anchor" href="#cache-update" aria-label="Permalink to &quot;cache.update&quot;">​</a></h2>`,4),y=s(`<ul><li>Type: <code>CacheUpdater&lt;R, D&gt;</code></li><li>Default: <code>{}</code></li></ul><p>Once the request is resolved, this specifies what other responses should change their cache. Can be used to update the request or delete other caches. It is a simple <code>Record</code> with the request id.</p><p>Here’s an example with some basic login:</p><p>Using a function instead of an object is supported but not recommended, as it’s better to just consume the response normally and write your own code after it. But it\`s here in case you need it.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Some requests id&#39;s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> profileInfoId;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userInfoId;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">auth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }&gt;(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;login&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { username, password },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cache: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      update: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Evicts the profile info cache, because now he is authenticated and the response needs to be re-fetched</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [profileInfoId]: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;delete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // An example that update the &quot;user info response cache&quot; when doing a login.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Imagine this request is a login one.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [userInfoResponseId]: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cachedValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cachedValue.state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cached&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Only needs to update if the response is cached</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ignore&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cachedValue.data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // This returned value will be returned in next calls to the cache.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cachedValue;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="cache-etag" tabindex="-1">cache.etag <a class="header-anchor" href="#cache-etag" aria-label="Permalink to &quot;cache.etag&quot;">​</a></h2>`,6),f=s('<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If the request should handle <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/ETag" target="_blank" rel="noreferrer"><code>ETag</code></a> and <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/If-None-Match" target="_blank" rel="noreferrer"><code>If-None-Match support</code></a>. Use a string to force a custom static value or true to use the previous response ETag.</p><p>To use <code>true</code> (automatic ETag handling), <code>interpretHeader</code> option must be set to <code>true</code>.</p><h2 id="cache-modifiedsince" tabindex="-1">cache.modifiedSince <a class="header-anchor" href="#cache-modifiedsince" aria-label="Permalink to &quot;cache.modifiedSince&quot;">​</a></h2>',4),_=s(`<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Use <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since" target="_blank" rel="noreferrer"><code>If-Modified-Since</code></a> header in this request. Use a date to force a custom static value or true to use the last cached timestamp.</p><p>If never cached before, the header is not set.</p><p>If <code>interpretHeader</code> is set and a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified" target="_blank" rel="noreferrer"><code>Last-Modified</code></a> header is sent to us, then value from that header is used, otherwise cache creation timestamp will be sent in <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since" target="_blank" rel="noreferrer"><code>If-Modified-Since</code></a>.</p><h2 id="cache-staleiferror" tabindex="-1">cache.staleIfError <a class="header-anchor" href="#cache-staleiferror" aria-label="Permalink to &quot;cache.staleIfError&quot;">​</a></h2><ul><li>Type: <code>number</code> or <code>boolean</code> or <code>StaleIfErrorPredicate&lt;R, D&gt;</code></li><li>Default: <code>true</code></li></ul><p>Enables cache to be returned if the response comes with an error, either by invalid status code, network errors and etc. You can filter the type of error that should be stale by using a predicate function.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If the response is treated as error because of invalid status code <em>(like when using <a href="#cache-cachepredicate">statusCheck</a>)</em>, and this ends up <code>true</code>, the cache will be preserved over the “invalid” request.</p><p>So, if you want to preserve the response, you can use the below predicate:</p></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customPredicate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Blocks staleIfError if has a response</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Note that, this still respects axios default implementation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // and throws an error, (but it keeps the response)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>Types:</p><ul><li><code>number</code> -&gt; the max time (in seconds) that the cache can be reused.</li><li><code>boolean</code> -&gt; <code>false</code> disables and <code>true</code> enables with infinite time if no value is present on <code>stale-if-error</code> in Cache-Control.</li><li><code>function</code> -&gt; a predicate that can return <code>number</code> or <code>boolean</code> as described above.</li></ul><h2 id="cache-override" tabindex="-1">cache.override <a class="header-anchor" href="#cache-override" aria-label="Permalink to &quot;cache.override&quot;">​</a></h2>`,12),m=s('<ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>This option bypasses the current cache and always make a new http request. This will not delete the current cache, it will just replace the cache when the response arrives.</p><p>Unlike as <code>cache: false</code>, this will not disable the cache, it will just ignore the pre-request cache checks before making the request. This way, all post-request options are still available and will work as expected.</p><h2 id="cache-hydrate" tabindex="-1">cache.hydrate <a class="header-anchor" href="#cache-hydrate" aria-label="Permalink to &quot;cache.hydrate&quot;">​</a></h2>',4),b=s(`<ul><li>Type: <code>undefined | ((cache: StorageValue) =&gt; void | Promise&lt;void&gt;)</code></li><li>Default: <code>undefined</code></li></ul><p>Asynchronously called when a network request is needed to resolve the data, but an older one <strong>and probably expired</strong> cache exists. Its with the current data <strong>BEFORE</strong> the network travel starts, so you can use it to temporarily update your UI with expired data before the network returns.</p><p>Hydrating your components with old data before the network resolves with the newer one is better than <em>flickering</em> your entire UI. This is even better when dealing with slower networks and persisted cache, like for mobile apps.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If the axios call will return cached data, meaning no network will be involved, the hydrate <strong>IS NOT CALLED</strong>, as the axios promise will be resolved instantly.</p></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Example of function that receives data and renders into a screen</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // This is called instantly if axios needs to make a network request</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache: {</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    hydrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cache.data)</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line has-focus"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// After the network lookup ends, we have fresh data and can</span></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// re-render the UI with confidence</span></span>
<span class="line highlighted has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response.data);</span></span></code></pre></div>`,5);function A(F,T,w,v,D,C){const e=t("Badge");return n(),h("div",null,[r,i(e,{text:"optional",type:"warning"}),o,i(e,{text:"optional",type:"warning"}),c,i(e,{text:"optional",type:"warning"}),d,i(e,{text:"optional",type:"warning"}),k,i(e,{text:"optional",type:"warning"}),E,i(e,{text:"optional",type:"warning"}),u,i(e,{text:"optional",type:"warning"}),g,i(e,{text:"optional",type:"warning"}),y,i(e,{text:"optional",type:"warning"}),f,i(e,{text:"optional",type:"warning"}),_,i(e,{text:"optional",type:"warning"}),m,i(e,{text:"optional",type:"warning"}),b])}const S=a(p,[["render",A]]);export{I as __pageData,S as default};
