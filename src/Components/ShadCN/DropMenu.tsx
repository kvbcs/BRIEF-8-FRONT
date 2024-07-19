"use client";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightFromBracket, FaUser } from "react-icons/fa6";
import { FaShoppingCart, FaTshirt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";

const DropMenu = () => {
	const { push } = useRouter();
	return (
		<div className="h-[60%] md:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="text-white hover:bg-slate-500 h-full border-2 p-2 flex flex-row items-center rounded-full">
						<IoIosMenu size={52} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<Link href={`/profile`}>
						<DropdownMenuLabel className="flex flex-row items-center gap-2">
							<FaUser />
							My Profile
						</DropdownMenuLabel>
					</Link>
					<DropdownMenuSeparator />
					<Link href="/admin">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<RiAdminFill /> Admin
						</DropdownMenuItem>
					</Link>
					<Link href="/">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaTshirt />
							Products
						</DropdownMenuItem>
					</Link>

					<Link href="/cart">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaShoppingCart />
							Cart
						</DropdownMenuItem>{" "}
					</Link>

					<DropdownMenuItem
						onClick={() => {
							window.localStorage.clear();
							push("/login");
						}}
						className="bg-red-700 text-white rounded-lg hover:bg-red-700 flex flex-row items-center gap-2"
					>
						<FaArrowRightFromBracket />
						Disconnect
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default DropMenu;
