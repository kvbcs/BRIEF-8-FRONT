"use client";
import { getAllCartProducts } from "@/Services/cartService";
import { AllCartProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCreditCard } from "react-icons/fa6";

const page = ({ cart }: { cart: AllCartProps }) => {
	const [cartList, setcartList] = useState<AllCartProps[]>([]);
	const [isLoading, setisLoading] = useState(false);
	useEffect(() => {
		const cartId = window.localStorage.getItem("cart");
		console.log(cartId);

		getAllCartProducts(cartId!)
			.then((res) => {
				setisLoading(true);
				setcartList(res);
				console.log(res);
				toast.success("got carts");
				console.log(cartList);
			})
			.catch((e) => {
				console.log(e);
				toast.error("error");
			});
	}, [isLoading]);

	return (
		<div className="min-h-[80vh] max-h-fit w-full flex flex-col justify-between">
			<h2 className="text-center text-2xl font-bold">Cart</h2>
			{cartList &&
				cartList.map((cart) => {
					return (
						<div key={cart.productId}>
							<p className="text-black">{cart.productId}</p>
						</div>
					);
				})}
			<div className="border-t-2 border-black flex flex-row w-full justify-between py-4">
				<h2>Total : $0</h2>
				<button className="bg-green-500 rounded-lg p-2 text-white hover:bg-green-700 flex flex-row items-center gap-2">
					<FaCreditCard />
					Buy
				</button>
			</div>
		</div>
	);
};

export default page;
