"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
	const handleLogout = async () => {
		await signOut({
			redirect: true,
			callbackUrl: "/",
		});
	};

	return <div onClick={handleLogout}>leave</div>;
};

export default SignOut;
