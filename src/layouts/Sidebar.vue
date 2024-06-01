<template>
  <div class="sidebar">

    <div class="sidebar__header">
      <Avatar
        image="https://avatar.iran.liara.run/public/3"
        width="24px"
        height="24px"
      />
      <span class="sidebar__header-title"
        ><Text
          text="Bordo.io"
          fontSize="14px"
          fontWeight="400"
          lineHeight="20px"
      /></span>
    </div>

    <div class="sidebar__links">
      <span class="sidebar__links-title"><Text text="Pages" /></span>
      <div
        class="sidebar__links-item"
        v-for="link in links.pages"
        :key="link.id"
      >
        <Link :to="link.to">
          <Text :text="link.text" color="#1c1c1c" />
        </Link>
      </div>
    </div>

    <div class="sidebar__links">
      <span class="sidebar__links-title"><Text text="Dashboard" /></span>
      <div
        class="sidebar__links-item"
        v-for="link in links.dashboards"
        :key="link.id"
      >
        <Link :text="link.text" :to="link.to">
          <Icon :name="link.icon" />
          <Text :text="link.text" color="#1c1c1c" />
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup>
import links from "@/data/links/sidebarlinks.json";
</script>
