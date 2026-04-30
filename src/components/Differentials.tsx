import { differentials } from "../data/portfolio";

export function Differentials() {
  return (
    <section id="diferenciais" className="section-shell">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Diferenciais</span>
        <h2 className="section-title">Forma de trabalho.</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {differentials.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="glass-panel rounded-2xl p-7 text-center transition hover:-translate-y-1 hover:border-neon-violet/35"
          >
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-neon-violet/30 bg-neon-violet/10 text-neon-violet">
              <Icon size={26} />
            </div>
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
