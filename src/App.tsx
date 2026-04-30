import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Differentials } from "./components/Differentials";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-space-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-circuit-grid bg-[size:44px_44px] opacity-40" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(115deg,rgba(38,244,255,.14),transparent_32%,rgba(168,117,255,.12)_60%,rgba(77,255,181,.08))]" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Differentials />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
