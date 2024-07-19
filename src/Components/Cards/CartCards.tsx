"use client";
import { deleteCartProduct } from "@/Services/cartService";
import { AllCartProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateCartModal } from "../Modal/(UPDATE)/UpdateCartModal";

const CartCards = ({ cart }: { cart: AllCartProps }) => {
	const [isLoading, setisLoading] = useState(false);
	function handleCartDelete() {
		const cartId = window.localStorage.getItem("cart");
		const productId = cart.productId;
		deleteCartProduct(cartId!, productId)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);
					console.log(res);
					toast.success("Cart product deleted !");
				} else {
					toast.error("Bad response");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("Server error");
			}),
			[isLoading];
	}
	return (
		<div className="w-full flex flex-row justify-center">
		<div className="w-full lg:w-2/3 h-[200px] flex flex-row justify-between md:text-2xl text-black rounded-lg p-4 border-2 border-slate-400">
			<div className="w-fit p-4 flex flex-row h-full ">
				<img
					src={cart.product?.image}
					className="h-full object-cover w-[200px]"
					alt=""
				/>
				<div className="flex flex-col w-fit justify-evenly md:min-w-full items-center">
					<h2>{cart.product?.name}</h2>
					<h2>Amount : {cart.quantity}</h2>
					<h2 className="text-green-600 font-bold">
						$ {cart.product?.price}
					</h2>
				</div>
			</div>
			<div className="flex flex-col gap-2 items-center justify-evenly">
				<UpdateCartModal cart={cart} />
				<button
					onClick={(e) => {
						console.log(cart.productId);

						handleCartDelete();
					}}
					className="flex flex-row items-center text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
				>
					<FaTrashAlt />
				</button>
			</div>
			</div>
		</div>
	);
};

export default CartCards;
