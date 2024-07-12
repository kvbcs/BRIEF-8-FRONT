import React, { useState } from "react";
import { AllCategoriesProps } from "../../Utils/types";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteCategory } from "@/Services/fetchData";

const CategoryCards = ({ category }: { category: AllCategoriesProps }) => {
	const [isLoading, setIsLoading] = useState(false);
	function handleCategoryDelete(id: string) {
		deleteCategory(id)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					toast.success("Category deleted !");
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
		<div className="w-full flex flex-row justify-between bg-gray-700 rounded-lg p-2">
			<h3 className="text-sm" key={category.id}>
				{category.name}
			</h3>
			<div className="flex flex-row gap-2">
			<button
				onClick={(e) => {
					console.log(category.id);
				}}
				className="flex flex-row gap-2 items-center p-2 rounded-lg bg-orange-500 hover:bg-orange-700"
			>
				<FaEdit />
				Edit
			</button>
			<button
				onClick={(e) => {
					console.log(category.id);
					handleCategoryDelete(category.id);
				}}
				className="flex flex-row gap-2 items-center p-2 rounded-lg bg-red-500 hover:bg-red-700"
			>
				<FaTrashAlt />
				Delete
			</button></div>
		</div>
	);
};

export default CategoryCards;
