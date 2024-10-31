"use client";
import { AllCategoriesProps, AllEventsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateEvent } from "@/Services/eventService";
import { getAllCategories } from "@/Services/categoryService";

const UpdateEventForm = ({
	event,
	setisLoading,
	handleClose,
}: {
	event: AllEventsProps;
	setisLoading: any;
	handleClose: any;
}) => {
	const [name, setName] = useState(event?.name || "");
	const [image, setImage] = useState(event?.image || "");
	const [price, setPrice] = useState<number>(event?.price || 0);
	const [stock, setStock] = useState<number>(event?.stock || 0);
	const [categoryId, setCategoryId] = useState(event?.categoryId || "");
	const [isLoaded, setIsLoaded] = useState(false);
	const [eventData, seteventData] = useState<AllEventsProps>();
	const [categoriesList, setCategoriesList] = useState<AllCategoriesProps[]>(
		[]
	);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				toast.success("Categories loaded !");
				setCategoriesList(res);
				console.log(res);
			})
			.catch((e) => {
				toast.error("Error getting categories", e);
				console.log(e);
			});
	}, [isLoaded]);

	useEffect(() => {
		if (!isLoaded && eventData) {
			setName(eventData?.name);
			setImage(eventData?.image);
			setPrice(eventData?.price);
			setStock(eventData?.stock);
			setCategoryId(eventData?.categoryId);
			setIsLoaded(true);
		}
	}, [event, isLoaded]);

	function handleSubmit() {
		let eventUpdateData = {
			id: event.id,
			name: name,
			image: image,
			stock: stock,
			price: price,
			categoryId: categoryId,
		};
		updateEvent(eventUpdateData, eventUpdateData.id)
			.then((res) => {
				setisLoading(true);
				console.log(res);
				console.log(eventUpdateData);
				toast.success("Event updated !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Error" + e);
				console.log(e);
				console.log(eventUpdateData);
			}),
			[];
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit a event
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event name
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setName(e.target.value)}
								defaultValue={event?.name}
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) => setImage(e.target.value)}
								defaultValue={event?.image}
								type="url"
								id="image"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
						</div>
						<div className="mt-4">
							<p>Preview</p>
							<img
								src={image}
								className="w-32 h-32 object-cover"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="stock"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event stock
						</label>
						<div className="mt-2">
							<input
								onChange={(e) =>
									setStock(e.target.valueAsNumber)
								}
								defaultValue={event?.stock}
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) =>
									setPrice(e.target.valueAsNumber)
								}
								defaultValue={event?.price}
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) => setCategoryId(e.target.value)}
							>
								{categoriesList &&
									categoriesList.map((category) => {
										return (
											<option
												selected={
													event?.category?.id ===
													category.id
												}
												key={category.id}
												value={category.id}
											>
												{category.name}
											</option>
										);
									})}
							</select>
						</div>
					</div>
					<div>
						<input
							onClick={() => {
								console.log(event);

								handleSubmit();
							}}
							type="submit"
							className="my-8 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							value="Submit"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateEventForm;
