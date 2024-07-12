"use client";

import CategoryCards from "@/Components/Cards/CategoryCards";
import ProductCards from "@/Components/Cards/ProductCards";
import { getAllCategories, getAllProducts } from "@/Services/fetchData";
import { AllCategoriesProps, AllProductsProps } from "@/Utils/types";
import { useEffect, useState } from "react";
export default function Home() {
	const [productList, setProductList] = useState<AllProductsProps[]>([]);
	const [categoryList, setCatgoryList] = useState<AllCategoriesProps[]>([]);

	useEffect(() => {
		getAllProducts().then((res) => {
			setProductList(res);
			console.log(res);
		});
	}, []);

	useEffect(() => {
		getAllCategories().then((res) => {
			setCatgoryList(res);
			console.log(res);
		});
	}, []);

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
			{productList &&
				productList.map((product) => {
					return <ProductCards key={product.id} product={product} />;
				})}
		</div>
	);
}
