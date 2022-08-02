import React from 'react';
import { Link } from 'react-router-dom';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';
import HomeIcon from '../../../../assets/Icons/HomeIcon.svg';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import MagnifyingGlassIcon from '../../../../assets/Icons/MacMagnifyingGlass.webp';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full w-24 3xl:w-40 flex 4xl:w-56 items-center justify-center px-1 hover:bg-slate-400" {...props}>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-20 3xl:h-32 4xl:h-48 bg-gray-MacTaskbar flex rounded-t-md 3xl:rounded-t-lg">
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
					<img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={LinkedInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<Link to="/aboutMe" aria-label="About Me">
					<img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={MagnifyingGlassIcon} alt="" />
				</Link>
			</TaskIcon>
			<TaskIcon>
				<Link to="/home" aria-label="Home">
					<img className="h-16 3xl:h-24 4xl:h-32 w-16 3xl:w-24 4xl:w-32 p-2" src={HomeIcon} alt="" />
				</Link>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
