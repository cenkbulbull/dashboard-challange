<template>
  <div class="header flex justify-space-between items-center padding-y-20 padding-x-28">

    <div class="header__left-side flex gap-8">
      <div class="header__left-side-button-group flex g-8 border-radius-8">
        <Button class="bg-transparent color-eerie-black padding-4" @click="toggleSidebar">
          <Icon name="layout-left-line" />
        </Button>
        <Button class="bg-transparent color-eerie-black padding-4">
          <Icon name="star-line" />
        </Button>
      </div>

      <div class="header__left-side-breadcrumb">
        <!--<Breadcrumb :options="['Dashboard','Default']" color="rgba(28, 28, 28, 0.4)" activeColor="#1C1C1C" radius="8px"/>-->
      </div>
    </div>

    <div class="header__right-side flex g-20 items-center">

      <Search class="header__right-side-search padding-y-4 padding-x-8 border-radius-8 font-size-14 bg-eerie-black-5">
        <div class="header__right-side-search-icon color-eerie-black-20">
          <Icon name="search-line" />
        </div>

        <div class="header__right-side-search-input flex g-4">
          <Input
            class="bg-transparent color-eerie-black-20"
            border="0"
            placeholder="Search"
          />
        </div>
      </Search>

      <div class="header__right-side-button-group flex g-8">
        <Button class="bg-transparent color-eerie-black padding-4">
          <Icon name="sun-line" />
        </Button>
        <Button class="bg-transparent color-eerie-black padding-4">
          <Icon name="arrow-go-back-line" color="#1c1c1c" />
        </Button>
        <Button class="bg-transparent color-eerie-black padding-4">
          <Icon name="notification-line" color="#1c1c1c" />
        </Button>
        <Button class="bg-transparent color-eerie-black padding-4" @click="toggleRightbar">
          <Icon name="layout-right-line" />
        </Button>
      </div>

    </div>
    
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();

const toggleSidebar = () => {
  store.commit("toggleSidebar");
};

const toggleRightbar = () => {
  store.commit("toggleRightbar");
};
</script>
