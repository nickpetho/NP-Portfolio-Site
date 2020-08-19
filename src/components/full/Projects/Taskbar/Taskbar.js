import React from 'react';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';
import HomeIcon from '../../../../assets/Icons/HomeIcon.png';
import { Link } from 'react-router-dom';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-gray-500" {...props}>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-16 w-64 bg-gray-600 flex items-center justify-center">
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-14 w-16 p-2 mx-2" src={LinkedInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-20 w-20 p-2" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<Link to="/home">
					<img className="h-16 w-16 p-2" src={HomeIcon} alt="" />
				</Link>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
