import React from 'react';
import './Projects.css';
import Taskbar from '../Shared/Taskbar/Taskbar';

function Projects() {
	return (
		<div className="h-screen simple-projects-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">Projects</h1>
			</div>
		</div>
	);
}

export default Projects;
