<template>
  <div>
    <v-breadcrumbs :items="items">
      <!-- <v-breadcrumbs-item
        v-slot="item"
        exact
        :to="item.to">
        {{ item.text }}
    </v-breadcrumbs-item> -->
    </v-breadcrumbs>

  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>
