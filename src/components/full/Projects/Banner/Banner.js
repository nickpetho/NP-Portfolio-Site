import React from 'react';
import AppleLogo from '../../../../assets/Icons/AppleLogo.png';

function Banner() {
	return (
		<div className="h-8 bg-gray-400 flex items-center">
			<img className="h-6 w-5 mx-8" src={AppleLogo} alt="" />
			<h4 className="font-bold">Projects</h4>
		</div>
	);
}

export default Banner;
