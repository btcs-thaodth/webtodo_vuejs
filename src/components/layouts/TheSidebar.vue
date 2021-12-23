<template>
  <v-navigation-drawer>
    <v-list-item-title class="text"> Admin </v-list-item-title>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
      { title: "List todo", icon: "mdi-ballot", route: "/todo" },
    ],
    right: null,
  }),
};
</script>
<style scoped>
.text{
  font-family: cursive;
  text-align: center;
  font-size: x-large;
}
</style>