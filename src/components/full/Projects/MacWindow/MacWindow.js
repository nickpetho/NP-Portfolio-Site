import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rnd } from 'react-rnd';

function MacWindow({ circleSize, title, children, closeTo, className, ...props }) {
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
			<div className="rounded-md flex flex-col bg-gray-MacWindowBG h-full">
				<div className="h-8 bg-gray-MacWindow flex items-center border-b border-gray-500 shadow px-2 py-1">
					<div className="flex mr-auto space-x-2">
						<Link to={closeTo}>
							<svg className="overflow-visible cursor-default" height="13" width="13" stroke="#E46F69">
								<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#FF635A" />
							</svg>
						</Link>
						<svg className="overflow-visible" height="13" width="13" stroke="#C6C6C6">
							<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#D2D2D2" />
						</svg>
						<svg className="overflow-visible" height="13" width="13" stroke="#C6C6C6">
							<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#D2D2D2" />
						</svg>
					</div>
					<div className="font-medium text-gray-800">{title}</div>
					<div className="flex ml-auto invisible">
						<svg height="14" width="14">
							<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#FF635A" />
						</svg>
						<svg height="14" width="14">
							<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#D2D2D2" />
						</svg>
						<svg height="14" width="14">
							<circle cx={circleSize} cy={circleSize} r={circleSize} fill="#D2D2D2" />
						</svg>
					</div>
				</div>

				<div
					className="cursor-default flex-auto overflow-auto p-5"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{children}
				</div>
			</div>
		</Rnd>
	);
}

export default MacWindow;
