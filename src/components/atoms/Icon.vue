<template>
  <i :class="`ri-${props.name}`" :style="style"></i>
</template>

<script setup>
import { defineProps } from "vue";
import { useCommonProps } from "@/composables/useCommonProps";

const props = defineProps(useCommonProps().commonProps);
const { style } = useCommonProps(props);
</script>
