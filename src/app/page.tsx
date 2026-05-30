'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Technology from '@/components/Technology';
import Preview from '@/components/Preview';
import CTA from '@/components/CTA';
import Footer from '@/components/footer';

export default function Home() {
return ( 
  <main className="bg-white text-slate-900 overflow-x-hidden"> <Navbar />

  <Hero />

  <Problem />

  <Solution />

  <Features />

  <HowItWorks />

  <Technology />

  <Preview />

  <CTA />

  <Footer />
</main>


);
}
