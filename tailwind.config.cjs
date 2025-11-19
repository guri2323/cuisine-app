/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"]
      },
      colors: {
        background: "#0B1224",
        primary: "#50F5A2",
        accent: "#7C8CFF",
        muted: "#A5B2C8"
      },
      boxShadow: {
        glow: "0 10px 50px rgba(80, 245, 162, 0.25)"
      }
    }
  },
  plugins: []
};
