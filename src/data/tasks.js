// Todas las fechas en formato YYYY-MM-DD, año 2026
export const TASKS = [
  // ── BLOQUE 0 — Anteproyecto ──
  { id: 'B0', name: 'Anteproyecto', responsible: 'Todo el equipo', start: '2026-03-10', end: '2026-03-24', deps: [], block: '0' },
  { id: 'H0.1', name: 'Eval. Parcial 1', responsible: '—', start: '2026-03-24', end: '2026-03-24', deps: ['B0'], block: '0', milestone: true },

  // ── BLOQUE 1 — Planificación + Requerimientos ──
  // Sprint 1
  { id: 'T1.1', name: 'Desglose de tareas (WBS)', responsible: 'Luciano', start: '2026-03-24', end: '2026-03-30', deps: [], block: '1' },
  { id: 'T1.2', name: 'Estimación de tiempos', responsible: 'Luciano + equipo', start: '2026-03-31', end: '2026-04-02', deps: ['T1.1'], block: '1' },
  { id: 'T1.3', name: 'Asignación de recursos', responsible: 'Luciano', start: '2026-04-03', end: '2026-04-04', deps: ['T1.2'], block: '1' },
  { id: 'T2.1', name: 'Definición formal del equipo', responsible: 'Luciano', start: '2026-03-24', end: '2026-03-25', deps: [], block: '1' },
  { id: 'T2.3', name: 'Plan de comunicación interna', responsible: 'Luciano', start: '2026-03-26', end: '2026-03-26', deps: ['T2.1'], block: '1' },
  { id: 'T2.4', name: 'Configuración del repositorio', responsible: 'Juan + Luciano', start: '2026-03-24', end: '2026-03-27', deps: [], block: '1' },
  { id: 'T2.5', name: 'Reglas de versionado', responsible: 'Luciano + Juan', start: '2026-03-28', end: '2026-03-28', deps: ['T2.4'], block: '1' },
  { id: 'T2.6', name: 'Configuración de Trello', responsible: 'Paula', start: '2026-03-24', end: '2026-03-25', deps: [], block: '1' },
  { id: 'T4.1', name: 'Relevamiento detallado de funciones', responsible: 'Paula + Luciano', start: '2026-03-24', end: '2026-04-01', deps: [], block: '1' },

  // Sprint 2
  { id: 'T1.4', name: 'Definición de hitos y entregables', responsible: 'Luciano', start: '2026-04-07', end: '2026-04-08', deps: ['T1.3'], block: '1' },
  { id: 'T1.5', name: 'Elaboración del cronograma (Gantt)', responsible: 'Luciano + Paula', start: '2026-04-09', end: '2026-04-11', deps: ['T1.4'], block: '1' },
  { id: 'T1.6', name: 'Estrategia de seguimiento', responsible: 'Luciano', start: '2026-04-12', end: '2026-04-13', deps: ['T1.5'], block: '1' },
  { id: 'T1.7', name: 'Matriz RACI', responsible: 'Luciano + Paula', start: '2026-04-14', end: '2026-04-15', deps: ['T1.3', 'T2.2'], block: '1' },
  { id: 'T2.2', name: 'Descripción de funciones y responsabilidades', responsible: 'Luciano + Paula', start: '2026-04-07', end: '2026-04-08', deps: ['T2.1'], block: '1' },
  { id: 'T4.2', name: 'Problemas y necesidades por función', responsible: 'Paula', start: '2026-04-07', end: '2026-04-09', deps: ['T4.1'], block: '1' },
  { id: 'T4.3', name: 'Cuadro resumen comparativo', responsible: 'Paula + Vicenzo', start: '2026-04-10', end: '2026-04-11', deps: ['T4.2'], block: '1' },
  { id: 'T4.4', name: 'Requerimientos funcionales', responsible: 'Todo el equipo', start: '2026-04-07', end: '2026-04-17', deps: ['T4.1'], block: '1' },
  { id: 'T4.5', name: 'Requerimientos no funcionales', responsible: 'Juan + Luciano', start: '2026-04-14', end: '2026-04-16', deps: ['T4.4'], block: '1' },

  // Cierre Bloque 1
  { id: 'T4.6', name: 'Objetivos y alcance preliminar', responsible: 'Luciano', start: '2026-04-21', end: '2026-04-22', deps: ['T4.4', 'T4.5'], block: '1' },
  { id: 'RC1', name: 'Revisión cruzada Etapas 1+2+4', responsible: 'Todo el equipo', start: '2026-04-23', end: '2026-04-25', deps: ['T4.6'], block: '1' },
  { id: 'H1.1', name: 'ENTREGA: Eval. Parcial 2 (Etapas 1+2)', responsible: '—', start: '2026-04-28', end: '2026-04-28', deps: ['RC1'], block: '1', milestone: true },
  { id: 'H1.2', name: 'ENTREGA: Eval. Parcial 3 (Etapa 4)', responsible: '—', start: '2026-04-28', end: '2026-04-28', deps: ['RC1'], block: '1', milestone: true },

  // ── BLOQUE 2 — Factibilidad + Diseño ──
  // Sprint 3
  { id: 'T3.1', name: 'Factibilidad técnica', responsible: 'Emanuel + Cristian', start: '2026-04-28', end: '2026-05-09', deps: ['T4.4'], block: '2' },
  { id: 'T3.3', name: 'Análisis de costos', responsible: 'Cristian + Luciano', start: '2026-05-05', end: '2026-05-07', deps: ['T3.1'], block: '2' },
  { id: 'T5.1', name: 'Modelo funcional (DFDs/Casos de Uso)', responsible: 'Paula + Luciano', start: '2026-04-28', end: '2026-05-08', deps: ['T4.4', 'T4.6'], block: '2' },
  { id: 'T5.2', name: 'Modelo de datos (DER)', responsible: 'Juan', start: '2026-04-28', end: '2026-05-08', deps: ['T4.4', 'T4.5'], block: '2' },

  // Sprint 4
  { id: 'T3.2', name: 'Factibilidad operativa', responsible: 'Vicenzo + Paula', start: '2026-05-12', end: '2026-05-15', deps: ['T4.4'], block: '2' },
  { id: 'T3.4', name: 'Análisis de riesgos', responsible: 'Luciano + Paula', start: '2026-05-12', end: '2026-05-14', deps: ['T3.1', 'T3.3'], block: '2' },
  { id: 'T3.5', name: 'Análisis de impacto ambiental', responsible: 'Paula', start: '2026-05-16', end: '2026-05-17', deps: [], block: '2' },
  { id: 'T5.3', name: 'Diseño de arquitectura de alto nivel', responsible: 'Luciano + Juan', start: '2026-05-12', end: '2026-05-15', deps: ['T5.1', 'T5.2'], block: '2' },
  { id: 'T5.4', name: 'Maquetación de pantallas (Wireframes)', responsible: 'Vicenzo', start: '2026-05-12', end: '2026-05-25', deps: ['T5.1'], block: '2' },
  { id: 'T5.5', name: 'Diseño de flujos conversacionales (WhatsApp)', responsible: 'Emanuel + Vicenzo', start: '2026-05-16', end: '2026-05-21', deps: ['T5.1'], block: '2' },

  // Sprint 5
  { id: 'T5.4b', name: 'Maquetación de pantallas (continuación)', responsible: 'Vicenzo', start: '2026-05-26', end: '2026-06-01', deps: ['T5.4'], block: '2' },
  { id: 'T5.6', name: 'Diseño de reportes contables', responsible: 'Paula + Luciano', start: '2026-05-26', end: '2026-05-27', deps: ['T5.1'], block: '2' },
  { id: 'T5.7', name: 'Revisión y alcance definitivo', responsible: 'Todo el equipo', start: '2026-06-02', end: '2026-06-05', deps: ['T5.1', 'T5.3', 'T5.4b', 'T5.5', 'T5.6'], block: '2' },

  // Sprint 6 — Cierre
  { id: 'RC2', name: 'Revisión cruzada Etapas 3+5', responsible: 'Todo el equipo', start: '2026-06-09', end: '2026-06-13', deps: ['T5.7'], block: '2' },
  { id: 'CF2', name: 'Correcciones finales y maquetado', responsible: 'Paula', start: '2026-06-14', end: '2026-06-20', deps: ['RC2'], block: '2' },
  { id: 'H2.1', name: 'ENTREGA: Eval. Parcial 4 (Etapa 3)', responsible: '—', start: '2026-06-23', end: '2026-06-23', deps: ['CF2'], block: '2', milestone: true },
  { id: 'H2.2', name: 'ENTREGA: Eval. Parcial 5 (Etapa 5)', responsible: '—', start: '2026-06-23', end: '2026-06-23', deps: ['CF2'], block: '2', milestone: true },

  // ── BLOQUE 2.5 — Prototipos y POCs ──
  { id: 'T6.1', name: 'Setup del proyecto y CI/CD', responsible: 'Luciano + Juan', start: '2026-06-23', end: '2026-07-03', deps: ['T5.3'], block: '2.5' },
  { id: 'T6.3', name: 'Modelo de datos y persistencia (inicio)', responsible: 'Juan', start: '2026-06-23', end: '2026-07-06', deps: ['T5.2'], block: '2.5' },
  { id: 'T6.8', name: 'Conector AFIP/ARCA (POC)', responsible: 'Cristian', start: '2026-06-30', end: '2026-07-20', deps: ['T5.3'], block: '2.5' },
  { id: 'T6.9', name: 'Conector MercadoPago (POC)', responsible: 'Cristian', start: '2026-07-21', end: '2026-08-03', deps: ['T5.3'], block: '2.5' },
  { id: 'T6.5', name: 'Mapeo semántico de planillas (POC)', responsible: 'Emanuel', start: '2026-06-30', end: '2026-07-20', deps: ['T5.3', 'T5.2'], block: '2.5' },
  { id: 'T6.12', name: 'Dashboard — Estructura base (scaffolding)', responsible: 'Vicenzo', start: '2026-07-07', end: '2026-07-20', deps: ['T5.4'], block: '2.5' },
  { id: 'TX.1', name: 'Paper CoNaIISI (inicio)', responsible: 'Luciano + Emanuel', start: '2026-06-23', end: '2026-08-10', deps: ['T5.7'], block: '2.5' },

  // ── BLOQUE 3 — Desarrollo e Implementación ──
  // Sprint 11
  { id: 'T6.2', name: 'Motor de reglas determinista (inicio)', responsible: 'Luciano', start: '2026-08-11', end: '2026-08-24', deps: ['T6.1'], block: '3' },
  { id: 'T6.3b', name: 'Modelo de datos y persistencia (completar)', responsible: 'Juan', start: '2026-08-11', end: '2026-08-24', deps: ['T6.1'], block: '3' },
  { id: 'T6.4', name: 'Colas de trabajo asíncronas', responsible: 'Juan', start: '2026-08-18', end: '2026-08-24', deps: ['T6.3'], block: '3' },
  { id: 'T6.5b', name: 'Mapeo semántico (completar)', responsible: 'Emanuel', start: '2026-08-11', end: '2026-08-24', deps: ['T6.5'], block: '3' },
  { id: 'T6.12b', name: 'Dashboard — Estructura base (completar)', responsible: 'Vicenzo', start: '2026-08-11', end: '2026-08-20', deps: ['T6.12'], block: '3' },
  { id: 'T6.17', name: 'Plan de pruebas', responsible: 'Paula', start: '2026-08-11', end: '2026-08-18', deps: ['T5.7', 'T6.1'], block: '3' },

  // Sprint 12
  { id: 'T6.2b', name: 'Motor de reglas (continuación)', responsible: 'Luciano', start: '2026-08-25', end: '2026-09-07', deps: ['T6.2'], block: '3' },
  { id: 'T6.4b', name: 'Colas asíncronas (completar)', responsible: 'Juan', start: '2026-08-25', end: '2026-09-04', deps: ['T6.3b'], block: '3' },
  { id: 'T6.8b', name: 'Conector AFIP/ARCA (completar)', responsible: 'Cristian', start: '2026-08-25', end: '2026-09-07', deps: ['T6.8', 'T6.2'], block: '3' },
  { id: 'T6.5c', name: 'Mapeo semántico (completar)', responsible: 'Emanuel', start: '2026-08-25', end: '2026-09-07', deps: ['T6.5b'], block: '3' },
  { id: 'T6.6', name: 'Motor NLU (inicio)', responsible: 'Emanuel', start: '2026-09-01', end: '2026-09-07', deps: ['T6.5b'], block: '3' },
  { id: 'T6.13', name: 'Dashboard — Config integraciones', responsible: 'Vicenzo', start: '2026-08-25', end: '2026-09-05', deps: ['T6.12b'], block: '3' },
  { id: 'T6.18', name: 'Ejecución de pruebas (continuo)', responsible: 'Paula', start: '2026-08-25', end: '2026-09-07', deps: ['T6.17'], block: '3' },
  { id: 'TX.1b', name: 'Paper CoNaIISI (finalizar)', responsible: 'Luciano + Emanuel', start: '2026-08-25', end: '2026-09-12', deps: ['TX.1'], block: '3' },

  // Sprint 13
  { id: 'T6.2c', name: 'Motor de reglas (flujo facturación)', responsible: 'Luciano', start: '2026-09-08', end: '2026-09-14', deps: ['T6.2b'], block: '3' },
  { id: 'T6.9b', name: 'Conector MercadoPago (completar)', responsible: 'Cristian', start: '2026-09-08', end: '2026-09-19', deps: ['T6.9', 'T6.2b'], block: '3' },
  { id: 'T6.10', name: 'Conector WhatsApp (inicio)', responsible: 'Cristian', start: '2026-09-15', end: '2026-09-21', deps: ['T6.9b'], block: '3' },
  { id: 'T6.6b', name: 'Motor NLU (continuación)', responsible: 'Emanuel', start: '2026-09-08', end: '2026-09-21', deps: ['T6.6'], block: '3' },
  { id: 'T6.14', name: 'Dashboard — Subida de planillas', responsible: 'Vicenzo', start: '2026-09-08', end: '2026-09-17', deps: ['T6.13', 'T6.5c'], block: '3' },
  { id: 'HD1', name: 'HITO: Primera Demo (15/9)', responsible: 'Todo el equipo', start: '2026-09-15', end: '2026-09-15', deps: ['T6.2c', 'T6.8b', 'T6.5c', 'T6.12b'], block: '3', milestone: true },
  { id: 'HP1', name: 'HITO: Entrega Paper CoNaIISI (15/9)', responsible: 'Luciano + Emanuel', start: '2026-09-15', end: '2026-09-15', deps: ['TX.1b'], block: '3', milestone: true },

  // Sprint 14
  { id: 'T6.2d', name: 'Motor de reglas (flujo cobro+agenda)', responsible: 'Luciano', start: '2026-09-22', end: '2026-10-05', deps: ['T6.2c'], block: '3' },
  { id: 'T6.10b', name: 'Conector WhatsApp (completar)', responsible: 'Cristian', start: '2026-09-22', end: '2026-10-03', deps: ['T6.10'], block: '3' },
  { id: 'T6.11', name: 'Conector Google Sheets/Excel', responsible: 'Cristian + Emanuel', start: '2026-10-04', end: '2026-10-05', deps: ['T6.5c'], block: '3' },
  { id: 'T6.6c', name: 'Motor NLU (completar)', responsible: 'Emanuel', start: '2026-09-22', end: '2026-10-03', deps: ['T6.6b'], block: '3' },
  { id: 'T6.7', name: 'Iteración de prompts (intensivo)', responsible: 'Emanuel', start: '2026-09-22', end: '2026-10-05', deps: ['T6.5c', 'T6.6b'], block: '3' },
  { id: 'T6.15', name: 'Dashboard — Bitácora (Logs)', responsible: 'Vicenzo', start: '2026-09-22', end: '2026-10-01', deps: ['T6.14'], block: '3' },
  { id: 'T6.16', name: 'Dashboard — Reportes contables', responsible: 'Vicenzo', start: '2026-10-02', end: '2026-10-05', deps: ['T6.15', 'T5.6'], block: '3' },
  { id: 'TX.2', name: 'Póster (inicio diseño)', responsible: 'Vicenzo + Paula', start: '2026-09-29', end: '2026-10-05', deps: [], block: '3' },

  // Sprint 15
  { id: 'T6.11b', name: 'Conector Google Sheets/Excel (completar)', responsible: 'Cristian + Emanuel', start: '2026-10-06', end: '2026-10-12', deps: ['T6.11'], block: '3' },
  { id: 'T6.16b', name: 'Dashboard — Reportes (completar)', responsible: 'Vicenzo', start: '2026-10-06', end: '2026-10-10', deps: ['T6.16'], block: '3' },
  { id: 'T6.7b', name: 'Iteración de prompts (continuo)', responsible: 'Emanuel', start: '2026-10-06', end: '2026-10-19', deps: ['T6.7'], block: '3' },
  { id: 'T6.18b', name: 'Testing intensivo pre-demo', responsible: 'Paula', start: '2026-10-06', end: '2026-10-12', deps: ['T6.18'], block: '3' },
  { id: 'TX.2b', name: 'Póster (finalizar)', responsible: 'Vicenzo + Paula', start: '2026-10-06', end: '2026-10-12', deps: ['TX.2'], block: '3' },
  { id: 'HD2', name: 'HITO: Segunda Demo (13/10)', responsible: 'Todo el equipo', start: '2026-10-13', end: '2026-10-13', deps: ['T6.2d', 'T6.11b', 'T6.6c', 'T6.16b'], block: '3', milestone: true },
  { id: 'HP2', name: 'HITO: Entrega Póster (13/10)', responsible: 'Vicenzo + Paula', start: '2026-10-13', end: '2026-10-13', deps: ['TX.2b'], block: '3', milestone: true },

  // Sprint 16
  { id: 'T6.19', name: 'Análisis estático del código', responsible: 'Paula + Luciano', start: '2026-10-20', end: '2026-10-22', deps: ['T6.2d'], block: '3' },
  { id: 'T6.20', name: 'Diagrama de arquitectura definitivo', responsible: 'Luciano', start: '2026-10-23', end: '2026-10-25', deps: ['T6.19'], block: '3' },
  { id: 'T6.21', name: 'Manual de usuario', responsible: 'Paula', start: '2026-10-20', end: '2026-10-31', deps: ['T6.16b'], block: '3' },
  { id: 'T6.22', name: 'Plan de capacitación', responsible: 'Paula + Vicenzo', start: '2026-10-27', end: '2026-10-29', deps: ['T6.21'], block: '3' },
  { id: 'T6.23', name: 'Plan de implementación', responsible: 'Luciano', start: '2026-10-27', end: '2026-10-29', deps: ['T6.20'], block: '3' },
  { id: 'T6.18c', name: 'Testing final + corrección de bugs', responsible: 'Paula + equipo', start: '2026-10-20', end: '2026-11-02', deps: [], block: '3' },
  { id: 'HG1', name: 'ENTREGA: Eval. Global 1 (3/11)', responsible: 'Todo el equipo', start: '2026-11-03', end: '2026-11-03', deps: ['T6.22', 'T6.23', 'T6.18c'], block: '3', milestone: true },

  // ── BLOQUE 4 — Documentación y Cierre ──
  // Sprint 17
  { id: 'T7.1', name: 'Compilación de carpeta completa', responsible: 'Paula', start: '2026-11-03', end: '2026-11-10', deps: ['HG1'], block: '4' },
  { id: 'T7.2', name: 'Redacción de conclusiones', responsible: 'Luciano + Paula', start: '2026-11-07', end: '2026-11-09', deps: ['T7.1'], block: '4' },
  { id: 'T7.3', name: 'Bibliografía y referencias', responsible: 'Paula', start: '2026-11-10', end: '2026-11-11', deps: ['T7.1'], block: '4' },
  { id: 'T7.4', name: 'Revisión final cruzada', responsible: 'Todo el equipo', start: '2026-11-12', end: '2026-11-14', deps: ['T7.1', 'T7.2', 'T7.3'], block: '4' },
  { id: 'TX.5', name: 'Ensayo general de exposición', responsible: 'Todo el equipo', start: '2026-11-11', end: '2026-11-11', deps: [], block: '4' },
  { id: 'HX.6', name: 'HITO: Exposición Anual (17/11)', responsible: 'Todo el equipo', start: '2026-11-17', end: '2026-11-17', deps: ['TX.5'], block: '4', milestone: true },

  // Sprint 18
  { id: 'T7.5', name: 'Impresión y presentación en Biblioteca', responsible: 'Paula + Luciano', start: '2026-11-17', end: '2026-11-20', deps: ['T7.4'], block: '4' },
  { id: 'T7.6', name: 'Publicación en RIA', responsible: 'Paula', start: '2026-11-20', end: '2026-11-22', deps: ['T7.5'], block: '4' },
  { id: 'HG2', name: 'ENTREGA: Eval. Global 2 (24/11)', responsible: '—', start: '2026-11-24', end: '2026-11-24', deps: ['T7.5', 'T7.6'], block: '4', milestone: true },
];
