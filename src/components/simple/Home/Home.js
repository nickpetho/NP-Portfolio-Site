import React, { useState } from 'react';
import Section from '../Shared/Section/Section';
import Taskbar from '../Shared/Taskbar/Taskbar';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import WaruContents from '../../full/Projects/Project/Waru/WaruContents';
import MazeContents from '../../full/Projects/Project/Maze Game/MazeContents';
import TACContents from '../../full/Projects/Project/TAC/TACContents';
import AStarContents from '../../full/Projects/Project/A Star/AStarContents';
import PySnakeContents from '../../full/Projects/Project/PySnake/PySnakeContents';
import SimpleButton from '../Projects/SimpleButton/SimpleButton';
import LinkedInLogo from '../../../assets/Icons/linkedin-logo.png';
import GitHubLogo from '../../../assets/Icons/github-logo.png';

const projectContents = {
	waru: <WaruContents />,
	maze: <MazeContents />,
	tac: <TACContents />,
	aStar: <AStarContents />,
	pysnake: <PySnakeContents />
};

const LinkIcon = ({ children }) => <div className="h-16 w-18 mx-2 flex items-center">{children}</div>;

function SimpleHome() {
	const [ project, setProject ] = useState(null);

	function WaruClickHandler() {
		setProject('waru');
	}

	function MazeClickHandler() {
		setProject('maze');
	}

	function TacClickHandler() {
		setProject('tac');
	}

	function A_StarClickHandler() {
		setProject('aStar');
	}

	function PySnakeClickHandler() {
		setProject('pysnake');
	}

	return (
		<div className="h-screen flex">
			<Taskbar />
			<div className="overflow-auto w-full">
				<Section
					className="bg-gray-200 pt-64" /* Center align text instead of padding */
					title="Nick Petho"
					id="Home"
					content={
						<div>
							<div className="text-4xl text-center">Web/Software Developer</div>
							<div className="text-center pt-5 italic">Specializing in Frontend Development</div>
							<div className="flex justify-center pt-6">
								<LinkIcon>
									<a
										href="https://www.linkedin.com/in/nick-petho-708b1261/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img className="h-16 w-18 p-2" src={LinkedInLogo} alt="" />
									</a>
								</LinkIcon>
								<LinkIcon>
									<a href="https://github.com/nickpetho" target="_blank" rel="noopener noreferrer">
										<img className="h-16 w-16" src={GitHubLogo} alt="" />
									</a>
								</LinkIcon>
							</div>
						</div>
					}
				/>
				<Section
					className="bg-red-700"
					title="Projects"
					id="Projects"
					content={
						<div>
							{project ? (
								<div>
									<SimpleButton
										title="Back"
										className=""
										onClick={() => {
											setProject(null);
										}}
									/>
									{projectContents[project]}
								</div>
							) : (
								<div className="grid grid-cols-3 gap-12">
									<ProjectCard
										title="Waru"
										src={require('../../../assets/SimpleProjects/Waru.png')}
										description="2D platformer made in Unity"
										onClick={WaruClickHandler}
									/>
									<ProjectCard
										title="Maze Game"
										src={require('../../../assets/SimpleProjects/MazeGame.png')}
										description="3D maze/treasure collection game made in Unity"
										onClick={MazeClickHandler}
									/>
									<ProjectCard
										title="TAC"
										src={require('../../../assets/SimpleProjects/TAC_Home.jpg')}
										description="All-in-one tutor tracking software solution"
										onClick={TacClickHandler}
									/>
									<ProjectCard
										title="A* Heuristic"
										src={require('../../../assets/SimpleProjects/A-Star Map.png')}
										description="An A* path finding heuristic on a 16x16 tile map"
										onClick={A_StarClickHandler}
									/>
									<ProjectCard
										title="PySnake"
										src={require('../../../assets/SimpleProjects/PySnake.png')}
										description="A version of the classic Snake game made with pygame"
										onClick={PySnakeClickHandler}
									/>
								</div>
							)}
						</div>
					}
				/>
				<Section
					className="bg-gray-200"
					title="Skills"
					id="Skills"
					content={
						<div>
							<div className="text-3xl pb-5 text-center">
								I mainly use web development technologies but I am also skilled in other programming
								languages. These are the languages, technologies, and tools that I am proficient in.
							</div>
							<div className="flex justify-center">
								<div className="pr-28">
									<div className="text-4xl underline">Languages</div>
									<ul className="text-3xl">
										<li className="flex py-2">Javascript</li>
										<li className="flex py-2">HTML</li>
										<li className="flex pb-2">CSS/SASS</li>
										<li className="flex py-2">Python</li>
										<li className="flex py-2">C/C++</li>
										<li className="flex py-2">C#</li>
										<li className="flex">Java</li>
										<li className="flex py-2">SQL</li>
									</ul>
								</div>
								<div className="px-56">
									<div className="text-4xl underline">Libraries</div>
									<ul className="text-3xl ">
										<li className="flex py-2">React.js</li>
										<li className="flex pt-2">jQuery</li>
										<li className="flex py-2">Node.js</li>
										<li className="flex py-2">Express.js</li>
										<li className="flex py-2">MongoDB</li>
										<li className="flex py-2">Bootstrap 4</li>
										<li className="flex py-2">Tailwind.css</li>
									</ul>
								</div>
								<div className="pl-28">
									<div className="text-4xl underline">Technologies</div>
									<ul className="text-3xl ">
										<li className="flex py-2">RESTful Web Services</li>
										<li className="flex py-2">Git</li>
										<li className="flex py-2">Unity 3D Game Engine</li>
										<li className="flex py-2">GIMP2</li>
									</ul>
								</div>
							</div>
						</div>
					}
				/>
				<Section
					className="bg-red-700"
					title="Experience"
					id="Experience"
					content={
						<div>
							<div className="text-4xl font-semibold">AIB Technician</div>
							<div className="text-4xl italic">TecnoCap LLC (2016-2020)</div>
							<div className="text-3xl">
								- Prepared the plant for the annual AIB (American Institute of Baking) certification
								inspection
							</div>
							<div className="text-3xl"> - Developed an AIB certification technician worker's manual</div>
							<div className="text-3xl"> - Computerized inventory of storeroom and warehouse stock</div>
							<div className="text-3xl">
								- Assisted in improving the flow of raw material in the shearing department by designing
								new input/output routes
							</div>
						</div>
					}
				/>
				<Section
					className="bg-gray-200"
					title="Education"
					id="Education"
					content={
						<div>
							<div className="text-4xl font-semibold">
								Youngstown State University (YSU), Youngstown, Ohio
							</div>
							<div className="text-3xl italic">
								Bachelor of Science in Computer Science, with a minor in Mathematics (2016-2020)
							</div>
							<div className="text-2xl">- Member of the Honors College</div>
							<div className="text-2xl">- Achieved Dean's List (Spring 2017, Spring 2019, Fall 2020)</div>
						</div>
					}
				/>
				<Section
					className="bg-red-700"
					title="About Me"
					id="About"
					content={
						<div>
							<div className="text-4xl italic">Nick Petho (nick.petho@gmail.com)</div>
							<div className="text-3xl pt-4">
								A web developer with a passion for frontend design and development.
							</div>
							<div className="text-3xl py-3">
								I have a Bachelors degree in Computer Science with a minor in Mathematics from
								Youngstown State University.
							</div>
							<div className="text-3xl">
								I've always been interested in software development but once I started learning about
								web development I really fell in love with it. My favorite aspect about web development
								is working on the frontend. I really enjoying using frontend frameworks, especially
								React.js, and I'm always excited to learn new languages and technologies.
							</div>
							<div className="text-3xl pt-2">Some other interesting things about me:</div>
							<ul className="text-2xl">
								<li>- Previous member of the YSU Association for Computing Machinery (ACM)</li>
								<li>- Musician in various bands since highschool</li>
								<li>- Studying the Hungarian language (a magyar nyelv)</li>
								<li>- Huge soccer fan, my favorite team is Tottenham Hotspur #COYS</li>
							</ul>
						</div>
					}
				/>
			</div>
		</div>
	);
}

export default SimpleHome;
