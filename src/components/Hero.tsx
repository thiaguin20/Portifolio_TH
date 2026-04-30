import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { heroBadges } from "../data/portfolio";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-24">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-neon-violet/10 blur-3xl" />
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative">
          <div className="section-kicker">
            <span className="h-2 w-2 rounded-full bg-neon-mint" />
            Thiago Henrique
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvedor Full Stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estudante de Sistemas de Informacao com foco em criar aplicacoes web
            funcionais, organizadas e publicaveis.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-cyan px-6 py-4 font-bold text-space-950 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Ver Projetos <ArrowUpRight size={18} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-neon-violet/60 hover:bg-neon-violet/15"
            >
              <MessageCircle size={18} /> Entrar em Contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl min-w-0">
          <div className="glass-panel relative rounded-[1.5rem] p-3 sm:rounded-[2rem] sm:p-4 lg:-rotate-2">
            <div className="rounded-[1.1rem] border border-white/10 bg-space-900/90 p-4 sm:rounded-[1.45rem] sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-neon-amber" />
                  <span className="h-3 w-3 rounded-full bg-neon-mint" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  portfolio.tsx
                </span>
              </div>

              <div className="scan-panel space-y-3 rounded-2xl border border-cyan-300/10 bg-black/30 p-3 font-mono text-xs text-slate-300 sm:p-4 sm:text-sm">
                <p>
                  <span className="text-neon-cyan">const</span>{" "}
                  profile = &#123;
                </p>
                <p className="pl-5">
                  nome: <span className="text-neon-mint">"Thiago Henrique"</span>,
                </p>
                <p className="pl-5">
                  area: <span className="text-neon-violet">"Full Stack"</span>,
                </p>
                <p className="pl-5">
                  foco: <span className="text-neon-amber">"projetos web"</span>
                </p>
                <p>&#125;;</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {heroBadges.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:-translate-y-0.5 hover:border-neon-cyan/30"
                  >
                    <Icon className="mb-3 text-neon-cyan" size={18} />
                    <span className="text-sm font-semibold text-slate-200">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#sobre"
            aria-label="Ir para a secao Sobre"
            className="absolute -bottom-5 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-cyan-300/30 bg-space-900 text-neon-cyan shadow-glow transition hover:-translate-y-1"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
