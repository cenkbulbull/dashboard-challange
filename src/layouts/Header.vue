<template>
  <div class="header">
    <div class="header__left-side">
      
      <div class="header__left-side-button-group">
        <Button padding="4px" @click="toggleSidebar">
          <Icon name="layout-left-line"/>
        </Button>
        <Button padding="4px">
          <Icon name="star-line"/>
        </Button>
      </div>
      
      <div class="header__left-side-breadcrumb">
        <!--<Breadcrumb :options="['Dashboard','Default']" color="rgba(28, 28, 28, 0.4)" activeColor="#1C1C1C" radius="8px"/>-->
      </div>

    </div>
    
    <div class="header__right-side">

      <div class="header__right-side-search">
        <Search padding="4px 8px" radius="8px" bg="rgba(28, 28, 28, 0.05)" placeholder="Search" color="rgba(28, 28, 28, 0.2)" icon="search-line" fontSize="14px" />
      </div>

      <div class="header__right-side-button-group">
        <Button padding="4px">
          <Icon name="sun-line"/>
        </Button>
        <Button padding="4px">
          <Icon name="arrow-go-back-line"/>
        </Button>
        <Button padding="4px">
          <Icon name="notification-line"/>
        </Button>
        <Button padding="4px"  @click="toggleRightbar">
          <Icon name="layout-right-line"/>
        </Button>
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