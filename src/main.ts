import { createApp } from "vue";
import App from "./App.vue";
import InlineSvg from "vue-inline-svg";
import router from "./router";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

app.component("inline-svg", InlineSvg);

app.mount("#app");

export default app;
