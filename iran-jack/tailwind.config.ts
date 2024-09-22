import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // margin: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /md:.*/,
    },
    {
      pattern: /lg:.*/,
    },
    {
      pattern: /border-.*/,
    },
    {
      pattern: /bg-.*/, 
    },
    {
      pattern: /text-.*/,
    },
    {
      pattern: /text-[].*/,
    },
    {
      pattern: /w-.*/,
    },
    {
      pattern: /h-.*/,
    },
    {
      pattern: /m-.*/,
    },
    {
      pattern: /-m-.*/,
    },
    {
      pattern: /my-.*/,
    },
    {
      pattern: /mt-.*/,
    },
    {
      pattern: /ml-.*/,
    },
    {
      pattern: /mr-.*/,
    },
    {
      pattern: /top.*/,
    },
    {
      pattern: /-top.*/,
    },
    {
      pattern: /flex.*/,
    },
    {
      pattern: /hidden.*/,
    },
    {
      pattern: /space-.*/,
    },
    {
      pattern: /rounded-.*/,
    },
    {
      pattern: /justify-.*/,
    },
    {
      pattern: /rotate-.*/,
    },
  ],
};

export default config;


