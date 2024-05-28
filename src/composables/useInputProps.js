import { computed, defineProps } from "vue";

export function useInputProps(props) {
  const inputProps = {
    placeholder: String,
    type: String,
    bg: String,
    color: String,
    fontSize: String,
    padding: String,
    border: String,
    radius: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    backgroundColor: props.bg,
    color: props.color,
    fontSize: props.fontSize,
    padding: props.padding,
    border: props.border,
    borderRadius: props.radius,
    width: props.width,
    height: props.height,
    "--placeholder-color": props.color,
  }));

  return { inputProps, style, defineProps };
}
