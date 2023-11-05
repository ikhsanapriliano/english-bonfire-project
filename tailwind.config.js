/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#476930",
        "primary-2": "#151B1F",
        "primary-3": "#374548",
        "primary-4": "#E8F7DD",
      },
      height: {
        "85vh": "85vh",
      },
      width: {
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
