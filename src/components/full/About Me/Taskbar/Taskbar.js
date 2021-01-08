import React from 'react';
import Windows7Logo from '../../../../assets/Icons/Windows7Logo.png';
import LinkenInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-gray-Windows7Highlight" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoClick }) {
	return (
		<div className="h-12 3xl:h-20 4xl:h-32 bg-gray-Windows7 flex items-center relative">
			<TaskIcon onClick={onLogoClick}>
				<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 mx-1 3xl:mx-2 4xl:mx-3" src={Windows7Logo} alt="" />
			</TaskIcon>
			<TaskIcon>
				<a href="https://www.linkedin.com/in/nick-petho-708b1261/" target="_blank" rel="noopener noreferrer">
					<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={LinkenInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
					<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3 mx-1 3xl:mx-2 4xl:mx-3" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
