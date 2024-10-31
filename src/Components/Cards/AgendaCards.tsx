"use client";
import { deleteAgendaEvent } from "@/Services/agendaService";
import { AllAgendaProps } from "@/Utils/types";
import React from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateAgendaModal } from "../Modal/(UPDATE)/UpdateAgendaModal";

const AgendaCards = ({
	agenda,
	setisLoading,
}: {
	agenda: AllAgendaProps;
	setisLoading: any;
}) => {
	function handleAgendaDelete() {
		const agendaId = window.localStorage.getItem("agenda");
		const eventId = agenda.eventId;
		deleteAgendaEvent(agendaId!, eventId)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);
					console.log(res);
					toast.success("Agenda event deleted !");
				} else {
					toast.error("Bad response");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("Server error");
			}),
			[];
	}
	return (
		<div className="w-full flex flex-row justify-center">
			<div className="w-2/3 h-[300px] md:h-[200px] flex flex-col md:flex-row shadow-2xl justify-between md:text-2xl text-black rounded-lg p-4 border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300">
				<div className="lg:w-1/2 w-full mb-4 md:mb-0 flex justify-start flex-col md:flex-row md:h-full h-[80%] ">
					<div className="h-1/2 md:h-full w-full md:w-1/2 shadow-2xl">
						<img
							src={agenda.event?.image}
							className="object-cover w-full h-full rounded-lg"
							alt="agenda event image"
						/>
					</div>
					<div className="flex flex-col h-1/2 md:h-full w-full md:w-1/2 justify-evenly items-center">
						<h2>{agenda.event?.title}</h2>
						<h2 className="p-2 bg-black rounded-lg text-white">
							Amount : {agenda.quantity}
						</h2>
						<h2 className="text-green-600 font-bold">
							$ {agenda.event!.price * agenda.quantity}
						</h2>
					</div>
				</div>
				<div className="flex md:flex-col flex-row gap-2 items-center justify-evenly">
					<UpdateAgendaModal
						setisLoading={setisLoading}
						agenda={agenda}
					/>
					<button
						onClick={(e) => {
							console.log(agenda.eventId);

							handleAgendaDelete();
						}}
						className="flex flex-row items-center text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
					>
						<FaTrashAlt />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AgendaCards;
