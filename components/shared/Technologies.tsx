import { techIcons } from './TechIcons';

const technologies = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Next.js',
  'React',
  'Python',
  'PowerShell',
  'Bash',
  'Supabase',
  'Tailwind CSS',
  'Digital Ocean',
];

export default function Technologies() {
  return (
    <section className="mb-32">
      <h3 className="text-3xl font-bold mb-8 uppercase">Technologies</h3>
      <p className="text-xl mb-12 uppercase opacity-80">Technologies I work with</p>
      
      <div className="flex flex-wrap gap-2.5 justify-center">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-[#1a1a1a] rounded-lg border border-gray-700 px-3 py-2 flex items-center gap-2 hover:border-[#00ff88]/50 transition-colors group"
          >
            {techIcons[tech] && (
              <div className="w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                {techIcons[tech]}
              </div>
            )}
            <span className="text-xs text-gray-300 group-hover:text-[#00ff88] transition-colors whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

