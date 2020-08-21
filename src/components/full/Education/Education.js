import React, { useState } from 'react';
import './Education.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';

function Education() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function handleLogoFocus() {
		setIsStartMenuOpen(true);
	}

	function handleLogoBlur() {
		setIsStartMenuOpen(false);
	}

	return (
		<div className="h-screen education-page flex flex-col">
			<div className="flex-grow relative">
				<div>Education</div>
				<StartMenu isOpen={isStartMenuOpen} />
			</div>
			<Taskbar onLogoFocus={handleLogoFocus} onLogoBlur={handleLogoBlur} />
		</div>
	);
}

export default Education;
