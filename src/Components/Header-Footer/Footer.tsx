import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-[20vh] bg-black flex flex-col justify-between items-center">
			<div className="flex justify-center w-full">
				<p className="pt-2 text-[gray] italic">
					© 2024 All Rights Reserved. Developped by Kyllian Vibancos
				</p>
			</div>
			<div className="w-full flex justify-center text-white text-xl m-auto">
				<ul>
					<li>GitHub</li>
					<li>LinkedIn</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
