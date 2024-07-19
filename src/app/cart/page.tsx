"use client";
import CartCards from "@/Components/Cards/CartCards";
import { getAllCartProducts } from "@/Services/cartService";
import { AllCartProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCreditCard } from "react-icons/fa6";

const page = ({ cart }: { cart: AllCartProps }) => {
	const [cartList, setcartList] = useState<AllCartProps[]>([]);
	const [isLoading, setisLoading] = useState(true);
	useEffect(() => {
		const cartId = window.localStorage.getItem("cart");
		console.log(cartId);

		getAllCartProducts(cartId!)
			.then((res) => {
				setcartList(res);
				console.log(res);
				toast.success("got carts");
				console.log(cartList);
				setisLoading(false);
			})
			.catch((e) => {
				console.log(e);
				toast.error("error");
			});
	}, [isLoading]);

	return (
		<div className="min-h-[80vh] max-h-fit w-full flex flex-col gap-14 justify-between">
			<h2 className="text-center text-2xl md:text-4xl font-bold w-full mt-8">
				Your cart
			</h2>
			{cartList &&
				cartList.map((cart) => {
					return (
						<CartCards
							key={cart.productId}
							setisLoading={setisLoading}
							cart={cart}
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
