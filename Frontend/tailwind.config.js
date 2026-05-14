export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    opacity: true,
  },
  theme: {
    extend: {
      colors: {
        zyra: '#ea2e0e',
        brand: {
          50: '#f5faff',
          100: '#eaf4ff',
          200: '#cfe5ff',
          300: '#a8ccff',
          400: '#72adff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
}
