import React from 'react';
import Square from './BoardSquare';

const Board = ({ squares, onSquareClick }: any) => {
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
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

export default Board;
