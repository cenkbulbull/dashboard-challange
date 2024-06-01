<template>
  <div class="avatar" :style="style">
    <slot></slot>
  </div>
</template>

<script setup>
import { useAvatarProps,defineProps } from "@/composables/ui/useAvatarProps";

const props = defineProps(useAvatarProps().avatarProps);
const { style } = useAvatarProps(props);
</script>