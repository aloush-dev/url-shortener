<script setup>
import LoginBox from "./components/LoginBox.vue";
import URLShortener from "./components/URLShortener.vue";

const token = localStorage.getItem("token");
</script>

<template>
  <header>URL Shortener</header>
  <router-view></router-view>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #04e762;
  color: black;
  font-weight: 600;
  font-size: 2rem;
}
</style>
