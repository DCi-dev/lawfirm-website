/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			'2xl': '2880px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#2f2e2e',
			white: '#f3f3f3',
			gold: '#b7a484',
		},
		fontFamily: {
			display: ['Playfair Display', 'serif'],
			body: ['Raleway', 'sans-serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'hero-image': "url('/assets/images/palatul-culturii-iasi.jpg')",
			},
		},
	},
	plugins: [],
};
