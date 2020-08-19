import React from 'react';
import './LandingPage.css';
import userLogo from '../../assets/Icons/default-user-placeholder.png';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const LandingPageButton = ({ to, ...props }) => (
	<Link
		to={to}
		className="bg-gray-700 bg-opacity-25 hover:bg-gray-700 hover:bg-opacity-50 text-xl text-white py-3 px-6 rounded mr-6"
		{...props}
	>
		{props.children}
	</Link>
);

function LandingPage() {
	return (
		<div className="h-screen flex justify-center items-center flex-col landing-page">
			<img src={userLogo} alt="" />
			<h1 className="text-6xl leading-none text-white font-hairline">Welcome</h1>
			<h2 className="text-2xl text-white mb-6">Choose Your Version</h2>
			<div>
				<LandingPageButton to="/simple">Simple</LandingPageButton>
				<LandingPageButton data-tip="Coming Soon!" to="/home">
					Full
				</LandingPageButton>
			</div>
			<ReactTooltip />
		</div>
	);
}

export default LandingPage;
