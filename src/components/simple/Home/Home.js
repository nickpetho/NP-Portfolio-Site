import React, { useState } from 'react';
import GitHubLogo from '../../../assets/Icons/github-logo.svg';
import LinkedInLogo from '../../../assets/Icons/linkedin-logo.svg';
import AStarContents from '../../full/Projects/Project/A Star/AStarContents';
import MazeContents from '../../full/Projects/Project/Maze Game/MazeContents';
import PySnakeContents from '../../full/Projects/Project/PySnake/PySnakeContents';
import TACContents from '../../full/Projects/Project/TAC/TACContents';
import WaruContents from '../../full/Projects/Project/Waru/WaruContents';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import SimpleButton from '../Projects/SimpleButton/SimpleButton';
import Section from '../Shared/Section/Section';
import Taskbar from '../Shared/Taskbar/Taskbar';

const projectContents = {
    waru: <WaruContents />,
    maze: <MazeContents />,
    tac: <TACContents />,
    aStar: <AStarContents />,
    pysnake: <PySnakeContents />,
};

const LinkIcon = ({ children }) => (
    <div className="mx-4 3xl:mx-6 4xl:mx-10 flex items-center">{children}</div>
);

function SimpleHome() {
    const [project, setProject] = useState(null);
    const [mobileTaskbarOpen, setMobileTaskbarOpen] = useState(false);

    function projectClickHandler(projectName) {
        // Check screen size to determine if we redirect to Github or show the description.
        setProject(projectName);
    }

    return (
        <div className="h-screen flex">
            {/* Backdrop */}
            {mobileTaskbarOpen && (
                <div
                    className="absolute w-screen h-screen z-30"
                    style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
                    onClick={() => setMobileTaskbarOpen(false)}
                />
            )}
            {/* Taskbar component usage for desktop */}
            <Taskbar className="hidden xl:flex flex-col justify-center" />
            {/* Taskbar component usage for mobile */}
            {mobileTaskbarOpen && <Taskbar className="absolute xl:hidden" />}
            {!mobileTaskbarOpen && (
                <button
                    className="absolute top-0 right-0 mt-5 mr-5 space-y-1 xl:hidden z-40"
                    onClick={() => setMobileTaskbarOpen(!mobileTaskbarOpen)}
                    aria-label="Mobile Taskbar">
                    <span className="w-5 h-1 bg-black block" />
                    <span className="w-5 h-1 bg-black block" />
                    <span className="w-5 h-1 bg-black block" />
                </button>
            )}
            <div className="overflow-auto w-full">
                <Section
                    className="bg-gray-100 justify-center"
                    title="Nick Petho"
                    id="Home"
                    content={
                        <div>
                            <div className="text-4xl 3xl:text-6xl 4xl:text-8xl 3xl:mt-12 text-center">
                                Web/Software Developer
                            </div>
                            <div className="text-3xl 3xl:text-5xl 4xl:text-7xl text-center pt-5 3xl:pt-6 italic">
                                Specializing in Frontend Development
                            </div>
                            <div className="flex justify-center pt-8 3xl:pt-16 4xl:pt-20">
                                <LinkIcon>
                                    <a
                                        href="https://www.linkedin.com/in/nick-petho-708b1261/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Linkedin">
                                        <img
                                            className="h-16 3xl:h-24 4xl:h-40 w-16 3xl:w-24 4xl:w-40"
                                            src={LinkedInLogo}
                                            alt=""
                                        />
                                    </a>
                                </LinkIcon>
                                <LinkIcon>
                                    <a
                                        href="https://github.com/nickpetho"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub">
                                        <img
                                            className="h-16 3xl:h-24 4xl:h-40 w-16 3xl:w-24 4xl:w-40"
                                            src={GitHubLogo}
                                            alt=""
                                        />
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
                        <React.Fragment>
                            {project ? (
                                <React.Fragment>
                                    <SimpleButton
                                        title="Return to Projects"
                                        className=""
                                        onClick={() => {
                                            setProject(null);
                                        }}
                                    />
                                    {projectContents[project]}
                                </React.Fragment>
                            ) : (
                                <div className="grid xl:grid-cols-3 gap-12">
                                    <ProjectCard
                                        title="Waru"
                                        src={require('../../../assets/SimpleProjects/Waru.webp')}
                                        description="2D platformer made in Unity"
                                        onClick={() =>
                                            projectClickHandler('waru')
                                        }
                                    />
                                    <ProjectCard
                                        title="Maze Game"
                                        src={require('../../../assets/SimpleProjects/MazeGame.webp')}
                                        description="3D maze/treasure collection game made in Unity"
                                        onClick={() =>
                                            projectClickHandler('maze')
                                        }
                                    />
                                    <ProjectCard
                                        title="TAC"
                                        src={require('../../../assets/SimpleProjects/TAC_Home.webp')}
                                        description="All-in-one tutor tracking software solution"
                                        onClick={() =>
                                            projectClickHandler('tac')
                                        }
                                    />
                                    <ProjectCard
                                        title="A* Heuristic"
                                        src={require('../../../assets/SimpleProjects/A-Star Map.webp')}
                                        description="An A* path finding heuristic on a 16x16 tile map"
                                        onClick={() =>
                                            projectClickHandler('aStar')
                                        }
                                    />
                                    <ProjectCard
                                        title="PySnake"
                                        src={require('../../../assets/SimpleProjects/PySnake.webp')}
                                        description="A version of the classic Snake game made with pygame"
                                        onClick={() =>
                                            projectClickHandler('pysnake')
                                        }
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    }
                />
                <Section
                    className="bg-gray-100"
                    title="Skills"
                    id="Skills"
                    content={
                        <div>
                            <div className="text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl text-center pb-6 3xl:pb-12 4xl:pb-20">
                                I mainly use web development technologies but I
                                am also skilled in other programming languages.
                                These are the languages, technologies, and tools
                                that I am proficient in.
                            </div>
                            <div className="grid lg:grid-cols-3 justify-items-center">
                                <div className="w-full lg:w-auto justify-center">
                                    <div className="text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl mb-4 3xl:pb-12 underline">
                                        Languages
                                    </div>
                                    <ul className="text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl space-y-4 3xl:space-y-8 4xl:space-y-12 list-disc">
                                        <li>Javascript</li>
                                        <li>HTML</li>
                                        <li>CSS/SASS</li>
                                        <li>Python</li>
                                        <li>C++</li>
                                        <li>C#</li>
                                        <li>SQL</li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-auto">
                                    <div className="text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl mb-4 3xl:pb-12 underline">
                                        Libraries
                                    </div>
                                    <ul className="text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl space-y-4 3xl:space-y-8 4xl:space-y-16 list-disc">
                                        <li>React.js</li>
                                        <li>jQuery</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>Bootstrap 4</li>
                                        <li>Tailwind.css</li>
                                        <li>.NET</li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-auto">
                                    <div className="text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl mb-4 3xl:pb-12 underline">
                                        Technologies
                                    </div>
                                    <ul className="text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl space-y-4 3xl:space-y-8 4xl:space-y-12 list-disc">
                                        <li>MongoDB</li>
                                        <li>REST</li>
                                        <li>Git</li>
                                        <li>Jira</li>
                                        <li>Unity</li>
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
                            <div className="text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl 3xl:pt-6 font-semibold">
                                Web Developer/Systems Analyst
                            </div>
                            <div className="mt-4 3xl:pt-6 text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl italic">
                                Westat (2021-Present)
                            </div>
                            <ul className="mt-4 3xl:pt-6 space-y-3 3xl:space-y-8 text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl list-disc">
                                <li>
                                    Created/edited  UI to support functionality of websites,
                                    web survey apps, and backend management systems
                                </li>
                                <li>
                                    Modified the frontend of multiple websites and web survey apps,
                                    including adding accessibility functionality
                                </li>
                                <li>
                                    Provided technical and operational support to
                                    production websites and web survey applications
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Section
                    className="bg-gray-100"
                    title="Education"
                    id="Education"
                    content={
                        <div className="space-y-3 3xl:space-y-8 4xl:space-y-10">
                            <div className="text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-8xl 3xl:pt-6 font-semibold">
                                Youngstown State University, Youngstown, Ohio
                            </div>
                            <div className="py-4 text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl italic">
                                Bachelor of Science in Computer Science, with a
                                minor in Mathematics (2016-2020)
                            </div>
                            <ul className="mt-4 list-disc text-2xl 3xl:text-4xl 4xl:text-7xl">
                                <li>Member of the Honors College</li>
                                <li className="mt-4 3xl:pt-6 4xl:pt-12">
                                    Achieved Dean's List (Spring 2017, Spring
                                    2019, Fall 2020)
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Section
                    className="bg-red-700"
                    title="About Me"
                    id="About"
                    content={
                        <div className="space-y-5 3xl:space-y-7 4xl:space-y-10">
                            <div className="3xl:pb-6 text-3xl 1xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-8xl italic">
                                Nick Petho
                            </div>
                            <div className="3xl:pb-6 text-2xl 1xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl italic">
                                nick.petho@gmail.com
                            </div>
                            <div className="text-2xl 1xl:text-3xl 3xl:text-5xl 4xl:text-7xl">
                                A web developer with a passion for frontend
                                design and development.
                            </div>
                            <div className="3xl:pt-6 text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl">
                                I have a Bachelors degree in Computer Science
                                with a minor in Mathematics from Youngstown
                                State University.
                            </div>
                            <div className="3xl:pt-6 text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl">
                                I've always been interested in software
                                development but once I started learning about
                                web development I really fell in love with it.
                                My favorite aspect about web development is
                                working on the frontend. I really enjoying using
                                frontend frameworks, especially React.js, and
                                I'm always excited to learn new languages and
                                technologies.
                            </div>
                            <div className="3xl:pt-6 text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-7xl">
                                Some other interesting things about me:
                            </div>
                            <ul className="list-disc text-2xl 3xl:text-4xl 4xl:text-6xl list-inside">
                                <li>
                                    Previous member of the YSU Association for
                                    Computing Machinery (ACM)
                                </li>
                                <li>
                                    Musician in various bands since highschool
                                </li>
                                <li>
                                    Studying the Hungarian (magyar nyelv) and German (deutsch Sprache) languages
                                </li>
                                <li>
                                    Huge soccer fan, my favorite team is
                                    Tottenham Hotspur #COYS
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default SimpleHome;
