import React from "react";
import AzureLogin from "./AzureLogin";

const LoginForm = () => {
	return (
		<div className="p-8 bg-[#1f2937] text-[#eee] rounded-md">
			<h2 className="font-bold text-xl sm:text-2xl">Zaloguj się</h2>
			<div className=" mt-3.5 sm:mt-5">
				<AzureLogin />
			</div>
		</div>
	);
};

export default LoginForm;
