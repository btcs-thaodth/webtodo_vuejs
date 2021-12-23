import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      storeTodo: [
        {
          id: "2021-12-23T06:01:10.914Z",
          title: "Learn vuejs",
          description: "Learn vuejs on udemy. Do practice exercises",
          completed: false,
        },
        {
          id: "2021-12-24T06:01:10.914Z",
          title: "Learn js",
          description: "Learn vuejs on w3chool. Do practice exercises",
          completed: true,
        },
        {
          id: "2021-2-23T06:01:10.914Z",
          title: "abc",
          description: "ajhd",
          completed: false,
        },
        {
          id: "2022-12-23T06:01:10.914Z",
          title: "Learn Japanese",
          description: "Learn vocabulary, grammar",
          completed: true,
        },
        {
          id: "2011-12-23T06:01:11.914Z",
          title: "Learn Vietnamese",
          description: "Read stories, watch movies",
          completed: false,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
