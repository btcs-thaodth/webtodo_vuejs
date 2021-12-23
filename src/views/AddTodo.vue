<template>
  <h1>Create New Todo</h1>
  <the-breadcrumbs :items="items"></the-breadcrumbs>
  <v-card class="mt-16 pa-md-4 mx-auto" max-width="644" outlined>
    <form-todo @save-data="saveData"></form-todo>
  </v-card>
</template>
<script>
import FormTodo from "../components/todo/FormTodo.vue";
import TheBreadcrumbs from "../components/todo/TheBreadcrumbs.vue";
export default {
  components: { FormTodo, TheBreadcrumbs },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/home",
      },
      {
        text: "List todo",
        disabled: false,
        href: "/todo",
      },
      {
        text: "Add todo",
        disabled: true,
        href: "",
      },
    ],
  }),
  methods: {
    emits: ["save-data"],
    saveData(data) {
      this.$store.dispatch("storeTodo/addTodo", data);
      this.$router.replace("/todo");
    },
  },
};
</script>
