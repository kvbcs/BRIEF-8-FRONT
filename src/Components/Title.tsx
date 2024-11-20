import { TitleProps } from "@/Utils/types";
import React from "react";

const Title = ({ title }: TitleProps) => {
	return (
		<h2 className="text-2xl md:text-6xl font-sans font-bold text-center">
			{title}
		</h2>
	);
};

export default Title;
