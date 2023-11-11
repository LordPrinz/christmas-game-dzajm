import React from "react";
import Snowfall from "./Snowfall";
import Ground from "./Ground";

const Header = () => {
	return (
		<div className="w-full  col-[full-start/full-end]  flex flex-col bg-theme-bg-blue overflow-hidden">
			<div className="flex flex-col items-center justify-center flex-1">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-6xl font-bold text-center text-theme-snow ">
						Christmas Game Dzajm
					</h1>
					<h2 className="text-2xl font-bold text-center text-theme-snow text-opacity-80">
						Winter ZSTI game developers tournament
					</h2>
				</div>
			</div>
			<Snowfall />
			<Ground />
		</div>
	);
};

export default Header;
