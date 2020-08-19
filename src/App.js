import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './assets/fonts/Segoe UI.ttf';
import SimpleHome from './components/simple/Home/Home';
import Home from './components/full/Home/Home';
import Projects from './components/full/Projects/Projects';
import Skills from './components/full/Skills/Skills';
import Experience from './components/full/Experience/Experience';
import Education from './components/full/Education/Education';
import AboutMe from './components/full/About Me/AboutMe';
import Resume from './components/full/Resume/Resume';

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
					<Route path="/resume" component={Resume} />
					<Route path="/simple" component={SimpleHome} />
					<Route path="/" component={LandingPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
