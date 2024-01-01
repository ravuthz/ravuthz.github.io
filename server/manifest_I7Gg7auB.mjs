import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_DG8CcU0D.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.8.1 - MIT builder.io */\n!function(t,e,n,i,o,r,a,s,d,c,l,p){function u(){p||(p=1,\"/\"==(a=(r.lib||\"/~partytown/\")+(r.debug?\"debug/\":\"\"))[0]&&(d=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(s=setTimeout(f,1e4),e.addEventListener(\"pt0\",w),o?h(1):n.serviceWorker?n.serviceWorker.register(a+(r.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.style.display=\"block\",c.style.width=\"0\",c.style.height=\"0\",c.style.border=\"0\",c.style.visibility=\"hidden\",c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.8.1\":\"sandbox-sw.html?\"+Date.now()),e.querySelector(r.sandboxParent||\"body\").appendChild(c)}function f(n,o){for(w(),i==t&&(r.forward||[]).map((function(e){delete t[e.split(\".\")[0]]})),n=0;n<d.length;n++)(o=e.createElement(\"script\")).innerHTML=d[n].innerHTML,o.nonce=r.nonce,e.head.appendChild(o);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(s)}r=t.partytown||{},i==t&&(r.forward||[]).map((function(e){l=t,e.split(\".\").map((function(e,n,i){l=l[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:l[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ravuthz.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_I7Gg7auB.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_E1TuhXkY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_m2nxXmrV.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_YYVICCwl.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_yGM7dDlY.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_tQn81c2G.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_dyMJsw2C.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_4q0h5sx6.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_mPuR0Gxw.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_H9sDBI_j.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_Jq--Z_kh.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_0WTkJVSp.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_Xzgpe-o0.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_45Z-F8mc.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/first-post.md":"chunks/first-post_hhEZvksC.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_24JmX4De.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/second-post.md":"chunks/second-post_sOGDl_4_.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/third-post.md":"chunks/third-post_mS_Fz55f.mjs","/Users/ravuthz/Projects/blog/astro-blog-tailwincss/src/content/blog/using-mdx.mdx":"chunks/using-mdx_S58VwXm3.mjs","@astrojs/solid-js/client.js":"_astro/client.4JhjcaiZ.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.PqPxlhdS.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/_astro/client.4JhjcaiZ.js","/_astro/client.gSoe9Upx.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/assets/js/main.js","/assets/img/api-development-black.svg","/assets/img/api-development-white.svg","/assets/img/bg-cta.jpg","/assets/img/bg-hero.jpg","/assets/img/blog-author.jpg","/assets/img/experience-figure.png","/assets/img/icon-award.svg","/assets/img/icon-close.svg","/assets/img/icon-content-black.svg","/assets/img/icon-content-white.svg","/assets/img/icon-design-black.svg","/assets/img/icon-design-white.svg","/assets/img/icon-development-black.svg","/assets/img/icon-development-white.svg","/assets/img/icon-email-black.svg","/assets/img/icon-email-white.svg","/assets/img/icon-graphics-black.svg","/assets/img/icon-graphics-white.svg","/assets/img/icon-happy.svg","/assets/img/icon-mobile-black.svg","/assets/img/icon-mobile-white.svg","/assets/img/icon-project.svg","/assets/img/icon-puzzle.svg","/assets/img/icon-woo.png","/assets/img/icon-wp.png","/assets/img/logo-amazon.svg","/assets/img/logo-apple.svg","/assets/img/logo-coca-cola.svg","/assets/img/logo-fedex.svg","/assets/img/logo-microsoft.svg","/assets/img/logo-netflix.svg","/assets/img/logo-old.svg","/assets/img/logo-spotify.svg","/assets/img/logo-stripe.svg","/assets/img/logo.svg","/assets/img/map.png","/assets/img/portfolio-apple.jpeg","/assets/img/portfolio-fedex.jpeg","/assets/img/portfolio-microsoft.jpeg","/assets/img/portfolio-stripe.jpeg","/assets/img/post-01.png","/assets/img/post-02.png","/assets/img/post-03.png","/assets/img/social.jpg","/index.html","/rss.xml","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
