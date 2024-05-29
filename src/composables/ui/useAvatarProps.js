import { computed, defineProps } from "vue";

export function useAvatarProps(props) {
  const avatarProps = {
    icon: String,
    bg: String,
    color: String,
    fontSize: String,
    image: String,
    padding: String,
    border: String,
    radius: String,
    width: {
      type: String,
      default: "50px",
    },
    height: { 
      type: String, 
      default: "50px" 
    },
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
  }));

  return { avatarProps, style, defineProps };
}
