<script setup>
import { getToken } from "../utils/utils";
import { useRouter } from "vue-router";
import LoginBox from "./LoginBox.vue";
const router = useRouter();

const token = getToken();
if (token) {
  router.push("/url");
}
</script>

<template>
  <h1>Home</h1>
  <LoginBox />
</template>

<style scoped></style>


