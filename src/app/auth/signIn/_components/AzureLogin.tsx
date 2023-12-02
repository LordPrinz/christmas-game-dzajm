"use client";

import Image from "next/image";

const AzureLogin = () => {
	return (
		<div className="flex items-center gap-2 px-5 py-2.5 border border-[#9CA3AF] rounded-lg">
			<Image
				src="https://authjs.dev/img/providers/azure.svg"
				width={24}
				height={24}
				alt="Azure image"
			/>
			<span className="text-[#9CA3AF]">Zaloguj się szkolnym mailem</span>
		</div>
	);
};

export default AzureLogin;
