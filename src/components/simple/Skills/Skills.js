import React from 'react';
import './Skills.css'
import Taskbar from '../Shared/Taskbar/Taskbar';

function Skills() {
	return (
		<div className="h-screen simple-skills-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">Skills</h1>
			</div>
		</div>
	);
}

export default Skills;
