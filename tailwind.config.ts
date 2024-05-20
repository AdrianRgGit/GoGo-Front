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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        "lato-light": ["Lato-Light", "sans-serif"],
        "lato-bold": ["Lato-Bold", "sans-serif"],
        "lato-black": ["Lato-Black", "sans-serif"],
        "lato-italic": ["Lato-Italic", "sans-serif"],
      },

      colors: {
        white: "#FEFAF6",
        cream: "#EADBC8",
        gold: "#FFC94A",
        blue: "#102C57",
        gray: "#33363F",
      },
    },
  },
  plugins: [],
};
export default config;
