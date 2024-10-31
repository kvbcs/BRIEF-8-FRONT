import { AllProductsProps } from "@/Utils/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { UpdateProductModal } from "../Modal/(UPDATE)/UpdateProductModal";
import { FaTrashAlt } from "react-icons/fa";
import { deleteProduct } from "@/Services/eventService";
import { AddCartModal } from "../Modal/(POST)/AddCartModal";
import Link from "next/link";

const ProductCards = ({
	product,
	setisLoading,
}: {
	product: AllProductsProps;
	setisLoading: any;
}) => {
	function handleProductDelete(id: string) {
		deleteProduct(id)
			.then((res) => {
				if (res.status === 200) {
					setisLoading(true);
					console.log(res);
					toast.success("Product deleted !");
				} else {
					toast.error("Something is wrong");
				}
			})
			.catch((e) => {
				console.log(e),
					toast.error("Product in carts can't be deleted", e);
			}),
			[];
	}
	function isAdmin() {
		const role = window.localStorage.getItem("role");
		const jwt = window.localStorage.getItem("token");
		return role === "admin" && jwt !== undefined && jwt!.length > 60;
	}

	return (
		<div className=" w-full md:w-fit h-[450px] mx-auto mb-6">
			{/* <Link href={`/products/${product.id}`}> */}
			<div className="bg-stone-100 hover:border-slate-500 hover:bg-slate-300 hover:cursor-pointer hover:scale-110 transition ease-in-out shadow-2xl border-2 border-slate-200 rounded-lg h-full md:w-[300px] p-4 dark:bg-gray-800 object-cover dark:border-gray-700">
				<div className="h-2/4 shadow-xl rounded-lg mb-5">
					<img
						className="rounded-xl h-full w-full object-cover"
						src={product.image}
						alt="product image"
					/>
				</div>

				<div className="px-5 pb-5 flex flex-col gap-6">
					<div className="flex flex-row justify-between items-center gap-10 w-full px-2 text-justify">
						<h3 className="text-black font-semibold text-xl tracking-tight dark:text-white">
							{product.name}
						</h3>
						<h3 className="text-[gray] font-semibold text-sm tracking-tight dark:text-white">
							{product.stock} in stock.
						</h3>
					</div>
					<div className="w-full flex flex-row items-center justify-between px-2 text-justify">
						<h3 className="text-white p-2 rounded-lg bg-black italic font-semibold text-sm tracking-tight dark:text-white">
							{product.category?.name}
						</h3>
						<span className="text-2xl font-bold text-[green] dark:text-white">
							${product.price}
						</span>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex flex-row gap-2 items-center justify-evenly">
							{isAdmin() && (
								<UpdateProductModal
									setisLoading={setisLoading}
									product={product}
								/>
							)}

							{isAdmin() && (
								<button
									onClick={(e) => {
										console.log(product.id);

										handleProductDelete(product.id);
									}}
									className="flex flex-row items-center text-white bg-red-500 hover:bg-red-700 p-3 rounded-full"
								>
									<FaTrashAlt />
								</button>
							)}
						</div>
						<AddCartModal
							product={product}
							setisLoading={setisLoading}
						/>
					</div>
				</div>
			</div>
			{/* </Link> */}
		</div>
	);
};

export default ProductCards;
