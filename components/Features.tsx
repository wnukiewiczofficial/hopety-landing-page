'use client';

import { motion } from 'motion/react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '📋',
    title: 'Panel dziś',
    description: 'Widok wszystkich zadań zaplanowanych na dziś z paskiem postępu.',
  },
  {
    icon: '🐾',
    title: 'Twoje pupile',
    description: 'Profile psów i kotów z ich historią, wagą i notatkami.',
  },
  {
    icon: '📅',
    title: 'Planowanie zadań',
    description: 'Kalendarz z harmonogramem — leki, spacery, wizyty, karmienie.',
  },
  {
    icon: '💊',
    title: 'Apteczka',
    description: 'Śledzenie zapasów leków i przypomnienia o dawkowaniu.',
  },
  {
    icon: '📊',
    title: 'Dashboard',
    description: 'Podsumowanie aktywności pupila z filtrami i historią wykonanych zadań.',
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
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-text">
          Wszystko w jednym{' '}
          <span className="text-primary">miejscu.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-text mb-1">{feature.title}</h3>
              <p className="text-sm text-text/60 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
