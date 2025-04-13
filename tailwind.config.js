module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Убедитесь, что пути к вашим файлам указаны правильно
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1E1E1E', // Фон
          surface: '#2C2C2C', // Поверхности (например, карточки)
          text: '#FFFFFF', // Основной текст
          muted: '#A3A3A3', // Вторичный текст
          accent: '#FF4C4C', // Акцентный цвет (например, кнопки)
          link: '#4C9AFF', // Цвет ссылок
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
