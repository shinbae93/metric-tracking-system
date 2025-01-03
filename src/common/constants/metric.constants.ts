export const METRIC_TYPES = {
  DISTANCE: 'Distance',
  TEMPERATURE: 'Temperature',
} as const

export const METRIC_UNITS = {
  DISTANCE: ['meter', 'centimeter', 'inch'],
  TEMPERATURE: ['C', 'F', 'K'],
} as const
