import React from 'react';
import ReactTooltip from 'react-tooltip';
import MacButton from '../../MacButton/MacButton';
//import SimpleButton from '../../../../simple/Projects/SimpleButton/SimpleButton';

function AStarContents() {
	return (
		<div className="flex flex-col space-y-4 3xl:space-y-8 4xl:space-y-12">
			<div className="mb-3">
				<h1 className="text-4xl 1xl:text-5xl 2xl:text-6xl 3xl:text-8xl 4xl:text-9xl border-b-4 border-black px-16 flex justify-center">
					A* Path Finding Heuristic
				</h1>
			</div>
			<div className="text-xl 3xl:text-3xl 4xl:text-5xl">
				I developed an A* path finding heuristic on a 16x16 tile map with multiple varying tile costs and
				unique, dynamic cost changes that adapted to several parameters each time the program was ran. This was
				my final project for my AI in Game Development class.
			</div>
			<div className="flex justify-center">
				<img
					className="w-2/4 h-2/4 border-2 border-black"
					src={require('../../../../../assets/Projects/A-Star Map.png')}
					alt=""
				/>
			</div>
			<div className="flex justify-center space-x-5 3xl:space-x-8 4xl:space-x-12">
				<MacButton title="Run" className="px-5" data-tip="Coming Soon!" />
				<MacButton title="Code" link="https://github.com/nickpetho/A_Star_Path_Finding" />
			</div>
			<ReactTooltip />
		</div>
	);
}

export default AStarContents;
