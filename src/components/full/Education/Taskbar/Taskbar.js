import React from 'react';
import Windows95Logo from '../../../../assets/Icons/Windows95Logo.svg';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 3xl:px-2 4xl:px-4 hover:bg-gray-300 ml-3" {...props}>
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
		<div className="h-12 3xl:h-20 4xl:h-32 bg-gray-Windows95 flex items-center relative">
			<StartIcon onClick={onLogoClick}>
				<img className="h-10 3xl:h-16 4xl:h-24 w-10 3xl:w-16 4xl:w-24 p-1 3xl:p-2 4xl:p-3" src={Windows95Logo} alt="" />
				<div className="font-black 3xl:text-3xl 4xl:text-5xl pr-1 3xl:pr-3 4xl:pr-5">Start</div>
			</StartIcon>
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
