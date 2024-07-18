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
		<div className="w-full h-fit flex flex-row justify-evenly text-white rounded-lg bg-black">
			<div className="w-full p-4 flex flex-row  ">
				<img src={cart.product?.image} className="h-32" alt="" />
			</div>
			<div className="flex flex-col w-full justify-evenly items-center">
				<h2>{cart.product?.name}</h2>
				<h2>Amount : {cart.quantity}</h2>
				<h2>$ {cart.product?.price}</h2>
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
	);
};

export default CartCards;
