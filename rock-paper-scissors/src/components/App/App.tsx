import * as React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import './App.css';

export const StyledContainer = styled.div`

	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	font-size: calc(10px + 2vmin);
`;

function App() {
	return (
		<StyledContainer>
			<Header />
		</StyledContainer>
	);
}

export default App;
