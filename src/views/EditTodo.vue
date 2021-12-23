<template>
  <h1>Edit Todo</h1>
  <the-breadcrumbs :items="items"></the-breadcrumbs>
  <v-card class="mt-16 pa-md-4 mx-auto" max-width="644" outlined>
    <span v-for="error in errors" :key="error.value">
      <ul class="error">
        <li>{{ error }}</li>
      </ul>
    </span>
    <form @submit.prevent="submitData()">
      <v-card-title>Edit Todo</v-card-title>
      <label>Title</label>
      <v-text-field v-model="title" :value="title" @input="up"></v-text-field>
      <label>Description</label>
      <v-textarea v-model="desc" :value="desc" @input="up"></v-textarea>
      <v-card-actions class="justify-center">
        <v-btn color="primary" type="submit"> Submit </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import TheBreadcrumbs from "../components/todo/TheBreadcrumbs.vue";
export default {
  components: { TheBreadcrumbs },
  data() {
    return {
      id: null,
      title: "",
      desc: "",
      items: [
        {
          text: "Home",
          disabled: false,
          exact: true,
          href: "/",
        },
        {
          text: "List todo",
          disabled: false,
          exact: true,
          href: "/todo/add",
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    const todoId = this.id;
    const todo = this.storeTodo.filter(function (todo) {
      if (todo.id == todoId) {
        return todo;
      }
    });
    console.log(todo);
    this.id = todo[0].id;
    this.title = todo[0].title;
    this.desc = todo[0].description;
  },
  computed: {
    storeTodo() {
      return this.$store.getters["storeTodo/storeTodo"];
    },
  },
  methods: {
    validation() {
      if (this.title === "") this.errors.push("Title cannot be empty");
      if (this.desc === "") this.errors.push("Description cannot be empty");
    },
    submitData() {
      this.errors = [];
      this.validation();
      if (this.errors.length != 0) {
        return;
      }
      const todo = {
        id: this.id,
        title: this.title,
        description: this.desc,
      };
      this.$store.dispatch("storeTodo/editTodo", todo);
      this.$router.replace("/todo");
    },
  },
};
</script>
<style>
h1 {
  margin-top: 30px;
}
</style>
