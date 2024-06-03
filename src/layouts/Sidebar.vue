<template>
  <div
    class="sidebar flex flex-column g-8 padding-16 font-size-14 font-weight-400"
  >
    <div class="sidebar__header flex items-center g-8 padding-8 padding-b-12">
      <Avatar
        image="https://avatar.iran.liara.run/public/3"
        width="24px"
        height="24px"
      />
      <span class="sidebar__header-title"><Text text="Bordo.io" /></span>
    </div>

    <div class="sidebar__links flex flex-column g-4 padding-b-12">

      <span
        class="sidebar__links-title color-eerie-black-40 padding-y-4 padding-x-8"
        ><Text text="Pages"
      /></span>

      <div
        class="sidebar__links-item padding-8 border-radius-12"
        v-for="link in links.pages"
        :key="link.id"
      >
        <Link :to="link.to">
          <Text class="color-eerie-black" :text="link.text" />
        </Link>
      </div>

    </div>

    <div class="sidebar__links flex flex-column g-4 padding-b-12">
      
      <span
        class="sidebar__links-title color-eerie-black-40 padding-y-4 padding-x-8"
        ><Text text="Dashboard"
      /></span>

      <div
        class="sidebar__links-item padding-8 border-radius-12"
        v-for="link in links.dashboards"
        :key="link.id"
      >
        <Link :text="link.text" :to="link.to">
          <Icon :name="link.icon" />
          <Text :text="link.text" class="color-eerie-black" />
        </Link>
      </div>

    </div>

  </div>
</template>

<script setup>
import links from "@/data/links/sidebarlinks.json";
</script>
