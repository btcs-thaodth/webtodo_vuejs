export default {
    addTodo(context, data) {
      const todoData = {
        id: new Date().toISOString(),
        title: data.title,
        description: data.desc,
        completed: false
      };
      context.commit('addTodo', todoData);
    },
    editTodo(context, data) {
      context.commit('editTodo', data);
    },
  };
  