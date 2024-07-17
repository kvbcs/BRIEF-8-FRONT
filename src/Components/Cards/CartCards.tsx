import { AllCartProps, AllProductsProps } from "@/Utils/types";
import React from "react";

const CartCards = ({ cart }: { cart: AllCartProps }) => {
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
		</div>
	);
};

export default CartCards;
