<template>
  <router-link class="link-item flex" :style="style" :to="props.to">

   <Button class="bg-transparent">
    <slot></slot>
   </Button>
    
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