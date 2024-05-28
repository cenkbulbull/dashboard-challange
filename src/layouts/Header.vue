<template>
  <div class="header">
    <div class="header__left-side">
      
      <div class="header__left-side-button-group">
        <Button icon="layout-left-line" bg="transparent" @click="toggleSidebar"/>
        <Button icon="star-line" bg="transparent" />
      </div>
      
      <div class="header__left-side-breadcrumb">
        <Breadcrumb :options="['Dashboard','Default']" color="rgba(28, 28, 28, 0.4)" activeColor="#1C1C1C"/>
      </div>

    </div>
    
    <div class="header__right-side">

      <div class="header__right-side-search">
        <Search padding="4px 8px" radius="8px" bg="rgba(28, 28, 28, 0.05)" placeholder="Search" color="rgba(28, 28, 28, 0.2)" icon="search-line" fontSize="14px"/>
      </div>

      <div class="header__right-side-button-group">
        <Button icon="sun-line" bg="transparent"/>
        <Button icon="arrow-go-back-line" bg="transparent"/>
        <Button icon="notification-line" bg="transparent"/>
        <Button icon="layout-right-line" bg="transparent" @click="toggleRightbar"/>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

const toggleSidebar = () => {
  store.commit('toggleSidebar');
};

const toggleRightbar = () => {
  store.commit('toggleRightbar');
};

</script>