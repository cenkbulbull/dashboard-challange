<template>
  <div class="widget">
    <div class="widget__title">
      <Text :text="props.title "/>
    </div>

    <div class="widget__content">

      <div class="widget__content-rolling-number">
        <Text :text="props.rollingNumber "/>
      </div>

      <div class="widget__content-icontext">
        <div class="widget__content-icontext-text">
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