import * as React from 'react';
import IconButton from '../IconButton';
import styled from 'styled-components';
import { Variant } from '../../types';
import VariantSelector from '../VariantSelector/VariantSelector';
import VariantPlaceholder from '../VariantPlaceholder/VariantPlaceholder';
import Result from '../Result/Result';
import { ScoreCountContext } from '../../ScoreCountProvider';

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

export const PickedHand = styled.div`
	display: flex;
	height: 175px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const Label = styled.h4`
	color: ${(props) => props.theme.colors.main};
	margin: 0;
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 2px;
`;

const getRandomItem = (items: Variant[]) => {
	return items[(items.length * Math.random()) | 0];
};

const getResult = (userVariant: string, houseVariant: string) => {
	if (userVariant === houseVariant)
		return { message: 'EVEN!', score: 0 };
	if (
		(userVariant === 'rock' && houseVariant === 'scissors') ||
		(userVariant === 'scissors' && houseVariant === 'paper') ||
		(userVariant === 'paper' && houseVariant === 'rock')
	)
		return { message: 'YOU WIN', score: 1 };
	return { message: 'YOU LOSE', score: -1 };
};

const GameArea = () => {
	const { score, setScore } = React.useContext(ScoreCountContext);

	const [selectedVariant, setSelectedVariant] =
		React.useState<Variant | null>(null);

	const [selectedHouseVariant, setSelectedHouseVariant] =
		React.useState<Variant | null>(null);

	const [resultMessage, setResultMessage] = React.useState<
		string | null
	>(null);
	const handleSelect = (variant: Variant) => {
		setSelectedVariant(variant);
	};

	const handleReplay = () => {
		setSelectedVariant(null);
		setSelectedHouseVariant(null);
		setResultMessage(null);
	};

	React.useEffect(() => {
		if (!selectedVariant) return;

		const housePicked = getRandomItem([
			'rock',
			'scissors',
			'paper',
		]);
		const timerId = window.setInterval(() => {
			setSelectedHouseVariant(housePicked);
		}, 1000);

		return () => window.clearInterval(timerId);
	}, [selectedVariant]);

	React.useEffect(() => {
		if (!selectedVariant || !selectedHouseVariant) return;

		const result = getResult(
			selectedVariant,
			selectedHouseVariant
		);
		setResultMessage(result.message);
		const newScore = score + result.score;
		setScore(newScore);
		localStorage.setItem('score', JSON.stringify(newScore));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedHouseVariant, selectedVariant]);

	if (!selectedVariant)
		return <VariantSelector handleSelect={handleSelect} />;

	return (
		<Area>
			<Row>
				<PickedHand>
					<IconButton variant={selectedVariant} />
					<Label>YOU PICKED</Label>
				</PickedHand>
				<PickedHand>
					{!selectedHouseVariant ? (
						<VariantPlaceholder />
					) : (
						<IconButton variant={selectedHouseVariant} />
					)}
					<Label>THE HOUSE PICKED</Label>
				</PickedHand>
			</Row>
			{resultMessage && (
				<Result handleReplay={handleReplay}>
					{resultMessage}
				</Result>
			)}
		</Area>
	);
};

export default GameArea;
