import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-fit bg-black flex flex-col justify-between items-center">
			<div className="flex justify-center w-full">
				<p className="pt-2 text-[gray] italic text-center">
					© 2024 All Rights Reserved. Developped by Kyllian Vibancos
				</p>
			</div>
			<div className="w-full flex p-4 justify-center text-white text-xl m-auto">
				<ul>
					<li>Private Policy</li>
					<li>Legal Mentions</li>
					<li>GitHub</li>
					<li>LinkedIn</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
