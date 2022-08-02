import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MobileDeviceContext } from '../../App';
import userLogo from '../../assets/Icons/Win10UserIcon.svg';
import './LandingPage.css';

const LandingPageButton = ({ to, ...props }) => (
	<Link
		to={to}
		className="bg-gray-LandingPage bg-opacity-25 hover:bg-gray-LandingPage hover:bg-opacity-50 text-lg 1xl:text-xl 3xl:text-4xl 4xl:text-6xl text-white py-2 1xl:py-3 3xl:py-5 4xl:py-8 px-2 1xl:px-6 3xl:px-10 4xl:px-16 rounded"
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
			<h1 className="text-5xl 1xl:text-6xl 3xl:text-8xl 4xl:text-11xl leading-none text-white font-hairline">Welcome</h1>
			<h2 className="text-xl 1xl:text-2xl 3xl:text-4xl 4xl:text-6xl text-white mb-3 1xl:mb-6 3xl:pt-6 ">Choose Your Version</h2>
			<div className="space-x-3 1xl:space-x-6 3xl:space-x-12 4xl:space-y-24 3xl:pt-6 ">
				<LandingPageButton to="/simple">Simple</LandingPageButton>
				<LandingPageButton to="/home">Full</LandingPageButton>
			</div>
		</div>
	);
}

export default LandingPage;
