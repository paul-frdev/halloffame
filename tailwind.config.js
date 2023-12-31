/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "410px",
      mobileMap: "420px",
      smallTablet: "731px",
      tablet: "985px",
      desktop: "1200px",
      isShowAllElems: "1310px",
      lDesktop: "1400px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        oswaldBold: "OswaldBold",
        SFPRegular: "SFProDisplayRegular",
        SFPSemibold: "SFProDisplaySemibold",
        SFPBold: "SFProDisplayBold",
      },
      boxShadow: {
        shadowBlue: "0px 7px 35px 0px #2451CE",
      },
      backgroundColor: {
        basic: "#0F0F0F",
        darkGray: "#292929",
        white: "#ffffff",
        blue: "#2451CE",
        gray: "#292929;",
      },
      borderColor: {
        errorInput: "#ED7272",
      },
      colors: {
        link: "#6f6f6f",
        basic: "#000000",
        error: "#ED7272",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        bg: "url('/images/boxing-back.png')",
        person: "url('/images/person.png')",
        boxingBack: "url('/images/back.png')",
        upcoming: "url('/images/upcomingEv.png')",
        ali: "url('/images/ali.png')",
        contactBg: "url('/images/contact.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
