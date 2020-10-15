import React from 'react';
import './Home.css';
import Taskbar from '../Shared/Taskbar/Taskbar';

function SimpleHome() {
	return (
		<div className="h-screen simple-home-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">Nick Petho</h1>
				<div className="text-white text-3xl">Web/Software Developer</div>
			</div>
		</div>
	);
}

export default SimpleHome;
