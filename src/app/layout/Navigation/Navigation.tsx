import Logo from "@/app/components/shared/Logo";
import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<nav className="top-0 fixed w-full ">
			<Link href="/" className="max-h-[5px]">
				<Logo />
			</Link>
		</nav>
	);
};

export default Navigation;
