<template>
  <div class="chart-widget flex flex-column g-16 padding-24 border-radius-16 bg-catskill-white color-eerie-black" :style="style">

    <div class="chart-widget__title font-size-14 font-weight-600">
      <Text :text="props.title" />
    </div>

    <div class="chart-widget__content">
      <component
        :is="chartComponent"
        :data="props.data"
        :options="props.options"
      />
    </div>
    
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useChartWidgetProps, defineProps } from "@/composables/ui/useChartWidgetProps";
import { Bar, Line, Doughnut } from 'vue-chartjs';

const props = defineProps(useChartWidgetProps().chartWidgetProps);
const { style } = useChartWidgetProps(props);

const chartComponent = computed(() => {
  switch (props.type) {
    case "bar":
      return Bar;
    case "line":
      return Line;
    case "doughnut":
      return Doughnut;
    default:
      return Bar;
  }
});
</script>