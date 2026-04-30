import { Layers3, Rocket, Workflow } from "lucide-react";

const pillars = [
  {
    title: "Estrutura e logica",
    text: "Interesse em modelar sistemas com regras claras, organizacao e fluxo funcional.",
    icon: Workflow,
  },
  {
    title: "Interface e experiencia",
    text: "Cuidado com telas responsivas, navegacao objetiva e apresentacao profissional.",
    icon: Layers3,
  },
  {
    title: "Publicacao final",
    text: "Experiencia colocando projeto em producao e ajustando a entrega para uso real.",
    icon: Rocket,
  },
];

export function About() {
  return (
    <section id="sobre" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
        <div>
          <span className="section-kicker">Sobre</span>
          <h2 className="section-title">
            Estudante de Sistemas de Informacao com foco em full stack.
          </h2>
        </div>
        <p className="text-lg leading-8 text-slate-300">
          Sou estudante de Sistemas de Informacao com foco em desenvolvimento
          full stack. Gosto de transformar ideias em projetos reais, cuidando
          desde a estrutura e logica do sistema ate a interface e publicacao
          final. Ja desenvolvi um site do zero e coloquei em producao,
          experiencia que fortaleceu minha visao pratica sobre criacao,
          evolucao e entrega de solucoes web funcionais.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
          >
            <Icon className="mb-8 text-neon-mint" size={28} />
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
