import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#09090B", panel: "#121215", line: "#27272A", emerald: "#10B981" },
      fontFamily: { sans: ["var(--font-jakarta)"], mono: ["var(--font-mono)"] },
    },
  },
  plugins: [],
}

export default config
