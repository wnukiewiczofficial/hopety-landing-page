"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

type ModalType = "privacy" | "terms" | null;

const privacyContent = `
Administrator danych osobowych: Dawid Wnukiewicz, 87-800 Włocławek, ul. Dobrzyńska 56C.

Zbieramy: adres e-mail podany w formularzu zapisu.

Cel przetwarzania: informowanie o postępach aplikacji Hopety i zaproszenie do testów beta.

Podstawa prawna: zgoda użytkownika (art. 6 ust. 1 lit. a RODO).

Prawa użytkownika: dostęp do danych, ich usunięcie, sprostowanie oraz wycofanie zgody w dowolnym momencie. Kontakt w sprawach danych: hello@hopety.pl.

Dane nie są przekazywane podmiotom trzecim ani poza obszar EOG.

Dane przechowywane są do czasu wycofania zgody lub zakończenia projektu Hopety.
`;

const termsContent = `
Regulamin zapisu na listę oczekujących Hopety.

1. Korzystanie z formularza zapisu oznacza zgodę na otrzymanie jednorazowej wiadomości e-mail z informacją o dostępności aplikacji Hopety.

2. Nie wysyłamy spamu. Twój adres e-mail będzie użyty wyłącznie w celu poinformowania o starcie aplikacji.

3. Możesz w każdej chwili zrezygnować, kontaktując się z nami pod adresem hello@hopety.pl.

4. Aplikacja Hopety jest w fazie beta — funkcje mogą ulec zmianie przed oficjalnym wydaniem.

5. Właściciel serwisu nie ponosi odpowiedzialności za niedostępność aplikacji lub opóźnienia w jej udostępnieniu.
`;

interface ModalProps {
	title: string;
	content: string;
	onClose: () => void;
}

function Modal({ title, content, onClose }: ModalProps) {
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 10 }}
				transition={{ duration: 0.2 }}
				className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto relative"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-xl font-bold text-text">{title}</h3>
					<button
						onClick={onClose}
						aria-label="Zamknij"
						className="w-9 h-9 flex items-center justify-center rounded-xl bg-card hover:bg-primary/10 text-text/60 hover:text-primary transition-colors text-xl"
					>
						×
					</button>
				</div>
				<div className="text-sm text-text/70 leading-relaxed whitespace-pre-line">{content.trim()}</div>
			</motion.div>
		</motion.div>
	);
}

export default function LegalSection() {
	const [activeModal, setActiveModal] = useState<ModalType>(null);

	const closeModal = useCallback(() => setActiveModal(null), []);

	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-center mb-10"
			>
				<h2 className="text-3xl md:text-5xl font-extrabold text-text">
					Przeczytaj nasze <span className="text-primary">zasady</span>.
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="flex flex-col sm:flex-row gap-4 justify-center"
			>
				<button
					onClick={() => setActiveModal("privacy")}
					className="cursor-pointer border-2 border-primary text-primary bg-white rounded-xl px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
				>
					Polityka prywatności
				</button>
				<button
					onClick={() => setActiveModal("terms")}
					className="cursor-pointer border-2 border-primary text-primary bg-white rounded-xl px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
				>
					Regulamin
				</button>
			</motion.div>

			<AnimatePresence>
				{activeModal === "privacy" && <Modal title="Polityka prywatności" content={privacyContent} onClose={closeModal} />}
				{activeModal === "terms" && <Modal title="Regulamin" content={termsContent} onClose={closeModal} />}
			</AnimatePresence>
		</section>
	);
}
