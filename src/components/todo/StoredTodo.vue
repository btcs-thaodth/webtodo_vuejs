<template>
  <ul>
    <todo
      v-for="res in Todo"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :completed="res.completed"
    ></todo>
  </ul>
</template>

<script>
import Todo from './Todo.vue';
export default {
  inject: ['Todo'],
  components: {
    Todo,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
