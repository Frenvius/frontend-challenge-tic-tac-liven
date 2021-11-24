import { useState } from 'react';

/**
 * Game board state control
 * Note: The main state control of the application must be kept in this hook
 * @return {object} returns functions to be used externally on the board
 */

const useGameState = () => {
	const FIRST_STEP = 0;
	const [firstPlayer, setFirstPlayer] = useState<boolean>(true);
	const [nextPlayer, setNextPlayer] = useState<boolean>(firstPlayer);
	const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));
	const [stepNumber, setStepNumber] = useState(FIRST_STEP);

	/**
	 * Parse the received player and return it as emoji
	 * @return {string}
	 */
	const parsePlayer = (player: boolean) => {
		return player ? '❌' : '⭕';
	};

	/**
	 * Computes each player's action on the board
	 */
	const computeMove = (nextPlayer: boolean, squareId: number) => {
		currentBoard[squareId] = parsePlayer(nextPlayer);
		setCurrentBoard(currentBoard);
		setNextPlayer(!nextPlayer);
		setStepNumber(currentStepNumber => currentStepNumber + 1);
	};

	/**
	 * Resets board state at player's request
	 */
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
