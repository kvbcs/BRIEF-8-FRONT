import { AuthProps } from "@/Utils/types";
import axios from "axios";

//Service du register --------------------------------------------------------------------------------------------------------------------
export async function registerService(auth: AuthProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	};
	return axios
		.post(
			url,
			{
				firstName: auth.firstName,
				lastName: auth.lastName,
				email: auth.email,
				password: auth.password,
			},
			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//Service du login --------------------------------------------------------------------------------------------------------------------
export async function loginService(auth: AuthProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

	let axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	};
	return axios
		.post(
			url,
			{
				email: auth.email,
				password: auth.password,
			},
			axiosConfig
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}
