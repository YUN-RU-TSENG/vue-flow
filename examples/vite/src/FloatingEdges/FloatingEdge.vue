<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import type { EdgeProps, GraphNode, MarkerType } from '@vue-flow/core'
import { getBezierPath } from '@vue-flow/core'
import { getEdgeParams } from './floating-edge-utils'

interface FloatingEdgeProps extends EdgeProps {
  id: string
  source: string
  target: string
  markerEndId?: string
  sourceNode: GraphNode
  targetNode: GraphNode
  style?: CSSProperties
  markerEnd: MarkerType
  markerStart: MarkerType
}

const props = defineProps<FloatingEdgeProps>()

const edgeParams = computed(() => getEdgeParams(props.sourceNode, props.targetNode))

const d = computed(
  () =>
    (edgeParams.value.sx &&
      getBezierPath({
        sourceX: edgeParams.value.sx,
        sourceY: edgeParams.value.sy,
        targetX: edgeParams.value.tx,
        targetY: edgeParams.value.ty,
        sourcePosition: edgeParams.value.sourcePos,
        targetPosition: edgeParams.value.targetPos,
      })) ||
    '',
)
</script>

<template>
  <g class="vue-flow__connection">
    <path :id="id" class="vue-flow__edge-path" :d="d[0]" :marker-start="markerStart" :marker-end="markerEnd" :style="style" />
  </g>
</template>
