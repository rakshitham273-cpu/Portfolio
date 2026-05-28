module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(139, 92, 246, 0.25)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(79, 70, 229, 0.2), transparent 30%), radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.16), transparent 18%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
