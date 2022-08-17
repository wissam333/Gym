import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//fonts
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
