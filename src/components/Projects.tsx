import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { projects } from "../data/portfolio";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="projetos" className="section-shell">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="section-kicker">Projetos</span>
          <h2 className="section-title">Projetos principais.</h2>
        </div>
        <p className="max-w-xl leading-7 text-slate-400">
          Dois projetos que representam minha pratica atual em desenvolvimento
          web. Para mais detalhes, recomendo acessar o repositorio no GitHub.
        </p>
      </div>

      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[.62fr_1.38fr]">
          <aside className="border-b border-white/10 bg-space-900/70 p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-mint">
                  projetos
                </span>
                <p className="mt-2 text-sm text-slate-400">
                  {activeIndex + 1} de {projects.length}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Projeto anterior"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-neon-cyan/40 hover:text-neon-cyan"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Proximo projeto"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-neon-cyan/40 hover:text-neon-cyan"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    activeIndex === index
                      ? "border-neon-cyan/50 bg-neon-cyan/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span className="block font-mono text-xs text-neon-amber">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block font-display text-lg font-bold">
                    {project.title}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <article className="relative min-h-[440px] p-5 sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-28 w-44 border-b border-l border-neon-violet/20 bg-neon-violet/10" />
            <div className="relative">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full border border-neon-amber/30 bg-neon-amber/10 px-4 py-2 text-sm font-bold text-neon-amber">
                  {activeProject.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neon-mint/25 bg-neon-mint/10 px-4 py-2 text-sm font-semibold text-neon-mint">
                  <ShieldCheck size={16} /> {activeProject.status}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                {activeProject.title}
              </h3>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {activeProject.description}
              </p>

              <p className="mt-5 max-w-3xl rounded-2xl border border-neon-violet/20 bg-neon-violet/10 p-5 leading-7 text-slate-300">
                {activeProject.githubNote}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-mint px-5 py-3 font-bold text-space-950 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <ExternalLink size={18} /> Acessar site
                  </a>
                ) : null}
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-cyan px-5 py-3 font-bold text-space-950 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <Github size={18} /> Ver no GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
