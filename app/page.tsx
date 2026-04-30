import Image from 'next/image';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import WaitlistForm from '@/components/WaitlistForm';
import LegalSection from '@/components/LegalSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden">
      <div className="flex justify-center pt-12 pb-2 px-6">
        <Image
          src="/logo.png"
          alt="Hopety"
          width={140}
          height={44}
          className="h-11 w-auto object-contain"
          priority
        />
      </div>
      <Hero />
      <Features />
      <Screenshots />
      <WaitlistForm />
      <LegalSection />
      <Footer />
    </main>
  );
}
