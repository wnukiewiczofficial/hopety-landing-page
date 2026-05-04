import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LegalMarkdown from "@/components/LegalMarkdown";
import { LEGAL_PRIVACY_CONTENT } from "@/lib/legal-content";

export const metadata: Metadata = {
	title: "Polityka prywatności | Hopety",
	description: "Polityka prywatności aplikacji Hopety.",
};

export default function PrivacyPolicyPage() {
	return (
		<main className="bg-background min-h-screen overflow-x-hidden px-6 py-10 md:py-14">
			<div className="mx-auto w-full max-w-3xl">
				<header className="mb-10 flex justify-center">
					<Link href="/" aria-label="Wroc do strony glownej">
						<Image src="/hopety-logo.svg" alt="Hopety" width={76} height={64} className="object-contain" priority />
					</Link>
				</header>

				<article className="p-2 text-text md:p-4">
					<Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-text/70 hover:text-primary transition-colors">
						<ArrowLeft className="h-4 w-4" aria-hidden="true" />
						Strona główna
					</Link>
					<div className="mt-6 space-y-4 text-text/80 leading-relaxed">
						<LegalMarkdown source={LEGAL_PRIVACY_CONTENT} />
					</div>
				</article>
			</div>
		</main>
	);
}
