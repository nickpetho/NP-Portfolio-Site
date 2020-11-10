import React from 'react';

function Section({ className, title, content, ...props }) {
	return (
		<div
			className={[ 'text-center w-full p-24 flex flex-col items-center text-3xl h-screen', className ].join(' ')}
			{...props}
		>
			<div>
				<h1 className="text-6xl underline">{title}</h1>
				<div className="text-justify pt-10">{content}</div>
			</div>
		</div>
	);
}

export default Section;
