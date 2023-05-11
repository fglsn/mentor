import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
	breakpoints: {
		values: {
			xs: 375,
			sm: 620,
			md: 900,
			lg: 1366,
			xl: 1700,
		},
	},
	fontFamily: 'Barlow Semi Condensed',

	borderRadius: '8px',

	colors: {
		typography: {
			dark: 'hsl(229, 25%, 31%)',
			score: 'hsl(229, 64%, 46%)',
		},
		main: 'white',
		secondary: 'hsl(229, 25%, 31%)',
		outline: 'hsl(217, 16%, 45%)',
	},

	gradients: {
		scissors:
			'linear-gradient(350deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
		paper: 'linear-gradient(350deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
		rock: 'linear-gradient(350deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
	},

	shadows: {
		scissors: '#c76b17',
		paper: '#2844c2',
		rock: '#a61632',
	},
};

export default defaultTheme;
