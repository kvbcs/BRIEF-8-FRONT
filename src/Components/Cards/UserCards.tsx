import { deleteUser } from "@/Services/fetchData";
import { AllUserProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UserCards = ({ user }: { user: AllUserProps }) => {
    const [isLoading, setIsLoading] = useState(false);
	function handleUserDelete(id: string) {
		deleteUser(id)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					toast.success("User deleted !");
					setIsLoading(true);
				} else {
					toast.error("wtf");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("oupsie");
			}),
			[isLoading];
	}
	return (
		<div className="bg-gray-800 w-full flex flex-col gap-2 items-center p-2 rounded-lg text-white">
			<h2>Name : {user.name}</h2>
			<p>Email : {user.email}</p>
			<div className="w-full flex flex-row justify-evenly">
				<button
					onClick={(e) => {
						console.log(user.id);
					}}
					className="flex flex-row gap-2 items-center p-2 rounded-lg bg-orange-500 hover:bg-orange-700"
				>
					<FaEdit />
					Edit
				</button>
				<button
					onClick={(e) => {
                        console.log(user.id);
                        handleUserDelete(user.id)
					}}
					className="flex flex-row gap-2 items-center p-2 rounded-lg bg-red-500 hover:bg-red-700"
				>
					<FaTrashAlt />
					Delete
				</button>
			</div>
		</div>
	);
};

export default UserCards;
