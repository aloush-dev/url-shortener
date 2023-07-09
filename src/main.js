import "./assets/main.css";

import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

import Home from "./components/Home.vue";
import Shortener from "./components/Shortener.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/url", component: Shortener },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
