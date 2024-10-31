"use client";

import CategoryCards from "@/Components/Cards/CategoryCards";
import ProductCards from "@/Components/Cards/ProductCards";
import Search from "@/Components/Search";
import { getAllCategories } from "@/Services/categoryService";
import { getAllProducts } from "@/Services/eventService";
import { AllCategoriesProps, AllProductsProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";

export default function Home() {
	const [search, setSearch] = useState<string>("");
	const [isLoading, setisLoading] = useState(true);
	const [productList, setProductList] = useState<AllProductsProps[]>([]);
	const [categoryList, setCatgoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		getAllProducts()
			.then((res) => {
				try {
					setProductList(res);
					console.log(res);
					toast.success("Products loaded !");
					setisLoading(false);
				} catch (e) {
					console.log(e);
					toast.error("Error loading products" + e);
				}
			})
			.catch((e) => {
				console.log(e);
				toast.error("Server error" + e);
			});
	}, [isLoading]);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				setCatgoryList(res);
				toast.success("Categories loaded !");
				console.log(res);
				setisLoading(false);
			})
			.catch((e) => {
				toast.error("oh oh");
				console.log(e);
			});
	}, [isLoading]);

	if (isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl">Loading...</h1>
				<Hourglass
					visible={true}
					height="80"
					width="80"
					ariaLabel="hourglass-loading"
					wrapperStyle={{}}
					wrapperClass=""
					colors={["#306cce", "#72a1ed"]}
				/>
			</div>
		);
	}
	return (
		<div className="px-8 min-h-[80vh] max-h-fit w-full flex flex-col gap-16 my-8">
			<h2 className="text-2xl font-bold text-center">
				Products Available
			</h2>
			<Search
				setProductList={setProductList}
				setIsLoading={setisLoading}
			/>
			<div className="w-full flex flex-row justify-center md:justify-end gap-2">
				<select className="border-2 rounded-lg p-2 border-black w-fit">
					{categoryList &&
						categoryList.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
				</select>
				<select className="border-2 rounded-lg p-2 border-black w-fit">
					<option>0-50$</option>
					<option>50-100$</option>
					<option>+100$</option>
				</select>
			</div>
			<div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
				{productList &&
					productList.map((product) => {
						return (
							<ProductCards
								key={product.id}
								setisLoading={setisLoading}
								product={product}
							/>
						);
					})}
			</div>
		</div>
	);
}
