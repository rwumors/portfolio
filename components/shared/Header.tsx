'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [time, setTime] = useState('00 : 00 : 00');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours} : ${minutes} : ${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-start bg-[#0a0a0a]/95 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col">
          <div className="text-sm uppercase tracking-wider mb-4">TORONTO, CANADA</div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-6 flex flex-col justify-between group"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>
        
        <div className="text-sm font-mono">{time}</div>
      </header>

      {/* Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-[#0a0a0a] border-r border-gray-700 z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-32 px-8">
          <nav className="flex flex-col gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-lg uppercase tracking-wider hover:text-[#00ff88] transition-colors"
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-lg uppercase tracking-wider hover:text-[#00ff88] transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-left text-lg uppercase tracking-wider hover:text-[#00ff88] transition-colors"
            >
              TECHNOLOGIES
            </button>
            <button
              onClick={() => scrollToSection('patterns-utility-scripts')}
              className="text-left text-lg uppercase tracking-wider hover:text-[#00ff88] transition-colors"
            >
              PATTERNS & UTILITY SCRIPTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-lg uppercase tracking-wider hover:text-[#00ff88] transition-colors"
            >
              CONTACT
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

