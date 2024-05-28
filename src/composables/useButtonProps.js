import { computed, defineProps } from "vue";

export function useButtonProps(props) {
  const buttonProps = {
    text: String,
    icon: String,
    bg: String,
    color: String,
    iconColor: String,
    fontSize: String,
    iconSize: String,
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
  }));
    
  return { buttonProps, style, defineProps };
}
