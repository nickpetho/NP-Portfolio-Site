import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';

function A_Star() {
	return (
		<MacWindow circleSize={7} title="A* Heuristic" closeTo="/projects">
			<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
				<div className="mb-3">
					<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">
						A* Path Finding Heuristic
					</h1>
				</div>
				<div>
					I developed an A* path finding heuristic on a 16x16 tile map with multiple varying tile costs and
					unique, dynamic cost changes that adapted to several parameters each time the program was run. This
					was my final project for my AI in Game Development class.
				</div>
				<div class="flex justify-center">
					<img
						className="w-2/4 h-2/4 border-2 border-black"
						src={require('../../../../../assets/Projects/A-Star Map.png')}
						alt=""
					/>
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-5 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white">
						Run
					</button>
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-4 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white">
						<a href="https://github.com/kmdiogo/TAC" target="_blank" rel="noopener noreferrer">
							Code
						</a>
					</button>
				</div>
			</div>
		</MacWindow>
	);
}
//Ask Kenny to help with web build and placement

export default A_Star;
