import React from "react";

type Props = {
	className?: string;
};

const Logo = ({ className }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="logo_layer-1"
			data-name="zsti logo"
			viewBox="0 0 321.84499 189.479"
			className={className}>
			<polygon points="197.439 0.005 144.685 52.762 231.767 52.758 147.803 136.717 85.897 136.717 107.832 189.479 169.53 189.479 169.53 189.354 169.658 189.479 269.077 90.07 269.077 177.153 321.831 124.401 321.845 0 197.439 0.005" />
			<polygon points="21.931 189.479 45.637 189.479 23.702 136.717 0 136.717 21.931 189.479" />
			<polygon points="67.203 189.479 94.971 189.479 73.035 136.717 45.271 136.717 67.203 189.479" />
		</svg>
	);
};

export default Logo;
