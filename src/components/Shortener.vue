<script setup>
import URLShortener from "./URLShortener.vue";
import MyUrls from "./MyUrls.vue";
import { getToken } from "../utils/utils";

const token = getToken();
if (!token) {
  router.push("/");
}
</script>

<template>
  <URLShortener />
  <MyUrls />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
