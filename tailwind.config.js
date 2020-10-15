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
					Windows7Highlight: '#D7E8F8',
					MacTaskbar: 'rgba(113,128,150, .85)',
					MacWindow: '#D7D7D7',
					MacWindowBG: '#ECECEC',
					LinuxTaskbar: 'rgba(0,0,0, .75)'
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
				},
				macbutton: {
					50: '#F3F9FF',
					100: '#E7F2FF',
					200: '#C2DFFF',
					300: '#9ECCFF',
					400: '#55A5FE',
					500: '#0C7FFE',
					600: '#0B72E5',
					700: '#074C98',
					800: '#053972',
					900: '#04264C'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
