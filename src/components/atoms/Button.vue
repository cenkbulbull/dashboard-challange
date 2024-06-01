<template>
  <button class="button" :style="style">
    <slot></slot> 
  </button>
</template>

<script setup>
import { useButtonProps, defineProps } from "@/composables/ui/useButtonProps";

const props = defineProps(useButtonProps().buttonProps);
const { style } = useButtonProps(props);
</script>