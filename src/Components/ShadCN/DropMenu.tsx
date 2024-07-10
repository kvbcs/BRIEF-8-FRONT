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

const DropMenu = () => {
	return (
		<div className="h-[60%]">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="text-white hover:bg-slate-500 h-full border-2 p-1 flex flex-row items-center rounded-xl">
						<IoIosMenu size={32} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<Link href="/profile">
						<DropdownMenuLabel className="flex flex-row items-center gap-2">
							<FaUser />
							My Profile
						</DropdownMenuLabel>
					</Link>
					<DropdownMenuSeparator />
					<Link href="/">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaTshirt />
							Products
						</DropdownMenuItem>
					</Link>

					<Link href="/cart">
						<DropdownMenuItem className="flex flex-row items-center gap-2">
							<FaShoppingCart />
							Cart(0)
						</DropdownMenuItem>{" "}
					</Link>

					<Link href="/login">
						<DropdownMenuItem className="bg-red-700 text-white rounded-lg hover:bg-red-700 flex flex-row items-center gap-2">
							<FaArrowRightFromBracket />
							Disconnect
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default DropMenu;
