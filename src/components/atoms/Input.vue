<template>
  <input
    class="input"
    :type="props.type"
    :placeholder="props.placeholder"
    :style="style"
  />
</template>

<script setup>
import { defineProps } from "vue";
import { useCommonProps } from "@/composables/useCommonProps";

const props = defineProps(useCommonProps().commonProps);
const { style } = useCommonProps(props);
</script>

<style lang="scss" scoped>
$placeholder-color: var(--placeholder-color);

.input {
  outline: none;

  &::placeholder {
    color: $placeholder-color;
  }
}
</style>
