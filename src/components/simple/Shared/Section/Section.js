import React from 'react';

function Section({ className, title, content, ...props }) {
	return (
		<div
			className={[ 'text-center w-full flex p-10 lg:p-16 flex-col items-center text-3xl min-h-screen', className ].join(
				' '
			)}
			{...props}
		>
			<h1 className="text-6xl underline">{title}</h1>
			<div className="lg:text-justify pt-10 w-full">{content}</div>
		</div>
	);
}

export default Section;
