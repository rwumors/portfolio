export default function Hero() {
  return (
    <div className="relative">
        <div className="mb-6">
          <h2 className="text-4xl font-bold accent-green mb-8">HI, I&apos;M AIZ!</h2>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            BUILDING SCALABLE AND EFFICIENT FULL-STACK APPLICATIONS
          </h1>
          <p className="text-lg opacity-80 max-w-lg">
            I&apos;m a Full Stack Developer passionate about creating robust, scalable solutions with modern technologies.
          </p>
        </div>
        
        {/* 3D Graphic Element 1 */}
        <div className="absolute -left-20 top-20 w-64 h-64 opacity-30">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00cc6a] rounded-full blur-3xl transform rotate-45"></div>
            <div className="absolute inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-[#00ff88]/40 to-transparent rounded-full"></div>
          </div>
        </div>
        
        {/* 3D Graphic Element 2 */}
        <div className="absolute left-32 top-96 w-48 h-48 opacity-20">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border-2 border-[#00ff88] rounded-full transform rotate-12"></div>
            <div className="absolute inset-4 border-2 border-white/30 rounded-full transform -rotate-12"></div>
            <div className="absolute inset-8 border-2 border-[#00ff88]/50 rounded-full transform rotate-12"></div>
          </div>
        </div>
      </div>
  );
}

