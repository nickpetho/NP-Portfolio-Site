import React from 'react';
import MacButton from '../../MacButton/MacButton';

function PySnakeContents() {
	return (
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
					<img className="pr-3 pb-3" src={require('../../../../../assets/Projects/PySnake(1).png')} alt="" />
				</div>
				<div>
					<img className="pl-3 pb-3" src={require('../../../../../assets/Projects/PySnake(2).png')} alt="" />
				</div>
			</div>
			<div className="flex justify-center">
				<div>
					<img className="pr-3 pb-3" src={require('../../../../../assets/Projects/PySnake(3).png')} alt="" />
				</div>
				<div>
					<img className="pl-3 pb-3" src={require('../../../../../assets/Projects/PySnake(4).png')} alt="" />
				</div>
			</div>
			<div className="flex justify-center">
				<MacButton title="Code" link="https://github.com/nickpetho/PySnake" />
			</div>
		</div>
	);
}

export default PySnakeContents;
