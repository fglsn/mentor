import * as React from 'react';
import ScoreCountProvider from '../../ScoreCountProvider';
import Header from '../Header';
import GameArea from '../GameArea/GameArea';
import styled from 'styled-components';
import './App.css';

export const StyledContainer = styled.div`
	margin: 30px;
	max-width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	font-size: calc(10px + 2vmin);
`;

const App = () => {
	return (
		<ScoreCountProvider>
			<StyledContainer>
				<Header />
				<GameArea />
			</StyledContainer>
		</ScoreCountProvider>
	);
};

export default App;
