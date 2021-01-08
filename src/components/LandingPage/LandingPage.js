import React, { useContext } from 'react';
import './LandingPage.css';
import userLogo from '../../assets/Icons/Win10UserIcon.svg';
import { Link, Redirect } from 'react-router-dom';
import { MobileDeviceContext } from '../../App';

const LandingPageButton = ({ to, ...props }) => (
	<Link
		to={to}
		className="bg-gray-700 bg-opacity-25 hover:bg-gray-700 hover:bg-opacity-50 text-xl 3xl:text-4xl 4xl:text-6xl text-white py-3 3xl:py-5 4xl:py-8 px-6 3xl:px-10 4xl:px-16 rounded"
		{...props}
	>
		{props.children}
	</Link>
);

function LandingPage() {
	const mobileDevice = useContext(MobileDeviceContext);

	return mobileDevice ? (
		<Redirect to="/simple" />
	) : (
		<div className="h-screen flex justify-center items-center flex-col landing-page">
			<img className="" src={userLogo} alt="" /> {/*User Icon needs size adjustment for 1440p and 4K screens*/}
		<h1 className="text-6xl 3xl:text-8xl 4xl:text-11xl leading-none text-white font-hairline">Welcome</h1>
			<h2 className="text-2xl 3xl:text-4xl 4xl:text-6xl text-white mb-6">Choose Your Version</h2>
			<div className="space-x-6 3xl:space-x-12 4xl:space-y-24">
				<LandingPageButton to="/simple">Simple</LandingPageButton>
				<LandingPageButton to="/home">Full</LandingPageButton>
			</div>
		</div>
	);
}

export default LandingPage;
