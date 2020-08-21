import React from 'react';
import './Skills.css';
import Banner from './Banner/Banner';

function Skills() {
	// Add side taskbar
	return (
		<div className="h-screen skills-page flex flex-col">
			<Banner />
			<div className="flex-grow relative">Taskbar</div>
		</div>
	);
}

export default Skills;
