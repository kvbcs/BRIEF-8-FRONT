"use client";
import CategoryCards from "@/Components/Cards/CategoryCards";
import UserCards from "@/Components/Cards/UserCards";
import { AddCategoryModal } from "@/Components/Modal/AddCategory";
import { AddProductModal } from "@/Components/Modal/AddProductModal";
import { getAllCategories } from "@/Services/categoryService";
import { getAllUsers } from "@/Services/userService";
import { AllCategoriesProps, AllUserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FidgetSpinner } from "react-loader-spinner";

const page = () => {
	const [isLoading, setisLoading] = useState(false);
	const [userList, setuserList] = useState<AllUserProps[]>([]);
	const [categoryList, setCategoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		getAllUsers()
			.then((res) => {
				setuserList(res);
				setisLoading(true);
				console.log(res);
				toast.success("Got users");
			})
			.catch((e) => {
				console.log(e);
				toast.error("no users :(");
			});
	}, [isLoading]);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				setisLoading(true);
				setCategoryList(res);
				console.log(res);
				toast.success("Got categories");
			})
			.catch((e) => {
				console.log(e);
				toast.error("no categories :(");
			});
	}, [isLoading]);

	if (!isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl">Loading...</h1>
				<FidgetSpinner
					visible={true}
					height="140"
					width="140"
					backgroundColor="#000000"
					ariaLabel="fidget-spinner-loading"
					wrapperStyle={{}}
					wrapperClass="fidget-spinner-wrapper"
				/>
			</div>
		);
	}

	return (
		<div className="h-screen w-full flex flex-col justify-evenly">
			<h1 className="text-center text-2xl">Administration</h1>
			<div className="flex flex-row w-full justify-evenly mt-10">
				<AddProductModal />
				<AddCategoryModal />
			</div>
			<div className="mt-10 w-full flex flex-col justify-evenly gap-4 items-center p-4 rounded-lg min-h-fit max-h-[200px] bg-black text-white overflow-auto">
				<h2>All Users</h2>
				{userList &&
					userList.map((user) => {
						return <UserCards key={user.id} user={user} />;
					})}
			</div>
			<div className="mt-10 w-full flex flex-col justify-evenly gap-4 items-center p-4 rounded-lg h-fit max-h-[200px] bg-black text-white overflow-auto">
				<h2>All Categories</h2>
				{categoryList &&
					categoryList.map((category) => {
						return (
							<CategoryCards
								key={category.id}
								category={category}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default page;
