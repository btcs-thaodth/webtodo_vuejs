<template>
  <ul>
    <the-header title="Todo App"></the-header>
    <the-todo></the-todo>
  </ul>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheTodo from './components/todo/TheTodo.vue';

export default {
  components: {
    TheHeader,
    TheTodo,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
