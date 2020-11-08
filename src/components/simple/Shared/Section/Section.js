import React from 'react';

function Section({ className, title, subtitle, ...props }) {
	return (
		<div
			className={['text-center w-full p-40 flex flex-col items-center text-3xl h-screen', className ].join(' ')}
			{...props}
		>
			<div>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
		</div>
	);
}

export default Section;
