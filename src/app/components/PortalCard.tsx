import { useState } from 'react'
import { motion } from 'motion/react'
import { SectionId } from '../App'

export interface PortalDef {
  id: SectionId
  label: string
  desc: string
  cx: number
  cy: number
  tiltX: number
  tiltY: number
  delay: number
  color: string
  image?: string | null
  large?: boolean
}

interface PortalCardProps {
  portal: PortalDef
  onNavigate: (id: SectionId) => void
}

const CORNER_POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

export function PortalCard({ portal, onNavigate }: PortalCardProps) {
  const [hovered, setHovered] = useState(false)

  const w = portal.large ? 210 : 172
  const h = portal.large ? 138 : 112

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${portal.cx}%`,
        top: `${portal.cy}%`,
        width: w,
        height: h,
        marginLeft: -w / 2,
        marginTop: -h / 2,
        zIndex: hovered ? 20 : 15,
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: portal.delay + 0.18, ease: 'easeOut' }}
    >
      <motion.div
        animate={hovered ? {} : { y: [0, -9, 0] }}
        transition={{ duration: 4.5 + portal.delay * 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={() => onNavigate(portal.id)}
          animate={{
            rotateX: hovered ? 0 : portal.tiltX,
            rotateY: hovered ? 0 : portal.tiltY,
            scale: hovered ? 1.06 : 1,
          }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          style={{
            width: w,
            height: h,
            cursor: 'pointer',
            perspective: 900,
            transformStyle: 'preserve-3d',
            borderRadius: 6,
            overflow: 'hidden',
            position: 'relative',
            background: hovered
              ? `radial-gradient(ellipse at 30% 30%, ${portal.color}25, rgba(5,18,36,0.92))`
              : 'linear-gradient(145deg, rgba(6,182,212,0.07) 0%, rgba(5,18,36,0.88) 100%)',
            border: `1px solid ${portal.color}${hovered ? 'AA' : '45'}`,
            boxShadow: hovered
              ? `0 0 35px ${portal.color}55, 0 0 70px ${portal.color}22, inset 0 0 20px ${portal.color}12`
              : `0 0 12px ${portal.color}18, 0 4px 20px rgba(0,0,0,0.4)`,
            backdropFilter: 'blur(6px)',
            transition: 'background 0.12s, border-color 0.12s, box-shadow 0.12s',
          }}
        >
          {portal.image && (
            <img
              src={portal.image}
              alt={portal.label}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: hovered ? 0.45 : 0.2,
                transition: 'opacity 0.12s',
              }}
            />
          )}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(${portal.color}08 1px, transparent 1px),
                linear-gradient(90deg, ${portal.color}08 1px, transparent 1px)
              `,
              backgroundSize: '18px 18px',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '8px 10px 6px',
              background: 'linear-gradient(to top, rgba(2,11,24,0.9) 60%, transparent)',
            }}
          >
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: portal.color,
                textShadow: `0 0 12px ${portal.color}`,
              }}
            >
              {portal.label}
            </div>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.58rem',
                color: 'rgba(226,232,240,0.65)',
                marginTop: 2,
              }}
            >
              {portal.desc}
            </motion.div>
          </div>

          {CORNER_POSITIONS.map(corner => (
            <div
              key={corner}
              style={{
                position: 'absolute',
                width: 10,
                height: 10,
                ...(corner.includes('top') ? { top: 0 } : { bottom: 0 }),
                ...(corner.includes('left') ? { left: 0 } : { right: 0 }),
                borderTop: corner.includes('top') ? `1.5px solid ${portal.color}${hovered ? 'CC' : '70'}` : 'none',
                borderBottom: corner.includes('bottom') ? `1.5px solid ${portal.color}${hovered ? 'CC' : '70'}` : 'none',
                borderLeft: corner.includes('left') ? `1.5px solid ${portal.color}${hovered ? 'CC' : '70'}` : 'none',
                borderRight: corner.includes('right') ? `1.5px solid ${portal.color}${hovered ? 'CC' : '70'}` : 'none',
                transition: 'border-color 0.12s',
              }}
            />
          ))}

          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 8,
              right: 10,
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.45rem',
              color: portal.color,
              letterSpacing: '0.1em',
            }}
          >
            ABRIR
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
