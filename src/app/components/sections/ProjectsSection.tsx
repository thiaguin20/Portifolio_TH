import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BackButton } from '../BackButton'
import { MindMap, TreeNode } from '../MindMap'

const PROJECTS_TREE: TreeNode = {
  id: 'root',
  label: 'PROJETOS',
  color: '#06b6d4',
  children: [
    {
      id: 'auto',
      label: 'Auto IA Videos',
      color: '#06b6d4',
      children: [
        { id: 'auto-python', label: 'Python', color: '#67e8f9' },
        { id: 'auto-ffmpeg', label: 'FFmpeg', color: '#67e8f9' },
        { id: 'auto-video', label: 'Video', color: '#67e8f9' },
      ],
    },
    {
      id: 'estoque',
      label: 'Estoque Web',
      color: '#84cc16',
      children: [
        { id: 'estoque-mvc', label: 'ASP.NET\nMVC', color: '#bef264' },
        { id: 'estoque-ef', label: 'EF6', color: '#bef264' },
        { id: 'estoque-db', label: 'PostgreSQL', color: '#bef264' },
      ],
    },
    {
      id: 'mobile',
      label: 'Cliente Mobile',
      color: '#06b6d4',
      children: [
        { id: 'mobile-flutter', label: 'Flutter', color: '#38bdf8' },
        { id: 'mobile-dart', label: 'Dart', color: '#38bdf8' },
        { id: 'mobile-sqlite', label: 'SQLite', color: '#38bdf8' },
      ],
    },
    {
      id: 'docitha',
      label: 'Docitha',
      color: '#84cc16',
      children: [
        { id: 'docitha-react', label: 'React', color: '#a3e635' },
        { id: 'docitha-admin', label: 'Admin', color: '#a3e635' },
        { id: 'docitha-crud', label: 'CRUD', color: '#a3e635' },
      ],
    },
    {
      id: 'portfolio-ias',
      label: 'Portfolio IAS',
      color: '#06b6d4',
      children: [
        { id: 'portfolio-ias-html', label: 'HTML', color: '#67e8f9' },
        { id: 'portfolio-ias-js', label: 'JavaScript', color: '#67e8f9' },
        { id: 'portfolio-ias-live', label: 'Live FX', color: '#67e8f9' },
      ],
    },
  ],
}

const PROJECT_CARDS = [
  {
    id: 'auto',
    title: 'Auto IA Videos',
    desc: 'Automacoes em Python para preparar videos, overlays, fades, transparencia e composicoes usando FFmpeg.',
    tags: ['Python', 'FFmpeg', 'ffprobe', 'Automacao'],
    color: '#06b6d4',
    video: '/projects/auto-ia-videos.mp4',
    github: 'https://github.com/thiaguin20/auto-ia-videos',
    portrait: false,
  },
  {
    id: 'estoque',
    title: 'Estoque Web',
    desc: 'Sistema ASP.NET MVC para marcenaria com login, cadastro de produtos, movimentacoes e filtros de estoque.',
    tags: ['ASP.NET MVC', 'C#', 'Entity Framework', 'PostgreSQL'],
    color: '#84cc16',
    video: '/projects/estoque-web.mp4',
    github: 'https://github.com/thiaguin20/Estoque_Web',
    portrait: false,
  },
  {
    id: 'mobile',
    title: 'Cliente Mobile',
    desc: 'Mini CRM mobile offline para clientes e servicos, com dashboard, filtros, metricas e SQLite local.',
    tags: ['Flutter', 'Dart', 'SQLite', 'sqflite'],
    color: '#06b6d4',
    video: '/projects/cliente-mobile.mp4',
    github: 'https://github.com/thiaguin20/cliente-mobile',
    portrait: true,
  },
  {
    id: 'docitha',
    title: 'Docitha Cardapio Digital',
    desc: 'Cardapio digital profissional usado por loja real, com painel admin, login e CRUD completo do cardapio.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'JWT'],
    color: '#84cc16',
    video: '/projects/docitha.mp4',
    github: 'https://github.com/thiaguin20/docitha',
    portrait: false,
  },
  {
    id: 'portfolio-ias',
    title: 'Portfolio IAS',
    desc: 'Vitrine de videos e efeitos com IA para criadores, TikTokers e lives, com categorias, modal de preview, curtidas locais, idiomas e CTA para WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'IA Visual'],
    color: '#06b6d4',
    video: '/projects/portfolio-ias.mp4',
    github: 'https://github.com/thiaguin20/Portfolio_IAS',
    portrait: false,
  },
]

export function ProjectsSection({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<'map' | 'cards'>('cards')

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 20 }}>
      <BackButton onBack={onBack} />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 22,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          zIndex: 2,
        }}
      >
        <span style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          color: '#06b6d4',
          textShadow: '0 0 12px rgba(6,182,212,0.6)',
        }}>
          PROJETOS
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['cards', 'map'] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.48rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: view === v ? '#06b6d4' : '#64748b',
                background: view === v ? 'rgba(6,182,212,0.12)' : 'transparent',
                border: `1px solid ${view === v ? 'rgba(6,182,212,0.5)' : 'rgba(100,116,139,0.3)'}`,
                borderRadius: 3,
                padding: '3px 8px',
                cursor: 'pointer',
                transition: 'all 0.12s',
              }}
            >
              {v === 'map' ? 'MAPA' : 'CARDS'}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === 'map' ? (
          <motion.div
            key="map"
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            style={{ padding: '60px 20px 20px' }}
          >
            <MindMap tree={PROJECTS_TREE} width={960} height={560} />
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            className="w-full overflow-y-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            style={{ padding: '72px 32px 32px', maxHeight: '100vh' }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
              maxWidth: 1120,
              margin: '0 auto',
            }}>
              {PROJECT_CARDS.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.24 }}
                  style={{
                    borderRadius: 8,
                    border: `1px solid ${card.color}35`,
                    background: `linear-gradient(145deg, ${card.color}10, rgba(5,18,36,0.9))`,
                    overflow: 'hidden',
                    backdropFilter: 'blur(8px)',
                    boxShadow: `0 0 20px ${card.color}18`,
                    transition: 'transform 0.12s ease-out, box-shadow 0.12s ease-out, border-color 0.12s ease-out',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: `0 0 28px ${card.color}30` }}
                >
                  <div style={{
                    width: '100%',
                    height: card.portrait ? 210 : 136,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `radial-gradient(circle at center, ${card.color}18, rgba(2,8,18,0.95))`,
                    borderBottom: `1px solid ${card.color}25`,
                    overflow: 'hidden',
                  }}>
                    <video
                      src={card.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: card.portrait ? 'contain' : 'cover',
                        opacity: 0.72,
                      }}
                    />
                  </div>

                  <div style={{ padding: '14px 16px' }}>
                    <div style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: card.color,
                      marginBottom: 6,
                      letterSpacing: '0.08em',
                    }}>
                      {card.title}
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.72rem',
                      color: '#94a3b8',
                      lineHeight: 1.5,
                      marginBottom: 10,
                    }}>
                      {card.desc}
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {card.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'Orbitron, monospace',
                          fontSize: '0.48rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          color: card.color,
                          border: `1px solid ${card.color}40`,
                          borderRadius: 2,
                          padding: '2px 6px',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={card.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        marginTop: 12,
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '0.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        color: '#e2e8f0',
                        textDecoration: 'none',
                        border: `1px solid ${card.color}55`,
                        borderRadius: 3,
                        padding: '6px 9px',
                        background: `${card.color}12`,
                      }}
                    >
                      VER GITHUB
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
