import { motion } from 'motion/react'

interface BackButtonProps {
  onBack: () => void
  label?: string
}

export function BackButton({ onBack, label = 'MAPA' }: BackButtonProps) {
  return (
    <motion.button
      onClick={onBack}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: 'absolute',
        top: 28,
        left: 28,
        zIndex: 50,
        background: 'rgba(6,182,212,0.06)',
        border: '1px solid rgba(6,182,212,0.4)',
        borderRadius: 4,
        padding: '7px 14px',
        color: '#06b6d4',
        fontFamily: 'Orbitron, monospace',
        fontSize: '0.55rem',
        fontWeight: 700,
        letterSpacing: '0.2em',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(6,182,212,0.15)'
        el.style.boxShadow = '0 0 16px rgba(6,182,212,0.35)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(6,182,212,0.06)'
        el.style.boxShadow = 'none'
      }}
    >
      <span style={{ fontSize: '0.8rem' }}>{'<'}</span> {label}
    </motion.button>
  )
}
