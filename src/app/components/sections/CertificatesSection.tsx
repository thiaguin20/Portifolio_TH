import { motion } from 'motion/react'
import { Award, BookOpen, Code2, ExternalLink, Palette, Trophy } from 'lucide-react'
import { BackButton } from '../BackButton'

type CertificateCard = {
  title: string
  issuer: string
  description: string
  status: string
  href?: string
  color: string
  Icon: typeof Award
}

const CERTIFICATES: CertificateCard[] = [
  {
    title: 'JavaScript - 40 horas',
    issuer: 'Curso em Video',
    description: 'Base de JavaScript, logica, DOM e fundamentos para interfaces web.',
    status: 'Concluido',
    href: '/certificados/javascript-40h-curso-em-video.pdf',
    color: '#06b6d4',
    Icon: Code2,
  },
  {
    title: 'Figma',
    issuer: 'Certificado',
    description: 'Fundamentos de design de interfaces, prototipos e organizacao visual.',
    status: 'Concluido',
    href: '/certificados/figma-certificado.pdf',
    color: '#84cc16',
    Icon: Palette,
  },
  {
    title: 'Alura',
    issuer: 'Certificado',
    description: 'Trilha de estudos com foco em desenvolvimento e pratica profissional.',
    status: 'Concluido',
    href: '/certificados/alura-certificado.pdf',
    color: '#06b6d4',
    Icon: Award,
  },
  {
    title: 'Hackathon Fatec',
    issuer: 'Fatec',
    description: 'Participacao em desafio pratico com entrega de solucao em equipe.',
    status: 'Concluido',
    href: '/certificados/hackathon-fatec.pdf',
    color: '#84cc16',
    Icon: Trophy,
  },
  {
    title: 'Flutter + Dart - 60 horas',
    issuer: 'Udemy',
    description: 'Curso em andamento para aprofundar desenvolvimento mobile com Flutter e Dart.',
    status: 'Em andamento',
    color: '#facc15',
    Icon: BookOpen,
  },
]

export function CertificatesSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ zIndex: 20 }}>
      <BackButton onBack={onBack} />

      <div
        style={{
          minHeight: '100%',
          padding: '78px clamp(18px, 4vw, 56px) 42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{ width: 'min(1120px, 100%)' }}
        >
          <header style={{ textAlign: 'center', marginBottom: 26 }}>
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.24em',
                color: '#06b6d4',
                textShadow: '0 0 14px rgba(6,182,212,0.6)',
                marginBottom: 12,
              }}
            >
              CERTIFICADOS
            </div>
            <div
              style={{
                color: '#94a3b8',
                fontSize: '0.82rem',
                lineHeight: 1.5,
              }}
            >
              Cursos, estudos e participacoes que reforcam minha base tecnica.
            </div>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 18,
            }}
          >
            {CERTIFICATES.map((cert, index) => {
              const Icon = cert.Icon
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                  whileHover={{ y: -3, scale: 1.006 }}
                  style={{
                    minHeight: 210,
                    height: '100%',
                    borderRadius: 8,
                    border: `1px solid ${cert.color}45`,
                    background: `linear-gradient(145deg, ${cert.color}12, rgba(5,18,36,0.92))`,
                    boxShadow: `0 0 28px ${cert.color}18`,
                    padding: '18px',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `linear-gradient(${cert.color}07 1px, transparent 1px), linear-gradient(90deg, ${cert.color}07 1px, transparent 1px)`,
                      backgroundSize: '18px 18px',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 8,
                        border: `1px solid ${cert.color}55`,
                        background: `${cert.color}12`,
                        color: cert.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 18px ${cert.color}22`,
                        marginBottom: 16,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: cert.color,
                        marginBottom: 6,
                      }}
                    >
                      {cert.title}
                    </div>
                    <div style={{ color: '#e2e8f0', fontSize: '0.78rem', marginBottom: 10 }}>
                      {cert.issuer}
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.76rem', lineHeight: 1.55, margin: 0 }}>
                      {cert.description}
                    </p>

                    <div
                      style={{
                        marginTop: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Orbitron, monospace',
                          fontSize: '0.52rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          color: cert.color,
                          border: `1px solid ${cert.color}40`,
                          borderRadius: 3,
                          padding: '4px 7px',
                        }}
                      >
                        {cert.status}
                      </span>
                      {cert.href && <ExternalLink size={16} color={cert.color} />}
                    </div>
                  </div>
                </motion.div>
              )

              return cert.href ? (
                <a key={cert.title} href={cert.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  {content}
                </a>
              ) : (
                <div key={cert.title}>{content}</div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
