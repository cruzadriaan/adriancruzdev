export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        typewriter: "typewriter 9s steps(21, end) infinite",
      },
      keyframes: {
        typewriter: {
          "0%, 100%": { width: "0ch" },
          "65%, 90%": { width: "21ch" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
}
