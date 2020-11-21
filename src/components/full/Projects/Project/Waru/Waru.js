import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';
import WaruContents from './WaruContents';

function Waru() {
	return (
		<MacWindow circleSize={7} title="Waru" closeTo="/projects">
			<WaruContents className="p-5" />
		</MacWindow>
	);
}

export default Waru;
