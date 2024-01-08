import axiosPlugin from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).use(axiosPlugin).mount("#app");
