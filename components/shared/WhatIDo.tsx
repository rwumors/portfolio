'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';

export default function WhatIDo() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <h3 className="text-3xl font-bold mb-8 uppercase">WHAT I DO</h3>
          <h4 className="text-4xl font-bold mb-8 uppercase">FULL STACK DEVELOPMENT</h4>
          <p className="text-lg opacity-80 mb-8 max-w-md">
            Building end-to-end solutions with modern frameworks, databases, and cloud infrastructure. From APIs to user interfaces, I create complete, scalable applications.
          </p>
          {/* 3D Graphic Element */}
          <div className="w-64 h-64 opacity-30">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00cc6a] rounded-full blur-3xl transform rotate-45"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-[#00ff88]/40 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-6xl font-bold mb-4 uppercase">INTERESTED?</div>
          <div className="text-8xl font-bold accent-green mb-8 uppercase">CONNECT</div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="border border-white px-8 py-3 text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            SEND ME A MESSAGE
          </button>
        </div>
      </section>

      {isFormOpen && (
        <ContactForm onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}

