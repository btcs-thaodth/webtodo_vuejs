import { createStore } from 'vuex';

import todoModule from './modules/todo/index.js';

const store = createStore({
  modules: {
    storeTodo: todoModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;