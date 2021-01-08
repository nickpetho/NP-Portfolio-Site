import React from 'react';

function Logo({ imgSrc, className }) {
	return <img className={[ 'h-12 3xl:h-20 4xl:h-32 w-12 3xl:w-20 4xl:w-32 mx-2 3xl:mx-6 4xl:mx-10', className ].join(' ')} src={imgSrc} alt="" />;
}

export default Logo;
