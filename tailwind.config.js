// Semua warna & font dari desain ada di sini. Ubah di sini, seluruh situs ikut berubah.
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: { 950: "#062C1B", 900: "#0B3B25", 800: "#145132", 700: "#246540" },
        gold: { 700: "#A87820", 600: "#BD8B31", 400: "#E1B855", 200: "#F3DEA2" },
        ivory: "#FCF9F1",
        warm: "#FFFDF8",
        ink: "#18241C",
        muted: "#697169",
        garis: "#E9E1CF",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
