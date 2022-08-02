import React from 'react';

function SimpleButton({ className, title, link, ...props }) {
	return (
		<button className={['bg-black text-lg 3xl:text-2xl 4xl:text-5xl px-4 3xl:px-8 4xl:px-10 py-1 3xl:py-2 4xl:py-4 rounded-md text-white', className].join(' ')} {...props}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</button>
	);
}

export default SimpleButton;
