import React, { useState } from 'react';
import MacWindow from '../../MacWindow/MacWindow';

function Waru() {
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

				<iframe className="w-full h-full" src="http://kmdiogo.people.ysu.edu/Waru/" title="Waru" />
			</div>
		) : (
			<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
				<div className="mb-3">
					<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">Waru</h1>
				</div>
				<div>
					Waru is a 2D platformer made with the Unity game engine. I collaborated with a fellow computer
					science student, Kenny Diogo, to develop Waru. It contains complex movement, state-based AI,
					puzzle-based level design, full soundtrack/SFX, and UI elements (menus, HUD, health bars). We also
					worked with an art student to implement custom made sprites and backgrounds. Feel free to play the
					demo down below <span className="font-bold">(WARNING: It starts loud).</span> Since this is our
					personal project the source code is not publicly available.
				</div>
				<div class="flex justify-center">
					<img className="w-2/4 h-2/4" src={require('../../../../../assets/Projects/Waru.png')} alt="" />
				</div>
				<div className="flex justify-center">
					<button
						className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-5 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white"
						onClick={handlePlay}
					>
						Play
					</button>
				</div>
			</div>
		);
	return (
		<MacWindow circleSize={7} title="Waru" closeTo="/projects">
			<Contents />
		</MacWindow>
	);
}

export default Waru;
