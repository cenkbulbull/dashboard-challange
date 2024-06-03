<template>
  <div class="search flex items-center g-8" :style="style">
    <slot></slot>    
  </div>
</template>

<script setup>
import { useSearchProps,defineProps } from "@/composables/ui/useSearchProps";

const props = defineProps(useSearchProps().searchProps);
const { style } = useSearchProps(props);
</script>