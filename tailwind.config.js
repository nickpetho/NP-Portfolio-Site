const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				gray: {
					...colors.gray,
					'700': '#666666',
					Windows: '#525E73'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
