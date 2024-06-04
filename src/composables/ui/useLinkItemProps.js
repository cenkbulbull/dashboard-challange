import { computed, defineProps } from "vue";

export function useLinkItemProps(props) {
  const linkItemProps = {
    text: String,
    to: String,
    border: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));

  return { linkItemProps, style, defineProps };
}
