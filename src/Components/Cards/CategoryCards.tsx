import React, { useState } from "react";
import { AllCategoriesProps } from "../../Utils/types";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { deleteCategory } from "@/Services/categoryService";
import { UpdateCategoryModal } from "../Modal/(UPDATE)/UpdateCategoryModal";
import Image from "next/image";

const CategoryCards = ({
	category,
	setisLoading,
}: {
	category: AllCategoriesProps;
	setisLoading: any;
}) => {
	function handleCategoryDelete(id: string) {
		deleteCategory(id)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);
					toast.success("Category deleted !");
				} else {
					toast.error("Unexisting category");
				}
			})
			.catch((e) => {
					toast.error(
						"Events with this category can't be deleted yet"
					);
			}),
			[];
	}
	return (
		<div className="w-full flex px-10 flex-row justify-around h-[125px] items-center bg-white rounded-lg p-2">
			<h3 className="text-xl text-black font-bold w-1/3" key={category.id}>
				{category.name}
			</h3>
			<img
				src={category.image}
				alt=""
				key={category.id}
				className="h-[90%] w-1/3 object-cover rounded-3xl"
			/>
			<div className="flex flex-col h-full items-center justify-evenly gap-2">
				<UpdateCategoryModal
					setisLoading={setisLoading}
					category={category}
				/>
				<button
					onClick={(e) => {
						console.log(category.id);
						handleCategoryDelete(category.id);
					}}
					className="flex flex-row items-center p-3 rounded-full bg-red-500 hover:bg-red-700 hover:scale-125 transition ease-in-out"
				>
					<FaTrashAlt size={26} />
				</button>
			</div>
		</div>
	);
};

export default CategoryCards;
