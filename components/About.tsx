"use client";

import { Bell, ListChecks, Pill, Scale, Sparkles, ClipboardList, Users } from "lucide-react";
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
		description:
			"Hopety przypomni każdemu domownikowi o leku i czynności we właściwym czasie. Wszyscy dostają powiadomienie. Nikt nie pominie ważnych zadań oraz wszyscy będą wiedzieć, kto co już zrobił.",
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
		icon: Sparkles,
		title: "Asystent Pupila z AI",
		description:
			"Wbudowany asystent oparty o sztuczną inteligencję pomaga planować opiekę, analizować zdrowie pupila i upraszcza codzienne korzystanie z aplikacji.",
	},
	{
		icon: ClipboardList,
		title: "Historia medyczna i plan leczenia",
		description: "Wszystkie wydarzenia medyczne, badania i zalecenia lekarza zebrane w jednym miejscu i dostępne w każdej chwili.",
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
					Codzienna opieka nad psem to nie tylko miłość, ale też dziesiątki drobnych obowiązków, które łatwo przeoczyć, szczególnie gdy
					opiekuje się nim cała rodzina. Hopety synchronizuje wszystko między domownikami, żebyś nigdy nie musiał trzymać tego w głowie ani
					pytać {"\u201E"}Kto już to zrobił?{"\u201D"}.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
				className="bg-primary rounded-2xl p-7 mb-10 flex flex-col items-center justify-center gap-5 text-center"
			>
				<div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary shrink-0">
					<Users className="w-8 h-8" strokeWidth={2} aria-hidden />
				</div>
				<div className="max-w-2xl">
					<h3 className="text-xl font-bold text-white mb-2 text-balance">Opieka, którą dzieliecie się wszyscy</h3>
					<p className="text-base text-white leading-relaxed">
						Zadania, leki, ważenie i czynności pupila są współdzielone między urządzeniami wszystkich członków gospodarstwa. Gdy ktoś poda
						lek lub wykona czynność, każdy dostaje powiadomienie w czasie rzeczywistym.
					</p>
				</div>
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
							className="bg-card rounded-2xl p-6 flex flex-col gap-4 items-center text-center"
						>
							<div className="flex flex-col items-center gap-3 w-full">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
									<Icon className="w-7 h-7" strokeWidth={2.2} aria-hidden />
								</div>
								<h3 className="text-base font-bold text-text text-balance">{item.title}</h3>
							</div>
							<p className="text-sm text-text/60 leading-relaxed">{item.description}</p>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
