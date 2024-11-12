import { AllEventsProps } from "@/Utils/types";
import React from "react";
import toast from "react-hot-toast";
import { UpdateEventModal } from "../Modal/(UPDATE)/UpdateEventModal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteEvent } from "@/Services/eventService";
import { AddAgendaModal } from "../Modal/(POST)/AddAgendaModal";
import { format } from "date-fns";

const EventCards = ({
	event,
	setisLoading,
}: {
	event: AllEventsProps;
	setisLoading: any;
}) => {
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
		<div className=" w-full md:w-fit h-[500px] mx-auto mb-6">
			<div className="bg-stone-100 hover:border-slate-500 hover:bg-slate-300 hover:cursor-pointer hover:scale-110 transition ease-in-out shadow-2xl border-2 border-slate-200 rounded-lg h-full md:w-[400px] dark:bg-gray-800 object-cover dark:border-gray-700">
				<div className="h-2/4 shadow-xl rounded-lg mb-5">
					<img
						className="rounded-t-xl h-full w-full shadow-xl object-cover"
						src={event.image}
						alt="event image"
					/>
				</div>

				<div className="px-5 pb-5 flex flex-col gap-6">
					<div className="flex flex-row justify-center items-center gap-10 w-full px-2 text-justify">
						<h3 className="text-black font-semibold text-xl tracking-tight dark:text-white">
							{event.title}
						</h3>
						<p className="text-xl text-red-500">
							{format(event.createdAt, "dd/MM/yyyy")}
						</p>
					</div>
					<h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
						{event.maxParticipants} spots available.
					</h3>
					<div className="w-full flex flex-row items-center justify-between px-2 text-justify">
						<h3 className="text-white p-2 rounded-lg bg-black italic font-semibold text-sm tracking-tight dark:text-white">
							{event.category?.name}
						</h3>
						<span className="text-2xl font-bold text-[green] dark:text-white">
							${event.price}
						</span>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex flex-row gap-2 items-center justify-evenly">
							{isAdmin() && (
								<UpdateEventModal
									setisLoading={setisLoading}
									event={event}
								/>
							)}

							{isAdmin() && (
								<button
									onClick={(e) => {
										console.log(event.id);

										handleEventDelete(event.id);
									}}
									className="flex flex-row items-center text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
								>
									<FaTrashAlt />
								</button>
							)}
						</div>
						<AddAgendaModal
							event={event}
							setisLoading={setisLoading}
						/>
					</div>
				</div>
			</div>
			{/* </Link> */}
		</div>
	);
};

export default EventCards;