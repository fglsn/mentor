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
};

export default defaultTheme;
