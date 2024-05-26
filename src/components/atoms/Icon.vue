<template>
  <i :class="`ri-${props.name}`" :style="style"></i>
</template>

<script setup>
import { defineProps } from "vue";
import { useIconProps } from "@/composables/useIconProps";

const props = defineProps(useIconProps().iconProps);
const { style } = useIconProps(props);
</script>
