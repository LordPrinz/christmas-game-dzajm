"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const loginHandler = async () => {
	await signIn("azure-ad", {
		redirect: true,
		callbackUrl: "/",
	});
};

const AzureLogin = () => {
	return (
		<button
			className="flex items-center gap-2.5 px-5 py-2.5  text-[#9CA3AF] border border-[#9CA3AF] rounded-lg select-none transition hover:transition hover:bg-[#374151] hover:text-[#fff]"
			onClick={loginHandler}>
			<Image
				src="https://authjs.dev/img/providers/azure.svg"
				width={24}
				height={24}
				alt="Azure image"
			/>
			<span>Zaloguj się szkolnym mailem</span>
		</button>
	);
};

export default AzureLogin;
