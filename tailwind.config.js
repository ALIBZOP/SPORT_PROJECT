import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      fontFamily: {
        'IRANSans-web': ['IRANSans-web'],
        'FreeSans': ['FreeSans'],
        'FreeSansBold': ['FreeSansBold'],
        'IranNastaliq': ['IranNastaliq'],
        'IRANSans-Bold-web': ['IRANSans-Bold-web'],
        'IRANSans-Light-web': ['IRANSans-Light-web'],
        'IRANSans-Medium-web': ['IRANSans-Medium-web'],
        'IRANSans-UltraLight-web': ['IRANSans-UltraLight-web'],
        'farsi-number': ['Vazir'],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [ nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#000000", // or 50 to 900 DEFAULT
            light: {
              //... 50 to 900
              background: "#000000",
              DEFAULT: "#000000",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),]
};
