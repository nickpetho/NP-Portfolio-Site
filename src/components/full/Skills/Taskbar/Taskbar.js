import React from 'react';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';
import MagnifyingGlassIcon from '../../../../assets/Icons/MacMagnifyingGlass.png';
import HomeIcon from '../../../../assets/Icons/HomeIcon.png';
import { Link } from 'react-router-dom';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-20 w-32 flex items-center px-1 hover:bg-gray-800" {...props}>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-full w-20 float-left bg-black flex">
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-10 p-2" src={LinkenInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-10 p-2" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<Link to="/aboutMe">
					<img className="h-10 w-10 p-2" src={MagnifyingGlassIcon} alt="" />
				</Link>
			</TaskIcon>
			<TaskIcon>
				<Link to="/home">
					<img className="h-10 w-10 p-2" src={HomeIcon} alt="" />
				</Link>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
