import React from 'react';
import { Link } from 'react-router-dom';

function StartMenu({ isOpen }) {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className="bg-gray-Windows7 absolute bottom-0 flex flex-col w-56 3xl:w-96 4xl:w-144 text-white rounded-t-md 3xl:rounded-t-lg">
			<Link
				to="/home"
				className="p-3 3xl:px-5 4xl:p-4 4xl:px-10 3xl:text-3xl 4xl:text-5xl flex hover:bg-gray-Windows7Highlight hover:text-black"
			>
				<div>Shut down</div>
			</Link>
		</div>
	);
}

export default StartMenu;
