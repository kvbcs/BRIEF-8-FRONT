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
					<DropdownMenuItem>Products</DropdownMenuItem>
					<DropdownMenuItem>Cart(0)</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default DropMenu;
