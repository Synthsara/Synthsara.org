module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors representing Divine Chaos and Sacred Order
        'divine-chaos': {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbff',
          300: '#b4c6ff',
          400: '#8b9eff',
          500: '#6366f1', // Indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        'sacred-order': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Diamond Essence colors for ethical principles
        'diamond': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Sacred geometry proportions
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        'golden-large': '61.8%',
        'golden-small': '38.2%',
      },
      // Animation for Divine Chaos and Sacred Order interplay
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      // Sacred geometry patterns
      backgroundImage: {
        'flower-of-life': "url('/patterns/flower-of-life.svg')",
        'vesica-piscis': "url('/patterns/vesica-piscis.svg')",
        'torus': "url('/patterns/torus.svg')",
      },
    },
  },
  plugins: [],
}
