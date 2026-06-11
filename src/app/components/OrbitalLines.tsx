import { useEffect, useState } from 'react'

interface PortalDef {
  id: string
  cx: number
  cy: number
  color: string
}

interface OrbitalLinesProps {
  portals: PortalDef[]
}

export function OrbitalLines({ portals }: OrbitalLinesProps) {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })

  useEffect(() => {
    const handler = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const nx = size.w * 0.5
  const ny = size.h * 0.5

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width="100%"
      height="100%"
      style={{ zIndex: 5 }}
    >
      <defs>
        {portals.map(p => (
          <filter key={`glow-${p.id}`} id={`glow-${p.id}`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {portals.map((portal, pi) => {
        const px = size.w * portal.cx / 100
        const py = size.h * portal.cy / 100
        const pathStr = `M ${px} ${py} L ${nx} ${ny}`
        const dotOffsets = [0, 0.33, 0.66]

        return (
          <g key={portal.id}>
            {/* Static line */}
            <line
              x1={px} y1={py}
              x2={nx} y2={ny}
              stroke={portal.color}
              strokeOpacity={0.2}
              strokeWidth={1}
              strokeDasharray="4 8"
            />
            {/* Solid gradient segment near nucleus */}
            <line
              x1={px} y1={py}
              x2={nx} y2={ny}
              stroke={portal.color}
              strokeOpacity={0.08}
              strokeWidth={1.5}
            />
            {/* Animated dots */}
            {dotOffsets.map((offset, i) => (
              <circle
                key={i}
                r={2.5}
                fill={portal.color}
                filter={`url(#glow-${portal.id})`}
                opacity={0.9}
              >
                <animateMotion
                  dur={`${3.5 + pi * 0.3}s`}
                  begin={`${-offset * (3.5 + pi * 0.3)}s`}
                  repeatCount="indefinite"
                  path={pathStr}
                />
              </circle>
            ))}
          </g>
        )
      })}
    </svg>
  )
}
