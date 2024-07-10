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
					<DropdownMenuLabel>My Profile</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<Link href="/">
						<DropdownMenuItem>Products</DropdownMenuItem>
					</Link>
					<DropdownMenuItem>Categories</DropdownMenuItem>
					<DropdownMenuItem>Cart(0)</DropdownMenuItem>
					<Link href="/login">
						<DropdownMenuItem className="bg-red-700 text-white rounded-lg hover:bg-red-700">
							Disconnect
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default DropMenu;
