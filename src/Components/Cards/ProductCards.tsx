import { AllProductsProps } from "@/Utils/types";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductCards = ({ product }: { product: AllProductsProps }) => {
	return (
		<div className="max-w-2xl mx-auto">
			<div className="bg-black shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
				<img
					className="rounded-t-lg p-8"
					src={product.image}
					alt="product image"
				/>
				<div className="px-5 pb-5 flex flex-col gap-6">
					<div className="w-full px-2 text-justify">
						<h3 className="text-white font-semibold text-xl tracking-tight dark:text-white">
							{product.name}
						</h3>
					</div>
					<div className="w-full px-2 text-justify">
						<h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
							{product.stock} in stock.
						</h3>
						{/* <h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
							{product.category}
						</h3> */}
					</div>

					<div className="flex items-center justify-between">
						<span className="text-2xl font-bold text-[green] dark:text-white">
							${product.price}
						</span>
						<button
							className="flex flex-row gap-2 items-center text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<FaCartArrowDown />
							 Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
