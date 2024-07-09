"use client";

import ProductCards from "@/Components/Cards/ProductCards";

export default function Home() {
	return (
		<div>
			<h2 className="text-2xl font-bold">All Products</h2>
			<ProductCards />
		</div>
	);
}
