module.exports = {
  important: false,
  content: [
    "src/views/**/*.twig",
    "src/assets/js/**/*.js",
    'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        '2xl': "1280px"
      }
    },
    fontFamily: {
      sans: [
        'var(--font-main)',
        '-apple-system',
        'BlinkMacSystemFont',
      ],
      primary: "var(--font-main)"
    },
    extend: {
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
        'cyberpunk': 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 290px)',
      },
      colors: {
        // Cyberpunk Neon Colors
        'dark-bg': {
          'primary': 'var(--color-dark-bg-primary)',
          'secondary': 'var(--color-dark-bg-secondary)',
          'tertiary': 'var(--color-dark-bg-tertiary)',
          'surface': 'var(--color-dark-surface)',
        },
        'neon': {
          'blue': 'var(--color-neon-blue)',
          'purple': 'var(--color-neon-purple)',
          'pink': 'var(--color-neon-pink)',
          'green': 'var(--color-neon-green)',
        },
        'glow': {
          'blue': 'var(--color-glow-blue)',
          'purple': 'var(--color-glow-purple)',
          'pink': 'var(--color-glow-pink)',
          'green': 'var(--color-glow-green)',
        },
        'text': {
          'primary': 'var(--color-text-primary)',
          'secondary': 'var(--color-text-secondary)',
          'muted': 'var(--color-text-muted)',
        },
        // Original colors remapped
        'dark': 'var(--color-dark-bg-primary)',
        'darker': 'var(--color-dark-bg-secondary)',
        'danger': 'var(--color-neon-pink)',
      },
      spacing: {
        '3.75': '15px',
        '7.5': '30px',
        '58': '232px',
        '62': '248px',
        '100': '28rem',
        '116': '464px',
        '132': '528px',
        '200': '800px',
      },
      borderRadius: {
        'large': '22px',
        'big': '40px',
        'tiny': '3px',
        DEFAULT: '.75rem',
      },
      fontSize: {
        'icon-lg': '33px',
        'xxs': '10px',
        'xxxs': '8px',
        'title-size': '42px',
        '22px': '22px',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
      },
      boxShadow: {
        'default': '5px 10px 30px #2B2D340D;',
        'top': '0px 0px 10px #0000001A;',
        'md': '5px 10px 99px #2B2D340D',
        'dropdown': '0 4px 8px rgba(161, 121, 121, 0.07)',
        'light': '0px 4px 15px rgba(1, 1, 1, 0.06)',
        'huge': '0px 3px 6px #00000029',
        'progress': '0 5px 15px rgba(92, 213, 196, 0.4)',
        'mobile': 'rgb(0 0 0 / 9%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 18px, rgb(0 0 0 / 9%) -15px 10px 7px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -25px 20px 20px',
        // Cyberpunk shadows
        'neon-blue': 'var(--shadow-neon-blue)',
        'neon-purple': 'var(--shadow-neon-purple)',
        'neon-pink': 'var(--shadow-neon-pink)',
        'neon-green': 'var(--shadow-neon-green)',
        'cyberpunk': 'var(--shadow-box)',
      },
      width: {
        '18': '4.5rem',
        '22': '5.5rem',
        '74': '18.5rem',
        '76': '19rem',
        '78': '19.5rem',
      },
      height: {
        'banner': '200px',
        'lg-banner': '428px',
        'full-banner': '600px',
        '500': '500px',
        '460': '460px',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '-1': '-1',
      },
      screens: {
        'xxs': { 'min': '380px', 'max': '479px' },
        'xs': '480px',
      },
      backgroundOpacity: {
        '05': '0.05',
      },
      transitionProperty: {
        'height': 'height',
        'glow': 'box-shadow, text-shadow',
      },
      keyframes: {
        slideUpFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        slideDownFromBottom: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        // Cyberpunk animations
        neonPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px var(--color-glow-blue)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 20px var(--color-glow-blue), 0 0 30px var(--color-glow-blue)' },
        },
        glitchEffect: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        slideUpFromBottom: 'slideUpFromBottom .6s linear',
        slideDownFromBottom: 'slideDownFromBottom .6s linear',
        // Cyberpunk animations
        neonPulse: 'neonPulse 2s infinite',
        glitchEffect: 'glitchEffect 0.5s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
      },
      backgroundImage: {
        'gradient-blue-purple': 'var(--gradient-blue-purple)',
        'gradient-purple-pink': 'var(--gradient-purple-pink)',
        'gradient-pink-blue': 'var(--gradient-pink-blue)',
        'gradient-green-blue': 'var(--gradient-green-blue)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-dark-surface': 'var(--gradient-dark-surface)',
      },
    },
  },
  corePlugins: {
    outline: false,
  },
  plugins: [
    require('@salla.sa/twilight-tailwind-theme'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
