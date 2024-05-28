<template>
  <div :class="['line', direction]" :style="style"></div>
</template>

<script setup>
import { useLineProps,defineProps } from "@/composables/useLineProps";

const props = defineProps(useLineProps().lineProps);
const { style } = useLineProps(props);
</script>

<style lang="scss" scoped>
.line {
  &.horizontal {
    display: block;
  }
  
  &.vertical {
    display: block;
  }
}
</style>