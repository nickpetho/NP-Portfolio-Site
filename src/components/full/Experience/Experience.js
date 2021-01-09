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
				<div className="px-6 3xl:px-12 3xl:pt-6 4xl:px-24">
					<h1 className="text-5xl 1xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline">Work Experience</h1>
					<div className="text-3xl 1xl:text-4xl 3xl:text-6xl 4xl:text-8xl font-semibold">AIB Technician</div>
					<div className="text-2xl 1xl:text-3xl 3xl:text-5xl 4xl:text-7xl italic">TecnoCap LLC (2016-2020)</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-5xl">
						- Prepared the plant for the annual AIB (American Institute of Baking) certification inspection
					</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-5xl"> - Developed an AIB certification technician worker's manual</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-5xl"> - Computerized inventory of storeroom and warehouse stock</div>
					<div className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-5xl">
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
