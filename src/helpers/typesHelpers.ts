export type putDescriptionDB = {
	description?: string;
	author?: string | null;
	date?: Date;
};

export type getDescriptionsFromDB = {
	date: Date;
};
