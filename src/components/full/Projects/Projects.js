import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import DesktopIcon from './DesktopIcon/DesktopIcon';
import Taskbar from './Taskbar/Taskbar';
import Banner from './Banner/Banner';

function Projects() {
	const folderIcon = require('../../../assets/Icons/MacFolder.png');

	const Icons = [
		{ comp: <DesktopIcon className={'mb-5'} label={'Waru'} imgSrc={folderIcon} />, to: '' },
		{ comp: <DesktopIcon className={'mb-5'} label={'Maze Game'} imgSrc={folderIcon} />, to: '' },
		{ comp: <DesktopIcon className={'mb-5'} label={'TAC'} imgSrc={folderIcon} />, to: '' },
		{ comp: <DesktopIcon className={'mb-5'} label={'A* Heuristic'} imgSrc={folderIcon} />, to: '' },
		{ comp: <DesktopIcon className={'mb-5'} label={'PySnake'} imgSrc={folderIcon} />, to: '' }
	];

	return (
		<div className="h-screen project-page flex flex-col">
			<Banner />
			<div className="flex-grow relative">
				<div className="p-8 flex flex-col items-start">
					{Icons.map((icon) => (
						<Link className="w-16" to={icon.to}>
							{icon.comp}
						</Link>
					))}
				</div>
			</div>
			<div className="flex justify-center">
				<Taskbar />
			</div>
		</div>
	);
}

export default Projects;
