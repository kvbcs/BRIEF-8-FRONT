"use client";
import { AllUserProps } from "@/Utils/types";
import React from "react";

const page = ({ user }: { user: AllUserProps }) => {
	return (
		<div key={user.id}>
			<h2>Name : {user.name}</h2>
			<h2>Email : {user.email}</h2>
		</div>
	);
};

export default page;
