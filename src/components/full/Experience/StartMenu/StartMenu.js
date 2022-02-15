import React from 'react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from '../../../../assets/Icons/XPMagnifyingGlass.png';
import LogOff from '../../../../assets/Icons/XPLogOff.svg';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-blue-XP absolute bottom-0 flex flex-col w-56 3xl:w-108 4xl:w-144 text-white rounded-t-md 3xl:rounded-t-lg">
			<div className="p-3 3xl:p-5 4xl:p-7 4xl:ml-5 flex font-bold 3xl:text-3xl 4xl:text-5xl">Nick Petho</div>
			<Link
				to="/aboutMe"
				className="bg-white p-3 3xl:p-5 4xl:p-7 3xl:text-3xl 4xl:text-5xl flex text-black hover:bg-blue-XPStartHighlight hover:text-white items-center "
			>
				<img className="h-6 3xl:h-10 4xl:h-16 w-6 3xl:w-10 4xl:w-16 mr-3 3xl:mr-5 4xl:mr-8 4xl:ml-3" src={MagnifyingGlass} alt="" />
				<div>About Me</div>
			</Link>
			<div className="p-3 3xl:p-5 4xl:p-7 flex bg-blue-XP">
				<Link to="/home" className="ml-20 3xl:ml-40 4xl:ml-48 p-2 3xl:p-3 4xl:p-5 3xl:text-3xl 4xl:text-5xl flex hover:bg-blue-XPLogOff rounded 3xl:rounded-lg">
					<img className="h-6 3xl:h-10 4xl:h-16 w-6 3xl:w-10 4xl:w-16 mr-2 3xl:mr-4 4xl:mr-6" src={LogOff} alt="" />
					<div>Log Off</div>
				</Link>
			</div>
		</div>
	);
}

export default StartMenu;
