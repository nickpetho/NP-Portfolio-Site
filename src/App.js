import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './assets/fonts/Segoe UI.ttf';
import SimpleHome from './components/simple/Home/Home';
import SimpleProjects from './components/simple/Projects/Projects';
import SimpleSkills from './components/simple/Skills/Skills';
import SimpleExperience from './components/simple/Experience/Experience';
import SimpleEducation from './components/simple/Education/Education';
import SimpleAboutMe from './components/simple/AboutMe/AboutMe';
import Home from './components/full/Home/Home';
import Projects from './components/full/Projects/Projects';
import Skills from './components/full/Skills/Skills';
import Experience from './components/full/Experience/Experience';
import Education from './components/full/Education/Education';
import AboutMe from './components/full/About Me/AboutMe';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/skills" component={Skills} />
					<Route path="/experience" component={Experience} />
					<Route path="/education" component={Education} />
					<Route path="/aboutMe" component={AboutMe} />
					<Route path="/simple" component={SimpleHome} />
					<Route path="/S-projects" component={SimpleProjects} />
					<Route path="/S-skills" component={SimpleSkills} />
					<Route path="/S-experience" component={SimpleExperience} />
					<Route path="/S-education" component={SimpleEducation} />
					<Route path="/S-aboutMe" component={SimpleAboutMe} />
					<Route path="/" component={LandingPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
