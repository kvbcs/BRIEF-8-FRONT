"use client";
import { deleteCartProduct } from "@/Services/cartService";
import { AllCartProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateCartModal } from "../Modal/(UPDATE)/UpdateCartModal";

const CartCards = ({
	cart,
	setisLoading,
}: {
	cart: AllCartProps;
	setisLoading: any;
}) => {
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
			[];
	}
	return (
		<div className="w-full flex flex-row justify-center">
			<div className="w-2/3 h-[300px] md:h-[200px] flex flex-col md:flex-row shadow-2xl justify-between md:text-2xl text-black rounded-lg p-4 border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300">
				<div className="lg:w-1/2 w-full mb-4 md:mb-0 flex justify-start flex-col md:flex-row md:h-full h-[80%] ">
					<div className="h-1/2 md:h-full w-full md:w-1/2 shadow-2xl">
						<img
							src={cart.product?.image}
							className="object-cover w-full h-full rounded-lg"
							alt="cart product image"
						/>
					</div>
					<div className="flex flex-col h-1/2 md:h-full w-full md:w-1/2 justify-evenly items-center">
						<h2>{cart.product?.name}</h2>
						<h2 className="p-2 bg-black rounded-lg text-white">Amount : {cart.quantity}</h2>
						<h2 className="text-green-600 font-bold">
							$ {cart.product!.price * cart.quantity}
						</h2>
					</div>
				</div>
				<div className="flex md:flex-col flex-row gap-2 items-center justify-evenly">
					<UpdateCartModal setisLoading={setisLoading} cart={cart} />
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
