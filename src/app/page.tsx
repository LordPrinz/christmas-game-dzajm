import Header from "./(components)/Header";
import Projects from "./(components)/project/Projects";
import { Suspense } from "react";
import SkeletonLoading from "./(components)/shared/SkeletonLoading";
import Navigation from "@/components/navigation/Navigation";

export default async function Home() {
	return (
		<>
			<Navigation />
			<main className="grid grid-cols-defaultLayout h-full grid-rows-[97vh,1fr,min-content] main-page">
				<Header />

				<section className="grid grid-cols-defaultLayout z-10 bg-theme-snow col-[full-start/full-end] py-20">
					<header className="col-[center-start/center-end] text-2xl sm:text-3xl font-semibold text-center">
						<h3>Wasze Prace</h3>
					</header>

					<div className="col-[center-start/center-end] mt-10 sm:mt-20 grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-3.5 sm:gap-5 ">
						<Suspense fallback={<SkeletonLoading />}>
							<Projects />
						</Suspense>
					</div>
				</section>
			</main>
		</>
	);
}
