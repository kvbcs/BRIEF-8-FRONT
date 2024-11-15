"use client";
import CategoryCards from "@/Components/Cards/CategoryCards";
import UserCards from "@/Components/Cards/UserCards";
import Loading from "@/Components/Loading";
import { AddCategoryModal } from "@/Components/Modal/(POST)/AddCategory";
import { AddEventModal } from "@/Components/Modal/(POST)/AddEventModal";
import Title from "@/Components/Title";
import { getAllCategories } from "@/Services/categoryService";
import { getAllUsers } from "@/Services/userService";
import { AllCategoriesProps, AllUserProps } from "@/Utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
	const [isLoading, setisLoading] = useState(true);
	const [userList, setuserList] = useState<AllUserProps[]>([]);
	const [categoryList, setCategoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		Promise.all([getAllUsers(), getAllCategories()])
			.then(([usersRes, categoriesRes]) => {
				setuserList(usersRes.users);
				setCategoryList(categoriesRes.categories);
				console.log(usersRes, categoriesRes);
				toast.success("Users and Categories loaded!", {
					id: "data-loaded",
				});
				setisLoading(false);
			})
			.catch((e) => {
				console.log(e);
				toast.error("Error loading data" + e, { id: "data-error" });
			});
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="h-screen mb-40 w-full flex flex-col justify-evenly">
			<Title title={"Administration Dashboard"} />
			<Link href={"admin/events"}>Go to events</Link>
			<div className="flex flex-row w-full justify-evenly mt-10">
				<AddEventModal setisLoading={setisLoading} />
				<AddCategoryModal setisLoading={setisLoading} />
			</div>
			<div className="flex flex-col gap-4 md:flex-row md:justify-evenly md:h-[500px]">
				<div className="mt-10 w-full md:w-1/3 flex flex-col justify-evenly md:h-fit md:max-h-full gap-4 items-center p-4 rounded-lg min-h-fit max-h-[200px] bg-black text-white overflow-auto">
					<h2 className="text-3xl font-bold my-10">All Users</h2>
					{userList &&
						userList.map((user) => {
							return (
								<UserCards
									key={user.id}
									user={user}
									setisLoading={setisLoading}
								/>
							);
						})}
				</div>
				<div className="mt-10 w-full flex flex-col justify-evenly gap-4 items-center p-4 md:w-1/3 rounded-lg h-fit max-h-[200px] bg-black text-white overflow-auto md:h-fit md:max-h-full">
					<h2 className="text-3xl font-bold my-10">All Categories</h2>
					{categoryList &&
						categoryList.map((category) => {
							return (
								<CategoryCards
									setisLoading={setisLoading}
									key={category.id}
									category={category}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default page;
