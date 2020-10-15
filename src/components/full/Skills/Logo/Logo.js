import React from 'react';

function Logo({ imgSrc, className }) {
	return (
		<div className={[ className ].join(' ')}>
			<img className="h-12 w-12 mx-2" src={imgSrc} alt="" />
		</div>
	);
}

export default Logo;
