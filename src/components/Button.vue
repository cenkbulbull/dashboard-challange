<template>
  <button class="btn" :style="style">
    <Icon
      v-if="props.icon"
      :name="props.icon"
      :size="props.iconSize"
      :color="props.iconColor"
    />
    <Text :text="props.text" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useButtonProps } from "@/composables/useButtonProps";

const props = defineProps(useButtonProps().buttonProps);
const { style } = useButtonProps(props);
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 4px;
  border: 0;
  cursor: pointer;
}
</style>
