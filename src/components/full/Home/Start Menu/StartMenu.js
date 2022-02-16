import React from 'react';
import userLogo from '../../../../assets/Icons/Win10UserIcon.svg';
import { Link } from 'react-router-dom';
import PowerIcon from '../../../../assets/Icons/PowerIcon.svg';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-800 absolute bottom-0 flex flex-col w-56 3xl:w-84 4xl:w-144 text-white z-50">
			<div className="bg-gray-700 p-3 3xl:p-5 4xl:p-7 font-bold 3xl:text-3xl 4xl:text-5xl">
				START
			</div>
			<Link to="/aboutMe" className="p-3 3xl:p-4 4xl:p-5 3xl:px-5 4xl:px-6 mt-20 3xl:mt-24 4xl:mt-56 flex hover:bg-gray-700" aria-label="About Me">
				<img className="w-6 h-6 mr-3 3xl:w-12 4xl:w-24 3xl:h-12 4xl:h-24 3xl:mr-6" src={userLogo} alt="" />
				<div className="3xl:text-2xl 4xl:text-5xl 3xl:mt-2">Nick Petho</div>
			</Link>
			<Link to="/" className="p-2 3xl:p-4 4xl:p-5 3xl:px-5 4xl:px-6 flex hover:bg-gray-700" aria-label="Landing Page">
				<img className="w-6 h-6 mr-3 ml-1 3xl:w-10 4xl:w-20 3xl:h-10 4xl:h-20 3xl:mr-6 4xl:mr-8" src={PowerIcon} alt="" />
				<div className="3xl:text-2xl 4xl:text-5xl">Sign Out</div>
			</Link>
		</div>
	);
}

export default StartMenu;
