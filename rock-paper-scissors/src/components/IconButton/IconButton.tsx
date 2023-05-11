import * as React from 'react';
import { Variant } from '../../types';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import styled from 'styled-components';

const VARIANTS = {
	rock: rock,
	paper: paper,
	scissors: scissors,
};

interface Props {
	variant: Variant;
}

export const StyledButton = styled.button<Props>`
	width: 130px;
	height: 130px;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 50%;
	background-image: ${(props) =>
		props.theme.gradients[props.variant]};
	box-shadow: 0px 5px 0px
		${(props) => props.theme.shadows[props.variant]};
`;

export const Icon = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: #ffffff;
	box-shadow: inset 0px 5px 0px rgb(212 211 211 / 70%),
		inset 5px -5px 0px #ffffff;
`;

const IconButton = ({ variant }: { variant: Variant }) => {
	return (
		<StyledButton
			variant={variant}
			onClick={() => console.log({ variant })}
		>
			<Icon>
				<img alt={variant} src={VARIANTS[variant]} />
			</Icon>
		</StyledButton>
	);
};

export default IconButton;
