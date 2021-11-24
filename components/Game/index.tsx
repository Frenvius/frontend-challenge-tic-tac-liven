import React from 'react';

import Board from '../GameBoard';
import useGameState from './data/gameState/useGameState';
import calculateWinner from './data/calculateWinner';
import style from './style.module.scss';

const Game: React.FC = () => {
	const {
		currentBoard,
		stepNumber,
		nextPlayer,
		restartGame,
		parsePlayer,
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
			return `Winner: ${winner}`;
		} else if (stepNumber === 9) {
			return 'Draw: Index over';
		} else {
			return `Next player: ${parsePlayer(nextPlayer)}`;
		}
	};

	return (
		<div className={style.game}>
			<h1 className={style['game__title']}>
				TIC-TAC-LIVEN{' '}
				<span role="img" aria-label="rocket">
					🚀
				</span>
			</h1>
			<Board squares={currentBoard} onSquareClick={handleSquareClick} />
			<div className={style['game__info']}>
				<p className={style['game__info__text']}>
					Current step: {stepNumber}
				</p>
				<p className={style['game__info__text']}>
					{renderStatusMessage()}
				</p>
				<button
					onClick={restartGame}
					data-testid={'reset'}
					className={style['game__info__reset-btn']}
				>
					Reset Game
				</button>
			</div>
		</div>
	);
};

export default Game;
