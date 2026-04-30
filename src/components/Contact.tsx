import { ArrowUpRight, Send } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contato" className="section-shell">
      <div className="glass-panel grid gap-10 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1fr_.9fr] lg:p-12">
        <div>
          <span className="section-kicker">Contato</span>
          <h2 className="section-title">
            Vamos conversar sobre projetos, tecnologia ou oportunidades.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Estou aberto a oportunidades como desenvolvedor full-stack junior,
            projetos praticos e conexoes com pessoas da area de tecnologia.
          </p>
          <a
            href="mailto:thiagopiovans@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neon-mint px-6 py-4 font-bold text-space-950 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Enviar mensagem <Send size={18} />
          </a>
        </div>

        <div className="grid content-end gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-space-950/50 p-4 transition hover:border-neon-cyan/35 hover:bg-white/10"
            >
              <span className="flex items-center gap-3 font-semibold text-white">
                <Icon className="text-neon-cyan" size={20} />
                {label}
              </span>
              <ArrowUpRight
                className="text-slate-500 transition group-hover:text-neon-cyan"
                size={18}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
