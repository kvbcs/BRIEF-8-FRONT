"use client";
import { AllUserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateUser } from "@/Services/userService";

const UpdateUserForm = ({
	user,
	setisLoading,
	handleClose,
}: {
	user: AllUserProps;
	setisLoading: any;
	handleClose: any;
}) => {
	const [name, setName] = useState(user?.name || "");
	const [email, setEmail] = useState(user?.email || "");

	const [isLoaded, setIsLoaded] = useState(false);
	const [userData, setuserData] = useState<AllUserProps>();

	useEffect(() => {
		if (!isLoaded && userData) {
			setName(userData?.name);
			setEmail(userData?.email);
			setIsLoaded(true);
		}
	}, [user, isLoaded]);

	function handleSubmit() {
		let userUpdateData = {
			id: user.id,
			name: name,
			email: email,
		};
		updateUser(userUpdateData, userUpdateData.id)
			.then((res) => {
				setisLoading(true);
				console.log(res);
				console.log(userUpdateData);
				toast.success("User updated !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Server error" + e);
				console.log(e);
				console.log(userUpdateData);
			}),
			[];
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit an user
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							User name
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setName(e.target.value)}
								defaultValue={user?.name}
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("name", { required: true })}
							/>
							{/* {errors.name && <ErrorMsg content={"name"} />} */}
						</div>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 text-black"
						>
							User email
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setEmail(e.target.value)}
								defaultValue={user?.email}
								type="url"
								id="image"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								// {...register("image", { required: true })}
							/>
							{/* {errors.image && <ErrorMsg content={"image"} />} */}
						</div>
						{/* <p>Preview</p>
								<img
									src={image || cryptoProps?.image}
									className="w-32 h-32 object-cover"
								/> */}
					</div>

					<div>
						<input
							onClick={() => {
								console.log(user);

								handleSubmit();
							}}
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateUserForm;
