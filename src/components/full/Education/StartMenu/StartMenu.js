import React from 'react';
import { Link } from 'react-router-dom';
import ShutDownLogo from '../../../../assets/Icons/95ShutDownIcon.png';
import MagnifyingGlass from '../../../../assets/Icons/95MagnifingGlass.png';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-Windows95 absolute bottom-0 flex flex-col w-56">
			<div className="bg-gray-Windows95Start pb-2 pt-3 px-3 font-bold text-gray-Windows95">Windows95</div>
			<Link to="/aboutMe" className="p-3 mt-20 flex hover:bg-blue-W95Start hover:text-white">
				<img className="w-6 h-6 mr-3" src={MagnifyingGlass} alt="" />
				<div>About Me</div>
			</Link>
			<Link to="/" className="py-3 px-3 flex hover:bg-blue-W95Start hover:text-white">
				<img className="w-6 h-6 mr-3" src={ShutDownLogo} alt="" />
				<div>Shut Down...</div>
			</Link>
		</div>
	);
}

export default StartMenu;
