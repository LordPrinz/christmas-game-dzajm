import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				defaultLayout:
					"[full-start] minmax(60px,1fr) [center-start] repeat(8,[col-start] minmax(min-content,140px) [col-end]) [center-end] minmax(60px,1fr) [full-end]",
				smallLayout:
					"[full-start] minmax(30px,1fr)  [center-start] repeat(8,[col-start] minmax(min-content,140px) [col-end]) [center-end] minmax(30px,1fr) [full-end]",
				mobileLayout:
					"[full-start] minmax(15px,1fr)  [center-start] repeat(8,[col-start] minmax(min-content,140px) [col-end]) [center-end] minmax(15px,1fr) [full-end]",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				theme: {
					bg: {
						blue: "#91eefa",
					},
					snow: "#fffafa",
				},
			},
		},
	},
	plugins: [],
};
export default config;
