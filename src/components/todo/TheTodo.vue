<template>
  <base-card>
    <base-button :style="check('stored-todo') ? { 'background-color': '#3a0061' } : { 'background-color': '#8524B3' }"  @click="setSelectedTab('stored-todo')">Store Todo</base-button>
    <base-button :style="check('done-todo') ? { 'background-color': '#3a0061' } : { 'background-color': '#8524B3' }" @click="setSelectedTab('done-todo')">Completed</base-button>
    <base-button :style="check('processing') ? { 'background-color': '#3a0061' } : { 'background-color': '#8524B3' }" @click="setSelectedTab('processing')">Processing</base-button>
    <base-button :style="check('add-todo') ? { 'background-color': '#3a0061' } : { 'background-color': '#8524B3' }" @click="setSelectedTab('add-todo')">Add Todo</base-button>
  </base-card>
  <add-todo v-if="selectedTab === 'add-todo'"></add-todo>
  <stored-todo v-else-if="selectedTab === 'stored-todo'"></stored-todo>
  <done-todo v-else-if="selectedTab === 'done-todo'"></done-todo>
  <processing v-else-if="selectedTab === 'processing'"></processing>
  <edit-todo v-else :data="data"></edit-todo>
</template>

<script>
import StoredTodo from "./StoredTodo.vue";
import AddTodo from "./AddTodo.vue";
import EditTodo from "./EditTodo.vue";
import DoneTodo from "./DoneTodo.vue";
import Processing from "./Processing.vue";
import BaseButton from "../UI/BaseButton.vue";
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: {
    StoredTodo,
    AddTodo,
    BaseButton,
    BaseCard,
    EditTodo,
    DoneTodo,
    Processing,
  },
  data() {
    return {
      selectedTab: "stored-todo",
      data: {},
      doneTodo: [],
      process: [],
      storeTodo: [
        {
          id: 1,
          title: "Học vuejs",
          description: "Học vuejs trên udemy",
          completed: false,
        },
        {
          id: 2,
          title: "Học javascript",
          description: "Học javascript trên w3school",
          completed: false,
        },
      ],
    };
  },
  provide() {
    return {
      Todo: this.storeTodo,
      addTodo: this.addTodo,
      deleteTodo: this.removeTodo,
      editTodo: this.editTodo,
      submitEdit: this.submitEdit,
      changeStatus: this.changeStatus,
      doneTodo: this.doneTodo,
      process: this.process,
    };
  },
  mounted() {
    this.storeTodo.filter((todo) => {
      if (todo.completed) {
        this.doneTodo.unshift(todo);
      }
    });
    this.storeTodo.filter((todo) => {
      if (!todo.completed) {
        this.process.unshift(todo);
      }
    });
    this.process.reverse();
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    check(tab){
      if(this.selectedTab === tab){
        return true;
      }
      return false;
    },
    addTodo(title, description) {
      const newTodo = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        completed: false,
      };
      this.storeTodo.unshift(newTodo);
      this.selectedTab = "stored-todo";
    },
    removeTodo(todoId) {
      const todoIndex = this.storeTodo.findIndex((todo) => todo.id === todoId);
      this.storeTodo.splice(todoIndex, 1);
    },
    editTodo(todoId) {
      const todo = this.storeTodo.filter(function (todo) {
        if (todo.id === todoId) {
          return todo;
        }
      });
      this.selectedTab = "edit-todo";
      this.data = { ...todo[0] };
    },
    submitEdit(title, description) {
      const todoIndex = this.storeTodo.findIndex(
        (todo) => todo.id === this.data.id
      );
      this.storeTodo[todoIndex] = {
        ...this.storeTodo[todoIndex],
        title: title,
        description: description,
      };
      this.selectedTab = "stored-todo";
    },
    changeStatus(id) {
      const todoIndex = this.storeTodo.findIndex((todo) => todo.id === id);
      this.storeTodo[todoIndex] = {
        ...this.storeTodo[todoIndex],
        completed: true,
      };
      this.doneTodo.unshift(this.storeTodo[todoIndex]);
      const index = this.storeTodo.findIndex((todo) => todo.completed === true);
      this.process.splice(index, 1);
      this.selectedTab = "stored-todo";
    },

  },
};
</script>
