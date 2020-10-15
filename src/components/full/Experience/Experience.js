import React, { useState } from 'react';
import './Experience.css';
import Taskbar from './Taskbar/Taskbar';
import StartMenu from './StartMenu/StartMenu';
import OutsideClickHandler from 'react-outside-click-handler';
//import FolderIcon from './DesktopIcon/DesktopIcon';

function Experience() {
	const [ isStartMenuOpen, setIsStartMenuOpen ] = useState(false);

	function enableStartMenu() {
		setIsStartMenuOpen(true);
	}

	function disableStartMenu() {
		console.log('Disable Menu');
		setIsStartMenuOpen(false);
	}

	//const folderIcon = require('../../../assets/Icons/xpFolder.png');

	return (
		<div className="h-screen experience-page flex flex-col">
			<div className="flex-grow relative">
				<div className="px-6">
					<h1 className="underline text-6xl">Work Experience</h1>
					<div className="text-4xl font-semibold">AIB Technician</div>
					<div className="text-3xl italic">TecnoCap LLC (2016-2020)</div>
					<div className="text-2xl">
						- Prepared the plant for the annual AIB (American Institute of Baking) certification inspection
					</div>
					<div className="text-2xl"> - Developed an AIB certification technician worker's manual</div>
					<div className="text-2xl"> - Computerized inventory of storeroom and warehouse stock</div>
					<div className="text-2xl">
						- Assisted in improving the flow of raw material in the shearing department by designing new
						input/output routes
					</div>
				</div>
				<OutsideClickHandler onOutsideClick={disableStartMenu}>
					<StartMenu isOpen={isStartMenuOpen} />
				</OutsideClickHandler>
			</div>
			<Taskbar onLogoClick={enableStartMenu} />
		</div>
	);
}

export default Experience;
