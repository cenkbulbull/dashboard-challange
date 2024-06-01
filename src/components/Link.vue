<template>
  <router-link class="link-item" :style="style" :to="props.to">

   <Button>
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