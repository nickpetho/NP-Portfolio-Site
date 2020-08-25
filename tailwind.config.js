const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				gray: {
					...colors.gray,
					'700': '#666666',
					Windows10: '#525E73',
					Windows95: '#C1C1C1',
					Windows95Start: '#808080',
					Windows7: '#A5C2DF',
					Windows7Highlight: '#D7E8F8'
				},
				blue: {
					...colors.blue,
					XP: '#245EDC',
					Highlight: '#2494DC',
					XPStartHighlight: '#326BC5',
					XPLogOff: '#0843C3',
					W95Start: '#010A7F'
				},
				green: {
					...colors.green,
					XP_Start: '#46AA49',
					StartHighlight: '#228b20'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
