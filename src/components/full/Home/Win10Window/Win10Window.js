import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rnd } from 'react-rnd';

function Win10Window({ title, children, closeTo, ...props }) {
	const [ disableDragging, setDisableDragging ] = useState(false);

	function handleMouseEnter() {
		setDisableDragging(true);
	}

	function handleMouseLeave() {
		setDisableDragging(false);
	}

	return (
		<Rnd
			className="z-10 overflow-hidden"
			bounds="parent"
			default={{
				x: window.innerWidth / 9,
				y: window.innerHeight / 16,
				width: window.innerWidth * (3 / 4),
				height: window.innerHeight * (13 / 16)
			}}
			disableDragging={disableDragging}
			minWidth={700}
			minHeight={500}
		>
			<div className="flex flex-col bg-gray-900 h-full">
				<div className="h-10 bg-black flex items-center px-2 py-1">
					<div className="flex ml-auto space-x-2">
						<Link to={closeTo}>X</Link>
					</div>
					<div className="font-medium text-white">{title}</div>
				</div>

				<div
					className="cursor-default flex-auto overflow-auto"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{children}
				</div>
			</div>
		</Rnd>
	);
}

export default Win10Window;
