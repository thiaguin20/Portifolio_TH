import { motion } from 'motion/react'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { BackButton } from '../BackButton'

const CHANNELS = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'thiago@email.com',
    Icon: Mail,
    color: '#06b6d4',
    href: 'mailto:thiago@email.com',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/thiago-piovan-578582313',
    Icon: Linkedin,
    color: '#84cc16',
    href: 'https://www.linkedin.com/in/thiago-piovan-578582313',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/thiaguin20',
    Icon: Github,
    color: '#06b6d4',
    href: 'https://github.com/thiaguin20',
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    value: '+55 18 99616-4798',
    Icon: MessageCircle,
    color: '#84cc16',
    href: 'https://wa.me/5518996164798',
  },
]

export function ContactSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 20 }}>
      <BackButton onBack={onBack} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 48, padding: '0 18px' }}
      >
        <div
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            color: '#06b6d4',
            textShadow: '0 0 12px rgba(6,182,212,0.6)',
            marginBottom: 14,
          }}
        >
          CANAL DE COMUNICACAO
        </div>
        <div
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(1.25rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '0.04em',
            textShadow: '0 0 30px rgba(6,182,212,0.25)',
          }}
        >
          Thiago Henrique Piovan Costa
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            color: '#64748b',
            marginTop: 8,
          }}
        >
          Disponivel para projetos e oportunidades
        </div>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          width: '100%',
          maxWidth: 720,
          padding: '0 24px',
        }}
      >
        {CHANNELS.map((ch, i) => {
          const Icon = ch.Icon
          return (
            <motion.a
              key={ch.id}
              href={ch.href}
              target={ch.href.startsWith('http') ? '_blank' : undefined}
              rel={ch.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              style={{
                textDecoration: 'none',
                display: 'block',
                borderRadius: 8,
                border: `1px solid ${ch.color}35`,
                background: `linear-gradient(145deg, ${ch.color}0A, rgba(5,18,36,0.92))`,
                padding: '20px 22px',
                backdropFilter: 'blur(8px)',
                boxShadow: `0 0 20px ${ch.color}15`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = `${ch.color}80`
                el.style.boxShadow = `0 0 40px ${ch.color}35`
                el.style.background = `linear-gradient(145deg, ${ch.color}18, rgba(5,18,36,0.92))`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = `${ch.color}35`
                el.style.boxShadow = `0 0 20px ${ch.color}15`
                el.style.background = `linear-gradient(145deg, ${ch.color}0A, rgba(5,18,36,0.92))`
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(${ch.color}05 1px, transparent 1px), linear-gradient(90deg, ${ch.color}05 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Icon size={18} color={ch.color} strokeWidth={1.8} />
                  <span
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: ch.color,
                      textShadow: `0 0 10px ${ch.color}`,
                    }}
                  >
                    {ch.label}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    wordBreak: 'break-word',
                  }}
                >
                  {ch.value}
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="760" height="340" viewBox="0 0 760 340" style={{ overflow: 'visible' }}>
          <ellipse cx="380" cy="170" rx="280" ry="120" fill="none" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
          <ellipse cx="380" cy="170" rx="360" ry="155" fill="none" stroke="rgba(132,204,22,0.05)" strokeWidth="1" />
          <circle r="4" fill="#06b6d4" opacity="0.9">
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#orbit1" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#84cc16" opacity="0.7">
            <animateMotion dur="12s" repeatCount="indefinite" begin="-4s">
              <mpath href="#orbit2" />
            </animateMotion>
          </circle>
          <path id="orbit1" d="M 660 170 A 280 120 0 1 1 659.999 170.001" fill="none" />
          <path id="orbit2" d="M 740 170 A 360 155 0 1 1 739.999 170.001" fill="none" />
        </svg>
      </div>
    </div>
  )
}
