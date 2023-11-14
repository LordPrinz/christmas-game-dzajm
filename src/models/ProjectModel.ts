export type ProjectModel = {
	id: string;
	teamName: string;
	name: string;
	link: string;
	staredBy: string[]; //* It will keep emails of users that starred this project
	members: string[];
	contactEmail: string;
};
