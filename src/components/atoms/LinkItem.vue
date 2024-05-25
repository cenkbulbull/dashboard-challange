<template>
  <div class="link-item" :style="style">
    <div v-if="props.icon" class="link-item__icon">
      <Icon :name="props.icon" />
    </div>
    <div class="link-item__text">
      {{ props.text }}
    </div>
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
.link-item {
  display: flex;

  &__icon {
    margin-right: 8px;
  }

  &--active{
    background-color: $eerie-black-5;
  }

  &:hover{
    background-color: $eerie-black-5;
  }

}
</style>
