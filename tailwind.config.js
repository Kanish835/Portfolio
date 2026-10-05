/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#0d1117",
        surface: "#161b22",
        surfaceLight: "#1c2128",
        accent: "#58a6ff",
        accentDim: "#1f6feb",
        muted: "#8b949e",
        border: "#30363d",
        borderLight: "#3d444d",
        textPrimary: "#f0f6fc",
        textSecondary: "#c9d1d9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
