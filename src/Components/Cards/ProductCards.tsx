import { AllProductsProps } from "@/Utils/types";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductCards = ({ product }: { product: AllProductsProps }) => {
	return (
		<div className="max-w-2xl w-full h-[450px] mx-auto mb-6">
			<div className="bg-black shadow-md rounded-lg h-full max-w-sm p-4 dark:bg-gray-800 object-cover dark:border-gray-700">
				<div className="h-64 object-cover mb-4 p-2">
					<img
						className="rounded-xl object-cover h-full w-full"
						src={product.image}
						alt="product image"
					/>
				</div>

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
						<button className="flex flex-row gap-2 items-center text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-24">
							<FaCartArrowDown />
							Add
						</button>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-evenly mt-2">
				<button className="flex flex-row gap-2 items-center text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-24">
					<FaCartArrowDown />
					Edit
				</button>
				<button className="flex flex-row gap-2 items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					<FaCartArrowDown />
					Delete
				</button>
			</div>
		</div>
	);
};

export default ProductCards;
