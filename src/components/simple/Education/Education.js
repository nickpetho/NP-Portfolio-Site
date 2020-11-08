import React from 'react';
import Taskbar from '../Shared/Taskbar/Taskbar';

function Education() {
	return (
		<div className="h-screen simple-education-page flex flex-col">
			<Taskbar />
			<div className="flex flex-col items-center m-auto">
				<h1 className="text-white text-6xl">Education</h1>
			</div>
		</div>
	);
}

export default Education;
