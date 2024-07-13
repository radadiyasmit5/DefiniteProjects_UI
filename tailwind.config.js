/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter-Black": ["Inter-Black"],
        "Inter-Bold": ["Inter-Bold"],
        "Inter-ExtraBold": ["Inter-ExtraBold"],
        "Inter-ExtraLight": ["Inter-ExtraLight"],
        "Inter-Light": ["Inter-Light"],
        "Inter-Medium": ["Inter-Medium"],
        "Inter-Regular": ["Inter-Regular"],
        "Inter-SemiBold": ["Inter-SemiBold"],
        "Inter-Thin": ["Inter-Thin"],
        "Unbounded-SemiBold" : ["Unbounded-SemiBold"]
      },
    },
  },
  plugins: [],
}