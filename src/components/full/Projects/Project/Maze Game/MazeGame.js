import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import MazeContents from './MazeContents';

function MazeGame() {
	return (
		<MacWindow circleSize={7} title="Maze Game" closeTo="/projects">
			<MazeContents />
		</MacWindow>
	);
}

//Have Kenny help set up Maze Game web build

export default MazeGame;
