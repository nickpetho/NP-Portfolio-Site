import React, { useState } from 'react';
import './AboutMe.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';

function AboutMe() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function handleLogoFocus() {
		setIsStartMenuOpen(true);
	}

	function handleLogoBlur() {
		setIsStartMenuOpen(false);
	}

	return (
		<div className="h-screen about-page flex flex-col">
			<div className="flex-grow relative">
				<div>About Me</div>
				<StartMenu isOpen={isStartMenuOpen} />
			</div>
			<Taskbar onLogoFocus={handleLogoFocus} onLogoBlur={handleLogoBlur} />
		</div>
	);
}

export default AboutMe;
