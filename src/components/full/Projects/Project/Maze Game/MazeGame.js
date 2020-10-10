import React, { useState } from 'react';
import MacWindow from '../../MacWindow/MacWindow';

function MazeGame() {
	const [ playGame, setPlayGame ] = useState(false);
	function handlePlay() {
		setPlayGame(true);
	}

	function handleBack() {
		setPlayGame(false);
	}

	const Contents = () =>
		playGame ? (
			<div className="w-full h-full p-3">
				<div className="flex justify-center">
					<button
						className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-5 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white"
						onClick={handleBack}
					>
						Back
					</button>
				</div>

				<iframe className="w-full h-full" src="http://kmdiogo.people.ysu.edu/Waru/" title="Maze Game" />
			</div>
		) : (
			<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
				<div className="mb-3">
					<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">
						Maze Game
					</h1>
				</div>
				<div>
					Maze Game is a complex 3D maze/treasure collection game in Unity containing UI elements, power-ups,
					NavMesh AI navigation, and custom models created in Blender 3D. You can play a demo of Maze Game
					below. The controls are WASD for movement, Q and E to rotate, LShift to use X-Ray, and Spacebar to
					use Ghost. The abilities are not available to use until they are picked up and the X next to them is
					there.
				</div>
				<div class="flex justify-center">
					<div>
						<img
							className="pr-3 pb-3"
							src={require('../../../../../assets/Projects/MazeGame2.png')}
							alt=""
						/>
					</div>
					<div>
						<img
							className="pl-3 pb-3"
							src={require('../../../../../assets/Projects/MazeGame1.png')}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-5 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white"
						onClick={handlePlay}
					>
						Play
					</button>
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-4 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white">
						<a href="https://github.com/nickpetho/Maze-Game" target="_blank" rel="noopener noreferrer">
							Code
						</a>
					</button>
				</div>
			</div>
		);
	return (
		<MacWindow circleSize={7} title="Maze Game" closeTo="/projects">
			<Contents />
		</MacWindow>
	);
}

//Have Kenny help set up Maze Game web build

export default MazeGame;
