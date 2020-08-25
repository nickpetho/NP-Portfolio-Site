import React from 'react';

function DocumentIcon({ label, imgSrc, className }) {
	return (
		<div className={[ 'text-center', className ].join(' ')}>
			<img className="h-16 w-16" src={imgSrc} alt="" />
			<h4 className="text-lg text-white">{label}</h4>
		</div>
	);
}

export default DocumentIcon;
