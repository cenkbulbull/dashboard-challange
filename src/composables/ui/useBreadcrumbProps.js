import { computed, defineProps } from "vue";

export function useBreadcrumbProps(props) {
  const breadcrumbProps = {
    border: String,
    width: String,
    height: String,
    options: Array
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));
    
  return { breadcrumbProps, style, defineProps };
}
