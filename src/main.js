import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index.js";

import "./assets/styles/css/tailwind.css";
import "./assets/styles/css/global.css";

const app = createApp(App);
app.use(router);
app.mount('#app');
