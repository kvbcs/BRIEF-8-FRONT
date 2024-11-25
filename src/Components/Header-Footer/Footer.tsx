import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-fit md:h-[30vh] bg-gradient-to-b from-black to-slate-800 pt-6 flex flex-col justify-between items-center">
			<div className="flex justify-center w-full">
				<p className="pt-2 text-[gray] italic text-center">
					© 2024 All Rights Reserved. Developped by Kyllian Vibancos
				</p>
			</div>
			<nav className="w-full p-4 text-white text-xl m-auto">
				<ul className="flex flex-col items-center m-auto gap-4">
					<Link href={"/privacy-policy"}>
						<li className="hover:underline">Privacy Policy</li>
					</Link>
					<Link href={"/legal-notice"}>
						<li className="hover:underline">Legal Notice</li>
					</Link>{" "}
					<Link href="https://github.com/kvbcs" target="_blank">
						<li className="hover:underline">GitHub</li>
					</Link>{" "}
					<Link href="https://linkedin.com" target="_blank">
						<li className="hover:underline">LinkedIn</li>
					</Link>{" "}
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
