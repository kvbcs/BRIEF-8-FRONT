import { deleteUser } from "@/Services/userService";
import { AllUserProps } from "@/Utils/types";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateUserModal } from "../Modal/(UPDATE)/UpdateUserModal";

const UserCards = ({
	user,
	setisLoading,
	isLoading,
}: {
	user: AllUserProps;
	setisLoading: any;
	isLoading: any;
}) => {
	useEffect(() => {
		handleUserDelete;
	}, [isLoading]);

	async function handleUserDelete(id: string) {
		setisLoading(true);
		deleteUser(id)
			.then((res) => {
				if (res.status === 200) {
					toast.success("User deleted !");
				} else {
					toast.error("Unexisting user");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("Server error");
			})
			.finally(() => {
				setisLoading(false);
			}),
			[];
	}
	return (
		<div className="bg-white w-full flex flex-row gap-2 h-[125px] items-center justify-evenly p-2 rounded-lg">
			<div className="w-1/2 flex flex-col gap-1 text-black flex-wrap">
				<p>First Name : {user.firstName}</p>
				<p>Last Name : {user.lastName}</p>
				<p>Email : {user.email}</p>
			</div>
			<div className="w-fit flex flex-col gap-2">
				<UpdateUserModal
					setisLoading={setisLoading}
					user={user}
					isLoading={isLoading}
				/>
				<button
					onClick={(e) => {
						console.log(user.id);
						handleUserDelete(user.id);
					}}
					className="flex flex-row items-center p-3 rounded-full bg-red-500 hover:bg-red-700 hover:scale-125 transition ease-in-out"
				>
					<FaTrashAlt size={26} />
				</button>
			</div>
		</div>
	);
};

export default UserCards;
