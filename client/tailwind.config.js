/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        sme: "350px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-1": "#476930",
        "primary-2": "#151B1F",
        "primary-3": "#374548",
        "primary-4": "#E8F7DD",
        "primary-5": "#7C96AB",
      },
      width: {
        1200: "1240px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
