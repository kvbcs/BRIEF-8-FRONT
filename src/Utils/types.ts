export type AuthProps = {
	name?: string;
	email: string;
	password: string;
};

export type AllProductsProps = {
	id: string;
	name: string;
	image: string;
	stock: number;
	price: number;
	category: AllCategoriesProps[];
};

export type AllCategoriesProps = {
	id: string;
	name: string;
};