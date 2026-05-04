import Link from "next/link";
import { LEGAL_PRIVACY_TITLE, LEGAL_TERMS_TITLE } from "@/lib/legal-content";

export default function LegalSection() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<div className="text-center mb-10">
				<h2 className="text-3xl md:text-5xl font-extrabold text-text">
					Przeczytaj nasze <span className="text-primary">zasady</span>.
				</h2>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<Link
					href="/privacy-policy"
					className="border-2 border-primary text-primary bg-white rounded-xl px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors text-center"
				>
					{LEGAL_PRIVACY_TITLE}
				</Link>
				<Link
					href="/terms"
					className="border-2 border-primary text-primary bg-white rounded-xl px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors text-center"
				>
					{LEGAL_TERMS_TITLE}
				</Link>
			</div>
		</section>
	);
}
