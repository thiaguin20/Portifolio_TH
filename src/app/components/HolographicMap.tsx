import { motion } from 'motion/react'
import { OrbitalLines } from './OrbitalLines'
import { PortalCard, PortalDef } from './PortalCard'
import { NucleusCore } from './NucleusCore'
import { SpaceScene } from './SpaceScene'
import { SectionId } from '../App'

const PORTALS: PortalDef[] = [
  {
    id: 'projects',
    label: 'PROJETOS',
    desc: 'Apps e sistemas',
    cx: 36,
    cy: 50,
    tiltX: 12,
    tiltY: -10,
    delay: 0,
    color: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1558655146-6c222b05fce4?w=300&h=200&fit=crop&auto=format',
    large: true,
  },
  {
    id: 'skills',
    label: 'SKILLS',
    desc: 'Stack tecnico',
    cx: 50,
    cy: 25,
    tiltX: 10,
    tiltY: 10,
    delay: 0.25,
    color: '#84cc16',
    image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 'certificates',
    label: 'CERTIFICADOS',
    desc: 'Cursos e conquistas',
    cx: 64,
    cy: 50,
    tiltX: -10,
    tiltY: 12,
    delay: 0.5,
    color: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 'contact',
    label: 'CONTATO',
    desc: 'Vamos conversar',
    cx: 50,
    cy: 75,
    tiltX: 8,
    tiltY: 0,
    delay: 0.75,
    color: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop&auto=format',
  },
]

const ACTION_LINKS = [
  { label: 'Curriculo', href: '/curriculo-thiago-piovan-costa.pdf', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-piovan-578582313',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thiaguin20',
    external: true,
  },
]

export function HolographicMap({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
  return (
    <div className="absolute inset-0" style={{ zIndex: 1 }}>
      <SpaceScene />

      {/* Orbital SVG lines */}
      <OrbitalLines portals={PORTALS} />

      {/* Deep space grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          zIndex: 2,
        }}
      />

      {/* Hero text block */}
      <motion.div
        className="absolute"
        style={{ left: '3.5%', top: '5%', zIndex: 30 }}
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(1.35rem, 2.35vw, 2.25rem)',
          fontWeight: 700,
          color: '#e2e8f0',
          lineHeight: 1.1,
          letterSpacing: '0.04em',
          textShadow: '0 0 30px rgba(6,182,212,0.3)',
        }}>
          Thiago Henrique Piovan Costa
        </div>

        {/* Action links */}
        <motion.div
          className="flex gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {ACTION_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.55rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: '#06b6d4',
                border: '1px solid rgba(6,182,212,0.35)',
                padding: '5px 10px',
                borderRadius: 2,
                textDecoration: 'none',
                transition: 'all 0.25s',
                backdropFilter: 'blur(4px)',
                background: 'rgba(6,182,212,0.04)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(6,182,212,0.12)'
                el.style.borderColor = 'rgba(6,182,212,0.7)'
                el.style.boxShadow = '0 0 12px rgba(6,182,212,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(6,182,212,0.04)'
                el.style.borderColor = 'rgba(6,182,212,0.35)'
                el.style.boxShadow = 'none'
              }}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile layout */}
      <div className="md:hidden absolute inset-0 overflow-y-auto" style={{ zIndex: 25 }}>
        <div className="flex flex-col items-center gap-6 pt-36 pb-10 px-6">
          {PORTALS.map(portal => (
            <motion.div
              key={portal.id}
              onClick={() => onNavigate(portal.id)}
              className="w-full max-w-sm cursor-pointer"
              style={{
                borderRadius: 8,
                border: `1px solid ${portal.color}55`,
                background: `linear-gradient(145deg, ${portal.color}10, rgba(5,18,36,0.9))`,
                boxShadow: `0 0 20px ${portal.color}20`,
                padding: '20px 24px',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: portal.delay + 0.3 }}
              whileTap={{ scale: 0.97 }}
            >
              {portal.image && (
                <img
                  src={portal.image}
                  alt={portal.label}
                  style={{
                    width: '100%', height: 80, objectFit: 'cover',
                    borderRadius: 4, opacity: 0.4, marginBottom: 12,
                  }}
                />
              )}
              <div style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: portal.color,
                textShadow: `0 0 10px ${portal.color}`,
              }}>
                {portal.label}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                color: '#94a3b8',
                marginTop: 4,
              }}>
                {portal.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Nucleus + floating portals */}
      <div className="hidden md:block">
        <NucleusCore />
        {PORTALS.map(portal => (
          <PortalCard key={portal.id} portal={portal} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  )
}
