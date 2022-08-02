import React from 'react';

function DocumentIcon({ label, imgSrc, className }) {
	return (
		<div className={['text-center px-2', className].join(' ')}>
			<img className="h-12 1xl:h-16 2xl:h-18 3xl:h-24 4xl:h-40 w-12 1xl:w-16 2xl:w-16 3xl:w-20 4xl:w-40 3xl:ml-3 4xl:ml-2" src={imgSrc} alt="" />
			<h4 className="text-md 2xl:text-lg 3xl:text-3xl 4xl:text-4xl 4xl:mt-2 text-white">{label}</h4>
		</div>
	);
}

export default DocumentIcon;
