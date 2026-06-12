import { motion } from 'motion/react'

const PLANETS = [
  {
    name: 'aqua',
    size: 118,
    left: '8%',
    top: '64%',
    colorA: 'rgba(6,182,212,0.42)',
    colorB: 'rgba(5,18,36,0.08)',
    ring: 'rgba(6,182,212,0.18)',
    duration: 18,
  },
  {
    name: 'lime',
    size: 74,
    left: '84%',
    top: '18%',
    colorA: 'rgba(132,204,22,0.38)',
    colorB: 'rgba(5,18,36,0.05)',
    ring: 'rgba(132,204,22,0.16)',
    duration: 22,
  },
  {
    name: 'blue',
    size: 54,
    left: '78%',
    top: '76%',
    colorA: 'rgba(59,130,246,0.34)',
    colorB: 'rgba(5,18,36,0.04)',
    ring: 'rgba(59,130,246,0.14)',
    duration: 20,
  },
]

export function SpaceScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 78%, rgba(6,182,212,0.08), transparent 20%), radial-gradient(circle at 82% 18%, rgba(132,204,22,0.07), transparent 18%), radial-gradient(circle at 78% 78%, rgba(59,130,246,0.07), transparent 16%)',
        }}
      />

      {PLANETS.map(planet => (
        <motion.div
          key={planet.name}
          animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
          transition={{ duration: planet.duration, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: planet.left,
            top: planet.top,
            width: planet.size,
            height: planet.size,
            borderRadius: '50%',
            opacity: 0.66,
            background: `radial-gradient(circle at 34% 30%, rgba(226,232,240,0.38), ${planet.colorA} 28%, ${planet.colorB} 72%)`,
            boxShadow: `0 0 ${planet.size * 0.22}px ${planet.colorA}, inset -14px -14px 28px rgba(0,0,0,0.34)`,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: planet.size * 1.62,
              height: planet.size * 0.42,
              border: `1px solid ${planet.ring}`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%) rotate(-14deg)',
              opacity: 0.75,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: '18%',
              borderRadius: '50%',
              border: '1px solid rgba(226,232,240,0.06)',
            }}
          />
        </motion.div>
      ))}

    </div>
  )
}
