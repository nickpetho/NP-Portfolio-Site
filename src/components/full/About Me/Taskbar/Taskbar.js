import React from 'react';
import Windows7Logo from '../../../../assets/Icons/Windows7Logo.png';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../../assets/Icons/github-logo.png';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 hover:bg-gray-Windows7Highlight" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoFocus, onLogoBlur }) {
	return (
		<div className="h-12 bg-gray-Windows7 flex items-center relative">
			<TaskIcon onFocus={onLogoFocus} tabIndex={1} onBlur={onLogoBlur}>
				<img className="h-10 w-10 p-1 mx-1" src={Windows7Logo} alt="" />
			</TaskIcon>
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-11 p-2 mx-1" src={LinkenInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-10 w-10 mx-1" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
