/* esm.sh - esbuild bundle(unstorage@1.10.1/drivers/utils) es2022 production */
function u(r){return r}function t(r){return r?r.replace(/[/\\]/g,":").replace(/^:|:$/g,""):""}function p(...r){return r.map(t).filter(Boolean).join(":")}function o(r,e,n){return new Error(`[unstorage] [${r}] ${e}`,n)}function c(r,e){return Array.isArray(e)?o(r,`Missing some of the required options ${e.map(n=>"`"+n+"`").join(", ")}`):o(r,`Missing required option \`${e}\`.`)}export{o as createError,c as createRequiredError,u as defineDriver,p as joinKeys,t as normalizeKey};
//# sourceMappingURL=utils.js.map