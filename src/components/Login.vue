<script setup>
import { getToken } from "../utils/utils";
import { useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/vue/24/solid";
const router = useRouter();

const token = getToken();
if (token) {
  router.push("/home");
}

const email = ref("");
const password = ref("");
const username = ref("");
const signin = ref(true);

const login = () => {
  if (signin.value) {
    axios
      .post("https://url-shortner-c0kv.onrender.com/v1/login", {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        router.push("/home");
        email.value = "";
        password.value = "";
      })
      .catch((err) => {
        console.log("fail", err);
      });
  }
  axios
    .post("https://url-shortner-c0kv.onrender.com/v1/login", {
      email: email.value,
      username: username.value,
      password: password.value,
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      router.push("/home");
      email.value = "";
      password.value = "";
      username.value = "";
    })
    .catch((err) => {
      console.log("fail", err);
    });
};

const toggleSignin = () => {
  signin.value = !signin.value;
};
</script>

<template>
  <div id="container">
    <form @submit.prevent="login">
      <div id="welcome">
        <h1>Welcome</h1>
      </div>
      <div class="input-container">
        <input placeholder="Email" v-model="email" type="email" id="email" />
        <EnvelopeIcon class="icon" />
      </div>

      <div v-if="!signin" class="input-container">
        <input
          placeholder="Name"
          v-model="username"
          type="text"
          id="username"
        />
        <UserIcon class="icon" />
      </div>

      <div class="input-container">
        <input
          placeholder="Password"
          v-model="password"
          type="password"
          id="password"
        />
        <KeyIcon class="icon" />
      </div>

      <button v-if="signin" type="submit">login</button>
      <button v-if="!signin" type="submit">register</button>

      <div v-if="signin" class="signup-link">
        Don't have an account?
        <button class="sign" @click="toggleSignin">register</button>
      </div>

      <div v-if="!signin" class="signup-link">
        Already have an account? <button @click="toggleSignin">login</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#welcome {
  text-align: center;
  font-weight: 900;
  padding-bottom: 2rem;
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 5rem);
  width: 100%;
  position: fixed;
}
form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  color: black;
  border-radius: 5px;
}

label {
  padding: 0.2rem;
}

input {
  padding: 1rem;
  padding-left: 50px;
  margin: 1rem;
  border: none;
  border-bottom: 1px grey solid;
}

input:focus {
  outline: none;
}

.input-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.icon {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 33%;
  left: 25px;
  opacity: 20%;
}

button {
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(98, 249, 173);
  border: none;
  color: black;
  font-size: large;
  font-weight: 900;
  border-radius: 5px;
}

.signup-link {
  text-align: center;
  font-size: small;
}

.signup-link button {
  text-align: center;
  font-size: medium;
  background-color: white;
  padding: 0;
  text-decoration: underline;
}
</style>
