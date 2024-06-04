import { computed, defineProps } from "vue";

export function useSelectboxProps(props) {
  const selectboxProps = {
    border: String,
    width: String,
    height: String,
    options: Array,
    name: String
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));
    
  return { selectboxProps, style, defineProps };
}
