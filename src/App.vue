<script setup>
import LoginBox from "./components/LoginBox.vue";
</script>

<template>
  <div id="homescreen">
    <header>URL Shortener</header>

    <main>
      <LoginBox />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: antiquewhite;
}
</style>
