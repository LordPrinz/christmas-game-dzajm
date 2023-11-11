import Header from "./components/Header";

export default async function Home() {
	return (
		<main className="grid grid-cols-defaultLayout h-full grid-rows-[97vh,1fr,min-content] main-page">
			<Header />
			<div className="grid grid-cols-defaultLayout z-10 bg-theme-snow col-[full-start/full-end]"></div>
		</main>
	);
}
