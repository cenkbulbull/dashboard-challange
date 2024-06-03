<template>
  <div class="notification flex g-8 padding-8 border-radius-12" :style="style">

    <div class="notification__avatar flex flex-column items-center g-10" :class="props.timeline ? 'notification__avatar--timeline' : ''">
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
      <div class="notification__info-text font-size-14 font-weight-400 color-eerie-black">
        <Text :text="props.text" />
      </div>

      <div class="notification__info-date font-size-12 font-weight-400 color-eerie-black-40">
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
