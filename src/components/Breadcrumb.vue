<template>
  <div class="breadcrumb flex g-8 items-center" :style="style">

    <div
      class="breadcrumb__item"
      v-for="(item, index) in props.options"
      :key="index"
    >
      <Button class="breadcrumb__item-button bg-transparent padding-y-4 padding-x-8" :class="{ 'color-eerie-black': index === props.options.length - 1, 'color-eerie-black-40': index !== props.options.length - 1 }">
        <Text class="breadcrumb__item-text font-size-14 font-weight-400" :text="item" />
      </Button>
    </div>

  </div>
</template>

<script setup>
import {
  useBreadcrumbProps,
  defineProps,
} from "@/composables/ui/useBreadcrumbProps";

const props = defineProps(useBreadcrumbProps().breadcrumbProps);
const { style } = useBreadcrumbProps(props);
</script>
