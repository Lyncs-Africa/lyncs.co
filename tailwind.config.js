/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        midGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
        midRed: "#F3EFE6",
        gradient: "#270B36",
        secondary: "#0915BA"
      },
      fontFamily: {
        fraunces: "Fraunces, serif",
        lato: "Lato, sans-serif",
        dmSans: "DM Sans, sans-serif !important",
        pacifico: "Pacifico, cursive",
        fontAwesome: "Font Awesome 6 Free",
        poppins: "Poppins, sans-serif",
        spectral: "Spectral, serif",
        quicksand: "Quicksand, sans-serif",
        lora: "Lora, serif",
        urbanist: "Urbanist, sans-serif",
        satoshiBold: "Satoshi-Bold, sans-serif",
        satoshiBlack: "Satoshi-Black, sans-serif",
        satoshiMedium: "Satoshi-Medium, sans-serif",
      },
      backgroundImage: {
        dotted: "url(/assets/images/footer_bg.webp)",
        space: "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(/images/space.jpg)",
        businesses: "linear-gradient(rgb(38 25 51 / 30%),rgb(25 25 51 / 30%)), url(/images/businesses.jpg)",
        individuals: "linear-gradient(rgb(38 25 51 / 30%),rgb(25 25 51 / 30%)), url(/images/individuals.jpg)",
        affiliates: "linear-gradient(rgb(38 25 51 / 30%),rgb(25 25 51 / 30%)), url(/images/affiliate.jpg)",
        'view-one': "linear-gradient(rgb(38 25 51 / 70%),rgb(25 25 51 / 70%)),url(/images/bg-individuals.jpg)",
        'view-two': "linear-gradient(rgb(38 25 51 / 70%),rgb(25 25 51 / 70%)),url(/images/20.jpg)",
        'view-three': "linear-gradient(rgb(38 25 51 / 70%),rgb(25 25 51 / 70%)),url(/images/bg-affilates.jpg)",
        stream: "linear-gradient(rgb(38 25 51 / 70%),rgb(25 25 51 / 70%)),url(/images/stream-share.jpg)",
        desktop: "url(/img/image-access-desktop.png)",
        future:
          "linear-gradient(rgb(33 15 47 / 70%),rgb(33 15 47 / 70%)), url(/images/shop.jpg);",
        heroMobile:
          "linear-gradient(rgb(49 31 60 / 40%), rgb(78 57 96 / 40%)), url(/images/access-mobile.jpg);",
        gradient: "linear-gradient(rgb(0 0 0 / 50%),rgb(0 0 0 / 50%)), url(/images/api.jpg)",
        pattern: "url(/images/forBusiness-products-pattern.svg)"
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        bounceTwo: {
          "0%, 4%, 10%, 16%, 20%": { transform: 'translateY(0)' },
          "8%": { transform: 'translateY(-20px)' },
          "12%": { transform: 'translateY(-10px)' },
          "100%": { transform: 'translateY(0)' }
        },
        wide: {
          "0%": { transform: 'scale(1)' },
          "50%": { transform: 'scale(1.2)' },
          "100%": { transform: 'scale(1)' }
        }
      },

      animation: {
        blink: "blink 0.7s infinite;",
        bounceTwo: "bounceTwo 8s ease infinite",
        wide: "wide 15s ease infinite"
      },
    },
  },
  plugins: [heroui()],
}
