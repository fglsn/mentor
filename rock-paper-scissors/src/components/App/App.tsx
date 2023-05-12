import * as React from 'react';
import ScoreCountProvider from '../../ScoreCountProvider';
import Header from '../Header';
import GameArea from '../GameArea/GameArea';
import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Modal from '../Modal';
import Rules from '../Rules';

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

export const ModalBtn = styled.button`
	width: 130px;
	height: 42px;
	position: absolute;
	bottom: 60px;
	background-color: transparent;
	color: ${(props) => props.theme.colors.main};
	font-size: 15px;
	letter-spacing: 3px;
	border-radius: ${(props) => props.theme.borderRadius};
	border: solid 2px ${(props) => props.theme.colors.outline};
	font-family: ${(props) => props.theme.fontFamily};
	text-align: center;
`;

const App = () => {
	const [isModalOpen, toggleIsModalOpen] = useToggle(false);

	return (
		<ScoreCountProvider>
			<StyledContainer>
				<Header />
				<GameArea />
				{isModalOpen ? (
					<Modal handleDismiss={toggleIsModalOpen}>
						<Rules />
					</Modal>
				) : (
					<ModalBtn onClick={toggleIsModalOpen}>
						RULES
					</ModalBtn>
				)}
			</StyledContainer>
		</ScoreCountProvider>
	);
};

export default App;
