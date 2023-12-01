import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://christmas.dzaj.de"),
	title: "Christmas Game Dzajm 2023",
	description: "Christmas Game Dzajm 2023",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		siteName: "Christmas Game Dzajm 2023",
		url: "https://christmas.dzaj.de",
		description: "Christmas Game Dzajm 2023",

		type: "website",
		images: "/opengraph-image.jpg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Navigation />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
