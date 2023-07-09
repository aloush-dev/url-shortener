<script setup>
import axios from "axios";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  axios
    .post("https://url-shortner-c0kv.onrender.com/v1/login", {
      email: email.value,
      password: password.value,
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      email.value = "";
      password.value = "";
    })
    .catch((err) => {
      console.log("fail", err);
    });
};
</script>

<template>
  <form @submit.prevent="login">
    <label for="email">email </label>
    <input v-model="email" type="email" id="email" />

    <label for="password">password </label>
    <input v-model="password" type="password" id="password" />

    <button type="submit">login</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.1rem white solid;
  padding: 2rem;
}

label {
  display: flex;
  flex-direction: column;
  text-align: center;
}

input {
  padding: 1rem;
}

button {
  padding: 1rem;
  margin: 1rem;
  background-color: #00a1e4;
  border: none;
  color: white;
  font-weight: 900;
}
</style>
