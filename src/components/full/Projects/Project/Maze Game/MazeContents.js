import React from 'react';
import MacButton from '../../MacButton/MacButton';
//import SimpleButton from '../../../../simple/Projects/SimpleButton/SimpleButton';

function MazeContents({ ...props }) {
	return (
		<div className="flex flex-col space-y-4" {...props}>
			<div className="mb-3">
				<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">Maze Game</h1>
			</div>
			<div className="text-xl mb-4">
				Maze Game is a complex 3D maze/treasure collection game in Unity containing UI elements, power-ups,
				NavMesh AI navigation, and custom models created in Blender 3D. You can play a demo of Maze Game below.
				The controls are WASD for movement, Q and E to rotate, LShift to use X-Ray, and Spacebar to use Ghost.
				The abilities are not available to use until they are picked up and the X next to them is there.
			</div>
			<div className="flex justify-center mb-3">
				<div>
					<img className="pr-3 pb-3" src={require('../../../../../assets/Projects/MazeGame2.png')} alt="" />
				</div>
				<div>
					<img className="pl-3 pb-3" src={require('../../../../../assets/Projects/MazeGame1.png')} alt="" />
				</div>
			</div>
			<div className="flex justify-center space-x-3">
				<MacButton title="Play" className="px-5" link="http://nwpetho.people.ysu.edu/Maze_Game/" />
				<MacButton title="Code" link="https://github.com/nickpetho/Maze-Game" />
			</div>
		</div>
	);
}

export default MazeContents;
