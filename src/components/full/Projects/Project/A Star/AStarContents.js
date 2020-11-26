import React from 'react';
import ReactTooltip from 'react-tooltip';
import MacButton from '../../MacButton/MacButton';

function AStarContents() {
	return (
		<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
			<div className="mb-3">
				<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">
					A* Path Finding Heuristic
				</h1>
			</div>
			<div>
				I developed an A* path finding heuristic on a 16x16 tile map with multiple varying tile costs and
				unique, dynamic cost changes that adapted to several parameters each time the program was run. This was
				my final project for my AI in Game Development class.
			</div>
			<div className="flex justify-center">
				<img
					className="w-2/4 h-2/4 border-2 border-black"
					src={require('../../../../../assets/Projects/A-Star Map.png')}
					alt=""
				/>
			</div>
			<div className="flex justify-center">
				<div className="pr-5">
					<MacButton title="Run" className="px-5" data-tip="Coming Soon!" />
				</div>
				<div className="pl-5">
					<MacButton title="Code" link="https://github.com/nickpetho/A_Star_Path_Finding" />
				</div>
			</div>
			<ReactTooltip />
		</div>
	);
}

export default AStarContents;
