"use client";
import AgendaCards from "@/Components/Cards/AgendaCards";
import Loading from "@/Components/Loading";
import Title from "@/Components/Title";
import {
	deleteAllAgendaEvents,
	getAllAgendaEvents,
} from "@/Services/agendaService";
import { AllAgendaProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCreditCard } from "react-icons/fa6";

const page = ({ agenda }: { agenda: AllAgendaProps }) => {
	const [agendaList, setagendaList] = useState<AllAgendaProps[]>([]);
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		const agendaId = window.localStorage.getItem("agenda");
		getAllAgendaEvents(agendaId!)
			.then((res) => {
				setagendaList(res.agendaEvents);
				toast.success("Agenda events loaded"), { id: "agenda-success" };
			})
			.catch((e) => {
				toast.error("Server error", { id: "agenda-error" });
			})
			.finally(() => {
				setisLoading(false);
			});
	}, [isLoading]);

	useEffect(() => {
		handleDeleteAllEvents;
	}, [isLoading]);

	async function handleDeleteAllEvents() {
		const agendaId = window.localStorage.getItem("agenda");
		setisLoading(true);
		deleteAllAgendaEvents(agendaId!)
			.then(() => {
				toast.success("Thanks for buying !", {
					id: "agenda-delete-success",
				});
				setagendaList([]);
			})
			.catch((e) => {
				toast.error("Server error", { id: "agenda-error" });
			})
			.finally(() => {
				setisLoading(false);
			});
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="min-h-[80vh] max-h-fit w-full flex flex-col gap-14 justify-between">
			<Title title={"Your Agenda"} />

			{agendaList &&
				agendaList.map((agenda) => {
					return (
						<AgendaCards
							key={agenda.eventId}
							setisLoading={setisLoading}
							agenda={agenda}
							isLoading={isLoading}
						/>
					);
				})}
			<div className="w-full flex justify-center my-10">
				<div className="w-2/3">
					<div className="border-t-2 border-black flex flex-row w-full justify-end py-4">
						<button
							className="bg-green-500 md:text-2xl rounded-full w-[150px] p-4 text-white hover:bg-green-700 flex flex-row items-center justify-evenly hover:scale-125 transition ease-in-out"
							onClick={handleDeleteAllEvents}
						>
							<FaCreditCard size={26} />
							Buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
