import { computed, defineProps } from "vue";

export function useNotificationItemProps(props) {
  const notificationItemProps = {
    text: String,
    icon: String,
    bg: String,
    avatarBg: String,
    color: String,
    fontSize: String,
    avatarImage: String,
    padding: String,
    border: String,
    radius: String,
    avatarRadius: String,
    width: String,
    height: String,
    avatarWidth: String,
    avatarHeight: String,
    dateText: String,
    timeline: Boolean
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

  return { notificationItemProps, style, defineProps };
}
