"use client";
import { addProduct, updateProduct } from "@/Services/fetchData";
import { AllProductsProps } from "@/Utils/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../Error";

const UpdateProductForm = (handleClose: any, id: AllProductsProps) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AllProductsProps>();

	const onSubmit: SubmitHandler<AllProductsProps> = (data) =>
		updateProduct(data, id.id)
			.then((res) => {
				console.log(res);
				// setIsReloadNeeded(true);
				toast.success("Product updated !");
			})
			.catch((e) => {
				toast.error("Error");
				console.log(e);
				console.log(data);
			});

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit a product
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product name
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("name", { required: true })}
							/>
							{errors.name && <ErrorMsg content={"name"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product image
						</label>
						<div className="mt-2">
							<input
								type="url"
								id="image"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("image", { required: true })}
							/>
							{errors.image && <ErrorMsg content={"image"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="stock"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product stock
						</label>
						<div className="mt-2">
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("stock", { required: true })}
							/>
							{errors.stock && <ErrorMsg content={"stock"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product price
						</label>
						<div className="mt-2">
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("price", { required: true })}
							/>
							{errors.price && <ErrorMsg content={"price"} />}
						</div>
					</div>
					<div>
						<label
							htmlFor="categoryId"
							className="block text-sm font-medium leading-6 text-black"
						>
							Product categoryId
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("categoryId", { required: true })}
							/>
							{errors.categoryId && (
								<ErrorMsg content={"categoryId"} />
							)}

							<div>
								{/* <p>Preview</p>
								<img
									src={image || cryptoProps?.image}
									className="w-32 h-32 object-cover"
								/> */}
							</div>
						</div>
					</div>
					<div>
						<input
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
							
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProductForm;
