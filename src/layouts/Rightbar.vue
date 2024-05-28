<template>
  <div class="rightbar">
    <div class="rightbar__notification">
      <span class="rightbar__notification-title"><Text text="Notification" /></span>
      <NotificationItem v-for="(item,index) in 4" :key="index" text="Andi Lane subscribed to you." dateText="12 ocak" avatarBg="#e3f5ff" avatarRadius="8px" avatarWidth="24px" avatarHeight="24px" icon="user-line"/>
    </div>
    
    <div class="rightbar__activities">
      <span class="rightbar__activities-title"><Text text="Activities" /></span>
      <NotificationItem v-for="(item,index) in 5" :key="index" text="Changed the style." dateText="12 ocak" avatarWidth="24px" avatarHeight="24px" avatarImage="https://avatar.iran.liara.run/public/2"/>
    </div>

    <div class="rightbar__contacts">
      <span class="rightbar__contacts-title"><Text text="Contacts" /></span>
      <NotificationItem v-for="(item,index) in 5" :key="index" text="Drew Cano" avatarWidth="24px" avatarHeight="24px" avatarImage="https://avatar.iran.liara.run/public/2"/>
    </div>
  </div>
</template>