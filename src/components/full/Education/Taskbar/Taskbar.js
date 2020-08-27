import React from 'react';
import Windows95Logo from '../../../../assets/Icons/Windows95Logo.png';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-gray-300 ml-3" {...props}>
		{children}
	</div>
);

const StartIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-gray-300" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoClick }) {
	return (
		<div className="h-12 bg-gray-Windows95 flex items-center relative">
			<StartIcon onClick={onLogoClick}>
				<img className="h-10 w-10 p-1" src={Windows95Logo} alt="" />
				<div className="font-black pr-1">Start</div>
			</StartIcon>
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-11 p-2" src={LinkenInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-10" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
