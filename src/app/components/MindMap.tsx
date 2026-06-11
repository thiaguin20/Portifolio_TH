import { motion } from 'motion/react'

export interface TreeNode {
  id: string
  label: string
  color?: string
  children?: TreeNode[]
}

interface NodePosition {
  id: string
  label: string
  color: string
  x: number
  y: number
  parentId?: string
}

function computeLayout(
  root: TreeNode,
  cx: number,
  cy: number,
  r1 = 165,
  r2 = 290,
  startAngle = -Math.PI / 2,
): NodePosition[] {
  const nodes: NodePosition[] = []
  const rootColor = root.color ?? '#06b6d4'
  nodes.push({ id: root.id, label: root.label, color: rootColor, x: cx, y: cy })

  const children = root.children ?? []
  const n = children.length

  children.forEach((child, i) => {
    const angle = startAngle + (i * 2 * Math.PI) / n
    const childColor = child.color ?? rootColor
    const px = cx + r1 * Math.cos(angle)
    const py = cy + r1 * Math.sin(angle)
    nodes.push({ id: child.id, label: child.label, color: childColor, x: px, y: py, parentId: root.id })

    const grandchildren = child.children ?? []
    const m = grandchildren.length
    const spread = Math.PI * 0.55

    grandchildren.forEach((gc, j) => {
      const gcAngle = angle + (j - (m - 1) / 2) * (spread / Math.max(m - 1, 1))
      const gcColor = gc.color ?? childColor
      const gx = cx + r2 * Math.cos(gcAngle)
      const gy = cy + r2 * Math.sin(gcAngle)
      nodes.push({ id: gc.id, label: gc.label, color: gcColor, x: gx, y: gy, parentId: child.id })
    })
  })

  return nodes
}

interface MindMapProps {
  tree: TreeNode
  width?: number
  height?: number
}

export function MindMap({ tree, width = 900, height = 560 }: MindMapProps) {
  const cx = width / 2
  const cy = height / 2
  const nodes = computeLayout(tree, cx, cy)

  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  const edges = nodes
    .filter(n => n.parentId)
    .map(n => ({ from: nodeMap.get(n.parentId!)!, to: n }))

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
    >
      <defs>
        <filter id="mm-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mm-text-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges */}
      {edges.map((edge, i) => (
        <motion.line
          key={`edge-${i}`}
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          stroke={edge.to.color}
          strokeOpacity={0.3}
          strokeWidth={1.2}
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
        />
      ))}

      {/* Animated traversal dots on edges */}
      {edges.map((edge, i) => {
        const path = `M ${edge.from.x} ${edge.from.y} L ${edge.to.x} ${edge.to.y}`
        return (
          <circle key={`dot-${i}`} r={2} fill={edge.to.color} opacity={0.8}>
            <animateMotion
              dur={`${2 + i * 0.3}s`}
              begin={`${-i * 0.4}s`}
              repeatCount="indefinite"
              path={path}
            />
          </circle>
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const isRoot = !node.parentId
        const isLevel1 = node.parentId === nodes[0].id
        const r = isRoot ? 36 : isLevel1 ? 22 : 16
        const fontSize = isRoot ? 11 : isLevel1 ? 8.5 : 7.5
        const fw = isRoot ? 700 : isLevel1 ? 600 : 400

        return (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Glow halo */}
            <circle
              cx={node.x} cy={node.y}
              r={r + 8}
              fill={node.color}
              opacity={0.06}
            />
            {/* Main circle */}
            <circle
              cx={node.x} cy={node.y}
              r={r}
              fill={`${node.color}12`}
              stroke={node.color}
              strokeOpacity={isRoot ? 0.8 : 0.5}
              strokeWidth={isRoot ? 1.5 : 1}
              filter="url(#mm-glow)"
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y}
              dominantBaseline="middle"
              textAnchor="middle"
              fill={node.color}
              fontFamily="Orbitron, monospace"
              fontSize={fontSize}
              fontWeight={fw}
              filter="url(#mm-text-glow)"
            >
              {node.label}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}
