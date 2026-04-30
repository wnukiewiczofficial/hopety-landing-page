'use client';

import { motion } from 'motion/react';
import PhoneMockup from './PhoneMockup';

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.378-3.066c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
      <path d="M3.18 23.76c.35.2.76.22 1.13.06l12.75-11.82-2.54-2.54L3.18 23.76zm16.64-9.42-3.24-1.87-2.88 2.67 2.88 2.67 3.27-1.88a1.49 1.49 0 000-2.59l-.03.01zM3 1.24c-.06.19-.09.39-.09.59v20.34c0 .2.03.4.09.59l.09.07L15.35 11.1v-.28L3.09 1.17 3 1.24zm9.76 10.78L3.09 22.83l.09-.07c.06.19.09.39.09.59v.01l-.09-.07 12.26-11.27-2.68-2.68z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-text leading-tight mb-6">
            Zadbaj o pupila.{' '}
            <span className="text-primary">Bez stresu.</span>
          </h1>
          <p className="text-lg md:text-xl text-text/60 font-medium mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Hopety to aplikacja dla właścicieli psów i kotów, która łączy plan dnia, leki, zadania
            i historię zdrowia pupila w jednym miejscu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              aria-label="Pobierz Hopety z App Store"
              className="flex items-center gap-3 bg-text text-white rounded-xl px-6 py-3.5 font-semibold hover:bg-text/90 transition-colors"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-70 mb-0.5">Pobierz w</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </a>
            <a
              href="#"
              aria-label="Pobierz Hopety z Google Play"
              className="flex items-center gap-3 bg-text text-white rounded-xl px-6 py-3.5 font-semibold hover:bg-text/90 transition-colors"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-70 mb-0.5">Pobierz w</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex-1 flex justify-center"
        >
          <PhoneMockup
            src="/screens/screen-today.png"
            alt="Hopety — Panel dziś"
            rotate
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
