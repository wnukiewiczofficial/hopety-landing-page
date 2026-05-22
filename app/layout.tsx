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
	title: "Hopety. Wspólna opieka nad pupilem",
	description: "Hopety synchronizuje zadania, leki i codzienną opiekę nad pupilem między wszystkimi urządzeniami w gospodarstwie. Każdy domownik wie, co już zrobiono.",
	keywords: ["aplikacja dla psa", "aplikacja dla kota", "opieka nad pupilem", "wspólna opieka nad zwierzęciem", "leki dla psa", "hopety", "aplikacja AI pupil"],
	openGraph: {
		title: "Hopety. Opieka nad pupilem dla całej rodziny",
		description: "Zadania, leki i czynności zsynchronizowane między wszystkimi domownikami. Nikt nie zapomni o ważnej dawce.",
		url: "https://hopety.pl",
		siteName: "Hopety",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		locale: "pl_PL",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hopety. Wspólna opieka nad pupilem",
		description: "Zsynchronizuj opiekę nad pupilem z całą rodziną. Leki, zadania, powiadomienia.",
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
