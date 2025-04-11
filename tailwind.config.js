/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artisan': {
          50: '#f8f5f2',
          100: '#eee8e2',
          200: '#dfd3c8',
          300: '#c9b8a8',
          400: '#b39c87',
          500: '#a4886f',
          600: '#967964',
          700: '#7d6453',
          800: '#675346',
          900: '#57473c',
        },
        'accent': {
          'terracotta': '#c76d4e',
          'olive': '#6e7c5f',
          'sage': '#b2b8a5',
          'cream': '#f2ebe3',
          'mocha': '#634e42',
          'sand': '#dccfc2',
        },
        'warm': {
          50: '#fff5f0',
          100: '#ffede4',
          200: '#ffdbc8',
          300: '#ffc2a3',
          400: '#ff9c6b',
          500: '#ff7733',
          600: '#ff5f1f',
          700: '#e94c00',
          800: '#c24004',
          900: '#9f390b',
        },
        'pixel': {
          'blue': '#4c71e6',
          'red': '#e64c4c',
          'green': '#4ce64c',
          'yellow': '#e6e64c',
          'purple': '#9e4ce6',
          'pink': '#e64c9e',
          'cyan': '#4ce6e6',
          'black': '#292929',
          'white': '#e6e6e6',
        }
      },
      fontFamily: {
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
        'pixel': ['"Press Start 2P"', 'cursive'],
        'body': ['"Roboto"', 'sans-serif'],
      },
      boxShadow: {
        'artisan': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'artisan-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'artisan-lg': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.5)',
        'pixel-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.5)',
        'pixel-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

