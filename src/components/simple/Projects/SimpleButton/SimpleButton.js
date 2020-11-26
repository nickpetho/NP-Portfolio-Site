import React from 'react';

function SimpleButton({ className, title, link, ...props }) {
	return (
		<button className={[ 'bg-black text-lg px-4 py-1 rounded-md text-white', className ].join(' ')} {...props}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				{title}
			</a>
		</button>
	);
}

export default SimpleButton;
