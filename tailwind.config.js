/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
			"2xl": "2880px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#1E1521",
			white: "#F6F6F2",
			blue: "#4169E1",
			gold: "#E1B941",
			gray: "#808080",
			ivory: "#FFFFF0",
		},
		fontFamily: {
			display: ["Playfair Display", "serif"],
			body: ["Raleway", "sans-serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
