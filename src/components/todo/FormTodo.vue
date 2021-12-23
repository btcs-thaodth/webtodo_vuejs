<template>
  <form @submit.prevent="submitData()">
    <span v-for="error in errors" :key="error.value">
      <ul class="error">
        <li>{{error}}</li>
      </ul>
    </span>
    <v-card-title>Add Todo</v-card-title>
    <v-text-field label="Title" v-model="title"></v-text-field>
    <v-textarea
      label="Description"
      :rules="[
        (v) =>
          (v && v.length <= 200) ||
          'Description must be 200 characters or less',
      ]"
      v-model="desc"
    ></v-textarea>
    <v-card-actions class="justify-center">
      <v-btn color="primary" type="submit"> Submit </v-btn>
    </v-card-actions>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      errors: []
    };
  },
  methods: {
    emits: ["save-data"],
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
      const formData = {
        title: this.title,
        desc: this.desc,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>
<style scoped>
.error{
color: red;
text-align: center;
}
ul li {
list-style-type: none;
}
</style>