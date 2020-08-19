import React from 'react';
import userLogo from '../../../../assets/Icons/default-user-placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-800 absolute bottom-0 flex flex-col w-56 text-white">
			<div className="bg-gray-Windows pb-2 pt-3 px-3 font-bold">START</div>
			<Link to="/aboutMe" className="pb-1 pt-2 px-3 mt-20 flex hover:bg-gray-Windows">
				<img className="w-6 h-6 mr-3" src={userLogo} alt="" />
				<div>Nick Petho</div>
			</Link>
			<Link to="/" className="pb-2 pt-1 px-3 flex hover:bg-gray-Windows">
				<div className="w-6 h-6 mr-2 ml-1">
					<FontAwesomeIcon icon={faPowerOff} />
				</div>
				<div>Sign Out</div>
			</Link>
		</div>
	);
}

export default StartMenu;
