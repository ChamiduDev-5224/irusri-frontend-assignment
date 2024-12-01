/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          bg: {
            main: "#9A9A9A",
            sub: "#F2F0F1",
            card: "#F0EEED",
            serbg: "#F0F0F0",
            lightRed: "#FF3333",
          },
          font: {
            black: "#000000",
            white: "#FFFFFF",
            discount: "#FF3333",
          },
        },
      },
    },
  },
  plugins: [],
};
