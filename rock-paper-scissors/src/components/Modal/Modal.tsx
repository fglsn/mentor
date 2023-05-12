import * as React from 'react';
import closeIcon from '../../images/icon-close.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	position: fixed;
	inset: 0;
	display: grid;
	place-content: center;
	padding: 16px;
`;

export const Backdrop = styled.div`
	height: 100%;
	position: absolute;
	inset: 0;
	background: white;
`;

export const Dialog = styled.div`
	height: 100%;
	bottom: 80px;
	position: relative;
	background: white;
	border-radius: 8px;
	padding: 32px;
`;

export const CloseBtn = styled.div`
	position: absolute;
	bottom: -130px;
	left: 158px;
	padding: 16px;
	color: white;
	cursor: pointer;
`;

function Modal({
	handleDismiss,
	children,
}: {
	handleDismiss: () => void;
	children: JSX.Element;
}) {
	return (
		<Wrapper>
			<Backdrop />
			<Dialog>
				{children}
				<CloseBtn onClick={handleDismiss}>
					<img src={closeIcon} alt="Hide rules" />
				</CloseBtn>
			</Dialog>
		</Wrapper>
	);
}

export default Modal;
