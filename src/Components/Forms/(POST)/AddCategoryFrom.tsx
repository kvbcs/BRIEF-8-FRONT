"use client";
import { AllCategoriesProps } from "@/Utils/types";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../../Error";
import { addCategory } from "@/Services/categoryService";

const AddCategoryForm = ({ handleClose, setisLoading, isLoading }: any) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AllCategoriesProps>();

	const onSubmit: SubmitHandler<AllCategoriesProps> = (data) => {
		setisLoading(true);

		addCategory(data)
			.then((res) => {
				toast.success("Category created !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Server error");
			})
			.finally(() => {
				setisLoading(false);
			});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-2 md:px-6 py-12 lg:px-8 bg-white w-2/3 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Add a category
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							Category name
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<ErrorMsg
									content={"The name field is required"}
								/>
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 text-black"
						>
							Category image
						</label>
						<div className="mt-2">
							<input
								type="url"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("image", { required: true })}
							/>
							{errors.name && (
								<ErrorMsg
									content={"The image field is required"}
								/>
							)}
						</div>
					</div>

					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCategoryForm;
