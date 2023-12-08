/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				Primary: '#f8faff',
				Secondary: '#0d274e',
				Tertiary: '#fd8d14'
			},
			backgroundImage: {
				'footer-layer': "url('/public/images/footer-bg-layer.png')"
			}
		},
		fontFamily: {
			primary: ['poppins', 'sans-serif']
		}
	},
	plugins: []
};
