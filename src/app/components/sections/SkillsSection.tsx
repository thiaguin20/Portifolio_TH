import { motion } from 'motion/react'
import { BackButton } from '../BackButton'

type SkillBranch = {
  id: string
  title: string
  label: string
  description: string
  color: string
  glow: string
  skills: string[]
}

const SKILL_BRANCHES: SkillBranch[] = [
  {
    id: 'mobile',
    title: 'mobile',
    label: 'Mobile',
    description: 'Aplicativos, telas responsivas e recursos para uso offline.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.28)',
    skills: ['Flutter', 'Dart', 'Firebase', 'Android', 'React Native', 'Push notifications', 'SQLite'],
  },
  {
    id: 'web',
    title: 'web',
    label: 'Web',
    description: 'Sites, paineis administrativos e sistemas conectados por API.',
    color: '#a3e635',
    glow: 'rgba(163,230,53,0.26)',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'automation',
    title: 'automacao_ia',
    label: 'Automacao e IA',
    description: 'Rotinas automatizadas, IA aplicada e processamento de arquivos.',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.24)',
    skills: ['Python', 'OpenAI API', 'FFmpeg', 'Automacoes', 'WhatsApp flows', 'CSV pipelines', 'Prompt engineering'],
  },
  {
    id: 'data',
    title: 'dados_backend',
    label: 'Dados e Back-end',
    description: 'Bancos de dados, integracoes e estrutura para produtos reais.',
    color: '#facc15',
    glow: 'rgba(250,204,21,0.2)',
    skills: ['PostgreSQL', 'MySQL', 'APIs REST', 'Auth', 'Docker', 'Git', 'Deploy'],
  },
]

function SkillLeaf({ skill, color, index }: { skill: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.26, delay: 0.18 + index * 0.02 }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 10px',
        borderRadius: 4,
        border: `1px solid ${color}45`,
        background: `linear-gradient(135deg, ${color}14, rgba(4,12,24,0.72))`,
        color: '#cbd5e1',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.72rem',
        letterSpacing: '0.02em',
        boxShadow: `0 0 18px ${color}12`,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '999px',
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
      {skill}
    </motion.div>
  )
}

function SkillBranchCard({ branch, index }: { branch: SkillBranch; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.34, delay: 0.08 + index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -3, scale: 1.006, transition: { duration: 0.1, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        minHeight: 186,
        borderRadius: 10,
        border: `1px solid ${branch.color}45`,
        background: `linear-gradient(145deg, ${branch.color}10, rgba(3,10,24,0.9) 58%, rgba(2,6,16,0.96))`,
        boxShadow: `0 0 32px ${branch.glow}, inset 0 0 28px rgba(6,182,212,0.04)`,
        padding: '18px 18px 20px',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${branch.color}08 1px, transparent 1px), linear-gradient(90deg, ${branch.color}08 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        aria-hidden
        animate={{ x: ['-18%', '118%'] }}
        transition={{ duration: 4.2 + index * 0.35, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          width: '28%',
          height: 1,
          background: `linear-gradient(90deg, transparent, ${branch.color}, transparent)`,
          boxShadow: `0 0 14px ${branch.color}`,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 8,
            fontFamily: 'Orbitron, monospace',
            color: branch.color,
            fontSize: 'clamp(0.78rem, 1vw, 0.92rem)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textShadow: `0 0 14px ${branch.glow}`,
            flexWrap: 'wrap',
          }}
        >
          <span>{branch.label}</span>
        </div>

        <p
          style={{
            margin: '0 0 14px',
            color: '#94a3b8',
            fontSize: '0.76rem',
            lineHeight: 1.5,
            maxWidth: 420,
          }}
        >
          {branch.description}
        </p>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            paddingLeft: 18,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 4,
              top: 2,
              bottom: 2,
              width: 1,
              background: `linear-gradient(${branch.color}55, transparent)`,
            }}
          />
          {branch.skills.map((skill, skillIndex) => (
            <SkillLeaf key={skill} skill={skill} color={branch.color} index={skillIndex} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ zIndex: 20 }}>
      <BackButton onBack={onBack} />

      <div
        style={{
          minHeight: '100%',
          padding: '72px clamp(18px, 4vw, 56px) 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          style={{
            width: 'min(1120px, 100%)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-30px -20px',
              borderRadius: 28,
              background: 'radial-gradient(circle at 50% 20%, rgba(6,182,212,0.16), transparent 42%), radial-gradient(circle at 12% 72%, rgba(163,230,53,0.12), transparent 34%)',
              filter: 'blur(4px)',
              pointerEvents: 'none',
            }}
          />

          <header style={{ position: 'relative', textAlign: 'center', marginBottom: 30 }}>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
              TECNOLOGIAS QUE EU USO
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 22px',
                borderRadius: 999,
                border: '1px solid rgba(6,182,212,0.42)',
                background: 'rgba(3,10,24,0.72)',
                boxShadow: '0 0 34px rgba(6,182,212,0.18)',
                fontFamily: 'Orbitron, monospace',
                color: '#e2e8f0',
                fontSize: 'clamp(1.05rem, 2.2vw, 1.7rem)',
                fontWeight: 800,
                letterSpacing: '0.08em',
              }}
            >
              <span style={{ color: '#06b6d4' }}>MINHAS SKILLS</span>
            </motion.div>
          </header>

          <div
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 18,
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '50%',
                top: -18,
                width: 1,
                height: 18,
                background: 'linear-gradient(rgba(6,182,212,0.7), rgba(6,182,212,0.12))',
                boxShadow: '0 0 14px rgba(6,182,212,0.7)',
              }}
            />
            {SKILL_BRANCHES.map((branch, index) => (
              <SkillBranchCard key={branch.id} branch={branch} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
