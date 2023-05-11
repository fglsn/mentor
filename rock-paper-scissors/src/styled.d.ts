import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: {
			values: {
				xs: number;
				sm: number;
				md: number;
				lg: number;
				xl: number;
			};
		};
		fontFamily: string;

		borderRadius: string;

		colors: {
			typography: {
				dark: string;
				score: string;
			};
			main: string;
			secondary: string;
			outline: string;
		};
	}
}
