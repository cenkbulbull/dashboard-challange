<template>
  <button class="btn" :style="style">
    <Icon v-if="props.icon" :name="props.icon" />
    {{ props.text }}
  </button>
</template>

<script setup>
import Icon from "./Icon.vue";
import { defineProps } from "vue";
import { useCommonProps } from "@/composables/useCommonProps";

const props = defineProps(useCommonProps().commonProps);
const { style } = useCommonProps(props);
</script>

<style lang="scss" scoped>
.btn {
  border: 0;
  cursor: pointer;
}
</style>
