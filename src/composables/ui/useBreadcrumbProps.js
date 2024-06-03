import { computed, defineProps } from "vue";

export function useBreadcrumbProps(props) {
  const breadcrumbProps = {
    bg: String,
    color: String,
    fontSize: String,
    padding: String,
    border: String,
    radius: String,
    width: String,
    height: String,
    options: Array
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
    
  return { breadcrumbProps, style, defineProps };
}
