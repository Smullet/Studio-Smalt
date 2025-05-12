import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryprimary-light": "var(--primaryprimary-light)",
        "relevant-places-631301framerappathens-gray": "var(--relevant-places-631301framerappathens-gray)",
        "relevant-places-631301framerappblack": "var(--relevant-places-631301framerappblack)",
        "relevant-places-631301framerappblack-60": "var(--relevant-places-631301framerappblack-60)",
        "relevant-places-631301framerappblack-white": "var(--relevant-places-631301framerappblack-white)",
        "relevant-places-631301framerappcod-gray": "var(--relevant-places-631301framerappcod-gray)",
        "relevant-places-631301framerappmischka": "var(--relevant-places-631301framerappmischka)",
        "relevant-places-631301framerapptorea-bay": "var(--relevant-places-631301framerapptorea-bay)",
        "relevant-places-631301framerappwhite": "var(--relevant-places-631301framerappwhite)",
        "relevant-places-631301framerappwild-sand": "var(--relevant-places-631301framerappwild-sand)",
        "relevant-places-631301framerappwoodsmoke": "var(--relevant-places-631301framerappwoodsmoke)",
        "secondarysecondary-light": "var(--secondarysecondary-light)",
        tertiarytertiary: "var(--tertiarytertiary)",
        "whites-white-12": "var(--whites-white-12)",
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
      fontFamily: {
        "body-emphasis-m": "var(--body-emphasis-m-font-family)",
        "body-regular-m": "var(--body-regular-m-font-family)",
        "deprecated-desktop-subtitle-regular": "var(--deprecated-desktop-subtitle-regular-font-family)",
        "relevant-places-631301-framer-app-inter-medium":
          "var(--relevant-places-631301-framer-app-inter-medium-font-family)",
        "relevant-places-631301-framer-app-inter-regular":
          "var(--relevant-places-631301-framer-app-inter-regular-font-family)",
        "relevant-places-631301-framer-app-semantic-heading-2":
          "var(--relevant-places-631301-framer-app-semantic-heading-2-font-family)",
        "relevant-places-631301-framer-app-semantic-heading-3":
          "var(--relevant-places-631301-framer-app-semantic-heading-3-font-family)",
        "relevant-places-631301-framer-app-semantic-link":
          "var(--relevant-places-631301-framer-app-semantic-link-font-family)",
        sans: [
          "var(--font-inter)",
          "var(--font-be-vietnam-pro)",
          "var(--font-epilogue)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
}

export default config
