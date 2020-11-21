import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import PySnakeContents from './PySnakeContents';

function PySnake() {
	return (
		<MacWindow circleSize={7} title="PySnake" closeTo="/projects">
			<PySnakeContents />
		</MacWindow>
	);
}

export default PySnake;
