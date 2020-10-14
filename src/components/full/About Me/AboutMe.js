import React, { useState } from 'react';
import './AboutMe.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';
import OutsideClickHandler from 'react-outside-click-handler';

function AboutMe() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function enableStartMenu() {
		setIsStartMenuOpen(true);
	}

	function disableStartMenu() {
		console.log('Disable Menu');
		setIsStartMenuOpen(false);
	}

	return (
		<div className="h-screen about-page flex flex-col">
			<div className="flex-grow relative">
				<div className="px-6">
					<div className="underline text-6xl">About Me</div>
					<div className="text-4xl italic">Nick Petho (nick.petho@gmail.com)</div>
					<div className="text-3xl pt-4">
						A web developer with a passion for frontend design and development.
					</div>
					<div className="text-2xl py-3">
						I am currently finishing my Bachelors degree in Computer Science with a minor in Mathematics at
						Youngstown State University.
					</div>
					<div className="text-2xl">
						I've always been interested in software development but once I started learning about web
						development I really fell in love with it. My favorite aspect about web development is frontend
						development. I really enjoying using frontend frameworks, especially React.js, and I'm always
						excited to learn new languages and technologies.
					</div>
					<div className="text-2xl pt-2">Here are some other things about me:</div>
					<ul className="text-xl">
						<li>- Member of the YSU Association for Computing Machinery (ACM)</li>
						<li>- Musician in various bands since highschool</li>
						<li>- Studying the Hungarian language (a magyar nyelv)</li>
					</ul>
				</div>
				<OutsideClickHandler onOutsideClick={disableStartMenu}>
					<StartMenu isOpen={isStartMenuOpen} />
				</OutsideClickHandler>
			</div>
			<Taskbar onLogoClick={enableStartMenu} />
		</div>
	);
}

export default AboutMe;
