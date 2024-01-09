/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
1;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grot: ['"Darker Grotesque"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ph: { max: "599px" },
        md: { min: "600px", max: "1024px" },
        cust_sm: { max: "1024px" },
        lg: { min: "1025px" },
        ltr: { min: "1026px", max: "1400px" },
        xlg: { min: "1450px" },
      },
    },
  },
  plugins: [],
};
