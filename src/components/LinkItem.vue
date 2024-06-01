<template>
  <router-link class="link-item" :style="style" :to="props.to">

    <div v-if="props.icon" class="link-item__icon">
      <Icon :name="props.icon" />
    </div>

    <div class="link-item__text">
      <Text
        :text="props.text"
        :fontWeight="props.fontWeight"
        :fontSize="props.fontSize"
        :lineHeight="props.lineHeight"
      />
    </div>
    
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