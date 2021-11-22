import React from 'react';

import Board from '../GameBoard';
import useGameState from './data/gameState/useGameState';
import calculateWinner from './data/calculateWinner';

const Game: React.FC = () => {
	const {
		currentBoard,
		stepNumber,
		nextPlayer,
		computeMove
	} = useGameState();

	const handleSquareClick = (squareId: number) => {
		if (calculateWinner(currentBoard) || currentBoard[squareId]) {
			// Index over or square already handled
			return;
		}
		computeMove(nextPlayer, squareId);
	};

	const renderStatusMessage = () => {
		const winner = calculateWinner(currentBoard);
		if (winner) {
			return 'Winner: ' + winner;
		} else if (stepNumber === 9) {
			return 'Draw: Index over';
		} else {
			return 'Next player: ' + (nextPlayer === 'X' ? '❌' : '⭕');
		}
	};

	return (
		<>
			<h1>
				TIC-TAC-LIVEN{' '}
				<span role="img" aria-label="rocket">
					🚀
				</span>
			</h1>
			<div className="game">
				<div className="game-board">
					<Board
						squares={currentBoard}
						onSquareClick={handleSquareClick}
					/>
				</div>
				<div className="game-info">
					<div>Current step: {stepNumber}</div>
					<div>{renderStatusMessage()}</div>
				</div>
			</div>
		</>
	);
};

export default Game;