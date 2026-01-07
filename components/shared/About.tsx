export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
      <div>
        <h3 className="text-3xl font-bold mb-8 uppercase">ABOUT ME</h3>
        <p className="text-xl mb-8 uppercase">I BUILD ROBUST FULL-STACK SOLUTIONS WITH MODERN TECHNOLOGIES.</p>
        
        <div className="flex gap-4 mb-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:border-[#00ff88] hover:text-[#00ff88] transition-colors text-sm"
              title={social}
            >
              {social.charAt(0)}
            </a>
          ))}
        </div>
        
        <div>
          <h4 className="text-2xl font-bold mb-2">
            <span className="accent-green">AIZ</span>
          </h4>
          <p className="text-sm leading-relaxed opacity-80 mb-6 max-w-2xl">
            As a Full Stack Developer, I specialize in building scalable applications from the ground up. I&apos;m passionate about clean code, modern architecture, and creating seamless user experiences. My expertise spans across the entire development stack, from database design to frontend interfaces.
          </p>
          <button className="border border-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="flex flex-col justify-center">
        <div className="text-9xl font-serif text-white/20 mb-8">&quot;</div>
        <p className="text-2xl font-bold leading-relaxed mb-8">
          EXCELLENT WORK ON THE PROJECT. <span className="accent-green">HIGH QUALITY CODE!</span>
        </p>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"></div>
          </div>
          <div>
            <div className="font-bold">CLIENT NAME</div>
            <div className="text-sm opacity-60">Project Collaborator</div>
          </div>
        </div>
      </div>
    </section>
  );
}

