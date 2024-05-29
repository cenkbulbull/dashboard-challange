<template>
  <div class="chart-widget" :style="style">
    <div class="chart-widget__title">
      {{ props.title }}
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
import { useChartWidgetProps, defineProps } from "@/composables/useChartWidgetProps";
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

<style lang="scss" scoped>
.chart-widget {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: $catskill-white;
  color: $eerie-black;

  &__title {
    @include text-style($font-size-lg, $font-weight-medium, $line-height-lg);
  }
}
</style>
