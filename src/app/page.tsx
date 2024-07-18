"use client";

import CategoryCards from "@/Components/Cards/CategoryCards";
import ProductCards from "@/Components/Cards/ProductCards";
import Search from "@/Components/Search";
import { getAllCategories } from "@/Services/categoryService";
import { getAllProducts } from "@/Services/productService";
import {
	AllCartProps,
	AllCategoriesProps,
	AllProductsProps,
} from "@/Utils/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FidgetSpinner } from "react-loader-spinner";

export default function Home() {
	const [search, setSearch] = useState("");
	const [isLoading, setisLoading] = useState(false);
	const [productList, setProductList] = useState<AllProductsProps[]>([]);
	const [categoryList, setCatgoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		getAllProducts()
			.then((res) => {
				setisLoading(true);
				setProductList(res);
				console.log(res);
				toast.success("Got products !");
			})
			.catch((e) => {
				console.log(e);
				toast.error("Something went wrong");
			});
	}, [isLoading]);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				toast.success("Got categories !");
				setisLoading(true);
				setCatgoryList(res);
				console.log(res);
			})
			.catch((e) => {
				toast.error("oh oh");
				console.log(e);
			});
	}, [isLoading]);

	if (!isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl">Loading...</h1>
				<FidgetSpinner
					visible={true}
					height="140"
					width="140"
					backgroundColor="#000000"
					ariaLabel="fidget-spinner-loading"
					wrapperStyle={{}}
					wrapperClass="fidget-spinner-wrapper"
				/>
			</div>
		);
	}
	return (
		<div className="px-8 min-h-[80vh] max-h-fit w-full flex flex-col gap-16 my-8">
			{/* <h2 className="text-2xl font-bold text-center">All Categories</h2>
			{categoryList &&
				categoryList.map((category) => {
					return (
						<CategoryCards key={category.id} category={category} />
					);
				})} */}
			<h2 className="text-2xl font-bold text-center">
				Products Available
			</h2>
			<Search />
			{productList &&
				productList.map((product, cart: any) => {
					return <ProductCards key={product.id} product={product} />;
				})}
		</div>
	);
}
