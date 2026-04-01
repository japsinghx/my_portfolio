/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Tahoma',
          'Verdana',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'Courier New',
          'Courier',
          'monospace',
        ],
      },
      colors: {
        win: {
          bg: '#d4d0c8',
          surface: '#ffffff',
          titlebar: '#0a246a',
          titletext: '#ffffff',
          accent: '#1e5bd8',
          borderLight: '#ffffff',
          borderDark: '#808080',
          borderShadow: '#404040',
          taskbar: '#c0c0c0',
          text: '#000000',
          link: '#0000ff',
          select: '#0a246a',
          selectText: '#ffffff',
          desktop: '#008080',
        }
      },
    },
  },
  plugins: [],
}
