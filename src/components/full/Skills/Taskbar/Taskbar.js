import React from 'react';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';
import QuestionMark from '../../../../assets/Icons/LinuxQuestionMark.svg';
import HomeIcon from '../../../../assets/Icons/LinuxHome.svg';
import { Link } from 'react-router-dom';

const TaskIcon = ({ children, ...props }) => (
	<div
		className="h-20 3xl:h-32 4xl:h-56 w-full flex items-center justify-center hover:bg-gray-800 rounded-md"
		{...props}
	>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-full w-20 3xl:w-32 4xl:w-56 float-left bg-gray-LinuxTaskbar flex flex-col p-1 3xl:p-2 4xl:p-4">
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
					<img className="h-full p-2 3xl:p-3 4xl:p-5" src={LinkedInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<img className="h-full p-2 3xl:p-3 4xl:p-5" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<Link to="/home" aria-label="Home">
					<img className="h-full p-2 3xl:p-3 4xl:p-5" src={HomeIcon} alt="" />
				</Link>
			</TaskIcon>
			<TaskIcon>
				<Link to="/aboutMe" aria-label="About Me">
					<img className="h-full p-2 3xl:p-3 4xl:p-5" src={QuestionMark} alt="" />
				</Link>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
