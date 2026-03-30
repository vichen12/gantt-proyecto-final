import { useState, useRef, useCallback } from 'react'
import { TASKS } from './data/tasks'
import { BLOCKS, MILESTONE_COLOR } from './data/blocks'
import GanttChart from './components/GanttChart'

const BLOCK_IDS = BLOCKS.map(b => b.id)

export default function App() {
  const [activeBlocks, setActiveBlocks] = useState(new Set(BLOCK_IDS))
  const [hoveredTask, setHoveredTask] = useState(null)
  const [tooltip, setTooltip] = useState(null)
  const labelsRef = useRef(null)
  const chartRef = useRef(null)

  const toggle = (id) => {
    setActiveBlocks(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filteredTasks = TASKS.filter(t => activeBlocks.has(t.block))

  const syncScroll = useCallback((source) => {
    if (source === 'chart' && labelsRef.current && chartRef.current) {
      labelsRef.current.scrollTop = chartRef.current.scrollTop
    } else if (source === 'labels' && chartRef.current && labelsRef.current) {
      chartRef.current.scrollTop = labelsRef.current.scrollTop
    }
  }, [])

  const blockMap = Object.fromEntries(BLOCKS.map(b => [b.id, b]))

  const handleMouseEnter = (task, e) => {
    setHoveredTask(task.id)
    updateTooltip(task, e)
  }

  const handleMouseMove = (task, e) => updateTooltip(task, e)

  const handleMouseLeave = () => {
    setHoveredTask(null)
    setTooltip(null)
  }

  const updateTooltip = (task, e) => {
    const days = Math.ceil((new Date(task.end) - new Date(task.start)) / 86400000) + 1
    setTooltip({
      x: e.clientX + 16,
      y: e.clientY - 10,
      task,
      days,
      blockName: blockMap[task.block]?.name || task.block,
    })
  }

  return (
    <div className="app">
      <h1 className="app-title">📊 Cronograma — Proyecto Final UTN FRM 2026</h1>
      <p className="app-subtitle">Diagrama de Gantt interactivo · {filteredTasks.length} tareas visibles</p>

      <div className="filters">
        {BLOCKS.map(b => (
          <button
            key={b.id}
            className={`filter-btn ${activeBlocks.has(b.id) ? 'active' : ''}`}
            style={{ '--block-color': b.color, borderColor: b.color }}
            onClick={() => toggle(b.id)}
          >
            <span className="dot" />
            {b.name}
          </button>
        ))}
      </div>

      <div className="gantt-wrapper" style={{ height: 'calc(100vh - 180px)' }}>
        <div
          className="gantt-labels"
          ref={labelsRef}
          onScroll={() => syncScroll('labels')}
        >
          <div className="gantt-labels-header">TAREA</div>
          {filteredTasks.map(t => (
            <div
              key={t.id}
              className="gantt-label-row"
              style={{
                background: hoveredTask === t.id ? '#334155' : undefined,
                borderLeft: `3px solid ${blockMap[t.block]?.color || '#666'}`,
              }}
              onMouseEnter={(e) => handleMouseEnter(t, e)}
              onMouseMove={(e) => handleMouseMove(t, e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="label-id">{t.id}</span>
              <span className="label-name">{t.name}</span>
            </div>
          ))}
        </div>

        <div
          className="gantt-chart-area"
          ref={chartRef}
          onScroll={() => syncScroll('chart')}
        >
          <GanttChart
            tasks={filteredTasks}
            allTasks={TASKS}
            blocks={BLOCKS}
            milestoneColor={MILESTONE_COLOR}
            hoveredTask={hoveredTask}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {tooltip && (
        <div
          className="tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="tooltip-title" style={{ color: blockMap[tooltip.task.block]?.color }}>
            {tooltip.task.milestone ? '◆ ' : ''}{tooltip.task.id} — {tooltip.task.name}
          </div>
          <div className="tooltip-row">
            <span className="tooltip-label">Bloque:</span>
            <span className="tooltip-value">{tooltip.blockName}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-label">Responsable:</span>
            <span className="tooltip-value">{tooltip.task.responsible}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-label">Inicio:</span>
            <span className="tooltip-value">{formatDate(tooltip.task.start)}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-label">Fin:</span>
            <span className="tooltip-value">{formatDate(tooltip.task.end)}</span>
          </div>
          <div className="tooltip-row">
            <span className="tooltip-label">Duración:</span>
            <span className="tooltip-value">{tooltip.days} día{tooltip.days > 1 ? 's' : ''}</span>
          </div>
          {tooltip.task.deps.length > 0 && (
            <div className="tooltip-row">
              <span className="tooltip-label">Depende de:</span>
              <span className="tooltip-value">{tooltip.task.deps.join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function formatDate(d) {
  const [y, m, day] = d.split('-')
  return `${day}/${m}/${y}`
}
