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
				<div className="px-6 3xl:px-12 3xl:pt-6 4xl:px-24">
					<h1 className="text-5xl 1xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline">Education</h1>
					<div className="text-3xl 1xl:text-4xl 3xl:text-6xl 4xl:text-8xl font-semibold">Youngstown State University (YSU), Youngstown, Ohio</div>
					<div className="text-2xl 1xl:text-3xl 3xl:text-5xl 4xl:text-7xl italic">
						Bachelor of Science in Computer Science, with a minor in Mathematics (2016-2020)
					</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">- Member of the Honors College</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">- Achieved Dean's List (Spring 2017, Spring 2019, Fall 2020)</div>
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
