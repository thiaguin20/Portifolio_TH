import { eventMeta, events } from "../data/portfolio";

export function Events() {
  return (
    <section id="eventos" className="section-shell">
      <div className="mb-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <span className="section-kicker">Eventos e palestras</span>
          <h2 className="section-title">Aprendizado conectado com o mercado.</h2>
        </div>
        <p className="leading-8 text-slate-400">
          Alem dos projetos, tambem busco contato com profissionais e empresas
          para entender melhor a rotina, as expectativas e os caminhos da area
          de tecnologia.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass-panel rounded-2xl p-6">
          <div className="grid gap-4">
            {eventMeta.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-space-950/50 p-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                  <Icon size={20} />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {label}
                  </span>
                  <strong className="block text-white">{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {events.map(({ title, context, description, highlights, icon: Icon }) => (
            <article
              key={title}
              className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-neon-mint/35"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-neon-violet/30 bg-neon-violet/10 text-neon-violet">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {title}
                    </h3>
                    <span className="text-sm font-semibold text-neon-amber">
                      {context}
                    </span>
                  </div>
                </div>
              </div>

              <p className="leading-7 text-slate-300">{description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
