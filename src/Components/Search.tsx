"use client";
import { searchProducts } from "@/Services/productService";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ setProductList, setIsLoading }: any) => {
	const [searchValue, setSearchValue] = useState("");

	function handleSearch() {
		searchProducts(searchValue).then((res) => {
			setProductList(res.results);
			setIsLoading(false);
		});
	}
	return (
		<div className="w-full h-[60%] flex flex-row items-center justify-center">
			<div className="flex flex-row w-full md:w-2/3 lg:w-1/3 rounded-lg border-2 border-slate-200 shadow-xl hover:border-slate-500">
				<input
					onChange={(e: any) => {
						setSearchValue(e.target.value);
						if (searchValue === null) {
							setIsLoading(true);
							setIsLoading(false);
						}
					}}
					type="text"
					placeholder="Search products..."
					className="rounded-lg p-2 flex flex-row items-center w-full rounded-tr-none rounded-br-none"
				/>
				<button
					onClick={() => handleSearch()}
					type="submit"
					className="bg-sky-500 hover:bg-sky-700 p-2 rounded-lg h-full flex flex-row items-center justify-center rounded-bl-none rounded-tl-none"
				>
					<FaMagnifyingGlass color="white" size={24} />
				</button>
			</div>
		</div>
	);
};

export default Search;
