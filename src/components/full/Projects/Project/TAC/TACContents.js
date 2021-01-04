import React from 'react';
import MacButton from '../../MacButton/MacButton';
//import SimpleButton from '../../../../simple/Projects/SimpleButton/SimpleButton';

function TACContents() {
	return (
		<div className="flex flex-col space-y-4">
			<div className="mb-3">
				<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">
					Tutoring Assistance Computer
				</h1>
			</div>
			<div className="text-xl">
				The Tutoring Assistance Computer or TAC is an all-in-one tutor tracking software solution designed to
				effectively keep track of student and employee information for the Youngstown State University Math
				Assitance Center (MAC). I implemented SASS (CSS pre-processor) for all custom stylesheets and was in
				charge of the frontend design. I worked with two other computer science students on this project.
			</div>
			<div class="flex justify-center font-bold text-2xl">
				<div>
					<img className="pr-3 pb-3" src={require('../../../../../assets/Projects/TAC_Home.jpg')} alt="" />
					<div className="justify-center flex">TAC Home Page</div>
				</div>
				<div>
					<img
						className="pl-3 pb-3"
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
