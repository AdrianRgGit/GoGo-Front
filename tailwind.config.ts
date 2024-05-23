import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sidenav-gradient":
          "radial-gradient(circle at 50% 0%, rgba(112, 255, 218, 0.5) 0%, #050B05 30%, #050B05 100%)",
      },

      fontFamily: {
        "lato-light": ["Lato-Light", "sans-serif"],
        "lato-bold": ["Lato-Bold", "sans-serif"],
        "lato-black": ["Lato-Black", "sans-serif"],
        "lato-italic": ["Lato-Italic", "sans-serif"],
      },

      colors: {
        white: "#FFFFFF",
        cyan: "#70FFDA",
        "dark-cyan": "#172D29",
        lime: "#D0FEAF",
        purple: "#D0AFFE",
        gray: "#8F9292",
        black1: "#141E1E",
        black2: "#0D1515",
        black3: "#050B05",
      },
    },
  },
  plugins: [],
};
export default config;
