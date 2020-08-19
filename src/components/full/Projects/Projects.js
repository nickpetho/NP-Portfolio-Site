import React from 'react';
import './Projects.css';
import DesktopIcon from '../Shared/DesktopIcon/MacDesktopIcon';
import Taskbar from './Taskbar/Taskbar';
import Banner from './Banner/Banner';

function Projects() {
	const folderIcon = require('../../../assets/Icons/MacFolder.png');

	return (
		<div className="h-screen project-page flex flex-col">
			<Banner />
			<div className="flex-grow relative">
				<div className="p-8 flex flex-col items-start">
					{/* Center text under folders like on Home page*/}
					<div>
						<DesktopIcon className={'mb-5'} label={'Waru'} imgSrc={folderIcon} />
					</div>
					<div>
						<DesktopIcon className={'mb-5'} label={'Maze Game'} imgSrc={folderIcon} />
					</div>
					<div>
						<DesktopIcon className={'mb-5'} label={'TAC'} imgSrc={folderIcon} />
					</div>
					<div>
						<DesktopIcon className={'mb-5'} label={'A* Heuristic'} imgSrc={folderIcon} />
					</div>
					<div>
						<DesktopIcon className={'mb-5'} label={'PySnake'} imgSrc={folderIcon} />
					</div>
				</div>
			</div>
			<Taskbar />
			{/* Center on the bottom of the page */}
		</div>
	);
}

export default Projects;
