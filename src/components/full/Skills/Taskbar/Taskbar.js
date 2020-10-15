import React from 'react';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';
import QuestionMark from '../../../../assets/Icons/LinuxQuestionMark.png';
import HomeIcon from '../../../../assets/Icons/LinuxHome.png';
import { Link } from 'react-router-dom';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-20 w-full flex items-center justify-center hover:bg-gray-800 rounded-md" {...props}>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-full w-20 float-left bg-gray-LinuxTaskbar flex flex-col p-1">
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-7 p-2" src={LinkenInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-7 p-2" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<Link to="/home">
					<img className="h-7 p-2" src={HomeIcon} alt="" />
				</Link>
			</TaskIcon>
			<TaskIcon>
				<Link to="/aboutMe">
					<img className="h-7 p-2" src={QuestionMark} alt="" />
				</Link>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
