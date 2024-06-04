<template>
  <router-link class="link-item flex g-4" :style="style" :to="props.to">
    <slot></slot>
  </router-link>
</template>

<script setup>
import {
  useLinkItemProps,
  defineProps,
} from "@/composables/ui/useLinkItemProps";

const props = defineProps(useLinkItemProps().linkItemProps);
const { style } = useLinkItemProps(props);
</script>