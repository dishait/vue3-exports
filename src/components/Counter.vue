<script lang="ts" setup>
import { useInc } from '../composables/inc'

const [n, inc] = useInc()
</script>

<template>
	<div @click="inc()" class="custom-color">
		counter: {{ n }}
	</div>
</template>
