import React from 'react';

function Section({ className, title, content, ...props }) {
	return (
		<div
			className={[ 'text-center w-full flex p-10 lg:p-16 3xl:p-24 4xl:p-32 flex-col items-center min-h-screen', className ].join(
				' '
			)}
			{...props}
		>
			<h1 className="text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-10xl underline">{title}</h1>
			<div className="lg:text-justify pt-4 lg:pt-10 3xl:pt-16 4xl:pt-20 w-full">{content}</div>
		</div>
	);
}

export default Section;
