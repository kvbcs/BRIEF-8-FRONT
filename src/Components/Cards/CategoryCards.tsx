import React from "react";
import { AllCategoriesProps } from "../../Utils/types";

const CategoryCards = ({ category }: { category: AllCategoriesProps }) => {
	return (
		<div>
			<h3 className="text-sm" key={category.id}>
				{category.name}
			</h3>
		</div>
	);
};

export default CategoryCards;
