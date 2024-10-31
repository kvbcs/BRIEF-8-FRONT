import { AllAgendaProps, updateAgendaProps } from "@/Utils/types";
import axios from "axios";

//GET agenda events --------------------------------------------------------------------------------------------------------------------
export async function getAllAgendaEvents(agendaId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}agenda/all/${agendaId}`;
	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.get(url, axiosConfig)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//POST agenda events --------------------------------------------------------------------------------------------------------------------
export async function addAgendaEvent(agenda: AllAgendaProps, agendaId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}agenda/add/${agendaId}`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.post(
			url,
			{
				eventId: agenda.eventId,
				quantity: Number(agenda.quantity),
			},
			axiosConfig
		)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//PATCH agenda events --------------------------------------------------------------------------------------------------------------------
export async function updateAgendaProduct(
	agenda: updateAgendaProps,
	agendaId: string,
	eventId: string
) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}agenda/update/${agendaId}/${eventId}`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.patch(
			url,
			{
				quantity: agenda.quantity,
			},
			axiosConfig
		)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//DELETE agenda events --------------------------------------------------------------------------------------------------------------------
export async function deleteAgendaEvent(agendaId: string, eventId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}agenda/delete/${agendaId}/${eventId}`;

	let axiosConfig = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	return axios
		.delete(
			url,

			axiosConfig
		)
		.then((res) => {
			console.log(res);
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}
