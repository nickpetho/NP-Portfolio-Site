import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MobileDeviceContext } from '../../../../App';

const TaskItem = ({ children, ...props }) => (
	<div className="text-md 1xl:text-xl 3xl:text-3xl 4xl:text-5xl hover:text-red-700 transition-colors duration-75" {...props}>
		{children}
	</div>
);

const Logo = ({ className }) => (
	<div className={['flex flex-col items-center', className].join(' ')}>
		<img className="w-20 1xl:w-32 3xl:w-56 4xl:w-64 h-10 1xl:h-16 3xl:h-32 4xl:h-40 mt-4 3xl:mt-12 mb-4 3xl:mb-8" src={require('../../../../assets/Logo/NPCW.svg')} alt="" />
		<div className="font-bold text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-5xl">Nick Petho</div>
		<div className="font-bold text-lg 1xl:text-xl 3xl:text-3xl 4xl:text-4xl 3xl:pt-6">Coding</div>
	</div>
);

function Taskbar({ className, ...props }) {
	const mobileDevice = useContext(MobileDeviceContext);

	return (
		<div className={['bg-black flex flex-col z-40 text-white space-y-4 h-screen', className].join(' ')}>
			<Logo />
			<div className="bg-black flex px-12 3xl:px-20 flex-col z-40 text-white text-center space-y-4 3xl:space-y-8 4xl:space-y-20 m-auto flex-grow justify-center">
				<TaskItem>
					<HashLink to="#Home">Home</HashLink>
				</TaskItem>
				<TaskItem>
					<HashLink to="#Projects">Projects</HashLink>
				</TaskItem>
				<TaskItem>
					<HashLink to="#Skills">Skills</HashLink>
				</TaskItem>
				<TaskItem>
					<HashLink to="#Experience">Experience</HashLink>
				</TaskItem>
				<TaskItem>
					<HashLink to="#Education">Education</HashLink>
				</TaskItem>
				<TaskItem>
					<HashLink to="#About">About Me</HashLink>
				</TaskItem>
				<TaskItem>
					<a
						href="http://nwpetho.people.ysu.edu/Nicholas%20William%20Petho%20Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</TaskItem>
				{!mobileDevice && (
					<TaskItem>
						<Link to="/">Sign Out</Link>
					</TaskItem>
				)}
			</div>
			{/*<Logo className="invisible" />*/}
		</div>
	);
}

export default Taskbar;
