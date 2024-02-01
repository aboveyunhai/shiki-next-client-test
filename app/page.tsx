import { ShikiRender } from '@/components/shiki-render';
import { ShikiUseEffect } from '@/components/shiki-use-effect';

const react_code = `
import React, { useState } from "react"
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
`.trim();

const vue_code = `
import { ref } from 'vue'

console.log("Hi! Shiki + Twoslash on CDN :)")

const count = ref(0)
//     ^?
`.trim()

export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center justify-between p-5">
      <div>Abuse</div>
      <ShikiRender code={react_code} lang={'tsx'} />
      <ShikiRender code={vue_code} lang={'ts'} />
      <div>useEffect</div>
      <ShikiUseEffect code={react_code} lang={'tsx'}/>
    </main>
  );
}
