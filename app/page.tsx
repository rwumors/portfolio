'use client';

import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import Projects from '@/components/shared/Projects';
import Technologies from '@/components/shared/Technologies';
import PatternsUtilityScripts from '@/components/shared/PatternsUtilityScripts';
import WhatIDo from '@/components/shared/WhatIDo';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative flex flex-col">
      <Header />

      <div className="relative z-10 pt-32 pb-8 px-8 flex-1">
        {/* Hero Section with Projects */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div id="about" className="scroll-mt-24">
            <Hero />
          </div>
          <div id="projects" className="scroll-mt-24">
            <Projects />
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="scroll-mt-24">
          <Technologies />
        </section>

        {/* Patterns & Utility Scripts Section */}
        <section id="patterns-utility-scripts" className="scroll-mt-24">
          <PatternsUtilityScripts />
        </section>

        {/* What I Do & Connect Section */}
        <section id="contact" className="scroll-mt-24">
          <WhatIDo />
        </section>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-8 pb-8">
        <Footer />
      </div>
    </main>
  );
}
