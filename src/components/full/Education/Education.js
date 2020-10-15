import React, { useState } from 'react';
import './Education.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';
import OutsideClickHandler from 'react-outside-click-handler';

function Education() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function enableStartMenu() {
		setIsStartMenuOpen(true);
	}

	function disableStartMenu() {
		console.log('Disable Menu');
		setIsStartMenuOpen(false);
	}

	return (
		<div className="h-screen education-page flex flex-col">
			<div className="flex-grow relative">
				<div className="px-6">
					<h1 className="text-6xl underline">Education</h1>
					<div className="text-3xl">Youngstown State University (YSU), Youngstown, Ohio</div>
					<div className="text-2xl">Bachelor of Science in Computer Science, with a minor in Mathematics (2016-2020)</div>
					<div className="text-xl">- Member of the Honors College</div>
					<div className="text-xl">- Achieved Dean's List (Spring 2017, Spring 2019)</div>
				</div>
				<OutsideClickHandler onOutsideClick={disableStartMenu}>
					<StartMenu isOpen={isStartMenuOpen} />
				</OutsideClickHandler>
			</div>
			<Taskbar onLogoClick={enableStartMenu} />
		</div>
	);
}

export default Education;
