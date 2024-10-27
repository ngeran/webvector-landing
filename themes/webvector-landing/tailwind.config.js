/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		/* relevant files from the blog + theme */
        "../content/**/*.{html,md}",
        "../layouts/**/*.html",
		/* relevant files from the theme */
        "./layouts/**/*.{html,js}",
        "./content/**/*.{html,js}",
        /* also pick nested css from theme */
        "../../assets/css/*.css",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}