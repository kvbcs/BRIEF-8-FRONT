"use client";
import React, { useEffect, useState } from "react";
import DropMenu from "../ShadCN/DropMenu";
import Link from "next/link";
import {
	FaUser,
	FaArrowRightFromBracket,
	FaUserPen,
	FaHouse,
} from "react-icons/fa6";
import { FaShoppingCart, FaSignInAlt, FaTshirt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";
import { FidgetSpinner } from "react-loader-spinner";
import { useStoreConnect } from "@/Components/stores/connextTest";

const Header = () => {
	const { push } = useRouter();
	const { isConnected, setIsConnected } = useStoreConnect((state) => state);
	const [isLoading, setisLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);

	function checkIsAdmin() {
		const jwt = window.localStorage.getItem("token");
		const role = window.localStorage.getItem("role");
		return (
			role === `${process.env.NEXT_PUBLIC_ADMIN_ROLE}` &&
			jwt !== undefined &&
			jwt!.length > 60
		);
	}

	function checkIsConnected() {
		const role = window.localStorage.getItem("role");
		const cart = window.localStorage.getItem("cart");
		const jwt = window.localStorage.getItem("token");
		return jwt !== null || cart !== null || role !== null;
	}

	useEffect(() => {
		setisLoading(true);
		setIsAdmin(checkIsAdmin());
		setIsConnected(checkIsConnected());
		setisLoading(false);
	}, [isLoading, isConnected]);

	const handleDisconnect = () => {
		setisLoading(true);
		window.localStorage.clear();
		push("/");
	};

	return (
		<>
			<header className="w-full flex flex-row justify-between px-4 gap-2 items-center h-[10vh] bg-blue-700">
				<div className="flex flex-row items-center gap-2 w-fit h-[90%]">
					<img
						onClick={() => {
							push("/");
						}}
						src="/Logo.png"
						alt="The Meetup logo"
						className="w-full h-full hover:cursor-pointer rounded-full hover:scale-110 transition ease-in-out"
					/>
				</div>
				<ul className="text-white flex-row items-center w-2/3 md:gap-4 lg:gap-14 hidden md:flex justify-end ">
					<Link href="/">
						<li className="hover:bg-sky-500 font-bold hover:scale-125 transition ease-in-out flex flex-row items-center gap-2 p-2 rounded-lg">
							<FaHouse size={26} />
							Home
						</li>
					</Link>
					<Link href="/events">
						<li className="hover:bg-sky-500 font-bold hover:scale-125 transition ease-in-out flex flex-row items-center gap-2 p-2 rounded-lg">
							<FaTshirt size={26} />
							Events
						</li>
					</Link>
				</ul>
				{isConnected ? (
					<ul className="text-white flex-row items-center md:gap-4 lg:gap-14 hidden md:flex">
						<Link href="/agenda">
							<li className="hover:bg-sky-500 font-bold hover:scale-125 transition ease-in-out flex flex-row items-center gap-2 p-2 rounded-lg">
								<FaShoppingCart size={26} />
								Agenda
							</li>
						</Link>

						{isAdmin && (
							<Link href="/admin">
								<li className="hover:bg-sky-500 font-bold hover:scale-125 transition ease-in-out flex flex-row items-center gap-2 p-2 rounded-lg">
									<RiAdminFill size={26} />
									Admin
								</li>
							</Link>
						)}
					</ul>
				) : (
					<div className="flex flex-row w-fit  justify-evenly gap-8 items-center">
						<button
							onClick={() => {
								push("/login");
							}}
							className="hidden md:flex bg-white hover:bg-black hover:text-white transition ease-in-out hover:scale-110 text-black flex-row items-center gap-2 justify-evenly w-[125px] p-3 rounded-lg"
						>
							<FaSignInAlt size={26} />
							Login
						</button>
						<button
							onClick={() => {
								push("/register");
							}}
							className="hidden md:flex hover:scale-110 hover:text-white transition ease-in-out bg-[gold] hover:bg-yellow-600 flex-row items-center justify-evenly gap-2 w-[125px] text-black  font-bold p-3 rounded-lg"
						>
							<FaUserPen size={26} />
							Register
						</button>
					</div>
				)}
				{isConnected && (
					<button
						onClick={handleDisconnect}
						className="hidden md:flex bg-red-700 hover:bg-red-500 hover:text-black flex-row items-center gap-2 hover:scale-110 transition ease-in-out text-white p-3 rounded-lg"
					>
						<FaArrowRightFromBracket size={26} />
						Disconnect
					</button>
				)}
				<DropMenu />
			</header>
		</>
	);
};

export default Header;
