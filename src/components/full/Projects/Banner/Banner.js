import React from 'react';
import AppleLogo from '../../../../assets/Icons/AppleLogo.png';

function Banner() {
	return (
		<div className="h-8 bg-gray-400 flex items-center">
			<img className="h-6 w-5 mx-8" src={AppleLogo} alt="" />
			<div className="font-bold">Projects</div>
		</div>
	);
}

export default Banner;
