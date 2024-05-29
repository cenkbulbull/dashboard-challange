<template>
  <button class="btn" :style="style">
    <Icon
      v-if="props.icon"
      :name="props.icon"
      :size="props.iconSize"
      :color="props.iconColor"
    />
    <Text
      v-if="props.text"
      :text="props.text"
      :fontWeight="props.fontWeight"
      :fontSize="props.fontSize"
      :lineHeight="props.lineHeight"
    />
  </button>
</template>

<script setup>
import { useButtonProps, defineProps } from "@/composables/ui/useButtonProps";

const props = defineProps(useButtonProps().buttonProps);
const { style } = useButtonProps(props);
</script>