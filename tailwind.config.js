module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F7F3F0",
          100: "#EDE4DC",
          200: "#D9C4B0",
          300: "#C5A484",
          400: "#A77E5C",
          500: "#8B4513", // warm earth brown
          600: "#7A3D11",
          700: "#68350F",
          800: "#562D0D",
          900: "#44250B",
          DEFAULT: "#8B4513", // warm earth brown
        },
        secondary: {
          50: "#F5F7F3",
          100: "#EAEFE5",
          200: "#D5DFCB",
          300: "#C0CFB1",
          400: "#AEBF9C",
          500: "#9CAF88", // sage green
          600: "#8A9B78",
          700: "#788768",
          800: "#667358",
          900: "#545F48",
          DEFAULT: "#9CAF88", // sage green
        },
        accent: {
          50: "#FDF6F1",
          100: "#FAEDE3",
          200: "#F4DBC7",
          300: "#EEC9AB",
          400: "#E8B78F",
          500: "#D2691E", // paprika orange
          600: "#BD5E1B",
          700: "#A85318",
          800: "#934815",
          900: "#7E3D12",
          DEFAULT: "#D2691E", // paprika orange
        },
        background: "#FEFCF8", // warm cream
        surface: "#F5F2ED", // subtle warmth
        text: {
          primary: "#2C1810", // rich dark brown
          secondary: "#6B5B4F", // medium brown
        },
        success: {
          50: "#F4F7F1",
          100: "#E9EFE3",
          200: "#D3DFC7",
          300: "#BDCFAB",
          400: "#A7BF8F",
          500: "#7BA05B", // natural green
          600: "#6F9052",
          700: "#638049",
          800: "#577040",
          900: "#4B6037",
          DEFAULT: "#7BA05B", // natural green
        },
        warning: {
          50: "#FDF9F1",
          100: "#FBF3E3",
          200: "#F7E7C7",
          300: "#F3DBAB",
          400: "#EFCF8F",
          500: "#E6A532", // golden yellow
          600: "#CF952D",
          700: "#B88528",
          800: "#A17523",
          900: "#8A651E",
          DEFAULT: "#E6A532", // golden yellow
        },
        error: {
          50: "#FBF4F1",
          100: "#F7E9E3",
          200: "#EFD3C7",
          300: "#E7BDAB",
          400: "#DFA78F",
          500: "#C65D32", // muted red-orange
          600: "#B2542D",
          700: "#9E4B28",
          800: "#8A4223",
          900: "#76391E",
          DEFAULT: "#C65D32", // muted red-orange
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(44, 24, 16, 0.1)',
        'card-hover': '0 6px 16px rgba(44, 24, 16, 0.15)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'micro': '200ms',
        'content': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      borderColor: {
        DEFAULT: '#F5F2ED', // surface color for softer borders
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}