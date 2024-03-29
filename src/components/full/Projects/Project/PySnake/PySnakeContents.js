import React from 'react';
import MacButton from '../../MacButton/MacButton';

function PySnakeContents() {
	return (
		<div className="flex flex-col space-y-4 3xl:space-y-16 4xl:space-y-20">
			<div className="mb-3">
				<h1 className="text-4xl 1xl:text-5xl 2xl:text-6xl 3xl:text-8xl 4xl:text-9xl border-b-4 border-black px-16 py-4 flex justify-center">PySnake</h1>
			</div>
			<div className="text-xl 3xl:text-3xl 4xl:text-5xl">
				PySnake, or Sneaky Snake as I originally called it, is a version of the classic Snake game made with
				pygame, a Python library. It was one of my first full Python projects I completed.
			</div>
			<div className="flex justify-center space-x-3 3xl:space-x-16 4xl:space-x-20">
				<div>
					<img src={require('../../../../../assets/Projects/PySnake(1).webp')} alt="" />
				</div>
				<div>
					<img src={require('../../../../../assets/Projects/PySnake(2).webp')} alt="" />
				</div>
			</div>
			<div className="flex justify-center space-x-4 3xl:space-x-16 4xl:space-x-20">
				<div>
					<img src={require('../../../../../assets/Projects/PySnake(3).webp')} alt="" />
				</div>
				<div>
					<img src={require('../../../../../assets/Projects/PySnake(4).webp')} alt="" />
				</div>
			</div>
			<div className="flex justify-center">
				<MacButton title="Code" link="https://github.com/nickpetho/PySnake" />
			</div>
		</div>
	);
}

export default PySnakeContents;
