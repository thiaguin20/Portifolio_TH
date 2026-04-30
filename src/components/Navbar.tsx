import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-space-950/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-neon-cyan shadow-glow">
            <Sparkles size={20} />
          </span>
          <span className="font-display text-lg font-bold text-white">
            Thiago<span className="text-neon-cyan">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden rounded-lg border border-neon-mint/40 bg-neon-mint/10 px-4 py-2 text-sm font-bold text-neon-mint transition hover:bg-neon-mint hover:text-space-950 md:inline-flex"
        >
          Contato
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-100 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-space-900/95 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
