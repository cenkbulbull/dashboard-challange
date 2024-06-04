import { computed, defineProps } from "vue";

export function useNotificationItemProps(props) {
  const notificationItemProps = {
    text: String,
    icon: String,
    border: String,
    width: String,
    height: String,
    dateText: String,
    timeline: Boolean,
    avatarBg: String,
    avatarImage: String,
    avatarRadius: String,
    avatarWidth: String,
    avatarHeight: String,
  };

  const style = computed(() => ({
    border: props.border,
    width: props.width,
    height: props.height,
  }));

  return { notificationItemProps, style, defineProps };
}
