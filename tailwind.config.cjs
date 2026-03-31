/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ["'Permanent Marker'", 'cursive'],
        hand:   ["'Patrick Hand'",    'cursive'],
        sans:   ["'Inter'",           'sans-serif'],
        mono:   ["'Courier New'",     'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float:   'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1deg)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
