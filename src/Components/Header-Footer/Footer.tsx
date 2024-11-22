import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-[30vh] bg-black flex flex-col justify-between items-center">
			<div className="flex justify-center w-full">
				<p className="pt-2 text-[gray] italic text-center">
					© 2024 All Rights Reserved. Developped by Kyllian Vibancos
				</p>
			</div>
			<div className="w-full flex p-4 justify-center text-white text-xl m-auto">
				<ul>
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
			</div>
		</footer>
	);
};

export default Footer;
