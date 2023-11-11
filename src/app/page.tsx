import Image from "next/image";
import Header from "./components/Header";

export default async function Home() {
	return (
		<main className="grid grid-cols-defaultLayout h-full grid-rows-[100vh,1fr,min-content]">
			<Header />
		</main>
	);
}
