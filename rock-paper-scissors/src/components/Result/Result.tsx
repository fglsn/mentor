import * as React from 'react';
import styled from 'styled-components';

export const OutcomeMessage = styled.h2`
	font-size: 55px;
	color: ${(props) => props.theme.colors.main};
	margin-top: 51px;
	margin-bottom: 25px;
	text-align: center;
`;

export const PlayAgain = styled.button`
	width: 220px;
	height: 48px;
	background-color: ${(props) => props.theme.colors.main};
	color: ${(props) => props.theme.colors.typography.dark};
	font-size: 15px;
	letter-spacing: 3px;
	border-radius: ${(props) => props.theme.borderRadius};
	border: none;
	font-family: ${(props) => props.theme.fontFamily};
	text-align: center;
`;

function Result({
	handleReplay,
	children,
}: {
	handleReplay: () => void;
	children: string;
}) {
	return (
		<div>
			<OutcomeMessage>{children}</OutcomeMessage>
			<PlayAgain onClick={handleReplay}>PLAY AGAIN</PlayAgain>
		</div>
	);
}

export default Result;
