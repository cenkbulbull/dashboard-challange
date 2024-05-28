<template>
  <div class="sidebar">

    <div class="sidebar__header">
      <Avatar
        image="https://avatar.iran.liara.run/public/3"
        width="24px"
        height="24px"
      />
      <span class="sidebar__header-title"><Text text="Bordo.io" /></span>
    </div>

    <div class="sidebar__pages">
      <span class="sidebar__pages-title"><Text text="Pages" /></span>
      <LinkItem
        v-for="i in 5"
        :key="i"
        to="/"
        text="Overview"
        padding="8px"
        radius="12px"
        color="#1c1c1c"
      />
    </div>

    <div class="sidebar__dashboards">
      <span class="sidebar__dashboards-title"><Text text="Dashboard" /></span>
      <LinkItem
        v-for="i in 10"
        :key="i"
        text="Projects"
        to="/"
        icon="mail-check-fill"
        padding="8px"
        radius="12px"
        color="#1c1c1c"
      />
    </div>
    
  </div>
</template>
