import React from 'react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from '../../../../assets/Icons/XPMagnifyingGlass.png';
import LogOff from '../../../../assets/Icons/XPLogOff.png';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-blue-XP absolute bottom-0 flex flex-col w-56 text-white rounded-t-md">
			<div className="pb-2 pt-3 px-3 flex font-bold">Nick Petho</div>
			<Link
				to="/aboutMe"
				className="bg-white py-2 px-3 flex text-black hover:bg-blue-XPStartHighlight hover:text-white"
			>
				<img className="w-6 h-6 mr-3" src={MagnifyingGlass} alt="" />
				<div>About Me</div>
			</Link>
			<div className="p-3 flex bg-blue-XP">
				<Link to="/home" className="ml-20 p-2 flex hover:bg-blue-XPLogOff rounded">
					<img className="w-6 h-6 mr-2" src={LogOff} alt="" />
					<div>Log Off</div>
				</Link>
			</div>
		</div>
	);
}

export default StartMenu;
