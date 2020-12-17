import React from 'react';

function FolderIcon({ label, imgSrc, className }) {
	return (
		<div className={[ 'text-center', className ].join(' ')}>
			<img className="h-20 w-22" src={imgSrc} alt="" />
			<h4 className="text-lg text-white">{label}</h4>
		</div>
	);
}

export default FolderIcon;
