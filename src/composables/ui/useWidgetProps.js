import { computed,defineProps } from "vue";

export function useWidgetProps(props) {
  const widgetProps = {
    title: String,
    icon: String,
    rollingNumber: String,
    iconText: String,
    border: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));

  return { widgetProps, style,defineProps };
}
