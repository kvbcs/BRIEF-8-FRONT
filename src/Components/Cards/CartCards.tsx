import { AllProductsProps } from "@/Utils/types";
import React from "react";

const CartCards = ({ product }: { product: AllProductsProps }) => {
	return (
		<div className="w-full h-fit flex flex-row justify-between">
			<div className="bg-black w-fit flex flex-row">
				<img src={product.image} alt="" />
				<div className="flex flex-col justify-evenly items-center">
					<h2>{product.name}</h2>
				</div>
			</div>
			<h2>$ {product.price}</h2>
		</div>
	);
};

export default CartCards;
