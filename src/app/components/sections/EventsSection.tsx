import { motion } from 'motion/react'
import { BackButton } from '../BackButton'

const EVENTS = [
  {
    year: '2021',
    title: 'Primeiro projeto',
    desc: 'Desenvolvimento do primeiro app mobile com React Native.',
    color: '#84cc16',
    side: 'left',
  },
  {
    year: '2022',
    title: 'Certificação Flutter',
    desc: 'Conclusão da formação mobile com Flutter e Dart.',
    color: '#06b6d4',
    side: 'right',
  },
  {
    year: '2023',
    title: 'Primeiro cliente',
    desc: 'Entrega do primeiro app publicado na Play Store para cliente real.',
    color: '#84cc16',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Full-Stack API',
    desc: 'Lançamento de sistema de gestão completo com Node.js e banco de dados.',
    color: '#06b6d4',
    side: 'right',
  },
  {
    year: '2025',
    title: 'IA & Automação',
    desc: 'Integração de agentes de IA em pipelines de automação com Python.',
    color: '#84cc16',
    side: 'left',
  },
]

export function EventsSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ zIndex: 20 }}>
      <BackButton onBack={onBack} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Orbitron, monospace',
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          color: '#84cc16',
          textShadow: '0 0 12px rgba(132,204,22,0.6)',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        LINHA DO TEMPO ESPACIAL
      </motion.div>

      <div style={{ padding: '80px 20px 60px', maxWidth: 800, margin: '0 auto' }}>
        {/* Vertical central line */}
        <div style={{ position: 'relative' }}>
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              width: 1,
              background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.3) 10%, rgba(6,182,212,0.3) 90%, transparent)',
              height: '100%',
              zIndex: 0,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {EVENTS.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: event.side === 'left' ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: event.side === 'left' ? 'flex-start' : 'flex-end',
                marginBottom: 48,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Event card */}
              <div style={{
                width: '42%',
                order: event.side === 'left' ? 0 : 2,
                borderRadius: 6,
                border: `1px solid ${event.color}40`,
                background: `linear-gradient(145deg, ${event.color}0D, rgba(5,18,36,0.88))`,
                padding: '14px 18px',
                backdropFilter: 'blur(8px)',
                boxShadow: `0 0 24px ${event.color}18`,
              }}>
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: event.color,
                  textShadow: `0 0 16px ${event.color}`,
                  marginBottom: 4,
                }}>
                  {event.year}
                </div>
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}>
                  {event.title}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                }}>
                  {event.desc}
                </div>
              </div>

              {/* Central node */}
              <div style={{
                order: 1,
                flex: '0 0 16%',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 8px ${event.color}50`,
                      `0 0 20px ${event.color}90`,
                      `0 0 8px ${event.color}50`,
                    ],
                  }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                  style={{
                    width: 14, height: 14,
                    borderRadius: '50%',
                    background: event.color,
                    border: `2px solid ${event.color}`,
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Spacer for opposite side */}
              <div style={{ width: '42%', order: event.side === 'left' ? 2 : 0 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
