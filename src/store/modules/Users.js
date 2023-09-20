import axios from "axios";

export default {
  namespaced: true,
  actions: {
    usersAxios() {
      return axios.get("https://jsonplaceholder.typicode.com/users");
    },
  },
};
