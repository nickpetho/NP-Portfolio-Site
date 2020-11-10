import React from 'react';
import Section from '../Shared/Section/Section';
import Taskbar from '../Shared/Taskbar/Taskbar';

function SimpleHome() {
	return (
		<div className="h-screen flex">
			<Taskbar />
			<div className="overflow-auto w-full">
				<Section className="bg-transparent" title="Nick Petho" content="Web/Software Developer" id="Home" />
				<Section className="bg-red-700" title="Projects" id="Projects" />
				<Section
					className="bg-transparent"
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
					className="bg-transparent"
					title="Education"
					id="Education"
					content={
						<div>
							<div className="text-4xl italic">Youngstown State University (YSU), Youngstown, Ohio</div>
							<div className="text-3xl">
								Bachelor of Science in Computer Science, with a minor in Mathematics (2016-2020)
							</div>
							<div className="text-2xl">- Member of the Honors College</div>
							<div className="text-2xl">- Achieved Dean's List (Spring 2017, Spring 2019)</div>
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
								I am currently finishing my Bachelors degree in Computer Science with a minor in
								Mathematics at Youngstown State University.
							</div>
							<div className="text-3xl">
								I've always been interested in software development but once I started learning about
								web development I really fell in love with it. My favorite aspect about web development
								is working on the frontend. I really enjoying using frontend frameworks, especially
								React.js, and I'm always excited to learn new languages and technologies.
							</div>
							<div className="text-3xl pt-2">Some other interesting things about me:</div>
							<ul className="text-2xl">
								<li>- Member of the YSU Association for Computing Machinery (ACM)</li>
								<li>- Musician in various bands since highschool</li>
								<li>- Studying the Hungarian language (a magyar nyelv)</li>
							</ul>
						</div>
					}
				/>
			</div>
		</div>
	);
}

export default SimpleHome;
