// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان التي أرسلتها
        custom1: "#70c1b3", // لون أخضر فاتح
        custom2: "#247ba0", // لون أزرق غامق
        custom3: "#ffe066", // لون أصفر
        custom4: "#f25f5c", // لون أحمر
        custom5: "#50514f", // لون رمادي غامق
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, #70c1b3, #247ba0, #ffe066, #f25f5c, #50514f)", // التدرج اللوني
      },
      boxShadow: {
        neumorphic: "20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff",
      },
    },
  },
  plugins: [],
};
