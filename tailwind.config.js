// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          pulseCustom: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' },
          },
        },
        animation: {
          pulseCustom: 'pulseCustom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
    },
    plugins: [],
  }
  