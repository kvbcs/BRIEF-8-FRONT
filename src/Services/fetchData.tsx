import { AllProductsProps, AuthProps } from "@/Utils/types";
import axios from "axios";

export async function getAllProducts() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/all`;
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

export async function getAllCategories() {
	let url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;
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
				name: auth.name,
				email: auth.email,
				password: auth.password,
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
			console.log(res.data);
			return res.data;
		})
		.catch((e) => {
			throw new Error(e);
		});
}

export async function addProduct(product: AllProductsProps) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}product/add`;

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
				name: product.name,
				image: product.image,
				stock: product.stock,
				price: product.price,
				category: product.category,
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
