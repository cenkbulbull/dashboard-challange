import { computed, defineProps } from "vue";

export function useChartWidgetProps(props) {
  const chartWidgetProps = {
    title: String,
    type: String,
    data: String,
    options: String,
    border: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));

  return { chartWidgetProps, style, defineProps };
}
