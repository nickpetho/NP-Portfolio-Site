import React from 'react';
import Windows10Logo from '../../../../assets/Icons/windows10logo.svg';
import LinkedInLogo from '../../../../assets/Icons/linkedin-logo.svg';
import GitHubLogo from '../../../../assets/Icons/github-logo.svg';

const TaskIcon = ({ children, ...props }) => (
	<div className="h-full flex items-center px-1 3xl:px-2 4xl:px-3 hover:bg-gray-800" {...props}>
		{children}
	</div>
);

function Taskbar({ onLogoClick }) {
	return (
		<div className="h-12 3xl:h-24 4xl:h-28 bg-gray-900 flex items-center relative z-40">
			<TaskIcon onClick={onLogoClick}>
				<img className="w-10 p-2 3xl:w-20 4xl:w-32 3xl:p-5 4xl:p-8" src={Windows10Logo} alt="" />
			</TaskIcon>
			<TaskIcon>
				<a
					href="https://www.linkedin.com/in/nick-petho-708b1261/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Linkedin"
				>
					<img className="w-10 p-2 3xl:w-24 4xl:w-32 3xl:p-6 4xl:p-8" src={LinkedInLogo} alt="" />
				</a>
			</TaskIcon>
			<TaskIcon>
				<a
					href="https://github.com/nickpetho"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<img className="w-10 p-2 3xl:w-24 4xl:w-32 3xl:p-6 4xl:p-7" src={GitHubLogo} alt="" />
				</a>
			</TaskIcon>
		</div>
	);
}

export default Taskbar;
