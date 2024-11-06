/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roxo: {
          primario: '#A855F7',
          complementar: '#C084FC',
          detalhes: '#D8B4FE',
        },
        azul: {
          primario: '#3B82F6',
          complementar: '#60A5FA',
          detalhes: '#93C5FD',
        },
        rosado: {
          primario: '#EC4899',
          complementar: '#F472B6',
          detalhes: '#F9A8D4',
        },
        tema: {
          maior: '#FFFFFF',
          maior_medio: '#CACACA',
          meio: '#5E5E5E',
          menor_medio: '#3F3F3F',
          menor: '#1F1F1F',
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'shadow-2xl':	'0 25px 50px -12px rgb(0, 0, 0, 0.25)',
        'md': '0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -2px rgb(0, 0, 0, 0.1)'
      },
      fonte: {
        
      }
    },
  },
  plugins: [],
}
