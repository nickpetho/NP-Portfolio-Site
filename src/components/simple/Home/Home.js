import React from 'react';
import Section from '../Shared/Section/Section';
import Taskbar from '../Shared/Taskbar/Taskbar';

function SimpleHome() {
	return (
		<div className="h-screen flex">
			<Taskbar />
			<div className="overflow-auto w-full">
				<Section className="bg-transparent" title="Nick Petho" subtitle="Web/Software Developer" id="Home" />
				<Section title="Projects" id="Projects" />
				<Section title="Skills" id="Skills" />
				<Section title="Experience" id="Experience" />
				<Section title="Education" id="Education" />
				<Section title="About Me" subtitle="Web/Software Developer" id="About" />
			</div>
		</div>
	);
}

export default SimpleHome;
