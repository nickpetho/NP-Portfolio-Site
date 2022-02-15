import React from 'react';

function Logo({ imgSrc, className }) {
	return <img className={[ 'h-8 1xl:h-10 2xl:h-16 3xl:h-20 4xl:h-32 w-8 1xl:w-10 2xl:w-16 3xl:w-20 4xl:w-32 mx-2 3xl:mx-6 4xl:mx-10', className ].join(' ')} src={imgSrc} alt="" />;
}

export default Logo;
