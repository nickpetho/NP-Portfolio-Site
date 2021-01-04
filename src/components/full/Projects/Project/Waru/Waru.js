import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import WaruContents from './WaruContents';

function Waru() {
	return (
		<MacWindow circleSize={7} title="Waru" closeTo="/projects">
			<WaruContents />
		</MacWindow>
	);
}

export default Waru;
