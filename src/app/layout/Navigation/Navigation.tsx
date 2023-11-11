import Logo from "@/app/components/shared/Logo";
import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<nav className="top-0 fixed w-full my-8 mx-8  flex">
			<div className="flex items-center gap-9  ">
				<Link href="/">
					<Logo className="h-8" />
				</Link>
				<div className="flex gap-7 text-theme-twilight-blue-50 text-lg">
					<Link href="/">Strona Główna</Link>
					<Link href="/">Zapisz się</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
