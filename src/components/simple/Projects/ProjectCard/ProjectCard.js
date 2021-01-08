import React from 'react';

function ProjectCard({ title, src, description, onClick, ...props }) {
	return (
		<div className="relative rounded-lg overflow-hidden bg-gray-100 transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={onClick}>
			<img src={src} alt="" />
			<div className="p-5">
				<div className="italic text-3xl 3xl:text-5xl 4xl:text-8xl">{title}</div>
				<div className="text-lg 3xl:text-2xl 4xl:text-4xl">{description}</div>
			</div>
		</div>
	);
}

export default ProjectCard;
