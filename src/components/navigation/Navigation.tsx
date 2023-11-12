import Logo from "@/app/(components)/shared/Logo";
import Link from "next/link";
import SignOut from "./auth/SignOut";

const Navigation = () => {
	return (
		<nav className="top-0 fixed w-full my-8 px-8 flex items-center justify-between">
			<div className="flex items-center gap-9">
				<Link href="/">
					<Logo className="h-8" />
				</Link>
				<div className="flex gap-7 text-theme-twilight-blue-50 text-lg">
					<Link href="/">Strona Główna</Link>
					<Link href="https://dzaj.de/christmas">Zapisz się</Link>
				</div>
			</div>
			<div>
				<SignOut />
			</div>
		</nav>
	);
};

export default Navigation;
