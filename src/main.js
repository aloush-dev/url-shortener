import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const Home = { template: "<div>Home</div>" };

const routes = [{ path: "/", component: Home }];

createApp(App).mount("#app");
