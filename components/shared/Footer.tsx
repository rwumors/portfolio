'use client';

export default function Footer() {
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
    }
  };

  return (
    <footer className="border-t border-white/20 pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <nav className="flex flex-wrap gap-6 uppercase text-sm">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative flex items-center gap-2 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>ABOUT ME</span>
            <svg 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative flex items-center gap-2 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>PROJECTS</span>
            <svg 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('technologies')}
            className="group relative flex items-center gap-2 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>TECHNOLOGIES</span>
            <svg 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('patterns-utility-scripts')}
            className="group relative flex items-center gap-2 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>PATTERNS & UTILITY SCRIPTS</span>
            <svg 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative flex items-center gap-2 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>CONTACT</span>
            <svg 
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>
        
        <div className="flex gap-4">
          <a
            href="https://github.com/rwumors"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 overflow-hidden"
            title="GitHub"
          >
            <span className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative text-white group-hover:text-[#00ff88] transition-colors duration-300 transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
          </a>
          <a
            href="mailto:aiz@alone.wtf"
            className="group relative w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 overflow-hidden"
            title="Email"
          >
            <span className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative text-white group-hover:text-[#00ff88] transition-colors duration-300 transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-xs opacity-60">
        © {new Date().getFullYear()} AIZ. All rights reserved.
      </div>
    </footer>
  );
}

