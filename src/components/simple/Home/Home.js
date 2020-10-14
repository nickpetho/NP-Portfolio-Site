import React from 'react';
import './Home.css';
import Taskbar from './Taskbar/Taskbar';

function SimpleHome() {
	return (
		<div className="h-screen flex flex-col">
			<Taskbar />
		</div>
	);
}

export default SimpleHome;
