"use client";
import AgendaCards from "@/Components/Cards/AgendaCards";
import Title from "@/Components/Title";
import { getAllAgendaEvents } from "@/Services/agendaService";
import { AllAgendaProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCreditCard } from "react-icons/fa6";

const page = ({ agenda }: { agenda: AllAgendaProps }) => {
	const [agendaList, setagendaList] = useState<AllAgendaProps[]>([]);
	const [isLoading, setisLoading] = useState(true);
	useEffect(() => {
		const agendaId = window.localStorage.getItem("agenda");
		console.log(agendaId);

		getAllAgendaEvents(agendaId!)
			.then((res) => {
				setagendaList(res);
				console.log(res);
				toast.success("Agenda events loaded");
				console.log(agendaList);
				setisLoading(false);
			})
			.catch((e) => {
				console.log(e);
				toast.error("Server error" + e);
			});
	}, [isLoading]);

	return (
		<div className="min-h-[80vh] max-h-fit w-full flex flex-col gap-14 justify-between">
			<Title title={"Your Agenda"} />

			{Array.isArray(agendaList) &&
				agendaList.map((agenda) => {
					return (
						<AgendaCards
							key={agenda.eventId}
							setisLoading={setisLoading}
							agenda={agenda}
						/>
					);
				})}
			<div className="w-full flex justify-center my-10">
				<div className="w-2/3">
					<div className="border-t-2 border-black flex flex-row w-full justify-end py-4">
						<button className="bg-green-500 md:text-2xl rounded-lg p-4 text-white hover:bg-green-700 flex flex-row items-center gap-2">
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
