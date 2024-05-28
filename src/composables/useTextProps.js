import { computed } from "vue";

export function useTextProps(props) {
  const textProps = {
    text: String,
    color: String,
    fontSize: String,
    fontWeight: String,
    lineHeight: String
  };

  const style = computed(() => ({
    color: props.color,
    fontSize: props.fontSize,
    fontWeight:props.fontWeight,
    lineHeight:props.lineHeight
  }));

  return { textProps, style };
}
