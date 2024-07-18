"use client";
import React from "react";
import DropMenu from "../ShadCN/DropMenu";
import Link from "next/link";
import { FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import { FaShoppingCart, FaTshirt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
	const { push } = useRouter();
	return (
		<div className="w-full flex flex-row justify-between px-4 gap-2 items-center h-[10vh] bg-black">
			<div className="flex flex-row items-center gap-2 w-[75px]">
				<img
					src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
					alt=""
					className="w-full h-full rounded-full"
				/>
			</div>
			<ul className="text-white flex-row items-center md:gap-4 lg:gap-14 hidden md:flex">
				<Link href="/">
					<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
						<FaTshirt />
						Products
					</li>
				</Link>
				<Link href="/cart">
					<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
						<FaShoppingCart />
						Cart
					</li>
				</Link>
				<Link href="/profile">
					<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
						{" "}
						<FaUser />
						My profile
					</li>
				</Link>{" "}
				<Link href="/admin">
					<li className="hover:bg-slate-600 flex flex-row items-center gap-2 p-2 rounded-lg">
						<RiAdminFill />
						Admin
					</li>
				</Link>{" "}
			</ul>
			<button
				onClick={() => {
					window.localStorage.clear();
					push("/login");
				}}
				className="hidden md:flex bg-red-500 hover:bg-red-700 flex-row items-center gap-2  text-white p-3 rounded-lg"
			>
				<FaArrowRightFromBracket />
				Disconnect
			</button>
			<DropMenu />
		</div>
	);
};

export default Header;
