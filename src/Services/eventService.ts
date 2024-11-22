import { AllEventsProps } from "@/Utils/types";
import axios from "axios";

//GET events --------------------------------------------------------------------------------------------------------------------
export async function getAllEvents() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/all`;
	return axios
		.get(url)
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//GET one event --------------------------------------------------------------------------------------------------------------------
export async function getOneEvent(id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/${id}`;
	return axios
		.get(url)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			console.log(e);

			throw new Error(e);
		});
}

//GET search events --------------------------------------------------------------------------------------------------------------------
export async function searchEvents(query: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/all/${query}`;
	return axios
		.get(url)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//POST events --------------------------------------------------------------------------------------------------------------------
export async function addEvent(event: AllEventsProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/add`;

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
				title: event.title,
				image: event.image,
				description: event.description,
				maxParticipants: Number(event.maxParticipants),
				price: Number(event.price),
				startDate: event.startDate,
				endDate: event.endDate,
				categoryId: event.categoryId,
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

//PATCH events --------------------------------------------------------------------------------------------------------------------
export async function updateEvent(eventUpdateData: AllEventsProps, id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/update/${id}`;

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
				title: eventUpdateData.title,
				image: eventUpdateData.image,
				description: eventUpdateData.description,
				maxParticipants: Number(eventUpdateData.maxParticipants),
				price: Number(eventUpdateData.price),
				startDate: eventUpdateData.startDate,
				endDate: eventUpdateData.endDate,
				categoryId: eventUpdateData.categoryId,
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

//DELETE events --------------------------------------------------------------------------------------------------------------------
export async function deleteEvent(id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}event/delete/${id}`;

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
