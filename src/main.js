import { createApp } from 'vue';
import App from "@/App.vue";
import router from "@/router/index.js";

import "@/assets/styles/css/tailwind.css";
import "@/assets/styles/css/global.css";

import {registerGlobalComponent} from "@/utils/import.js";

const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.mount('#app');
