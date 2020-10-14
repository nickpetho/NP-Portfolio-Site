import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ children, ...props }) => (
	<div className="h-full flex items-center px-3 hover:bg-red-700" {...props}>
		{children}
	</div>
);

function Taskbar() {
	return (
		<div className="h-12 bg-black flex items-center z-40 text-white relative">
			<div className="font-bold px-4">Nick Petho</div>
			<div className="h-12 flex">
				<TaskItem>
					<Link to="/simple">Home</Link>
				</TaskItem>
				<TaskItem>
					<Link to="/S-projects">Projects</Link>
				</TaskItem>
				<TaskItem>
					<Link to="/S-skills">Skills</Link>
				</TaskItem>
				<TaskItem>
					<Link to="/S-experience">Experience</Link>
				</TaskItem>
				<TaskItem>
					<Link to="/S-education">Education</Link>
				</TaskItem>
				<TaskItem>
					<Link to="/S-aboutMe">About Me</Link>
				</TaskItem>
			</div>
		</div>
	);
}

export default Taskbar;
