import { AllCategoriesProps } from "@/Utils/types";
import axios from "axios";

//GET categories --------------------------------------------------------------------------------------------------------------------
export async function getAllCategories() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;
	return axios
		.get(url)
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//POST categories --------------------------------------------------------------------------------------------------------------------
export async function addCategory(category: AllCategoriesProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}category/add`;

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
				name: category.name,
				image: category.image,
			},
			axiosConfig
		)
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//PATCH categories --------------------------------------------------------------------------------------------------------------------
export async function updateCategory(category: AllCategoriesProps, id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}category/update/${id}`;

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
				name: category.name,
				image: category.image,
			},
			axiosConfig
		)
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

//DELETE categories --------------------------------------------------------------------------------------------------------------------
export async function deleteCategory(id: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}category/delete/${id}`;

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
			return res;
		})
		.catch((e) => {
			throw new Error(e);
		});
}
