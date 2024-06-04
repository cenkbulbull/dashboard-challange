<template>
  <div class="text">
    {{ props.text }}
  </div>
</template>

<script setup>
import { useTextProps,defineProps } from "@/composables/ui/useTextProps";

const props = defineProps(useTextProps().textProps);
</script>