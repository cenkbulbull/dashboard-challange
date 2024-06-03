<template>
  <select :name="props.name" :style="style">
    <option v-for="(item,index) in props.options" :key="index" :value="item">{{ item }}</option>
  </select>
</template>

<script setup>
import { useSelectboxProps, defineProps } from "@/composables/ui/useSelectboxProps";

const props = defineProps(useSelectboxProps().selectboxProps);
const { style } = useSelectboxProps(props);
</script>