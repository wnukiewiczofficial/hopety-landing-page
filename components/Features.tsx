"use client";

import { AudioLines, BriefcaseMedical, CalendarHeart, CheckCheck, HouseHeart, PawPrint, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: HouseHeart,
		title: "Panel „Dziś”",
		description: "Widok wszystkich zadań zaplanowanych na bieżący dzień.",
	},
	{
		icon: PawPrint,
		title: "Twoje pupile",
		description: "Spersonalizowany profil pupila zawierający jego historię, wagę i najważniejsze informacje.",
	},
	{
		icon: CalendarHeart,
		title: "Planowanie zadań",
		description: "Zarządzanie harmonogramem dnia Pupila za pomocą wbudowanego kalendarza.",
	},
	{
		icon: BriefcaseMedical,
		title: "Apteczka",
		description: "Śledzenie zapasów leków zintegrowane z zadaniami pupila.",
	},
	{
		icon: CheckCheck,
		title: "Podsumowanie zadań",
		description: "Pełny wgląd w historię wykonanych zadań poprzez rozbudowany dashboard.",
	},
	{
		icon: AudioLines,
		title: "Asystent Pupila",
		description: "Asystent, który za pomocą sztucznej inteligencji ułatwia korzystanie z aplikacji.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

export default function Features() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-center mb-14"
			>
				<h2 className="text-3xl md:text-5xl font-extrabold text-text">
					Wszystko w jednym <span className="text-primary">miejscu</span>.
				</h2>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-60px" }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<motion.div
							key={feature.title}
							variants={cardVariants}
							className="bg-card rounded-2xl p-6 flex flex-col gap-4 items-center text-center"
						>
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
								<Icon className="w-8 h-8" strokeWidth={2.2} aria-hidden />
							</div>
							<div>
								<h3 className="text-lg font-bold text-text mb-1">{feature.title}</h3>
								<p className="text-sm text-text/60 leading-relaxed">{feature.description}</p>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
