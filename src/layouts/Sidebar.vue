<template>
  <div class="sidebar">

    <div class="sidebar__header">
      <Avatar
        image="https://avatar.iran.liara.run/public/3"
        width="24px"
        height="24px"
      />
      <span class="sidebar__header-title"><Text text="Bordo.io" fontSize="14px" fontWeight="400" lineHeight="20px"/></span>
    </div>

    <div class="sidebar__pages">
      <span class="sidebar__pages-title"><Text text="Pages" /></span>
      <LinkItem
        v-for="link in links.pages"
        :key="link.id"
        :to="link.to"
        :text="link.text"
        padding="8px"
        radius="12px"
        color="#1c1c1c"
      />
    </div>

    <div class="sidebar__dashboards">
      <span class="sidebar__dashboards-title"><Text text="Dashboard" /></span>
      <LinkItem
        v-for="link in links.dashboards"
        :key="link.id"
        :text="link.text"
        :to="link.to"
        :icon="link.icon"
        padding="8px"
        radius="12px"
        color="#1c1c1c"
      />
    </div>
    
  </div>
</template>

<script setup>
import links from '@/data/links/sidebarlinks.json'
</script>