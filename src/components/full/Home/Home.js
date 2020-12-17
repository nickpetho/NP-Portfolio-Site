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

	const folderIcon = require('../../../assets/Icons/windows10Folder.png');
	const documentIcon = require('../../../assets/Icons/document-icon.png');

	return (
		<div className="h-screen home-page flex flex-col">
			<div className="flex-grow relative">
				<div className="p-6 flex flex-col items-start">
					<Link to="/projects">
						<FolderIcon className={'mb-5'} label={'Projects'} imgSrc={folderIcon} />
					</Link>
					<Link to="/skills">
						<FolderIcon className={'mb-5'} label={'Skills'} imgSrc={folderIcon} />
					</Link>
					<Link to="/experience">
						<FolderIcon className={'mb-5'} label={'Experience'} imgSrc={folderIcon} />
					</Link>
					<Link to="/education">
						<FolderIcon className={'mb-5'} label={'Education'} imgSrc={folderIcon} />
					</Link>
					<Link to="/aboutMe">
						<FolderIcon className={'mb-5'} label={'About Me'} imgSrc={folderIcon} />
					</Link>
					<Link to="home/resume">
						<DocumentIcon className={'px-2'} label={'Resume'} imgSrc={documentIcon} />
					</Link>
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
