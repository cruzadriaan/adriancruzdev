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
        typewriter: "typewriter 9s steps(28, end) infinite",
        glow: 'glow 2s ease-in-out infinite',
      'ping-slow': 'ping 2s linear infinite',
      'ping-slower': 'ping 3s linear infinite',
      },
      keyframes: {
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        'ping-slower': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { textShadow: '4px -1px 10px rgba(151,10,202,1)' },
          '50%': { textShadow: '0 0 20px rgba(59,130,246,1)' },
        },
        typewriter: {
          "0%, 100%": { width: "0ch" },
          "65%, 90%": { width: "28ch" },
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
