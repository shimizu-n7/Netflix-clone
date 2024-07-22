export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        108: "1.08", // 108%のスケールを追加
      },
      // 独自のアニメーションのduration追加もできる
      // transitionDuration: {
      //   10000: "10000ms",
      // },
      backgroundImage: {
        "gradual-gradient":
          "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), #000)",
      },
    },
  },
  plugins: [],
};
