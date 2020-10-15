import React from 'react';

function Logo({ imgSrc, className }) {
	return <img className={[ 'h-12 w-12 mx-2', className ].join(' ')} src={imgSrc} alt="" />;
}

export default Logo;
