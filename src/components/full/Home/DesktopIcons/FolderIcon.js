import React from 'react';

function FolderIcon({ label, imgSrc, className }) {
	return (
		<div className={[ 'text-center mb-5 4xl:mb-10', className ].join(' ')}>
			<img className="h-16 2xl:h-20 3xl:h-32 4xl:h-48 w-20 2xl:w-22 3xl:w-32 4xl:w-48" src={imgSrc} alt="" />
			<h4 className="text-lg 3xl:text-3xl 4xl:text-4xl text-white">{label}</h4>
		</div>
	);
}

export default FolderIcon;
