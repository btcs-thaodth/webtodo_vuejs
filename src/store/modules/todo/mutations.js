export default {
    addTodo(state, payload) {
      state.storeTodo.push(payload);
    },
    setTodo(state, payload) {
      state.storeTodo = payload;
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    },
    editTodo(state, payload){
      const item = state.storeTodo.find(item => item.id === payload.id);
      Object.assign(item, payload);
    }
  };