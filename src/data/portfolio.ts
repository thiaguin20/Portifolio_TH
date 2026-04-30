import {
  BrainCircuit,
  Building2,
  CalendarDays,
  Clock3,
  Code2,
  DatabaseZap,
  FileCode2,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  MonitorCog,
  Rocket,
  Server,
  ShieldCheck,
  TerminalSquare,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  githubNote: string;
  stack: string[];
  status: string;
  githubUrl: string;
  liveUrl?: string;
};

export type Skill = {
  name: string;
  level: number;
  group: string;
  icon: LucideIcon;
};

export type Differential = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type EventItem = {
  title: string;
  context: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contato", href: "#contato" },
];

export const projects: Project[] = [
  {
    title: "Docitha",
    category: "Sistema web",
    description:
      "Projeto web desenvolvido do zero, com foco em estrutura, interface e publicacao. O objetivo e apresentar uma solucao funcional e evolutiva, conectando a ideia inicial a uma entrega real em producao.",
    githubNote:
      "O repositorio no GitHub reune o codigo do projeto e deve ser usado como referencia principal para acompanhar a evolucao tecnica.",
    stack: ["Full Stack", "JavaScript", "Node.js", "Frontend", "Deploy"],
    status: "Projeto publicado",
    githubUrl: "https://github.com/thiaguin20/docitha",
    liveUrl: "https://yellow-mud-01f21ff1e.7.azurestaticapps.net",
  },
  {
    title: "Estoque de Marcenaria",
    category: "Controle de estoque",
    description:
      "Sistema em ASP.NET MVC para controle de estoque de uma marcenaria, com cadastro de produtos, entrada e saida de materiais, controle por quantidade e indicadores visuais.",
    githubNote:
      "O repositorio mostra a estrutura da aplicacao e e o melhor ponto para avaliar organizacao, tecnologias e implementacao.",
    stack: ["ASP.NET MVC", "C#", "JavaScript", "HTML", "CSS"],
    status: "Sistema de estudo pratico",
    githubUrl: "https://github.com/thiaguin20/estoque-marcenaria",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 84, group: "Linguagem", icon: FileCode2 },
  { name: "Node.js", level: 80, group: "Backend", icon: TerminalSquare },
  { name: "HTML e CSS", level: 86, group: "Interface", icon: Code2 },
  { name: "C# / ASP.NET MVC", level: 70, group: "Web", icon: Server },
  { name: "Git e GitHub", level: 78, group: "Versionamento", icon: GitBranch },
  { name: "Backend", level: 78, group: "Regras e dados", icon: DatabaseZap },
  { name: "Frontend", level: 83, group: "UI responsiva", icon: Layers3 },
];

export const differentials: Differential[] = [
  {
    title: "Desenvolvimento ponta a ponta",
    description:
      "Atuo desde a estrutura e logica do sistema ate a interface e publicacao final.",
    icon: Workflow,
  },
  {
    title: "Visao pratica",
    description:
      "Priorizo projetos funcionais, com fluxo claro e objetivo tecnico bem definido.",
    icon: BrainCircuit,
  },
  {
    title: "Organizacao de entrega",
    description:
      "Mantenho foco em codigo compreensivel, repositorio organizado e evolucao do projeto.",
    icon: ShieldCheck,
  },
  {
    title: "Aprendizado aplicado",
    description:
      "Uso a base de Sistemas de Informacao para transformar estudo em solucoes web reais.",
    icon: MonitorCog,
  },
];

export const events: EventItem[] = [
  {
    title: "Jornada da Tecnologia",
    context: "Evento e palestra tecnica",
    description:
      "Participacao em uma jornada de dois dias sobre tecnologia, mercado de software e desenvolvimento profissional.",
    highlights: [
      "8 horas totais de conteudo",
      "Palestrantes ligados a Oxigenweb, empresa de software de Presidente Prudente",
      "Participacao de engenheiro de software com atuacao internacional para os EUA",
    ],
    icon: CalendarDays,
  },
  {
    title: "Contato com mercado real",
    context: "Aprendizado profissional",
    description:
      "Troca de experiencias sobre rotina de desenvolvimento, postura profissional, oportunidades e caminhos para evoluir como dev.",
    highlights: [
      "Visao sobre empresas de software",
      "Discussao sobre carreira internacional",
      "Insights para evolucao como desenvolvedor full-stack",
    ],
    icon: Users,
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:thiagopiovans@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/thiaguin20", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thiago-piovan-578582313/",
    icon: Linkedin,
  },
];

export const heroBadges = [
  { label: "Full Stack", icon: MonitorCog },
  { label: "Node.js", icon: TerminalSquare },
  { label: "JavaScript", icon: FileCode2 },
  { label: "ASP.NET MVC", icon: Server },
  { label: "GitHub", icon: Github },
  { label: "Deploy", icon: Rocket },
];

export const eventMeta = [
  { label: "Evento", value: "Jornada da Tecnologia", icon: Building2 },
  { label: "Carga", value: "8 horas", icon: Clock3 },
  { label: "Formato", value: "2 dias", icon: CalendarDays },
];
