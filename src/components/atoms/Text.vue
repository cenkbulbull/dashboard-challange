<template>
  <div class="text" :style="style">
    {{ props.text }}
  </div>
</template>

<script setup>
import { useTextProps,defineProps } from "@/composables/useTextProps";

const props = defineProps(useTextProps().textProps);
const { style } = useTextProps(props);
</script>