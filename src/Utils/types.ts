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
	category?: AllCategoriesProps;
	categoryId: string;
};

export type UpdateProductProps = {
	id: string;
	name: string;
	image: string;
	stock: number;
	price: number;
	categoryId: string;
};

export type AllCategoriesProps = {
	id: string;
	name: string;
};

export type AllUserProps = {
	id: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
};

export type AllCartProps = {
	id: string;
	cartId: string;
	userId: string;
	productId: string;
	quantity: number;
	createdAt: string;
	updatedAt: string;
};

export type ErrorMsgProps = {
	content?: any;
};
