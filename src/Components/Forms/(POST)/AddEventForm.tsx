"use client";
import { addEvent } from "@/Services/eventService";
import { AllCategoriesProps, AllEventsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../../Error";
import { getAllCategories } from "@/Services/categoryService";
import { formatISO } from "date-fns";

const AddEventForm = (
	{ setisLoading, handleClose, isLoading }: any,
	event: AllEventsProps
) => {
	const [categoriesList, setCategoriesList] = useState<AllCategoriesProps[]>(
		[]
	);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				toast.success("Categories loaded !");
				setCategoriesList(res.categories);
			})
			.catch((e) => {
				toast.error("Server error");
			})
			.finally(() => {
				setisLoading(false);
			});
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AllEventsProps>();

	const onSubmit: SubmitHandler<AllEventsProps> = (data) => {
		setisLoading(true);

		const formattedData = {
			...data,
			startDate: formatISO(new Date(data.startDate)),
			endDate: formatISO(new Date(data.endDate)),
		};

		addEvent(formattedData)
			.then((res) => {
				toast.success("Event created !");
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
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full bg-white mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-black">
					Add an event
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event title
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("title", { required: true })}
							/>
							{errors.title && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event image
						</label>
						<div className="mt-2">
							<input
								type="url"
								id="image"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("image", { required: true })}
							/>
							{errors.image && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
						{/* <div className="mt-4">
							<p>Preview</p>
							<img
								src={}
								alt="Your event image"
								className="w-32 h-32 object-cover"
							/>
						</div> */}
					</div>
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event description
						</label>
						<div className="mt-2">
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("description", { required: true })}
							/>
							{errors.description && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="startDate"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event start date
						</label>
						<div className="mt-2">
							<input
								type="datetime-local"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("startDate", { required: true })}
							/>
							{errors.startDate && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="endDate"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event end date
						</label>
						<div className="mt-2">
							<input
								type="datetime-local"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("endDate", { required: true })}
							/>
							{errors.endDate && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>

					<div>
						<label
							htmlFor="maxParticipants"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event max participants
						</label>
						<div className="mt-2">
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("maxParticipants", {
									required: true,
								})}
							/>
							{errors.maxParticipants && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event price
						</label>
						<div className="mt-2">
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("price", { required: true })}
							/>
							{errors.price && (
								<ErrorMsg content={"This field is required"} />
							)}
						</div>
					</div>
					<div>
						<label
							htmlFor="categoryId"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event category
						</label>
						<div className="mt-2">
							<select
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
								{...register("categoryId", { required: true })}
							>
								<option value="">Select a category</option>

								{categoriesList &&
									categoriesList.map((category) => {
										return (
											<option
												selected={
													category.id ===
													event.categoryId
												}
												key={category.id}
												value={category.id}
											>
												{category.name}
											</option>
										);
									})}
							</select>
							{errors.categoryId && (
								<ErrorMsg content={"This field is required"} />
							)}

							<div></div>
						</div>
					</div>
					<div className="flex justify-between items-center h-[5vh]">
						<button
							className="my-8 flex w-1/3 justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={handleClose}
						>
							Cancel
						</button>
						<input
							type="submit"
							className="my-8 flex w-1/3 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddEventForm;
