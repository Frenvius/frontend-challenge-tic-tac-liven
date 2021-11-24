import React from 'react';
import Square from './BoardSquare';

import style from './style.module.scss';

const Board = ({
	squares,
	onSquareClick
}: {
	squares: Array<string>;
	onSquareClick: (squareId: number) => void;
}) => {
	const renderSquare = (squareId: number) => {
		return (
			<Square
				id={squareId}
				value={squares[squareId]}
				onClick={() => onSquareClick(squareId)}
			/>
		);
	};

	return (
		<div className={style.board}>
			{squares.map((square: string, index: number) => {
				return renderSquare(index);
			})}
		</div>
	);
};

export default Board;
