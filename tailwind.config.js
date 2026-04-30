/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        space: {
          950: "#050816",
          900: "#080d21",
          800: "#10172f",
        },
        neon: {
          cyan: "#26f4ff",
          mint: "#4dffb5",
          violet: "#a875ff",
          amber: "#ffd166",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(38, 244, 255, 0.18)",
        violet: "0 0 40px rgba(168, 117, 255, 0.2)",
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(rgba(38,244,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(38,244,255,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
