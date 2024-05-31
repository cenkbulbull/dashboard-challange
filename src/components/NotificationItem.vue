<template>
  <div class="notification" :style="style">
    <div class="notification__avatar">
      <Avatar
        :bg="props.avatarBg"
        :icon="props.icon"
        :image="props.avatarImage"
        :width="props.avatarWidth"
        :height="props.avatarHeight"
        :radius="props.avatarRadius"
      />
    </div>

    <div class="notification__info">
      <div class="notification__info-text">
        <Text :text="props.text" />
      </div>

      <div class="notification__info-date">
        <Text :text="props.dateText" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  useNotificationItemProps,
  defineProps,
} from "@/composables/ui/useNotificationItemProps";

const props = defineProps(useNotificationItemProps().notificationItemProps);
const { style } = useNotificationItemProps(props);
</script>
