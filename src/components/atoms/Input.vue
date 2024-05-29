<template>
  <input
    class="input"
    :type="props.type"
    :placeholder="props.placeholder"
    :style="style"
  />
</template>

<script setup>
import { useInputProps, defineProps } from "@/composables/ui/useInputProps";

const props = defineProps(useInputProps().inputProps);
const { style } = useInputProps(props);
</script>