import * as React from 'react';
import rules from '../../images/image-rules.svg';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	border: none;
	border-radius: 50%;
`;

export const Heading = styled.h1`
	display: flex;
	color: ${(props) => props.theme.colors.typography.dark};
	margin: 10px;
	font-size: 2rem;
	font-weight: 600;
	line-height: 0.8;
	letter-spacing: 0.4px;
`;

const Rules = () => {
	return (
		<Container>
			<Heading>RULES</Heading>
			<img
				src={rules}
				alt="Rules of the game: rock wins scissors, scissors wins paper, paper wins rock"
			/>
		</Container>
	);
};

export default Rules;
