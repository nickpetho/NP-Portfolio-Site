import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import TACContents from './TACContents';

function TAC() {
	return (
		<MacWindow circleSize={7} title="TAC" closeTo="/projects">
			<TACContents />
		</MacWindow>
	);
}

export default TAC;
