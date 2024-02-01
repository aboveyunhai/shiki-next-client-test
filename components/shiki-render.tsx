/**
 * 
 * this is the abusing async component I want to try out.
 */


'use client';
import dynamic from 'next/dynamic';
// TODO: Replace with explicit versions in production
import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki/bundle/web';
import {
  createTransformerFactory,
  rendererRich,
  // @ts-expect-error
} from 'https://esm.sh/@shikijs/twoslash@latest/core';
// @ts-expect-error
import { createStorage } from 'https://esm.sh/unstorage@latest';
// @ts-expect-error
import indexedDbDriver from 'https://esm.sh/unstorage@latest/drivers/indexedb';
// @ts-expect-error
import { createTwoslashFromCDN } from 'https://esm.sh/twoslash-cdn@latest';

// ============= Initialization =============
// An example using unstorage with IndexedDB to cache the virtual file system
const storage = createStorage({
  driver: indexedDbDriver({ base: 'twoslash-cdn' }),
});

type Props = {
  code: string;
  lang: BundledLanguage;
};

async function prepare({ code, lang }: Props) {
  try {
    const twoslash = createTwoslashFromCDN({
      storage,
      compilerOptions: {
        lib: ['esnext', 'dom'],
      },
    });

    const transformerTwoslash = createTransformerFactory(twoslash.runSync)({
      renderer: rendererRich(),
    });

    await twoslash.prepareTypes(code);
    const html = await codeToHtml(code, {
      lang: lang,
      theme: 'vitesse-dark',
      transformers: [transformerTwoslash],
    });
    return html;
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return err.message;
    }
    return 'error';
  }
}

// the following violates React: aysnc component
const ShikiRender = dynamic<Props>(
  async () => {
    return async ({ code, lang }) => {
      const html = await prepare({ code, lang });
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    };
  },
  {
    loading: () => <div>loading</div>,
    ssr: false,
  }
);

ShikiRender.displayName = 'ShikiRender';

export { ShikiRender };
