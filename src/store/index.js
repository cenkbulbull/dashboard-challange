import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      sidebarVisible: true,
      rightbarVisible: true
    };
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible;
      localStorage.setItem('sidebarVisible', JSON.stringify(state.sidebarVisible));
    },
    toggleRightbar(state) {
      state.rightbarVisible = !state.rightbarVisible;
      localStorage.setItem('rightbarVisible', JSON.stringify(state.rightbarVisible));
    },
    setSidebarVisible(state, visible) {
      state.sidebarVisible = visible;
    },
    setRightbarVisible(state, visible) {
      state.rightbarVisible = visible;
    }
  },
  actions: {
    initializeState({ commit }) {
      const sidebarVisible = JSON.parse(localStorage.getItem('sidebarVisible'));
      const rightbarVisible = JSON.parse(localStorage.getItem('rightbarVisible'));
      commit('setSidebarVisible', sidebarVisible !== null ? sidebarVisible : true);
      commit('setRightbarVisible', rightbarVisible !== null ? rightbarVisible : true);
    }
  },
  getters: {
    sidebarVisible: (state) => state.sidebarVisible,
    rightbarVisible: (state) => state.rightbarVisible
  }
});

export default store;
