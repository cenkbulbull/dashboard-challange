<template>
  <router-link class="link-item" :style="style" :to="props.to">
    <div v-if="props.icon" class="link-item__icon">
      <Icon :name="props.icon" />
    </div>
    <div class="link-item__text">
      {{ props.text }}
    </div>
  </router-link>
</template>

<script setup>
import Icon from "./Icon.vue";
import { defineProps } from "vue";
import { useLinkItemProps } from "@/composables/useLinkItemProps";

const props = defineProps(useLinkItemProps().linkItemProps);
const { style } = useLinkItemProps(props);
</script>

<style lang="scss" scoped>
.link-item {
  display: flex;
  text-decoration: none;

  &__icon {
    margin-right: 8px;
  }

  &--active {
    background-color: $eerie-black-5;
  }

  &:hover {
    transition: all 0.3s;
    background-color: $eerie-black-5;
  }
}
</style>
