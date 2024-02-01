/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    urlImports: [
      'https://esm.sh/@shikijs/twoslash@latest/core',
      'https://esm.sh/shiki@latest',
      'https://esm.sh/unstorage@latest',
      'https://esm.sh/unstorage@latest/drivers/indexedb',
      'https://esm.sh/twoslash-cdn@latest',
      // implicit
      'https://esm.sh/v135/',

      // ！！！implicit is danger ！！！
      // to make twoslash work in next.js
      'https://unpkg.com/',
      'https://esm.run/',
      'https://cdn.jsdelivr.net/npm/',
      'https://data.jsdelivr.com/v1/package/npm/',
      'https://typescript.azureedge.net/cdn/',
      // explict
      // 'https://typescript.azureedge.net/cdn/5.2.2/typescript/lib',
      // 'https://unpkg.com/vue@3/dist/vue.global.js',
      // 'https://unpkg.com/react@18/umd/react.production.min.js',
      // 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',

      // explicit
      // 'https://esm.sh/v135/idb-keyval@6.2.1/',
      // 'https://esm.sh/v135/destr@2.0.2/',
      // 'https://esm.sh/v135/buffer@6.0.3/',
      // 'https://esm.sh/v135/base64-js@1.5.1/es2022/base64-js.mjs',
      // 'https://esm.sh/v135/ieee754@1.2.1/es2022/ieee754.mjs',
      // 'https://esm.sh/v135/twoslash@0.1.0/es2022/twoslash.mjs',
      // 'https://esm.sh/v135/typescript@5.3.3/es2022/lib/tsserverlibrary.js',
      // 'https://esm.sh/v135/twoslash-cdn@0.1.0/es2022/twoslash-cdn.mjs',
      // 'https://esm.sh/v135/node_process.js',
      // 'https://esm.sh/v135/node_events.js',
      // 'https://esm.sh/v135/typescript@5.3.3/es2022/typescript.mjs',
    ],
  },
};

module.exports = nextConfig;
