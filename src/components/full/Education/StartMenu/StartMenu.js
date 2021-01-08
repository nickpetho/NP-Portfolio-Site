import React from 'react';
import { Link } from 'react-router-dom';
import ShutDownLogo from '../../../../assets/Icons/95ShutDownIcon.png';
import MagnifyingGlass from '../../../../assets/Icons/95MagnifingGlass.png';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-Windows95 absolute bottom-0 flex flex-col w-56 3xl:w-96 4xl:w-144">
			<div className="bg-gray-Windows95Start p-2 3xl:p-3 4xl:p-5 text-xl 3xl:text-3xl 4xl:text-5xl font-bold text-gray-Windows95">Windows95</div>
			<Link to="/aboutMe" className="3xl:text-3xl 4xl:text-5xl p-3 mt-20 3xl:mt-40 4xl:mt-48 flex hover:bg-blue-W95Start hover:text-white">
				<img className="h-6 3xl:h-12 4xl:h-20 w-6 3xl:w-12 4xl:w-20 mr-3 3xl:mr-5 4xl:mr-7" src={MagnifyingGlass} alt="" />
				<div>About Me</div>
			</Link>
			<Link to="/home" className="3xl:text-3xl 4xl:text-5xl p-3 flex hover:bg-blue-W95Start hover:text-white">
				<img className="h-6 3xl:h-12 4xl:h-20 w-6 3xl:w-12 4xl:w-20 mr-3 3xl:mr-5 4xl:mr-7" src={ShutDownLogo} alt="" />
				<div>Shut Down...</div>
			</Link>
		</div>
	);
}

export default StartMenu;
