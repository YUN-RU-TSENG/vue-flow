import type { MaybeComputedRef } from '@vueuse/core'
import type { GraphEdge } from '~/types'

/**
 * Get an edge with the given id
 *
 * If no edge id is provided, the edge id is injected from context,
 * meaning if you do not provide an id, this composable has to be called in a child of your custom edge component, or it will throw!
 *
 * @param id The id of the edge to get
 */
export default function useEdge<T extends GraphEdge = GraphEdge>(id?: MaybeComputedRef<string>) {
  const { findEdge, emits } = useVueFlow()

  const edgeRef = inject(EdgeRef, null)

  const edgeIdInjection = inject(EdgeId, '')

  const edgeId = computed(() => {
    const nextId = resolveUnref(id) ?? edgeIdInjection

    if (!nextId) {
      emits.error(new VueFlowError(ErrorCode.EDGE_NOT_FOUND, nextId))
    }

    return nextId
  })

  const edgeEl = computed(() => unref(edgeRef) ?? document.querySelector(`[data-id="${edgeId.value}"]`))

  const edge = computed(() => findEdge<T>(edgeId.value)!)

  return {
    id: edgeId,
    edge,
    edgeEl,
  }
}
