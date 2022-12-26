import{_ as s,c as a,o as n,d as e}from"./app.b12a359e.js";const h=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[{"level":3,"title":"Support Table","slug":"support-table","link":"#support-table","children":[]},{"level":3,"title":"Read More","slug":"read-more","link":"#read-more","children":[]}]}],"relativePath":"guide/getting-started.md","lastUpdated":1672067944000}'),o={name:"guide/getting-started.md"},t=e(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><h1 align="center">This documentation is for the v0 axios and axios-cache-interceptor branch</h1><p><a href="https://axios-cache-interceptor.js.org/" target="_blank" rel="noreferrer">Click here to go to our latest version</a></p></div><h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ul><li><p><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> <code>(&gt;= 12)</code> <em>Lower version requires a custom build with polyfills.</em></p></li><li><p><a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios</a> <code>(&gt;= 0.21 and &lt; 1)</code> <em>Lower version requires a custom build with polyfills.</em></p></li></ul><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><p>The fastest way to get axios with cache set up and running is to install it with npm or yarn</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">axios@^0.27.2</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">axios-cache-interceptor@^0.10.7</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">axios@^0.27.2</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">axios-cache-interceptor@^0.10.7</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Development UMD build for ES2017+ (~12.6 KiB) --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/axios-cache-interceptor@0.10.7/dev/index.bundle.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">integrity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sha256-oTqUncNoX9DcUWIb5sLS2tscPHKqUPL0yLlOXSSXzSY=</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">crossorigin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">anonymous</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Production UMD build for ES5+ (~14.2 KiB) --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/axios-cache-interceptor@0.10.7/dist/index.bundle.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">integrity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sha256-Dc3BSxOZSDmoVoB11lhxkqH8VdBQjxWkHUmmDotiKJ4=</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">crossorigin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">anonymous</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>After installing, you can import the package and apply the interceptor to your axios instance, as shown below:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Axios </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const Axios = require(&#39;axios&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const Axios = window.axios;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import Axios from &#39;https://cdn.skypack.dev/axios&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setupCache</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios-cache-interceptor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const { setupCache } = require(&#39;axios-cache-interceptor&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const { setupCache } = window.AxiosCacheInterceptor;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import { setupCache } from &#39;https://cdn.skypack.dev/axios-cache-interceptor&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// same object, but with updated typings.</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setupCache</span><span style="color:#A6ACCD;">(Axios)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> req1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.example.com/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> req2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://api.example.com/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">res1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#A6ACCD;">([req1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> req2])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">res1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cached</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">res2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cached</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><p>Just the above is sufficient for most use cases. However, you can also customiza each cache behavior by passing a configuration object to the <code>setupCache</code> function. And you can also customize some behaviors each request by using the <code>cache</code> option in the request config.</p><h3 id="support-table" tabindex="-1">Support Table <a class="header-anchor" href="#support-table" aria-hidden="true">#</a></h3><p>Most of axios v0 breaking changes were about typing issues, so your version may work with one outside of this table. <strong>Axios and Axios Cache Interceptor v0 are not compatible with Axios and Axios Cache Interceptor v1</strong></p><blockquote><p><strong>Note</strong>: Axios was not defined as a <code>peerDependency</code> for all v0 versions, because it had a non-stable semver version. <a href="https://github.com/arthurfiorette/axios-cache-interceptor/issues/145#issuecomment-1042710481" target="_blank" rel="noreferrer">See #145 (Comment)</a></p></blockquote><table><thead><tr><th><a href="https://github.com/axios/axios/releases" target="_blank" rel="noreferrer">Axios</a></th><th><a href="https://github.com/arthurfiorette/axios-cache-interceptor/releases" target="_blank" rel="noreferrer">Axios Cache Interceptor</a></th></tr></thead><tbody><tr><td><code>&gt;= v0.27 &amp;&amp; &lt; v1.0.0</code></td><td><code>&gt;= v0.10.3</code></td></tr><tr><td><code>&gt;= v0.26</code></td><td><code>&gt;= v0.8.4</code></td></tr><tr><td><code>~ v0.25</code></td><td><code>~ v0.8.4</code></td></tr><tr><td><code>~ v0.24</code></td><td><code>&gt;= v0.5 &amp;&amp; &lt;= 0.8.3</code></td></tr><tr><td><code>~ v0.23</code></td><td><code>~ v0.4</code></td></tr><tr><td><code>~ v0.22</code></td><td><code>~ v0.3</code></td></tr><tr><td><code>v0.21</code></td><td><code>&lt;= v0.2</code></td></tr></tbody></table><h3 id="read-more" tabindex="-1">Read More <a class="header-anchor" href="#read-more" aria-hidden="true">#</a></h3><p>Some useful links to get you more familiar with the library:</p><ul><li><a href="./debugging">Debugging requests</a></li><li><a href="./storages">Storages</a></li><li><a href="./../config">Global config</a></li><li><a href="./../config/request-specifics">Per request config</a></li><li><a href="./../config/response-object">Response object</a></li></ul>`,18),l=[t];function p(r,c,i,y,D,d){return n(),a("div",null,l)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};
