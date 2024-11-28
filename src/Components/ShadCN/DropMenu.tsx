"use client";
import React, { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightFromBracket, FaHouse, FaUserPen } from "react-icons/fa6";
import { FaCalendarAlt, FaSignInAlt } from "react-icons/fa";
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
		<div className="h-[60%] lg:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="text-white hover:bg-slate-500 h-full border-2 p-2 flex flex-row items-center rounded-full">
						<IoIosMenu size={52} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="h-fit flex flex-col gap-4">
					<Link href="/">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaHouse size={20} />
							Home
						</DropdownMenuItem>
					</Link>
					<Link href="/events">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<BiSolidParty size={20} />
							Events
						</DropdownMenuItem>{" "}
					</Link>

					{isConnected ? (
						<>
							<Link href="/agenda">
								<DropdownMenuItem className="flex flex-row items-center gap-2">
									<FaCalendarAlt size={20} />
									Agenda
								</DropdownMenuItem>
							</Link>
							{isAdmin && (
								<Link href="/admin">
									<DropdownMenuItem className="flex flex-row items-center gap-2">
										<RiAdminFill size={20} /> Admin
									</DropdownMenuItem>
								</Link>
							)}
							<DropdownMenuItem
								onClick={handleDisconnect}
								className="bg-gradient-to-t from-red-800 to-red-600 text-white rounded-full hover:bg-red-700 flex flex-row items-center gap-2"
							>
								<FaArrowRightFromBracket size={20} />
								Log Out
							</DropdownMenuItem>
						</>
					) : (
						<>
							<DropdownMenuItem
								onClick={() => {
									push("/login");
								}}
								className="bg-white text-black border-2 border-black rounded-full hover:bg-slate-300 flex flex-row items-center gap-2"
							>
								<FaSignInAlt size={20} />
								Login
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									push("/register");
								}}
								className="bg-gradient-to-t from-[gold] to-[#FEB537] rounded-full flex flex-row items-center gap-2 text-black"
							>
								<FaUserPen size={20} />
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
