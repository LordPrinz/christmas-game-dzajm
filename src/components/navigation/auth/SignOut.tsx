"use client";

import { signOut } from "next-auth/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const SignOut = () => {
	const handleLogout = async () => {
		await signOut({
			redirect: true,
			callbackUrl: "/",
		});
	};

	return (
		<div
			onClick={handleLogout}
			className="cursor-pointer hover:bg-theme-twilight-blue-700 bg-theme-twilight-blue-600 py-2.5 transition hover:transition rounded-full flex gap-1.5 items-center px-4">
			<span className="text-theme-snow text-sm">Wyloguj</span>
			<ArrowRightOnRectangleIcon className="h-6 text-theme-snow" />
		</div>
	);
};

export default SignOut;
