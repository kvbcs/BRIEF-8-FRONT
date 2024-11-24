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
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
	const [isLoading, setisLoading] = useState(true);
	const [userList, setUserList] = useState<AllUserProps[]>([]);
	const [categoryList, setCategoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		Promise.all([getAllUsers(), getAllCategories()])
			.then(([usersRes, categoriesRes]) => {
				setUserList(usersRes.users);
				setCategoryList(categoriesRes.categories);
				toast.success("Users and Categories loaded!", {
					id: "data-loaded",
				});
				
			})
			.catch((e) => {
				toast.error("Error loading data", { id: "data-error" });
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="h-screen mb-40 w-full flex flex-col justify-evenly">
			<Title title={"Administration Dashboard"} />
			<section className="flex flex-row w-full justify-evenly mt-10">
				<AddEventModal
					setisLoading={setisLoading}
					isLoading={isLoading}
				/>
				<AddCategoryModal
					setisLoading={setisLoading}
					isLoading={isLoading}
				/>
			</section>
			<section className="flex flex-col gap-4 md:flex-row md:justify-evenly md:h-[500px]">
				<article className="mt-10 w-full flex flex-col justify-evenly gap-4 items-center p-4 md:w-1/3 rounded-3xl h-fit max-h-[75vh] bg-gradient-to-b from-blue-700 to-sky-500 text-white shadow-2xl overflow-auto md:h-fit md:max-h-[570px]">
					<h2 className="text-3xl font-bold my-10">All Users</h2>
					{userList &&
						userList.map((user) => {
							return (
								<UserCards
									key={user.id}
									user={user}
									setisLoading={setisLoading}
									isLoading={isLoading}
								/>
							);
						})}
				</article>
				<article className="mt-10 w-full flex flex-col justify-evenly gap-4 items-center p-4 md:w-1/3 rounded-3xl h-fit max-h-[75vh] bg-gradient-to-b from-blue-700 to-sky-500 text-white shadow-2xl overflow-auto md:h-fit md:max-h-[570px]">
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
				</article>
			</section>
		</div>
	);
};

export default page;
