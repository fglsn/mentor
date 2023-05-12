import * as React from 'react';

const localScore = localStorage.getItem('score');
let initialScore: number = localScore ? JSON.parse(localScore) : 0;

type ScoreCountContextType = {
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const ScoreCountContext =
	React.createContext<ScoreCountContextType>({
		score: initialScore,
		setScore: () => {},
	});

//When passing an object or array through context, always memoize it with useMemo.

const ScoreCountProvider = ({
	children,
}: {
	children: JSX.Element;
}) => {
	const [score, setScore] = React.useState(initialScore);

	const value = React.useMemo(() => {
		return { score, setScore };
	}, [score]);

	return (
		<ScoreCountContext.Provider value={value}>
			{children}
		</ScoreCountContext.Provider>
	);
};

export default ScoreCountProvider;
