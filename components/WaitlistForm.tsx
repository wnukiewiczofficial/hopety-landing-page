"use client";

import { useState } from "react";
import { motion } from "motion/react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<FormStatus>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email.includes("@")) {
			setErrorMessage("Podaj prawidłowy adres e-mail.");
			setStatus("error");
			return;
		}

		setStatus("loading");

		try {
			const res = await fetch("/api/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email }),
			});

			if (res.ok) {
				setStatus("success");
				setEmail("");
			} else {
				const data = (await res.json()) as { error?: string };
				setErrorMessage(data.error ?? "Coś poszło nie tak. Spróbuj ponownie.");
				setStatus("error");
			}
		} catch {
			setErrorMessage("Błąd połączenia. Sprawdź internet i spróbuj ponownie.");
			setStatus("error");
		}
	};

	return (
		<section id="waitlist" className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-center mb-10"
			>
				<h2 className="text-3xl md:text-5xl font-extrabold text-text">
					Bądź <span className="text-primary">pierwszy</span>.
				</h2>
				<p className="mt-4 text-lg text-text/60 font-medium max-w-lg mx-auto">
					Zapisz się na wczesny dostęp i dołącz do grona, które zawsze będzie traktowane wyjątkowo.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="bg-card rounded-2xl p-8 md:p-10 max-w-lg mx-auto text-center"
			>
				{status === "success" ? (
					<div className="py-4">
						<div className="text-5xl mb-4">🎉</div>
						<h3 className="text-xl font-bold text-text mb-2">Zapisano!</h3>
						<p className="text-text/60">Witamy w Hopety! Niedługo zostaniesz poinformowany o dalszych krokach.</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} noValidate>
						<label htmlFor="waitlist-email" className="sr-only">
							Adres e-mail
						</label>
						<input
							id="waitlist-email"
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								if (status === "error") setStatus("idle");
							}}
							placeholder="twoj@email.com"
							required
							disabled={status === "loading"}
							className="border border-primary/30 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary bg-white text-text placeholder-text/30 disabled:opacity-60 transition"
						/>

						{status === "error" && <p className="mt-2 text-sm text-red-500 text-left">{errorMessage}</p>}

						<button
							type="submit"
							disabled={status === "loading"}
							className="cursor-pointer mt-3 w-full bg-primary text-white rounded-xl px-8 py-3 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
						>
							{status === "loading" ? (
								<>
									<span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
									Wysyłam...
								</>
							) : (
								"Zapisuję się"
							)}
						</button>
					</form>
				)}
			</motion.div>
		</section>
	);
}
