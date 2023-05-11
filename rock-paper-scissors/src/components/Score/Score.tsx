import * as React from 'react';
import styled from 'styled-components';
import { ScoreCountContext } from '../../ScoreCountProvider';

export const Container = styled.div`
	box-sizing: border-box;
	background-color: white;
	color: ${(props) => props.theme.colors.typography.score};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 13px 24px;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const Heading = styled.h2`
	font-size: 0.7rem;
	letter-spacing: 1.6px;
	margin: 0;
`;

export const ScoreNumber = styled.h3`
	font-size: 2.7rem;
	margin: -5px;
	color: ${(props) => props.theme.colors.typography.dark};
`;

function Score() {
	const { score } = React.useContext(ScoreCountContext);

	return (
		<Container>
			<Heading>SCORE</Heading>
			<ScoreNumber>{score}</ScoreNumber>
		</Container>
	);
}

export default Score;
