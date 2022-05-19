import { ref } from 'vue'
import type { Ref } from 'vue'

export const useInc = (n: Ref<number> = ref(0)) => {
	const inc = (v: number = 1) => (n.value += v)
	return [n, inc] as const
}
