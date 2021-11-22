import React from 'react';

const Square = ({ id, value, onClick }: any) => {
	return (
		<button
			data-testid={`square-${id}`}
			className="square"
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default Square;
