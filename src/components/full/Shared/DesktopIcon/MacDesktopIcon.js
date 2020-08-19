import React from 'react';

function MacDesktopIcon({ label, imgSrc, className }) {
	return (
		<div className={[ 'text-center', className ].join(' ')}>
			<img className="h-16 w-18" src={imgSrc} alt="" />
			<h4 className="text-lg text-white">{label}</h4>
		</div>
	);
}

export default MacDesktopIcon;
