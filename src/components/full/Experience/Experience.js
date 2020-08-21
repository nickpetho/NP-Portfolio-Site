import React, { useState } from 'react';
import './Experience.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';

function Experience() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function handleLogoFocus() {
		setIsStartMenuOpen(true);
	}

	function handleLogoBlur() {
		setIsStartMenuOpen(false);
	}

	return (
		<div className="h-screen experience-page flex flex-col">
			<div className="flex-grow relative">
				<div>Work Experience</div>
				<StartMenu isOpen={isStartMenuOpen} />
			</div>
			<Taskbar onLogoFocus={handleLogoFocus} onLogoBlur={handleLogoBlur} />
		</div>
	);
}

export default Experience;
