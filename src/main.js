import "./assets/main.css";

import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

import Home from "./components/Home.vue";
import MyProfile from "./components/MyProfile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/me", component: MyProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
