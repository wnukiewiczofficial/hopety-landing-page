import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["700", "800"],
	variable: "--font-plus-jakarta-sans",
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-dm-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hopety.pl"),
	title: "Hopety — aplikacja dla właścicieli psów i kotów",
	description:
		"Hopety to aplikacja mobilna łącząca plan dnia, leki, zadania i historię zdrowia Twojego pupila w jednym miejscu. Dla psów i kotów.",
	keywords: ["aplikacja dla psa", "aplikacja dla kota", "opieka nad pupilem", "planowanie zadań pupil", "leki dla psa", "hopety"],
	openGraph: {
		title: "Hopety — zadbaj o pupila bez stresu",
		description: "Plan dnia, apteczka, zadania i historia zdrowia Twojego psa lub kota — wszystko w jednym miejscu.",
		url: "https://hopety.pl",
		siteName: "Hopety",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		locale: "pl_PL",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hopety — aplikacja dla właścicieli psów i kotów",
		description: "Zadbaj o pupila. Bez stresu.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
			<body>{children}</body>
		</html>
	);
}
