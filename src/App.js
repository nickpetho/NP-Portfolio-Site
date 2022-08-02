import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './assets/fonts/Segoe UI.ttf';
import AboutMe from './components/full/About Me/AboutMe';
import Education from './components/full/Education/Education';
import Experience from './components/full/Experience/Experience';
import Home from './components/full/Home/Home';
import Projects from './components/full/Projects/Projects';
import Skills from './components/full/Skills/Skills';
import LandingPage from './components/LandingPage/LandingPage';
import SimpleHome from './components/simple/Home/Home';

export const MobileDeviceContext = React.createContext(false);

function App() {
	const [mobileDevice, setMobileDevice] = useState(false);
	/*useEffect(() => {
		const script = document.createElement('script');
		script.src = 'a.out.js';
		script.async = true;
		document.head.appendChild(script);
		console.log('Loading WASM JS script...');
		script.onload = () => {
			console.log('WASM JS script loaded.');
			fetch('/a.out.wasm')
				.then((response) => response.arrayBuffer())
				.then((bytes) => WebAssembly.instantiate(bytes))
				.then((results) => {
					console.log(results);
				});
		};
	}, []);*/

	useEffect(() => {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			// true for mobile device
			setMobileDevice(true);
		}
	}, []);

	return (
		<MobileDeviceContext.Provider value={mobileDevice}>
			<Router>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/skills" component={Skills} />
					<Route path="/experience" component={Experience} />
					<Route path="/education" component={Education} />
					<Route path="/aboutMe" component={AboutMe} />
					<Route path="/simple" component={SimpleHome} />
					<Route path="/" component={LandingPage} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</MobileDeviceContext.Provider>
	);
}

export default App;
