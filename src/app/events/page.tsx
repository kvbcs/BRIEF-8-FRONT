"use client";

import EventCards from "@/Components/Cards/EventCards";
import Search from "@/Components/Search";
import { getAllCategories } from "@/Services/categoryService";
import { getAllEvents } from "@/Services/eventService";
import { AllCategoriesProps, AllEventsProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";

export default function Home() {
	const [search, setSearch] = useState<string>("");
	const [isLoading, setisLoading] = useState(true);
	const [eventList, setEventList] = useState<AllEventsProps[]>([]);
	const [categoryList, setCatgoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		getAllEvents()
			.then((res) => {
				try {
					setEventList(res);
					console.log(res);
					toast.success("Events loaded !", { id: "123" });
					setisLoading(false);
				} catch (e) {
					console.log(e);
					toast.error("Error loading events" + e);
					setisLoading(false);
				}
			})
			.catch((e) => {
				console.log(e);
				toast.error("Server error" + e);
				setisLoading(false);
			});
	}, []);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				setCatgoryList(res);
				toast.success("Categories loaded !", { id: "123" });
				console.log(res);
				setisLoading(false);
			})
			.catch((e) => {
				toast.error("Server error" + e);
				console.log(e);
				setisLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl">Loading...</h1>
				<Hourglass
					visible={true}
					height="80"
					width="80"
					ariaLabel="hourglass-loading"
					wrapperStyle={{}}
					wrapperClass=""
					colors={["#306cce", "#72a1ed"]}
				/>
			</div>
		);
	}
	return (
		<div className="px-8 min-h-[80vh] max-h-fit w-full flex flex-col gap-16 my-8">
			<h2 className="text-2xl font-bold text-center">Events Available</h2>
			<Search setEventList={setEventList} setIsLoading={setisLoading} />
			<div className="w-full flex flex-row justify-center md:justify-end gap-2">
				<select className="border-2 rounded-lg p-2 border-black w-fit">
					{Array.isArray(categoryList) &&
						categoryList.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
				</select>
				<select className="border-2 rounded-lg p-2 border-black w-fit">
					<option>0-50$</option>
					<option>50-100$</option>
					<option>+100$</option>
				</select>
			</div>
			<div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
				{Array.isArray(eventList) &&
					eventList.map((event) => {
						return (
							<EventCards
								key={event.id}
								setisLoading={setisLoading}
								event={event}
							/>
						);
					})}
			</div>
		</div>
	);
}
