import * as React from 'react';
import styled from 'styled-components';

export const Placeholder = styled.div`
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

const VariantPlaceholder = () => {
	return <Placeholder />;
};

export default VariantPlaceholder;
