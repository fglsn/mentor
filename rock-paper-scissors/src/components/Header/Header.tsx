import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.header`
	color: ${(props) => props.theme.colors.main};
	border: solid 3px ${(props) => props.theme.colors.outline};
	border-radius: ${(props) => props.theme.borderRadius};
	display: flex;
	flex-direction: row;
	padding: 10px;
	// align-items: center;
	// justify-content: start;
`;

const Header = () => {
	return (
		<Container>
			<h1>ROCK PAPER SCISSORS</h1>
		</Container>
	);
};

export default Header;
