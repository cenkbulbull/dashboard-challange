<template>
  <div class="text" :style="style">
    {{ props.text }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTextProps } from "@/composables/useTextProps";

const props = defineProps(useTextProps().textProps);
const { style } = useTextProps(props);
</script>