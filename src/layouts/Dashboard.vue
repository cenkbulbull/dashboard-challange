<template>
  <div class="dashboard">
    <div class="row">
      <!-- Sidebar -->
      <div :class="['col-2', { 'd-none': !sidebarVisible }]">
        <Sidebar />
      </div>

      <!-- Middle content -->
      <div :class="middleContentClass">
        <div class="row">
          <!-- Header -->
          <div class="col-12">
            <Header />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <!--<router-view></router-view>-->
          </div>
        </div>
      </div>

      <!-- Rightbar -->
      <div :class="['col-2', { 'd-none': !rightbarVisible }]">
        <Rightbar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
store.dispatch('initializeState');

const sidebarVisible = computed(() => store.getters.sidebarVisible);
const rightbarVisible = computed(() => store.getters.rightbarVisible);

const middleContentClass = computed(() => {
  if (!sidebarVisible.value && !rightbarVisible.value) {
    return 'col-12';
  } else if (!sidebarVisible.value || !rightbarVisible.value) {
    return 'col-10';
  } else {
    return 'col-8';
  }
});

</script>