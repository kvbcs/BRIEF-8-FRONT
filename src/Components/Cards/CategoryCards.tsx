import React, { useState } from "react";
import { AllCategoriesProps } from "../../Utils/types";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { deleteCategory } from "@/Services/categoryService";
import { UpdateCategoryModal } from "../Modal/(UPDATE)/UpdateCategoryModal";

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
					console.log(res);
					toast.success("Category deleted !");
				} else {
					toast.error("Unexisting category");
				}
			})
			.catch((e) => {
				console.log(e),
					toast.error(
						"Events with this category can't be deleted yet" + e
					);
			}),
			[];
	}
	return (
		<div className="w-full flex flex-row justify-between items-center bg-gray-700 rounded-lg p-2">
			<h3 className="text-sm" key={category.id}>
				{category.name}
			</h3>
			<img src={category.image} alt="" key={category.id} />
			<div className="flex flex-row gap-2">
				<UpdateCategoryModal
					setisLoading={setisLoading}
					category={category}
				/>
				<button
					onClick={(e) => {
						console.log(category.id);
						handleCategoryDelete(category.id);
					}}
					className="flex flex-row items-center p-2 rounded-full bg-red-500 hover:bg-red-700"
				>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	);
};

export default CategoryCards;
