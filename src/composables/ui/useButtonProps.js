import { computed, defineProps } from "vue";

export function useButtonProps(props) {
  const buttonProps = {
    bg: String,
    color: String,
    fontSize: String,
    lineHeight: String,
    padding: String,
    border: String,
    radius: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    backgroundColor: props.bg,
    color: props.color,
    padding: props.padding,
    border: props.border,
    borderRadius: props.radius,
    width: props.width,
    height: props.height,
  }));
    
  return { buttonProps, style, defineProps };
}
