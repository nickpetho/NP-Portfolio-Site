import React from 'react';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import WindowsXPLogo from '../../../../assets/Icons/WindowsXpLogo.webp';
import './Taskbar.css';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-blue-Highlight ml-3" {...props}>
		{children}
	</div>
);

const StartIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-green-StartHighlight start" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoClick }) {
	return (
		<div className="h-12 3xl:h-20 4xl:h-32 bg-blue-XP flex items-center relative">
			<div className="h-12 3xl:h-20 4xl:h-32 bg-green-XP_Start text-white start">
				<StartIcon onClick={onLogoClick}>
					<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={WindowsXPLogo} alt="" />
					<div className="mr-2 3xl:mr-6 4xl:mr-10 3xl:text-3xl 4xl:text-5xl font-bold">start</div>
				</StartIcon>
			</div>
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
					<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={LinkedInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
