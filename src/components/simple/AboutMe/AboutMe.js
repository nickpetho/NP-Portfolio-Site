import React from 'react';
import './AboutMe.css';
import Taskbar from '../Shared/Taskbar/Taskbar';

function AboutMe() {
	return (
		<div className="h-screen simple-about-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">About Me</h1>
			</div>
		</div>
	);
}

export default AboutMe;
