/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,html}",
      "./index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          'lora': ['Lora', 'serif'],
          'opensans': ['Open Sans', 'sans-serif'],
          'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        fontSize: {
          'hero': ['96px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
          'heading-xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
          'heading-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
          'heading-md': ['32px', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
          'heading-sm': ['24px', { lineHeight: '1.3' }],
          'body-lg': ['20px', { lineHeight: '1.6' }],
          'body-md': ['18px', { lineHeight: '1.6' }],
          'body-sm': ['16px', { lineHeight: '1.5' }],
          'body-xs': ['14px', { lineHeight: '1.5' }],
        },
        fontWeight: {
          'light': '300',
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700',
          'extrabold': '800',
        },
      },
    },
    plugins: [],
  }