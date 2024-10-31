export type AuthProps = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export type AllEventsProps = {
	id: string;
	title: string;
	image: string;
	description: string;
	maxParticipants: number;
	startDate: string;
	endDate: string;
	price: number;
	category?: AllCategoriesProps;
	categoryId: string;
};

export type UpdateEventsProps = {
	id: string;
	title: string;
	image: string;
	description: string;
	maxParticipants: number;
	startDate: string;
	endDate: string;
	price: number;
	categoryId: string;
};

export type AllCategoriesProps = {
	id: string;
	name: string;
	image: string;
};

export type AllUserProps = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	role?: string;
};

export type AllAgendaProps = {
	id: string;
	agendaId: string;
	userId: string;
	eventId: string;
	event?: AllEventsProps;
	quantity: number;
	createdAt: string;
	updatedAt: string;
};

export type updateAgendaProps = {
	id: string;
	quantity: number;
	eventId: string;
};

export type ErrorMsgProps = {
	content?: any;
};
