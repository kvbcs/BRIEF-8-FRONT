"use client";

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
		<>
			<h2 className="text-2xl font-bold text-center">All Products</h2>
			{productList &&
				productList.map((product) => {
					return <ProductCards key={product.id} product={product} />;
				})}
		</>
	);
}
