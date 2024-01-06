import axiosPlugin from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

createApp(App).use(router).use(axiosPlugin).mount("#app");