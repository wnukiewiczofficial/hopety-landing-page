"use client";

import { motion } from "motion/react";
import PhoneMockup from "./PhoneMockup";

const storeIconClass = "w-6 h-6 shrink-0 block";

function AppleIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={storeIconClass} aria-hidden>
			<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.378-3.066c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
		</svg>
	);
}

function GooglePlayIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={storeIconClass} aria-hidden>
			<path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12 6.05 21.34 14.54 12.85 16.81 15.12M20.16 10.81c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66 16.81 8.88 14.54 11.15 6.05 2.66z" />
		</svg>
	);
}

export default function Hero() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-4 md:py-24">
			<div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex-1 text-center md:text-left"
				>
					<h1 className="text-4xl md:text-6xl font-extrabold text-text tracking-wide md:tracking-normal mb-4 md:mb-6">
						Zadbaj o życie pupila z <span className="text-primary">Hopety</span>.
					</h1>
					<p className="text-lg md:text-xl text-text/60 font-medium mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
						Niezastąpiona pomoc w podawaniu leków i codziennej opiece nad Twoim pupilem.
					</p>
					<div className="flex flex-col items-center gap-4 mb-8 md:inline-flex md:self-start">
						<a
							href="#waitlist"
							className="self-stretch inline-flex items-center justify-center gap-2 bg-primary text-white rounded-2xl px-8 py-4 font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden>
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
							</svg>
							Wypróbuj aplikację
						</a>
						<div className="flex-1 flex gap-4 justify-center md:justify-start mt-4 md:mt-0">
							<div className="flex-1 flex mx-auto md:mx-0 items-center gap-3 bg-text text-white rounded-xl px-8 py-3.5 font-semibold">
								<AppleIcon />
								<div className="text-left">
									<div className="text-[10px] leading-none opacity-70 mb-0.5">Dostępne dla</div>
									<div className="text-sm font-bold leading-none">iOS</div>
								</div>
							</div>
							<div className="flex-1 flex mx-auto md:mx-0 items-center gap-3 bg-text text-white rounded-xl px-8 py-3.5 font-semibold">
								<GooglePlayIcon />
								<div className="text-left">
									<div className="text-[10px] leading-none opacity-70 mb-0.5">Dostępne dla</div>
									<div className="text-sm font-bold leading-none">Android</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="flex-1 flex justify-center"
				>
					<div className="origin-center md:scale-[1.2]">
						<PhoneMockup src="/screens/screen-today.png" alt="Hopety — Panel dziś" rotate priority />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
