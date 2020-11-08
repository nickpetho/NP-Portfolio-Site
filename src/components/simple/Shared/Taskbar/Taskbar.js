import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ children, ...props }) => (
	<div className="text-lg hover:text-red-700 transition-colors duration-75" {...props}>
		{children}
	</div>
);

const Logo = ({ className }) => (
	<div className={[ 'flex flex-col items-center', className ].join(' ')}>
		<img className="w-32 h-16 mt-6 mb-4" src={require('../../../../assets/Logo/NPCWx192.png')} alt="" />
		<div className="font-bold text-2xl">Nick Petho</div>
	</div>
);

function Taskbar() {
	return (
		<div className="bg-black flex flex-col z-40 text-white space-y-4">
			<Logo />
			<div className="bg-black flex px-12 flex-col z-40 text-white text-center space-y-4 m-auto flex-grow justify-center">
				<TaskItem>
					<a href="#Home">Home</a>
				</TaskItem>
				<TaskItem>
					<a href="#Projects">Projects</a>
				</TaskItem>
				<TaskItem>
					<a href="#Skills">Skills</a>
				</TaskItem>
				<TaskItem>
					<a href="#Experience">Experience</a>
				</TaskItem>
				<TaskItem>
					<a href="#Education">Education</a>
				</TaskItem>
				<TaskItem>
					<a href="#About">About</a>
				</TaskItem>
				<TaskItem>
					<a href="#Resume">Resume</a>
				</TaskItem>
				<TaskItem>
					<Link to="/">Sign Out</Link>
				</TaskItem>
			</div>
			<Logo className="invisible" />
		</div>
	);
}

export default Taskbar;
