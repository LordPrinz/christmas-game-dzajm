import { getServerSession } from "next-auth";
import Header from "./(components)/Header";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
	const session = await getServerSession(options);

	console.log(session);

	return (
		<main className="grid grid-cols-defaultLayout h-full grid-rows-[97vh,1fr,min-content] main-page">
			<Header />
			<section className="grid grid-cols-defaultLayout z-10 bg-theme-snow col-[full-start/full-end] py-20">
				<header className="col-[center-start/center-end] text-3xl font-semibold text-center">
					<h3>Wasze Prace</h3>
				</header>
			</section>
		</main>
	);
}
