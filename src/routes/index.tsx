import React from 'react';

// 1. MAPEACIÓN CORRECTA: Mantiene tus IDs de ruta originales pero apunta a los archivos reales del ZIP
const projects = [
  {
    id: 'man-in-black', // Conserva tu ruta original para /case-studies/man-in-black
    title: 'Brand System & Visual Identity',
    category: 'UI / Brand Design',
    imageSrc: '/1_man_in_black_suit_looking_confident.png', // Nombre exacto de tu carpeta public
    gridClass: 'col-span-12 md:col-span-6 lg:col-span-8',
  },
  {
    id: 'rectangle-21', // Conserva tu ruta original para /case-studies/rectangle-21
    title: 'Digital Platform Ecosystem',
    category: 'Frontend / UI Design',
    imageSrc: '/2_rectangle_21.png', // Nombre exacto de tu carpeta public
    gridClass: 'col-span-12 md:col-span-6 lg:col-span-4',
  }
];

export default function PortfolioIndexPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      
      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[70vh]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for select freelance & contract roles
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl leading-[1.1]">
            Crafting scalable design systems and high-fidelity frontend experiences.
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light leading-relaxed">
            I bridge the gap between interface aesthetics and clean, functional code. Specializing in UI architecture, brand identity, and interactive web application design.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-sm transition-transform active:scale-98 hover:opacity-90"
            >
              View Selected Work
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 font-medium text-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              About & Experience
            </a>
          </div>
        </div>
      </section>

      <hr className="border-neutral-100 dark:border-neutral-900 max-w-7xl mx-auto" />

      {/* 3. PORTFOLIO GRID SECTION */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 max-w-5xl">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">Selected Work</p>
          <h2 className="text-3xl font-bold tracking-tight mt-2">Case Studies & UI Systems</h2>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-900 ${project.gridClass}`}
            >
              {/* Navegación multi-página limpia hacia tus archivos de casos de estudio */}
              <a href={`/case-studies/${project.id}`} className="block w-full h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    <svg 
                      className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-100 dark:border-neutral-900 max-w-7xl mx-auto" />

      {/* 4. ABOUT & EXPERIENCE SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">About Me</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Background & Philosophy</h2>
          </div>
          
          <div className="md:col-span-8 space-y-6 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            <p>
              I specialize in creating systematic design structures that bridge user experience with component-driven frontend architecture. Over the past years, I have engineered cohesive visual identities and translated them into clean, interactive React ecosystems.
            </p>
            <p>
              My stack revolves heavily around production-ready UI design, using tooling like <strong>Figma</strong> and advanced image workflows, alongside web development stacks utilizing <strong>Tailwind CSS, Vercel</strong>, and modern AI-assisted environments.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Design Systems', 'UI/UX Architecture', 'Frontend Development', 'Brand Systems', 'Tailwind CSS', 'Next.js / React', 'Prototyping'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 rounded-md bg-neutral-50 dark:bg-neutral-900 text-xs font-medium text-neutral-800 dark:text-neutral-200 border border-neutral-100 dark:border-neutral-800/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT SECTION */}
      <footer className="bg-neutral-50 dark:bg-neutral-900/30 border-t border-neutral-100 dark:border-neutral-900 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Let's build something exceptional.</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-light">Get in touch for custom interface design or frontend integration projects.</p>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-xs tracking-wider">
            <a href="mailto:your-email@domain.com" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              EMAIL
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              GITHUB
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} — Built with React & Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  );
}
