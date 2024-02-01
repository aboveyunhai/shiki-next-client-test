/* esm.sh - esbuild bundle(unstorage@1.10.1) es2022 production */
import { Buffer as __Buffer$ } from "/v135/buffer@6.0.3/es2022/buffer.mjs";
import K from"/v135/destr@2.0.2/es2022/destr.mjs";function L(n){return!n||typeof n.then!="function"?Promise.resolve(n):n}function c(n,...t){try{return L(n(...t))}catch(u){return Promise.reject(u)}}function $(n){let t=typeof n;return n===null||t!=="object"&&t!=="function"}function C(n){let t=Object.getPrototypeOf(n);return!t||t.isPrototypeOf(Object)}function p(n){if($(n))return String(n);if(C(n)||Array.isArray(n))return JSON.stringify(n);if(typeof n.toJSON=="function")return p(n.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function R(){if(typeof __Buffer$===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}var P="base64:";function S(n){if(typeof n=="string")return n;R();let t=__Buffer$.from(n).toString("base64");return P+t}function j(n){return typeof n!="string"||!n.startsWith(P)?n:(R(),__Buffer$.from(n.slice(P.length),"base64"))}var E=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function A(n,t){if(t=v(t),!t)return n;let u={...n};for(let m of E)u[m]=(l="",...h)=>n[m](t+l,...h);return u.getKeys=(m="",...l)=>n.getKeys(t+m,...l).then(h=>h.map(w=>w.slice(t.length))),u}function f(n){return n?n.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function O(...n){return f(n.join(":"))}function v(n){return n=f(n),n?n+":":""}function _(n){return n}var D="memory",T=()=>{let n=new Map;return{name:D,options:{},hasItem(t){return n.has(t)},getItem(t){return n.get(t)??null},getItemRaw(t){return n.get(t)??null},setItem(t,u){n.set(t,u)},setItemRaw(t,u){n.set(t,u)},removeItem(t){n.delete(t)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function F(n={}){let t={mounts:{"":n.driver||T()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},u=e=>{for(let r of t.mountpoints)if(e.startsWith(r))return{base:r,relativeKey:e.slice(r.length),driver:t.mounts[r]};return{base:"",relativeKey:e,driver:t.mounts[""]}},m=(e,r)=>t.mountpoints.filter(i=>i.startsWith(e)||r&&e.startsWith(i)).map(i=>({relativeBase:e.length>i.length?e.slice(i.length):void 0,mountpoint:i,driver:t.mounts[i]})),l=(e,r)=>{if(t.watching){r=f(r);for(let i of t.watchListeners)i(e,r)}},h=async()=>{if(!t.watching){t.watching=!0;for(let e in t.mounts)t.unwatch[e]=await W(t.mounts[e],l,e)}},w=async()=>{if(t.watching){for(let e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},z=(e,r,i)=>{let s=new Map,a=o=>{let g=s.get(o.base);return g||(g={driver:o.driver,base:o.base,items:[]},s.set(o.base,g)),g};for(let o of e){let g=typeof o=="string",I=f(g?o:o.key),d=g?void 0:o.value,M=g||!o.options?r:{...r,...o.options},B=u(I);a(B).items.push({key:I,value:d,relativeKey:B.relativeKey,options:M})}return Promise.all([...s.values()].map(o=>i(o))).then(o=>o.flat())},y={hasItem(e,r={}){e=f(e);let{relativeKey:i,driver:s}=u(e);return c(s.hasItem,i,r)},getItem(e,r={}){e=f(e);let{relativeKey:i,driver:s}=u(e);return c(s.getItem,i,r).then(a=>K(a))},getItems(e,r){return z(e,r,i=>i.driver.getItems?c(i.driver.getItems,i.items.map(s=>({key:s.relativeKey,options:s.options})),r).then(s=>s.map(a=>({key:O(i.base,a.key),value:K(a.value)}))):Promise.all(i.items.map(s=>c(i.driver.getItem,s.relativeKey,s.options).then(a=>({key:s.key,value:K(a)})))))},getItemRaw(e,r={}){e=f(e);let{relativeKey:i,driver:s}=u(e);return s.getItemRaw?c(s.getItemRaw,i,r):c(s.getItem,i,r).then(a=>j(a))},async setItem(e,r,i={}){if(r===void 0)return y.removeItem(e);e=f(e);let{relativeKey:s,driver:a}=u(e);a.setItem&&(await c(a.setItem,s,p(r),i),a.watch||l("update",e))},async setItems(e,r){await z(e,r,async i=>{i.driver.setItems&&await c(i.driver.setItems,i.items.map(s=>({key:s.relativeKey,value:p(s.value),options:s.options})),r),i.driver.setItem&&await Promise.all(i.items.map(s=>c(i.driver.setItem,s.relativeKey,p(s.value),s.options)))})},async setItemRaw(e,r,i={}){if(r===void 0)return y.removeItem(e,i);e=f(e);let{relativeKey:s,driver:a}=u(e);if(a.setItemRaw)await c(a.setItemRaw,s,r,i);else if(a.setItem)await c(a.setItem,s,S(r),i);else return;a.watch||l("update",e)},async removeItem(e,r={}){typeof r=="boolean"&&(r={removeMeta:r}),e=f(e);let{relativeKey:i,driver:s}=u(e);s.removeItem&&(await c(s.removeItem,i,r),(r.removeMeta||r.removeMata)&&await c(s.removeItem,i+"$",r),s.watch||l("remove",e))},async getMeta(e,r={}){typeof r=="boolean"&&(r={nativeOnly:r}),e=f(e);let{relativeKey:i,driver:s}=u(e),a=Object.create(null);if(s.getMeta&&Object.assign(a,await c(s.getMeta,i,r)),!r.nativeOnly){let o=await c(s.getItem,i+"$",r).then(g=>K(g));o&&typeof o=="object"&&(typeof o.atime=="string"&&(o.atime=new Date(o.atime)),typeof o.mtime=="string"&&(o.mtime=new Date(o.mtime)),Object.assign(a,o))}return a},setMeta(e,r,i={}){return this.setItem(e+"$",r,i)},removeMeta(e,r={}){return this.removeItem(e+"$",r)},async getKeys(e,r={}){e=v(e);let i=m(e,!0),s=[],a=[];for(let o of i){let I=(await c(o.driver.getKeys,o.relativeBase,r)).map(d=>o.mountpoint+f(d)).filter(d=>!s.some(M=>d.startsWith(M)));a.push(...I),s=[o.mountpoint,...s.filter(d=>!d.startsWith(o.mountpoint))]}return e?a.filter(o=>o.startsWith(e)&&!o.endsWith("$")):a.filter(o=>!o.endsWith("$"))},async clear(e,r={}){e=v(e),await Promise.all(m(e,!1).map(async i=>{if(i.driver.clear)return c(i.driver.clear,i.relativeBase,r);if(i.driver.removeItem){let s=await i.driver.getKeys(i.relativeBase||"",r);return Promise.all(s.map(a=>i.driver.removeItem(a,r)))}}))},async dispose(){await Promise.all(Object.values(t.mounts).map(e=>x(e)))},async watch(e){return await h(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter(r=>r!==e),t.watchListeners.length===0&&await w()}},async unwatch(){t.watchListeners=[],await w()},mount(e,r){if(e=v(e),e&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort((i,s)=>s.length-i.length)),t.mounts[e]=r,t.watching&&Promise.resolve(W(r,l,e)).then(i=>{t.unwatch[e]=i}).catch(console.error),y},async unmount(e,r=!0){e=v(e),!(!e||!t.mounts[e])&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),r&&await x(t.mounts[e]),t.mountpoints=t.mountpoints.filter(i=>i!==e),delete t.mounts[e])},getMount(e=""){e=f(e)+":";let r=u(e);return{driver:r.driver,base:r.base}},getMounts(e="",r={}){return e=f(e),m(e,r.parents).map(s=>({driver:s.driver,base:s.mountpoint}))}};return y}async function H(n,t){t=v(t);let u=await n.getKeys(t),m={};return await Promise.all(u.map(async l=>{m[l.slice(t.length)]=await n.getItem(l)})),m}async function X(n,t,u=""){u=v(u),await Promise.all(Object.entries(t).map(m=>n.setItem(u+m[0],m[1])))}function W(n,t,u){return n.watch?n.watch((m,l)=>t(m,u+l)):()=>{}}async function x(n){typeof n.dispose=="function"&&await c(n.dispose)}var q={azureAppConfiguration:"unstorage/drivers/azure-app-configuration",azureCosmos:"unstorage/drivers/azure-cosmos",azureKeyVault:"unstorage/drivers/azure-key-vault",azureStorageBlob:"unstorage/drivers/azure-storage-blob",azureStorageTable:"unstorage/drivers/azure-storage-table",cloudflareKVBinding:"unstorage/drivers/cloudflare-kv-binding",cloudflareKVHTTP:"unstorage/drivers/cloudflare-kv-http",cloudflareR2Binding:"unstorage/drivers/cloudflare-r2-binding",fs:"unstorage/drivers/fs",fsLite:"unstorage/drivers/fs-lite",github:"unstorage/drivers/github",http:"unstorage/drivers/http",indexedb:"unstorage/drivers/indexedb",localStorage:"unstorage/drivers/localstorage",lruCache:"unstorage/drivers/lru-cache",memory:"unstorage/drivers/memory",mongodb:"unstorage/drivers/mongodb",netlifyBlobs:"unstorage/drivers/netlify-blobs",overlay:"unstorage/drivers/overlay",planetscale:"unstorage/drivers/planetscale",redis:"unstorage/drivers/redis",sessionStorage:"unstorage/drivers/session-storage",vercelKV:"unstorage/drivers/vercel-kv","cloudflare-kv-binding":"unstorage/drivers/cloudflare-kv-binding","cloudflare-kv-http":"unstorage/drivers/cloudflare-kv-http"};export{q as builtinDrivers,F as createStorage,_ as defineDriver,O as joinKeys,v as normalizeBaseKey,f as normalizeKey,A as prefixStorage,X as restoreSnapshot,H as snapshot};
//# sourceMappingURL=unstorage.mjs.map