"use client";
import { AllCategoriesProps, AllEventsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateEvent } from "@/Services/eventService";
import { getAllCategories } from "@/Services/categoryService";
import { format, formatISO } from "date-fns";

const UpdateEventForm = ({
	event,
	setisLoading,
	handleClose,
}: {
	event: AllEventsProps;
	setisLoading: any;
	handleClose: any;
}) => {
	const [title, setTitle] = useState(event?.title || "");
	const [image, setImage] = useState(event?.image || "");
	const [description, setDescription] = useState(event?.description || "");
	const [price, setPrice] = useState<number>(event?.price || 0);
	const [maxParticipants, setMaxParticipants] = useState<number>(
		event?.maxParticipants || 0
	);
	const [startDate, setStartDate] = useState(
		event?.startDate
			? format(new Date(event.startDate), "yyyy-MM-dd'T'HH:mm")
			: ""
	);
	const [endDate, setEndDate] = useState(
		event?.endDate
			? format(new Date(event.endDate), "yyyy-MM-dd'T'HH:mm")
			: ""
	);
	const [categoryId, setCategoryId] = useState(event?.categoryId || "");
	const [isLoaded, setIsLoaded] = useState(false);
	const [eventData, setEventData] = useState<AllEventsProps>();
	const [categoriesList, setCategoriesList] = useState<AllCategoriesProps[]>(
		[]
	);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				toast.success("Categories loaded !"), { id: "123" };
				setCategoriesList(res.categories);
			})
			.catch((e) => {
				toast.error("Error getting categories", e);
			});
	}, [isLoaded]);

	useEffect(() => {
		if (!isLoaded && eventData) {
			setTitle(eventData?.title);
			setImage(eventData?.image);
			setDescription(eventData?.description);
			setStartDate(eventData?.startDate);
			setEndDate(eventData?.endDate);
			setPrice(eventData?.price);
			setMaxParticipants(eventData?.maxParticipants);
			setCategoryId(eventData?.categoryId);
			setIsLoaded(true);
		}
	}, [eventData, isLoaded]);

	function handleSubmit() {
		const eventUpdateData = {
			id: event.id,
			title: title,
			image: image,
			description: description,
			startDate: new Date(startDate).toISOString(),
			endDate: new Date(endDate).toISOString(),
			maxParticipants: maxParticipants,
			price: price,
			categoryId: categoryId,
			createdAt: event.createdAt,
			updatedAt: new Date().toISOString(),
		};

		updateEvent(eventUpdateData, eventUpdateData.id)
			.then((res) => {
				setisLoading(true);

				toast.success("Event updated !");
				handleClose();
			})
			.catch((e) => {
				toast.error("Server error");
			}),
			[];
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-full mx-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
					Edit an event
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="space-y-6">
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event title
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setTitle(e.target.value)}
								defaultValue={event?.title}
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
							htmlFor="description"
							className="block text-sm font-medium leading-6 text-black"
						>
							Event description
						</label>
						<div className="mt-2">
							<input
								onChange={(e) => setDescription(e.target.value)}
								defaultValue={event?.description}
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) => setStartDate(e.target.value)}
								defaultValue={startDate}
								type="datetime-local"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) => setEndDate(e.target.value)}
								defaultValue={endDate}
								type="datetime-local"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
							/>
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
								onChange={(e) =>
									setMaxParticipants(e.target.valueAsNumber)
								}
								defaultValue={event?.maxParticipants}
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
