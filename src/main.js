import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS (Optional)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'remixicon/fonts/remixicon.css'

createApp(App).use(router).mount("#app");
