import React from 'react';

function MacButton({ className, title, link, ...props }) {
	return (
		<button
			className={[
				'bg-gradient-to-r text-lg 3xl:text-3xl 4xl:text-5xl focus:outline-none focus:shadow-outline px-4 3xl:px-6 4xl:px-8 py-1 3xl:py-2 4xl:py-4 rounded-md 3xl:rounded-lg from-macbutton-400 to-macbutton-500 text-white',
				className
			].join(' ')}
			{...props}
		>
			<a href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</button>
	);
}

export default MacButton;
