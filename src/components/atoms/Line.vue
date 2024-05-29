<template>
  <div :class="['line', direction]" :style="style"></div>
</template>

<script setup>
import { useLineProps,defineProps } from "@/composables/ui/useLineProps";

const props = defineProps(useLineProps().lineProps);
const { style } = useLineProps(props);
</script>