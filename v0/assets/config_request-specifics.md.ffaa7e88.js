import{_ as o,c as t,a as e,d as a,e as n,b as l,o as p,r as c}from"./app.b12a359e.js";const S=JSON.parse('{"title":"Request specifics","description":"","frontmatter":{},"headers":[{"level":2,"title":"id","slug":"id","link":"#id","children":[]},{"level":2,"title":"cache","slug":"cache","link":"#cache","children":[]},{"level":2,"title":"cache.ttl","slug":"cache-ttl","link":"#cache-ttl","children":[]},{"level":2,"title":"cache.interpretHeader","slug":"cache-interpretheader","link":"#cache-interpretheader","children":[]},{"level":2,"title":"cache.methods","slug":"cache-methods","link":"#cache-methods","children":[]},{"level":2,"title":"cache.cachePredicate","slug":"cache-cachepredicate","link":"#cache-cachepredicate","children":[]},{"level":2,"title":"cache.update","slug":"cache-update","link":"#cache-update","children":[]},{"level":2,"title":"cache.etag","slug":"cache-etag","link":"#cache-etag","children":[]},{"level":2,"title":"cache.modifiedSince","slug":"cache-modifiedsince","link":"#cache-modifiedsince","children":[]},{"level":2,"title":"cache.staleIfError","slug":"cache-staleiferror","link":"#cache-staleiferror","children":[]},{"level":2,"title":"cache.override","slug":"cache-override","link":"#cache-override","children":[]}],"relativePath":"config/request-specifics.md","lastUpdated":1672067944000}'),r={name:"config/request-specifics.md"},i=a('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><h1 align="center">This documentation is for the v0 axios and axios-cache-interceptor branch</h1><p><a href="https://axios-cache-interceptor.js.org/" target="_blank" rel="noreferrer">Click here to go to our latest version</a></p></div><h1 id="request-specifics" tabindex="-1">Request specifics <a class="header-anchor" href="#request-specifics" aria-hidden="true">#</a></h1><p>Each request can have its own cache customization, by using the <code>cache</code> property. This way, you can have requests behaving differently from each other without much effort.</p><p>The inline documentation is self explanatory, but here is a shortly brief of what each property does:</p><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h2>',5),d=a('<ul><li>Type: <code>string</code></li><li>default: <em>(auto generated by the current <a href="./../guide/request-id#custom-generator">key generator</a>)</em></li></ul><p>You can override the request id used by this property. <a href="./../guide/request-id">See more about ids</a>.</p><h2 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-hidden="true">#</a></h2>',3),h=a(`<ul><li>Type: <code>false</code> or <code>Partial&lt;CacheProperties&lt;R, D&gt;&gt;</code>.</li><li>Default: <code>{}</code> <em>(Inherits from global options)</em></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This property is optional, and if not provided, the default cache properties will be used.</p></div><p>The cache option available through the request config is where all the cache customization happens.</p><p>Setting the <code>cache</code> property to <code>false</code> will disable the cache for this request.</p><p>This does not mean that the cache will be excluded from the storage, in which case, you can do that by deleting the storage entry:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Make a request with cache disabled.</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> requestId </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Delete the cache entry for this request.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(requestId)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="cache-ttl" tabindex="-1">cache.ttl <a class="header-anchor" href="#cache-ttl" aria-hidden="true">#</a></h2>`,7),y=a('<ul><li>Type: <code>number</code></li><li>Default: <code>1000 * 60 * 5</code> <em>(5 Minutes)</em></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When using <a href="#cache-interpretheader"><strong>interpretHeader</strong></a>, this value will only be used if the interpreter can&#39;t determine their TTL value to override this one.</p></div><p>The time until the cached value is expired in milliseconds.</p><p>If a function is used, it will receive the complete response and waits to return a TTL value</p><h2 id="cache-interpretheader" tabindex="-1">cache.interpretHeader <a class="header-anchor" href="#cache-interpretheader" aria-hidden="true">#</a></h2>',5),D=a('<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If activated, when the response is received, the <code>ttl</code> property will be inferred from the requests headers. As described in the MDN docs and HTML specification.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can override the default behavior by setting the <strong><a href="./../config#headerinterpreter">headerInterpreter</a></strong> when creating the cached axios client.</p></div><p>See the actual implementation of the <a href="https://github.com/arthurfiorette/axios-cache-interceptor/blob/main/src/header/interpreter.ts" target="_blank" rel="noreferrer"><code>interpretHeader</code></a> method for more information.</p><h2 id="cache-methods" tabindex="-1">cache.methods <a class="header-anchor" href="#cache-methods" aria-hidden="true">#</a></h2>',5),F=a('<ul><li>Type: <code>Method[]</code></li><li>Default: <code>[&quot;get&quot;]</code></li></ul><p>Specify what request methods should be cached.</p><p>Defaults to only cache <code>GET</code> methods.</p><h2 id="cache-cachepredicate" tabindex="-1">cache.cachePredicate <a class="header-anchor" href="#cache-cachepredicate" aria-hidden="true">#</a></h2>',4),u=a(`<ul><li>Type: <code>CachePredicate&lt;R, D&gt;</code></li><li>Default: <code>{}</code></li></ul><p>An object or function that will be tested against the response to test if it can be cached.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cachePredicate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Only cache if the response comes with a &quot;good&quot; status code</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">statusCheck</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">status</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* some calculation */</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Tests against any header present in the response.</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">containsHeaders</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">x-custom-header-3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* some calculation */</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// Check custom response body</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">responseMatch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Sample that only caches if the response is authenticated</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">auth</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">authenticated</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="cache-update" tabindex="-1">cache.update <a class="header-anchor" href="#cache-update" aria-hidden="true">#</a></h2>`,4),C=a(`<ul><li>Type: <code>CacheUpdater&lt;R, D&gt;</code></li><li>Default: <code>{}</code></li></ul><p>Once the request is resolved, this specifies what other responses should change their cache. Can be used to update the request or delete other caches. It is a simple <code>Record</code> with the request id.</p><p>Here&#39;s an example with some basic login:</p><p>Using a function instead of an object is supported but not recommended, as it&#39;s better to just consume the response normally and write your own code after it. But it\`s here in case you need it.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Some requests id&#39;s</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> profileInfoId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> userInfoId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> username</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> password </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">update</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Evicts the profile info cache, because now he is authenticated and the response needs to be re-fetched</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">profileInfoId</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// An example that update the &quot;user info response cache&quot; when doing a login.</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Imagine this request is a login one.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">userInfoResponseId</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">cachedValue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">cachedValue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cached</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// Only needs to update if the response is cached</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ignore</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">cachedValue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// This returned value will be returned in next calls to the cache.</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cachedValue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="cache-etag" tabindex="-1">cache.etag <a class="header-anchor" href="#cache-etag" aria-hidden="true">#</a></h2>`,6),A=a('<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>If the request should handle <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/ETag" target="_blank" rel="noreferrer"><code>ETag</code></a> and <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/If-None-Match" target="_blank" rel="noreferrer"><code>If-None-Match support</code></a>. Use a string to force a custom static value or true to use the previous response ETag.</p><p>To use <code>true</code> (automatic ETag handling), <code>interpretHeader</code> option must be set to <code>true</code>.</p><h2 id="cache-modifiedsince" tabindex="-1">cache.modifiedSince <a class="header-anchor" href="#cache-modifiedsince" aria-hidden="true">#</a></h2>',4),f=a(`<ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Use <code>If-Modified-Since</code> header in this request. Use a date to force a custom static value or true to use the last cached timestamp.</p><p>If never cached before, the header is not set.</p><p>If <code>interpretHeader</code> is set and a <code>Last-Modified</code> header is sent to us, then value from that header is used, otherwise cache creation timestamp will be sent in <code>If-Modified-Since</code>.</p><h2 id="cache-staleiferror" tabindex="-1">cache.staleIfError <a class="header-anchor" href="#cache-staleiferror" aria-hidden="true">#</a></h2><ul><li>Type: <code>number</code> or <code>boolean</code> or <code>StaleIfErrorPredicate&lt;R, D&gt;</code></li><li>Default: <code>true</code></li></ul><p>Enables cache to be returned if the response comes with an error, either by invalid status code, network errors and etc. You can filter the type of error that should be stale by using a predicate function.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If the response is treated as error because of invalid status code <em>(like when using <a href="#cache-cachepredicate">statusCheck</a>)</em>, and this ends up <code>true</code>, the cache will be preserved over the &quot;invalid&quot; request.</p><p>So, if you want to preserve the response, you can use the below predicate:</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> customPredicate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cache</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Blocks staleIfError if has a response</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Note that, this still respects axios default implementation</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and throws an error, (but it keeps the response)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>Types Explanations</p><ul><li><code>number</code> -&gt; the max time (in seconds) that the cache can be reused.</li><li><code>boolean</code> -&gt; <code>false</code> disables and <code>true</code> enables with infinite time.</li><li><code>function</code> -&gt; a predicate that can return <code>number</code> or <code>boolean</code> as described above.</li></ul><h2 id="cache-override" tabindex="-1">cache.override <a class="header-anchor" href="#cache-override" aria-hidden="true">#</a></h2>`,12),_=n("ul",null,[n("li",null,[l("Type: "),n("code",null,"boolean")]),n("li",null,[l("Default: "),n("code",null,"false")])],-1),g=n("p",null,"This option bypasses the current cache and always make a new http request. This will not delete the current cache, it will just replace the cache when the response arrives.",-1),m=n("p",null,[l("Unlike as "),n("code",null,"cache: false"),l(", this will not disable the cache, it will just ignore the pre-request cache checks before making the request. This way, all post-request options are still available and will work as expected.")],-1);function b(T,v,w,E,I,k){const s=c("Badge");return p(),t("div",null,[i,e(s,{text:"optional",type:"warning"}),d,e(s,{text:"optional",type:"warning"}),h,e(s,{text:"optional",type:"warning"}),y,e(s,{text:"optional",type:"warning"}),D,e(s,{text:"optional",type:"warning"}),F,e(s,{text:"optional",type:"warning"}),u,e(s,{text:"optional",type:"warning"}),C,e(s,{text:"optional",type:"warning"}),A,e(s,{text:"optional",type:"warning"}),f,e(s,{text:"optional",type:"warning"}),_,g,m])}const q=o(r,[["render",b]]);export{S as __pageData,q as default};
