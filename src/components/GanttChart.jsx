import { useMemo } from 'react'

const ROW_H = 32
const HEADER_H = 50
const DAY_W = 4
const BAR_H = 18
const BAR_Y_OFFSET = (ROW_H - BAR_H) / 2
const DIAMOND_SIZE = 8

const PROJECT_START = new Date('2026-03-01')
const PROJECT_END = new Date('2026-12-01')

const MONTHS = ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov']

function daysSince(date) {
  return Math.round((new Date(date) - PROJECT_START) / 86400000)
}

function x(date) {
  return daysSince(date) * DAY_W
}

export default function GanttChart({
  tasks, allTasks, blocks, milestoneColor,
  hoveredTask, onMouseEnter, onMouseMove, onMouseLeave,
}) {
  const totalDays = Math.round((PROJECT_END - PROJECT_START) / 86400000)
  const svgW = totalDays * DAY_W
  const svgH = HEADER_H + tasks.length * ROW_H

  const blockMap = useMemo(() => Object.fromEntries(blocks.map(b => [b.id, b])), [blocks])
  const taskIndexMap = useMemo(() => Object.fromEntries(tasks.map((t, i) => [t.id, i])), [tasks])
  const allTaskMap = useMemo(() => Object.fromEntries(allTasks.map(t => [t.id, t])), [allTasks])

  // Build dependency arrows
  const arrows = useMemo(() => {
    const result = []
    tasks.forEach((task, tIdx) => {
      task.deps.forEach(depId => {
        const sIdx = taskIndexMap[depId]
        if (sIdx === undefined) return
        const source = tasks[sIdx]
        if (!source) return

        const x1 = x(source.end) + DAY_W
        const y1 = HEADER_H + sIdx * ROW_H + ROW_H / 2
        const x2 = x(task.start)
        const y2 = HEADER_H + tIdx * ROW_H + ROW_H / 2

        const midX = Math.max(x1 + 8, (x1 + x2) / 2)

        result.push({
          key: `${depId}->${task.id}`,
          sourceId: depId,
          targetId: task.id,
          path: `M${x1},${y1} C${midX},${y1} ${midX},${y2} ${x2},${y2}`,
        })
      })
    })
    return result
  }, [tasks, taskIndexMap])

  // Month grid lines
  const monthLines = useMemo(() => {
    const lines = []
    for (let m = 2; m <= 10; m++) { // Mar(2) to Nov(10)
      const d = new Date(2026, m, 1)
      lines.push({ x: x(d.toISOString().slice(0, 10)), month: MONTHS[m - 2] || '' })
    }
    return lines
  }, [])

  // Today line
  const today = new Date().toISOString().slice(0, 10)
  const todayX = x(today)
  const showToday = todayX >= 0 && todayX <= svgW

  return (
    <svg width={svgW} height={svgH} style={{ display: 'block', minWidth: svgW }}>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5"
          markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
        </marker>
        <marker id="arrow-hl" viewBox="0 0 10 10" refX="10" refY="5"
          markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
        </marker>
      </defs>

      {/* Header background */}
      <rect x={0} y={0} width={svgW} height={HEADER_H} fill="#0f172a" />

      {/* Month grid */}
      {monthLines.map((ml, i) => (
        <g key={i}>
          <line x1={ml.x} y1={0} x2={ml.x} y2={svgH} stroke="#1e293b" strokeWidth={1} />
          <text x={ml.x + 6} y={16} fill="#64748b" fontSize={11} fontWeight={600}>{ml.month}</text>
        </g>
      ))}

      {/* Week ticks */}
      {Array.from({ length: Math.ceil(totalDays / 7) }, (_, i) => {
        const tickX = i * 7 * DAY_W
        return <line key={i} x1={tickX} y1={HEADER_H - 6} x2={tickX} y2={HEADER_H} stroke="#334155" strokeWidth={0.5} />
      })}

      {/* Header bottom border */}
      <line x1={0} y1={HEADER_H} x2={svgW} y2={HEADER_H} stroke="#334155" strokeWidth={1} />

      {/* Row backgrounds */}
      {tasks.map((t, i) => (
        <rect
          key={`bg-${t.id}`}
          x={0} y={HEADER_H + i * ROW_H}
          width={svgW} height={ROW_H}
          fill={i % 2 === 0 ? '#1e293b' : '#172033'}
          opacity={hoveredTask === t.id ? 0.5 : 1}
        />
      ))}

      {/* Dependency arrows (behind bars) */}
      {arrows.map(a => {
        const isHl = hoveredTask && (a.sourceId === hoveredTask || a.targetId === hoveredTask)
        return (
          <path
            key={a.key}
            d={a.path}
            fill="none"
            stroke={isHl ? '#f59e0b' : '#475569'}
            strokeWidth={isHl ? 1.5 : 0.8}
            strokeOpacity={hoveredTask ? (isHl ? 1 : 0.15) : 0.4}
            markerEnd={isHl ? 'url(#arrow-hl)' : 'url(#arrow)'}
            style={{ transition: 'all 0.15s' }}
          />
        )
      })}

      {/* Task bars */}
      {tasks.map((t, i) => {
        const bx = x(t.start)
        const by = HEADER_H + i * ROW_H + BAR_Y_OFFSET
        const bw = Math.max((daysSince(t.end) - daysSince(t.start) + 1) * DAY_W, 4)
        const color = t.milestone ? milestoneColor : (blockMap[t.block]?.color || '#666')
        const isHovered = hoveredTask === t.id
        const isDimmed = hoveredTask && !isHovered

        if (t.milestone) {
          const cx = bx
          const cy = HEADER_H + i * ROW_H + ROW_H / 2
          return (
            <g key={t.id}
              onMouseEnter={(e) => onMouseEnter(t, e)}
              onMouseMove={(e) => onMouseMove(t, e)}
              onMouseLeave={onMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              <polygon
                points={`${cx},${cy - DIAMOND_SIZE} ${cx + DIAMOND_SIZE},${cy} ${cx},${cy + DIAMOND_SIZE} ${cx - DIAMOND_SIZE},${cy}`}
                fill={color}
                stroke={isHovered ? '#fff' : 'none'}
                strokeWidth={isHovered ? 2 : 0}
                opacity={isDimmed ? 0.25 : 1}
                style={{ transition: 'all 0.15s' }}
              />
            </g>
          )
        }

        return (
          <g key={t.id}
            onMouseEnter={(e) => onMouseEnter(t, e)}
            onMouseMove={(e) => onMouseMove(t, e)}
            onMouseLeave={onMouseLeave}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x={bx} y={by}
              width={bw} height={BAR_H}
              rx={4} ry={4}
              fill={color}
              stroke={isHovered ? '#fff' : 'none'}
              strokeWidth={isHovered ? 2 : 0}
              opacity={isDimmed ? 0.25 : 1}
              style={{ transition: 'all 0.15s' }}
            />
            {bw > 40 && (
              <text
                x={bx + 5} y={by + BAR_H / 2 + 1}
                fill="#0f172a"
                fontSize={9}
                fontWeight={600}
                dominantBaseline="middle"
                opacity={isDimmed ? 0.25 : 1}
              >
                {t.id}
              </text>
            )}
          </g>
        )
      })}

      {/* Today line */}
      {showToday && (
        <g>
          <line x1={todayX} y1={HEADER_H} x2={todayX} y2={svgH} className="today-line" />
          <text x={todayX + 4} y={HEADER_H + 14} className="today-label">HOY</text>
        </g>
      )}
    </svg>
  )
}
