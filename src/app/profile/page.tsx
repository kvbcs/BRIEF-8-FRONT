"use client";
import { AllUserProps } from "@/Utils/types";
import React from "react";

const page = ({ user }: { user: AllUserProps }) => {
	return (
		<div>
			<h2>Name : </h2>
			<h2>Email : </h2>
		</div>
	);
};

export default page;
