import { AllProductsProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { UpdateProductModal } from "../Modal/(UPDATE)/UpdateProductModal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteProduct } from "@/Services/productService";
import { AddCartModal } from "../Modal/(POST)/AddCartModal";

const ProductCards = ({ product }: { product: AllProductsProps }) => {
	const [isLoading, setIsLoading] = useState(false);

	function handleProductDelete(id: string) {
		deleteProduct(id)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					toast.success("Product deleted !");
					setIsLoading(true);
				} else {
					toast.error("wtf");
				}
			})
			.catch((e) => {
				console.log(e), toast.error("oupsie");
			}),
			[isLoading];
	}

	return (
		<div className=" w-full md:w-fit h-[450px] mx-auto mb-6">
			<div className="bg-black shadow-md rounded-lg h-full md:w-[300px] p-4 dark:bg-gray-800 object-cover dark:border-gray-700">
				<div className="h-64 object-cover mb-4 p-2">
					<img
						className="rounded-xl object-cover h-full w-full"
						src={product.image}
						alt="product image"
					/>
				</div>

				<div className="px-5 pb-5 flex flex-col gap-6">
					<div className="flex flex-row justify-between items-center w-full px-2 text-justify">
						<h3 className="text-white font-semibold text-xl tracking-tight dark:text-white">
							{product.name}
						</h3>
						<h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
							{product.stock} in stock.
						</h3>
					</div>
					<div className="w-full flex flex-row items-center justify-between px-2 text-justify">
						<h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
							{product.category?.name}
						</h3>
						<span className="text-2xl font-bold text-[green] dark:text-white">
							${product.price}
						</span>
					</div>

					<div className="flex items-center justify-between">
						<AddCartModal product={product} />
						<div className="flex flex-row gap-2 items-center justify-evenly">
							<UpdateProductModal product={product} />
							<button
								onClick={(e) => {
									console.log(product.id);

									handleProductDelete(product.id);
								}}
								className="flex flex-row items-center text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
							>
								<FaTrashAlt />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
