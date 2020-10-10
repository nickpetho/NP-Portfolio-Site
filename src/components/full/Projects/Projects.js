import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import './Projects.css';
import DesktopIcon from './DesktopIcon/DesktopIcon';
import Taskbar from './Taskbar/Taskbar';
import Banner from './Banner/Banner';
import Waru from './Project/Waru/Waru';
import MazeGame from './Project/Maze Game/MazeGame';
import TAC from './Project/TAC/TAC';
import A_Star from './Project/A Star/A_Star';
import PySnake from './Project/PySnake/PySnake';

function Projects() {
	const folderIcon = require('../../../assets/Icons/MacFolder.png');
	let match = useRouteMatch();

	const Icons = [
		{ comp: <DesktopIcon className={'mb-5'} label={'Waru'} imgSrc={folderIcon} />, to: '/projects/waru' },
		{ comp: <DesktopIcon className={'mb-5'} label={'Maze Game'} imgSrc={folderIcon} />, to: '/projects/maze_game' },
		{ comp: <DesktopIcon className={'mb-5'} label={'TAC'} imgSrc={folderIcon} />, to: '/projects/TAC' },
		{ comp: <DesktopIcon className={'mb-5'} label={'A* Heuristic'} imgSrc={folderIcon} />, to: '/projects/a_star' },
		{ comp: <DesktopIcon className={'mb-5'} label={'PySnake'} imgSrc={folderIcon} />, to: '/projects/PySnake' }
	];

	return (
		<div className="h-screen project-page flex flex-col">
			<Banner />
			<Switch>
				<Route path={`${match.path}/waru`} component={Waru} />
				<Route path={`${match.path}/maze_game`} component={MazeGame} />
				<Route path={`${match.path}/TAC`} component={TAC} />
				<Route path={`${match.path}/a_star`} component={A_Star} />
				<Route path={`${match.path}/PySnake`} component={PySnake} />
			</Switch>
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
