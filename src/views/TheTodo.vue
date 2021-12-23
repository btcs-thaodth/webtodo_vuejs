<template>
  <h1>List todo</h1>
  <the-breadcrumbs :items="items"></the-breadcrumbs>
  <v-col class="text-right">
    <router-link to="/todo/add"
      ><v-btn variant="outlined" color="primary">
        Create new todo
      </v-btn></router-link
    >
  </v-col>
  <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>Time</th>
        <th>Title</th>
        <th>Description</th>
        <th>Completed</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in storeTodo" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.description }}</td>
        <td v-if="todo.completed" class="done">Done</td>
        <td v-else class="process">Processing</td>
        <td>
          <v-btn v-if="!todo.completed" flat icon @click="changeStatus(todo.id)">
            <v-icon icon="mdi-check"></v-icon>
          </v-btn>
          <v-btn v-else flat icon @click="changeStatus(todo.id)">
            <v-icon icon="mdi-reply"></v-icon>
          </v-btn>
          <v-btn flat icon @click="editTodo(todo.id)">
            <v-icon icon="mdi-pencil"></v-icon>
          </v-btn>
          <v-btn flat icon @click="removeTodo(todo.id)">
            <v-icon icon="mdi-delete"></v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TheBreadcrumbs from '../components/todo/TheBreadcrumbs.vue';
//Bootstrap and jQuery librarie

export default {
  components: { TheBreadcrumbs },
  data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          exact: true,
          to: '/',
        },
        {
          text: 'List todo',
          disabled: true,
          exact: true,
          to: '/todo',
        }
      ],
    }),
  computed: {
    storeTodo() {
      return this.$store.getters["storeTodo/storeTodo"];
    },
  },
  methods: {
    removeTodo(todoId) {
      const todoIndex = this.storeTodo.findIndex((todo) => todo.id === todoId);
      this.storeTodo.splice(todoIndex, 1);
    },
    changeStatus(todoId) {
      const todoIndex = this.storeTodo.findIndex((todo) => todo.id === todoId);
      this.storeTodo[todoIndex] = {
        ...this.storeTodo[todoIndex],
        completed: !this.storeTodo[todoIndex].completed,
      };
    },
    editTodo(todoId) {
      this.$router.push({ name: "EditTodo", params: { id: todoId } });
    },
  },
};
</script>
<style scoped>
.done{
  color: forestgreen;
}
.process{
  color: chocolate;
}
</style>