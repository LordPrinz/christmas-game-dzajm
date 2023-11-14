"use client";

import { cn } from "@/utils/tailwind";
import { startTransition, useEffect, useState } from "react";
import { addStar, removeStar } from "./_actions/starAction";
type Props = {
	isStarred: boolean;
};

// eslint-disable-next-line @next/next/no-async-client-component
const StarProject = ({ isStarred }: Props) => {
	const [isActive, setIsActive] = useState(isStarred);
	const [isFirstRender, setIsFirstRender] = useState(true);

	const starClickHandler = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isFirstRender) return setIsFirstRender(false);
		const timeout = setTimeout(() => {
			startTransition(() => {
				if (!isActive) addStar();
				else removeStar();
			});
		}, 700);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isActive]);

	return (
		<svg
			onClick={starClickHandler}
			className={cn(
				"fill-transparent w-10 h-10 absolute top-1/2 -translate-y-1/2 right-4 stroke-theme-twilight-blue-500",
				isActive
					? ""
					: "fill-theme-twilight-blue-500 stroke-theme-twilight-blue-600"
			)}
			strokeWidth={14}
			viewBox="0 0 448 512"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"></path>
		</svg>
	);
};

export default StarProject;
