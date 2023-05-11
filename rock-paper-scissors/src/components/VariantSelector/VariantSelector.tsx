import * as React from 'react';
import styled from 'styled-components';
import triangle from '../../images/bg-triangle.svg';
import IconButton from '../IconButton';
import { Variant } from '../../types';

export const Area = styled.main`
	width: 100%;
	height: 50%;
	display: flex;
	margin-top: 102px;
	flex-direction: column;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	display: flex;
	background-image: url(${triangle});
	background-position: center;
	background-size: 60%;
	background-repeat: no-repeat;
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
`;

const VariantSelector = ({
	handleSelect,
}: {
	handleSelect?: (variant: Variant) => void;
}) => {
	return (
		<Area>
			<Row>
				<IconButton
					variant="paper"
					handleSelect={handleSelect}
				/>
				<IconButton
					variant="scissors"
					handleSelect={handleSelect}
				/>
			</Row>
			<div>
				<IconButton
					variant="rock"
					handleSelect={handleSelect}
				/>
			</div>
		</Area>
	);
};

export default VariantSelector;
