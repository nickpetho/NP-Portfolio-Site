import React from 'react';
import './Experience.css';
import Taskbar from '../Shared/Taskbar/Taskbar';

function Experience() {
	return (
		<div className="h-screen simple-experience-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">Experience</h1>
			</div>
		</div>
	);
}

export default Experience;
