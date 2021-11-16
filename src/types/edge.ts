import { DefineComponent } from 'vue'
import { ArrowHeadType, ElementId, Position } from './types'

export interface Edge<T = any> {
  id: ElementId
  type?: string
  source: ElementId
  target: ElementId
  sourceHandle?: ElementId | null
  targetHandle?: ElementId | null
  label?:
    | string
    | {
        component: any
        props?: any
      }
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  style?: any
  animated?: boolean
  arrowHeadType?: ArrowHeadType
  isHidden?: boolean
  data?: T
  class?: string
}

export interface EdgeProps<T = any> {
  id: ElementId
  source: ElementId
  target: ElementId
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  selected?: boolean
  animated?: boolean
  sourcePosition: Position
  targetPosition: Position
  label?:
    | string
    | {
        component: any
        props?: any
      }
  labelStyle?: any
  labelShowBg?: boolean
  labelBgStyle?: any
  labelBgPadding?: [number, number]
  labelBgBorderRadius?: number
  style?: any
  arrowHeadType?: ArrowHeadType
  markerEndId?: string
  data?: T
  sourceHandleId?: ElementId | null
  targetHandleId?: ElementId | null
}

export interface EdgeSmoothStepProps<T = any> extends EdgeProps<T> {
  borderRadius?: number
}

export type EdgeType = DefineComponent<EdgeSmoothStepProps, any, any, any, any, any> | boolean

export interface EdgePositions {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}
