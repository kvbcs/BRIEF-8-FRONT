import React from "react";

const ProductCards = () => {
	return (
		<div className="max-w-2xl mx-auto">
			<div className="bg-black shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img
						className="rounded-t-lg p-8"
						src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp"
						alt="product image"
					/>
				</a>
				<div className="px-5 pb-5 flex flex-col gap-6">
					<div className="w-full px-2 text-justify">
						<h3 className="text-white font-semibold text-xl tracking-tight dark:text-white">
							Apple Watch Series 7 GPS, Aluminium Case, Starlight
							Sport
						</h3>
					</div>

					<div className="flex items-center justify-between">
						<span className="text-3xl font-bold text-white dark:text-white">
							$599
						</span>
						<a
							href="#"
							className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Add to cart
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
