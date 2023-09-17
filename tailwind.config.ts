import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "suit-bold": ["suit-bold", "sans-serif"],
        "suit-normal": ["suit-normal", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "2px": "0px 2px 4px 0px rgba(207, 207, 207, 0.60)",
        "4px": "0px 4px 8px 0px rgba(207, 207, 207, 0.40)",
        "6px": "0px 6px 12px 0px rgba(207, 207, 207, 0.30)",
        "8px": "0px 8px 16px 0px rgba(207, 207, 207, 0.40)",
      },
      colors: {
        // Neutral
        wt: "#ffffff",
        "gy-900": "#202020",
        "gy-800": "#404040",
        "gy-700": "#555555",
        "gy-600": "#6A6A6A",
        "gy-500": "#808080",
        "gy-400": "#959595",
        "gy-300": "#AAAAAA",
        "gy-200": "#C0C0C0",
        "gy-180": "#C8C8C8",
        "gy-160": "#CFCFCF",
        "gy-140": "#D7D7D7",
        "gy-120": "#DEDEDE",
        "gy-100": "#E5E5E5",
        "gy-80": "#EBEBEB",
        "gy-60": "#F0F0F0",
        "gy-40": "#F5F5F5",
        "gy-20": "#FAFAFA",

        // Blue
        "bl-900": "#07272C",
        "bl-800": "#0E4F58",
        "bl-700": "#157683",
        "bl-600": "#1D9EAF",
        "bl-500": "#24C5DB",
        "bl-400": "#50D1E2",
        "bl-300": "#7BDCE9",
        "bl-200": "#A7E8F1",
        "bl-100": "#D3F3F8",

        // Orange
        "or-900": "#280D06",
        "or-800": "#541B0D",
        "or-700": "#802914",
        "or-600": "#AC371B",
        "or-500": "#D84522",
        "or-400": "#E3694B",
        "or-300": "#E98D76",
        "or-200": "#F0B2A2",
        "or-100": "#F7D6CF",

        // Danger
        "rd-900": "#2C0707",
        "rd-800": "#580E0E",
        "rd-700": "#841515",
        "rd-600": "#B01C1C",
        "rd-500": "#DC2323",
        "rd-400": "#E34F4F",
        "rd-300": "#EA7B7B",
        "rd-200": "#F1A7A7",
        "rd-100": "#F8D3D3",
      },
    },
  },
  plugins: [],
};
export default config;
