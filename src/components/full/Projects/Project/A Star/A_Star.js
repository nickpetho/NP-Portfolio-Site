import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import ReactTooltip from 'react-tooltip';
import AStarContents from './AStarContents';

function A_Star() {
	return (
		<MacWindow circleSize={7} title="A* Heuristic" closeTo="/projects">
			<AStarContents />
			<ReactTooltip />
		</MacWindow>
	);
}
//Ask Kenny to help with web build and placement

export default A_Star;
