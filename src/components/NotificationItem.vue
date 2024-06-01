<template>
  <div class="notification" :style="style">

    <div class="notification__avatar" :class="props.timeline ? 'notification__avatar--timeline' : ''">
      <Avatar
        :bg="props.avatarBg"
        :image="props.avatarImage"
        :width="props.avatarWidth"
        :height="props.avatarHeight"
        :radius="props.avatarRadius"
      >
        <Icon :name="props.icon" />
      </Avatar>
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
