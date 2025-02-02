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
    },
  },
  plugins: []
};
