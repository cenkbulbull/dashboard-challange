import { computed, defineProps } from "vue";

export function useLineProps(props) {
  const lineProps = {
    direction: {
      type: String,
      default: "horizontal",
      validator: value => ['horizontal', 'vertical'].includes(value)
    },
    thickness: {
      type: String,
      default: "1px",
    },
    length: {
      type: String,
      default: "100%",
    },
    color: {
      type: String,
      default: "#000",
    },
    radius: {
      type: String,
    },
  };

  const style = computed(() => ({
    borderRadius: props.radius,
    backgroundColor: props.color,
    width: props.direction === "horizontal" ? props.length : props.thickness,
    height: props.direction === "horizontal" ? props.thickness : props.length,
  }));

  return { lineProps, style, defineProps };
}
