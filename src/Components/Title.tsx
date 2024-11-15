import { TitleProps } from "@/Utils/types";
import React from "react";

const Title = ({ title }: TitleProps) => {
	return (
		<h2 className="text-2xl md:text-6xl font-serif font-bold text-center serif">
			{title}
		</h2>
	);
};

export default Title;
