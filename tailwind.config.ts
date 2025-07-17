import type { Config } from 'tailwindcss';
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Plugin to expose Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        spotlight: 'spotlight 6s ease-in-out infinite',
        scroll: 'scroll var(--animation-duration) var(--animation-direction) linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { transform: 'translate(-30%, -30%)' },
          '50%': { transform: 'translate(30%, 30%)' },
          '100%': { transform: 'translate(-30%, -30%)' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#F59E0B',
        // Add more custom colors if needed
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    addVariablesForColors,
  ],
};

export default config;
