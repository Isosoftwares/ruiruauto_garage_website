/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#E63946", // Red requested
        secondary: "#FFD700", // Golden requested
        dark: "#0e111d", // Deep Navy Background
        "dark-lighter": "#1b2034", // Card Backgrounds
        light: "#ffffff",
        "gray-text": "#94a3b8", // Muted text for dark mode
      },
      backgroundImage: {
        // Keeping existing generic backgrounds for now, but will replace usage in components
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
});
