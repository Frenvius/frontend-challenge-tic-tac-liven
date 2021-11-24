import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Game from './';

describe('Renders board and test the game logic', () => {
	let mount: RenderResult;
	beforeEach(() => {
		mount = render(<Game />);
	});

	it('Renders game headings as expected', () => {
		const { getByText } = mount;
		expect(getByText('TIC-TAC-LIVEN')).toBeTruthy();
	});

	it('Expect "Current step: 0" to be found on screen', () => {
		const { getByText } = mount;
		expect(getByText('Current step: 0')).toBeTruthy();
	});

	it('Expect "Current step: 1" to be found on screen', () => {
		const { getByText, getByTestId } = mount;
		getByTestId('square-0').click();
		expect(getByText('Current step: 1')).toBeTruthy();
	});

	it('Expect "Current step: 1" when click twice on same square', () => {
		const { getByText, getByTestId } = mount;

		getByTestId('square-4').click(); // First click
		getByTestId('square-4').click(); // Second click

		expect(getByText('Current step: 1')).toBeTruthy();
	});

	it('Player ⭕ must win a round', () => {
		const { getByText, getByTestId } = mount;

		getByTestId('square-8').click(); // Player ❌
		getByTestId('square-6').click(); // Player ⭕
		getByTestId('square-3').click(); // Player ❌
		getByTestId('square-4').click(); // Player ⭕
		getByTestId('square-0').click(); // Player ❌
		getByTestId('square-2').click(); // Player ⭕

		expect(getByText('Winner: ⭕')).toBeTruthy();
	});

	it('Player ❌ must win a round', () => {
		const { getByText, getByTestId } = mount;
		
		getByTestId('square-0').click(); // Player ❌
		getByTestId('square-2').click(); // Player ⭕
		getByTestId('square-3').click(); // Player ❌
		getByTestId('square-8').click(); // Player ⭕
		getByTestId('square-6').click(); // Player ❌

		expect(getByText('Winner: ❌')).toBeTruthy();
	});

	it('Expect a draw game and restart game', () => {
		const { getByText, getByTestId } = mount;

		getByTestId('square-0').click(); // Player ❌
		getByTestId('square-4').click(); // Player ⭕
		getByTestId('square-2').click(); // Player ❌
		getByTestId('square-1').click(); // Player ⭕
		getByTestId('square-3').click(); // Player ❌
		getByTestId('square-8').click(); // Player ⭕
		getByTestId('square-5').click(); // Player ❌
		getByTestId('square-6').click(); // Player ⭕
		getByTestId('square-7').click(); // Player ❌

		expect(getByText('Draw: Index over')).toBeTruthy();
		getByTestId('reset').click();
		expect(getByText('Current step: 0')).toBeTruthy();
	});
});
