import { computed, defineProps } from "vue";

export function useSearchProps(props) {
  const searchProps = {
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

  return { searchProps, style,defineProps };
}
