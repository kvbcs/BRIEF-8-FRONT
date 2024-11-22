"use client";
import React, { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightFromBracket, FaHouse, FaUserPen } from "react-icons/fa6";
import { FaShoppingCart, FaSignInAlt, FaTshirt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";
import { useStoreConnect } from "../stores/connextTest";
import { BiSolidParty } from "react-icons/bi";

const DropMenu = () => {
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
		<div className="h-[60%] md:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="text-white hover:bg-slate-500 h-full border-2 p-2 flex flex-row items-center rounded-full">
						<IoIosMenu size={52} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="h-fit flex flex-col gap-4">
					<Link href="/">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaHouse />
							Home
						</DropdownMenuItem>
					</Link>
					<Link href="/events">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<BiSolidParty />
							Events
						</DropdownMenuItem>{" "}
					</Link>

					{isConnected ? (
						<>
							<Link href="/agenda">
								<DropdownMenuItem className="flex flex-row items-center gap-2">
									<FaHouse />
									Agenda
								</DropdownMenuItem>
							</Link>
							{isAdmin && (
								<Link href="/admin">
									<DropdownMenuItem className="flex flex-row items-center gap-2">
										<RiAdminFill /> Admin
									</DropdownMenuItem>
								</Link>
							)}
							<DropdownMenuItem
								onClick={handleDisconnect}
								className="bg-red-700 text-white rounded-lg hover:bg-red-700 flex flex-row items-center gap-2"
							>
								<FaArrowRightFromBracket />
								Disconnect
							</DropdownMenuItem>
						</>
					) : (
						<>
							<DropdownMenuItem
								onClick={() => {
									push("/login");
								}}
								className="bg-white text-black border-2 border-black rounded-lg hover:bg-slate-300 flex flex-row items-center gap-2"
							>
								<FaSignInAlt />
								Login
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									push("/register");
								}}
								className="bg-sky-700 text-white rounded-lg hover:bg-sky-700 flex flex-row items-center gap-2"
							>
								<FaUserPen />
								Register
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default DropMenu;
