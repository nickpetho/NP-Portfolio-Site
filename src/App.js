import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './assets/fonts/Segoe UI.ttf';
import SimpleHome from './components/simple/Home/Home';


function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/simple" component={SimpleHome} />
					<Route path="/" component={LandingPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
