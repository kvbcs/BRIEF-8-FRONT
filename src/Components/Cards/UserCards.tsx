import { AllUserProps } from "@/Utils/types";
import React from "react";

const UserCards = ({ user }: { user: AllUserProps }) => {
	return (
		<div className="w-full p-2 rounded-lg h-fit bg-black text-white">
			<h2>Name : {user.name}</h2>
			<p>Email : {user.email}</p>
			<div className="w-full flex flex-row justify-evenly">
				<button className="p-2 rounded-lg bg-orange-500 hover:bg-orange-700">
					Edit
				</button>
				<button className="p-2 rounded-lg bg-red-500 hover:bg-red-700">
					Delete
				</button>
			</div>
		</div>
	);
};

export default UserCards;
