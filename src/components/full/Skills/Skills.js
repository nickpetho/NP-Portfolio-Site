import React from 'react';
import './Skills.css';
import Banner from './Banner/Banner';
import Taskbar from './Taskbar/Taskbar';

function Skills() {
	return (
		<div className="h-screen skills-page flex flex-col">
			<Banner />
			<Taskbar />
		</div>
	);
}

export default Skills;
