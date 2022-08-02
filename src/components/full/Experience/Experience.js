import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './Experience.css';
import StartMenu from './StartMenu/StartMenu';
import Taskbar from './Taskbar/Taskbar';
//import FolderIcon from './DesktopIcon/DesktopIcon';

function Experience() {
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    function enableStartMenu() {
        setIsStartMenuOpen(true);
    }

    function disableStartMenu() {
        console.log('Disable Menu');
        setIsStartMenuOpen(false);
    }

    //const folderIcon = require('../../../assets/Icons/xpFolder.webp');

    return (
        <div className="h-screen experience-page flex flex-col">
            <div className="flex-grow relative">
                <div className="px-6 3xl:px-12 4xl:px-24">
                    <h1 className="mt-4 text-5xl 1xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-10xl underline">
                        Work Experience
                    </h1>
                    <div className="pt-6 text-3xl 1xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-8xl font-semibold">
                        Web Developer/Systems Analyst
                    </div>
                    <div className="py-4 text-2xl 1xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl italic">
                        Westat (2021-Present)
                    </div>
                    <div className="text-xl 1xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                        - Created/edited UI to support functionality of websites, web survey apps,
                        and backend management systems
                    </div>
                    <div className="text-xl 1xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                        {' '}
                        - Modified the frontend of multiple websites and web survey apps, including adding accessibility
                        functionality
                    </div>
                    <div className="text-xl 1xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                        {' '}
                        - Provided technical and operational support to
                        production websites and web survey applications
                    </div>
                </div>
                <OutsideClickHandler onOutsideClick={disableStartMenu}>
                    <StartMenu isOpen={isStartMenuOpen} />
                </OutsideClickHandler>
            </div>
            <Taskbar onLogoClick={enableStartMenu} />
        </div>
    );
}

export default Experience;
