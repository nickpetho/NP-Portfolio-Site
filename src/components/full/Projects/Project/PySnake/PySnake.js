import React from 'react';
import MacWindow from '../../MacWindow/MacWindow';

function PySnake() {
	return (
		<MacWindow circleSize={7} title="PySnake" closeTo="/projects">
			<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
				<div className="mb-3">
					<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">PySnake</h1>
				</div>
				<div>
					PySnake, or Sneaky Snake as I originally called it, is a version of the classic Snake game made with
					pygame, a Python library. It was one of my first full Python projects I completed.
				</div>
				<div className="flex justify-center">
					<div>
						<img
							className="pr-3 pb-3"
							src={require('../../../../../assets/Projects/PySnake(1).png')}
							alt=""
						/>
					</div>
					<div>
						<img
							className="pl-3 pb-3"
							src={require('../../../../../assets/Projects/PySnake(2).png')}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<div>
						<img
							className="pr-3 pb-3"
							src={require('../../../../../assets/Projects/PySnake(3).png')}
							alt=""
						/>
					</div>
					<div>
						<img
							className="pl-3 pb-3"
							src={require('../../../../../assets/Projects/PySnake(4).png')}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-4 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white">
						<a href="https://github.com/nickpetho/PySnake" target="_blank" rel="noopener noreferrer">
							Code
						</a>
					</button>
				</div>
			</div>
		</MacWindow>
	);
}

export default PySnake;
