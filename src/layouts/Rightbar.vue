<template>
  <div class="rightbar">

    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Notification" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item" v-for="(item,index) in items.notification" :key="index" :text="item.text" :dateText="item.datetext" :icon="item.icon" avatarBg="#e3f5ff" avatarRadius="8px" avatarWidth="24px" avatarHeight="24px"/>
    </div>
    
    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Activities" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item rightbar__notification-item--timeline"  v-for="(item,index) in items.activities" :key="index" :text="item.text" :dateText="item.datetext" :avatarImage="item.image" avatarWidth="24px" avatarHeight="24px" avatarRadius="50px"/>
    </div>

    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Contacts" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item" v-for="(item,index) in items.contacts" :key="index" :text="item.text" :avatarImage="item.image" avatarWidth="24px" avatarHeight="24px" avatarRadius="50px" />
    </div>
    
  </div>
</template>

<script setup>
import items from '@/data/notifications/notificationitem.json'
</script>