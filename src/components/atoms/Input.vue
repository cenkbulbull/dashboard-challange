<template>
  <input
    class="input"
    :type="props.type"
    :placeholder="props.placeholder"
    :style="style"
  />
</template>

<script setup>
import { useInputProps, defineProps } from "@/composables/useInputProps";

const props = defineProps(useInputProps().inputProps);
const { style } = useInputProps(props);
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
