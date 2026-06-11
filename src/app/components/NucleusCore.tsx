import { motion } from 'motion/react'

export function NucleusCore() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}
    >
      {/* Outermost pulse ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200, height: 200,
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(6,182,212,0.12)',
        }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* Second ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 150, height: 150,
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(6,182,212,0.22)',
        }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.05, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
      />
      {/* Third ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 110, height: 110,
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(6,182,212,0.35)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
      />

      {/* Core orb */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 82,
          height: 82,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0.08) 60%, transparent 100%)',
          border: '1.5px solid rgba(6,182,212,0.7)',
          boxShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(6,182,212,0.2), inset 0 0 25px rgba(6,182,212,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#06b6d4',
          textShadow: '0 0 20px rgba(6,182,212,0.9), 0 0 40px rgba(6,182,212,0.5)',
          letterSpacing: '0.05em',
        }}>
          TH
        </span>
      </motion.div>
    </div>
  )
}
