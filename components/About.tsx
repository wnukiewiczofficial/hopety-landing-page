"use client";

import { Bell, ListChecks, Pill, Scale, HeartPulse, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
	{
		icon: ListChecks,
		title: "Zadania jako punkt wyjścia",
		description:
			"Każda czynność związana z opieką nad pupilem zaczyna się od zadania. Zadania są specjalne i zintegrowane z konkretnymi funkcjami: ważeniem, podawaniem leków, analizą medyczną i nie tylko.",
	},
	{
		icon: Bell,
		title: "Automatyczne przypomnienia",
		description: "Hopety przypomni Ci o każdym leku i czynności we właściwym czasie, żebyś nigdy nie pominął ważnej dawki ani wizyty.",
	},
	{
		icon: Pill,
		title: "Pełna kontrola nad lekami",
		description:
			"Zapisz lek wraz ze zdjęciem i opisem. Aplikacja automatycznie śledzi stan zapasów i integruje dawkowanie z listą zadań pupila.",
	},
	{
		icon: Scale,
		title: "Monitorowanie wagi",
		description: "Regularnie rejestruj wagę pupila i obserwuj trendy w powiązaniu z historią zadań i wizyt weterynaryjnych.",
	},
	{
		icon: HeartPulse,
		title: "Stan fizjologiczny",
		description: "Śledź parametry zdrowotne pupila i monitoruj jego samopoczucie na przestrzeni czasu dzięki dedykowanym zadaniom.",
	},
	{
		icon: ClipboardList,
		title: "Historia medyczna i plan leczenia",
		description: "Wszystkie zdarzenia medyczne, badania i zalecenia lekarza zebrane w jednym miejscu i dostępne w każdej chwili.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

export default function About() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-center mb-6"
			>
				<h2 className="text-3xl md:text-5xl font-extrabold text-text mb-6">
					Dlaczego <span className="text-primary">Hopety</span>?
				</h2>
				<p className="text-base md:text-lg text-text/60 font-medium max-w-2xl mx-auto leading-relaxed">
					Codzienna opieka nad psem to nie tylko miłość, ale też dziesiątki drobnych obowiązków, które łatwo przeoczyć. Hopety powstało po
					to, żebyś nigdy nie musiał trzymać tego wszystkiego wyłącznie w głowie. To asystent, który pomaga wtedy, kiedy najbardziej tego
					potrzebujesz.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
				className="text-center mb-14"
			>
				<span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-6 py-4 rounded-full">
					Projekt w aktywnym rozwoju. Kształtujemy aplikację razem z użytkownikami.
				</span>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-60px" }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{highlights.map((item) => {
					const Icon = item.icon;
					return (
						<motion.div
							key={item.title}
							variants={cardVariants}
							className="bg-card rounded-2xl p-6 flex flex-col gap-4 items-center text-center sm:items-stretch sm:text-left"
						>
							<div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4 w-full">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
									<Icon className="w-7 h-7" strokeWidth={2.2} aria-hidden />
								</div>
								<h3 className="text-base font-bold text-text mb-1">{item.title}</h3>
							</div>
							<p className="text-sm text-text/60 leading-relaxed">{item.description}</p>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
