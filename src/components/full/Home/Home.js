import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './Start Menu/StartMenu';
import FolderIcon from './DesktopIcons/FolderIcon';
import DocumentIcon from './DesktopIcons/DocumentIcon';
import OutsideClickHandler from 'react-outside-click-handler';

function Home() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function enableStartMenu() {
		setIsStartMenuOpen(true);
	}

	function disableStartMenu() {
		console.log('Disable Menu');
		setIsStartMenuOpen(false);
	}

	const folderIcon = require('../../../assets/Icons/windows10Folder.svg');
	const documentIcon = require('../../../assets/Icons/document-icon.svg');

	return (
		<div className="h-screen home-page flex flex-col">
			<div className="flex-grow relative">
				<div className="p-3 2xl:p-6 3xl:p-10 4xl:p-16 flex flex-col items-start">
					<Link to="/projects">
						<FolderIcon label={'Projects'} imgSrc={folderIcon} />
					</Link>
					<Link to="/skills">
						<FolderIcon label={'Skills'} imgSrc={folderIcon} />
					</Link>
					<Link to="/experience">
						<FolderIcon label={'Experience'} imgSrc={folderIcon} />
					</Link>
					<Link to="/education">
						<FolderIcon label={'Education'} imgSrc={folderIcon} />
					</Link>
					<Link to="/aboutMe">
						<FolderIcon label={'About Me'} imgSrc={folderIcon} />
					</Link>
					<a
						href="http://nwpetho.people.ysu.edu/Nicholas%20William%20Petho%20Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DocumentIcon label={'Resume'} imgSrc={documentIcon} />
					</a>
				</div>
				<OutsideClickHandler onOutsideClick={disableStartMenu}>
					<StartMenu isOpen={isStartMenuOpen} />
				</OutsideClickHandler>
			</div>
			<Taskbar onLogoClick={enableStartMenu} />
		</div>
	);
}

export default Home;
