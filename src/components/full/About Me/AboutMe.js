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
				<div className="px-6 3xl:px-12 3xl:pt-6 4xl:px-24 space-y-1 2xl:space-y-3">
					<h1 className="text-5xl 1xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline">About Me</h1>
					<div className="text-3xl 1xl:text-4xl 3xl:text-6xl 4xl:text-8xl italic">Nick Petho (nick.petho@gmail.com)</div>
					<div className="text-2xl 1xl:text-3xl 3xl:text-5xl 4xl:text-7xl pt-2 2xl:pt-4">
						A web developer with a passion for frontend design and development.
					</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">
						I have a Bachelors degree in Computer Science with a minor in Mathematics from Youngstown State
						University.
					</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">
						I've always been interested in software development but once I started learning about web
						development I really fell in love with it. My favorite aspect about web development is working
						on the frontend. I really enjoying using frontend frameworks, especially React.js, and I'm
						always excited to learn new languages and technologies.
					</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">Some other interesting things about me:</div>
					<ul className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl">
						<li>- Previous member of the YSU Association for Computing Machinery (ACM)</li>
						<li>- Musician in various bands since highschool</li>
						<li>- Studying the Hungarian language (a magyar nyelv)</li>
						<li>- Huge soccer fan, my favorite team is Tottenham Hotspur #COYS</li>
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
