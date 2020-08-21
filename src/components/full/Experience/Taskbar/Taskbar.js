import React from 'react';
import './Taskbar.css';
import WindowsXPLogo from '../../../../assets/Icons/WindowsXpLogo.png';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-blue-Highlight ml-3" {...props}>
		{children}
	</div>
);

const StartIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-green-StartHighlight start" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoFocus, onLogoBlur }) {
	return (
		<div className="h-12 bg-blue-XP flex items-center relative">
			<div className="h-12 bg-green-XP_Start text-white start">
				<StartIcon onFocus={onLogoFocus} tabIndex={1} onBlur={onLogoBlur}>
					<img className="h-10 w-10 p-1" src={WindowsXPLogo} alt="" />
					<div className="mr-2 font-bold">start</div>
				</StartIcon>
			</div>
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
