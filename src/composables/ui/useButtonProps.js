import { computed, defineProps } from "vue";

export function useButtonProps(props) {
  const buttonProps = {
    border: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));
    
  return { buttonProps, style, defineProps };
}
