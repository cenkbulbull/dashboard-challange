import { computed } from "vue";

export function useIconProps(props) {
  const iconProps = {
    name: String,
    color: String,
    size: String,
  };

  const style = computed(() => ({
    color: props.color,
    fontSize: props.size,
  }));

  return { iconProps, style };
}
