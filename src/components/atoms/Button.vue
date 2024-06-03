<template>
  <button class="button flex items-center g-4 padding-0" :style="style">
    <slot></slot> 
  </button>
</template>

<script setup>
import { useButtonProps, defineProps } from "@/composables/ui/useButtonProps";

const props = defineProps(useButtonProps().buttonProps);
const { style } = useButtonProps(props);
</script>