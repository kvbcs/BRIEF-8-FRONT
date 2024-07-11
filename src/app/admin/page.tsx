"use client"
import { AddProductModal } from "@/Components/Modal/AddProductModal";
import React from "react";

const page = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-evenly">
			<h1 className="text-center text-2xl">Administration</h1>
			<AddProductModal />
			<button className="bg-sky-500 p-2 rounded-lg text-white">
				Add a category
			</button>
			<button className="bg-sky-500 p-2 rounded-lg text-white">
				View users
			</button>
		</div>
	);
};

export default page;
