/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from 'react';

type Player = 'X' | 'O';

const useGameState = () => {
	const [nextPlayer, setNextPlayer] = useState<Player>('X');
	const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
	const [stepNumber, setStepNumber] = useState(0);

	const computeMove = (nextPlayer: Player, squareId: number) => {
		currentBoard[squareId] = nextPlayer;
		setCurrentBoard(currentBoard);
		nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
		setNextPlayer(nextPlayer);
		setStepNumber(currentStepNumber => currentStepNumber + 1);
	};

	return {
		nextPlayer,
		stepNumber,
		currentBoard,
		computeMove
	};
};

export default useGameState;
