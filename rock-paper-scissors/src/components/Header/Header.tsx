import * as React from 'react';
import styled from 'styled-components';
import Score from '../Score';

export const Container = styled.header`
	box-sizing: border-box;
	width: 100%;
	height: 110px;
	color: ${(props) => props.theme.colors.main};
	border: solid 3px ${(props) => props.theme.colors.outline};
	border-radius: ${(props) => props.theme.borderRadius};
	display: flex;
	flex-direction: row;
	padding: 13px;
	align-items: center;
	justify-content: space-between;
`;

export const Heading = styled.h1`
	display: flex;
	color: ${(props) => props.theme.colors.main};
	margin: 10px;
	font-size: 1.3rem;
	font-weight: 600;
	line-height: 0.8;
	letter-spacing: 0.4px;
`;

const Header = () => {

	return (
		<Container>
			<Heading>
				ROCK
				<br />
				PAPER
				<br />
				SCISSORS
			</Heading>
			<Score />
		</Container>
	);
};

export default Header;
