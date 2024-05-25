<template>
  <div class="avatar" :style="style">
    <Icon v-if="props.icon" :name="props.icon" />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { defineProps } from "vue";
import { useCommonProps } from "@/composables/useCommonProps";

const props = defineProps(useCommonProps().commonProps);
const { style } = useCommonProps(props);
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
