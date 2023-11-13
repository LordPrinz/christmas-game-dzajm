import { getServerSession } from "next-auth";
import Header from "./(components)/Header";
import { options } from "./api/auth/[...nextauth]/options";
import Projects from "./(components)/project/Projects";

export default async function Home() {
	const session = await getServerSession(options);

	console.log(session);

	return (
		<main className="grid grid-cols-defaultLayout h-full grid-rows-[97vh,1fr,min-content] main-page">
			<Header />
			<Projects />
		</main>
	);
}
