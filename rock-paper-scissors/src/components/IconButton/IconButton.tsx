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

export const EmptyIcon = styled.div`
	width: 110px;
	height: 110px;
	box-sizing: border-box;
	background: rgb(14 27 49 / 51%);
	border-radius: 50%;
	margin-top: 15px;
	animation: animation 3s 1 ease both;
	@keyframes animation {
		from {
			background: rgb(14 27 49 / 51%);
		}
		to {
			background: rgb(91 105 129 / 53%);
		}
	}
`;

const IconButton = ({
	variant,
	handleSelect,
}: {
	variant: Variant;
	handleSelect?: (variant: Variant) => void;
}) => {
	if (!handleSelect) {
		return (
			<StyledButton variant={variant}>
				<Icon>
					<img alt={variant} src={VARIANTS[variant]} />
				</Icon>
			</StyledButton>
		);
	}

	return (
		<StyledButton
			variant={variant}
			onClick={() => handleSelect(variant)}
		>
			<Icon>
				<img alt={variant} src={VARIANTS[variant]} />
			</Icon>
		</StyledButton>
	);
};

export default IconButton;
