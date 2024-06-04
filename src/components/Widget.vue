<template>
  <div class="widget flex flex-column g-8 padding-24 border-radius-16 bg-coconut-white color-eerie-black">

    <div class="widget__title font-size-12 font-weight-400">
      <Text :text="props.title "/>
    </div>

    <div class="widget__content flex justify-space-between">

      <div class="widget__content-rolling-number font-size-24 font-weight-600">
        <Text class="letter-spacing-20" :text="props.rollingNumber "/>
      </div>

      <div class="widget__content-icontext flex items-center g-4">
        <div class="widget__content-icontext-text font-size-12 font-weight-400">
          <Text :text="props.iconText"/>
        </div>

        <div class="widget__content-icontext-icon" :class="props.icon">
          <Icon :name="props.icon" />
        </div>
      </div>

    </div>
    
  </div>
</template>

<script setup>
import { useWidgetProps,defineProps } from "@/composables/ui/useWidgetProps";

const props = defineProps(useWidgetProps().widgetProps);
</script>