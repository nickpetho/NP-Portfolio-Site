import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './Education.css';
import StartMenu from './StartMenu/StartMenu';
import Taskbar from './Taskbar/Taskbar';

function Education() {
	const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

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
				<div className="px-6 3xl:px-12 4xl:px-24">
					<h1 className="mt-4 text-5xl 1xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-10xl underline">Education</h1>
					<div className="pt-6 text-3xl 1xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-8xl font-semibold">Youngstown State University (YSU), Youngstown, Ohio</div>
					<div className="py-4 text-2xl 1xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl italic">
						Bachelor of Science in Computer Science, with a minor in Mathematics (2016-2020)
					</div>
					<div className="mb-3 text-xl 1xl:text-2xl 2xl:text-3xl 3xl:text-5xl 4xl:text-6xl">- Member of the Honors College</div>
					<div className="text-xl 1xl:text-2xl 2xl:text-3xl 3xl:text-5xl 4xl:text-6xl">- Achieved Dean's List (Spring 2017, Spring 2019, Fall 2020)</div>
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
