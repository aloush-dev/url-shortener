<script setup>
import axios from "axios";
import { ref, watchEffect } from "vue";
import { getToken } from "../utils/utils";
import MyUrlItem from "./MyUrlItem.vue";

const myUrls = ref([]);
const token = getToken();

watchEffect(async () => {
  const response = await axios.get(
    "https://url-shortner-c0kv.onrender.com/v1/urls/user",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  myUrls.value = response.data.urls;
});
</script>

<template>
  <section id="my-urls">
    <h2>My URLs</h2>
    <ul>
      <MyUrlItem
        v-for="urlItem in myUrls"
        :key="urlItem.id"
        :urlItem="urlItem"
      />
    </ul>
  </section>
</template>

<style scoped>
#my-urls h2 {
  text-align: center;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
}
</style>
