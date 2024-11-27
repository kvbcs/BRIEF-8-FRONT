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
	const role = window.localStorage.getItem("role");
	const jwt = window.localStorage.getItem("token");

	useEffect(() => {
		Promise.all([getAllUsers(), getAllCategories()])

			.then(([usersRes, categoriesRes]) => {
				if (
					role !== `${process.env.NEXT_PUBLIC_ADMIN_ROLE}` ||
					jwt === undefined ||
					jwt!.length < 60
				) {
					toast.error("Page not found", { id: "role-error" });
				} else {
					setUserList(usersRes.users);
					setCategoryList(categoriesRes.categories);
					toast.success("Users and Categories loaded!", {
						id: "data-loaded",
					});
				}
			})
			.catch((e) => {
				toast.error("Error loading data", { id: "data-error" });
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [isLoading]);

	if (
		role !== `${process.env.NEXT_PUBLIC_ADMIN_ROLE}` ||
		jwt === undefined ||
		jwt!.length < 60
	) {
		return (
			<main className="w-full h-full m-auto text-center">
				<h2 className="text-xl md:text-5xl font-bold">
					404 Page Not Found
				</h2>
				<img
					src="https://i.pinimg.com/originals/14/fd/8e/14fd8efea17748c4b959a07f91e09154.png"
					alt="An image of people with question marks"
					className="h-1/3 w-full md:w-1/4 m-auto"
				/>
			</main>
		);
	}
	if (isLoading) {
		return <Loading />;
	}

	return (
		<main className="min-h-screen max-h-fit mt-5 mb-40 w-full flex flex-col justify-evenly">
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
				<article className="mt-10 mx-4 md:mx-0 flex flex-col justify-evenly gap-4 items-center p-4 md:w-1/3 rounded-3xl h-fit max-h-[50vh] bg-gradient-to-b from-blue-700 to-sky-500 text-white shadow-2xl overflow-auto md:h-fit md:max-h-[570px]">
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
				<article className="mt-10 mx-4 md:mx-0 flex flex-col justify-evenly gap-4 items-center p-4 md:w-1/3 rounded-3xl h-fit max-h-[50vh] bg-gradient-to-b from-blue-700 to-sky-500 text-white shadow-2xl overflow-auto md:h-fit md:max-h-[570px]">
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
		</main>
	);
};

export default page;
