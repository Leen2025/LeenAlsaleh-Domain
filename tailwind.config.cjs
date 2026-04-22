/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "'Sora'", "sans-serif"],
        body: ["'Sora'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"]
      },
      boxShadow: {
        luxe: "0 22px 70px rgba(0,0,0,0.48)",
        soft: "0 8px 28px rgba(203, 169, 102, 0.22)"
      },
      borderRadius: {
        soft: "1.25rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(203, 169, 102, 0.25)" },
          "50%": { boxShadow: "0 0 0 14px rgba(203, 169, 102, 0)" }
        }
      },
      animation: {
        float: "float 4.8s ease-in-out infinite",
        reveal: "reveal 650ms ease forwards",
        glow: "pulseGlow 2.8s infinite"
      }
    }
  },
  plugins: []
};
