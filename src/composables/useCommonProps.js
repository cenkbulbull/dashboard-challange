import { computed } from "vue";

export function useCommonProps(props) {
  const commonProps = {
    text: String,
    icon: String,
    name: String,
    placeholder: String,
    type: String,
    bg: String,
    color: String,
    fontSize: String,
    image: String,
    padding: String,
    border: String,
    radius: String,
    width: String,
    height: String,
  };

  const style = computed(() => ({
    backgroundColor: props.bg,
    backgroundImage: props.image ? `url(${props.image})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: props.color,
    fontSize: props.fontSize,
    padding: props.padding,
    border: props.border,
    borderRadius: props.radius,
    width: props.width,
    height: props.height,
    "--placeholder-color": props.color,
  }));

  return { commonProps, style };
}
