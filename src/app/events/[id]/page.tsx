"use client";
import Loading from "@/Components/Loading";
import { getOneEvent } from "@/Services/eventService";
import { AllEventsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
export type ParamsProps = {
	id: string;
};
const page = ({ params }: { params: ParamsProps }) => {
	const [eventDetails, setEventDetails] = useState<AllEventsProps>();
	const [isLoading, setIsLoading] = useState(true);

	const eventId = params.id;
	console.log(eventId);

	useEffect(() => {
		if (!eventId) {
			console.error("Event ID is undefined");
			toast.error("Event ID is missing.");
			setIsLoading(false);
			return;
		}
		getOneEvent(eventId)
			.then((res) => {
				if (res) {
					setEventDetails(res);
					toast.success("Event loaded");
				} else {
					throw new Error("Event not found");
				}
			})
			.catch((e) => {
				console.log(e);
				toast.error("Unexisting id" + e);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [eventId]);

	if (isLoading) {
		return <Loading />;
	}
	return <p className="text-black">id: {params.id}</p>;
};

export default page;
