"use client";

import { motion } from "motion/react";
import PhoneMockup from "./PhoneMockup";

interface Screenshot {
	src: string;
	alt: string;
	label: string;
	description: string;
}

const screenshots: Screenshot[] = [
	{
		src: "/screens/screen-today.png",
		alt: "Hopety. Panel Dziś",
		label: "Panel Dziś",
		description: "Wszystkie zadania pupila na dziś w jednym miejscu",
	},
	{
		src: "/screens/screen-pets.png",
		alt: "Hopety. Twoje pupile",
		label: "Twoje pupile",
		description: "Profil pupila z historią i kluczowymi danymi",
	},
	{
		src: "/screens/screen-tasks.png",
		alt: "Hopety. Planowanie zadań",
		label: "Planowanie zadań",
		description: "Zadania zsynchronizowane dla całej rodziny",
	},
	{
		src: "/screens/screen-pharmacy.png",
		alt: "Hopety. Apteczka",
		label: "Apteczka",
		description: "Leki i dawkowanie pod pełną kontrolą",
	},
	{
		src: "/screens/screen-summary.png",
		alt: "Hopety. Podsumowanie zadań",
		label: "Podsumowanie zadań",
		description: "Historia wszystkich wykonanych czynności",
	},
	{
		src: "/screens/screen-assistant.png",
		alt: "Hopety. Asystent Pupila",
		label: "Asystent Pupila",
		description: "Asystent AI, który upraszcza opiekę",
	},
];

export default function Screenshots() {
	return (
		<section className="py-20 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-center mb-14 px-6"
			>
				<h2 className="text-3xl md:text-5xl font-extrabold text-text">
					Tak wygląda <span className="text-primary">Hopety</span>.
				</h2>
			</motion.div>

			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
					{screenshots.map((screen, index) => (
						<motion.div
							key={screen.src}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
						>
							<PhoneMockup
								src={screen.src}
								alt={screen.alt}
								label={screen.label}
								description={screen.description}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
