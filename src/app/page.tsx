"use client";

import ProductCards from "@/Components/Cards/ProductCards";

export default function Home() {
	return (
		<>
			<h2 className="text-2xl font-bold text-center">All Products</h2>
			<div>
				<ProductCards />
			</div>
		</>
	);
}
