import {
	AllCartProps,
	AllCategoriesProps,
	AllProductsProps,
	AuthProps,
} from "@/Utils/types";
import axios from "axios";

//GET products --------------------------------------------------------------------------------------------------------------------
export async function getAllCartProducts(cartId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}cart/all/${cartId}`;
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

//POST products --------------------------------------------------------------------------------------------------------------------
export async function addCartProduct(cart: AllCartProps, productId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}cart/add/${productId}`;

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
				quantity: cart.quantity,
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

//PATCH products --------------------------------------------------------------------------------------------------------------------
export async function updateCartProduct(
	cart: AllCartProps,
	cartId: string,
	productId: string
) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}cart/update/${cartId}/${productId}`;

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
				quantity: cart.quantity,
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

//DELETE products --------------------------------------------------------------------------------------------------------------------
export async function deleteCartProduct(cartId: string, productId: string) {
	let url = `${process.env.NEXT_PUBLIC_API_URL}cart/delete/${cartId}/${productId}`;

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
