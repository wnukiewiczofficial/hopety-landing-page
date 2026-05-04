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
	icons: {
		icon: [{ url: "/favicon.png", type: "image/png" }],
		apple: [{ url: "/favicon.png", type: "image/png" }],
	},
	title: "Hopety",
	description: "Hopety to aplikacja mobilna łącząca plan dnia, leki, zadania i historię zdrowia Twojego pupila w jednym miejscu.",
	keywords: ["aplikacja dla psa", "aplikacja dla kota", "opieka nad pupilem", "planowanie zadań pupil", "leki dla psa", "hopety"],
	openGraph: {
		title: "Hopety, zadbaj o życie Twojego pupila",
		description: "Plan dnia, apteczka, zadania i historia zdrowia Twojego pupila, wszystko w jednym miejscu.",
		url: "https://hopety.pl",
		siteName: "Hopety",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		locale: "pl_PL",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hopety, aplikacja dla właścicieli pupili",
		description: "Zadbaj o życie Twojego pupila.",
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
