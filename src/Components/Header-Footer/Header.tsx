"use client";
import React, { useEffect, useState } from "react";
import DropMenu from "../ShadCN/DropMenu";
import Link from "next/link";
import { FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import { FaShoppingCart, FaTshirt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";
import { FidgetSpinner } from "react-loader-spinner";

const Header = () => {
	const [isLoading, setisLoading] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isConnected, setIsConnected] = useState(false);

	function checkIsAdmin() {
		const jwt = window.localStorage.getItem("token");
		const role = window.localStorage.getItem("role");
		return role === "admin" && jwt !== undefined && jwt!.length > 60;
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
	}, [isLoading]);

	const handleDisconnect = () => {
		setisLoading(true);
		window.localStorage.clear();
		push("/login");
	};

	if (isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl">Loading...</h1>
				<FidgetSpinner
					visible={true}
					height="140"
					width="140"
					backgroundColor="#000000"
					ariaLabel="fidget-spinner-loading"
					wrapperStyle={{}}
					wrapperClass="fidget-spinner-wrapper"
				/>
			</div>
		);
	}

	const { push } = useRouter();
	return (
		<header className="w-full flex flex-row justify-between px-4 gap-2 items-center h-[10vh] bg-black">
			<div className="flex flex-row items-center gap-2 w-[75px]">
				<img
					src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
					alt=""
					className="w-full h-full rounded-full"
				/>
			</div>
			{isConnected ? (
				<ul className="text-white flex-row items-center md:gap-4 lg:gap-14 hidden md:flex">
					<Link href="/">
						<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
							<FaTshirt size={26} />
							Products
						</li>
					</Link>
					<Link href="/cart">
						<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
							<FaShoppingCart size={26} />
							Cart
						</li>
					</Link>
					<Link href="/profile">
						<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
							{" "}
							<FaUser size={24} />
							My profile
						</li>
					</Link>{" "}
					{isAdmin && (
						<Link href="/admin">
							<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
								<RiAdminFill size={26} />
								Admin
							</li>
						</Link>
					)}
				</ul>
			) : (
				<div className="flex flex-row gap-4 items-center">
					<button
						onClick={() => {
							push("/login");
						}}
						className="hidden md:flex bg-white hover:bg-slate-200 text-black flex-row items-center gap-2 p-3 rounded-lg"
					>
						<FaArrowRightFromBracket size={26} />
						Login
					</button>
					<button
						onClick={() => {
							push("/register");
						}}
						className="hidden md:flex bg-sky-500 hover:bg-sky-700 flex-row items-center gap-2  text-white p-3 rounded-lg"
					>
						<FaArrowRightFromBracket size={26} />
						Register
					</button>
				</div>
			)}
			{isConnected && (
				<button
					onClick={handleDisconnect}
					className="hidden md:flex bg-red-500 hover:bg-red-700 flex-row items-center gap-2  text-white p-3 rounded-lg"
				>
					<FaArrowRightFromBracket size={26} />
					Disconnect
				</button>
			)}
			<DropMenu />
		</header>
	);
};

export default Header;
