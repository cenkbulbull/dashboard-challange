<template>
  <i :class="`ri-${props.name}`" :style="style"></i>
</template>

<script setup>

import { useIconProps, defineProps } from "@/composables/useIconProps";

const props = defineProps(useIconProps().iconProps);
const { style } = useIconProps(props);
</script>
