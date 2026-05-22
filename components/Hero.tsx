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

export default function Hero() {
	return (
		<section className="max-w-6xl mx-auto px-6">
			<div className="min-h-[calc(100svh-7.5rem)] flex flex-col justify-between py-4 md:py-6">
				<div className="flex flex-1 flex-col md:flex-row items-center gap-10 md:gap-20 justify-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="flex-1 text-center md:text-left"
					>
						<h1 className="text-4xl md:text-6xl font-extrabold text-text tracking-wide md:tracking-normal mb-4 md:mb-6">
							<span className="text-primary">Hopety</span> pilnuje pupila. Za ciebie i za całą rodzinę.
						</h1>
						<p className="text-lg md:text-xl text-text/60 font-medium mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
							Kto podał dziś leki? Kto wyprowadził? Kiedy nakarmił? Już nigdy nie musisz zgadywać.
						</p>
						<div className="flex flex-col items-center gap-3 mb-8 md:self-start">
							<a
								href="#waitlist"
								className="self-stretch inline-flex items-center justify-center gap-2 bg-primary text-white rounded-2xl px-8 py-4 font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden>
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
								</svg>
								Pobierz aplikację
							</a>
							<div className="flex items-center gap-3 bg-text text-white rounded-xl px-8 py-3.5 font-semibold">
								<AppleIcon />
								<div className="text-left">
									<div className="text-[10px] leading-none opacity-70 mb-0.5">Dostępne dla</div>
									<div className="text-sm font-bold leading-none">iOS</div>
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
							<PhoneMockup src="/screens/screen-today.png" alt="Hopety. Panel dziś" rotate priority />
							<div className="flex justify-center pt-4 pb-2 shrink-0 mt-2">
								<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1.5">
									✦ Napędzane przez AI
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
