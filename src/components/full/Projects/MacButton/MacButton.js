import React from 'react';

function MacButton({ className, title, link, ...props }) {
	return (
		<button
			className={[
				'bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-4 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white',
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
