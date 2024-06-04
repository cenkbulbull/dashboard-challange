<template>
  <div class="rightbar flex flex-column g-16 padding-16 color-eerie-black font-size-14 font-weight-400">

    <div class="rightbar__notification flex flex-column g-4">

      <span class="rightbar__notification-title padding-y-8 padding-x-4">
        <Text text="Notification" />
      </span>

      <NotificationItem
        class="rightbar__notification-item"
        v-for="(item, index) in items.notification"
        :key="index"
        :text="item.text"
        :dateText="item.datetext"
        :icon="item.icon"
        avatarBg="#e3f5ff"
        avatarRadius="8px"
        avatarWidth="24px"
        avatarHeight="24px"/>

    </div>

    <div class="rightbar__notification flex flex-column g-4">

      <span class="rightbar__notification-title padding-y-8 padding-x-4">
        <Text text="Activities"/>
      </span>

      <NotificationItem
        class="rightbar__notification-item"
        v-for="(item, index) in items.activities"
        :key="index"
        :text="item.text"
        :dateText="item.datetext"
        :avatarImage="item.image"
        avatarWidth="24px"
        avatarHeight="24px"
        avatarRadius="50px"
        timeline="true"/>

    </div>

    <div class="rightbar__notification flex flex-column g-4">

      <span class="rightbar__notification-title padding-y-8 padding-x-4">
        <Text text="Contacts"/>
      </span>

      <NotificationItem
        class="rightbar__notification-item"
        v-for="(item, index) in items.contacts"
        :key="index"
        :text="item.text"
        :avatarImage="item.image"
        avatarWidth="24px"
        avatarHeight="24px"
        avatarRadius="50px"/>
        
    </div>
    
  </div>
</template>

<script setup>
import items from "@/data/notifications/notificationitem.json";
</script>
