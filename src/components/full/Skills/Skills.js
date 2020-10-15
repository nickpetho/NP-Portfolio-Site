import React from 'react';
import './Skills.css';
import Banner from './Banner/Banner';
import Taskbar from './Taskbar/Taskbar';
import Logo from './Logo/Logo';
import JavaScript from '../../../assets/Icons/CodeIcons/Javascript_Logo.png';
import HTML from '../../../assets/Icons/CodeIcons/HTML5_Logo.png';
import CSS from '../../../assets/Icons/CodeIcons/CSS_Logo.png';
import SASS from '../../../assets/Icons/CodeIcons/Sass_Logo.png';
import Python from '../../../assets/Icons/CodeIcons/Python_Logo.png';
import C from '../../../assets/Icons/CodeIcons/C_Logo.png';
import C_Plus_Plus from '../../../assets/Icons/CodeIcons/C++_Logo.png';
import C_Sharp from '../../../assets/Icons/CodeIcons/C_Sharp_Logo.png';
import Java from '../../../assets/Icons/CodeIcons/Java_Logo.png';
import SQL from '../../../assets/Icons/CodeIcons/SQL_Logo.png';
import React_js from '../../../assets/Icons/CodeIcons/React_Logo.png';
import jQuery from '../../../assets/Icons/CodeIcons/jQuery_Logo.png';
import Node from '../../../assets/Icons/CodeIcons/Node.js_Logo.png';
import Express from '../../../assets/Icons/CodeIcons/Express_Logo.png';
import MongoDB from '../../../assets/Icons/CodeIcons/MongoDb_Logo.png';
import Bootstrap from '../../../assets/Icons/CodeIcons/Bootstrap 4.png';
import Tailwind from '../../../assets/Icons/CodeIcons/Tailwind_Logo.png';
import REST from '../../../assets/Icons/CodeIcons/RESTful_Logo.png';
import Git from '../../../assets/Icons/CodeIcons/Git_Logo.png';
import Unity from '../../../assets/Icons/CodeIcons/Unity_Logo.png';
import GIMP from '../../../assets/Icons/CodeIcons/GIMP_Logo.png';

function Skills() {
	return (
		<div className="h-screen skills-page flex flex-col">
			<Banner />
			<div className="flex-grow relative">
				<Taskbar />
				<div className="px-24 ml-12">
					<div className="text-4xl py-10 px-12 text-white text-center">
						I mainly use web development technologies but I am also skilled in other programming languages.
						These are the languages, technologies, and tools that I am proficient in.
					</div>
					<div className="flex justify-center">
						<div className="pr-28">
							<div className="text-6xl underline text-white">Languages</div>
							<ul className="text-4xl text-white">
								<li className="flex py-2">
									<Logo imgSrc={JavaScript} />
									Javascript
								</li>
								<li className="flex py-2">
									<Logo imgSrc={HTML} />
									HTML
								</li>
								<li className="flex py-2">
									<Logo imgSrc={CSS} />
									CSS/SASS
									<Logo imgSrc={SASS} />
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Python} />
									Python
								</li>
								<li className="flex py-2">
									<Logo imgSrc={C} />
									C/C++
									<Logo imgSrc={C_Plus_Plus} />
								</li>
								<li className="flex py-2">
									<Logo imgSrc={C_Sharp} />
									C#
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Java} />
									Java
								</li>
								<li className="flex py-2">
									<Logo imgSrc={SQL} />
									SQL
								</li>
							</ul>
						</div>
						<div className="px-56">
							<div className="text-6xl underline text-white">Libraries</div>
							<ul className="text-3xl text-white">
								<li className="flex py-2">
									<Logo imgSrc={React_js} />
									React.js
								</li>
								<li className="flex py-2">
									<Logo imgSrc={jQuery} />
									jQuery
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Node} />
									Node.js
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Express} />
									Express.js
								</li>
								<li className="flex py-2">
									<Logo imgSrc={MongoDB} />
									MongoDB
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Bootstrap} />
									Bootstrap 4
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Tailwind} />
									Tailwind.css
								</li>
							</ul>
						</div>
						<div className="pl-28">
							<div className="text-6xl underline text-white">Technologies</div>
							<ul className="text-3xl text-white">
								<li className="flex py-2">
									<Logo imgSrc={REST} />
									RESTful Web Services
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Git} />
									Git
								</li>
								<li className="flex py-2">
									<Logo imgSrc={Unity} />
									Unity 3D Game Engine
								</li>
								<li className="flex py-2">
									<Logo imgSrc={GIMP} />
									GIMP2
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
