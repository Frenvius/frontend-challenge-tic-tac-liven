/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from 'react';

const useGameState = () => {
	const FIRST_STEP = 0;
	const [firstPlayer, setFirstPlayer] = useState<boolean>(true);
	const [nextPlayer, setNextPlayer] = useState<boolean>(firstPlayer);
	const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
	const [stepNumber, setStepNumber] = useState(FIRST_STEP);

	const parsePlayer = (player: boolean) => {
		return player ? '❌' : '⭕';
	};

	const computeMove = (nextPlayer: boolean, squareId: number) => {
		currentBoard[squareId] = parsePlayer(nextPlayer);
		setCurrentBoard(currentBoard);
		setNextPlayer(!nextPlayer);
		setStepNumber(currentStepNumber => currentStepNumber + 1);
	};

	const restartGame = () => {
		setFirstPlayer(!nextPlayer);
		setNextPlayer(nextPlayer);
		setStepNumber(FIRST_STEP);
		setCurrentBoard(Array(9).fill(null));
	};

	return {
		nextPlayer,
		stepNumber,
		currentBoard,
		restartGame,
		parsePlayer,
		computeMove
	};
};

export default useGameState;
