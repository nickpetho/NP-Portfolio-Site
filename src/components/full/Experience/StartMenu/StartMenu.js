import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../../../../assets/Icons/default-user-placeholder.png';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-white absolute bottom-0 flex flex-col w-56 text-white">
			<Link to="/aboutMe" className="bg-blue-XP pb-2 pt-3 px-3 flex font-bold">
				<img className="w-6 h-6 mr-3" src={userLogo} alt="" />
				<div>Nick Petho</div>
			</Link>
			<Link to="/home" className="pb-2 pt-1 px-3 flex hover:bg-blue-Highlight">
				<div className="w-6 h-6 mr-2 ml-1">{/*<FontAwesomeIcon icon={faPowerOff} />*/}</div>
				<div>Log Off</div>
			</Link>
		</div>
	);
}

export default StartMenu;
