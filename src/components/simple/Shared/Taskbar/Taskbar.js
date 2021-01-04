import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MobileDeviceContext } from '../../../../App';
import { HashLink } from 'react-router-hash-link';

const TaskItem = ({ children, ...props }) => (
	<div className="text-lg hover:text-red-700 transition-colors duration-75" {...props}>
		{children}
	</div>
);

const Logo = ({ className }) => (
	<div className={[ 'flex flex-col items-center', className ].join(' ')}>
		<img className="w-32 h-16 mt-6 mb-4" src={require('../../../../assets/Logo/NPCWx192.png')} alt="" />
		<div className="font-bold text-2xl">Nick Petho</div>
		<div className="font-bold text-2xl">Coding</div>
	</div>
);

function Taskbar({ className, ...props }) {
	const mobileDevice = useContext(MobileDeviceContext);

	return (
		<div className={[ 'bg-black flex flex-col z-40 text-white space-y-4 h-screen', className ].join(' ')}>
			<Logo />
			<div className="bg-black flex px-12 flex-col z-40 text-white text-center space-y-4 m-auto flex-grow justify-center">
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
					<HashLink to="#About">About</HashLink>
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
			<Logo className="invisible" />
		</div>
	);
}

export default Taskbar;
