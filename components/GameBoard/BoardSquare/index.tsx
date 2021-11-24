import React from 'react';

import style from '../style.module.scss';

const Square = ({
	id,
	value,
	onClick
}: {
	id: number;
	value: string;
	onClick: () => void;
}) => {
	return (
		<button
			data-testid={`square-${id}`}
			className={`${style['board__square']} ${
				value ? style['board__square--selected'] : ''
			}`}
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default Square;
