/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F4F7F6",
          100: "#E4ECE9",
          200: "#C8D9D3",
          300: "#9FBDB3",
          400: "#789F92",
          500: "#5B8276",
          600: "#46685E",
          700: "#39544C",
          800: "#2F443F",
          900: "#1F363D",
        },
        petrol: {
          800: "#233D47",
          900: "#182C34",
          950: "#101E24",
        },
        sand: {
          50: "#FAF8F5",
          100: "#F5F1EA",
          200: "#EAE3D5",
          300: "#DDD2BD",
          400: "#C8B698",
        },
        // Verde oficial do WhatsApp (botões de conversão)
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
          deep: "#128C7E",
        },
        // Verde pastel "sálvia suave" extraído do terninho da foto da Isabelle
        mint: {
          50: "#F4F7F1",
          100: "#E7EEE1",
          200: "#D3DFC9",
          300: "#BED0B0",
          400: "#AFC39E",
          500: "#9DB38C",
          600: "#849B73",
          700: "#6B825B",
        },
        bronze: {
          400: "#C8A27A",
          500: "#B89166",
          600: "#9E784F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(31, 54, 61, 0.08)",
        card: "0 14px 34px -12px rgba(31, 54, 61, 0.12)",
      },
    },
  },
  plugins: [],
};
