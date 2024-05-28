<template>
  <div class="avatar" :style="style">
    <Icon v-if="props.icon" :name="props.icon" />
  </div>
</template>

<script setup>
import { useAvatarProps,defineProps } from "@/composables/useAvatarProps";

const props = defineProps(useAvatarProps().avatarProps);
const { style } = useAvatarProps(props);
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
