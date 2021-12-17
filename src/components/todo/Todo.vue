<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <div>
            <base-button mode="flat" v-if ="!completed" @click="changeStatus(id)">Done</base-button>
            <base-button mode="flat" @click="editTodo(id)">Edit</base-button>
            <base-button mode="flat" @click="deleteTodo(id)">Delete</base-button>
        </div>
      </header>

      <p>{{ description }}</p>
    </base-card>
  </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseButton, BaseCard },
  props: ['id','title', 'description','completed'],
  inject: ['deleteTodo', 'editTodo', 'changeStatus']
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
