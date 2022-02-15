import React from 'react';
import MacButton from '../../MacButton/MacButton';

function TACContents() {
	return (
		<div className="flex flex-col space-y-4 3xl:space-y-8 4xl:space-y-12">
			<div className="mb-3">
				<h1 className="text-4xl 1xl:text-5xl 2xl:text-6xl 3xl:text-8xl 4xl:text-9xl border-b-4 border-black px-16 py-4 flex justify-center">
					Tutoring Assistance Computer
				</h1>
			</div>
			<div className="text-xl 3xl:text-3xl 4xl:text-5xl">
				The Tutoring Assistance Computer or TAC is an all-in-one tutor tracking software solution designed to
				effectively keep track of student and employee information for the Youngstown State University Math
				Assitance Center (MAC). I implemented SASS (CSS pre-processor) for all custom stylesheets and was in
				charge of the frontend design. I collaborated with two other computer science students on this project.
			</div>
			<div class="lg:flex justify-center font-bold text-2xl 3xl:text-4xl 4xl:text-6xl 4xl:space-x-5">
				<div>
					<img className="lg:pr-3 pb-3" src={require('../../../../../assets/Projects/TAC_Home.jpg')} alt="" />
					<div className="justify-center flex">TAC Home Page</div>
				</div>
				<div className="pt-4 lg:pt-0">
					<img
						className="lg:pl-3 pb-3"
						src={require('../../../../../assets/Projects//TAC_Employee.jpg')}
						alt=""
					/>
					<div className="justify-center flex">TAC Administrator Page</div>
				</div>
			</div>
			<div className="flex justify-center">
				<MacButton title="Code" link="https://github.com/kmdiogo/TAC" />
			</div>
		</div>
	);
}

export default TACContents;
