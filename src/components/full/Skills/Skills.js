import React from 'react';
import './Skills.css';
import Banner from './Banner/Banner';
import Taskbar from './Taskbar/Taskbar';
import Logo from './Logo/Logo';
import JavaScript from '../../../assets/Icons/CodeIcons/Javascript_Logo.svg';
import HTML from '../../../assets/Icons/CodeIcons/HTML5_Logo.svg';
import CSS from '../../../assets/Icons/CodeIcons/CSS_Logo.svg';
import SASS from '../../../assets/Icons/CodeIcons/Sass_Logo.svg';
import Python from '../../../assets/Icons/CodeIcons/Python_Logo.svg';
import C from '../../../assets/Icons/CodeIcons/C_Logo.svg';
import C_Plus_Plus from '../../../assets/Icons/CodeIcons/C++_Logo.svg';
import C_Sharp from '../../../assets/Icons/CodeIcons/C_Sharp_Logo.svg';
import Java from '../../../assets/Icons/CodeIcons/Java_Logo.svg';
import SQL from '../../../assets/Icons/CodeIcons/SQL_Logo.svg';
import React_js from '../../../assets/Icons/CodeIcons/React_Logo.svg';
import jQuery from '../../../assets/Icons/CodeIcons/jQuery_Logo.svg';
import Node from '../../../assets/Icons/CodeIcons/Node.js_Logo.svg';
import Express from '../../../assets/Icons/CodeIcons/Express_Logo.svg';
import MongoDB from '../../../assets/Icons/CodeIcons/MongoDb_Logo.svg';
import Bootstrap from '../../../assets/Icons/CodeIcons/Bootstrap 4.svg';
import Tailwind from '../../../assets/Icons/CodeIcons/Tailwind_Logo.svg';
import REST from '../../../assets/Icons/CodeIcons/RESTful_Logo.svg';
import Git from '../../../assets/Icons/CodeIcons/Git_Logo.svg';
import Unity from '../../../assets/Icons/CodeIcons/Unity_Logo.svg';

function Skills() {
	return (
		<div className="h-screen skills-page flex flex-col">
			<Banner />
			<div className="flex-grow relative">
				<Taskbar />
				<div className="px-16 2xl:px-24 3xl:px-32 4xl:px-48 ml-12">
					<div className="text-xl 1xl:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl p-5 2xl:p-10 text-white text-center">
						I mainly use web development technologies but I am also skilled in other programming languages.
						These are the languages, technologies, and tools that I am proficient in.
					</div>
					<div className="grid grid-cols-3 justify-items-center">
						<div className="w-auto justify-center">
							<div className="text-2xl 1xl:text-4xl 2xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline text-white">Languages</div>
							<ul className="text-xl 1xl:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl text-white space-y-4 3xl:space-y-8 4xl:space-y-12">
								<li className="flex">
									<Logo imgSrc={JavaScript} />
									Javascript
								</li>
								<li className="flex">
									<Logo imgSrc={HTML} />
									HTML
								</li>
								<li className="flex">
									<Logo imgSrc={CSS} />
									CSS/SASS
									<Logo imgSrc={SASS} />
								</li>
								<li className="flex">
									<Logo imgSrc={Python} />
									Python
								</li>
								<li className="flex">
									<Logo imgSrc={C} />
									C/C++
									<Logo imgSrc={C_Plus_Plus} />
								</li>
								<li className="flex">
									<Logo imgSrc={C_Sharp} />
									C#
								</li>
								<li className="flex">
									<Logo imgSrc={Java} />
									Java
								</li>
								<li className="flex">
									<Logo imgSrc={SQL} />
									SQL
								</li>
							</ul>
						</div>
						<div className="w-auto">
							<div className="text-2xl 1xl:text-4xl 2xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline text-white">Libraries</div>
							<ul className="text-xl 1xl:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl text-white space-y-4 3xl:space-y-8 4xl:space-y-12">
								<li className="flex 1xl:py-2">
									<Logo imgSrc={React_js} />
									React.js
								</li>
								<li className="flex 3xl:py-4">
									<Logo className="h-12 2xl:h-16 3xl:h-24 4xl:h-32" imgSrc={jQuery} />
									jQuery
								</li>
								<li className="flex">
									<Logo className="w-12 1xl:w-16 3xl:w-32 4xl:w-48" imgSrc={Node} />
									Node.js
								</li>
								<li className="flex">
									<Logo className="w-12 1xl:w-16 3xl:w-32 4xl:w-48" imgSrc={Express} />
									Express.js
								</li>
								<li className="flex">
									<Logo className="w-16 1xl:w-20 3xl:w-32 4xl:w-48" imgSrc={MongoDB} />
									MongoDB
								</li>
								<li className="flex">
									<Logo imgSrc={Bootstrap} />
									Bootstrap 4
								</li>
								<li className="flex">
									<Logo className="w-12 1xl:w-16 3xl:w-24 4xl:w-40" imgSrc={Tailwind} />
									Tailwind.css
								</li>
							</ul>
						</div>
						<div className="w-auto">
							<div className="text-2xl 1xl:text-4xl 2xl:text-6xl 3xl:text-8xl 4xl:text-10xl underline text-white">Technologies</div>
							<ul className="text-xl 1xl:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl text-white space-y-3 2xl:space-y-4 3xl:space-y-8 4xl:space-y-12">
								<li className="flex">
									<Logo className="w-12 2xl:w-16 3xl:w-24 4xl:w-40" imgSrc={REST} />
									RESTful Web Services
								</li>
								<li className="flex">
									<Logo imgSrc={Git} />
									Git
								</li>
								<li className="flex">
									<Logo imgSrc={Unity} />
									Unity 3D Game Engine
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
