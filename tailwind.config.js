/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        birutua: "#010514",
        biru: "#081340",
        birublend: "#050D2E",
        birumuda: "#1030BA",
        birumudabgt: "#1085BA",
        ungu : "#4510BA"
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            background: "#020617",
          },
        },
      },
      extend:{
        color:{
          birublend: "#050D2E",
        }
      }
    }),
  ],
};

// Content harus diatur menjadi "./src/**/*.{js,ts,jsx,tsx,mdx}",
// agar dapat menentukan file dan direktori di mana Tailwind akan mencari kelas untuk menghasilkan CSS.
//Kalau contentnya engga masuk/salah, nanti tailwindnnya ga akan jalan
