import React from 'react';

const Square = ({
	id,
	value,
	onClick
}: {
	id: number;
	value: string;
	onClick: () => void;
}) => {
	const emojiValue = value ? (value === 'X' ? '❌' : '⭕') : value;

	return (
		<button
			data-testid={`square-${id}`}
			className="square"
			onClick={onClick}
		>
			{emojiValue}
		</button>
	);
};

export default Square;
