import Logo from "@/app/(components)/shared/Logo";
import Link from "next/link";
import SignOut from "./auth/SignOut";

const Navigation = () => {
	return (
		<nav className="top-7 absolute w-full  px-8 flex items-center justify-between z-20 ">
			<div className="flex items-center gap-9">
				<Link href="/">
					<Logo className="h-8 transition  fill-theme-twilight-blue-50 hover:fill-theme-twilight-blue-200 hover:transition" />
				</Link>
				<div className="flex gap-3 text-theme-twilight-blue-50 text-lg">
					<Link
						className="py-2 hover:text-theme-twilight-blue-200 px-2 transition hover:transition"
						href="https://dzaj.de/christmas_reg">
						Regulamin
					</Link>
					<Link
						className="py-2 hover:text-theme-twilight-blue-200 px-2 transition hover:transition"
						href="https://dzaj.de/christmas">
						Zapisz się
					</Link>
				</div>
			</div>
			<div>
				<SignOut />
			</div>
		</nav>
	);
};

export default Navigation;
