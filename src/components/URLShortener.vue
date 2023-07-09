<script setup>
import { ref, watchEffect } from "vue";
import axios from "axios";
import { getToken } from "../utils/utils";

const url = ref("");
const urlNickname = ref("");
const myUrls = ref([]);
const token = getToken();

watchEffect(async () => {
  const response = await axios.get(
    "https://url-shortner-c0kv.onrender.com/v1/urls",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  myUrls.value = response.data.urls;
});

const postURL = () => {
  axios
    .post(
      "https://url-shortner-c0kv.onrender.com/v1/urls",
      {
        url: url.value,
        alias: urlNickname.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      url.value = "";
      urlNickname.value = "";
    })
    .catch((err) => {
      console.log("fail", err);
    });
};
</script>

<template>
  <form @submit.prevent="postURL">
    <label for="url">URL To Shorten</label>
    <input placeholder="put a url in me" v-model="url" type="url" id="url" />

    <label for="url-alias">URL Nickname</label>
    <input placeholder="gimmie a name" v-model="urlNickname" id="url-alias" />

    <button>submit</button>
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

input {
  padding: 1rem;
  text-align: center;
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
