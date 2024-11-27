"use client";
import Loading from "@/Components/Loading";
import { AddAgendaModal } from "@/Components/Modal/(POST)/AddAgendaModal";
import { getOneEvent } from "@/Services/eventService";
import { AllEventsProps } from "@/Utils/types";
import { format } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
export type ParamsProps = {
	id: string;
};
const EventPage = ({ params }: { params: ParamsProps }) => {
	const [eventDetails, setEventDetails] = useState<AllEventsProps>();
	const [isLoading, setisLoading] = useState(true);

	const eventId = params.id;
	const formatDate = (date?: Date | string) =>
		date ? format(new Date(date), "MM/dd/yyyy HH:mm") : "";

	useEffect(() => {
		if (!eventId) {
			toast.error("Event ID is missing.");
			setisLoading(false);
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
				toast.error("Unexisting id");
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [eventId]);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<main className="min-h-screen max-h-fit w-full flex flex-col md:flex-row p-4 md:p-20 gap-10 mb-20 md:mb-0">
			<section className="flex-1 h-full w-full md:w-1/2">
				<Image
					src={eventDetails!.image}
					alt="An image of the event"
					className="h-full w-full object-cover rounded-3xl shadow-2xl"
					width={1000}
					height={1000}
					loading="lazy"
				/>
			</section>
			<section className="flex-1 h-full bg-slate-100 p-4 md:p-10 rounded-3xl shadow-2xl md:w-1/2 w-full flex flex-col justify-evenly gap-6">
				<div className="flex flex-row w-full items-center justify-between">
					<p className="font-bold text-sm md:text-base italic">
						Created on the {formatDate(eventDetails?.createdAt)}
					</p>

					<p className="bg-black font-bold italic text-white text-sm md:text-base p-3 rounded-full w-fit">
						{eventDetails?.category?.name}
					</p>
				</div>

				<h2 className="text-xl md:text-3xl break-words whitespace-nowrap overflow-y-auto truncate h-fit text-blue-700 font-bold font-serif text-center w-full">
					{eventDetails!.title}
				</h2>
				<p className="text-sm md:text-xl text-black w-full text-justify h-[150px] overflow-auto">
					{eventDetails?.description}
				</p>

				<div className="w-full gap-2 md:gap-6 flex flex-col md:flex-row items-center md:justify-evenly bg-gradient-to-t from-blue-700 to-blue-800 text-white rounded-full p-2 md:p-4">
					<p className="font-bold text-sm md:text-base lg:text-xl">
						Starts on : {formatDate(eventDetails?.startDate)}
					</p>
					<p className="font-bold text-sm md:text-base lg:text-xl">
						Ends on : {formatDate(eventDetails?.endDate)}
					</p>
				</div>
				<hr className="border-1 border-black w-full" />

				<div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 mb-4 md:mb-0">
					<p className="text-lg md:text-4xl text-green-500 font-bold">
						$ {eventDetails?.price}
					</p>
					<p className="text-black italic font-bold bg-gray-300 rounded-full text-base md:text-xl p-2 md:p-4">
						{eventDetails?.quantity}/{eventDetails?.maxParticipants}{" "}
						participants.
					</p>
					<AddAgendaModal
						event={eventDetails!}
						setisLoading={setisLoading}
					/>
				</div>
			</section>
		</main>
	);
};

export default EventPage;
