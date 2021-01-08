import React from 'react';

function MacDesktopIcon({ label, imgSrc, className }) {
	return (
		<div className={[ 'text-center mb-5 3xl:mb-8 4xl:mb-16', className ].join(' ')}>
			<img className="h-12 2xl:h-16 3xl:h-24 4xl:h-32 w-full" src={imgSrc} alt="" />
			<h4 className="text-lg 3xl:text-3xl 4xl:text-5xl text-white 3xl:mt-2 4xl:mt-4">{label}</h4>
		</div>
	);
}

export default MacDesktopIcon;
