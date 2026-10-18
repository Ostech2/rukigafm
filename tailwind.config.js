/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0B0B0D',
          secondary: '#151519',
          card: '#18181E',
          cardHover: '#202028',
          subtle: '#1C1C23',
        },
        brand: {
          red: '#E5232E',
          redHover: '#C91C26',
          gold: '#F5B82E',
          goldHover: '#E0A522',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B8B8C2',
          muted: '#7E7E8E',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(229, 35, 46, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'soundwave': 'soundwave 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        soundwave: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
