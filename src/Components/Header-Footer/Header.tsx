import React from "react";
import DropMenu from "../ShadCN/DropMenu";

const Header = () => {
	return (
		<div className="w-full flex flex-row justify-between px-4 gap-2 items-center h-[10vh] bg-black">
			<div className="flex flex-row items-center gap-2">
				<img
					src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
					alt=""
					className="w-[50px] rounded-full"
				/>
			</div>
			<DropMenu />
		</div>
	);
};

export default Header;
