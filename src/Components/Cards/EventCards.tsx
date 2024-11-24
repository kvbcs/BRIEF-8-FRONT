import { AllEventsProps } from "@/Utils/types";
import React from "react";
import toast from "react-hot-toast";
import { UpdateEventModal } from "../Modal/(UPDATE)/UpdateEventModal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteEvent } from "@/Services/eventService";
import { AddAgendaModal } from "../Modal/(POST)/AddAgendaModal";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const EventCards = ({
	event,
	setisLoading,
}: {
	event: AllEventsProps;
	setisLoading: any;
}) => {
	const formatDate = (date?: Date | string) =>
		date ? format(new Date(date), "MM/dd/yyyy HH:mm") : "";

	function handleEventDelete(id: string) {
		deleteEvent(id)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);
					console.log(res);
					toast.success("Event deleted !");
				} else {
					toast.error("Something is wrong");
				}
			})
			.catch((e) => {
				console.log(e),
					toast.error("Event in carts can't be deleted", e);
			}),
			[];
	}
	function isAdmin() {
		const role = window.localStorage.getItem("role");
		const jwt = window.localStorage.getItem("token");
		return (
			role === `${process.env.NEXT_PUBLIC_ADMIN_ROLE}` &&
			jwt !== undefined &&
			jwt!.length > 60
		);
	}

	return (
		<div className=" w-full md:w-fit h-[500px] mx-auto mb-36">
			<div className="flex items-center justify-between">
				<div className="flex flex-row gap-2 items-center justify-evenly">
					{isAdmin() && (
						<>
							<UpdateEventModal
								setisLoading={setisLoading}
								event={event}
							/>

							<button
								onClick={(e) => {
									handleEventDelete(event.id);
								}}
								className="flex flex-row items-center hover:scale-125 transition ease-in-out text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
							>
								<FaTrashAlt size={30}/>
							</button>
						</>
					)}
				</div>
			</div>
			<Link href={`events/${event.id}`}>
				<section className="bg-white mb-20 hover:bg-stone-200 hover:cursor-pointer hover:scale-110 transition ease-in-out shadow-2xl border-2 rounded-3xl h-full md:w-[400px] object-cover">
					<article className="h-2/3 shadow-xl rounded-lg">
						<Image
							className="rounded-t-xl h-full w-full shadow-xl object-cover"
							src={event.image}
							alt="An image of the event"
							width={500}
							height={500}
							loading="lazy"
						/>
					</article>

					<article className="text-center h-1/3 flex flex-col justify-evenly px-6">
						<div className=" w-full text-center">
							<h3 className="text-black font-bold text-2xl tracking-tight dark:text-white">
								{event.title}
							</h3>
							<p className="mt-4">
								Starts : {formatDate(event.startDate)}
							</p>
						</div>
						{/* <h3 className="text-[gray] font-semibold text-xl tracking-tight dark:text-white">
						{event.maxParticipants} spots available.
					</h3> */}
						<hr className="border-black" />
						<div className="w-full flex flex-row items-center justify-between px-2 text-justify">
							<h3 className="text-white p-2 rounded-lg bg-black italic font-semibold text-sm tracking-tight dark:text-white">
								{event.category?.name}
							</h3>
							<span className="text-2xl font-bold text-[green] dark:text-white">
								${event.price}
							</span>
							{/* <AddAgendaModal
							event={event}
							setisLoading={setisLoading}
						/> */}
						</div>
					</article>
				</section>
			</Link>
		</div>
	);
};

export default EventCards;
