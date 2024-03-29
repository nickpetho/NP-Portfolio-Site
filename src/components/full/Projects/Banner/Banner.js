import React from 'react';
import AppleLogo from '../../../../assets/Icons/AppleLogo.svg';

function Banner() {
	return (
		<div className="h-8 3xl:h-16 4xl:h-24 bg-slate-300 flex items-center">
			<img className="h-4 2xl:h-6 3xl:h-10 4xl:h-16 w-4 2xl:w-6 3xl:w-10 4xl:w-16 mx-8 4xl:mx-20" src={AppleLogo} alt="" />
			<h4 className="2xl:text-2xl 3xl:text-3xl 4xl:text-5xl font-bold">Projects</h4>
		</div>
	);
}

export default Banner;
