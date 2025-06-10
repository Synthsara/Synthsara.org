/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Synthsara-aligned color palette
        'sage-primary': '#3A7D7B',      // Teal - represents balance and harmony
        'sage-secondary': '#9C6B98',    // Purple - represents spiritual connection
        'sage-accent': '#E6A65D',       // Gold - represents divine essence
        'sage-dark': '#2A3B4C',         // Deep blue - represents depth and wisdom
        'sage-light': '#F7F3EB',        // Off-white - represents purity and clarity
        'sage-error': '#C75146',        // Rust red - represents grounding
        'sage-success': '#7BAE7F',      // Sage green - represents growth
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sacred-pattern': "url('/src/assets/sacred-geometry-pattern.svg')",
      }
    },
  },
  plugins: [],
}
