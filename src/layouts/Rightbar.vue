<template>
  <div class="rightbar">
    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Notification" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item" v-for="(item,index) in 4" :key="index" text="Andi Lane subscribed to you." dateText="12 ocak" avatarBg="#e3f5ff" avatarRadius="8px" avatarWidth="24px" avatarHeight="24px" icon="user-line"/>
    </div>
    
    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Activities" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item rightbar__notification-item--timeline" v-for="(item,index) in 5" :key="index" text="Changed the style." dateText="12 ocak" avatarWidth="24px" avatarHeight="24px" avatarImage="https://avatar.iran.liara.run/public/2"/>
    </div>

    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Contacts" fontSize="14px" fontWeight="400" lineHeight="20px" /></span>
      <NotificationItem class="rightbar__notification-item" v-for="(item,index) in 5" :key="index" text="Drew Cano" avatarWidth="24px" avatarHeight="24px" avatarImage="https://avatar.iran.liara.run/public/2"/>
    </div>
  </div>
</template>