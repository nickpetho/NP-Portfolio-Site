import React, { useState } from 'react';
import './Home.css';
import Taskbar from './Taskbar/Taskbar';
import { Link } from 'react-router-dom';
import StartMenu from './Start Menu/StartMenu';
import DesktopIcon from '../Shared/DesktopIcon/DesktopIcon';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import AboutMe from '../About Me/AboutMe';
import Resume from '../Resume/Resume';

function Home() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function handleLogoFocus() {
		setIsStartMenuOpen(true);
	}

	function handleLogoBlur() {
		setIsStartMenuOpen(false);
	}

	const folderIcon = require('../../../assets/folder-icon.png');

	return (
		<div className="h-screen home-page flex flex-col">
			<div className="flex-grow relative">
				<div className="p-6 flex flex-col items-start">
					<Link to="/projects">
						<DesktopIcon className={'mb-5'} label={'Projects'} imgSrc={folderIcon} />
					</Link>
					<Link to="/skills">
						<DesktopIcon className={'mb-5'} label={'Skills'} imgSrc={folderIcon} />
					</Link>
					<Link to="/experience">
						<DesktopIcon className={'mb-5'} label={'Experience'} imgSrc={folderIcon} />
					</Link>
					<Link to="/education">
						<DesktopIcon className={'mb-5'} label={'Education'} imgSrc={folderIcon} />
					</Link>
					<Link to="/aboutMe">
						<DesktopIcon className={'mb-5'} label={'About Me'} imgSrc={folderIcon} />
					</Link>
					<Link to="/resume">
						<DesktopIcon className={'mb-5'} label={'Resume'} imgSrc={folderIcon} />
					</Link>
				</div>
				<StartMenu isOpen={isStartMenuOpen} />
			</div>
			<Taskbar onLogoFocus={handleLogoFocus} onLogoBlur={handleLogoBlur} />
		</div>
	);
}

export default Home;
