import { computed, defineProps } from "vue";

export function useInputProps(props) {
  const inputProps = {
    placeholder: String,
    type: String,
    border: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
    "--placeholder-color": props.color,
  }));

  return { inputProps, style, defineProps };
}
