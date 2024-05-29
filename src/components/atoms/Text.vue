<template>
  <div class="text" :style="style">
    {{ props.text }}
  </div>
</template>

<script setup>
import { useTextProps,defineProps } from "@/composables/ui/useTextProps";

const props = defineProps(useTextProps().textProps);
const { style } = useTextProps(props);
</script>