import React from 'react';
import { Link } from 'react-router-dom';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-Windows7 absolute bottom-0 flex flex-col w-56 text-white rounded-t-md">
			<Link to="/home" className="pb-2 pt-1 px-3 flex hover:bg-gray-Windows7Highlight">
				<div>Shut down</div>
			</Link>
		</div>
	);
}

export default StartMenu;
