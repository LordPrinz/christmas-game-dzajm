import Project from "./Project";

const DUMMY_PROJECTS = [
	{
		id: "XxDD",
		teamName: "Dzajlopment",
		name: "DZAJDROP",
		link: "https://dzaj.de",
		members: ["Oskar", "Paweł", "Bartek", "Adrian"],
		contactEmail: "sususamogus029@gmail.com",
	},
	{
		id: "XDDa",
		teamName: "aasssssssssssss",
		name: "asdasd",
		link: "https://dzaj.de",
		members: ["Oskar", "Paweł", "Bartek", "Adrian"],
		contactEmail: "sususamogus029@gmail.com",
	},
	{
		id: "XDD",
		teamName: "Dzajlopment",
		name: "asd",
		link: "https://dzaj.de",
		members: ["Oskar", "Paweł", "Bartek", "Adrian"],
		contactEmail: "sususamogus029@gmail.com",
	},
	{
		id: "sadsdads",
		teamName: "Dzajlopment",
		name: "dzajco",
		link: "https://dzaj.de",
		members: ["Oskar", "Paweł", "Bartek", "Adrian"],
		contactEmail: "sususamogus029@gmail.com",
	},
	{
		id: "sadsdadsd",
		teamName: "Dzajlopment",
		name: "dzajco",
		link: "https://dzaj.de",
		members: ["Oskar", "Paweł", "Bartek", "Adrian"],
		contactEmail: "sususamogus029@gmail.com",
	},
];

const Projects = () => {
	return (
		<section className="grid grid-cols-defaultLayout z-10 bg-theme-snow col-[full-start/full-end] py-20">
			<header className="col-[center-start/center-end] text-3xl font-semibold text-center">
				<h3>Wasze Prace</h3>
			</header>
			<div className="col-[center-start/center-end] mt-20 grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-5 ">
				{DUMMY_PROJECTS.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
