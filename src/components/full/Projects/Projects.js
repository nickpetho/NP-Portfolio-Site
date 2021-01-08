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
	const folderIcon = require('../../../assets/Icons/MacFolder.svg');
	let match = useRouteMatch();

	const Icons = [
		{ comp: <DesktopIcon label={'Waru'} imgSrc={folderIcon} />, to: '/projects/waru' },
		{ comp: <DesktopIcon label={'Maze Game'} imgSrc={folderIcon} />, to: '/projects/maze_game' },
		{ comp: <DesktopIcon label={'TAC'} imgSrc={folderIcon} />, to: '/projects/TAC' },
		{ comp: <DesktopIcon label={'A* Heuristic'} imgSrc={folderIcon} />, to: '/projects/a_star' },
		{ comp: <DesktopIcon label={'PySnake'} imgSrc={folderIcon} />, to: '/projects/PySnake' }
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
				<div className="p-8 3xl:p-12 4xl:p-20 flex flex-col items-start">
					{Icons.map((icon) => (
						<Link className="w-16 3xl:w-32 4xl:w-48" to={icon.to}>
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
