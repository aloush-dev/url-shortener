import "./assets/main.css";

import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";


import Login from "./components/Login.vue";
import Shortener from "./components/Shortener.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Shortener },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
