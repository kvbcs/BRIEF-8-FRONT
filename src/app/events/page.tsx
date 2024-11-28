"use client";

import EventCards from "@/Components/Cards/EventCards";
import Loading from "@/Components/Loading";
import Search from "@/Components/Search";
import Title from "@/Components/Title";
import { getAllCategories } from "@/Services/categoryService";
import { getAllEvents } from "@/Services/eventService";
import { AllCategoriesProps, AllEventsProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
	const [isLoading, setisLoading] = useState(true);
	const [eventList, setEventList] = useState<AllEventsProps[]>([]);
	const [categoryList, setCatgoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		Promise.all([getAllEvents(), getAllCategories()])
			.then(([eventsRes, categoriesRes]) => {
				try {
					setEventList(eventsRes.events);
					setCatgoryList(categoriesRes.categories);
					toast.success("Events and categories loaded !", {
						id: "data-success",
					});
					setisLoading(false);
				} catch (e) {
					toast.error("Error loading data", { id: "data-error" });
				}
			})
			.catch((e) => {
				toast.error("Server error", { id: "server-error" });
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<main className="px-8 min-h-[80vh] max-h-fit mb-40 w-full flex flex-col gap-16 my-8">
			<Title title={"Available Events"} />

			<Search setEventList={setEventList} setIsLoading={setisLoading} />
			<aside className="w-full flex flex-row justify-center md:justify-end gap-2">
				<select className="border-2 rounded-full shadow-2xl p-2 border-black w-fit">
					{categoryList &&
						categoryList.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
				</select>
				<select className="border-2 rounded-full shadow-2xl p-2 border-black w-fit">
					<option>0-50$</option>
					<option>50-100$</option>
					<option>+100$</option>
				</select>
			</aside>
			<section className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
				{eventList &&
					eventList.map((event) => {
						return (
							<EventCards
								key={event.id}
								setisLoading={setisLoading}
								event={event}
							/>
						);
					})}
			</section>
		</main>
	);
};

export default page;
