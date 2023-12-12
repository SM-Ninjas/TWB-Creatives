/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#101828", // 900
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          DEFAULT: "#ff0037",//600
          p25: "#ff0047",//500
          p50: "#ffcccc",
          p1: "#ff80a7",
          p2: "#ff547a",
          p3: "#ff1a4d",
          p4: "#ff0047",
          p5: "#ff0037",
          p6: "#ff0027",
          p7: "#ff0018",
          p8: "#ff000c",
          p9: "#ff0005",
        },
        error: {
          DEFAULT: "#D92D20", // 600
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          DEFAULT: "#DC6803", // 600
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEF0C7",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          DEFAULT: "#039855", // 600
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#ECFDF3",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
      },
    },
  },
  plugins: [],
};
