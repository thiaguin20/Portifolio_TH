import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Ferramentas para construir do pixel ao deploy.</h2>
          <p className="mt-5 leading-8 text-slate-400">
            Base tecnica voltada para desenvolvimento web, integrando interface,
            logica, versionamento e publicacao.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="rounded-xl border border-white/10 bg-space-950/45 p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{skill.name}</h3>
                        <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                          {skill.group}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-neon-cyan">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#26f4ff,#4dffb5,#a875ff)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
